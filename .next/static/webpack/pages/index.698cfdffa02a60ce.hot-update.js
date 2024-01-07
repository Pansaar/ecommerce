"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n// Login.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const toRegister = ()=>{\n        router.push(\"/register\");\n    };\n    const handleLogin = async ()=>{\n        console.log(\"handleLogin executed\");\n        setSubmitted(true);\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/login\", {\n                username,\n                password\n            });\n            // Assuming the login was successful, set some authentication state\n            localStorage.setItem(\"authenticated\", \"true\");\n            localStorage.setItem(\"authenticatedUser\", username);\n            // Clear form fields and navigate to the home page\n            setUsername(\"\");\n            setPassword(\"\");\n            setErrorMessage(\"\");\n            setLoading(false);\n            router.push(\"/home?user=\".concat(encodeURIComponent(username)));\n        } catch (error) {\n            var _error_response;\n            console.error(((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data.message) || \"An error occurred\");\n            setErrorMessage(\"Invalid credentials\");\n            setLoading(false);\n            setSubmitted(false);\n        }\n    };\n    const handleKeyPress = (e)=>{\n        if (e.key === \"Enter\") {\n            e.preventDefault();\n            handleLogin();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex flex-column vh-100 align-items-center justify-content-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"red\"\n                },\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\index.tsx\",\n                lineNumber: 60,\n                columnNumber: 24\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: username,\n                onChange: (e)=>setUsername(e.target.value),\n                className: \"mb-1\",\n                disabled: submitted || loading,\n                onKeyPress: handleKeyPress,\n                placeholder: \"Username\"\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: (e)=>setPassword(e.target.value),\n                className: \"mb-3\",\n                disabled: submitted || loading,\n                onKeyPress: handleKeyPress,\n                placeholder: \"Password\"\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: handleLogin,\n                className: \"mb-3\",\n                disabled: submitted || loading,\n                children: loading ? \"Logging in...\" : \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\index.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                onClick: toRegister,\n                onMouseEnter: ()=>setIsHovered(true),\n                onMouseLeave: ()=>setIsHovered(false),\n                style: {\n                    cursor: \"pointer\",\n                    textDecoration: isHovered ? \"underline\" : \"none\"\n                },\n                children: \"Don't have an account? Register here\"\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\nextjs-practice\\\\ecommerce\\\\pages\\\\index.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"SdeTcA/VRY2Nvbq2OZU+NaCFtdo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFlBQVk7OztBQUV1QztBQUN6QjtBQUNjO0FBQ007QUFFOUMsTUFBTUksUUFBUTs7SUFDWixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1nQixTQUFTZCxzREFBU0E7SUFFeEIsTUFBTWUsYUFBYTtRQUNqQkQsT0FBT0UsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxjQUFjO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUM7UUFDWlYsYUFBYTtRQUNiRSxXQUFXO1FBRVgsSUFBSTtZQUNGLE1BQU1TLFdBQVcsTUFBTXJCLGtEQUFVLENBQUMsY0FBYztnQkFDOUNHO2dCQUNBRTtZQUNGO1lBRUEsbUVBQW1FO1lBQ25Fa0IsYUFBYUMsT0FBTyxDQUFDLGlCQUFpQjtZQUN0Q0QsYUFBYUMsT0FBTyxDQUFDLHFCQUFxQnJCO1lBRTFDLGtEQUFrRDtZQUNsREMsWUFBWTtZQUNaRSxZQUFZO1lBQ1pFLGdCQUFnQjtZQUNoQkksV0FBVztZQUNYRyxPQUFPRSxJQUFJLENBQUMsY0FBMkMsT0FBN0JRLG1CQUFtQnRCO1FBQy9DLEVBQUUsT0FBT3VCLE9BQU87Z0JBQ0FBO1lBQWRQLFFBQVFPLEtBQUssQ0FBQ0EsRUFBQUEsa0JBQUFBLE1BQU1MLFFBQVEsY0FBZEssc0NBQUFBLGdCQUFnQkMsSUFBSSxDQUFDQyxPQUFPLEtBQUk7WUFDOUNwQixnQkFBZ0I7WUFDaEJJLFdBQVc7WUFDWEYsYUFBYTtRQUNmO0lBQ0Y7SUFFQSxNQUFNbUIsaUJBQWlCLENBQUNDO1FBQ3RCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxTQUFTO1lBQ3JCRCxFQUFFRSxjQUFjO1lBQ2hCZDtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSDVCLDhCQUFnQiw4REFBQzZCO2dCQUFFQyxPQUFPO29CQUFFQyxPQUFPO2dCQUFNOzBCQUFJL0I7Ozs7OzswQkFDOUMsOERBQUNnQztnQkFDQ0MsTUFBSztnQkFDTEMsT0FBT3RDO2dCQUNQdUMsVUFBVSxDQUFDWixJQUFNMUIsWUFBWTBCLEVBQUVhLE1BQU0sQ0FBQ0YsS0FBSztnQkFDM0NQLFdBQVU7Z0JBQ1ZVLFVBQVVuQyxhQUFhRTtnQkFDdkJrQyxZQUFZaEI7Z0JBQ1ppQixhQUFZOzs7Ozs7MEJBRWQsOERBQUNQO2dCQUNDQyxNQUFLO2dCQUNMQyxPQUFPcEM7Z0JBQ1BxQyxVQUFVLENBQUNaLElBQU14QixZQUFZd0IsRUFBRWEsTUFBTSxDQUFDRixLQUFLO2dCQUMzQ1AsV0FBVTtnQkFDVlUsVUFBVW5DLGFBQWFFO2dCQUN2QmtDLFlBQVloQjtnQkFDWmlCLGFBQVk7Ozs7OzswQkFFZCw4REFBQ0M7Z0JBQU9QLE1BQUs7Z0JBQVNRLFNBQVM5QjtnQkFBYWdCLFdBQVU7Z0JBQU9VLFVBQVVuQyxhQUFhRTswQkFDakZBLFVBQVUsa0JBQWtCOzs7Ozs7MEJBRS9CLDhEQUFDc0M7Z0JBQUVELFNBQVNoQztnQkFBWWtDLGNBQWMsSUFBTXBDLGFBQWE7Z0JBQU9xQyxjQUFjLElBQU1yQyxhQUFhO2dCQUFRdUIsT0FBTztvQkFBRWUsUUFBUTtvQkFBV0MsZ0JBQWdCeEMsWUFBWSxjQUFjO2dCQUFPOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFLL0w7R0EvRU1YOztRQU9XRCxrREFBU0E7OztLQVBwQkM7QUFpRk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTG9naW4udHN4XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHRvUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL3JlZ2lzdGVyJyk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2hhbmRsZUxvZ2luIGV4ZWN1dGVkJyk7XHJcbiAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBBc3N1bWluZyB0aGUgbG9naW4gd2FzIHN1Y2Nlc3NmdWwsIHNldCBzb21lIGF1dGhlbnRpY2F0aW9uIHN0YXRlXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGVkJywgJ3RydWUnKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhlbnRpY2F0ZWRVc2VyJywgdXNlcm5hbWUpO1xyXG5cclxuICAgICAgLy8gQ2xlYXIgZm9ybSBmaWVsZHMgYW5kIG5hdmlnYXRlIHRvIHRoZSBob21lIHBhZ2VcclxuICAgICAgc2V0VXNlcm5hbWUoJycpO1xyXG4gICAgICBzZXRQYXNzd29yZCgnJyk7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByb3V0ZXIucHVzaChgL2hvbWU/dXNlcj0ke2VuY29kZVVSSUNvbXBvbmVudCh1c2VybmFtZSl9YCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlPy5kYXRhLm1lc3NhZ2UgfHwgJ0FuIGVycm9yIG9jY3VycmVkJyk7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnSW52YWxpZCBjcmVkZW50aWFscycpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGhhbmRsZUxvZ2luKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4gdmgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgPGgyPkxvZ2luPC9oMj5cclxuICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yTWVzc2FnZX08L3A+fVxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT0nbWItMSdcclxuICAgICAgICBkaXNhYmxlZD17c3VibWl0dGVkIHx8IGxvYWRpbmd9XHJcbiAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJ1xyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9J21iLTMnXHJcbiAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRlZCB8fCBsb2FkaW5nfVxyXG4gICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlTG9naW59IGNsYXNzTmFtZT0nbWItMycgZGlzYWJsZWQ9e3N1Ym1pdHRlZCB8fCBsb2FkaW5nfT5cclxuICAgICAgICB7bG9hZGluZyA/ICdMb2dnaW5nIGluLi4uJyA6ICdMb2dpbid9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YSBvbkNsaWNrPXt0b1JlZ2lzdGVyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfSBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiLCB0ZXh0RGVjb3JhdGlvbjogaXNIb3ZlcmVkID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiIH19PlxyXG4gICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gUmVnaXN0ZXIgaGVyZVxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJMb2dpbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJyb3V0ZXIiLCJ0b1JlZ2lzdGVyIiwicHVzaCIsImhhbmRsZUxvZ2luIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicG9zdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiaGFuZGxlS2V5UHJlc3MiLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJzdHlsZSIsImNvbG9yIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImRpc2FibGVkIiwib25LZXlQcmVzcyIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImEiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJjdXJzb3IiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});