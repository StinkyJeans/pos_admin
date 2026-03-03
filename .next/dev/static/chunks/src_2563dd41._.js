(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/modal/productSold.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductSoldModal",
    ()=>ProductSoldModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProductSoldModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "3ff76975479f06fcaf11a0475f373d4e3c49d5e57a4e48cae19ee22c80349f04") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3ff76975479f06fcaf11a0475f373d4e3c49d5e57a4e48cae19ee22c80349f04";
    }
    const { open, onClose, byCategory, periodLabel } = t0;
    let t1;
    let t2;
    if ($[1] !== onClose || $[2] !== open) {
        t1 = ({
            "ProductSoldModal[useEffect()]": ()=>{
                if (!open) {
                    return;
                }
                const handleEscape = {
                    "ProductSoldModal[useEffect() > handleEscape]": (e)=>{
                        if (e.key === "Escape") {
                            onClose();
                        }
                    }
                }["ProductSoldModal[useEffect() > handleEscape]"];
                window.addEventListener("keydown", handleEscape);
                return ()=>window.removeEventListener("keydown", handleEscape);
            }
        })["ProductSoldModal[useEffect()]"];
        t2 = [
            open,
            onClose
        ];
        $[1] = onClose;
        $[2] = open;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!open) {
        return null;
    }
    let t10;
    let t11;
    let t12;
    let t13;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== byCategory || $[6] !== onClose || $[7] !== periodLabel) {
        const grandTotal = byCategory.reduce(_ProductSoldModalByCategoryReduce, 0);
        t9 = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50";
        t10 = onClose;
        t11 = "dialog";
        t12 = "true";
        t13 = "product-sold-modal-title";
        t6 = "relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl";
        t7 = _ProductSoldModalDivOnClick;
        let t14;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "product-sold-modal-title",
                className: "text-xl font-bold text-stone-800",
                children: "Products sold by category"
            }, void 0, false, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 73,
                columnNumber: 13
            }, this);
            $[19] = t14;
        } else {
            t14 = $[19];
        }
        let t15;
        if ($[20] !== periodLabel) {
            t15 = periodLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-sm text-stone-500",
                children: periodLabel
            }, void 0, false, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 80,
                columnNumber: 28
            }, this);
            $[20] = periodLabel;
            $[21] = t15;
        } else {
            t15 = $[21];
        }
        let t16;
        if ($[22] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t14,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 88,
                columnNumber: 13
            }, this);
            $[22] = t15;
            $[23] = t16;
        } else {
            t16 = $[23];
        }
        let t17;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl leading-none",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 96,
                columnNumber: 13
            }, this);
            $[24] = t17;
        } else {
            t17 = $[24];
        }
        let t18;
        if ($[25] !== onClose) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onClose,
                className: "rounded-lg p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-800",
                "aria-label": "Close",
                children: t17
            }, void 0, false, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 103,
                columnNumber: 13
            }, this);
            $[25] = onClose;
            $[26] = t18;
        } else {
            t18 = $[26];
        }
        if ($[27] !== t16 || $[28] !== t18) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-stone-200 px-6 py-4",
                children: [
                    t16,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 110,
                columnNumber: 12
            }, this);
            $[27] = t16;
            $[28] = t18;
            $[29] = t8;
        } else {
            t8 = $[29];
        }
        t3 = "overflow-y-auto max-h-[calc(90vh-5rem)] px-6 py-4";
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-stone-500 mb-4",
                children: "Quantity and total amount per product, grouped by category."
            }, void 0, false, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 119,
                columnNumber: 12
            }, this);
            $[30] = t4;
        } else {
            t4 = $[30];
        }
        t5 = byCategory.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                byCategory.map(_ProductSoldModalByCategoryMap),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border-2 border-amber-200 bg-amber-50 px-4 py-3 flex justify-end gap-6 text-base font-bold text-stone-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Total (all products):"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modal/productSold.js",
                            lineNumber: 124,
                            columnNumber: 243
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono",
                            children: [
                                "$",
                                grandTotal.toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modal/productSold.js",
                            lineNumber: 124,
                            columnNumber: 277
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modal/productSold.js",
                    lineNumber: 124,
                    columnNumber: 109
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modal/productSold.js",
            lineNumber: 124,
            columnNumber: 34
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-8 text-center text-stone-500",
            children: "No products sold in this period."
        }, void 0, false, {
            fileName: "[project]/src/components/modal/productSold.js",
            lineNumber: 124,
            columnNumber: 351
        }, this);
        $[5] = byCategory;
        $[6] = onClose;
        $[7] = periodLabel;
        $[8] = t10;
        $[9] = t11;
        $[10] = t12;
        $[11] = t13;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
    } else {
        t10 = $[8];
        t11 = $[9];
        t12 = $[10];
        t13 = $[11];
        t3 = $[12];
        t4 = $[13];
        t5 = $[14];
        t6 = $[15];
        t7 = $[16];
        t8 = $[17];
        t9 = $[18];
    }
    let t14;
    if ($[31] !== t3 || $[32] !== t4 || $[33] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modal/productSold.js",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[31] = t3;
        $[32] = t4;
        $[33] = t5;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== t14 || $[36] !== t6 || $[37] !== t7 || $[38] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            onClick: t7,
            children: [
                t8,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modal/productSold.js",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[35] = t14;
        $[36] = t6;
        $[37] = t7;
        $[38] = t8;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== t10 || $[41] !== t11 || $[42] !== t12 || $[43] !== t13 || $[44] !== t15 || $[45] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            onClick: t10,
            role: t11,
            "aria-modal": t12,
            "aria-labelledby": t13,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/modal/productSold.js",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t11;
        $[42] = t12;
        $[43] = t13;
        $[44] = t15;
        $[45] = t9;
        $[46] = t16;
    } else {
        t16 = $[46];
    }
    return t16;
}
_s(ProductSoldModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ProductSoldModal;
function _ProductSoldModalByCategoryMap(cat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-stone-200 bg-stone-50/50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 bg-stone-100 font-semibold text-stone-800",
                children: cat.name
            }, void 0, false, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 189,
                columnNumber: 108
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-left text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-stone-200 bg-white/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-2 font-semibold text-stone-800",
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/productSold.js",
                                    lineNumber: 189,
                                    columnNumber: 298
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-2 font-semibold text-stone-800 text-right",
                                    children: "Qty"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/productSold.js",
                                    lineNumber: 189,
                                    columnNumber: 365
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-2 font-semibold text-stone-800 text-right",
                                    children: "Amount"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/productSold.js",
                                    lineNumber: 189,
                                    columnNumber: 439
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modal/productSold.js",
                            lineNumber: 189,
                            columnNumber: 244
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modal/productSold.js",
                        lineNumber: 189,
                        columnNumber: 237
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: cat.products.map(_ProductSoldModalByCategoryMapCatProductsMap)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modal/productSold.js",
                        lineNumber: 189,
                        columnNumber: 529
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 189,
                columnNumber: 193
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 bg-amber-50 border-t border-amber-100 flex justify-end gap-6 text-sm font-semibold text-stone-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Category total:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modal/productSold.js",
                        lineNumber: 189,
                        columnNumber: 741
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono",
                        children: [
                            "$",
                            cat.total.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modal/productSold.js",
                        lineNumber: 189,
                        columnNumber: 769
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 189,
                columnNumber: 616
            }, this)
        ]
    }, cat.name, true, {
        fileName: "[project]/src/components/modal/productSold.js",
        lineNumber: 189,
        columnNumber: 10
    }, this);
}
function _ProductSoldModalByCategoryMapCatProductsMap(p) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-stone-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-2 font-medium text-stone-800",
                children: p.name
            }, void 0, false, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 192,
                columnNumber: 65
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-2 font-mono text-stone-600 text-right",
                children: p.quantity
            }, void 0, false, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 192,
                columnNumber: 131
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-2 font-mono text-stone-700 text-right",
                children: [
                    "$",
                    p.revenue.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modal/productSold.js",
                lineNumber: 192,
                columnNumber: 210
            }, this)
        ]
    }, p.name, true, {
        fileName: "[project]/src/components/modal/productSold.js",
        lineNumber: 192,
        columnNumber: 10
    }, this);
}
function _ProductSoldModalDivOnClick(e_0) {
    return e_0.stopPropagation();
}
function _ProductSoldModalByCategoryReduce(s, c) {
    return s + c.total;
}
var _c;
__turbopack_context__.k.register(_c, "ProductSoldModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/salesExcelExport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadSalesExcel",
    ()=>downloadSalesExcel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exceljs$2f$dist$2f$exceljs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/exceljs/dist/exceljs.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
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
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total, subtotal, tax, created_at, status").eq("status", "completed").gte("created_at", todayIso).order("created_at", {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total, subtotal, tax, created_at, status").eq("status", "completed").gte("created_at", weekIso).order("created_at", {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total, subtotal, tax, created_at, status").eq("status", "completed").gte("created_at", monthIso).order("created_at", {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total").eq("status", "completed").gte("created_at", prevTodayIso).lt("created_at", todayIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total").eq("status", "completed").gte("created_at", prevWeekIso).lt("created_at", weekIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total").eq("status", "completed").gte("created_at", prevMonthIso).lt("created_at", monthIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("order_items").select("product_id, product_name, quantity, line_total").gte("created_at", todayIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("order_items").select("product_id, product_name, quantity, line_total").gte("created_at", weekIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("order_items").select("product_id, product_name, quantity, line_total").gte("created_at", monthIso),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("id, category_id, cost"),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("id, name").order("sort_order")
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
    const wb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exceljs$2f$dist$2f$exceljs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Workbook();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(admin)/sales/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminSalesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$ChartBar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBar$3e$__ = __turbopack_context__.i("[project]/node_modules/griddy-icons/dist/icons/ChartBar/index.js [app-client] (ecmascript) <export default as ChartBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$productSold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modal/productSold.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$salesExcelExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/salesExcelExport.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AdminSalesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "caa53bc2226de7fa6cbc20773e33f2448a96a2c6e6cbe5e1c729d0ade839d681") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "caa53bc2226de7fa6cbc20773e33f2448a96a2c6e6cbe5e1c729d0ade839d681";
    }
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("today");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [topItems, setTopItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            count: 0,
            total: 0
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [byCategory, setByCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [productSoldModalOpen, setProductSoldModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            today: 1,
            week: 1,
            month: 1
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const [pageByPeriod, setPageByPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    const [showDownloadDropdown, setShowDownloadDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentPage = pageByPeriod[period] ?? 1;
    const topItemsTotalPages = Math.max(1, Math.ceil(topItems.length / 20));
    const paginatedTopItems = topItems.slice((currentPage - 1) * 20, currentPage * 20);
    let t5;
    let t6;
    if ($[6] !== period) {
        t5 = ({
            "AdminSalesPage[useEffect()]": ()=>{
                const load = async function load() {
                    setLoading(true);
                    const from = new Date();
                    if (period === "today") {
                        from.setHours(0, 0, 0, 0);
                    } else {
                        if (period === "week") {
                            from.setDate(from.getDate() - 7);
                        } else {
                            if (period === "month") {
                                from.setMonth(from.getMonth() - 1);
                            }
                        }
                    }
                    const fromIso = from.toISOString();
                    const { data: ordersData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, total, created_at, status").eq("status", "completed").gte("created_at", fromIso).order("created_at", {
                        ascending: false
                    });
                    setOrders(ordersData || []);
                    const count = (ordersData || []).length;
                    const total = (ordersData || []).reduce(_AdminSalesPageUseEffectLoadAnonymous, 0);
                    setSummary({
                        count,
                        total
                    });
                    const [t7, t8, t9] = await Promise.all([
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("order_items").select("product_id, product_name, quantity, line_total").gte("created_at", fromIso),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("id, category_id"),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("id, name").order("sort_order")
                    ]);
                    const { data: itemsData } = t7;
                    const { data: productsData } = t8;
                    const { data: categoriesData } = t9;
                    const productToCategory = {};
                    (productsData || []).forEach({
                        "AdminSalesPage[useEffect() > load > (anonymous)()]": (p)=>{
                            productToCategory[p.id] = p.category_id;
                        }
                    }["AdminSalesPage[useEffect() > load > (anonymous)()]"]);
                    const categoryNames = {};
                    (categoriesData || []).forEach({
                        "AdminSalesPage[useEffect() > load > (anonymous)()]": (c)=>{
                            categoryNames[c.id] = c.name;
                        }
                    }["AdminSalesPage[useEffect() > load > (anonymous)()]"]);
                    const byName = {};
                    const categoryMap = {};
                    (itemsData || []).forEach({
                        "AdminSalesPage[useEffect() > load > (anonymous)()]": (row)=>{
                            if (!byName[row.product_name]) {
                                byName[row.product_name] = {
                                    name: row.product_name,
                                    quantity: 0,
                                    revenue: 0
                                };
                            }
                            byName[row.product_name].quantity = byName[row.product_name].quantity + row.quantity;
                            byName[row.product_name].revenue = byName[row.product_name].revenue + Number(row.line_total);
                            const catId = productToCategory[row.product_id] || null;
                            const catName = catId ? categoryNames[catId] || "Uncategorized" : "Uncategorized";
                            if (!categoryMap[catName]) {
                                categoryMap[catName] = {
                                    products: {},
                                    total: 0
                                };
                            }
                            if (!categoryMap[catName].products[row.product_name]) {
                                categoryMap[catName].products[row.product_name] = {
                                    quantity: 0,
                                    revenue: 0
                                };
                            }
                            categoryMap[catName].products[row.product_name].quantity = categoryMap[catName].products[row.product_name].quantity + row.quantity;
                            categoryMap[catName].products[row.product_name].revenue = categoryMap[catName].products[row.product_name].revenue + Number(row.line_total);
                            categoryMap[catName].total = categoryMap[catName].total + Number(row.line_total);
                        }
                    }["AdminSalesPage[useEffect() > load > (anonymous)()]"]);
                    setTopItems(Object.values(byName).sort(_AdminSalesPageUseEffectLoadAnonymous2));
                    const categoryList = Object.entries(categoryMap).map(_AdminSalesPageUseEffectLoadAnonymous3).sort(_AdminSalesPageUseEffectLoadAnonymous4);
                    setByCategory(categoryList);
                    setLoading(false);
                };
                load();
            }
        })["AdminSalesPage[useEffect()]"];
        t6 = [
            period
        ];
        $[6] = period;
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[9] !== period || $[10] !== topItemsTotalPages) {
        t7 = ({
            "AdminSalesPage[useEffect()]": ()=>{
                setPageByPeriod({
                    "AdminSalesPage[useEffect() > setPageByPeriod()]": (prev)=>{
                        const maxPage = Math.max(1, topItemsTotalPages);
                        const current = prev[period] ?? 1;
                        if (current <= maxPage) {
                            return prev;
                        }
                        return {
                            ...prev,
                            [period]: maxPage
                        };
                    }
                }["AdminSalesPage[useEffect() > setPageByPeriod()]"]);
            }
        })["AdminSalesPage[useEffect()]"];
        t8 = [
            period,
            topItemsTotalPages
        ];
        $[9] = period;
        $[10] = topItemsTotalPages;
        $[11] = t7;
        $[12] = t8;
    } else {
        t7 = $[11];
        t8 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[13] !== orders) {
        const byDate = {};
        orders.forEach({
            "AdminSalesPage[orders.forEach()]": (o_0)=>{
                const d = new Date(o_0.created_at);
                const key = d.toISOString().slice(0, 10);
                if (!byDate[key]) {
                    byDate[key] = {
                        date: key,
                        label: d.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric"
                        }),
                        revenue: 0,
                        orders: 0
                    };
                }
                byDate[key].revenue = byDate[key].revenue + Number(o_0.total);
                byDate[key].orders = byDate[key].orders + 1;
            }
        }["AdminSalesPage[orders.forEach()]"]);
        t9 = Object.values(byDate).sort(_AdminSalesPageAnonymous);
        $[13] = orders;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    const chartData = t9;
    let t10;
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$ChartBar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBar$3e$__["ChartBar"], {
                    size: 28,
                    className: "text-stone-700"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/sales/page.js",
                    lineNumber: 238,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-stone-800",
                    children: "Sales"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/sales/page.js",
                    lineNumber: 238,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/sales/page.js",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-stone-600",
            children: "View sales and calculate totals by period."
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/sales/page.js",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t11;
    } else {
        t10 = $[15];
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = [
            "today",
            "week",
            "month"
        ];
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== period) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: t12.map({
                "AdminSalesPage[(anonymous)()]": (p_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "AdminSalesPage[(anonymous)() > <button>.onClick]": ()=>setPeriod(p_1)
                        }["AdminSalesPage[(anonymous)() > <button>.onClick]"],
                        className: "rounded-lg px-4 py-2 text-sm font-medium capitalize " + (period === p_1 ? "bg-amber-200 text-amber-900" : "bg-stone-200 text-stone-700 hover:bg-stone-300"),
                        children: p_1
                    }, p_1, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 256,
                        columnNumber: 49
                    }, this)
            }["AdminSalesPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/sales/page.js",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[18] = period;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== loading || $[21] !== showDownloadDropdown) {
        t14 = !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "AdminSalesPage[<button>.onClick]": ()=>setShowDownloadDropdown(!showDownloadDropdown)
                    }["AdminSalesPage[<button>.onClick]"],
                    className: "flex items-center gap-1 rounded-lg border border-green-600 bg-green-50 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-100",
                    children: [
                        "Download as Excel",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs",
                            children: "▾"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/sales/page.js",
                            lineNumber: 269,
                            columnNumber: 210
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(admin)/sales/page.js",
                    lineNumber: 267,
                    columnNumber: 49
                }, this),
                showDownloadDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 z-10",
                            onClick: {
                                "AdminSalesPage[<div>.onClick]": ()=>setShowDownloadDropdown(false)
                            }["AdminSalesPage[<div>.onClick]"],
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/sales/page.js",
                            lineNumber: 269,
                            columnNumber: 280
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-0 top-full z-20 mt-1 min-w-[200px] rounded-lg border border-stone-200 bg-white py-1 shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "AdminSalesPage[<button>.onClick]": ()=>{
                                            setShowDownloadDropdown(false);
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$salesExcelExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadSalesExcel"])("today");
                                        }
                                    }["AdminSalesPage[<button>.onClick]"],
                                    className: "block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100",
                                    children: "Download today's sales"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/sales/page.js",
                                    lineNumber: 271,
                                    columnNumber: 192
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "AdminSalesPage[<button>.onClick]": ()=>{
                                            setShowDownloadDropdown(false);
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$salesExcelExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadSalesExcel"])("week");
                                        }
                                    }["AdminSalesPage[<button>.onClick]"],
                                    className: "block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100",
                                    children: "Download this week's sales"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/sales/page.js",
                                    lineNumber: 276,
                                    columnNumber: 168
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "AdminSalesPage[<button>.onClick]": ()=>{
                                            setShowDownloadDropdown(false);
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$salesExcelExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadSalesExcel"])("month");
                                        }
                                    }["AdminSalesPage[<button>.onClick]"],
                                    className: "block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100",
                                    children: "Download this month's sales"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/sales/page.js",
                                    lineNumber: 281,
                                    columnNumber: 172
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "AdminSalesPage[<button>.onClick]": ()=>{
                                            setShowDownloadDropdown(false);
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$salesExcelExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadSalesExcel"])("all");
                                        }
                                    }["AdminSalesPage[<button>.onClick]"],
                                    className: "block w-full px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100",
                                    children: "Download all sales"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/sales/page.js",
                                    lineNumber: 286,
                                    columnNumber: 173
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/sales/page.js",
                            lineNumber: 271,
                            columnNumber: 66
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/sales/page.js",
            lineNumber: 267,
            columnNumber: 23
        }, this);
        $[20] = loading;
        $[21] = showDownloadDropdown;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t13 || $[24] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex flex-wrap items-center justify-between gap-2",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/sales/page.js",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t14;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    const t16 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "mt-6 text-stone-500",
        children: "Loading…"
    }, void 0, false, {
        fileName: "[project]/src/app/(admin)/sales/page.js",
        lineNumber: 307,
        columnNumber: 25
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-stone-800 mb-4",
                        children: "Sales by day"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 307,
                        columnNumber: 158
                    }, this),
                    chartData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: chartData,
                                margin: {
                                    top: 8,
                                    right: 8,
                                    left: 0,
                                    bottom: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        strokeDasharray: "3 3",
                                        className: "stroke-stone-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 312,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "label",
                                        tick: {
                                            fontSize: 12
                                        },
                                        className: "text-stone-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 312,
                                        columnNumber: 82
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        tick: {
                                            fontSize: 12
                                        },
                                        tickFormatter: _AdminSalesPageYAxisTickFormatter
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 314,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        formatter: _AdminSalesPageTooltipFormatter,
                                        labelFormatter: _AdminSalesPageTooltipLabelFormatter
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 316,
                                        columnNumber: 68
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
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
                                        lineNumber: 316,
                                        columnNumber: 177
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 307,
                                columnNumber: 326
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/sales/page.js",
                            lineNumber: 307,
                            columnNumber: 278
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 307,
                        columnNumber: 249
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-stone-500 py-8 text-center",
                        children: "No sales in this period."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 316,
                        columnNumber: 304
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 307,
                columnNumber: 77
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid gap-6 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold text-stone-800",
                                children: "Sales summary"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 316,
                                columnNumber: 510
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-3xl font-bold text-amber-700",
                                children: [
                                    summary.count,
                                    " orders"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 316,
                                columnNumber: 573
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-mono text-stone-700",
                                children: [
                                    "$",
                                    summary.total.toFixed(2),
                                    " revenue"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 316,
                                columnNumber: 653
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 316,
                        columnNumber: 434
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold text-stone-800",
                                children: "Recent orders"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 316,
                                columnNumber: 823
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-2 max-h-48 space-y-1 overflow-y-auto text-sm",
                                children: [
                                    orders.slice(0, 10).map(_AdminSalesPageAnonymous2),
                                    orders.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-stone-500",
                                        children: "No orders in this period."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 316,
                                        columnNumber: 1026
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 316,
                                columnNumber: 886
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 316,
                        columnNumber: 747
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 316,
                columnNumber: 386
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-stone-800",
                        children: "Products sold by category"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 316,
                        columnNumber: 1186
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-stone-500",
                        children: "Quantity and total amount per product, grouped by category."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 316,
                        columnNumber: 1261
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "AdminSalesPage[<button>.onClick]": ()=>setProductSoldModalOpen(true)
                        }["AdminSalesPage[<button>.onClick]"],
                        className: "mt-4 rounded-xl bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600",
                        children: "View products by category"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 316,
                        columnNumber: 1367
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 316,
                columnNumber: 1105
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$productSold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductSoldModal"], {
                open: productSoldModalOpen,
                onClose: {
                    "AdminSalesPage[<ProductSoldModal>.onClose]": ()=>setProductSoldModalOpen(false)
                }["AdminSalesPage[<ProductSoldModal>.onClose]"],
                byCategory: byCategory,
                periodLabel: period === "today" ? "Today" : period === "week" ? "Last 7 days" : "Last 30 days"
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 318,
                columnNumber: 179
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-stone-800",
                        children: "Top selling items (by revenue)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 320,
                        columnNumber: 257
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 overflow-x-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-stone-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "pb-2 font-semibold text-stone-800",
                                                    children: "Product"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(admin)/sales/page.js",
                                                    lineNumber: 320,
                                                    columnNumber: 468
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "pb-2 font-semibold text-stone-800",
                                                    children: "Units sold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(admin)/sales/page.js",
                                                    lineNumber: 320,
                                                    columnNumber: 530
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "pb-2 font-semibold text-stone-800",
                                                    children: "Revenue"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(admin)/sales/page.js",
                                                    lineNumber: 320,
                                                    columnNumber: 595
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(admin)/sales/page.js",
                                            lineNumber: 320,
                                            columnNumber: 426
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 320,
                                        columnNumber: 419
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: paginatedTopItems.map(_AdminSalesPagePaginatedTopItemsMap)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 320,
                                        columnNumber: 670
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 320,
                                columnNumber: 375
                            }, this),
                            topItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "py-6 text-center text-stone-500",
                                children: "No item data for this period."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 320,
                                columnNumber: 779
                            }, this),
                            topItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-stone-200 pt-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-stone-600",
                                        children: [
                                            "Showing ",
                                            (currentPage - 1) * 20 + 1,
                                            "–",
                                            Math.min(currentPage * 20, topItems.length),
                                            " of ",
                                            topItems.length,
                                            " items"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 320,
                                        columnNumber: 995
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: {
                                                    "AdminSalesPage[<button>.onClick]": ()=>setPageByPeriod({
                                                            "AdminSalesPage[<button>.onClick > setPageByPeriod()]": (prev_0)=>({
                                                                    ...prev_0,
                                                                    [period]: Math.max(1, (prev_0[period] ?? 1) - 1)
                                                                })
                                                        }["AdminSalesPage[<button>.onClick > setPageByPeriod()]"])
                                                }["AdminSalesPage[<button>.onClick]"],
                                                disabled: currentPage <= 1,
                                                className: "rounded-lg border border-stone-300 px-3 py-1.5 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50",
                                                children: "Previous"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 320,
                                                columnNumber: 1185
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-stone-800",
                                                children: [
                                                    "Page ",
                                                    currentPage,
                                                    " of ",
                                                    topItemsTotalPages
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 327,
                                                columnNumber: 251
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: {
                                                    "AdminSalesPage[<button>.onClick]": ()=>setPageByPeriod({
                                                            "AdminSalesPage[<button>.onClick > setPageByPeriod()]": (prev_1)=>({
                                                                    ...prev_1,
                                                                    [period]: Math.min(topItemsTotalPages, (prev_1[period] ?? 1) + 1)
                                                                })
                                                        }["AdminSalesPage[<button>.onClick > setPageByPeriod()]"])
                                                }["AdminSalesPage[<button>.onClick]"],
                                                disabled: currentPage >= topItemsTotalPages,
                                                className: "rounded-lg border border-stone-300 px-3 py-1.5 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50",
                                                children: "Next"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                                lineNumber: 327,
                                                columnNumber: 345
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/sales/page.js",
                                        lineNumber: 320,
                                        columnNumber: 1144
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/sales/page.js",
                                lineNumber: 320,
                                columnNumber: 884
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/sales/page.js",
                        lineNumber: 320,
                        columnNumber: 337
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 320,
                columnNumber: 176
            }, this)
        ]
    }, void 0, true);
    let t17;
    if ($[26] !== t10 || $[27] !== t11 || $[28] !== t15 || $[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/sales/page.js",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t11;
        $[28] = t15;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    return t17;
}
_s(AdminSalesPage, "MaUlSnOutIRF2McFq7kTYd/qobM=");
_c = AdminSalesPage;
function _AdminSalesPagePaginatedTopItemsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-stone-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-2 font-medium text-stone-800",
                children: item.name
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 349,
                columnNumber: 68
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-2 font-mono text-stone-600",
                children: item.quantity
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 349,
                columnNumber: 132
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-2 font-mono text-stone-700",
                children: [
                    "$",
                    item.revenue.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 349,
                columnNumber: 198
            }, this)
        ]
    }, item.name, true, {
        fileName: "[project]/src/app/(admin)/sales/page.js",
        lineNumber: 349,
        columnNumber: 10
    }, this);
}
function _AdminSalesPageAnonymous2(o_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-stone-600",
                children: new Date(o_1.created_at).toLocaleString()
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 352,
                columnNumber: 60
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono",
                children: [
                    "$",
                    Number(o_1.total).toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/sales/page.js",
                lineNumber: 352,
                columnNumber: 143
            }, this)
        ]
    }, o_1.id, true, {
        fileName: "[project]/src/app/(admin)/sales/page.js",
        lineNumber: 352,
        columnNumber: 10
    }, this);
}
function _AdminSalesPageTooltipLabelFormatter(label) {
    return label;
}
function _AdminSalesPageTooltipFormatter(value) {
    return `$${Number(value).toFixed(2)}`;
}
function _AdminSalesPageYAxisTickFormatter(v) {
    return `$${v}`;
}
function _AdminSalesPageAnonymous(a_1, b_1) {
    return a_1.date.localeCompare(b_1.date);
}
function _AdminSalesPageUseEffectLoadAnonymous4(a_0, b_0) {
    return b_0.total - a_0.total;
}
function _AdminSalesPageUseEffectLoadAnonymous3(t0) {
    const [name, data] = t0;
    return {
        name,
        products: Object.entries(data.products).map(_AdminSalesPageUseEffectLoadAnonymousAnonymous),
        total: data.total
    };
}
function _AdminSalesPageUseEffectLoadAnonymousAnonymous(t0) {
    const [pName, p_0] = t0;
    return {
        name: pName,
        quantity: p_0.quantity,
        revenue: p_0.revenue
    };
}
function _AdminSalesPageUseEffectLoadAnonymous2(a, b) {
    return b.revenue - a.revenue;
}
function _AdminSalesPageUseEffectLoadAnonymous(s, o) {
    return s + Number(o.total);
}
var _c;
__turbopack_context__.k.register(_c, "AdminSalesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2563dd41._.js.map