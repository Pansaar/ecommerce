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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_left_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/left-nav */ \"./components/left-nav.tsx\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_top_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/top-nav */ \"./components/top-nav.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { user } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const authenticatedUser = localStorage.getItem(\"authenticatedUser\");\n        if (user !== authenticatedUser) {\n            router.replace(\"/home?user=\".concat(encodeURIComponent(authenticatedUser)));\n        }\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_left_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1,\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_top_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 1,\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/armani.jpg\",\n                                alt: \"Armani\",\n                                style: {\n                                    maxWidth: \"100%\",\n                                    maxHeight: \"100%\",\n                                    width: \"auto\",\n                                    height: \"auto\",\n                                    boxShadow: \"1px 1px 2px grey\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            paddingTop: \"20px\",\n                            boxShadow: \"1px 1px 2px grey\",\n                            backgroundColor: \"white\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                style: {\n                                    marginLeft: \"10px\",\n                                    marginBottom: \"20px\"\n                                },\n                                children: \"Recommended Electronics\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    flex: 1,\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    justifyContent: \"center\",\n                                    alignItems: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"vh-100\",\n                                    style: {\n                                        display: \"flex\",\n                                        justifyContent: \"space-between\",\n                                        width: \"90%\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/iphone.jpg\",\n                                            alt: \"iPhone\",\n                                            style: {\n                                                maxWidth: \"200px\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/thinkpad.jpg\",\n                                            alt: \"ThinkPad\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/sennheiser.jpg\",\n                                            alt: \"Sennheiser\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/keyboard.jpg\",\n                                            alt: \"Keyboard\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFDUTtBQUNGO0FBQ0E7QUFFOUMsTUFBTUssT0FBTzs7SUFDWCxNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxJQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUU3QlAsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxvQkFBb0JDLGFBQWFDLE9BQU8sQ0FBQztRQUMvQyxJQUFJSixTQUFTRSxtQkFBbUI7WUFDOUJILE9BQU9NLE9BQU8sQ0FBQyxjQUFvRCxPQUF0Q0MsbUJBQW1CSjtRQUNsRDtJQUNGLEdBQUc7UUFBQ0Y7S0FBSztJQUVULHFCQUNFLDhEQUFDTztRQUFJQyxPQUFPO1lBQUVDLFNBQVM7WUFBUUMsV0FBVztRQUFROzswQkFDaEQsOERBQUNkLDREQUFPQTs7Ozs7MEJBQ1IsOERBQUNXO2dCQUFJQyxPQUFPO29CQUFFRyxNQUFNO29CQUFHRixTQUFTO29CQUFRRyxlQUFlO2dCQUFTOztrQ0FDOUQsOERBQUNmLDJEQUFNQTs7Ozs7a0NBQ1AsOERBQUNVO3dCQUFJQyxPQUFPOzRCQUFFRyxNQUFNOzRCQUFHRixTQUFTOzRCQUFRRyxlQUFlOzRCQUFVQyxnQkFBZ0I7NEJBQVVDLFlBQVk7d0JBQVM7a0NBQzlHLDRFQUFDUDtzQ0FDQyw0RUFBQ1E7Z0NBQ0NDLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pULE9BQU87b0NBQUVVLFVBQVU7b0NBQVFDLFdBQVc7b0NBQVFDLE9BQU87b0NBQVFDLFFBQVE7b0NBQVFDLFdBQVc7Z0NBQW1COzs7Ozs7Ozs7Ozs7Ozs7O2tDQUlqSCw4REFBQ2Y7d0JBQUlDLE9BQU87NEJBQUNZLE9BQU87NEJBQVFHLFlBQVk7NEJBQVFELFdBQVc7NEJBQW9CRSxpQkFBaUI7d0JBQU87OzBDQUNyRyw4REFBQ0M7Z0NBQUdqQixPQUFPO29DQUFDa0IsWUFBWTtvQ0FBUUMsY0FBYztnQ0FBTTswQ0FBRzs7Ozs7OzBDQUN2RCw4REFBQ3BCO2dDQUFJQyxPQUFPO29DQUFFRyxNQUFNO29DQUFHRixTQUFTO29DQUFRRyxlQUFlO29DQUFVQyxnQkFBZ0I7b0NBQVVDLFlBQVk7Z0NBQVM7MENBQ2hILDRFQUFDUDtvQ0FBSXFCLFdBQVU7b0NBQVNwQixPQUFPO3dDQUFFQyxTQUFTO3dDQUFRSSxnQkFBZ0I7d0NBQWlCTyxPQUFPO29DQUFNOztzREFDOUYsOERBQUNMOzRDQUNDQyxLQUFJOzRDQUNKQyxLQUFJOzRDQUNKVCxPQUFPO2dEQUFFVSxVQUFVO2dEQUFTQyxXQUFXO2dEQUFPQyxPQUFPO2dEQUFRQyxRQUFRO2dEQUFRQyxXQUFXOzRDQUFtQjs7Ozs7O3NEQUU3Ryw4REFBQ1A7NENBQ0NDLEtBQUk7NENBQ0pDLEtBQUk7NENBQ0pULE9BQU87Z0RBQUVVLFVBQVU7Z0RBQU9DLFdBQVc7Z0RBQU9DLE9BQU87Z0RBQVFDLFFBQVE7Z0RBQVFDLFdBQVc7NENBQW1COzs7Ozs7c0RBRTNHLDhEQUFDUDs0Q0FDQ0MsS0FBSTs0Q0FDSkMsS0FBSTs0Q0FDSlQsT0FBTztnREFBRVUsVUFBVTtnREFBT0MsV0FBVztnREFBT0MsT0FBTztnREFBUUMsUUFBUTtnREFBUUMsV0FBVzs0Q0FBbUI7Ozs7OztzREFFM0csOERBQUNQOzRDQUNDQyxLQUFJOzRDQUNKQyxLQUFJOzRDQUNKVCxPQUFPO2dEQUFFVSxVQUFVO2dEQUFPQyxXQUFXO2dEQUFPQyxPQUFPO2dEQUFRQyxRQUFRO2dEQUFRQyxXQUFXOzRDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkg7R0F2RE14Qjs7UUFDV0gsa0RBQVNBOzs7S0FEcEJHO0FBeUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUvaW5kZXgudHN4PzdjM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGVmdE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xlZnQtbmF2JztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgVG9wTmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RvcC1uYXZcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRoZW50aWNhdGVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoZW50aWNhdGVkVXNlcicpO1xyXG4gICAgaWYgKHVzZXIgIT09IGF1dGhlbnRpY2F0ZWRVc2VyKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKGAvaG9tZT91c2VyPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGhlbnRpY2F0ZWRVc2VyKX1gKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1pbkhlaWdodDogJzEwMHZoJyB9fT5cclxuICAgICAgPExlZnROYXYgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgIDxUb3BOYXYgLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvYXJtYW5pLmpwZydcclxuICAgICAgICAgICAgICBhbHQ9XCJBcm1hbmlcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1heEhlaWdodDogJzEwMCUnLCB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJywgYm94U2hhZG93OiAnMXB4IDFweCAycHggZ3JleScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogXCIyMHB4XCIsIGJveFNoYWRvdzogXCIxcHggMXB4IDJweCBncmV5XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgICA8aDUgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIn19PlJlY29tbWVuZGVkIEVsZWN0cm9uaWNzPC9oNT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aC0xMDAnIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgd2lkdGg6ICc5MCUnIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvaXBob25lLmpwZydcclxuICAgICAgICAgICAgICBhbHQ9XCJpUGhvbmVcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjAwcHgnLCBtYXhIZWlnaHQ6ICcyMyUnLCB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJywgYm94U2hhZG93OiAnMXB4IDFweCAycHggZ3JleScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz0nL3RoaW5rcGFkLmpwZydcclxuICAgICAgICAgICAgICBhbHQ9XCJUaGlua1BhZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcyMyUnLCBtYXhIZWlnaHQ6ICcyMyUnLCB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJywgYm94U2hhZG93OiAnMXB4IDFweCAycHggZ3JleScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz0nL3Nlbm5oZWlzZXIuanBnJ1xyXG4gICAgICAgICAgICAgIGFsdD1cIlNlbm5oZWlzZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjMlJywgbWF4SGVpZ2h0OiAnMjMlJywgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiAnYXV0bycsIGJveFNoYWRvdzogJzFweCAxcHggMnB4IGdyZXknIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9Jy9rZXlib2FyZC5qcGcnXHJcbiAgICAgICAgICAgICAgYWx0PVwiS2V5Ym9hcmRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjMlJywgbWF4SGVpZ2h0OiAnMjMlJywgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiAnYXV0bycsIGJveFNoYWRvdzogJzFweCAxcHggMnB4IGdyZXknIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxlZnROYXYiLCJUb3BOYXYiLCJIb21lIiwicm91dGVyIiwidXNlciIsInF1ZXJ5IiwiYXV0aGVudGljYXRlZFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVwbGFjZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsIm1pbkhlaWdodCIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaW1nIiwic3JjIiwiYWx0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJveFNoYWRvdyIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoNSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/index.tsx\n"));

/***/ })

});