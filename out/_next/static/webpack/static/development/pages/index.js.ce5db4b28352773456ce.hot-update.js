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
    className: "jsx-906475776" + " " + "posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("h3", {
    className: "jsx-906475776",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, category), __jsx("div", {
    className: "jsx-906475776" + " " + "posts-list",
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
      className: "jsx-906475776" + " " + "post",
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
      className: "jsx-906475776",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-906475776" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, node.tags.nodes[0].name), __jsx("div", {
      className: "jsx-906475776" + " " + "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-906475776" + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 10
      }
    }, __jsx("h2", {
      className: "jsx-906475776",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, node.title)), __jsx("div", {
      className: "jsx-906475776" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }
    }, __jsx("p", {
      className: "jsx-906475776",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, node.acf.shortDescription))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "906475776",
    __self: _this
  }, "h3.jsx-906475776{font-size:2.5rem;margin-bottom:3rem;}.posts.jsx-906475776{padding-bottom:4rem;}.posts-list.jsx-906475776{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post.jsx-906475776{background-position:center;background-size:cover;border-radius:20px;-webkit-transition:0.2s all;transition:0.2s all;max-width:384px;height:384px;}.post.jsx-906475776:hover{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}a.jsx-906475776{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;padding:3rem;}.tag.jsx-906475776{text-transform:uppercase;font-size:1.2rem;font-weight:600;color:#ffd430;}.details.jsx-906475776{margin-bottom:2rem;color:#fff;}h2.jsx-906475776{font-size:3.6rem;margin-bottom:2rem;}p.jsx-906475776{font-size:1.6rem;}@media only screen and (max-width:600px){.posts-list.jsx-906475776{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvQ2F0ZWdvcnlQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0ssQUFHd0IsQUFLRyxBQUlQLEFBS2MsQUFTTCxBQUlULEFBUVksQUFPTixBQUtGLEFBS0EsQUFLTSxpQkF4REosQUErQ0EsQUFLcEIsRUFWWSxDQXJDWixLQThCa0IsRUFyQkssR0E2QnZCLE1BMUNBLEFBK0NBLE1BWmlCLE9BckJHLFNBc0JMLFVBckJNLElBc0JyQixFQTdCK0IsQUFrQlIsSUFKdkIsQUFrQ0Msc0NBeENnQixnQkFDSCxhQUNkLE9BUytCLHFDQWxCL0IsOEVBbUJhLFlBQ0MsYUFDZCIsImZpbGUiOiIvVXNlcnMvYXJvbi9Qcm9nYW1taW5nL2dpdGh1Yi90cmF2ZWwtZWF0aW5lcmFyeS9jb21wb25lbnRzL0NhdGVnb3J5UG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQ2F0ZWdvcnlQb3N0cyA9ICh7IHBvc3RzLCBjYXRlZ29yeSB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicG9zdHNcIj5cblx0XHRcdDxoMz57Y2F0ZWdvcnl9PC9oMz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtbGlzdFwiPlxuXHRcdFx0XHR7cG9zdHMuZGF0YS5wb3N0cy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRrZXk9e25vZGUuc2x1Z31cblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudChyZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNCksIHJnYmEoMTAwLCAxMDAsIDEwMCwgMC40KSksIHVybCgke25vZGUuZmVhdHVyZWRJbWFnZS5tZWRpYUl0ZW1Vcmx9KWBcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9wb3N0cy8ke25vZGUuc2x1Z31gfT5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YC9wb3N0cy8ke25vZGUuc2x1Z31gfT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPntub2RlLnRhZ3Mubm9kZXNbMF0ubmFtZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyPntub2RlLnRpdGxlfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e25vZGUuYWNmLnNob3J0RGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIuNXJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDNyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvc3RzIHtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3N0cy1saXN0IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvc3Qge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAwLjJzIGFsbDtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMzg0cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDM4NHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3N0OmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDNyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnRhZyB7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmQ0MzA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmRldGFpbHMge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMy42cmVtO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblx0XHRcdFx0XHRcdC5wb3N0cy1saXN0IHtcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5UG9zdHM7XG4iXX0= */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/components/CategoryPosts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryPosts);

/***/ })

})
//# sourceMappingURL=index.js.ce5db4b28352773456ce.hot-update.js.map