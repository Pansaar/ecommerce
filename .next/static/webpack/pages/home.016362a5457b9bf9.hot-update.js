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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_left_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/left-nav */ \"./components/left-nav.tsx\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_left_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/left-nav */ \"./store/left-nav.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { user } = router.query;\n    const { showNav, setShowNav } = (0,_store_left_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const openCloseLeftNav = ()=>{\n        if (showNav === false) {\n            setShowNav(true);\n        } else if (showNav === true) {\n            setShowNav(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const authenticatedUser = localStorage.getItem(\"authenticatedUser\");\n        if (user !== authenticatedUser) {\n            router.replace(\"/home?user=\".concat(encodeURIComponent(authenticatedUser)));\n        }\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white\",\n                style: {\n                    padding: \"10px\",\n                    backgroundColor: \"grey\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    onClick: ()=>openCloseLeftNav(),\n                    children: [\n                        \"User: \",\n                        user\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_left_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\home\\\\index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"DmKBXpVoIVg1pgkgNdtzfE+2KVE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _store_left_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFDTztBQUNEO0FBQ1U7QUFFeEQsTUFBTUssT0FBTzs7SUFDWCxNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxJQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM3QixNQUFNLEVBQUNDLE9BQU8sRUFBRUMsVUFBVSxFQUFDLEdBQUdOLDJEQUFvQkE7SUFFcEQsTUFBTU8sbUJBQW1CO1FBQ3ZCLElBQUdGLFlBQVksT0FBTztZQUNwQkMsV0FBVztRQUNiLE9BQ0ssSUFBR0QsWUFBWSxNQUFNO1lBQ3hCQyxXQUFXO1FBQ2I7SUFDRjtJQUVFVCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLG9CQUFvQkMsYUFBYUMsT0FBTyxDQUFDO1FBQy9DLElBQUlQLFNBQVNLLG1CQUFtQjtZQUM5Qk4sT0FBT1MsT0FBTyxDQUFDLGNBQW9ELE9BQXRDQyxtQkFBbUJKO1FBQ2xEO0lBQ0YsR0FBRztRQUFDTDtLQUFLO0lBRVQscUJBQ0UsOERBQUNVOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7Z0JBQWFDLE9BQU87b0JBQUNDLFNBQVE7b0JBQVFDLGlCQUFpQjtnQkFBTTswQkFDekUsNEVBQUNDO29CQUFHQyxTQUFTLElBQU1aOzt3QkFBb0I7d0JBQU9KOzs7Ozs7Ozs7Ozs7MEJBRWhELDhEQUFDSiw0REFBT0E7Ozs7Ozs7Ozs7O0FBR2Q7R0E3Qk1FOztRQUNXSCxrREFBU0E7UUFFTUUsdURBQW9CQTs7O0tBSDlDQztBQStCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lL2luZGV4LnRzeD83YzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExlZnROYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sZWZ0LW5hdidcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgdXNlTGVmdE5hdlN0YXRlU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvbGVmdC1uYXYnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7c2hvd05hdiwgc2V0U2hvd05hdn0gPSB1c2VMZWZ0TmF2U3RhdGVTdG9yZSgpO1xyXG5cclxuY29uc3Qgb3BlbkNsb3NlTGVmdE5hdiA9ICgpID0+IHtcclxuICBpZihzaG93TmF2ID09PSBmYWxzZSkge1xyXG4gICAgc2V0U2hvd05hdih0cnVlKVxyXG4gIH1cclxuICBlbHNlIGlmKHNob3dOYXYgPT09IHRydWUpIHtcclxuICAgIHNldFNob3dOYXYoZmFsc2UpXHJcbiAgfVxyXG59XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRoZW50aWNhdGVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoZW50aWNhdGVkVXNlcicpO1xyXG4gICAgaWYgKHVzZXIgIT09IGF1dGhlbnRpY2F0ZWRVc2VyKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKGAvaG9tZT91c2VyPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGhlbnRpY2F0ZWRVc2VyKX1gKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtd2hpdGUnIHN0eWxlPXt7cGFkZGluZzpcIjEwcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIn19PlxyXG4gICAgICAgIDxoNSBvbkNsaWNrPXsoKSA9PiBvcGVuQ2xvc2VMZWZ0TmF2KCl9PlVzZXI6IHt1c2VyfTwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxMZWZ0TmF2IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGVmdE5hdiIsInVzZUxlZnROYXZTdGF0ZVN0b3JlIiwiSG9tZSIsInJvdXRlciIsInVzZXIiLCJxdWVyeSIsInNob3dOYXYiLCJzZXRTaG93TmF2Iiwib3BlbkNsb3NlTGVmdE5hdiIsImF1dGhlbnRpY2F0ZWRVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlcGxhY2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJoNSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home/index.tsx\n"));

/***/ })

});