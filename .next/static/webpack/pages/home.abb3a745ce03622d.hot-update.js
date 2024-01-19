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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_left_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/left-nav */ \"./store/left-nav.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst LeftNav = ()=>{\n    _s();\n    const { showNav, setShowNav } = (0,_store_left_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            position: \"fixed\",\n            left: showNav ? \"0\" : \"-170px\",\n            top: \"0\",\n            height: \"100vh\",\n            width: \"170px\",\n            transition: \"left 0.3s ease-in-out\",\n            backgroundColor: \"white\",\n            boxShadow: \"1px 1px 2px grey\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                viewBox: \"0 0 384 512\",\n                fill: \"grey\",\n                width: 15,\n                style: {\n                    marginLeft: \"140\",\n                    marginTop: \"15px\",\n                    cursor: \"pointer\"\n                },\n                onClick: ()=>setShowNav(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 192\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"vh-100\",\n                style: {\n                    overflowY: \"hidden\",\n                    listStyle: \"none\",\n                    margin: \"0\",\n                    padding: \"0\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            marginTop: \"30px\",\n                            marginLeft: \"30px\",\n                            cursor: \"pointer\"\n                        },\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            marginTop: \"30px\",\n                            marginLeft: \"30px\",\n                            cursor: \"pointer\"\n                        },\n                        children: \"Shopping Cart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            marginTop: \"30px\",\n                            marginLeft: \"30px\",\n                            cursor: \"pointer\"\n                        },\n                        children: \"MyMerchant\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            marginTop: \"30px\",\n                            marginLeft: \"30px\",\n                            cursor: \"pointer\"\n                        },\n                        onClick: ()=>router.replace(\"/\"),\n                        children: \"Log out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\components\\\\left-nav.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LeftNav, \"WR1FhiC6bL54fDXiVMA3IH87vjI=\", false, function() {\n    return [\n        _store_left_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = LeftNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftNav);\nvar _c;\n$RefreshReg$(_c, \"LeftNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xlZnQtbmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDTztBQUNiO0FBRXhDLE1BQU1HLFVBQVU7O0lBQ2QsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRSxHQUFHSiwyREFBb0JBO0lBRXBELE1BQU1LLFNBQVNKLHNEQUFTQTtJQUV4QixxQkFDRSw4REFBQ0s7UUFBSUMsT0FBTztZQUNWQyxVQUFVO1lBQ1ZDLE1BQU1OLFVBQVUsTUFBTTtZQUN0Qk8sS0FBSztZQUNMQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxpQkFBaUI7WUFDakJDLFdBQVc7UUFDYjs7MEJBQ0UsOERBQUNDO2dCQUFJQyxPQUFNO2dCQUE2QkMsU0FBUTtnQkFBY0MsTUFBSztnQkFBT1AsT0FBTztnQkFBSUwsT0FBTztvQkFBQ2EsWUFBWTtvQkFBT0MsV0FBVztvQkFBUUMsUUFBUTtnQkFBUztnQkFBR0MsU0FBUyxJQUFNbkIsV0FBVzswQkFBUSw0RUFBQ29CO29CQUFLQyxHQUFFOzs7Ozs7Ozs7OzswQkFDak0sOERBQUNDO2dCQUFHQyxXQUFVO2dCQUFTcEIsT0FBTztvQkFBRXFCLFdBQVc7b0JBQVVDLFdBQVc7b0JBQVFDLFFBQVE7b0JBQUtDLFNBQVM7Z0JBQUk7O2tDQUNoRyw4REFBQ0M7d0JBQUd6QixPQUFPOzRCQUFFYyxXQUFXOzRCQUFRRCxZQUFZOzRCQUFRRSxRQUFRO3dCQUFVO2tDQUFHOzs7Ozs7a0NBQ3pFLDhEQUFDVTt3QkFBR3pCLE9BQU87NEJBQUVjLFdBQVc7NEJBQVFELFlBQVk7NEJBQVFFLFFBQVE7d0JBQVU7a0NBQUc7Ozs7OztrQ0FDekUsOERBQUNVO3dCQUFHekIsT0FBTzs0QkFBRWMsV0FBVzs0QkFBUUQsWUFBWTs0QkFBUUUsUUFBUTt3QkFBVTtrQ0FBRzs7Ozs7O2tDQUN6RSw4REFBQ1U7d0JBQUd6QixPQUFPOzRCQUFFYyxXQUFXOzRCQUFRRCxZQUFZOzRCQUFRRSxRQUFRO3dCQUFVO3dCQUFHQyxTQUFTLElBQU1sQixPQUFPNEIsT0FBTyxDQUFDO2tDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckg7R0F6Qk0vQjs7UUFDNEJGLHVEQUFvQkE7UUFFckNDLGtEQUFTQTs7O0tBSHBCQztBQTJCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xlZnQtbmF2LnRzeD9kMTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IHVzZUxlZnROYXZTdGF0ZVN0b3JlIGZyb20gJy4uL3N0b3JlL2xlZnQtbmF2JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTGVmdE5hdiA9ICgpID0+IHtcclxuICBjb25zdCB7IHNob3dOYXYsIHNldFNob3dOYXYgfSA9IHVzZUxlZnROYXZTdGF0ZVN0b3JlKCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IHN0eWxlPXt7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICBsZWZ0OiBzaG93TmF2ID8gJzAnIDogJy0xNzBweCcsXHJcbiAgICAgIHRvcDogJzAnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgIHdpZHRoOiAnMTcwcHgnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnbGVmdCAwLjNzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBib3hTaGFkb3c6ICcxcHggMXB4IDJweCBncmV5JyxcclxuICAgIH19PlxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIiBmaWxsPSdncmV5JyB3aWR0aD17MTV9IHN0eWxlPXt7bWFyZ2luTGVmdDogXCIxNDBcIiwgbWFyZ2luVG9wOiBcIjE1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIn19IG9uQ2xpY2s9eygpID0+IHNldFNob3dOYXYoZmFsc2UpfT48cGF0aCBkPVwiTTM0Mi42IDE1MC42YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwTDE5MiAyMTAuNyA4Ni42IDEwNS40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM0wxNDYuNyAyNTYgNDEuNCAzNjEuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMEwxOTIgMzAxLjMgMjk3LjQgNDA2LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM0wyMzcuMyAyNTYgMzQyLjYgMTUwLjZ6XCIvPjwvc3ZnPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSd2aC0xMDAnIHN0eWxlPXt7IG92ZXJmbG93WTogJ2hpZGRlbicsIGxpc3RTdHlsZTogJ25vbmUnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzAnIH19PlxyXG4gICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW5Ub3A6ICczMHB4JywgbWFyZ2luTGVmdDogJzMwcHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5Qcm9maWxlPC9saT5cclxuICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMzBweCcsIG1hcmdpbkxlZnQ6ICczMHB4JywgY3Vyc29yOiAncG9pbnRlcicgfX0+U2hvcHBpbmcgQ2FydDwvbGk+XHJcbiAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpblRvcDogJzMwcHgnLCBtYXJnaW5MZWZ0OiAnMzBweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19Pk15TWVyY2hhbnQ8L2xpPlxyXG4gICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW5Ub3A6ICczMHB4JywgbWFyZ2luTGVmdDogJzMwcHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucmVwbGFjZSgnLycpfT5Mb2cgb3V0PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWZ0TmF2O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VMZWZ0TmF2U3RhdGVTdG9yZSIsInVzZVJvdXRlciIsIkxlZnROYXYiLCJzaG93TmF2Iiwic2V0U2hvd05hdiIsInJvdXRlciIsIm5hdiIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93Iiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwiZmlsbCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJjdXJzb3IiLCJvbkNsaWNrIiwicGF0aCIsImQiLCJ1bCIsImNsYXNzTmFtZSIsIm92ZXJmbG93WSIsImxpc3RTdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJsaSIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/left-nav.tsx\n"));

/***/ })

});