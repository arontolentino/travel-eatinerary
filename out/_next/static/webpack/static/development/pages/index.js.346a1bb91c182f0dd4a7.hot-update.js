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
    className: "jsx-4187242510" + " " + "posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("h3", {
    className: "jsx-4187242510",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, "Budget"), __jsx("div", {
    className: "jsx-4187242510" + " " + "posts-list",
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
      className: "jsx-4187242510" + " " + "post",
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
      className: "jsx-4187242510",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-4187242510" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, node.tags.nodes[0].name), __jsx("div", {
      className: "jsx-4187242510" + " " + "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-4187242510" + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 10
      }
    }, __jsx("h2", {
      className: "jsx-4187242510",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, node.title)), __jsx("div", {
      className: "jsx-4187242510" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }
    }, __jsx("p", {
      className: "jsx-4187242510",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, node.acf.shortDescription))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4187242510",
    __self: _this
  }, ".post-list.jsx-4187242510{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post.jsx-4187242510{background-position:center;background-size:cover;border-radius:20px;-webkit-transition:0.2s all;transition:0.2s all;max-width:384px;height:475px;}.post.jsx-4187242510:hover{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}a.jsx-4187242510{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:3rem;}.tag.jsx-4187242510{text-transform:uppercase;font-size:1.2rem;font-weight:600;color:#ffd430;}.details.jsx-4187242510{margin-bottom:4rem;color:#fff;}h2.jsx-4187242510{font-size:3.6rem;margin-bottom:2rem;}p.jsx-4187242510{font-size:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvQ2F0ZWdvcnlQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0ssQUFNb0IsQUFLYyxBQVNMLEFBSVQsQUFRWSxBQU9OLEFBS0YsQUFLQSxpQkFKRSxBQUtwQixFQVZZLE1BUE0sRUFyQkssR0E2QnZCLE1BS0EsTUFaaUIsT0FyQkcsU0FzQkwsVUFyQk0sSUFzQnJCLEVBN0IrQixBQWtCUixJQUp2QixzQ0FOaUIsZ0JBQ0gsYUFDZCxPQVMrQixxQ0FsQi9CLDhFQW9CYyxhQUNkIiwiZmlsZSI6Ii9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvQ2F0ZWdvcnlQb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBDYXRlZ29yeVBvc3RzID0gKHsgcG9zdHMgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvc3RzXCI+XG5cdFx0XHQ8aDM+QnVkZ2V0PC9oMz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtbGlzdFwiPlxuXHRcdFx0XHR7cG9zdHMuZGF0YS5wb3N0cy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRrZXk9e25vZGUuc2x1Z31cblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudChyZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNCksIHJnYmEoMTAwLCAxMDAsIDEwMCwgMC40KSksIHVybCgke25vZGUuZmVhdHVyZWRJbWFnZS5tZWRpYUl0ZW1Vcmx9KWBcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9wb3N0cy8ke25vZGUuc2x1Z31gfT5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YC9wb3N0cy8ke25vZGUuc2x1Z31gfT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPntub2RlLnRhZ3Mubm9kZXNbMF0ubmFtZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyPntub2RlLnRpdGxlfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e25vZGUuYWNmLnNob3J0RGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQucG9zdHMge1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3N0LWxpc3Qge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9zdCB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IDAuMnMgYWxsO1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzODRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogNDc1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvc3Q6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAzcmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC50YWcge1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZkNDMwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5kZXRhaWxzIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDRyZW07XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMuNnJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDJyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuNnJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5UG9zdHM7XG4iXX0= */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/components/CategoryPosts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryPosts);

/***/ })

})
//# sourceMappingURL=index.js.346a1bb91c182f0dd4a7.hot-update.js.map