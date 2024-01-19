"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_left_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/left-nav */ \"./components/left-nav.tsx\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_top_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/top-nav */ \"./components/top-nav.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { user } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const authenticatedUser = localStorage.getItem(\"authenticatedUser\");\n        if (user !== authenticatedUser) {\n            router.replace(\"/home?user=\".concat(encodeURIComponent(authenticatedUser)));\n        }\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_left_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1,\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_top_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 1,\n                            display: \"flex\",\n                            backgroundColor: \"white\",\n                            flexDirection: \"column\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                backgroundColor: \"white\",\n                                position: \"relative\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/armani.jpg\",\n                                    alt: \"Armani\",\n                                    style: {\n                                        maxWidth: \"100%\",\n                                        maxHeight: \"100%\",\n                                        boxShadow: \"1px 1px 2px grey\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    viewBox: \"0 0 512 512\",\n                                    width: 50,\n                                    fill: \"grey\",\n                                    style: {\n                                        position: \"absolute\",\n                                        top: \"50%\",\n                                        right: \"10px\",\n                                        transform: \"translateY(-50%)\",\n                                        cursor: \"pointer\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            paddingTop: \"20px\",\n                            boxShadow: \"1px 1px 2px grey\",\n                            backgroundColor: \"white\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                style: {\n                                    marginLeft: \"10px\",\n                                    marginBottom: \"20px\"\n                                },\n                                children: \"Recommended\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    flex: 1,\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    justifyContent: \"center\",\n                                    alignItems: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        display: \"flex\",\n                                        justifyContent: \"space-between\",\n                                        width: \"90%\",\n                                        marginBottom: \"30px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/iphone.jpg\",\n                                            alt: \"iPhone\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/thinkpad.jpg\",\n                                            alt: \"ThinkPad\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/sennheiser.jpg\",\n                                            alt: \"Sennheiser\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/keyboard.jpg\",\n                                            alt: \"Keyboard\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2SDtHQTFETXhCOztRQUNXSCxrREFBU0E7OztLQURwQkc7QUE0RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC50c3g/N2MzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMZWZ0TmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGVmdC1uYXYnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCBUb3BOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdG9wLW5hdlwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGhlbnRpY2F0ZWRVc2VyJyk7XHJcbiAgICBpZiAodXNlciAhPT0gYXV0aGVudGljYXRlZFVzZXIpIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoYC9ob21lP3VzZXI9JHtlbmNvZGVVUklDb21wb25lbnQoYXV0aGVudGljYXRlZFVzZXIpfWApO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgbWluSGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICA8TGVmdE5hdiAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XHJcbiAgICAgICAgPFRvcE5hdiAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvYXJtYW5pLmpwZydcclxuICAgICAgICAgICAgICBhbHQ9XCJBcm1hbmlcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1heEhlaWdodDogJzEwMCUnLCBib3hTaGFkb3c6ICcxcHggMXB4IDJweCBncmV5JyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD17NTB9IGZpbGw9J2dyZXknIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc1MCUnLCByaWdodDogJzEwcHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJywgY3Vyc29yOiAncG9pbnRlcid9fT5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ2NCAyNTZBMjA4IDIwOCAwIDEgMSA0OCAyNTZhMjA4IDIwOCAwIDEgMSA0MTYgMHpNMCAyNTZhMjU2IDI1NiAwIDEgMCA1MTIgMEEyNTYgMjU2IDAgMSAwIDAgMjU2ek0yOTQuNiAxMzUuMWMtNC4yLTQuNS0xMC4xLTcuMS0xNi4zLTcuMUMyNjYgMTI4IDI1NiAxMzggMjU2IDE1MC4zVjIwOEgxNjBjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjMyYzAgMTcuNyAxNC4zIDMyIDMyIDMyaDk2djU3LjdjMCAxMi4zIDEwIDIyLjMgMjIuMyAyMi4zYzYuMiAwIDEyLjEtMi42IDE2LjMtNy4xbDk5LjktMTA3LjFjMy41LTMuOCA1LjUtOC43IDUuNS0xMy44cy0yLTEwLjEtNS41LTEzLjhMMjk0LjYgMTM1LjF6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiBcIjIwcHhcIiwgYm94U2hhZG93OiBcIjFweCAxcHggMnB4IGdyZXlcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fT5cclxuICAgICAgICAgIDxoNSBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMjBweFwifX0+UmVjb21tZW5kZWQ8L2g1PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHdpZHRoOiAnOTAlJywgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9Jy9pcGhvbmUuanBnJ1xyXG4gICAgICAgICAgICAgIGFsdD1cImlQaG9uZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcyMyUnLCBtYXhIZWlnaHQ6ICcyMyUnLCB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJywgYm94U2hhZG93OiAnMXB4IDFweCAycHggZ3JleScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz0nL3RoaW5rcGFkLmpwZydcclxuICAgICAgICAgICAgICBhbHQ9XCJUaGlua1BhZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcyMyUnLCBtYXhIZWlnaHQ6ICcyMyUnLCB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJywgYm94U2hhZG93OiAnMXB4IDFweCAycHggZ3JleScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz0nL3Nlbm5oZWlzZXIuanBnJ1xyXG4gICAgICAgICAgICAgIGFsdD1cIlNlbm5oZWlzZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjMlJywgbWF4SGVpZ2h0OiAnMjMlJywgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiAnYXV0bycsIGJveFNoYWRvdzogJzFweCAxcHggMnB4IGdyZXknIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9Jy9rZXlib2FyZC5qcGcnXHJcbiAgICAgICAgICAgICAgYWx0PVwiS2V5Ym9hcmRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjMlJywgbWF4SGVpZ2h0OiAnMjMlJywgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiAnYXV0bycsIGJveFNoYWRvdzogJzFweCAxcHggMnB4IGdyZXknIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxlZnROYXYiLCJUb3BOYXYiLCJIb21lIiwicm91dGVyIiwidXNlciIsInF1ZXJ5IiwiYXV0aGVudGljYXRlZFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVwbGFjZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsIm1pbkhlaWdodCIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJpbWciLCJzcmMiLCJhbHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImJveFNoYWRvdyIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsIndpZHRoIiwiZmlsbCIsInRvcCIsInJpZ2h0IiwidHJhbnNmb3JtIiwiY3Vyc29yIiwicGF0aCIsImQiLCJwYWRkaW5nVG9wIiwiaDUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/index.tsx\n"));

/***/ })

});