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
  var posts = _ref.posts;
  return __jsx("section", {
    className: "jsx-3532254197" + " " + "posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("h3", {
    className: "jsx-3532254197",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, "Budget"), __jsx("div", {
    className: "jsx-3532254197" + " " + "posts-list",
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
      className: "jsx-3532254197" + " " + "post",
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
      className: "jsx-3532254197",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-3532254197" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, node.tags.nodes[0].name), __jsx("div", {
      className: "jsx-3532254197" + " " + "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-3532254197" + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 10
      }
    }, __jsx("h2", {
      className: "jsx-3532254197",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, node.title)), __jsx("div", {
      className: "jsx-3532254197" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }
    }, __jsx("p", {
      className: "jsx-3532254197",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, node.acf.shortDescription))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3532254197",
    __self: _this
  }, ".post-list.jsx-3532254197{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post.jsx-3532254197{background-position:center;background-size:cover;border-radius:20px;-webkit-transition:0.2s all;transition:0.2s all;max-width:384px;height:475px;}.post.jsx-3532254197:hover{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}a.jsx-3532254197{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;padding:3rem;}.tag.jsx-3532254197{text-transform:uppercase;font-size:1.2rem;font-weight:600;color:#ffd430;}.details.jsx-3532254197{margin-bottom:4rem;color:#fff;}h2.jsx-3532254197{font-size:3.6rem;margin-bottom:2rem;}p.jsx-3532254197{font-size:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvQ2F0ZWdvcnlQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0ssQUFNb0IsQUFLYyxBQVNMLEFBSVQsQUFRWSxBQU9OLEFBS0YsQUFLQSxpQkFKRSxBQUtwQixFQVZZLE1BUE0sRUFyQkssR0E2QnZCLE1BS0EsTUFaaUIsT0FyQkcsU0FzQkwsVUFyQk0sSUFzQnJCLEVBN0IrQixBQWtCUixJQUp2QixzQ0FOaUIsZ0JBQ0gsYUFDZCxPQVMrQixxQ0FsQi9CLDhFQW1CYSxZQUNDLGFBQ2QiLCJmaWxlIjoiL1VzZXJzL2Fyb24vUHJvZ2FtbWluZy9naXRodWIvdHJhdmVsLWVhdGluZXJhcnkvY29tcG9uZW50cy9DYXRlZ29yeVBvc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IENhdGVnb3J5UG9zdHMgPSAoeyBwb3N0cyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicG9zdHNcIj5cblx0XHRcdDxoMz5CdWRnZXQ8L2gzPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0cy1saXN0XCI+XG5cdFx0XHRcdHtwb3N0cy5kYXRhLnBvc3RzLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IChcblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwb3N0XCJcblx0XHRcdFx0XHRcdGtleT17bm9kZS5zbHVnfVxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHJnYmEoMTAwLCAxMDAsIDEwMCwgMC40KSwgcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpKSwgdXJsKCR7bm9kZS5mZWF0dXJlZEltYWdlLm1lZGlhSXRlbVVybH0pYFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3Bvc3RzLyR7bm9kZS5zbHVnfWB9PlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgL3Bvc3RzLyR7bm9kZS5zbHVnfWB9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+e25vZGUudGFncy5ub2Rlc1swXS5uYW1lfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+e25vZGUudGl0bGV9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57bm9kZS5hY2Yuc2hvcnREZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdC5wb3N0cyB7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvc3QtbGlzdCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3N0IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4ycyBhbGw7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDM4NHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NzVweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9zdDpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAzcmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC50YWcge1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZkNDMwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5kZXRhaWxzIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDRyZW07XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMuNnJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDJyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuNnJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5UG9zdHM7XG4iXX0= */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/components/CategoryPosts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryPosts);

/***/ })

})
//# sourceMappingURL=index.js.49858effca542a24aacf.hot-update.js.map