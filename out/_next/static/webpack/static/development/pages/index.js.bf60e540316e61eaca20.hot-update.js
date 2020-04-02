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
    className: "jsx-1938752881" + " " + "featured",
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
      className: "jsx-1938752881" + " " + "post",
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
      className: "jsx-1938752881",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-1938752881" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 8
      }
    }, node.tags.nodes[0].name), __jsx("div", {
      className: "jsx-1938752881" + " " + "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-1938752881" + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, node.title), __jsx("div", {
      className: "jsx-1938752881" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, node.acf.shortDescription)))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1938752881",
    __self: _this
  }, ".featured.jsx-1938752881{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post.jsx-1938752881{background-position:center;background-size:cover;border-radius:20px;-webkit-transition:0.2s all;transition:0.2s all;}.post.jsx-1938752881:hover{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}a.jsx-1938752881{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:384px;height:475px;padding:3rem;}.details.jsx-1938752881{margin-bottom:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvRmVhdHVyZWRQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkssQUFHb0IsQUFLYyxBQU9MLEFBSVQsQUFTTSxtQkFDcEIsUUFwQnVCLHNCQUNILG1CQUNDLE1BUFUsQUFnQlIsSUFKdkIsc0NBSkEsb0NBUytCLHFDQWhCL0IsOEVBaUJpQixnQkFDSCxhQUNBLGFBQ2QiLCJmaWxlIjoiL1VzZXJzL2Fyb24vUHJvZ2FtbWluZy9naXRodWIvdHJhdmVsLWVhdGluZXJhcnkvY29tcG9uZW50cy9GZWF0dXJlZFBvc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEZlYXR1cmVkUG9zdHMgPSAoeyBwb3N0cyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZWRcIj5cblx0XHRcdHtwb3N0cy5kYXRhLnBvc3RzLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInBvc3RcIlxuXHRcdFx0XHRcdGtleT17bm9kZS5zbHVnfVxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQocmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpLCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNCkpLCB1cmwoJHtub2RlLmZlYXR1cmVkSW1hZ2UubWVkaWFJdGVtVXJsfSlgXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtub2RlLnNsdWd9YH0+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtgL3Bvc3RzLyR7bm9kZS5zbHVnfWB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPntub2RlLnRhZ3Mubm9kZXNbMF0ubmFtZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntub2RlLnRpdGxlfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57bm9kZS5hY2Yuc2hvcnREZXNjcmlwdGlvbn08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkpfVxuXG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdC5mZWF0dXJlZCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3N0IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4ycyBhbGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBvc3Q6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzODRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogNDc1cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAzcmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5kZXRhaWxzIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDRyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZFBvc3RzO1xuIl19 */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/components/FeaturedPosts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedPosts);

/***/ })

})
//# sourceMappingURL=index.js.bf60e540316e61eaca20.hot-update.js.map