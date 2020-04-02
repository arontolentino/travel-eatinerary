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
    className: "jsx-183321970" + " " + "featured",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, posts.data.posts.edges.map(function (_ref2) {
    var node = _ref2.node;
    return __jsx("div", {
      key: node.slug,
      style: {
        backgroundImage: "linear-gradient(rgba(100, 100, 100, 0.4), rgba(100, 100, 100, 0.4)), url(".concat(node.featuredImage.mediaItemUrl, ")")
      },
      className: "jsx-183321970" + " " + "post",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/posts/".concat(node.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 6
      }
    }, __jsx("a", {
      href: "/posts/".concat(node.slug),
      className: "jsx-183321970",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-183321970" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 8
      }
    }, node.tags.nodes[0].name), __jsx("div", {
      className: "jsx-183321970" + " " + "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-183321970" + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "jsx-183321970",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 10
      }
    }, node.title)), __jsx("div", {
      className: "jsx-183321970" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("p", {
      className: "jsx-183321970",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 10
      }
    }, node.acf.shortDescription))))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "183321970",
    __self: _this
  }, ".featured.jsx-183321970{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post.jsx-183321970{background-position:center;background-size:cover;border-radius:20px;-webkit-transition:0.2s all;transition:0.2s all;}.post.jsx-183321970:hover{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}a.jsx-183321970{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:384px;height:475px;padding:3rem;}.details.jsx-183321970{margin-bottom:4rem;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvRmVhdHVyZWRQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQkssQUFHb0IsQUFLYyxBQU9MLEFBSVQsQUFTTSxtQkFDUixRQXBCVyxHQXFCdkIsbUJBcEJvQixtQkFDQyxNQVBVLEFBZ0JSLElBSnZCLHNDQUpBLG9DQVMrQixxQ0FoQi9CLDhFQWlCaUIsZ0JBQ0gsYUFDQSxhQUNkIiwiZmlsZSI6Ii9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvRmVhdHVyZWRQb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBGZWF0dXJlZFBvc3RzID0gKHsgcG9zdHMgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVkXCI+XG5cdFx0XHR7cG9zdHMuZGF0YS5wb3N0cy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiAoXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJwb3N0XCJcblx0XHRcdFx0XHRrZXk9e25vZGUuc2x1Z31cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHJnYmEoMTAwLCAxMDAsIDEwMCwgMC40KSwgcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpKSwgdXJsKCR7bm9kZS5mZWF0dXJlZEltYWdlLm1lZGlhSXRlbVVybH0pYFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3Bvc3RzLyR7bm9kZS5zbHVnfWB9PlxuXHRcdFx0XHRcdFx0PGEgaHJlZj17YC9wb3N0cy8ke25vZGUuc2x1Z31gfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWdcIj57bm9kZS50YWdzLm5vZGVzWzBdLm5hbWV9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMj57bm9kZS50aXRsZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPntub2RlLmFjZi5zaG9ydERlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkpfVxuXG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdC5mZWF0dXJlZCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3N0IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4ycyBhbGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvc3Q6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzODRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogNDc1cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAzcmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5kZXRhaWxzIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDRyZW07XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkUG9zdHM7XG4iXX0= */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/components/FeaturedPosts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedPosts);

/***/ })

})
//# sourceMappingURL=index.js.580f0a101e40b94ed9de.hot-update.js.map