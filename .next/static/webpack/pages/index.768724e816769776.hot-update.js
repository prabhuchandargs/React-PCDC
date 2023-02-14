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

/***/ "./pages/aboutCard.js":
/*!****************************!*\
  !*** ./pages/aboutCard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AboutCard = (param)=>{\n    let { image , title , subHead , color , list , cardClass , width , onClick  } = param;\n    _s();\n    const [isHover, setIsHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMouseEnter = ()=>{\n        setIsHover(true);\n    };\n    const handleMouseLeave = ()=>{\n        setIsHover(false);\n    };\n    const cardStyle = {\n        transition: \"0.1s\",\n        boxShadow: \"0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 22px 44px rgb(0 0 0 / 5%)\",\n        backgroundColor: isHover ? color + \"95\" : color + \"45\",\n        color: \"black\",\n        cursor: isHover ? \"pointer\" : \"normal\",\n        transform: isHover ? \"scale(1.05)\" : \"scale(1)\",\n        border: \"0\",\n        backdropFilter: \"blur(3px)\",\n        boxShadow: \"0 10px 30px 0 rgb(0 26 97 / 10%)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n        xs: 12,\n        md: width,\n        className: \"h-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card gx-5 mx-auto my-2 px-2 py-3 gy-3 h-100 justify-content-between \" + cardClass,\n            style: cardStyle,\n            onMouseEnter: handleMouseEnter,\n            onMouseLeave: handleMouseLeave,\n            onClick: onClick,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: image,\n                    alt: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\prabhuchandargs\\\\Documents\\\\PC-DC Site\\\\pages\\\\aboutCard.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    style: {\n                        color: color\n                    },\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\prabhuchandargs\\\\Documents\\\\PC-DC Site\\\\pages\\\\aboutCard.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: subHead\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\prabhuchandargs\\\\Documents\\\\PC-DC Site\\\\pages\\\\aboutCard.js\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: item\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\prabhuchandargs\\\\Documents\\\\PC-DC Site\\\\pages\\\\aboutCard.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\prabhuchandargs\\\\Documents\\\\PC-DC Site\\\\pages\\\\aboutCard.js\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\prabhuchandargs\\\\Documents\\\\PC-DC Site\\\\pages\\\\aboutCard.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\prabhuchandargs\\\\Documents\\\\PC-DC Site\\\\pages\\\\aboutCard.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AboutCard, \"FTC8EpIspi2qaDtU9gFRhqZT02A=\");\n_c = AboutCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutCard);\nvar _c;\n$RefreshReg$(_c, \"AboutCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dENhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDTztBQUVLO0FBS3RDLE1BQU1HLFlBQVksU0FBdUU7UUFBdEUsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLFVBQVMsRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUU7O0lBRWhGLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLE1BQU1hLG1CQUFtQixJQUFNO1FBQzNCRCxXQUFXLElBQUk7SUFDbkI7SUFFQSxNQUFNRSxtQkFBbUIsSUFBTTtRQUMzQkYsV0FBVyxLQUFLO0lBQ3BCO0lBQ0EsTUFBTUcsWUFBWTtRQUNkQyxZQUFZO1FBQ1pDLFdBQVc7UUFDWEMsaUJBQWlCUCxVQUFVTCxRQUFNLE9BQU9BLFFBQU0sSUFBSTtRQUNsREEsT0FBTztRQUNQYSxRQUFRUixVQUFVLFlBQVksUUFBUTtRQUN0Q1MsV0FBV1QsVUFBVSxnQkFBZ0IsVUFBVTtRQUMvQ1UsUUFBUTtRQUNSQyxnQkFBaUI7UUFDakJMLFdBQVc7SUFDZjtJQUVBLHFCQUNBLDhEQUFDaEIsZ0RBQUdBO1FBQUNzQixJQUFJO1FBQUlDLElBQUlmO1FBQU9nQixXQUFVO2tCQUM5Qiw0RUFBQ0M7WUFBSUQsV0FBVyx5RUFBeUVqQjtZQUFXbUIsT0FBT1o7WUFBV2EsY0FBY2Y7WUFDaElnQixjQUFjZjtZQUNkSixTQUFTQTs7OEJBQ1QsOERBQUNvQjtvQkFBSUMsS0FBSzVCO29CQUFPNkIsS0FBSzVCOzs7Ozs7OEJBQ3RCLDhEQUFDNkI7b0JBQUdOLE9BQU87d0JBQUNyQixPQUFPQTtvQkFBSzs4QkFBSUY7Ozs7Ozs4QkFDNUIsOERBQUM4Qjs4QkFBRzdCOzs7Ozs7OEJBQ0osOERBQUM4Qjs4QkFDSTVCLEtBQUs2QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2IsOERBQUNDO3NDQUFnQkY7MkJBQVJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0I7R0F0Q01wQztLQUFBQTtBQXVDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dENhcmQuanM/OTI4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFib3V0Q2FyZCA9ICh7IGltYWdlLCB0aXRsZSwgc3ViSGVhZCwgY29sb3IsIGxpc3QsIGNhcmRDbGFzcywgd2lkdGgsIG9uQ2xpY2sgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0hvdmVyLCBzZXRJc0hvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzSG92ZXIodHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzSG92ZXIoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNhcmRTdHlsZSA9IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAnMC4xcycsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIjAgMCAwIDFweCByZ2IoMCAwIDAgLyA3JSksIDAgMnB4IDRweCByZ2IoMCAwIDAgLyA1JSksIDAgMjJweCA0NHB4IHJnYigwIDAgMCAvIDUlKVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNIb3ZlciA/IGNvbG9yKyc5NScgOiBjb2xvcisnNDUnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIGN1cnNvcjogaXNIb3ZlciA/ICdwb2ludGVyJyA6ICdub3JtYWwnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogaXNIb3ZlciA/ICdzY2FsZSgxLjA1KScgOiAnc2NhbGUoMSknLFxyXG4gICAgICAgIGJvcmRlcjogJzAnLFxyXG4gICAgICAgIGJhY2tkcm9wRmlsdGVyOiAgJ2JsdXIoM3B4KScsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCAxMHB4IDMwcHggMCByZ2IoMCAyNiA5NyAvIDEwJSknXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgIDxDb2wgeHM9ezEyfSBtZD17d2lkdGh9IGNsYXNzTmFtZT1cImgtMTAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjYXJkIGd4LTUgbXgtYXV0byBteS0yIHB4LTIgcHktMyBneS0zIGgtMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuICcgKyBjYXJkQ2xhc3N9IHN0eWxlPXtjYXJkU3R5bGV9IG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3tjb2xvcjogY29sb3J9fT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPHA+e3N1YkhlYWR9PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29sPilcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRDYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29sIiwiQWJvdXRDYXJkIiwiaW1hZ2UiLCJ0aXRsZSIsInN1YkhlYWQiLCJjb2xvciIsImxpc3QiLCJjYXJkQ2xhc3MiLCJ3aWR0aCIsIm9uQ2xpY2siLCJpc0hvdmVyIiwic2V0SXNIb3ZlciIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiY2FyZFN0eWxlIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsInRyYW5zZm9ybSIsImJvcmRlciIsImJhY2tkcm9wRmlsdGVyIiwieHMiLCJtZCIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJwIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/aboutCard.js\n"));

/***/ })

});