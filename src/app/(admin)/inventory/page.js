"use client";

import { useRef, useEffect, useState } from "react";
import { Package, Edit, Trash, Archive, RefreshCcw } from "griddy-icons";
import { supabase } from "@/lib/supabase";
import { DeleteHistoryModal } from "@/components/modal/deleteHistory";
import { LowStockItemsModal } from "@/components/modal/lowStackItems";

const DEFAULT_LOW_STOCK_THRESHOLD = 50;

export default function AdminInventoryPage() {
  const barcodeInputRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inventory, setInventory] = useState({});
  const [loading, setLoading] = useState(true);
  const [lookupResult, setLookupResult] = useState(null);
  const [lookupError, setLookupError] = useState("");
  const [lookupEditing, setLookupEditing] = useState(false);
  const [lookupEditQty, setLookupEditQty] = useState("");
  const [lookupEditPrice, setLookupEditPrice] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editQty, setEditQty] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [lowStockEditingId, setLowStockEditingId] = useState(null);
  const [lowStockEditQty, setLowStockEditQty] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newProduct, setNewProduct] = useState({ name: "", barcode: "", price: "", cost: "", category_id: "", quantity: "0", low_stock_threshold: String(DEFAULT_LOW_STOCK_THRESHOLD) });
  const [categoryMessage, setCategoryMessage] = useState(null);
  const [productMessage, setProductMessage] = useState(null);
  const [editMessage, setEditMessage] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [passwordModal, setPasswordModal] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showLowStockModal, setShowLowStockModal] = useState(false);
  const [showDeleteHistory, setShowDeleteHistory] = useState(false);
  const [inactiveProducts, setInactiveProducts] = useState([]);
  const [passwordModalProcessing, setPasswordModalProcessing] = useState(false);
  const [scrollToProductId, setScrollToProductId] = useState(null);
  const [userRole, setUserRole] = useState("manager");

  const PER_PAGE = 50;
  const totalPages = Math.max(1, Math.ceil(products.length / PER_PAGE));
  const paginatedProducts = products.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  async function load() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.id) {
      const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", user.id).maybeSingle();
      setUserRole(profile?.role || "manager");
    }
    const [prodRes, invRes, catRes, inactiveRes] = await Promise.all([
      supabase.from("products").select("*, categories(name)").eq("is_active", true).order("name"),
      supabase.from("inventory").select("*"),
      supabase.from("categories").select("*").order("sort_order"),
      supabase.from("products").select("*, categories(name)").eq("is_active", false).order("updated_at", { ascending: false }),
    ]);
    if (prodRes.data) setProducts(prodRes.data);
    if (catRes.data) setCategories(catRes.data);
    if (inactiveRes.data) setInactiveProducts(inactiveRes.data);
    const invMap = {};
    (invRes.data || []).forEach((i) => (invMap[i.product_id] = i));
    setInventory(invMap);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (page > totalPages && totalPages >= 1) setPage(1);
  }, [page, totalPages]);

  useEffect(() => {
    barcodeInputRef.current?.focus();
  }, [lookupResult, lookupError]);

  useEffect(() => {
    if (!scrollToProductId) return;
    const id = scrollToProductId;
    const timer = setTimeout(() => {
      const el = document.getElementById(`product-row-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      setScrollToProductId(null);
    }, 100);
    return () => clearTimeout(timer);
  }, [scrollToProductId, page]);

  function getInv(productId) {
    return inventory[productId];
  }

  function clearAllMessages() {
    setCategoryMessage(null);
    setProductMessage(null);
    setEditMessage(null);
  }

  useEffect(() => {
    const value = searchQuery.trim();
    if (!value) {
      setLookupResult(null);
      setLookupError("");
      setLookupEditing(false);
      return;
    }

    const timer = setTimeout(async () => {
      setLookupError("");
      setLookupResult(null);
      let product = null;
      const { data: byBarcode } = await supabase.from("products").select("*, categories(name)").eq("barcode", value).eq("is_active", true).maybeSingle();
      product = byBarcode;
      if (!product) {
        const { data: byName } = await supabase
          .from("products")
          .select("*, categories(name)")
          .eq("is_active", true)
          .ilike("name", `%${value}%`)
          .order("name")
          .limit(1);
        product = byName?.[0] ?? null;
      }
      if (!product) {
        setLookupError("No product found.");
        return;
      }
      const { data: inv } = await supabase.from("inventory").select("quantity, low_stock_threshold").eq("product_id", product.id).maybeSingle();
      setLookupResult({
        ...product,
        quantity: inv ? Number(inv.quantity) : 0,
        low_stock_threshold: inv ? Number(inv.low_stock_threshold) : DEFAULT_LOW_STOCK_THRESHOLD,
      });
      setLookupEditing(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  async function saveInventory(productId, quantity, reason = "Manual inventory edit") {
    const qty = parseFloat(quantity) ?? 0;
    const prevQty = Number(getInv(productId)?.quantity ?? 0);
    const { error } = await supabase.from("inventory").upsert(
      {
        product_id: productId,
        quantity: qty,
        low_stock_threshold: DEFAULT_LOW_STOCK_THRESHOLD,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "product_id" }
    );
    if (error) {
      console.error("Inventory save failed:", error?.message ?? error);
      return error?.message ?? "Failed to update inventory.";
    }
    if (qty !== prevQty) {
      const { data: auth } = await supabase.auth.getUser();
      await supabase.from("inventory_adjustments").insert({
        product_id: productId,
        actor_user_id: auth?.user?.id ?? null,
        change_type: "manual_adjustment",
        quantity_before: prevQty,
        quantity_change: qty - prevQty,
        quantity_after: qty,
        reason,
      });
    }
    setInventory((prev) => ({
      ...prev,
      [productId]: {
        product_id: productId,
        quantity: qty,
        low_stock_threshold: DEFAULT_LOW_STOCK_THRESHOLD,
      },
    }));
    setEditingId(null);
    load();
    return null;
  }

  async function savePrice(productId, price) {
    const { error } = await supabase.from("products").update({ price: parseFloat(price) || 0, updated_at: new Date().toISOString() }).eq("id", productId);
    if (error) {
      console.error("Price save failed:", error?.message ?? error);
      return error?.message ?? "Failed to update price.";
    }
    setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, price: parseFloat(price) || 0 } : p)));
    setEditingId(null);
    return null;
  }

  async function handleSaveEdit(p) {
    clearAllMessages();
    const invError = await saveInventory(p.id, editQty, "Manual table edit");
    if (invError) {
      setEditMessage({ type: "error", text: invError });
      return;
    }
    const priceError = await savePrice(p.id, editPrice);
    if (priceError) {
      setEditMessage({ type: "error", text: priceError });
      return;
    }
    setEditMessage({ type: "success", text: "Product updated successfully." });
    setTimeout(() => setEditMessage(null), 4000);
  }

  function startEdit(p) {
    const inv = getInv(p.id);
    clearAllMessages();
    setEditingId(p.id);
    setEditQty(inv?.quantity ?? "");
    setEditPrice(p.price ?? "");
    setLookupEditing(false);
  }

  function startLookupEdit(product) {
    if (!product) return;
    const qty = product.quantity ?? getInv(product.id)?.quantity ?? "";
    clearAllMessages();
    setEditingId(null);
    setLookupEditing(true);
    setLookupEditQty(qty === "" ? "" : String(qty));
    setLookupEditPrice(product.price == null ? "" : String(product.price));
  }

  async function handleSaveLookupEdit() {
    if (!lookupResult) return;
    clearAllMessages();
    const invError = await saveInventory(lookupResult.id, lookupEditQty, "Lookup card edit");
    if (invError) {
      setEditMessage({ type: "error", text: invError });
      return;
    }
    const priceError = await savePrice(lookupResult.id, lookupEditPrice);
    if (priceError) {
      setEditMessage({ type: "error", text: priceError });
      return;
    }
    setLookupEditing(false);
    setLookupResult((prev) =>
      prev && {
        ...prev,
        price: parseFloat(lookupEditPrice) || 0,
        quantity: parseFloat(lookupEditQty) || 0,
        low_stock_threshold: DEFAULT_LOW_STOCK_THRESHOLD,
      }
    );
    setEditMessage({ type: "success", text: "Product updated successfully." });
    setTimeout(() => setEditMessage(null), 4000);
  }

  function openPasswordModal(action, product, from = "table") {
    if ((action === "delete" || action === "deletePermanent" || action === "restore") && !canManageCatalog) {
      setEditMessage({ type: "error", text: "Only admin can delete or restore products." });
      setTimeout(() => setEditMessage(null), 3000);
      return;
    }
    if ((action === "edit" || action === "lowStockEdit") && !canEditStockPrice) {
      setEditMessage({ type: "error", text: "You do not have permission to edit inventory." });
      setTimeout(() => setEditMessage(null), 3000);
      return;
    }
    clearAllMessages();
    setPasswordModal({ action, product, from });
    setConfirmPassword("");
    setConfirmPasswordError("");
  }

  function closePasswordModal() {
    clearAllMessages();
    setPasswordModal(null);
    setConfirmPassword("");
    setConfirmPasswordError("");
    setPasswordModalProcessing(false);
  }

  async function handleConfirmPassword() {
    const password = confirmPassword.trim();
    if (!password) {
      setConfirmPasswordError("Enter your password.");
      return;
    }
    setConfirmPasswordError("");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.email) {
      setConfirmPasswordError("Could not get current user.");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email: user.email, password });
    if (error) {
      setConfirmPasswordError("Incorrect password.");
      return;
    }
    const { action, product, from } = passwordModal;
    if (action === "edit" || action === "lowStockEdit") {
      closePasswordModal();
      if (action === "lowStockEdit") {
        const inv = getInv(product.id);
        setLowStockEditingId(product.id);
        setLowStockEditQty(inv?.quantity == null ? "" : String(inv.quantity));
      } else if (from === "lookup") {
        startLookupEdit(product);
      } else {
        startEdit(product);
      }
      return;
    }
    setPasswordModalProcessing(true);
    try {
      if (action === "delete") {
        await deleteProduct(product);
      } else if (action === "restore") {
        await restoreProduct(product);
      } else if (action === "deletePermanent") {
        await deleteProductPermanent(product);
      }
      closePasswordModal();
    } finally {
      setPasswordModalProcessing(false);
    }
  }

  async function deleteProduct(product) {
    const { error } = await supabase
      .from("products")
      .update({ is_active: false, deleted_at: new Date().toISOString(), updated_at: new Date().toISOString() })
      .eq("id", product.id);
    if (error) {
      setEditMessage({ type: "error", text: error?.message || "Failed to remove product." });
      return;
    }
    setEditMessage({ type: "success", text: "Product deactivated. It won't appear in inventory or POS." });
    setTimeout(() => setEditMessage(null), 4000);
    load();
  }

  async function restoreProduct(product) {
    const { error } = await supabase
      .from("products")
      .update({ is_active: true, deleted_at: null, updated_at: new Date().toISOString() })
      .eq("id", product.id);
    if (error) {
      console.error("Restore failed:", error?.message ?? error);
      setEditMessage({ type: "error", text: error?.message || "Failed to restore product. Please try again." });
      setTimeout(() => setEditMessage(null), 5000);
      return;
    }
    setEditMessage({ type: "success", text: `"${product.name}" restored successfully. It will appear in inventory and POS again.` });
    setTimeout(() => setEditMessage(null), 4000);
    load();
  }

  async function deleteProductPermanent(product) {
    const { error: invErr } = await supabase
      .from("inventory")
      .delete()
      .eq("product_id", product.id);
    if (invErr) {
      setEditMessage({ type: "error", text: invErr?.message || "Failed to delete inventory rows for this product." });
      return;
    }
    const { error: prodErr } = await supabase
      .from("products")
      .delete()
      .eq("id", product.id);
    if (prodErr) {
      setEditMessage({ type: "error", text: prodErr?.message || "Failed to permanently delete product." });
      return;
    }
    setEditMessage({ type: "success", text: `"${product.name}" permanently deleted.` });
    setTimeout(() => setEditMessage(null), 4000);
    load();
  }

  async function addCategory() {
    if (!canManageCatalog) {
      setCategoryMessage({ type: "error", text: "Only admin can add categories." });
      return;
    }
    if (!newCategoryName.trim()) return;
    clearAllMessages();
    const { error } = await supabase.from("categories").insert({ name: newCategoryName.trim(), sort_order: categories.length + 1 });
    if (error) {
      console.error("Category add failed:", error?.message ?? error);
      setCategoryMessage({ type: "error", text: error?.message || "Failed to add category." });
      return;
    }
    setNewCategoryName("");
    setShowAddCategory(false);
    setCategoryMessage({ type: "success", text: "Category added successfully." });
    load();
    setTimeout(() => setCategoryMessage(null), 4000);
  }

  async function addProduct() {
    if (!canManageCatalog) {
      setProductMessage({ type: "error", text: "Only admin can add products." });
      return;
    }
    if (!newProduct.name?.trim()) return;
    if (!newProduct.barcode?.trim()) {
      setProductMessage({ type: "error", text: "Barcode is required for scanning at POS." });
      return;
    }
    clearAllMessages();
    const { data: product, error: prodErr } = await supabase
      .from("products")
      .insert({
        name: newProduct.name.trim(),
        barcode: newProduct.barcode.trim(),
        price: parseFloat(newProduct.price) || 0,
        cost: parseFloat(newProduct.cost) || 0,
        category_id: newProduct.category_id || null,
      })
      .select("id")
      .single();
    if (prodErr) {
      const text = prodErr.code === "23505" ? "A product with this barcode already exists." : (prodErr.message || "Failed to add product.");
      setProductMessage({ type: "error", text });
      return;
    }
    const initQty = parseFloat(newProduct.quantity) || 0;
    const { error: invErr } = await supabase.from("inventory").insert({
      product_id: product.id,
      quantity: initQty,
      low_stock_threshold: DEFAULT_LOW_STOCK_THRESHOLD,
    });
    if (invErr) {
      setProductMessage({ type: "error", text: "Product created but inventory failed. Please edit stock manually." });
      load();
      setTimeout(() => setProductMessage(null), 5000);
      return;
    }
    const { data: auth } = await supabase.auth.getUser();
    await supabase.from("inventory_adjustments").insert({
      product_id: product.id,
      actor_user_id: auth?.user?.id ?? null,
      change_type: "stock_in",
      quantity_before: 0,
      quantity_change: initQty,
      quantity_after: initQty,
      reason: "Initial stock on product creation",
    });
    setNewProduct({ name: "", barcode: "", price: "", cost: "", category_id: "", quantity: "0", low_stock_threshold: String(DEFAULT_LOW_STOCK_THRESHOLD) });
    setShowAddProduct(false);
    setLookupError("");
    setProductMessage({ type: "success", text: "Product added successfully." });
    load();
    setTimeout(() => setProductMessage(null), 4000);
  }

  const lowStockProducts = products.filter((p) => {
    const inv = getInv(p.id);
    return inv && Number(inv.quantity) <= Number(inv.low_stock_threshold ?? DEFAULT_LOW_STOCK_THRESHOLD);
  });
  const lowStockCount = lowStockProducts.length;
  const canEditStockPrice = ["admin", "manager"].includes(userRole);
  const canManageCatalog = userRole === "admin";

  function goToProductRow(productId) {
    const index = products.findIndex((p) => p.id === productId);
    if (index >= 0) {
      const targetPage = Math.floor(index / PER_PAGE) + 1;
      setPage(targetPage);
      setScrollToProductId(productId);
    }
  }

  function handleLowStockEdit(productId) {
    const p = products.find((x) => x.id === productId);
    if (!p) return;
    if (!canEditStockPrice) {
      setEditMessage({ type: "error", text: "You do not have permission to edit inventory." });
      setTimeout(() => setEditMessage(null), 3000);
      return;
    }
    openPasswordModal("lowStockEdit", p, "lowStock");
  }

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-stone-500">Loading…</p>
      </div>
    );
  }

  const activeMessage = editMessage || productMessage || categoryMessage;

  return (
    <div>
      {activeMessage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
          <div
            className={`pointer-events-auto rounded-2xl border-2 px-6 py-4 text-center shadow-xl ${activeMessage.type === "success" ? "border-green-400 bg-green-50 text-green-900" : "border-red-400 bg-red-50 text-red-900"}`}
            role="alert"
          >
            <p className="font-medium">{activeMessage.text}</p>
          </div>
        </div>
      )}

      {passwordModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-stone-900/50">
          <div className="w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-6 shadow-xl">
            <h3 className="font-semibold text-stone-800">Confirm your password</h3>
            <p className="mt-1 text-sm text-stone-600">
              {passwordModal.action === "deletePermanent"
                ? `Permanently delete "${passwordModal.product?.name}"? This cannot be undone. Enter your admin password to continue.`
                : passwordModal.action === "delete"
                  ? `Delete "${passwordModal.product?.name}"? Enter your admin password to continue.`
                  : passwordModal.action === "restore"
                    ? `Restore "${passwordModal.product?.name}"? Enter your admin password to continue.`
                    : "Enter your admin password to edit this product."}
            </p>
            {passwordModalProcessing ? (
              <div className="mt-4 flex items-center gap-3 text-stone-600">
                <RefreshCcw size={20} className="animate-spin-left shrink-0" />
                <span className="text-sm">
                  {passwordModal.action === "restore" ? "Restoring…" : "Processing…"}
                </span>
              </div>
            ) : (
              <>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Password"
                  autoComplete="current-password"
                  className="mt-4 w-full rounded-xl border border-stone-300 px-4 py-2.5 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  onKeyDown={(e) => e.key === "Enter" && handleConfirmPassword()}
                />
                {confirmPasswordError && <p className="mt-2 text-sm text-red-600">{confirmPasswordError}</p>}
                <div className="mt-4 flex gap-2 justify-end">
                  <button type="button" onClick={closePasswordModal} className="rounded-xl border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100">
                    Cancel
                  </button>
                  <button type="button" onClick={handleConfirmPassword} className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700">
                    Confirm
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Package size={28} className="text-stone-700" />
        <h1 className="text-2xl font-bold text-stone-800">Inventory</h1>
        <span className="rounded bg-stone-100 px-2 py-0.5 text-xs font-medium uppercase text-stone-700">{userRole}</span>
      </div>
      <p className="mt-1 text-stone-600">Search by barcode or product name. Results update as you type.</p>

      <div className="mt-6">
        <label htmlFor="admin-lookup" className="sr-only">Search product by barcode or name</label>
        <input
          id="admin-lookup"
          ref={barcodeInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="off"
          placeholder="Scan or type barcode or product name"
          aria-label="Search product"
          className="w-full max-w-xl rounded-xl border border-stone-300 px-4 py-3 font-mono focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
        />
        {searchQuery.trim() && lookupError && <p className="mt-2 text-sm text-red-600">{lookupError}</p>}
        {searchQuery.trim() && lookupResult && (
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-stone-800">{lookupResult.name}</p>
            <p className="text-sm text-stone-600">
              Barcode: <code className="font-mono">{lookupResult.barcode}</code>
            </p>
            {lookupEditing ? (
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Price</label>
                  <input
                    type="number"
                    step="0.01"
                    value={lookupEditPrice}
                    onChange={(e) => setLookupEditPrice(e.target.value)}
                    className="w-full rounded-lg border border-amber-300 px-3 py-1.5 font-mono focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Quantity in stock</label>
                  <input
                    type="number"
                    step="0.01"
                    value={lookupEditQty}
                    onChange={(e) => setLookupEditQty(e.target.value)}
                    className="w-full rounded-lg border border-amber-300 px-3 py-1.5 font-mono focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
                <div>
                  <span className="text-xs text-stone-500">Low stock warning at 50 (fixed)</span>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm text-stone-600">
                  Price: <span className="font-mono">${Number(lookupResult.price).toFixed(2)}</span>
                </p>
                <p className="text-sm text-stone-600">
                  Quantity in stock: <span className="font-mono">{lookupResult.quantity}</span>
                </p>
                <p className="text-sm text-stone-600">
                  Warn when qty ≤: <span className="font-mono">{lookupResult.low_stock_threshold}</span>
                </p>
              </>
            )}
            <div className="mt-3 flex gap-2">
              {lookupEditing ? (
                <>
                  <button
                    type="button"
                    onClick={handleSaveLookupEdit}
                    className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
                  >
                    Save changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setLookupEditing(false)}
                    className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                canEditStockPrice && (
                  <button
                    type="button"
                    onClick={() => openPasswordModal("edit", lookupResult, "lookup")}
                    className="rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-700"
                  >
                    Edit stock / price
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2">
<button type="button" onClick={() => { clearAllMessages(); setShowAddCategory(!showAddCategory); }} disabled={!canManageCatalog} className="rounded-xl border border-stone-300 px-4 py-2 font-medium text-stone-700 hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-50">
          {showAddCategory ? "Cancel" : "+ Category"}
        </button>
        <button type="button" onClick={() => { clearAllMessages(); setShowAddProduct(!showAddProduct); }} disabled={!canManageCatalog} className="rounded-xl bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50">
          {showAddProduct ? "Cancel" : "+ Add product"}
        </button>
        </div>
        {canManageCatalog && (
          <button
            type="button"
            onClick={() => { clearAllMessages(); setShowDeleteHistory(true); }}
            className="flex items-center gap-2 rounded-xl border border-stone-300 px-4 py-2 font-medium text-stone-700 hover:bg-stone-100"
          >
            <Archive size={20} />
            Delete history ({inactiveProducts.length})
          </button>
        )}
      </div>

      {showAddCategory && (
        <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4">
          <h2 className="font-semibold text-stone-800">New category</h2>
          <div className="mt-2 flex gap-2">
            <input placeholder="Category name" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} className="rounded-lg border border-stone-200 px-3 py-2 flex-1 max-w-xs" />
            <button type="button" onClick={addCategory} className="rounded-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Add</button>
          </div>
        </div>
      )}

      {showAddProduct && (
        <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4">
          <h2 className="font-semibold text-stone-800">New product (barcode required for POS scan)</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <input placeholder="Name *" value={newProduct.name} onChange={(e) => setNewProduct((p) => ({ ...p, name: e.target.value }))} className="rounded-lg border border-stone-200 px-3 py-2" />
            <input placeholder="Barcode *" value={newProduct.barcode} onChange={(e) => setNewProduct((p) => ({ ...p, barcode: e.target.value }))} className="rounded-lg border border-stone-200 px-3 py-2 font-mono" />
            <input type="number" step="0.01" placeholder="Price *" value={newProduct.price} onChange={(e) => setNewProduct((p) => ({ ...p, price: e.target.value }))} className="rounded-lg border border-stone-200 px-3 py-2" />
            <input type="number" step="0.01" placeholder="Cost" value={newProduct.cost} onChange={(e) => setNewProduct((p) => ({ ...p, cost: e.target.value }))} className="rounded-lg border border-stone-200 px-3 py-2" />
            <select value={newProduct.category_id} onChange={(e) => setNewProduct((p) => ({ ...p, category_id: e.target.value }))} className="rounded-lg border border-stone-200 px-3 py-2">
              <option value="">No category</option>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <input type="number" step="0.01" placeholder="Initial quantity" value={newProduct.quantity} onChange={(e) => setNewProduct((p) => ({ ...p, quantity: e.target.value }))} className="rounded-lg border border-stone-200 px-3 py-2" />
            <span className="flex items-center text-sm text-stone-500">Low stock warning at 50 (fixed)</span>
          </div>
          <button type="button" onClick={addProduct} className="mt-3 rounded-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">Save product</button>
        </div>
      )}

      {lowStockCount > 0 && (
        <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-amber-900">
          <span>
            <strong>Low stock:</strong> {lowStockCount} item(s) with quantity at or below their warning level.
          </span>
          <button
            type="button"
            onClick={() => setShowLowStockModal(true)}
            className="shrink-0 rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-700"
          >
            View items
          </button>
        </div>
      )}

      <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-stone-200 bg-stone-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-stone-800">Product</th>
              <th className="px-4 py-3 font-semibold text-stone-800">Barcode</th>
              <th className="px-4 py-3 font-semibold text-stone-800">Category</th>
              <th className="px-4 py-3 font-semibold text-stone-800">Price</th>
              <th className="px-4 py-3 font-semibold text-stone-800">Quantity</th>
              <th className="px-4 py-3 font-semibold text-stone-800" title="Warn when quantity is at or below this number">Warn when qty ≤</th>
              <th className="px-4 py-3 font-semibold text-stone-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((p) => {
              const inv = getInv(p.id);
              const isLow = inv && Number(inv.quantity) <= Number(inv.low_stock_threshold ?? DEFAULT_LOW_STOCK_THRESHOLD);
              const isEditing = editingId === p.id;
              return (
                <tr id={`product-row-${p.id}`} key={p.id} className={`border-b border-stone-100 ${isLow ? "bg-red-50/50" : ""}`}>
                  <td className="px-4 py-3 font-medium text-stone-800">
                    <span className={isLow ? "text-red-800" : ""}>{p.name}</span>
                    {isLow && (
                      <span className="ml-2 inline-flex rounded bg-amber-200 px-1.5 py-0.5 text-xs font-medium text-amber-900">Low stock</span>
                    )}
                  </td>
                  <td className="px-4 py-3 font-mono text-stone-600">{p.barcode || "—"}</td>
                  <td className="px-4 py-3 text-stone-600">{p.categories?.name ?? "—"}</td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <input type="number" step="0.01" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} className="w-24 rounded border border-stone-200 px-2 py-1 font-mono" />
                    ) : (
                      <span className="font-mono">${Number(p.price).toFixed(2)}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <input type="number" step="0.01" value={editQty} onChange={(e) => setEditQty(e.target.value)} className="w-24 rounded border border-stone-200 px-2 py-1 font-mono" />
                    ) : (
                      <span className={`font-mono ${isLow ? "font-semibold text-red-700" : ""}`}>{inv?.quantity ?? 0}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-stone-500">{inv?.low_stock_threshold ?? DEFAULT_LOW_STOCK_THRESHOLD}</span>
                  </td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleSaveEdit(p)}
                          className="flex items-center justify-center rounded bg-green-600 px-2 py-1 text-xs text-white hover:bg-green-700"
                          aria-label="Save changes"
                        >
                          <span className="sr-only">Save</span>
                          <span aria-hidden="true">✓</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            clearAllMessages();
                            setEditingId(null);
                          }}
                          className="flex items-center justify-center rounded bg-stone-300 px-2 py-1 text-xs text-stone-700 hover:bg-stone-400"
                          aria-label="Cancel editing"
                        >
                          <span className="sr-only">Cancel</span>
                          <span aria-hidden="true">✕</span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        {canEditStockPrice && (
                          <button type="button" onClick={() => openPasswordModal("edit", p)} className="rounded bg-amber-100 p-1.5 text-amber-800 hover:bg-amber-200" aria-label="Edit"><Edit size={16} /></button>
                        )}
                        {canManageCatalog && (
                          <button type="button" onClick={() => openPasswordModal("delete", p)} className="rounded bg-red-100 p-1.5 text-red-800 hover:bg-red-200" aria-label="Delete"><Trash size={16} /></button>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {products.length === 0 && (
          <div className="px-4 py-12 text-center text-stone-500">No products. Add one above (include a barcode for POS scanning).</div>
        )}
        {products.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-stone-200 bg-stone-50 px-4 py-3 text-sm">
            <span className="text-stone-600">
              Showing {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, products.length)} of {products.length} products
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="rounded-lg border border-stone-300 px-3 py-1.5 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50"
              >
                Previous
              </button>
              <span className="font-medium text-stone-800">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="rounded-lg border border-stone-300 px-3 py-1.5 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      <LowStockItemsModal
        open={showLowStockModal && lowStockCount > 0}
        onClose={() => {
          setShowLowStockModal(false);
          setLowStockEditingId(null);
          setLowStockEditQty("");
        }}
        items={lowStockProducts.map((p) => {
          const inv = getInv(p.id);
          return {
            id: p.id,
            name: p.name,
            barcode: p.barcode,
            categoryName: p.categories?.name ?? "—",
            quantity: inv?.quantity ?? 0,
          };
        })}
        onEdit={handleLowStockEdit}
        editingId={lowStockEditingId}
        editQty={lowStockEditQty}
        onChangeQty={setLowStockEditQty}
        onSaveEdit={async (productId) => {
          clearAllMessages();
          const invError = await saveInventory(productId, lowStockEditQty, "Low stock modal edit");
          if (invError) {
            setEditMessage({ type: "error", text: invError });
            return;
          }
          setLowStockEditingId(null);
          setLowStockEditQty("");
          setEditMessage({ type: "success", text: "Inventory updated successfully." });
          setTimeout(() => setEditMessage(null), 4000);
        }}
        onCancelEdit={() => {
          setLowStockEditingId(null);
          setLowStockEditQty("");
        }}
      />

      <DeleteHistoryModal
        open={showDeleteHistory}
        onClose={() => { clearAllMessages(); setShowDeleteHistory(false); }}
        inactiveProducts={inactiveProducts}
        onRestoreClick={(p) => openPasswordModal("restore", p, "history")}
        onDeletePermanent={(p) => openPasswordModal("deletePermanent", p, "history")}
      />
    </div>
  );
}
