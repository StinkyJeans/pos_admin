"use client";

import { useEffect, useMemo, useState } from "react";
import { Archive } from "griddy-icons";
import { supabase } from "@/lib/supabase";

export default function AdminAuditPage() {
  const [logs, setLogs] = useState([]);
  const [productsById, setProductsById] = useState({});
  const [loading, setLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [{ data: logRows }, { data: products }] = await Promise.all([
        supabase
          .from("inventory_adjustments")
          .select("id, product_id, order_id, change_type, quantity_before, quantity_change, quantity_after, reason, metadata, created_at")
          .order("created_at", { ascending: false })
          .limit(500),
        supabase.from("products").select("id, name, barcode").order("name"),
      ]);
      const map = {};
      (products || []).forEach((p) => {
        map[p.id] = p;
      });
      setProductsById(map);
      setLogs(logRows || []);
      setLoading(false);
    }
    load();
  }, []);

  const filteredLogs = useMemo(() => {
    const term = search.trim().toLowerCase();
    return logs.filter((log) => {
      const typeOk = typeFilter === "all" || log.change_type === typeFilter;
      if (!typeOk) return false;
      if (!term) return true;
      const product = productsById[log.product_id];
      const haystack = [
        product?.name,
        product?.barcode,
        log?.reason,
        log?.change_type,
        log?.order_id,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [logs, productsById, search, typeFilter]);

  return (
    <div>
      <div className="flex items-center gap-2">
        <Archive size={28} className="text-stone-700" />
        <h1 className="text-2xl font-bold text-stone-800">Audit Tracking</h1>
      </div>
      <p className="mt-1 text-stone-600">Complete inventory adjustment history for accountability and traceability.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by product, barcode, reason, order id"
          className="w-full max-w-md rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700"
        >
          <option value="all">All types</option>
          <option value="sale">Sale</option>
          <option value="refund">Refund</option>
          <option value="void">Void</option>
          <option value="manual_adjustment">Manual adjustment</option>
          <option value="stock_in">Stock in</option>
          <option value="stock_out">Stock out</option>
        </select>
      </div>

      <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-4">
        {loading ? (
          <p className="py-10 text-center text-stone-500">Loading audit logs…</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-stone-200">
                <tr>
                  <th className="pb-2 font-semibold text-stone-800">Date</th>
                  <th className="pb-2 font-semibold text-stone-800">Product</th>
                  <th className="pb-2 font-semibold text-stone-800">Barcode</th>
                  <th className="pb-2 font-semibold text-stone-800">Type</th>
                  <th className="pb-2 font-semibold text-stone-800">Before</th>
                  <th className="pb-2 font-semibold text-stone-800">Change</th>
                  <th className="pb-2 font-semibold text-stone-800">After</th>
                  <th className="pb-2 font-semibold text-stone-800">Order</th>
                  <th className="pb-2 font-semibold text-stone-800">Reason</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => {
                  const product = productsById[log.product_id];
                  return (
                    <tr key={log.id} className="border-b border-stone-100">
                      <td className="py-2 text-stone-600">{new Date(log.created_at).toLocaleString()}</td>
                      <td className="py-2 font-medium text-stone-800">{product?.name || "Unknown product"}</td>
                      <td className="py-2 font-mono text-stone-600">{product?.barcode || "—"}</td>
                      <td className="py-2 capitalize text-stone-600">{String(log.change_type || "").replace("_", " ")}</td>
                      <td className="py-2 font-mono text-stone-600">{Number(log.quantity_before).toFixed(2)}</td>
                      <td className={`py-2 font-mono ${Number(log.quantity_change) >= 0 ? "text-green-700" : "text-red-700"}`}>
                        {Number(log.quantity_change).toFixed(2)}
                      </td>
                      <td className="py-2 font-mono text-stone-700">{Number(log.quantity_after).toFixed(2)}</td>
                      <td className="py-2 font-mono text-stone-500">{log.order_id ? String(log.order_id).slice(0, 8) : "—"}</td>
                      <td className="py-2 text-stone-600">{log.reason || "—"}</td>
                    </tr>
                  );
                })}
                {filteredLogs.length === 0 && (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-stone-500">
                      No audit logs found for the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

