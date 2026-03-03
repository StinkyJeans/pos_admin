(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/modal/deleteHistory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteHistoryModal",
    ()=>DeleteHistoryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$RefreshCcw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/griddy-icons/dist/icons/RefreshCcw/index.js [app-client] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Trash$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/griddy-icons/dist/icons/Trash/index.js [app-client] (ecmascript) <export default as Trash>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DeleteHistoryModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "ffcb5be12118e787b3b1c0743c305182332072d50cfc100546d01474638f9323") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ffcb5be12118e787b3b1c0743c305182332072d50cfc100546d01474638f9323";
    }
    const { open, onClose, inactiveProducts, onRestoreClick, onDeletePermanent } = t0;
    let t1;
    let t2;
    if ($[1] !== onClose || $[2] !== open) {
        t1 = ({
            "DeleteHistoryModal[useEffect()]": ()=>{
                if (!open) {
                    return;
                }
                const handleEscape = {
                    "DeleteHistoryModal[useEffect() > handleEscape]": (e)=>{
                        if (e.key === "Escape") {
                            onClose();
                        }
                    }
                }["DeleteHistoryModal[useEffect() > handleEscape]"];
                window.addEventListener("keydown", handleEscape);
                return ()=>window.removeEventListener("keydown", handleEscape);
            }
        })["DeleteHistoryModal[useEffect()]"];
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
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "delete-history-modal-title",
                    className: "text-xl font-bold text-stone-800",
                    children: "Delete history"
                }, void 0, false, {
                    fileName: "[project]/src/components/modal/deleteHistory.js",
                    lineNumber: 55,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-0.5 text-sm text-stone-500",
                    children: "Restore a product, or permanently delete it from the system."
                }, void 0, false, {
                    fileName: "[project]/src/components/modal/deleteHistory.js",
                    lineNumber: 55,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modal/deleteHistory.js",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xl leading-none",
            children: "×"
        }, void 0, false, {
            fileName: "[project]/src/components/modal/deleteHistory.js",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== onClose) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-stone-200 px-6 py-4",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onClose,
                    className: "rounded-lg p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-800",
                    "aria-label": "Close",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/src/components/modal/deleteHistory.js",
                    lineNumber: 69,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modal/deleteHistory.js",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[7] = onClose;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== inactiveProducts || $[10] !== onDeletePermanent || $[11] !== onRestoreClick) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-y-auto max-h-[calc(90vh-5rem)] px-6 py-4",
            children: !inactiveProducts?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-12 text-center text-stone-500",
                children: "No deactivated products."
            }, void 0, false, {
                fileName: "[project]/src/components/modal/deleteHistory.js",
                lineNumber: 77,
                columnNumber: 106
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-left text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "border-b border-stone-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "pb-2 font-semibold text-stone-800",
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/deleteHistory.js",
                                    lineNumber: 77,
                                    columnNumber: 282
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "pb-2 font-semibold text-stone-800",
                                    children: "Barcode"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/deleteHistory.js",
                                    lineNumber: 77,
                                    columnNumber: 344
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "pb-2 font-semibold text-stone-800",
                                    children: "Category"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/deleteHistory.js",
                                    lineNumber: 77,
                                    columnNumber: 406
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "pb-2 font-semibold text-stone-800",
                                    children: "Price"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/deleteHistory.js",
                                    lineNumber: 77,
                                    columnNumber: 469
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "pb-2 font-semibold text-stone-800",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/deleteHistory.js",
                                    lineNumber: 77,
                                    columnNumber: 529
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modal/deleteHistory.js",
                            lineNumber: 77,
                            columnNumber: 278
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modal/deleteHistory.js",
                        lineNumber: 77,
                        columnNumber: 233
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: inactiveProducts.map({
                            "DeleteHistoryModal[inactiveProducts.map()]": (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-stone-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-3 font-medium text-stone-800",
                                            children: p.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modal/deleteHistory.js",
                                            lineNumber: 78,
                                            columnNumber: 117
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-3 font-mono text-stone-600",
                                            children: p.barcode || "\u2014"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modal/deleteHistory.js",
                                            lineNumber: 78,
                                            columnNumber: 178
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-3 text-stone-600",
                                            children: p.categories?.name ?? "\u2014"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modal/deleteHistory.js",
                                            lineNumber: 78,
                                            columnNumber: 252
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-3 font-mono text-stone-600",
                                            children: [
                                                "$",
                                                Number(p.price).toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modal/deleteHistory.js",
                                            lineNumber: 78,
                                            columnNumber: 325
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: {
                                                            "DeleteHistoryModal[inactiveProducts.map() > <button>.onClick]": ()=>onRestoreClick(p)
                                                        }["DeleteHistoryModal[inactiveProducts.map() > <button>.onClick]"],
                                                        className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-800 hover:bg-green-200",
                                                        "aria-label": "Restore product",
                                                        title: "Restore product",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$RefreshCcw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modal/deleteHistory.js",
                                                            lineNumber: 80,
                                                            columnNumber: 260
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modal/deleteHistory.js",
                                                        lineNumber: 78,
                                                        columnNumber: 467
                                                    }, this),
                                                    onDeletePermanent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: {
                                                            "DeleteHistoryModal[inactiveProducts.map() > <button>.onClick]": ()=>onDeletePermanent(p)
                                                        }["DeleteHistoryModal[inactiveProducts.map() > <button>.onClick]"],
                                                        className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-800 hover:bg-red-200",
                                                        "aria-label": "Delete permanently",
                                                        title: "Delete permanently",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Trash$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modal/deleteHistory.js",
                                                            lineNumber: 82,
                                                            columnNumber: 260
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modal/deleteHistory.js",
                                                        lineNumber: 80,
                                                        columnNumber: 315
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modal/deleteHistory.js",
                                                lineNumber: 78,
                                                columnNumber: 426
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modal/deleteHistory.js",
                                            lineNumber: 78,
                                            columnNumber: 405
                                        }, this)
                                    ]
                                }, p.id, true, {
                                    fileName: "[project]/src/components/modal/deleteHistory.js",
                                    lineNumber: 78,
                                    columnNumber: 64
                                }, this)
                        }["DeleteHistoryModal[inactiveProducts.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/components/modal/deleteHistory.js",
                        lineNumber: 77,
                        columnNumber: 604
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modal/deleteHistory.js",
                lineNumber: 77,
                columnNumber: 189
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modal/deleteHistory.js",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[9] = inactiveProducts;
        $[10] = onDeletePermanent;
        $[11] = onRestoreClick;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t5 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl",
            onClick: _DeleteHistoryModalDivOnClick,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modal/deleteHistory.js",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== onClose || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50",
            onClick: onClose,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "delete-history-modal-title",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/modal/deleteHistory.js",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[16] = onClose;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
}
_s(DeleteHistoryModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DeleteHistoryModal;
function _DeleteHistoryModalDivOnClick(e_0) {
    return e_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "DeleteHistoryModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modal/lowStackItems.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LowStockItemsModal",
    ()=>LowStockItemsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Edit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/griddy-icons/dist/icons/Edit/index.js [app-client] (ecmascript) <export default as Edit>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PER_PAGE = 50;
function LowStockItemsModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "85345714ddf1e50e87a94ccd52902736d84856b7358be9d2b7317cc47480018d") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85345714ddf1e50e87a94ccd52902736d84856b7358be9d2b7317cc47480018d";
    }
    const { open, onClose, items, onEdit, editingId, editQty, onChangeQty, onSaveEdit, onCancelEdit } = t0;
    let t1;
    let t2;
    if ($[1] !== onClose || $[2] !== open) {
        t1 = ({
            "LowStockItemsModal[useEffect()]": ()=>{
                if (!open) {
                    return;
                }
                const handleEscape = {
                    "LowStockItemsModal[useEffect() > handleEscape]": (e)=>{
                        if (e.key === "Escape") {
                            onClose();
                        }
                    }
                }["LowStockItemsModal[useEffect() > handleEscape]"];
                window.addEventListener("keydown", handleEscape);
                return ()=>window.removeEventListener("keydown", handleEscape);
            }
        })["LowStockItemsModal[useEffect()]"];
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
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    if (!open) {
        return null;
    }
    const totalItems = items?.length || 0;
    const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));
    const safePage = Math.min(page, totalPages);
    const startIndex = (safePage - 1) * PER_PAGE;
    let t10;
    let t11;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== editQty || $[6] !== editingId || $[7] !== items || $[8] !== onCancelEdit || $[9] !== onChangeQty || $[10] !== onClose || $[11] !== onEdit || $[12] !== onSaveEdit || $[13] !== safePage || $[14] !== startIndex || $[15] !== totalItems || $[16] !== totalPages) {
        const paginatedItems = (items || []).slice(startIndex, startIndex + PER_PAGE);
        let t12;
        if ($[26] !== onClose) {
            t12 = ({
                "LowStockItemsModal[handleBackdropClick]": ()=>{
                    onClose();
                }
            })["LowStockItemsModal[handleBackdropClick]"];
            $[26] = onClose;
            $[27] = t12;
        } else {
            t12 = $[27];
        }
        const handleBackdropClick = t12;
        t7 = "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4";
        t8 = handleBackdropClick;
        t9 = "dialog";
        t10 = "true";
        t11 = "low-stock-modal-title";
        t3 = "relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl";
        t4 = _LowStockItemsModalDivOnClick;
        let t13;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "low-stock-modal-title",
                        className: "text-xl font-bold text-stone-800",
                        children: "Low stock items"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modal/lowStackItems.js",
                        lineNumber: 96,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-sm text-stone-500",
                        children: "Products at or below their low stock warning level."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modal/lowStackItems.js",
                        lineNumber: 96,
                        columnNumber: 114
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modal/lowStackItems.js",
                lineNumber: 96,
                columnNumber: 13
            }, this);
            $[28] = t13;
        } else {
            t13 = $[28];
        }
        let t14;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl leading-none",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/src/components/modal/lowStackItems.js",
                lineNumber: 103,
                columnNumber: 13
            }, this);
            $[29] = t14;
        } else {
            t14 = $[29];
        }
        if ($[30] !== onClose) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-stone-200 bg-white px-6 py-4",
                children: [
                    t13,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "rounded-lg p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-800",
                        "aria-label": "Close",
                        children: t14
                    }, void 0, false, {
                        fileName: "[project]/src/components/modal/lowStackItems.js",
                        lineNumber: 109,
                        columnNumber: 113
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modal/lowStackItems.js",
                lineNumber: 109,
                columnNumber: 12
            }, this);
            $[30] = onClose;
            $[31] = t5;
        } else {
            t5 = $[31];
        }
        t6 = !totalItems ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-[calc(90vh-5rem)] overflow-y-auto px-6 py-12 text-center text-stone-500",
            children: "No low stock items."
        }, void 0, false, {
            fileName: "[project]/src/components/modal/lowStackItems.js",
            lineNumber: 115,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-stone-200 bg-white px-6 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "font-semibold text-stone-800",
                                        children: "Product"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                        lineNumber: 115,
                                        columnNumber: 266
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "font-semibold text-stone-800",
                                        children: "Barcode"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                        lineNumber: 115,
                                        columnNumber: 323
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "font-semibold text-stone-800",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                        lineNumber: 115,
                                        columnNumber: 380
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "font-semibold text-stone-800",
                                        children: "Qty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                        lineNumber: 115,
                                        columnNumber: 438
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-right font-semibold text-stone-800",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                        lineNumber: 115,
                                        columnNumber: 491
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modal/lowStackItems.js",
                                lineNumber: 115,
                                columnNumber: 262
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modal/lowStackItems.js",
                            lineNumber: 115,
                            columnNumber: 255
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modal/lowStackItems.js",
                        lineNumber: 115,
                        columnNumber: 211
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modal/lowStackItems.js",
                    lineNumber: 115,
                    columnNumber: 149
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[calc(90vh-10rem)] overflow-y-auto px-6 py-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full table-auto text-left text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: paginatedItems.map({
                                "LowStockItemsModal[paginatedItems.map()]": (item)=>{
                                    const isEditing = editingId === item.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-stone-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 font-medium text-stone-800",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modal/lowStackItems.js",
                                                lineNumber: 118,
                                                columnNumber: 80
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 font-mono text-stone-600",
                                                children: item.barcode || "\u2014"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modal/lowStackItems.js",
                                                lineNumber: 118,
                                                columnNumber: 144
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 text-stone-600",
                                                children: item.categoryName ?? "\u2014"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modal/lowStackItems.js",
                                                lineNumber: 118,
                                                columnNumber: 221
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 font-mono text-stone-700",
                                                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.01",
                                                    value: editQty,
                                                    onChange: {
                                                        "LowStockItemsModal[paginatedItems.map() > <input>.onChange]": (e_1)=>onChangeQty?.(e_1.target.value)
                                                    }["LowStockItemsModal[paginatedItems.map() > <input>.onChange]"],
                                                    className: "w-16 rounded border border-stone-300 px-2 py-1 text-right"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modal/lowStackItems.js",
                                                    lineNumber: 118,
                                                    columnNumber: 352
                                                }, this) : item.quantity
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modal/lowStackItems.js",
                                                lineNumber: 118,
                                                columnNumber: 293
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end gap-2",
                                                    children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: {
                                                                    "LowStockItemsModal[paginatedItems.map() > <button>.onClick]": ()=>onSaveEdit?.(item.id)
                                                                }["LowStockItemsModal[paginatedItems.map() > <button>.onClick]"],
                                                                className: "flex items-center justify-center rounded-lg bg-green-600 px-2 py-1 text-xs font-medium text-white hover:bg-green-700",
                                                                "aria-label": "Save changes",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "sr-only",
                                                                        children: "Save"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                                                        lineNumber: 122,
                                                                        columnNumber: 246
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "aria-hidden": "true",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                                                        lineNumber: 122,
                                                                        columnNumber: 283
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modal/lowStackItems.js",
                                                                lineNumber: 120,
                                                                columnNumber: 257
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: {
                                                                    "LowStockItemsModal[paginatedItems.map() > <button>.onClick]": ()=>onCancelEdit?.()
                                                                }["LowStockItemsModal[paginatedItems.map() > <button>.onClick]"],
                                                                className: "flex items-center justify-center rounded-lg bg-stone-200 px-2 py-1 text-xs font-medium text-stone-800 hover:bg-stone-300",
                                                                "aria-label": "Cancel editing",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "sr-only",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                                                        lineNumber: 124,
                                                                        columnNumber: 252
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "aria-hidden": "true",
                                                                        children: "✕"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                                                        lineNumber: 124,
                                                                        columnNumber: 291
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modal/lowStackItems.js",
                                                                lineNumber: 122,
                                                                columnNumber: 325
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: {
                                                            "LowStockItemsModal[paginatedItems.map() > <button>.onClick]": ()=>{
                                                                if (onEdit) {
                                                                    onEdit(item.id);
                                                                }
                                                            }
                                                        }["LowStockItemsModal[paginatedItems.map() > <button>.onClick]"],
                                                        className: "rounded-lg bg-amber-100 p-1.5 text-amber-800 hover:bg-amber-200",
                                                        title: "Edit product (admin password required)",
                                                        "aria-label": "Edit",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Edit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modal/lowStackItems.js",
                                                            lineNumber: 130,
                                                            columnNumber: 230
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                                        lineNumber: 124,
                                                        columnNumber: 339
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modal/lowStackItems.js",
                                                    lineNumber: 120,
                                                    columnNumber: 202
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modal/lowStackItems.js",
                                                lineNumber: 120,
                                                columnNumber: 181
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                        lineNumber: 118,
                                        columnNumber: 24
                                    }, this);
                                }
                            }["LowStockItemsModal[paginatedItems.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/modal/lowStackItems.js",
                            lineNumber: 115,
                            columnNumber: 709
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modal/lowStackItems.js",
                        lineNumber: 115,
                        columnNumber: 654
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modal/lowStackItems.js",
                    lineNumber: 115,
                    columnNumber: 586
                }, this),
                totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-stone-200 px-6 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs text-stone-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Showing ",
                                    startIndex + 1,
                                    "–",
                                    Math.min(startIndex + PER_PAGE, totalItems),
                                    " of ",
                                    totalItems,
                                    " items"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modal/lowStackItems.js",
                                lineNumber: 132,
                                columnNumber: 228
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "LowStockItemsModal[<button>.onClick]": ()=>setPage(_LowStockItemsModalButtonOnClickSetPage)
                                        }["LowStockItemsModal[<button>.onClick]"],
                                        disabled: safePage <= 1,
                                        className: "rounded-lg border border-stone-300 px-2 py-1 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50",
                                        children: "Previous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                        lineNumber: 132,
                                        columnNumber: 374
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-stone-800",
                                        children: [
                                            "Page ",
                                            safePage,
                                            " of ",
                                            totalPages
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                        lineNumber: 134,
                                        columnNumber: 250
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "LowStockItemsModal[<button>.onClick]": ()=>setPage({
                                                    "LowStockItemsModal[<button>.onClick > setPage()]": (p_0)=>Math.min(totalPages, p_0 + 1)
                                                }["LowStockItemsModal[<button>.onClick > setPage()]"])
                                        }["LowStockItemsModal[<button>.onClick]"],
                                        disabled: safePage >= totalPages,
                                        className: "rounded-lg border border-stone-300 px-2 py-1 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50",
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modal/lowStackItems.js",
                                        lineNumber: 134,
                                        columnNumber: 333
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modal/lowStackItems.js",
                                lineNumber: 132,
                                columnNumber: 333
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modal/lowStackItems.js",
                        lineNumber: 132,
                        columnNumber: 154
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modal/lowStackItems.js",
                    lineNumber: 132,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true);
        $[5] = editQty;
        $[6] = editingId;
        $[7] = items;
        $[8] = onCancelEdit;
        $[9] = onChangeQty;
        $[10] = onClose;
        $[11] = onEdit;
        $[12] = onSaveEdit;
        $[13] = safePage;
        $[14] = startIndex;
        $[15] = totalItems;
        $[16] = totalPages;
        $[17] = t10;
        $[18] = t11;
        $[19] = t3;
        $[20] = t4;
        $[21] = t5;
        $[22] = t6;
        $[23] = t7;
        $[24] = t8;
        $[25] = t9;
    } else {
        t10 = $[17];
        t11 = $[18];
        t3 = $[19];
        t4 = $[20];
        t5 = $[21];
        t6 = $[22];
        t7 = $[23];
        t8 = $[24];
        t9 = $[25];
    }
    let t12;
    if ($[32] !== t3 || $[33] !== t4 || $[34] !== t5 || $[35] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            onClick: t4,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modal/lowStackItems.js",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[32] = t3;
        $[33] = t4;
        $[34] = t5;
        $[35] = t6;
        $[36] = t12;
    } else {
        t12 = $[36];
    }
    let t13;
    if ($[37] !== t10 || $[38] !== t11 || $[39] !== t12 || $[40] !== t7 || $[41] !== t8 || $[42] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            onClick: t8,
            role: t9,
            "aria-modal": t10,
            "aria-labelledby": t11,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/modal/lowStackItems.js",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[37] = t10;
        $[38] = t11;
        $[39] = t12;
        $[40] = t7;
        $[41] = t8;
        $[42] = t9;
        $[43] = t13;
    } else {
        t13 = $[43];
    }
    return t13;
}
_s(LowStockItemsModal, "PObvSReCSDQSvOzHcTzn1KcnreE=");
_c = LowStockItemsModal;
function _LowStockItemsModalButtonOnClickSetPage(p) {
    return Math.max(1, p - 1);
}
function _LowStockItemsModalDivOnClick(e_0) {
    return e_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "LowStockItemsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(admin)/inventory/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminInventoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Package$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/griddy-icons/dist/icons/Package/index.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Edit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/griddy-icons/dist/icons/Edit/index.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Trash$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/griddy-icons/dist/icons/Trash/index.js [app-client] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Archive$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/griddy-icons/dist/icons/Archive/index.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$RefreshCcw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/griddy-icons/dist/icons/RefreshCcw/index.js [app-client] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$deleteHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modal/deleteHistory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$lowStackItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modal/lowStackItems.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const DEFAULT_LOW_STOCK_THRESHOLD = 50;
function AdminInventoryPage() {
    _s();
    const barcodeInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inventory, setInventory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lookupResult, setLookupResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lookupError, setLookupError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lookupEditing, setLookupEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lookupEditQty, setLookupEditQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lookupEditPrice, setLookupEditPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editQty, setEditQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editPrice, setEditPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lowStockEditingId, setLowStockEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lowStockEditQty, setLowStockEditQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAddProduct, setShowAddProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddCategory, setShowAddCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCategoryName, setNewCategoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newProduct, setNewProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        barcode: "",
        price: "",
        cost: "",
        category_id: "",
        quantity: "0",
        low_stock_threshold: String(DEFAULT_LOW_STOCK_THRESHOLD)
    });
    const [categoryMessage, setCategoryMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [productMessage, setProductMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editMessage, setEditMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [passwordModal, setPasswordModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPasswordError, setConfirmPasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showLowStockModal, setShowLowStockModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteHistory, setShowDeleteHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inactiveProducts, setInactiveProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [passwordModalProcessing, setPasswordModalProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollToProductId, setScrollToProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const PER_PAGE = 50;
    const totalPages = Math.max(1, Math.ceil(products.length / PER_PAGE));
    const paginatedProducts = products.slice((page - 1) * PER_PAGE, page * PER_PAGE);
    async function load() {
        const [prodRes, invRes, catRes, inactiveRes] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*, categories(name)").eq("is_active", true).order("name"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("inventory").select("*"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("*").order("sort_order"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*, categories(name)").eq("is_active", false).order("updated_at", {
                ascending: false
            })
        ]);
        if (prodRes.data) setProducts(prodRes.data);
        if (catRes.data) setCategories(catRes.data);
        if (inactiveRes.data) setInactiveProducts(inactiveRes.data);
        const invMap = {};
        (invRes.data || []).forEach((i)=>invMap[i.product_id] = i);
        setInventory(invMap);
        setLoading(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminInventoryPage.useEffect": ()=>{
            load();
        }
    }["AdminInventoryPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminInventoryPage.useEffect": ()=>{
            if (page > totalPages && totalPages >= 1) setPage(1);
        }
    }["AdminInventoryPage.useEffect"], [
        page,
        totalPages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminInventoryPage.useEffect": ()=>{
            barcodeInputRef.current?.focus();
        }
    }["AdminInventoryPage.useEffect"], [
        lookupResult,
        lookupError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminInventoryPage.useEffect": ()=>{
            if (!scrollToProductId) return;
            const id = scrollToProductId;
            const timer = setTimeout({
                "AdminInventoryPage.useEffect.timer": ()=>{
                    const el = document.getElementById(`product-row-${id}`);
                    if (el) {
                        el.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                    setScrollToProductId(null);
                }
            }["AdminInventoryPage.useEffect.timer"], 100);
            return ({
                "AdminInventoryPage.useEffect": ()=>clearTimeout(timer)
            })["AdminInventoryPage.useEffect"];
        }
    }["AdminInventoryPage.useEffect"], [
        scrollToProductId,
        page
    ]);
    function getInv(productId) {
        return inventory[productId];
    }
    function clearAllMessages() {
        setCategoryMessage(null);
        setProductMessage(null);
        setEditMessage(null);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminInventoryPage.useEffect": ()=>{
            const value = searchQuery.trim();
            if (!value) {
                setLookupResult(null);
                setLookupError("");
                setLookupEditing(false);
                return;
            }
            const timer_0 = setTimeout({
                "AdminInventoryPage.useEffect.timer_0": async ()=>{
                    setLookupError("");
                    setLookupResult(null);
                    let product = null;
                    const { data: byBarcode } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*, categories(name)").eq("barcode", value).eq("is_active", true).maybeSingle();
                    product = byBarcode;
                    if (!product) {
                        const { data: byName } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*, categories(name)").eq("is_active", true).ilike("name", `%${value}%`).order("name").limit(1);
                        product = byName?.[0] ?? null;
                    }
                    if (!product) {
                        setLookupError("No product found.");
                        return;
                    }
                    const { data: inv } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("inventory").select("quantity, low_stock_threshold").eq("product_id", product.id).maybeSingle();
                    setLookupResult({
                        ...product,
                        quantity: inv ? Number(inv.quantity) : 0,
                        low_stock_threshold: inv ? Number(inv.low_stock_threshold) : DEFAULT_LOW_STOCK_THRESHOLD
                    });
                    setLookupEditing(false);
                }
            }["AdminInventoryPage.useEffect.timer_0"], 300);
            return ({
                "AdminInventoryPage.useEffect": ()=>clearTimeout(timer_0)
            })["AdminInventoryPage.useEffect"];
        }
    }["AdminInventoryPage.useEffect"], [
        searchQuery
    ]);
    async function saveInventory(productId_0, quantity) {
        const qty = parseFloat(quantity) ?? 0;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("inventory").upsert({
            product_id: productId_0,
            quantity: qty,
            low_stock_threshold: DEFAULT_LOW_STOCK_THRESHOLD,
            updated_at: new Date().toISOString()
        }, {
            onConflict: "product_id"
        });
        if (error) {
            console.error("Inventory save failed:", error?.message ?? error);
            return error?.message ?? "Failed to update inventory.";
        }
        setInventory((prev)=>({
                ...prev,
                [productId_0]: {
                    product_id: productId_0,
                    quantity: qty,
                    low_stock_threshold: DEFAULT_LOW_STOCK_THRESHOLD
                }
            }));
        setEditingId(null);
        load();
        return null;
    }
    async function savePrice(productId_1, price) {
        const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").update({
            price: parseFloat(price) || 0,
            updated_at: new Date().toISOString()
        }).eq("id", productId_1);
        if (error_0) {
            console.error("Price save failed:", error_0?.message ?? error_0);
            return error_0?.message ?? "Failed to update price.";
        }
        setProducts((prev_0)=>prev_0.map((p)=>p.id === productId_1 ? {
                    ...p,
                    price: parseFloat(price) || 0
                } : p));
        setEditingId(null);
        return null;
    }
    async function handleSaveEdit(p_0) {
        clearAllMessages();
        const invError = await saveInventory(p_0.id, editQty);
        if (invError) {
            setEditMessage({
                type: "error",
                text: invError
            });
            return;
        }
        const priceError = await savePrice(p_0.id, editPrice);
        if (priceError) {
            setEditMessage({
                type: "error",
                text: priceError
            });
            return;
        }
        setEditMessage({
            type: "success",
            text: "Product updated successfully."
        });
        setTimeout(()=>setEditMessage(null), 4000);
    }
    function startEdit(p_1) {
        const inv_0 = getInv(p_1.id);
        clearAllMessages();
        setEditingId(p_1.id);
        setEditQty(inv_0?.quantity ?? "");
        setEditPrice(p_1.price ?? "");
        setLookupEditing(false);
    }
    function startLookupEdit(product_0) {
        if (!product_0) return;
        const qty_0 = product_0.quantity ?? getInv(product_0.id)?.quantity ?? "";
        clearAllMessages();
        setEditingId(null);
        setLookupEditing(true);
        setLookupEditQty(qty_0 === "" ? "" : String(qty_0));
        setLookupEditPrice(product_0.price == null ? "" : String(product_0.price));
    }
    async function handleSaveLookupEdit() {
        if (!lookupResult) return;
        clearAllMessages();
        const invError_0 = await saveInventory(lookupResult.id, lookupEditQty);
        if (invError_0) {
            setEditMessage({
                type: "error",
                text: invError_0
            });
            return;
        }
        const priceError_0 = await savePrice(lookupResult.id, lookupEditPrice);
        if (priceError_0) {
            setEditMessage({
                type: "error",
                text: priceError_0
            });
            return;
        }
        setLookupEditing(false);
        setLookupResult((prev_1)=>prev_1 && {
                ...prev_1,
                price: parseFloat(lookupEditPrice) || 0,
                quantity: parseFloat(lookupEditQty) || 0,
                low_stock_threshold: DEFAULT_LOW_STOCK_THRESHOLD
            });
        setEditMessage({
            type: "success",
            text: "Product updated successfully."
        });
        setTimeout(()=>setEditMessage(null), 4000);
    }
    function openPasswordModal(action, product_1, from = "table") {
        clearAllMessages();
        setPasswordModal({
            action,
            product: product_1,
            from
        });
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
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user?.email) {
            setConfirmPasswordError("Could not get current user.");
            return;
        }
        const { error: error_1 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email: user.email,
            password
        });
        if (error_1) {
            setConfirmPasswordError("Incorrect password.");
            return;
        }
        const { action: action_0, product: product_2, from: from_0 } = passwordModal;
        if (action_0 === "edit" || action_0 === "lowStockEdit") {
            closePasswordModal();
            if (action_0 === "lowStockEdit") {
                const inv_1 = getInv(product_2.id);
                setLowStockEditingId(product_2.id);
                setLowStockEditQty(inv_1?.quantity == null ? "" : String(inv_1.quantity));
            } else if (from_0 === "lookup") {
                startLookupEdit(product_2);
            } else {
                startEdit(product_2);
            }
            return;
        }
        setPasswordModalProcessing(true);
        try {
            if (action_0 === "delete") {
                await deleteProduct(product_2);
            } else if (action_0 === "restore") {
                await restoreProduct(product_2);
            } else if (action_0 === "deletePermanent") {
                await deleteProductPermanent(product_2);
            }
            closePasswordModal();
        } finally{
            setPasswordModalProcessing(false);
        }
    }
    async function deleteProduct(product_3) {
        const { error: error_2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").update({
            is_active: false,
            deleted_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }).eq("id", product_3.id);
        if (error_2) {
            setEditMessage({
                type: "error",
                text: error_2?.message || "Failed to remove product."
            });
            return;
        }
        setEditMessage({
            type: "success",
            text: "Product deactivated. It won't appear in inventory or POS."
        });
        setTimeout(()=>setEditMessage(null), 4000);
        load();
    }
    async function restoreProduct(product_4) {
        const { error: error_3 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").update({
            is_active: true,
            deleted_at: null,
            updated_at: new Date().toISOString()
        }).eq("id", product_4.id);
        if (error_3) {
            console.error("Restore failed:", error_3?.message ?? error_3);
            setEditMessage({
                type: "error",
                text: error_3?.message || "Failed to restore product. Please try again."
            });
            setTimeout(()=>setEditMessage(null), 5000);
            return;
        }
        setEditMessage({
            type: "success",
            text: `"${product_4.name}" restored successfully. It will appear in inventory and POS again.`
        });
        setTimeout(()=>setEditMessage(null), 4000);
        load();
    }
    async function deleteProductPermanent(product_5) {
        const { error: invErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("inventory").delete().eq("product_id", product_5.id);
        if (invErr) {
            setEditMessage({
                type: "error",
                text: invErr?.message || "Failed to delete inventory rows for this product."
            });
            return;
        }
        const { error: prodErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").delete().eq("id", product_5.id);
        if (prodErr) {
            setEditMessage({
                type: "error",
                text: prodErr?.message || "Failed to permanently delete product."
            });
            return;
        }
        setEditMessage({
            type: "success",
            text: `"${product_5.name}" permanently deleted.`
        });
        setTimeout(()=>setEditMessage(null), 4000);
        load();
    }
    async function addCategory() {
        if (!newCategoryName.trim()) return;
        clearAllMessages();
        const { error: error_4 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("categories").insert({
            name: newCategoryName.trim(),
            sort_order: categories.length + 1
        });
        if (error_4) {
            console.error("Category add failed:", error_4?.message ?? error_4);
            setCategoryMessage({
                type: "error",
                text: error_4?.message || "Failed to add category."
            });
            return;
        }
        setNewCategoryName("");
        setShowAddCategory(false);
        setCategoryMessage({
            type: "success",
            text: "Category added successfully."
        });
        load();
        setTimeout(()=>setCategoryMessage(null), 4000);
    }
    async function addProduct() {
        if (!newProduct.name?.trim()) return;
        if (!newProduct.barcode?.trim()) {
            setProductMessage({
                type: "error",
                text: "Barcode is required for scanning at POS."
            });
            return;
        }
        clearAllMessages();
        const { data: product_6, error: prodErr_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").insert({
            name: newProduct.name.trim(),
            barcode: newProduct.barcode.trim(),
            price: parseFloat(newProduct.price) || 0,
            cost: parseFloat(newProduct.cost) || 0,
            category_id: newProduct.category_id || null
        }).select("id").single();
        if (prodErr_0) {
            const text = prodErr_0.code === "23505" ? "A product with this barcode already exists." : prodErr_0.message || "Failed to add product.";
            setProductMessage({
                type: "error",
                text
            });
            return;
        }
        const initQty = parseFloat(newProduct.quantity) || 0;
        const { error: invErr_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("inventory").insert({
            product_id: product_6.id,
            quantity: initQty,
            low_stock_threshold: DEFAULT_LOW_STOCK_THRESHOLD
        });
        if (invErr_0) {
            setProductMessage({
                type: "error",
                text: "Product created but inventory failed. Please edit stock manually."
            });
            load();
            setTimeout(()=>setProductMessage(null), 5000);
            return;
        }
        setNewProduct({
            name: "",
            barcode: "",
            price: "",
            cost: "",
            category_id: "",
            quantity: "0",
            low_stock_threshold: String(DEFAULT_LOW_STOCK_THRESHOLD)
        });
        setShowAddProduct(false);
        setLookupError("");
        setProductMessage({
            type: "success",
            text: "Product added successfully."
        });
        load();
        setTimeout(()=>setProductMessage(null), 4000);
    }
    const lowStockProducts = products.filter((p_2)=>{
        const inv_2 = getInv(p_2.id);
        return inv_2 && Number(inv_2.quantity) <= Number(inv_2.low_stock_threshold ?? DEFAULT_LOW_STOCK_THRESHOLD);
    });
    const lowStockCount = lowStockProducts.length;
    function goToProductRow(productId_2) {
        const index = products.findIndex((p_3)=>p_3.id === productId_2);
        if (index >= 0) {
            const targetPage = Math.floor(index / PER_PAGE) + 1;
            setPage(targetPage);
            setScrollToProductId(productId_2);
        }
    }
    function handleLowStockEdit(productId_3) {
        const p_4 = products.find((x)=>x.id === productId_3);
        if (!p_4) return;
        openPasswordModal("lowStockEdit", p_4, "lowStock");
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[40vh] items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-stone-500",
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 512,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/inventory/page.js",
            lineNumber: 511,
            columnNumber: 12
        }, this);
    }
    const activeMessage = editMessage || productMessage || categoryMessage;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            activeMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `pointer-events-auto rounded-2xl border-2 px-6 py-4 text-center shadow-xl ${activeMessage.type === "success" ? "border-green-400 bg-green-50 text-green-900" : "border-red-400 bg-red-50 text-red-900"}`,
                    role: "alert",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium",
                        children: activeMessage.text
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 519,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                    lineNumber: 518,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 517,
                columnNumber: 25
            }, this),
            passwordModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[70] flex items-center justify-center p-4 bg-stone-900/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-6 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-stone-800",
                            children: "Confirm your password"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                            lineNumber: 525,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-stone-600",
                            children: passwordModal.action === "deletePermanent" ? `Permanently delete "${passwordModal.product?.name}"? This cannot be undone. Enter your admin password to continue.` : passwordModal.action === "delete" ? `Delete "${passwordModal.product?.name}"? Enter your admin password to continue.` : passwordModal.action === "restore" ? `Restore "${passwordModal.product?.name}"? Enter your admin password to continue.` : "Enter your admin password to edit this product."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                            lineNumber: 526,
                            columnNumber: 13
                        }, this),
                        passwordModalProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center gap-3 text-stone-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$RefreshCcw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                    size: 20,
                                    className: "animate-spin-left shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                    lineNumber: 530,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: passwordModal.action === "restore" ? "Restoring…" : "Processing…"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                    lineNumber: 531,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                            lineNumber: 529,
                            columnNumber: 40
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: confirmPassword,
                                    onChange: (e)=>setConfirmPassword(e.target.value),
                                    placeholder: "Password",
                                    autoComplete: "current-password",
                                    className: "mt-4 w-full rounded-xl border border-stone-300 px-4 py-2.5 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20",
                                    onKeyDown: (e_0)=>e_0.key === "Enter" && handleConfirmPassword()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                    lineNumber: 535,
                                    columnNumber: 17
                                }, this),
                                confirmPasswordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-red-600",
                                    children: confirmPasswordError
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                    lineNumber: 536,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex gap-2 justify-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closePasswordModal,
                                            className: "rounded-xl border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 538,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleConfirmPassword,
                                            className: "rounded-xl bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700",
                                            children: "Confirm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 541,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                    lineNumber: 537,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                    lineNumber: 524,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 523,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Package$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                        size: 28,
                        className: "text-stone-700"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 550,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-stone-800",
                        children: "Inventory"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 549,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-stone-600",
                children: "Search by barcode or product name. Results update as you type."
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 553,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "admin-lookup",
                        className: "sr-only",
                        children: "Search product by barcode or name"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 556,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "admin-lookup",
                        ref: barcodeInputRef,
                        type: "text",
                        value: searchQuery,
                        onChange: (e_1)=>setSearchQuery(e_1.target.value),
                        autoComplete: "off",
                        placeholder: "Scan or type barcode or product name",
                        "aria-label": "Search product",
                        className: "w-full max-w-xl rounded-xl border border-stone-300 px-4 py-3 font-mono focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    searchQuery.trim() && lookupError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-red-600",
                        children: lookupError
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 558,
                        columnNumber: 47
                    }, this),
                    searchQuery.trim() && lookupResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-stone-800",
                                children: lookupResult.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 560,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-stone-600",
                                children: [
                                    "Barcode: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "font-mono",
                                        children: lookupResult.barcode
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 562,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 561,
                                columnNumber: 13
                            }, this),
                            lookupEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid gap-3 sm:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-stone-700 mb-1",
                                                children: "Price"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 566,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                step: "0.01",
                                                value: lookupEditPrice,
                                                onChange: (e_2)=>setLookupEditPrice(e_2.target.value),
                                                className: "w-full rounded-lg border border-amber-300 px-3 py-1.5 font-mono focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 567,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 565,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-stone-700 mb-1",
                                                children: "Quantity in stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 570,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                step: "0.01",
                                                value: lookupEditQty,
                                                onChange: (e_3)=>setLookupEditQty(e_3.target.value),
                                                className: "w-full rounded-lg border border-amber-300 px-3 py-1.5 font-mono focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 571,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 569,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-stone-500",
                                            children: "Low stock warning at 50 (fixed)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 574,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 573,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 564,
                                columnNumber: 30
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-stone-600",
                                        children: [
                                            "Price: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono",
                                                children: [
                                                    "$",
                                                    Number(lookupResult.price).toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 578,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 577,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-stone-600",
                                        children: [
                                            "Quantity in stock: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono",
                                                children: lookupResult.quantity
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 581,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 580,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-stone-600",
                                        children: [
                                            "Warn when qty ≤: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono",
                                                children: lookupResult.low_stock_threshold
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 584,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 583,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex gap-2",
                                children: lookupEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleSaveLookupEdit,
                                            className: "rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700",
                                            children: "Save changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 589,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setLookupEditing(false),
                                            className: "rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-100",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 592,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openPasswordModal("edit", lookupResult, "lookup"),
                                    className: "rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-700",
                                    children: "Edit stock / price"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                    lineNumber: 595,
                                    columnNumber: 23
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 587,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 559,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 555,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    clearAllMessages();
                                    setShowAddCategory(!showAddCategory);
                                },
                                className: "rounded-xl border border-stone-300 px-4 py-2 font-medium text-stone-700 hover:bg-stone-100",
                                children: showAddCategory ? "Cancel" : "+ Category"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 604,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    clearAllMessages();
                                    setShowAddProduct(!showAddProduct);
                                },
                                className: "rounded-xl bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600",
                                children: showAddProduct ? "Cancel" : "+ Add product"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 610,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            clearAllMessages();
                            setShowDeleteHistory(true);
                        },
                        className: "flex items-center gap-2 rounded-xl border border-stone-300 px-4 py-2 font-medium text-stone-700 hover:bg-stone-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Archive$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 621,
                                columnNumber: 11
                            }, this),
                            "Delete history (",
                            inactiveProducts.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 617,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 602,
                columnNumber: 7
            }, this),
            showAddCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-stone-200 bg-white p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-stone-800",
                        children: "New category"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 627,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Category name",
                                value: newCategoryName,
                                onChange: (e_4)=>setNewCategoryName(e_4.target.value),
                                className: "rounded-lg border border-stone-200 px-3 py-2 flex-1 max-w-xs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 629,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: addCategory,
                                className: "rounded-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700",
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 630,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 628,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 626,
                columnNumber: 27
            }, this),
            showAddProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-stone-200 bg-white p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-stone-800",
                        children: "New product (barcode required for POS scan)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 635,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Name *",
                                value: newProduct.name,
                                onChange: (e_5)=>setNewProduct((p_5)=>({
                                            ...p_5,
                                            name: e_5.target.value
                                        })),
                                className: "rounded-lg border border-stone-200 px-3 py-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 637,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Barcode *",
                                value: newProduct.barcode,
                                onChange: (e_6)=>setNewProduct((p_6)=>({
                                            ...p_6,
                                            barcode: e_6.target.value
                                        })),
                                className: "rounded-lg border border-stone-200 px-3 py-2 font-mono"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 641,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                step: "0.01",
                                placeholder: "Price *",
                                value: newProduct.price,
                                onChange: (e_7)=>setNewProduct((p_7)=>({
                                            ...p_7,
                                            price: e_7.target.value
                                        })),
                                className: "rounded-lg border border-stone-200 px-3 py-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 645,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                step: "0.01",
                                placeholder: "Cost",
                                value: newProduct.cost,
                                onChange: (e_8)=>setNewProduct((p_8)=>({
                                            ...p_8,
                                            cost: e_8.target.value
                                        })),
                                className: "rounded-lg border border-stone-200 px-3 py-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 649,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: newProduct.category_id,
                                onChange: (e_9)=>setNewProduct((p_9)=>({
                                            ...p_9,
                                            category_id: e_9.target.value
                                        })),
                                className: "rounded-lg border border-stone-200 px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "No category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 657,
                                        columnNumber: 15
                                    }, this),
                                    categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.id,
                                            children: c.name
                                        }, c.id, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 658,
                                            columnNumber: 36
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 653,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                step: "0.01",
                                placeholder: "Initial quantity",
                                value: newProduct.quantity,
                                onChange: (e_10)=>setNewProduct((p_10)=>({
                                            ...p_10,
                                            quantity: e_10.target.value
                                        })),
                                className: "rounded-lg border border-stone-200 px-3 py-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 660,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center text-sm text-stone-500",
                                children: "Low stock warning at 50 (fixed)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 664,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 636,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: addProduct,
                        className: "mt-3 rounded-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700",
                        children: "Save product"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 666,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 634,
                columnNumber: 26
            }, this),
            lowStockCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center justify-between gap-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-amber-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Low stock:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 671,
                                columnNumber: 13
                            }, this),
                            " ",
                            lowStockCount,
                            " item(s) with quantity at or below their warning level."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 670,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowLowStockModal(true),
                        className: "shrink-0 rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-700",
                        children: "View items"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 673,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 669,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "border-b border-stone-200 bg-stone-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-semibold text-stone-800",
                                            children: "Product"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 682,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-semibold text-stone-800",
                                            children: "Barcode"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 683,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-semibold text-stone-800",
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 684,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-semibold text-stone-800",
                                            children: "Price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 685,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-semibold text-stone-800",
                                            children: "Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-semibold text-stone-800",
                                            title: "Warn when quantity is at or below this number",
                                            children: "Warn when qty ≤"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 687,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 font-semibold text-stone-800",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                            lineNumber: 688,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                    lineNumber: 681,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 680,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: paginatedProducts.map((p_11)=>{
                                    const inv_3 = getInv(p_11.id);
                                    const isLow = inv_3 && Number(inv_3.quantity) <= Number(inv_3.low_stock_threshold ?? DEFAULT_LOW_STOCK_THRESHOLD);
                                    const isEditing = editingId === p_11.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        id: `product-row-${p_11.id}`,
                                        className: `border-b border-stone-100 ${isLow ? "bg-red-50/50" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 font-medium text-stone-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: isLow ? "text-red-800" : "",
                                                        children: p_11.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                        lineNumber: 698,
                                                        columnNumber: 21
                                                    }, this),
                                                    isLow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 inline-flex rounded bg-amber-200 px-1.5 py-0.5 text-xs font-medium text-amber-900",
                                                        children: "Low stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                        lineNumber: 699,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 697,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 font-mono text-stone-600",
                                                children: p_11.barcode || "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 701,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-stone-600",
                                                children: p_11.categories?.name ?? "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 702,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3",
                                                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.01",
                                                    value: editPrice,
                                                    onChange: (e_11)=>setEditPrice(e_11.target.value),
                                                    className: "w-24 rounded border border-stone-200 px-2 py-1 font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                    lineNumber: 704,
                                                    columnNumber: 34
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: [
                                                        "$",
                                                        Number(p_11.price).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                    lineNumber: 704,
                                                    columnNumber: 210
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 703,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3",
                                                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.01",
                                                    value: editQty,
                                                    onChange: (e_12)=>setEditQty(e_12.target.value),
                                                    className: "w-24 rounded border border-stone-200 px-2 py-1 font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                    lineNumber: 707,
                                                    columnNumber: 34
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-mono ${isLow ? "font-semibold text-red-700" : ""}`,
                                                    children: inv_3?.quantity ?? 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                    lineNumber: 707,
                                                    columnNumber: 206
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 706,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-stone-500",
                                                    children: inv_3?.low_stock_threshold ?? DEFAULT_LOW_STOCK_THRESHOLD
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                    lineNumber: 710,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 709,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3",
                                                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleSaveEdit(p_11),
                                                            className: "flex items-center justify-center rounded bg-green-600 px-2 py-1 text-xs text-white hover:bg-green-700",
                                                            "aria-label": "Save changes",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sr-only",
                                                                    children: "Save"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                                    lineNumber: 715,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "aria-hidden": "true",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                                    lineNumber: 716,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                            lineNumber: 714,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                clearAllMessages();
                                                                setEditingId(null);
                                                            },
                                                            className: "flex items-center justify-center rounded bg-stone-300 px-2 py-1 text-xs text-stone-700 hover:bg-stone-400",
                                                            "aria-label": "Cancel editing",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sr-only",
                                                                    children: "Cancel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                                    lineNumber: 722,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "aria-hidden": "true",
                                                                    children: "✕"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                                    lineNumber: 723,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                            lineNumber: 718,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                    lineNumber: 713,
                                                    columnNumber: 34
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>openPasswordModal("edit", p_11),
                                                            className: "rounded bg-amber-100 p-1.5 text-amber-800 hover:bg-amber-200",
                                                            "aria-label": "Edit",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Edit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                                lineNumber: 726,
                                                                columnNumber: 186
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                            lineNumber: 726,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>openPasswordModal("delete", p_11),
                                                            className: "rounded bg-red-100 p-1.5 text-red-800 hover:bg-red-200",
                                                            "aria-label": "Delete",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$griddy$2d$icons$2f$dist$2f$icons$2f$Trash$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                                lineNumber: 727,
                                                                columnNumber: 184
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                            lineNumber: 727,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                    lineNumber: 725,
                                                    columnNumber: 32
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                                lineNumber: 712,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, p_11.id, true, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 696,
                                        columnNumber: 20
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 691,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 679,
                        columnNumber: 9
                    }, this),
                    products.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-12 text-center text-stone-500",
                        children: "No products. Add one above (include a barcode for POS scanning)."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 734,
                        columnNumber: 35
                    }, this),
                    products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-2 border-t border-stone-200 bg-stone-50 px-4 py-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-stone-600",
                                children: [
                                    "Showing ",
                                    (page - 1) * PER_PAGE + 1,
                                    "–",
                                    Math.min(page * PER_PAGE, products.length),
                                    " of ",
                                    products.length,
                                    " products"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 736,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setPage((p_12)=>Math.max(1, p_12 - 1)),
                                        disabled: page <= 1,
                                        className: "rounded-lg border border-stone-300 px-3 py-1.5 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50",
                                        children: "Previous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 740,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-stone-800",
                                        children: [
                                            "Page ",
                                            page,
                                            " of ",
                                            totalPages
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 743,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setPage((p_13)=>Math.min(totalPages, p_13 + 1)),
                                        disabled: page >= totalPages,
                                        className: "rounded-lg border border-stone-300 px-3 py-1.5 font-medium text-stone-700 hover:bg-stone-100 disabled:pointer-events-none disabled:opacity-50",
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/inventory/page.js",
                                lineNumber: 739,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/inventory/page.js",
                        lineNumber: 735,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 678,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$lowStackItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LowStockItemsModal"], {
                open: showLowStockModal && lowStockCount > 0,
                onClose: ()=>{
                    setShowLowStockModal(false);
                    setLowStockEditingId(null);
                    setLowStockEditQty("");
                },
                items: lowStockProducts.map((p_14)=>{
                    const inv_4 = getInv(p_14.id);
                    return {
                        id: p_14.id,
                        name: p_14.name,
                        barcode: p_14.barcode,
                        categoryName: p_14.categories?.name ?? "—",
                        quantity: inv_4?.quantity ?? 0
                    };
                }),
                onEdit: handleLowStockEdit,
                editingId: lowStockEditingId,
                editQty: lowStockEditQty,
                onChangeQty: setLowStockEditQty,
                onSaveEdit: async (productId_4)=>{
                    clearAllMessages();
                    const invError_1 = await saveInventory(productId_4, lowStockEditQty);
                    if (invError_1) {
                        setEditMessage({
                            type: "error",
                            text: invError_1
                        });
                        return;
                    }
                    setLowStockEditingId(null);
                    setLowStockEditQty("");
                    setEditMessage({
                        type: "success",
                        text: "Inventory updated successfully."
                    });
                    setTimeout(()=>setEditMessage(null), 4000);
                },
                onCancelEdit: ()=>{
                    setLowStockEditingId(null);
                    setLowStockEditQty("");
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 753,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$deleteHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteHistoryModal"], {
                open: showDeleteHistory,
                onClose: ()=>{
                    clearAllMessages();
                    setShowDeleteHistory(false);
                },
                inactiveProducts: inactiveProducts,
                onRestoreClick: (p_15)=>openPasswordModal("restore", p_15, "history"),
                onDeletePermanent: (p_16)=>openPasswordModal("deletePermanent", p_16, "history")
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/inventory/page.js",
                lineNumber: 788,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(admin)/inventory/page.js",
        lineNumber: 516,
        columnNumber: 10
    }, this);
}
_s(AdminInventoryPage, "dRmymsbx/r0ll2iNxJ1uhtmnYKw=");
_c = AdminInventoryPage;
var _c;
__turbopack_context__.k.register(_c, "AdminInventoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_147a2464._.js.map