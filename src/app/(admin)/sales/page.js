"use client";

import { useEffect, useState, useMemo } from "react";
import { ChartBar } from "griddy-icons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { supabase } from "@/lib/supabase";
import { ProductSoldModal } from "@/components/modal/productSold";
import { downloadSalesExcel } from "@/components/salesExcelExport";

export default function AdminSalesPage() {
  const [period, setPeriod] = useState("today");
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [orderTypeFilter, setOrderTypeFilter] = useState("all");
  const [orders, setOrders] = useState([]);
  const [topItems, setTopItems] = useState([]);
  const [summary, setSummary] = useState({ count: 0, total: 0, discount: 0 });
  const [paymentBreakdown, setPaymentBreakdown] = useState({ cash: 0, card: 0, ewallet: 0 });
  const [orderTypeBreakdown, setOrderTypeBreakdown] = useState({ dine_in: 0, takeout: 0, delivery: 0 });
  const [byCategory, setByCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productSoldModalOpen, setProductSoldModalOpen] = useState(false);
  const [pageByPeriod, setPageByPeriod] = useState({ today: 1, week: 1, month: 1 });
  const [showDownloadDropdown, setShowDownloadDropdown] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [userRole, setUserRole] = useState("manager");
  const [orderActionModal, setOrderActionModal] = useState(null);
  const [orderActionReason, setOrderActionReason] = useState("");
  const [orderActionPassword, setOrderActionPassword] = useState("");
  const [orderActionError, setOrderActionError] = useState("");
  const [orderActionProcessing, setOrderActionProcessing] = useState(false);

  const TOP_ITEMS_PER_PAGE = 20;
  const canVoidRefund = ["admin", "manager"].includes(userRole);
  const currentPage = pageByPeriod[period] ?? 1;
  const topItemsTotalPages = Math.max(1, Math.ceil(topItems.length / TOP_ITEMS_PER_PAGE));
  const paginatedTopItems = topItems.slice(
    (currentPage - 1) * TOP_ITEMS_PER_PAGE,
    currentPage * TOP_ITEMS_PER_PAGE
  );

  useEffect(() => {
    async function loadRole() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user?.id) return;
      const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", user.id).maybeSingle();
      if (profile?.role) setUserRole(profile.role);
    }
    loadRole();
  }, []);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const from = new Date();
      if (period === "today") from.setHours(0, 0, 0, 0);
      else if (period === "week") from.setDate(from.getDate() - 7);
      else if (period === "month") from.setMonth(from.getMonth() - 1);
      const fromIso = from.toISOString();

      const { data: ordersData } = await supabase
        .from("orders")
        .select("id, total, created_at, status, payment_method, order_type, discount_amount, void_reason, refund_reason")
        .in("status", ["completed", "refunded", "voided"])
        .gte("created_at", fromIso)
        .order("created_at", { ascending: false });
      const filteredOrders = (ordersData || []).filter((o) => {
        const paymentOk = paymentFilter === "all" || o.payment_method === paymentFilter;
        const orderTypeOk = orderTypeFilter === "all" || o.order_type === orderTypeFilter;
        return paymentOk && orderTypeOk;
      });
      setOrders(filteredOrders);

      const completedOrders = filteredOrders.filter((o) => o.status === "completed");
      const count = completedOrders.length;
      const total = completedOrders.reduce((s, o) => s + Number(o.total), 0);
      const discount = completedOrders.reduce((s, o) => s + Number(o.discount_amount || 0), 0);
      setSummary({ count, total, discount });
      setPaymentBreakdown({
        cash: completedOrders.filter((o) => o.payment_method === "cash").length,
        card: completedOrders.filter((o) => o.payment_method === "card").length,
        ewallet: completedOrders.filter((o) => o.payment_method === "ewallet").length,
      });
      setOrderTypeBreakdown({
        dine_in: completedOrders.filter((o) => o.order_type === "dine_in").length,
        takeout: completedOrders.filter((o) => o.order_type === "takeout").length,
        delivery: completedOrders.filter((o) => o.order_type === "delivery").length,
      });

      const [
        { data: itemsData },
        { data: productsData },
        { data: categoriesData },
      ] = await Promise.all([
        supabase.from("order_items").select("order_id, product_id, product_name, quantity, line_total").gte("created_at", fromIso),
        supabase.from("products").select("id, category_id"),
        supabase.from("categories").select("id, name").order("sort_order"),
      ]);

      const productToCategory = {};
      (productsData || []).forEach((p) => {
        productToCategory[p.id] = p.category_id;
      });
      const categoryNames = {};
      (categoriesData || []).forEach((c) => {
        categoryNames[c.id] = c.name;
      });

      const allowedOrderIds = new Set(completedOrders.map((o) => o.id));
      const filteredItems = (itemsData || []).filter((row) => allowedOrderIds.has(row.order_id));

      const byName = {};
      const categoryMap = {};
      filteredItems.forEach((row) => {
        if (!byName[row.product_name]) byName[row.product_name] = { name: row.product_name, quantity: 0, revenue: 0 };
        byName[row.product_name].quantity += row.quantity;
        byName[row.product_name].revenue += Number(row.line_total);

        const catId = productToCategory[row.product_id] || null;
        const catName = catId ? categoryNames[catId] || "Uncategorized" : "Uncategorized";
        if (!categoryMap[catName]) categoryMap[catName] = { products: {}, total: 0 };
        if (!categoryMap[catName].products[row.product_name]) categoryMap[catName].products[row.product_name] = { quantity: 0, revenue: 0 };
        categoryMap[catName].products[row.product_name].quantity += row.quantity;
        categoryMap[catName].products[row.product_name].revenue += Number(row.line_total);
        categoryMap[catName].total += Number(row.line_total);
      });
      setTopItems(Object.values(byName).sort((a, b) => b.revenue - a.revenue));

      const categoryList = Object.entries(categoryMap).map(([name, data]) => ({
        name,
        products: Object.entries(data.products).map(([pName, p]) => ({ name: pName, quantity: p.quantity, revenue: p.revenue })),
        total: data.total,
      })).sort((a, b) => b.total - a.total);
      setByCategory(categoryList);
      setLoading(false);
    }
    load();
  }, [period, paymentFilter, orderTypeFilter, reloadKey]);

  useEffect(() => {
    setPageByPeriod((prev) => {
      const maxPage = Math.max(1, topItemsTotalPages);
      const current = prev[period] ?? 1;
      if (current <= maxPage) return prev;
      return { ...prev, [period]: maxPage };
    });
  }, [period, topItemsTotalPages]);

  const chartData = useMemo(() => {
    const byDate = {};
    orders
      .filter((o) => o.status !== "voided")
      .forEach((o) => {
      const d = new Date(o.created_at);
      const key = d.toISOString().slice(0, 10);
      if (!byDate[key]) byDate[key] = { date: key, label: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }), revenue: 0, orders: 0 };
      byDate[key].revenue += Number(o.total);
      byDate[key].orders += 1;
      });
    return Object.values(byDate).sort((a, b) => a.date.localeCompare(b.date));
  }, [orders]);

  async function restockOrderItems(orderId, reason, changeType) {
    const { data: authData } = await supabase.auth.getUser();
    const actorUserId = authData?.user?.id ?? null;
    const { data: items } = await supabase
      .from("order_items")
      .select("product_id, quantity, product_name")
      .eq("order_id", orderId);
    for (const it of items || []) {
      const { data: inv } = await supabase.from("inventory").select("quantity").eq("product_id", it.product_id).maybeSingle();
      const before = Number(inv?.quantity ?? 0);
      const change = Math.abs(Number(it.quantity || 0));
      const after = before + change;
      await supabase.from("inventory").upsert(
        { product_id: it.product_id, quantity: after, low_stock_threshold: 50, updated_at: new Date().toISOString() },
        { onConflict: "product_id" }
      );
      await supabase.from("inventory_adjustments").insert({
        product_id: it.product_id,
        order_id: orderId,
        actor_user_id: actorUserId,
        change_type: changeType,
        quantity_before: before,
        quantity_change: change,
        quantity_after: after,
        reason,
        metadata: { product_name: it.product_name },
      });
    }
  }

  async function handleConfirmOrderAction() {
    if (!orderActionModal?.order) return;
    if (!orderActionReason.trim()) {
      setOrderActionError("Reason is required.");
      return;
    }
    if (!orderActionPassword.trim()) {
      setOrderActionError("Admin/manager password is required.");
      return;
    }
    setOrderActionError("");
    setOrderActionProcessing(true);
    try {
      const order = orderActionModal.order;
      const { data: userResp } = await supabase.auth.getUser();
      const user = userResp?.user;
      if (!user?.email) {
        setOrderActionError("Could not validate current user.");
        return;
      }
      const { error: passErr } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: orderActionPassword.trim(),
      });
      if (passErr) {
        setOrderActionError("Incorrect password.");
        return;
      }
      if (orderActionModal.type === "void") {
        await restockOrderItems(order.id, orderActionReason.trim(), "void");
        await supabase
          .from("orders")
          .update({ status: "voided", void_reason: orderActionReason.trim() })
          .eq("id", order.id);
      } else if (orderActionModal.type === "refund") {
        const { data: authData } = await supabase.auth.getUser();
        await restockOrderItems(order.id, orderActionReason.trim(), "refund");
        await supabase
          .from("orders")
          .update({
            status: "refunded",
            refund_reason: orderActionReason.trim(),
            refunded_at: new Date().toISOString(),
            refunded_by: authData?.user?.id ?? null,
          })
          .eq("id", order.id);
      }
      setOrderActionModal(null);
      setOrderActionReason("");
      setOrderActionPassword("");
      setOrderActionError("");
      setReloadKey((k) => k + 1);
    } finally {
      setOrderActionProcessing(false);
    }
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <ChartBar size={28} className="text-stone-700" />
        <h1 className="text-2xl font-bold text-stone-800">Sales</h1>
        <span className="rounded bg-stone-100 px-2 py-0.5 text-xs font-medium uppercase text-stone-700">{userRole}</span>
      </div>
      <p className="mt-1 text-stone-600">View sales and calculate totals by period.</p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {["today", "week", "month"].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPeriod(p)}
              className={"rounded-lg px-4 py-2 text-sm font-medium capitalize " + (period === p ? "bg-amber-200 text-amber-900" : "bg-stone-200 text-stone-700 hover:bg-stone-300")}
            >
              {p}
            </button>
          ))}
          <select
            value={orderTypeFilter}
            onChange={(e) => setOrderTypeFilter(e.target.value)}
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700"
          >
            <option value="all">All order types</option>
            <option value="dine_in">Dine-in</option>
            <option value="takeout">Takeout</option>
            <option value="delivery">Delivery</option>
          </select>
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700"
          >
            <option value="all">All payments</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="ewallet">E-wallet</option>
          </select>
        </div>
        {!loading && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowDownloadDropdown(!showDownloadDropdown)}
              className="flex items-center gap-1 rounded-lg border border-green-600 bg-green-50 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-100"
            >
              Download as Excel
              <span className="text-xs">▾</span>
            </button>
            {showDownloadDropdown && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowDownloadDropdown(false)} aria-hidden />
                <div className="absolute right-0 top-full z-20 mt-1 min-w-[200px] rounded-lg border border-stone-200 bg-white py-1 shadow-lg">
                  <button type="button" onClick={() => { setShowDownloadDropdown(false); downloadSalesExcel("today"); }} className="block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100">
                    Download today&apos;s sales
                  </button>
                  <button type="button" onClick={() => { setShowDownloadDropdown(false); downloadSalesExcel("week"); }} className="block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100">
                    Download this week&apos;s sales
                  </button>
                  <button type="button" onClick={() => { setShowDownloadDropdown(false); downloadSalesExcel("month"); }} className="block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100">
                    Download this month&apos;s sales
                  </button>
                  <button type="button" onClick={() => { setShowDownloadDropdown(false); downloadSalesExcel("all"); }} className="block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100">
                    Download all sales
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {loading ? (
        <p className="mt-6 text-stone-500">Loading…</p>
      ) : (
        <>
          <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-stone-800 mb-4">Sales by day</h2>
            {chartData.length > 0 ? (
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-stone-200" />
                    <XAxis dataKey="label" tick={{ fontSize: 12 }} className="text-stone-600" />
                    <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v}`} />
                    <Tooltip formatter={(value) => `$${Number(value).toFixed(2)}`} labelFormatter={(label) => label} />
                    <Bar dataKey="revenue" fill="rgb(245 158 11)" radius={[4, 4, 0, 0]} name="Revenue" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="text-stone-500 py-8 text-center">No sales in this period.</p>
            )}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-stone-800">Sales summary</h2>
              <p className="mt-2 text-3xl font-bold text-amber-700">{summary.count} orders</p>
              <p className="text-2xl font-mono text-stone-700">${summary.total.toFixed(2)} revenue</p>
              <p className="text-sm text-stone-500">Discounts: ${summary.discount.toFixed(2)}</p>
              <p className="mt-1 text-sm text-stone-500">
                Avg ticket: ${summary.count > 0 ? (summary.total / summary.count).toFixed(2) : "0.00"}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-stone-800">Recent orders</h2>
              <ul className="mt-2 max-h-72 space-y-2 overflow-y-auto text-sm">
                {orders.slice(0, 10).map((o) => (
                  <li key={o.id} className="rounded border border-stone-100 p-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-stone-600">{new Date(o.created_at).toLocaleString()}</span>
                      <span className="text-stone-500 capitalize">{(o.order_type || "takeout").replace("_", " ")}</span>
                      <span className="text-stone-500 uppercase">{o.payment_method || "cash"}</span>
                      <span className={`rounded px-2 py-0.5 text-xs font-medium ${o.status === "completed" ? "bg-green-100 text-green-800" : o.status === "voided" ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"}`}>
                        {o.status}
                      </span>
                      <span className="font-mono">${Number(o.total).toFixed(2)}</span>
                    </div>
                    {canVoidRefund && o.status === "completed" && (
                      <div className="mt-2 flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setOrderActionModal({ type: "void", order: o });
                            setOrderActionReason("");
                            setOrderActionPassword("");
                            setOrderActionError("");
                          }}
                          className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800 hover:bg-red-200"
                        >
                          Void
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setOrderActionModal({ type: "refund", order: o });
                            setOrderActionReason("");
                            setOrderActionPassword("");
                            setOrderActionError("");
                          }}
                          className="rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800 hover:bg-amber-200"
                        >
                          Refund
                        </button>
                      </div>
                    )}
                    {o.status === "voided" && o.void_reason && (
                      <p className="mt-1 text-xs text-red-700">Reason: {o.void_reason}</p>
                    )}
                    {o.status === "refunded" && o.refund_reason && (
                      <p className="mt-1 text-xs text-amber-700">Reason: {o.refund_reason}</p>
                    )}
                  </li>
                ))}
                {orders.length === 0 && <li className="text-stone-500">No orders in this period.</li>}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-stone-800">Payment mix</h2>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between"><span className="text-stone-600">Cash</span><span className="font-medium text-stone-800">{paymentBreakdown.cash}</span></div>
                <div className="flex items-center justify-between"><span className="text-stone-600">Card</span><span className="font-medium text-stone-800">{paymentBreakdown.card}</span></div>
                <div className="flex items-center justify-between"><span className="text-stone-600">E-wallet</span><span className="font-medium text-stone-800">{paymentBreakdown.ewallet}</span></div>
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-stone-800">Order type mix</h2>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between"><span className="text-stone-600">Dine-in</span><span className="font-medium text-stone-800">{orderTypeBreakdown.dine_in}</span></div>
                <div className="flex items-center justify-between"><span className="text-stone-600">Takeout</span><span className="font-medium text-stone-800">{orderTypeBreakdown.takeout}</span></div>
                <div className="flex items-center justify-between"><span className="text-stone-600">Delivery</span><span className="font-medium text-stone-800">{orderTypeBreakdown.delivery}</span></div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-stone-800">Products sold by category</h2>
            <p className="mt-1 text-sm text-stone-500">Quantity and total amount per product, grouped by category.</p>
            <button
              type="button"
              onClick={() => setProductSoldModalOpen(true)}
              className="mt-4 rounded-xl bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600"
            >
              View products by category
            </button>
          </div>

          <ProductSoldModal
            open={productSoldModalOpen}
            onClose={() => setProductSoldModalOpen(false)}
            byCategory={byCategory}
            periodLabel={period === "today" ? "Today" : period === "week" ? "Last 7 days" : "Last 30 days"}
          />

          <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-stone-800">Top selling items (by revenue)</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="pb-2 font-semibold text-stone-800">Product</th>
                    <th className="pb-2 font-semibold text-stone-800">Units sold</th>
                    <th className="pb-2 font-semibold text-stone-800">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTopItems.map((item) => (
                    <tr key={item.name} className="border-b border-stone-100">
                      <td className="py-2 font-medium text-stone-800">{item.name}</td>
                      <td className="py-2 font-mono text-stone-600">{item.quantity}</td>
                      <td className="py-2 font-mono text-stone-700">${item.revenue.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {topItems.length === 0 && <p className="py-6 text-center text-stone-500">No item data for this period.</p>}
              {topItems.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-stone-200 pt-3 text-sm">
                  <span className="text-stone-600">
                    Showing {(currentPage - 1) * TOP_ITEMS_PER_PAGE + 1}–{Math.min(currentPage * TOP_ITEMS_PER_PAGE, topItems.length)} of {topItems.length} items
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setPageByPeriod((prev) => ({
                          ...prev,
                          [period]: Math.max(1, (prev[period] ?? 1) - 1),
                        }))
                      }
                      disabled={currentPage <= 1}
                      className="rounded-lg border border-stone-300 px-3 py-1.5 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span className="font-medium text-stone-800">
                      Page {currentPage} of {topItemsTotalPages}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setPageByPeriod((prev) => ({
                          ...prev,
                          [period]: Math.min(topItemsTotalPages, (prev[period] ?? 1) + 1),
                        }))
                      }
                      disabled={currentPage >= topItemsTotalPages}
                      className="rounded-lg border border-stone-300 px-3 py-1.5 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {orderActionModal && (
            <div className="fixed inset-0 z-[70] flex items-center justify-center bg-stone-900/50 p-4">
              <div className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-5 shadow-xl">
                <h3 className="font-semibold text-stone-800">
                  {orderActionModal.type === "void" ? "Void order" : "Refund order"}
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                  Provide a reason to {orderActionModal.type} order #{orderActionModal.order.id.slice(0, 8)}.
                </p>
                <textarea
                  value={orderActionReason}
                  onChange={(e) => setOrderActionReason(e.target.value)}
                  rows={3}
                  placeholder="Reason"
                  className="mt-3 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
                <input
                  type="password"
                  value={orderActionPassword}
                  onChange={(e) => setOrderActionPassword(e.target.value)}
                  placeholder="Confirm password"
                  autoComplete="current-password"
                  className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
                {orderActionError && <p className="mt-2 text-sm text-red-600">{orderActionError}</p>}
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setOrderActionModal(null);
                      setOrderActionReason("");
                      setOrderActionPassword("");
                      setOrderActionError("");
                    }}
                    className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-100"
                    disabled={orderActionProcessing}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmOrderAction}
                    className="rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-700 disabled:opacity-50"
                    disabled={orderActionProcessing}
                  >
                    {orderActionProcessing ? "Processing…" : "Confirm"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
