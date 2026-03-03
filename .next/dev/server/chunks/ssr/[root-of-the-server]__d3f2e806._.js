module.exports = [
"[project]/src/components/modal/productSold.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductSoldModal",
    ()=>ProductSoldModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ProductSoldModal({ open, onClose, byCategory, periodLabel }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const handleEscape = (e)=>{
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEscape);
        return ()=>window.removeEventListener("keydown", handleEscape);
    }, [
        open,
        onClose
    ]);
    if (!open) return null;
    const grandTotal = byCategory.reduce((s, c)=>s + c.total, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50",
        onClick: onClose,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "product-sold-modal-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-stone-200 px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "product-sold-modal-title",
                                    className: "text-xl font-bold text-stone-800",
                                    children: "Products sold by category"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/productSold.js",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                periodLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-0.5 text-sm text-stone-500",
                                    children: periodLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/productSold.js",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modal/productSold.js",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "rounded-lg p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-800",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl leading-none",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modal/productSold.js",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modal/productSold.js",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modal/productSold.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto max-h-[calc(90vh-5rem)] px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-stone-500 mb-4",
                            children: "Quantity and total amount per product, grouped by category."
                        }, void 0, false, {
                            fileName: "[project]/src/components/modal/productSold.js",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        byCategory.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                byCategory.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-stone-200 bg-stone-50/50 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 bg-stone-100 font-semibold text-stone-800",
                                                children: cat.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modal/productSold.js",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-left text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-stone-200 bg-white/80",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 font-semibold text-stone-800",
                                                                    children: "Product"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modal/productSold.js",
                                                                    lineNumber: 67,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 font-semibold text-stone-800 text-right",
                                                                    children: "Qty"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modal/productSold.js",
                                                                    lineNumber: 68,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 font-semibold text-stone-800 text-right",
                                                                    children: "Amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modal/productSold.js",
                                                                    lineNumber: 69,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modal/productSold.js",
                                                            lineNumber: 66,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modal/productSold.js",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: cat.products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-b border-stone-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 font-medium text-stone-800",
                                                                        children: p.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modal/productSold.js",
                                                                        lineNumber: 75,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 font-mono text-stone-600 text-right",
                                                                        children: p.quantity
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modal/productSold.js",
                                                                        lineNumber: 76,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 font-mono text-stone-700 text-right",
                                                                        children: [
                                                                            "$",
                                                                            p.revenue.toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modal/productSold.js",
                                                                        lineNumber: 79,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, p.name, true, {
                                                                fileName: "[project]/src/components/modal/productSold.js",
                                                                lineNumber: 74,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modal/productSold.js",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modal/productSold.js",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 bg-amber-50 border-t border-amber-100 flex justify-end gap-6 text-sm font-semibold text-stone-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Category total:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modal/productSold.js",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono",
                                                        children: [
                                                            "$",
                                                            cat.total.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modal/productSold.js",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modal/productSold.js",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, cat.name, true, {
                                        fileName: "[project]/src/components/modal/productSold.js",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border-2 border-amber-200 bg-amber-50 px-4 py-3 flex justify-end gap-6 text-base font-bold text-stone-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Total (all products):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modal/productSold.js",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono",
                                            children: [
                                                "$",
                                                grandTotal.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modal/productSold.js",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modal/productSold.js",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modal/productSold.js",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-8 text-center text-stone-500",
                            children: "No products sold in this period."
                        }, void 0, false, {
                            fileName: "[project]/src/components/modal/productSold.js",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modal/productSold.js",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modal/productSold.js",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modal/productSold.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/constants [external] (constants, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("constants", () => require("constants"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[project]/src/components/salesExcelExport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadSalesExcel",
    ()=>downloadSalesExcel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exceljs$2f$excel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/exceljs/excel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
"use client";
;
;
async function downloadSalesExcel(range) {
    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);
    const weekStart = new Date(now);
    weekStart.setDate(weekStart.getDate() - 7);
    const monthStart = new Date(now);
    monthStart.setMonth(monthStart.getMonth() - 1);
    const [todayIso, weekIso, monthIso] = [
        todayStart.toISOString(),
        weekStart.toISOString(),
        monthStart.toISOString()
    ];
    const fetchAll = range === "all";
    const prevTodayStart = new Date(todayStart);
    prevTodayStart.setDate(prevTodayStart.getDate() - 1);
    const prevWeekStart = new Date(weekStart);
    prevWeekStart.setDate(prevWeekStart.getDate() - 7);
    const prevMonthStart = new Date(monthStart);
    prevMonthStart.setMonth(prevMonthStart.getMonth() - 1);
    const prevTodayIso = prevTodayStart.toISOString();
    const prevWeekIso = prevWeekStart.toISOString();
    const prevMonthIso = prevMonthStart.toISOString();
    const [{ data: ordersToday }, { data: ordersWeek }, { data: ordersMonth }, { data: ordersPrevToday }, { data: ordersPrevWeek }, { data: ordersPrevMonth }, { data: itemsToday }, { data: itemsWeek }, { data: itemsMonth }, { data: productsData }, { data: categoriesData }] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total, subtotal, tax, created_at, status").eq("status", "completed").gte("created_at", todayIso).order("created_at", {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total, subtotal, tax, created_at, status").eq("status", "completed").gte("created_at", weekIso).order("created_at", {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total, subtotal, tax, created_at, status").eq("status", "completed").gte("created_at", monthIso).order("created_at", {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total").eq("status", "completed").gte("created_at", prevTodayIso).lt("created_at", todayIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total").eq("status", "completed").gte("created_at", prevWeekIso).lt("created_at", weekIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total").eq("status", "completed").gte("created_at", prevMonthIso).lt("created_at", monthIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("order_items").select("product_id, product_name, quantity, line_total").gte("created_at", todayIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("order_items").select("product_id, product_name, quantity, line_total").gte("created_at", weekIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("order_items").select("product_id, product_name, quantity, line_total").gte("created_at", monthIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("products").select("id, category_id, cost"),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("id, name").order("sort_order")
    ]);
    const ordersTodayList = ordersToday ?? [];
    const ordersWeekList = ordersWeek ?? [];
    const ordersMonthList = ordersMonth ?? [];
    const itemsTodayList = itemsToday ?? [];
    const itemsWeekList = itemsWeek ?? [];
    const itemsMonthList = itemsMonth ?? [];
    const productToCategory = {};
    (productsData || []).forEach((p)=>productToCategory[p.id] = p.category_id);
    const categoryNames = {};
    (categoriesData || []).forEach((c)=>categoryNames[c.id] = c.name);
    const productCostLookup = Object.fromEntries((productsData || []).map((p)=>[
            String(p.id),
            Number(p.cost) || 0
        ]));
    function buildByNameAndCategory(items) {
        const byName = {};
        const categoryMap = {};
        (items || []).forEach((row)=>{
            const costPerUnit = productCostLookup[String(row.product_id)] ?? 0;
            const lineCost = row.quantity * costPerUnit;
            if (!byName[row.product_name]) byName[row.product_name] = {
                name: row.product_name,
                quantity: 0,
                revenue: 0,
                cost: 0
            };
            byName[row.product_name].quantity += row.quantity;
            byName[row.product_name].revenue += Number(row.line_total);
            byName[row.product_name].cost += lineCost;
            const catId = productToCategory[row.product_id] || null;
            const catName = catId ? categoryNames[catId] || "Uncategorized" : "Uncategorized";
            if (!categoryMap[catName]) categoryMap[catName] = {
                products: {},
                total: 0,
                unitsSold: 0
            };
            if (!categoryMap[catName].products[row.product_name]) categoryMap[catName].products[row.product_name] = {
                quantity: 0,
                revenue: 0
            };
            categoryMap[catName].products[row.product_name].quantity += row.quantity;
            categoryMap[catName].products[row.product_name].revenue += Number(row.line_total);
            categoryMap[catName].total += Number(row.line_total);
            categoryMap[catName].unitsSold += row.quantity;
        });
        const topItemsList = Object.values(byName).sort((a, b)=>b.revenue - a.revenue);
        const categoryList = Object.entries(categoryMap).map(([name, data])=>({
                name,
                products: Object.entries(data.products).map(([pName, p])=>({
                        name: pName,
                        quantity: p.quantity,
                        revenue: p.revenue
                    })),
                total: data.total,
                unitsSold: data.unitsSold
            })).sort((a, b)=>b.total - a.total);
        return {
            topItemsList,
            categoryList
        };
    }
    const todayData = buildByNameAndCategory(itemsTodayList);
    const weekData = buildByNameAndCategory(itemsWeekList);
    const monthData = buildByNameAndCategory(itemsMonthList);
    const sum = (arr)=>(arr || []).reduce((s, o)=>s + Number(o.total), 0);
    const ordersList = range === "today" ? ordersTodayList : range === "week" ? ordersWeekList : ordersMonthList;
    const data = range === "today" ? todayData : range === "week" ? weekData : monthData;
    const periodLabel = range === "today" ? "Today" : range === "week" ? "Last 7 days" : range === "all" ? "All periods" : "Last 30 days";
    const prevOrdersList = range === "today" ? ordersPrevToday ?? [] : range === "week" ? ordersPrevWeek ?? [] : ordersPrevMonth ?? [];
    const prevRevenue = sum(prevOrdersList);
    const prevCount = prevOrdersList.length;
    const totalRevenue = sum(ordersList);
    const orderCount = ordersList.length;
    const aov = orderCount ? totalRevenue / orderCount : 0;
    const ordersPctChange = prevCount ? ((orderCount - prevCount) / prevCount * 100).toFixed(1) : null;
    const revenuePctChange = prevRevenue ? ((totalRevenue - prevRevenue) / prevRevenue * 100).toFixed(1) : null;
    const wb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exceljs$2f$excel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Workbook();
    wb.creator = "POS Sales";
    wb.created = new Date();
    const HEADER_FILL = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
            argb: "FFFDE68A"
        }
    };
    const SECTION_FILL = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
            argb: "FFFEF3C7"
        }
    };
    const TITLE_FONT = {
        bold: true,
        size: 14
    };
    const HEADER_FONT = {
        bold: true,
        size: 11
    };
    const ALL_BORDER = {
        top: {
            style: "thin"
        },
        left: {
            style: "thin"
        },
        bottom: {
            style: "thin"
        },
        right: {
            style: "thin"
        }
    };
    const CURRENCY_FMT = "$#,##0.00";
    const PERCENT_FMT = "0.0%";
    function styleHeaderRow(sheet, rowNum) {
        for(let c = 1; c <= 10; c++){
            const cell = sheet.getCell(rowNum, c);
            if (cell.value != null) {
                cell.font = HEADER_FONT;
                cell.fill = HEADER_FILL;
                cell.border = ALL_BORDER;
            }
        }
    }
    function styleDataRow(sheet, rowNum, currencyCols = [], numCols = []) {
        for(let c = 1; c <= 10; c++){
            const cell = sheet.getCell(rowNum, c);
            if (cell.value != null) {
                cell.border = ALL_BORDER;
                if (currencyCols.includes(c)) cell.numFmt = CURRENCY_FMT;
                if (numCols.includes(c)) cell.numFmt = "#,##0";
            }
        }
    }
    function byDayFromOrders(ordersL) {
        const byDate = {};
        (ordersL || []).forEach((o)=>{
            const d = new Date(o.created_at);
            const key = d.toISOString().slice(0, 10);
            if (!byDate[key]) byDate[key] = {
                date: key,
                label: d.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                }),
                revenue: 0,
                orders: 0
            };
            byDate[key].revenue += Number(o.total);
            byDate[key].orders += 1;
        });
        return Object.values(byDate).sort((a, b)=>a.date.localeCompare(b.date));
    }
    if (fetchAll) {
        const summarySheet = wb.addWorksheet("Executive summary", {
            views: [
                {
                    state: "frozen",
                    ySplit: 1
                }
            ]
        });
        const allTotal = sum(ordersTodayList) + sum(ordersWeekList) + sum(ordersMonthList);
        const allCount = ordersTodayList.length + ordersWeekList.length + ordersMonthList.length;
        const allAov = allCount ? allTotal / allCount : 0;
        summarySheet.addRow([
            "Executive summary",
            "All periods"
        ]);
        summarySheet.getCell(1, 1).font = TITLE_FONT;
        summarySheet.getCell(1, 1).fill = SECTION_FILL;
        summarySheet.addRow([]);
        summarySheet.addRow([
            "Period covered",
            "Today, Last 7 days, Last 30 days"
        ]);
        summarySheet.addRow([
            "Total revenue",
            allTotal
        ]);
        summarySheet.addRow([
            "Total orders / transactions",
            allCount
        ]);
        summarySheet.addRow([
            "Average order value (all)",
            allAov
        ]);
        summarySheet.getCell(4, 2).numFmt = CURRENCY_FMT;
        summarySheet.getCell(6, 2).numFmt = CURRENCY_FMT;
        summarySheet.addRow([]);
        summarySheet.addRow([
            "By period"
        ]);
        summarySheet.getCell(8, 1).font = HEADER_FONT;
        summarySheet.getCell(8, 1).fill = SECTION_FILL;
        summarySheet.addRow([
            "Period",
            "Orders",
            "Total revenue"
        ]);
        styleHeaderRow(summarySheet, 9);
        summarySheet.addRow([
            "Today",
            ordersTodayList.length,
            sum(ordersTodayList)
        ]);
        summarySheet.addRow([
            "Last 7 days",
            ordersWeekList.length,
            sum(ordersWeekList)
        ]);
        summarySheet.addRow([
            "Last 30 days",
            ordersMonthList.length,
            sum(ordersMonthList)
        ]);
        for(let r = 10; r <= 12; r++){
            summarySheet.getCell(r, 2).numFmt = "#,##0";
            summarySheet.getCell(r, 3).numFmt = CURRENCY_FMT;
        }
        summarySheet.getColumn(1).width = 25;
        summarySheet.getColumn(2).width = 14;
        summarySheet.getColumn(3).width = 14;
        const ordersSheet = wb.addWorksheet("Orders");
        ordersSheet.addRow([
            "Date & time",
            "Order ID",
            "Subtotal",
            "Tax",
            "Total",
            "Status"
        ]);
        styleHeaderRow(ordersSheet, 1);
        if (ordersMonthList.length) {
            ordersMonthList.forEach((o, i)=>{
                ordersSheet.addRow([
                    new Date(o.created_at),
                    o.id,
                    Number(o.subtotal ?? o.total),
                    Number(o.tax ?? 0),
                    Number(o.total),
                    o.status || "completed"
                ]);
                styleDataRow(ordersSheet, i + 2, [
                    3,
                    4,
                    5
                ]);
            });
        } else {
            ordersSheet.addRow([
                "No orders"
            ]);
        }
        ordersSheet.getColumn(1).width = 20;
        ordersSheet.getColumn(2).width = 38;
        ordersSheet.getColumn(3).width = 12;
        ordersSheet.getColumn(4).width = 12;
        ordersSheet.getColumn(5).width = 12;
        ordersSheet.getColumn(6).width = 12;
        const byDayTodayArr = byDayFromOrders(ordersTodayList);
        const byDayWeekArr = byDayFromOrders(ordersWeekList);
        const byDayMonthArr = byDayFromOrders(ordersMonthList);
        const byDayAll = [
            ...byDayMonthArr
        ].sort((a, b)=>a.date.localeCompare(b.date)).map((r)=>{
            const inToday = byDayTodayArr.some((t)=>t.date === r.date);
            const inWeek = byDayWeekArr.some((w)=>w.date === r.date);
            const period = inToday ? "Today" : inWeek ? "Week" : "Month";
            const avgOrder = r.orders ? r.revenue / r.orders : 0;
            return [
                period,
                r.date,
                r.label,
                r.revenue,
                r.orders,
                avgOrder
            ];
        });
        const salesSheet = wb.addWorksheet("Sales by time");
        salesSheet.addRow([
            "Period",
            "Date",
            "Label",
            "Revenue",
            "Order count",
            "Avg order value"
        ]);
        styleHeaderRow(salesSheet, 1);
        byDayAll.forEach((row, i)=>{
            salesSheet.addRow(row);
            styleDataRow(salesSheet, i + 2, [
                4,
                6
            ], [
                5
            ]);
        });
        salesSheet.getColumn(1).width = 10;
        salesSheet.getColumn(2).width = 12;
        salesSheet.getColumn(3).width = 16;
        salesSheet.getColumn(4).width = 12;
        salesSheet.getColumn(5).width = 12;
        salesSheet.getColumn(6).width = 14;
        [
            [
                "Today",
                todayData
            ],
            [
                "Week",
                weekData
            ],
            [
                "Month",
                monthData
            ]
        ].forEach(([label, d])=>{
            const totalRev = d.topItemsList.reduce((s, i)=>s + i.revenue, 0);
            const prodSheet = wb.addWorksheet(`Product performance ${label}`);
            prodSheet.addRow([
                "Product name",
                "Units sold",
                "Revenue",
                "Cost",
                "Margin",
                "% of total revenue"
            ]);
            styleHeaderRow(prodSheet, 1);
            d.topItemsList.forEach((item, i)=>{
                const pct = totalRev ? item.revenue / totalRev : 0;
                prodSheet.addRow([
                    item.name,
                    item.quantity,
                    item.revenue,
                    item.cost ?? 0,
                    (item.revenue ?? 0) - (item.cost ?? 0),
                    pct
                ]);
                styleDataRow(prodSheet, i + 2, [
                    3,
                    4,
                    5
                ], [
                    2
                ]);
                prodSheet.getCell(i + 2, 6).numFmt = PERCENT_FMT;
            });
            prodSheet.getColumn(1).width = 28;
            [
                2,
                3,
                4,
                5,
                6
            ].forEach((c)=>{
                prodSheet.getColumn(c).width = 14;
            });
        });
        [
            [
                "Today",
                todayData
            ],
            [
                "Week",
                weekData
            ],
            [
                "Month",
                monthData
            ]
        ].forEach(([label, d])=>{
            const perfSheet = wb.addWorksheet(`Category performance ${label}`);
            perfSheet.addRow([
                "Category name",
                "Revenue",
                "Units sold"
            ]);
            styleHeaderRow(perfSheet, 1);
            d.categoryList.forEach((cat, i)=>{
                perfSheet.addRow([
                    cat.name,
                    cat.total,
                    cat.unitsSold ?? 0
                ]);
                styleDataRow(perfSheet, i + 2, [
                    2
                ], [
                    3
                ]);
            });
            perfSheet.getColumn(1).width = 24;
            perfSheet.getColumn(2).width = 14;
            perfSheet.getColumn(3).width = 12;
            const catSheet = wb.addWorksheet(`By category ${label}`);
            let catRow = 1;
            d.categoryList.forEach((cat)=>{
                catSheet.addRow([
                    cat.name,
                    "",
                    "",
                    ""
                ]);
                catSheet.getCell(catRow, 1).font = HEADER_FONT;
                catSheet.getCell(catRow, 1).fill = SECTION_FILL;
                catRow++;
                catSheet.addRow([
                    "Product",
                    "Quantity",
                    "Revenue",
                    ""
                ]);
                styleHeaderRow(catSheet, catRow);
                catRow++;
                cat.products.forEach((p)=>{
                    catSheet.addRow([
                        p.name,
                        p.quantity,
                        p.revenue,
                        ""
                    ]);
                    styleDataRow(catSheet, catRow, [
                        3
                    ]);
                    catRow++;
                });
                catSheet.addRow([
                    "Category total",
                    "",
                    cat.total,
                    ""
                ]);
                catSheet.getCell(catRow, 3).numFmt = CURRENCY_FMT;
                catRow += 2;
            });
            catSheet.getColumn(1).width = 28;
            catSheet.getColumn(2).width = 10;
            catSheet.getColumn(3).width = 12;
        });
    } else {
        const summarySheet = wb.addWorksheet("Executive summary", {
            views: [
                {
                    state: "frozen",
                    ySplit: 1
                }
            ]
        });
        summarySheet.addRow([
            "Executive summary",
            periodLabel
        ]);
        summarySheet.getCell(1, 1).font = TITLE_FONT;
        summarySheet.getCell(1, 1).fill = SECTION_FILL;
        summarySheet.addRow([]);
        summarySheet.addRow([
            "Period covered",
            periodLabel
        ]);
        summarySheet.addRow([
            "Total revenue",
            totalRevenue
        ]);
        summarySheet.addRow([
            "Total orders / transactions",
            orderCount
        ]);
        summarySheet.addRow([
            "Average order value",
            aov
        ]);
        summarySheet.getCell(4, 2).numFmt = CURRENCY_FMT;
        summarySheet.getCell(6, 2).numFmt = CURRENCY_FMT;
        if (ordersPctChange != null || revenuePctChange != null) {
            summarySheet.addRow([]);
            summarySheet.addRow([
                "Comparison to previous period",
                ""
            ]);
            summarySheet.getCell(summarySheet.rowCount, 1).font = HEADER_FONT;
            summarySheet.getCell(summarySheet.rowCount, 1).fill = SECTION_FILL;
            if (ordersPctChange != null) {
                summarySheet.addRow([
                    "Orders % change",
                    Number(ordersPctChange) / 100
                ]);
                summarySheet.getCell(summarySheet.rowCount, 2).numFmt = PERCENT_FMT;
            }
            if (revenuePctChange != null) {
                summarySheet.addRow([
                    "Revenue % change",
                    Number(revenuePctChange) / 100
                ]);
                summarySheet.getCell(summarySheet.rowCount, 2).numFmt = PERCENT_FMT;
            }
        }
        summarySheet.getColumn(1).width = 28;
        summarySheet.getColumn(2).width = 14;
        const ordersSheet = wb.addWorksheet("Orders");
        ordersSheet.addRow([
            "Date & time",
            "Order ID",
            "Subtotal",
            "Tax",
            "Total",
            "Status"
        ]);
        styleHeaderRow(ordersSheet, 1);
        if (ordersList.length) {
            ordersList.forEach((o, i)=>{
                ordersSheet.addRow([
                    new Date(o.created_at),
                    o.id,
                    Number(o.subtotal ?? o.total),
                    Number(o.tax ?? 0),
                    Number(o.total),
                    o.status || "completed"
                ]);
                styleDataRow(ordersSheet, i + 2, [
                    3,
                    4,
                    5
                ]);
            });
        } else {
            ordersSheet.addRow([
                "No orders"
            ]);
        }
        ordersSheet.getColumn(1).width = 20;
        ordersSheet.getColumn(2).width = 38;
        ordersSheet.getColumn(3).width = 12;
        ordersSheet.getColumn(4).width = 12;
        ordersSheet.getColumn(5).width = 12;
        ordersSheet.getColumn(6).width = 12;
        const byDayArr = byDayFromOrders(ordersList);
        const salesSheet = wb.addWorksheet("Sales by time");
        salesSheet.addRow([
            "Date",
            "Label",
            "Revenue",
            "Order count",
            "Avg order value"
        ]);
        styleHeaderRow(salesSheet, 1);
        byDayArr.forEach((r, i)=>{
            salesSheet.addRow([
                r.date,
                r.label,
                r.revenue,
                r.orders,
                r.orders ? r.revenue / r.orders : 0
            ]);
            styleDataRow(salesSheet, i + 2, [
                3,
                5
            ], [
                4
            ]);
        });
        salesSheet.getColumn(1).width = 12;
        salesSheet.getColumn(2).width = 16;
        salesSheet.getColumn(3).width = 12;
        salesSheet.getColumn(4).width = 12;
        salesSheet.getColumn(5).width = 14;
        const totalRev = data.topItemsList.reduce((s, i)=>s + i.revenue, 0);
        const prodSheet = wb.addWorksheet("Product performance");
        prodSheet.addRow([
            "Product name",
            "Units sold",
            "Revenue",
            "Cost",
            "Margin",
            "% of total revenue"
        ]);
        styleHeaderRow(prodSheet, 1);
        data.topItemsList.forEach((item, i)=>{
            const pct = totalRev ? item.revenue / totalRev : 0;
            prodSheet.addRow([
                item.name,
                item.quantity,
                item.revenue,
                item.cost ?? 0,
                (item.revenue ?? 0) - (item.cost ?? 0),
                pct
            ]);
            styleDataRow(prodSheet, i + 2, [
                3,
                4,
                5
            ], [
                2
            ]);
            prodSheet.getCell(i + 2, 6).numFmt = PERCENT_FMT;
        });
        prodSheet.getColumn(1).width = 28;
        [
            2,
            3,
            4,
            5,
            6
        ].forEach((c)=>{
            prodSheet.getColumn(c).width = 14;
        });
        const perfSheet = wb.addWorksheet("Category performance");
        perfSheet.addRow([
            "Category name",
            "Revenue",
            "Units sold"
        ]);
        styleHeaderRow(perfSheet, 1);
        data.categoryList.forEach((cat, i)=>{
            perfSheet.addRow([
                cat.name,
                cat.total,
                cat.unitsSold ?? 0
            ]);
            styleDataRow(perfSheet, i + 2, [
                2
            ], [
                3
            ]);
        });
        perfSheet.getColumn(1).width = 24;
        perfSheet.getColumn(2).width = 14;
        perfSheet.getColumn(3).width = 12;
        const catSheet = wb.addWorksheet("By category");
        let catRow = 1;
        data.categoryList.forEach((cat)=>{
            catSheet.addRow([
                cat.name,
                "",
                "",
                ""
            ]);
            catSheet.getCell(catRow, 1).font = HEADER_FONT;
            catSheet.getCell(catRow, 1).fill = SECTION_FILL;
            catRow++;
            catSheet.addRow([
                "Product",
                "Quantity",
                "Revenue",
                ""
            ]);
            styleHeaderRow(catSheet, catRow);
            catRow++;
            cat.products.forEach((p)=>{
                catSheet.addRow([
                    p.name,
                    p.quantity,
                    p.revenue,
                    ""
                ]);
                styleDataRow(catSheet, catRow, [
                    3
                ]);
                catRow++;
            });
            catSheet.addRow([
                "Category total",
                "",
                cat.total,
                ""
            ]);
            catSheet.getCell(catRow, 3).numFmt = CURRENCY_FMT;
            catRow += 2;
        });
        catSheet.getColumn(1).width = 28;
        catSheet.getColumn(2).width = 10;
        catSheet.getColumn(3).width = 12;
    }
    const dateStr = new Date().toISOString().slice(0, 10);
    const filename = range === "all" ? `sales-all-periods-${dateStr}.xlsx` : `sales-${range}-${dateStr}.xlsx`;
    const buffer = await wb.xlsx.writeBuffer();
    const blob = new Blob([
        buffer
    ], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
}),
"[project]/src/app/(admin)/sales/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminSalesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$ChartBar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBar$3e$__ = __turbopack_context__.i("[project]/node_modules/griddy-icons/dist/icons/ChartBar/index.js [app-ssr] (ecmascript) <export default as ChartBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$productSold$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modal/productSold.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$salesExcelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/salesExcelExport.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AdminSalesPage() {
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("today");
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [topItems, setTopItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        count: 0,
        total: 0
    });
    const [byCategory, setByCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [productSoldModalOpen, setProductSoldModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pageByPeriod, setPageByPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        today: 1,
        week: 1,
        month: 1
    });
    const [showDownloadDropdown, setShowDownloadDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const TOP_ITEMS_PER_PAGE = 20;
    const currentPage = pageByPeriod[period] ?? 1;
    const topItemsTotalPages = Math.max(1, Math.ceil(topItems.length / TOP_ITEMS_PER_PAGE));
    const paginatedTopItems = topItems.slice((currentPage - 1) * TOP_ITEMS_PER_PAGE, currentPage * TOP_ITEMS_PER_PAGE);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function load() {
            setLoading(true);
            const from = new Date();
            if (period === "today") from.setHours(0, 0, 0, 0);
            else if (period === "week") from.setDate(from.getDate() - 7);
            else if (period === "month") from.setMonth(from.getMonth() - 1);
            const fromIso = from.toISOString();
            const { data: ordersData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total, created_at, status").eq("status", "completed").gte("created_at", fromIso).order("created_at", {
                ascending: false
            });
            setOrders(ordersData || []);
            const count = (ordersData || []).length;
            const total = (ordersData || []).reduce((s, o)=>s + Number(o.total), 0);
            setSummary({
                count,
                total
            });
            const [{ data: itemsData }, { data: productsData }, { data: categoriesData }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("order_items").select("product_id, product_name, quantity, line_total").gte("created_at", fromIso),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("products").select("id, category_id"),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("id, name").order("sort_order")
            ]);
            const productToCategory = {};
            (productsData || []).forEach((p)=>{
                productToCategory[p.id] = p.category_id;
            });
            const categoryNames = {};
            (categoriesData || []).forEach((c)=>{
                categoryNames[c.id] = c.name;
            });
            const byName = {};
            const categoryMap = {};
            (itemsData || []).forEach((row)=>{
                if (!byName[row.product_name]) byName[row.product_name] = {
                    name: row.product_name,
                    quantity: 0,
                    revenue: 0
                };
                byName[row.product_name].quantity += row.quantity;
                byName[row.product_name].revenue += Number(row.line_total);
                const catId = productToCategory[row.product_id] || null;
                const catName = catId ? categoryNames[catId] || "Uncategorized" : "Uncategorized";
                if (!categoryMap[catName]) categoryMap[catName] = {
                    products: {},
                    total: 0
                };
                if (!categoryMap[catName].products[row.product_name]) categoryMap[catName].products[row.product_name] = {
                    quantity: 0,
                    revenue: 0
                };
                categoryMap[catName].products[row.product_name].quantity += row.quantity;
                categoryMap[catName].products[row.product_name].revenue += Number(row.line_total);
                categoryMap[catName].total += Number(row.line_total);
            });
            setTopItems(Object.values(byName).sort((a, b)=>b.revenue - a.revenue));
            const categoryList = Object.entries(categoryMap).map(([name, data])=>({
                    name,
                    products: Object.entries(data.products).map(([pName, p])=>({
                            name: pName,
                            quantity: p.quantity,
                            revenue: p.revenue
                        })),
                    total: data.total
                })).sort((a, b)=>b.total - a.total);
            setByCategory(categoryList);
            setLoading(false);
        }
        load();
    }, [
        period
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setPageByPeriod((prev)=>{
            const maxPage = Math.max(1, topItemsTotalPages);
            const current = prev[period] ?? 1;
            if (current <= maxPage) return prev;
            return {
                ...prev,
                [period]: maxPage
            };
        });
    }, [
        period,
        topItemsTotalPages
    ]);
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const byDate = {};
        orders.forEach((o)=>{
            const d = new Date(o.created_at);
            const key = d.toISOString().slice(0, 10);
            if (!byDate[key]) byDate[key] = {
                date: key,
                label: d.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                }),
                revenue: 0,
                orders: 0
            };
            byDate[key].revenue += Number(o.total);
            byDate[key].orders += 1;
        });
        return Object.values(byDate).sort((a, b)=>a.date.localeCompare(b.date));
    }, [
        orders
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$ChartBar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBar$3e$__["ChartBar"], {
                        size: 28,
                        className: "text-stone-700"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-stone-800",
                        children: "Sales"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-stone-600",
                children: "View sales and calculate totals by period."
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            "today",
                            "week",
                            "month"
                        ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setPeriod(p),
                                className: "rounded-lg px-4 py-2 text-sm font-medium capitalize " + (period === p ? "bg-amber-200 text-amber-900" : "bg-stone-200 text-stone-700 hover:bg-stone-300"),
                                children: p
                            }, p, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowDownloadDropdown(!showDownloadDropdown),
                                className: "flex items-center gap-1 rounded-lg border border-green-600 bg-green-50 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-100",
                                children: [
                                    "Download as Excel",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: "▾"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            showDownloadDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-0 z-10",
                                        onClick: ()=>setShowDownloadDropdown(false),
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full z-20 mt-1 min-w-[200px] rounded-lg border border-stone-200 bg-white py-1 shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDownloadDropdown(false);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$salesExcelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadSalesExcel"])("today");
                                                },
                                                className: "block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100",
                                                children: "Download today's sales"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDownloadDropdown(false);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$salesExcelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadSalesExcel"])("week");
                                                },
                                                className: "block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100",
                                                children: "Download this week's sales"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDownloadDropdown(false);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$salesExcelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadSalesExcel"])("month");
                                                },
                                                className: "block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100",
                                                children: "Download this month's sales"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDownloadDropdown(false);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$salesExcelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadSalesExcel"])("all");
                                                },
                                                className: "block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100",
                                                children: "Download all sales"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 text-stone-500",
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 173,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold text-stone-800 mb-4",
                                children: "Sales by day"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            chartData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-64 w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: chartData,
                                        margin: {
                                            top: 8,
                                            right: 8,
                                            left: 0,
                                            bottom: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                className: "stroke-stone-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 182,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "label",
                                                tick: {
                                                    fontSize: 12
                                                },
                                                className: "text-stone-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 183,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                tick: {
                                                    fontSize: 12
                                                },
                                                tickFormatter: (v)=>`$${v}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 184,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                formatter: (value)=>`$${Number(value).toFixed(2)}`,
                                                labelFormatter: (label)=>label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "revenue",
                                                fill: "rgb(245 158 11)",
                                                radius: [
                                                    4,
                                                    4,
                                                    0,
                                                    0
                                                ],
                                                name: "Revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 186,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 181,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/sales/page.js",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-stone-500 py-8 text-center",
                                children: "No sales in this period."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-stone-800",
                                        children: "Sales summary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-3xl font-bold text-amber-700",
                                        children: [
                                            summary.count,
                                            " orders"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-mono text-stone-700",
                                        children: [
                                            "$",
                                            summary.total.toFixed(2),
                                            " revenue"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-stone-800",
                                        children: "Recent orders"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 max-h-48 space-y-1 overflow-y-auto text-sm",
                                        children: [
                                            orders.slice(0, 10).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-stone-600",
                                                            children: new Date(o.created_at).toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(admin)/sales/page.js",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono",
                                                            children: [
                                                                "$",
                                                                Number(o.total).toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(admin)/sales/page.js",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, o.id, true, {
                                                    fileName: "[project]/src/app/(admin)/sales/page.js",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)),
                                            orders.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-stone-500",
                                                children: "No orders in this period."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 210,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold text-stone-800",
                                children: "Products sold by category"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-stone-500",
                                children: "Quantity and total amount per product, grouped by category."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setProductSoldModalOpen(true),
                                className: "mt-4 rounded-xl bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600",
                                children: "View products by category"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$productSold$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductSoldModal"], {
                        open: productSoldModalOpen,
                        onClose: ()=>setProductSoldModalOpen(false),
                        byCategory: byCategory,
                        periodLabel: period === "today" ? "Today" : period === "week" ? "Last 7 days" : "Last 30 days"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold text-stone-800",
                                children: "Top selling items (by revenue)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 overflow-x-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-stone-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-2 font-semibold text-stone-800",
                                                            children: "Product"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(admin)/sales/page.js",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-2 font-semibold text-stone-800",
                                                            children: "Units sold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(admin)/sales/page.js",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-2 font-semibold text-stone-800",
                                                            children: "Revenue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(admin)/sales/page.js",
                                                            lineNumber: 242,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(admin)/sales/page.js",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: paginatedTopItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-stone-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-2 font-medium text-stone-800",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                                lineNumber: 248,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-2 font-mono text-stone-600",
                                                                children: item.quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                                lineNumber: 249,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-2 font-mono text-stone-700",
                                                                children: [
                                                                    "$",
                                                                    item.revenue.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                                lineNumber: 250,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, item.name, true, {
                                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this),
                                    topItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "py-6 text-center text-stone-500",
                                        children: "No item data for this period."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 255,
                                        columnNumber: 41
                                    }, this),
                                    topItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-stone-200 pt-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-stone-600",
                                                children: [
                                                    "Showing ",
                                                    (currentPage - 1) * TOP_ITEMS_PER_PAGE + 1,
                                                    "–",
                                                    Math.min(currentPage * TOP_ITEMS_PER_PAGE, topItems.length),
                                                    " of ",
                                                    topItems.length,
                                                    " items"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setPageByPeriod((prev)=>({
                                                                    ...prev,
                                                                    [period]: Math.max(1, (prev[period] ?? 1) - 1)
                                                                })),
                                                        disabled: currentPage <= 1,
                                                        className: "rounded-lg border border-stone-300 px-3 py-1.5 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50",
                                                        children: "Previous"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-stone-800",
                                                        children: [
                                                            "Page ",
                                                            currentPage,
                                                            " of ",
                                                            topItemsTotalPages
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setPageByPeriod((prev)=>({
                                                                    ...prev,
                                                                    [period]: Math.min(topItemsTotalPages, (prev[period] ?? 1) + 1)
                                                                })),
                                                        disabled: currentPage >= topItemsTotalPages,
                                                        className: "rounded-lg border border-stone-300 px-3 py-1.5 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50",
                                                        children: "Next"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(admin)/sales/page.js",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d3f2e806._.js.map