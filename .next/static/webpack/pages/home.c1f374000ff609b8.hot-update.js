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

/***/ "./components/left-nav.tsx":
/*!*********************************!*\
  !*** ./components/left-nav.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_left_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/left-nav */ \"./store/left-nav.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst LeftNav = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const { showNav, setShowNav } = (0,_store_left_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            position: \"fixed\",\n            left: showNav ? \"0\" : \"-170px\",\n            top: \"0\",\n            height: \"100vh\",\n            width: \"170px\",\n            transition: \"left 0.3s ease-in-out\",\n            backgroundColor: \"white\",\n            boxShadow: \"1px 1px 2px grey\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                viewBox: \"0 0 384 512\",\n                fill: \"grey\",\n                width: 20,\n                style: {\n                    marginLeft: \"130\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 120\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"vh-100\",\n                style: {\n                    overflowY: \"hidden\",\n                    listStyle: \"none\",\n                    margin: \"0\",\n                    padding: \"0\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            marginTop: \"70px\",\n                            marginLeft: \"30px\",\n                            cursor: \"pointer\"\n                        },\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            marginTop: \"30px\",\n                            marginLeft: \"30px\",\n                            cursor: \"pointer\"\n                        },\n                        children: \"Shopping Cart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            marginTop: \"30px\",\n                            marginLeft: \"30px\",\n                            cursor: \"pointer\"\n                        },\n                        children: \"MyMerchant\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            marginTop: \"30px\",\n                            marginLeft: \"30px\",\n                            cursor: \"pointer\"\n                        },\n                        onClick: _s1(()=>{\n                            _s1();\n                            return (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().replace(\"/\");\n                        }, \"CeygcqajjFExIxFEzW4x/gfWEGQ=\", false, function() {\n                            return [\n                                next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n                            ];\n                        }),\n                        children: \"Log out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LeftNav, \"+KjfGCAIVxlSRl+TR7SRvTEBDbQ=\", false, function() {\n    return [\n        _store_left_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = LeftNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftNav);\nvar _c;\n$RefreshReg$(_c, \"LeftNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xlZnQtbmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDTztBQUNiO0FBRXhDLE1BQU1HLFVBQVU7OztJQUNkLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUUsR0FBR0osMkRBQW9CQTtJQUVwRCxxQkFDRSw4REFBQ0s7UUFBSUMsT0FBTztZQUNWQyxVQUFVO1lBQ1ZDLE1BQU1MLFVBQVUsTUFBTTtZQUN0Qk0sS0FBSztZQUNMQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxpQkFBaUI7WUFDakJDLFdBQVc7UUFDYjs7MEJBQ0UsOERBQUNDO2dCQUFJQyxPQUFNO2dCQUE2QkMsU0FBUTtnQkFBY0MsTUFBSztnQkFBT1AsT0FBTztnQkFBSUwsT0FBTztvQkFBQ2EsWUFBWTtnQkFBSzswQkFBRyw0RUFBQ0M7b0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7OzBCQUN6SCw4REFBQ0M7Z0JBQUdDLFdBQVU7Z0JBQVNqQixPQUFPO29CQUFFa0IsV0FBVztvQkFBVUMsV0FBVztvQkFBUUMsUUFBUTtvQkFBS0MsU0FBUztnQkFBSTs7a0NBQ2hHLDhEQUFDQzt3QkFBR3RCLE9BQU87NEJBQUV1QixXQUFXOzRCQUFRVixZQUFZOzRCQUFRVyxRQUFRO3dCQUFVO2tDQUFHOzs7Ozs7a0NBQ3pFLDhEQUFDRjt3QkFBR3RCLE9BQU87NEJBQUV1QixXQUFXOzRCQUFRVixZQUFZOzRCQUFRVyxRQUFRO3dCQUFVO2tDQUFHOzs7Ozs7a0NBQ3pFLDhEQUFDRjt3QkFBR3RCLE9BQU87NEJBQUV1QixXQUFXOzRCQUFRVixZQUFZOzRCQUFRVyxRQUFRO3dCQUFVO2tDQUFHOzs7Ozs7a0NBQ3pFLDhEQUFDRjt3QkFBR3RCLE9BQU87NEJBQUV1QixXQUFXOzRCQUFRVixZQUFZOzRCQUFRVyxRQUFRO3dCQUFVO3dCQUFHQyxPQUFPLE1BQUU7OzRCQUFNOUIsT0FBQUEsc0RBQVNBLEdBQUcrQixPQUFPLENBQUM7d0JBQUc7O2dDQUF2Qi9CLGtEQUFTQTs7O2tDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFIO0dBdkJNQzs7UUFDNEJGLHVEQUFvQkE7OztLQURoREU7QUF5Qk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZWZ0LW5hdi50c3g/ZDEzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCB1c2VMZWZ0TmF2U3RhdGVTdG9yZSBmcm9tICcuLi9zdG9yZS9sZWZ0LW5hdic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IExlZnROYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzaG93TmF2LCBzZXRTaG93TmF2IH0gPSB1c2VMZWZ0TmF2U3RhdGVTdG9yZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBzdHlsZT17e1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgbGVmdDogc2hvd05hdiA/ICcwJyA6ICctMTcwcHgnLCAgLy8gQWRqdXN0IHRoZSB3aWR0aCBvZiB0aGUgbGVmdG5hdlxyXG4gICAgICB0b3A6ICcwJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICB3aWR0aDogJzE3MHB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2xlZnQgMC4zcyBlYXNlLWluLW91dCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgIC8vIEFkanVzdCBiYWNrZ3JvdW5kIGNvbG9yIGFzIG5lZWRlZFxyXG4gICAgICBib3hTaGFkb3c6ICcxcHggMXB4IDJweCBncmV5JyxcclxuICAgIH19PlxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIiBmaWxsPSdncmV5JyB3aWR0aD17MjB9IHN0eWxlPXt7bWFyZ2luTGVmdDogXCIxMzBcIn19PjxwYXRoIGQ9XCJNMzQyLjYgMTUwLjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMTkyIDIxMC43IDg2LjYgMTA1LjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zTDE0Ni43IDI1NiA0MS40IDM2MS40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3MzMi44IDEyLjUgNDUuMyAwTDE5MiAzMDEuMyAyOTcuNCA0MDYuNmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zTDIzNy4zIDI1NiAzNDIuNiAxNTAuNnpcIi8+PC9zdmc+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J3ZoLTEwMCcgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnaGlkZGVuJywgbGlzdFN0eWxlOiAnbm9uZScsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMCcgfX0+XHJcbiAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpblRvcDogJzcwcHgnLCBtYXJnaW5MZWZ0OiAnMzBweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19PlByb2ZpbGU8L2xpPlxyXG4gICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW5Ub3A6ICczMHB4JywgbWFyZ2luTGVmdDogJzMwcHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5TaG9wcGluZyBDYXJ0PC9saT5cclxuICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMzBweCcsIG1hcmdpbkxlZnQ6ICczMHB4JywgY3Vyc29yOiAncG9pbnRlcicgfX0+TXlNZXJjaGFudDwvbGk+XHJcbiAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpblRvcDogJzMwcHgnLCBtYXJnaW5MZWZ0OiAnMzBweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHVzZVJvdXRlcigpLnJlcGxhY2UoJy8nKX0+TG9nIG91dDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdE5hdjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTGVmdE5hdlN0YXRlU3RvcmUiLCJ1c2VSb3V0ZXIiLCJMZWZ0TmF2Iiwic2hvd05hdiIsInNldFNob3dOYXYiLCJuYXYiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImhlaWdodCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJtYXJnaW5MZWZ0IiwicGF0aCIsImQiLCJ1bCIsImNsYXNzTmFtZSIsIm92ZXJmbG93WSIsImxpc3RTdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJsaSIsIm1hcmdpblRvcCIsImN1cnNvciIsIm9uQ2xpY2siLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/left-nav.tsx\n"));

/***/ })

});