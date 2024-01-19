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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_left_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/left-nav */ \"./components/left-nav.tsx\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_top_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/top-nav */ \"./components/top-nav.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { user } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const authenticatedUser = localStorage.getItem(\"authenticatedUser\");\n        if (user !== authenticatedUser) {\n            router.replace(\"/home?user=\".concat(encodeURIComponent(authenticatedUser)));\n        }\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_left_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1,\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_top_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 1,\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    backgroundColor: \"white\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/armani.jpg\",\n                                        alt: \"Armani\",\n                                        style: {\n                                            maxWidth: \"100%\",\n                                            maxHeight: \"100%\",\n                                            boxShadow: \"1px 1px 2px grey\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        viewBox: \"0 0 512 512\",\n                                        width: 60,\n                                        fill: \"white\",\n                                        style: {\n                                            position: \"absolute\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 130\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            paddingTop: \"20px\",\n                            boxShadow: \"1px 1px 2px grey\",\n                            backgroundColor: \"white\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                style: {\n                                    marginLeft: \"10px\",\n                                    marginBottom: \"20px\"\n                                },\n                                children: \"Recommended\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    flex: 1,\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    justifyContent: \"center\",\n                                    alignItems: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        display: \"flex\",\n                                        justifyContent: \"space-between\",\n                                        width: \"90%\",\n                                        marginBottom: \"30px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/iphone.jpg\",\n                                            alt: \"iPhone\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/thinkpad.jpg\",\n                                            alt: \"ThinkPad\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/sennheiser.jpg\",\n                                            alt: \"Sennheiser\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/keyboard.jpg\",\n                                            alt: \"Keyboard\",\n                                            style: {\n                                                maxWidth: \"23%\",\n                                                maxHeight: \"23%\",\n                                                width: \"auto\",\n                                                height: \"auto\",\n                                                boxShadow: \"1px 1px 2px grey\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lL2luZGV4LnRzeD83YzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExlZnROYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sZWZ0LW5hdic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IFRvcE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b3AtbmF2XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0aGVudGljYXRlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aGVudGljYXRlZFVzZXInKTtcclxuICAgIGlmICh1c2VyICE9PSBhdXRoZW50aWNhdGVkVXNlcikge1xyXG4gICAgICByb3V0ZXIucmVwbGFjZShgL2hvbWU/dXNlcj0ke2VuY29kZVVSSUNvbXBvbmVudChhdXRoZW50aWNhdGVkVXNlcil9YCk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtaW5IZWlnaHQ6ICcxMDB2aCcgfX0+XHJcbiAgICAgIDxMZWZ0TmF2IC8+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cclxuICAgICAgICA8VG9wTmF2IC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9Jy9hcm1hbmkuanBnJ1xyXG4gICAgICAgICAgICAgIGFsdD1cIkFybWFuaVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnMTAwJScsIGJveFNoYWRvdzogJzFweCAxcHggMnB4IGdyZXknIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPXs2MH0gZmlsbD0nd2hpdGUnIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZSd9fT48cGF0aCBkPVwiTTQ2NCAyNTZBMjA4IDIwOCAwIDEgMSA0OCAyNTZhMjA4IDIwOCAwIDEgMSA0MTYgMHpNMCAyNTZhMjU2IDI1NiAwIDEgMCA1MTIgMEEyNTYgMjU2IDAgMSAwIDAgMjU2ek0yOTQuNiAxMzUuMWMtNC4yLTQuNS0xMC4xLTcuMS0xNi4zLTcuMUMyNjYgMTI4IDI1NiAxMzggMjU2IDE1MC4zVjIwOEgxNjBjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjMyYzAgMTcuNyAxNC4zIDMyIDMyIDMyaDk2djU3LjdjMCAxMi4zIDEwIDIyLjMgMjIuMyAyMi4zYzYuMiAwIDEyLjEtMi42IDE2LjMtNy4xbDk5LjktMTA3LjFjMy41LTMuOCA1LjUtOC43IDUuNS0xMy44cy0yLTEwLjEtNS41LTEzLjhMMjk0LjYgMTM1LjF6XCIvPjwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogXCIyMHB4XCIsIGJveFNoYWRvdzogXCIxcHggMXB4IDJweCBncmV5XCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgICA8aDUgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIn19PlJlY29tbWVuZGVkPC9oNT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzkwJScsIG1hcmdpbkJvdHRvbTogJzMwcHgnIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvaXBob25lLmpwZydcclxuICAgICAgICAgICAgICBhbHQ9XCJpUGhvbmVcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjMlJywgbWF4SGVpZ2h0OiAnMjMlJywgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiAnYXV0bycsIGJveFNoYWRvdzogJzFweCAxcHggMnB4IGdyZXknIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9Jy90aGlua3BhZC5qcGcnXHJcbiAgICAgICAgICAgICAgYWx0PVwiVGhpbmtQYWRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjMlJywgbWF4SGVpZ2h0OiAnMjMlJywgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiAnYXV0bycsIGJveFNoYWRvdzogJzFweCAxcHggMnB4IGdyZXknIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9Jy9zZW5uaGVpc2VyLmpwZydcclxuICAgICAgICAgICAgICBhbHQ9XCJTZW5uaGVpc2VyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzIzJScsIG1heEhlaWdodDogJzIzJScsIHdpZHRoOiAnYXV0bycsIGhlaWdodDogJ2F1dG8nLCBib3hTaGFkb3c6ICcxcHggMXB4IDJweCBncmV5JyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScva2V5Ym9hcmQuanBnJ1xyXG4gICAgICAgICAgICAgIGFsdD1cIktleWJvYXJkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzIzJScsIG1heEhlaWdodDogJzIzJScsIHdpZHRoOiAnYXV0bycsIGhlaWdodDogJ2F1dG8nLCBib3hTaGFkb3c6ICcxcHggMXB4IDJweCBncmV5JyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJMZWZ0TmF2IiwiVG9wTmF2IiwiSG9tZSIsInJvdXRlciIsInVzZXIiLCJxdWVyeSIsImF1dGhlbnRpY2F0ZWRVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlcGxhY2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJmbGV4IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImltZyIsInNyYyIsImFsdCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiYm94U2hhZG93Iiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94Iiwid2lkdGgiLCJmaWxsIiwicG9zaXRpb24iLCJwYXRoIiwiZCIsInBhZGRpbmdUb3AiLCJoNSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/index.tsx\n"));

/***/ })

});