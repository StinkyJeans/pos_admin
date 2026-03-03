"use client";

import { useEffect, useState } from "react";
import { Edit } from "griddy-icons";

const PER_PAGE = 50;

export function LowStockItemsModal({
  open,
  onClose,
  items,
  onEdit,
  editingId,
  editQty,
  onChangeQty,
  onSaveEdit,
  onCancelEdit,
}) {
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  const [page, setPage] = useState(1);

  if (!open) return null;

  const totalItems = items?.length || 0;
  const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * PER_PAGE;
  const paginatedItems = (items || []).slice(startIndex, startIndex + PER_PAGE);

  const handleBackdropClick = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="low-stock-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-stone-200 bg-white px-6 py-4">
          <div>
            <h2
              id="low-stock-modal-title"
              className="text-xl font-bold text-stone-800"
            >
              Low stock items
            </h2>
            <p className="mt-0.5 text-sm text-stone-500">
              Products at or below their low stock warning level.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-800"
            aria-label="Close"
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>

        {!totalItems ? (
          <div className="max-h-[calc(90vh-5rem)] overflow-y-auto px-6 py-12 text-center text-stone-500">
            No low stock items.
          </div>
        ) : (
          <>
            {/* Full header block - fixed above scroll, never scrolls */}
            <div className="border-b border-stone-200 bg-white px-6 py-3">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    <th className="font-semibold text-stone-800">Product</th>
                    <th className="font-semibold text-stone-800">Barcode</th>
                    <th className="font-semibold text-stone-800">Category</th>
                    <th className="font-semibold text-stone-800">Qty</th>
                    <th className="text-right font-semibold text-stone-800">Actions</th>
                  </tr>
                </thead>
              </table>
            </div>

            {/* Scrollable body only */}
            <div className="max-h-[calc(90vh-10rem)] overflow-y-auto px-6 py-2">
              <table className="w-full table-auto text-left text-sm">
                <tbody>
                  {paginatedItems.map((item) => {
                    const isEditing = editingId === item.id;
                    return (
                      <tr key={item.id} className="border-b border-stone-100">
                        <td className="py-3 font-medium text-stone-800">
                          {item.name}
                        </td>
                        <td className="py-3 font-mono text-stone-600">
                          {item.barcode || "—"}
                        </td>
                        <td className="py-3 text-stone-600">
                          {item.categoryName ?? "—"}
                        </td>
                        <td className="py-3 font-mono text-stone-700">
                          {isEditing ? (
                            <input
                              type="number"
                              step="0.01"
                              value={editQty}
                              onChange={(e) => onChangeQty?.(e.target.value)}
                              className="w-16 rounded border border-stone-300 px-2 py-1 text-right"
                            />
                          ) : (
                            item.quantity
                          )}
                        </td>
                        <td className="py-3">
                          <div className="flex justify-end gap-2">
                            {isEditing ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => onSaveEdit?.(item.id)}
                                  className="flex items-center justify-center rounded-lg bg-green-600 px-2 py-1 text-xs font-medium text-white hover:bg-green-700"
                                  aria-label="Save changes"
                                >
                                  <span className="sr-only">Save</span>
                                  <span aria-hidden="true">✓</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => onCancelEdit?.()}
                                  className="flex items-center justify-center rounded-lg bg-stone-200 px-2 py-1 text-xs font-medium text-stone-800 hover:bg-stone-300"
                                  aria-label="Cancel editing"
                                >
                                  <span className="sr-only">Cancel</span>
                                  <span aria-hidden="true">✕</span>
                                </button>
                              </>
                            ) : (
                              <button
                                type="button"
                                onClick={() => {
                                  if (onEdit) onEdit(item.id);
                                }}
                                className="rounded-lg bg-amber-100 p-1.5 text-amber-800 hover:bg-amber-200"
                                title="Edit product (admin password required)"
                                aria-label="Edit"
                              >
                                <Edit size={16} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="border-t border-stone-200 px-6 py-3">
                <div className="flex items-center justify-between text-xs text-stone-600">
                  <span>
                    Showing {startIndex + 1}–
                    {Math.min(startIndex + PER_PAGE, totalItems)} of {totalItems} items
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={safePage <= 1}
                      className="rounded-lg border border-stone-300 px-2 py-1 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span className="font-medium text-stone-800">
                      Page {safePage} of {totalPages}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={safePage >= totalPages}
                      className="rounded-lg border border-stone-300 px-2 py-1 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      </div>
  );
}

