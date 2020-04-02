webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CategoryPosts.js":
/*!*************************************!*\
  !*** ./components/CategoryPosts.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/aron/Progamming/github/travel-eatinerary/components/CategoryPosts.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var CategoryPosts = function CategoryPosts(_ref) {
  var posts = _ref.posts,
      category = _ref.category;
  return __jsx("section", {
    className: "jsx-1922097633" + " " + "posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("h3", {
    className: "jsx-1922097633",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, category), __jsx("div", {
    className: "jsx-1922097633" + " " + "posts-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, posts.data.posts.edges.map(function (_ref2) {
    var node = _ref2.node;
    return __jsx("div", {
      key: node.slug,
      style: {
        backgroundImage: "linear-gradient(rgba(100, 100, 100, 0.4), rgba(100, 100, 100, 0.4)), url(".concat(node.featuredImage.mediaItemUrl, ")")
      },
      className: "jsx-1922097633" + " " + "post",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 6
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/posts/".concat(node.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: "/posts/".concat(node.slug),
      className: "jsx-1922097633",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-1922097633" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, node.tags.nodes[0].name), __jsx("div", {
      className: "jsx-1922097633" + " " + "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-1922097633" + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 10
      }
    }, __jsx("h2", {
      className: "jsx-1922097633",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, node.title)), __jsx("div", {
      className: "jsx-1922097633" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }
    }, __jsx("p", {
      className: "jsx-1922097633",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, node.acf.shortDescription))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1922097633",
    __self: _this
  }, "h3.jsx-1922097633{font-size:2.5rem;margin-bottom:3rem;}.posts.jsx-1922097633{padding-bottom:4rem;}.posts-list.jsx-1922097633{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post.jsx-1922097633{background-position:center;background-size:cover;border-radius:20px;-webkit-transition:0.2s all;transition:0.2s all;max-width:384px;height:384px;}.post.jsx-1922097633:hover{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}a.jsx-1922097633{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;padding:3rem;}.tag.jsx-1922097633{text-transform:uppercase;font-size:1.2rem;font-weight:600;color:#ffd430;}.details.jsx-1922097633{margin-bottom:2rem;color:#fff;}h2.jsx-1922097633{font-size:3.6rem;margin-bottom:2rem;}p.jsx-1922097633{font-size:1.6rem;}@media only screen and (max-width:425px){.posts-list.jsx-1922097633{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.post.jsx-1922097633:not(:last-child){margin-bottom:2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvQ2F0ZWdvcnlQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0ssQUFHd0IsQUFLRyxBQUlQLEFBS2MsQUFTTCxBQUlULEFBUVksQUFPTixBQUtGLEFBS0EsQUFLTSxBQUlILGlCQTVERCxBQStDQSxBQUtwQixFQVZZLEFBbUJYLENBeERELEtBOEJrQixFQXJCSyxHQTZCdkIsTUExQ0EsQUErQ0EsTUFaaUIsT0FyQkcsU0FzQkwsVUFyQk0sSUFzQnJCLEVBN0IrQixBQWtCUixJQUp2QixBQWtDQyxzQ0F4Q2dCLGdCQUNILGFBQ2QsT0FTK0IscUNBbEIvQiw4RUFtQmEsWUFDQyxhQUNkIiwiZmlsZSI6Ii9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvQ2F0ZWdvcnlQb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBDYXRlZ29yeVBvc3RzID0gKHsgcG9zdHMsIGNhdGVnb3J5IH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3N0c1wiPlxuXHRcdFx0PGgzPntjYXRlZ29yeX08L2gzPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0cy1saXN0XCI+XG5cdFx0XHRcdHtwb3N0cy5kYXRhLnBvc3RzLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IChcblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwb3N0XCJcblx0XHRcdFx0XHRcdGtleT17bm9kZS5zbHVnfVxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHJnYmEoMTAwLCAxMDAsIDEwMCwgMC40KSwgcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpKSwgdXJsKCR7bm9kZS5mZWF0dXJlZEltYWdlLm1lZGlhSXRlbVVybH0pYFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3Bvc3RzLyR7bm9kZS5zbHVnfWB9PlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgL3Bvc3RzLyR7bm9kZS5zbHVnfWB9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+e25vZGUudGFncy5ub2Rlc1swXS5uYW1lfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+e25vZGUudGl0bGV9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57bm9kZS5hY2Yuc2hvcnREZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMi41cmVtO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogM3JlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9zdHMge1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDRyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvc3RzLWxpc3Qge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9zdCB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IDAuMnMgYWxsO1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzODRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMzg0cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvc3Q6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogM3JlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQudGFnIHtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZDQzMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZGV0YWlscyB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAycmVtO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzLjZyZW07XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAycmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjZyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuXHRcdFx0XHRcdFx0LnBvc3RzLWxpc3Qge1xuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucG9zdDpub3QoOmxhc3QtY2hpbGQpIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5UG9zdHM7XG4iXX0= */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/components/CategoryPosts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryPosts);

/***/ })

})
//# sourceMappingURL=index.js.1a63372857666ffc3406.hot-update.js.map