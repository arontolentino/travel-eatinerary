webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FeaturedPosts.js":
/*!*************************************!*\
  !*** ./components/FeaturedPosts.js ***!
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
    _jsxFileName = "/Users/aron/Progamming/github/travel-eatinerary/components/FeaturedPosts.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var FeaturedPosts = function FeaturedPosts(_ref) {
  var posts = _ref.posts;
  return __jsx("section", {
    className: "jsx-3273620684" + " " + "posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "jsx-3273620684" + " " + "posts-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, posts.data.posts.edges.map(function (_ref2) {
    var node = _ref2.node;
    return __jsx("div", {
      key: node.slug,
      style: {
        backgroundImage: "linear-gradient(rgba(100, 100, 100, 0.4), rgba(100, 100, 100, 0.4)), url(".concat(node.featuredImage.mediaItemUrl, ")")
      },
      className: "jsx-3273620684" + " " + "post",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 6
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/posts/".concat(node.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: "/posts/".concat(node.slug),
      className: "jsx-3273620684",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-3273620684" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, node.tags.nodes[0].name), __jsx("div", {
      className: "jsx-3273620684" + " " + "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-3273620684" + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 10
      }
    }, __jsx("h2", {
      className: "jsx-3273620684",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, node.title)), __jsx("div", {
      className: "jsx-3273620684" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 10
      }
    }, __jsx("p", {
      className: "jsx-3273620684",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, node.acf.shortDescription))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3273620684",
    __self: _this
  }, ".posts.jsx-3273620684{padding:5rem 0;}.posts-list.jsx-3273620684{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post.jsx-3273620684{background-position:center;background-size:cover;border-radius:20px;-webkit-transition:0.2s all;transition:0.2s all;max-width:384px;height:475px;}.post.jsx-3273620684:hover{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}a.jsx-3273620684{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;padding:3rem;}.tag.jsx-3273620684{text-transform:uppercase;font-size:1.2rem;font-weight:600;color:#ffd430;}.details.jsx-3273620684{margin-bottom:4rem;color:#fff;}h2.jsx-3273620684{font-size:3.6rem;margin-bottom:2rem;}p.jsx-3273620684{font-size:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvRmVhdHVyZWRQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ0ssQUFHc0IsQUFJRixBQUtjLEFBU0wsQUFJVCxBQVFZLEFBT04sQUFLRixBQUtBLGVBOUNsQixFQTBDb0IsQUFLcEIsRUFWWSxNQVBNLEVBckJLLEdBNkJ2QixNQUtBLE1BWmlCLE9BckJHLFNBc0JMLFVBckJNLElBc0JyQixFQTdCK0IsQUFrQlIsSUFKdkIsc0NBTmlCLGdCQUNILGFBQ2QsT0FTK0IscUNBbEIvQiw4RUFtQmEsWUFDQyxhQUNkIiwiZmlsZSI6Ii9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvRmVhdHVyZWRQb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBGZWF0dXJlZFBvc3RzID0gKHsgcG9zdHMgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvc3RzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLWxpc3RcIj5cblx0XHRcdFx0e3Bvc3RzLmRhdGEucG9zdHMuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gKFxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBvc3RcIlxuXHRcdFx0XHRcdFx0a2V5PXtub2RlLnNsdWd9XG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQocmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpLCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNCkpLCB1cmwoJHtub2RlLmZlYXR1cmVkSW1hZ2UubWVkaWFJdGVtVXJsfSlgXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtub2RlLnNsdWd9YH0+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2AvcG9zdHMvJHtub2RlLnNsdWd9YH0+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWdcIj57bm9kZS50YWdzLm5vZGVzWzBdLm5hbWV9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj57bm9kZS50aXRsZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntub2RlLmFjZi5zaG9ydERlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0LnBvc3RzIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDVyZW0gMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9zdHMtbGlzdCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3N0IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4ycyBhbGw7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDM4NHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NzVweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9zdDpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAzcmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC50YWcge1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZkNDMwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5kZXRhaWxzIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDRyZW07XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMuNnJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDJyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuNnJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkUG9zdHM7XG4iXX0= */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/components/FeaturedPosts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedPosts);

/***/ })

})
//# sourceMappingURL=index.js.ad1f8e6b4eeadb8d9d93.hot-update.js.map