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
    className: "jsx-2962474493" + " " + "posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("h3", {
    className: "jsx-2962474493",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, "Budget"), __jsx("div", {
    className: "jsx-2962474493" + " " + "posts-list",
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
      className: "jsx-2962474493" + " " + "post",
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
      className: "jsx-2962474493",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-2962474493" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, node.tags.nodes[0].name), __jsx("div", {
      className: "jsx-2962474493" + " " + "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2962474493" + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 10
      }
    }, __jsx("h2", {
      className: "jsx-2962474493",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, node.title)), __jsx("div", {
      className: "jsx-2962474493" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }
    }, __jsx("p", {
      className: "jsx-2962474493",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, node.acf.shortDescription))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2962474493",
    __self: _this
  }, ".post-list.jsx-2962474493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post.jsx-2962474493{background-position:center;background-size:cover;border-radius:20px;-webkit-transition:0.2s all;transition:0.2s all;}.post.jsx-2962474493:hover{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}a.jsx-2962474493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:384px;height:475px;padding:3rem;}.tag.jsx-2962474493{text-transform:uppercase;font-size:1.2rem;font-weight:600;color:#ffd430;}.details.jsx-2962474493{margin-bottom:4rem;color:#fff;}h2.jsx-2962474493{font-size:3.6rem;margin-bottom:2rem;}p.jsx-2962474493{font-size:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvQ2F0ZWdvcnlQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0ssQUFNb0IsQUFLYyxBQU9MLEFBSVQsQUFTWSxBQU9OLEFBS0YsQUFLQSxpQkFKRSxBQUtwQixFQVZZLE1BUE0sRUFwQkssR0E0QnZCLE1BS0EsTUFaaUIsT0FwQkcsU0FxQkwsVUFwQk0sSUFxQnJCLEVBNUIrQixBQWdCUixJQUp2QixzQ0FKQSxvQ0FTK0IscUNBaEIvQiw4RUFpQmlCLGdCQUNILGFBQ0EsYUFDZCIsImZpbGUiOiIvVXNlcnMvYXJvbi9Qcm9nYW1taW5nL2dpdGh1Yi90cmF2ZWwtZWF0aW5lcmFyeS9jb21wb25lbnRzL0NhdGVnb3J5UG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQ2F0ZWdvcnlQb3N0cyA9ICh7IHBvc3RzIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3N0c1wiPlxuXHRcdFx0PGgzPkJ1ZGdldDwvaDM+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLWxpc3RcIj5cblx0XHRcdFx0e3Bvc3RzLmRhdGEucG9zdHMuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gKFxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBvc3RcIlxuXHRcdFx0XHRcdFx0a2V5PXtub2RlLnNsdWd9XG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQocmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpLCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNCkpLCB1cmwoJHtub2RlLmZlYXR1cmVkSW1hZ2UubWVkaWFJdGVtVXJsfSlgXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtub2RlLnNsdWd9YH0+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2AvcG9zdHMvJHtub2RlLnNsdWd9YH0+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWdcIj57bm9kZS50YWdzLm5vZGVzWzBdLm5hbWV9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj57bm9kZS50aXRsZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntub2RlLmFjZi5zaG9ydERlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0LnBvc3RzIHtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9zdC1saXN0IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvc3Qge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAwLjJzIGFsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9zdDpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDM4NHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NzVweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDNyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnRhZyB7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmQ0MzA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmRldGFpbHMge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNHJlbTtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMy42cmVtO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlQb3N0cztcbiJdfQ== */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/components/CategoryPosts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryPosts);

/***/ })

})
//# sourceMappingURL=index.js.7f5b2dee2f6e6b5aa3ff.hot-update.js.map