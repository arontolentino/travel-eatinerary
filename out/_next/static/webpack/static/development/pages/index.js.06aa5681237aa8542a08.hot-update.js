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
    className: "jsx-114270852" + " " + "featured",
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
      className: "jsx-114270852" + " " + "post",
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
      className: "jsx-114270852",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-114270852" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 8
      }
    }, node.tags.nodes[0].name), __jsx("div", {
      className: "jsx-114270852" + " " + "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-114270852" + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "jsx-114270852",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 10
      }
    }, node.title)), __jsx("div", {
      className: "jsx-114270852" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("p", {
      className: "jsx-114270852",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 10
      }
    }, node.acf.shortDescription))))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "114270852",
    __self: _this
  }, ".featured.jsx-114270852{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post.jsx-114270852{background-position:center;background-size:cover;border-radius:20px;-webkit-transition:0.2s all;transition:0.2s all;}.post.jsx-114270852:hover{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}a.jsx-114270852{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:384px;height:475px;padding:3rem;}.tag.jsx-114270852{text-transform:uppercase;font-size:1.2rem;font-weight:600;color:#ffd430;}.details.jsx-114270852{margin-bottom:4rem;color:#fff;}h2.jsx-114270852{font-size:3.6rem;margin-bottom:2rem;}p.jsx-114270852{font-size:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvQ2F0ZWdvcnlQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQkssQUFHb0IsQUFLYyxBQU9MLEFBSVQsQUFTWSxBQU9OLEFBS0YsQUFLQSxpQkFKRSxBQUtwQixFQVZZLE1BUE0sRUFwQkssR0E0QnZCLE1BS0EsTUFaaUIsT0FwQkcsU0FxQkwsVUFwQk0sSUFxQnJCLEVBNUIrQixBQWdCUixJQUp2QixzQ0FKQSxvQ0FTK0IscUNBaEIvQiw4RUFpQmlCLGdCQUNILGFBQ0EsYUFDZCIsImZpbGUiOiIvVXNlcnMvYXJvbi9Qcm9nYW1taW5nL2dpdGh1Yi90cmF2ZWwtZWF0aW5lcmFyeS9jb21wb25lbnRzL0NhdGVnb3J5UG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQ2F0ZWdvcnlQb3N0cyA9ICh7IHBvc3RzIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlZFwiPlxuXHRcdFx0e3Bvc3RzLmRhdGEucG9zdHMuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gKFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicG9zdFwiXG5cdFx0XHRcdFx0a2V5PXtub2RlLnNsdWd9XG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudChyZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNCksIHJnYmEoMTAwLCAxMDAsIDEwMCwgMC40KSksIHVybCgke25vZGUuZmVhdHVyZWRJbWFnZS5tZWRpYUl0ZW1Vcmx9KWBcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17YC9wb3N0cy8ke25vZGUuc2x1Z31gfT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9e2AvcG9zdHMvJHtub2RlLnNsdWd9YH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+e25vZGUudGFncy5ub2Rlc1swXS5uYW1lfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+e25vZGUudGl0bGV9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD57bm9kZS5hY2Yuc2hvcnREZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpKX1cblxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQuZmVhdHVyZWQge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucG9zdCB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IDAuMnMgYWxsO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wb3N0OmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMzg0cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQ3NXB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogM3JlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQudGFnIHtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZDQzMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZGV0YWlscyB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA0cmVtO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzLjZyZW07XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAycmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjZyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVBvc3RzO1xuIl19 */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/components/CategoryPosts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryPosts);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_FeaturedPosts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FeaturedPosts */ "./components/FeaturedPosts.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CategoryPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CategoryPosts */ "./components/CategoryPosts.js");


var _this = undefined,
    _jsxFileName = "/Users/aron/Progamming/github/travel-eatinerary/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Index = function Index(_ref) {
  var featured = _ref.featured;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: "Travel Eatinerary",
    description: "A Travel Blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }), __jsx("main", {
    className: "jsx-644318637",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "jsx-644318637" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_components_FeaturedPosts__WEBPACK_IMPORTED_MODULE_5__["default"], {
    posts: featured,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }), __jsx(_components_CategoryPosts__WEBPACK_IMPORTED_MODULE_7__["default"], {
    posts: featured,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "644318637",
    __self: _this
  }, "main.jsx-644318637{padding:3rem 0;}h1.jsx-644318637{color:pink;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CZSxBQUdxQixBQUlKLFdBQ1osSUFKQSIsImZpbGUiOiIvVXNlcnMvYXJvbi9Qcm9nYW1taW5nL2dpdGh1Yi90cmF2ZWwtZWF0aW5lcmFyeS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBGZWF0dXJlZFBvc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZWRQb3N0cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IENhdGVnb3J5UG9zdHMgZnJvbSAnLi4vY29tcG9uZW50cy9DYXRlZ29yeVBvc3RzJztcblxuY29uc3QgSW5kZXggPSAoeyBmZWF0dXJlZCB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdDxOZXh0U2VvIHRpdGxlPVwiVHJhdmVsIEVhdGluZXJhcnlcIiBkZXNjcmlwdGlvbj1cIkEgVHJhdmVsIEJsb2dcIiAvPlxuXHRcdFx0PG1haW4+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PEZlYXR1cmVkUG9zdHMgcG9zdHM9e2ZlYXR1cmVkfSAvPlxuXG5cdFx0XHRcdFx0PENhdGVnb3J5UG9zdHMgcG9zdHM9e2ZlYXR1cmVkfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRtYWluIHtcblx0XHRcdFx0XHRwYWRkaW5nOiAzcmVtIDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMSB7XG5cdFx0XHRcdFx0Y29sb3I6IHBpbms7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L0xheW91dD5cblx0KTtcbn07XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgZmV0Y2hDYXRlZ29yeVBvc3RzID0gKGNhdGVnb3J5LCBub09mUG9zdHMpID0+IHtcblx0XHRjb25zdCBxdWVyeSA9IGBcbiAgICAgIHF1ZXJ5IEhvbWVQYWdlUG9zdHMge1xuICAgICAgICBwb3N0cyh3aGVyZToge2NhdGVnb3J5TmFtZTogXCIke2NhdGVnb3J5fVwifSwgZmlyc3Q6ICR7bm9PZlBvc3RzfSkge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgICAgYWNmIHtcbiAgICAgICAgICAgICAgICBzaG9ydERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFncyB7XG4gICAgICAgICAgICAgICAgbm9kZXMge1xuICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRmZWF0dXJlZEltYWdlIHtcblx0XHRcdFx0XHRcdFx0XHRtZWRpYUl0ZW1Vcmxcblx0XHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG5cblx0XHRyZXR1cm4gYXhpb3Moe1xuXHRcdFx0dXJsOiAnaHR0cHM6Ly9jbXMudHJhdmVsZWF0aW5lcmFyeS5jb20vZ3JhcGhxbCcsXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0cXVlcnlcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBmZWF0dXJlZCA9IGF3YWl0IGZldGNoQ2F0ZWdvcnlQb3N0cygnZmVhdHVyZWQnLCAzKTtcblx0Y29uc3QgYnVkZ2V0ID0gYXdhaXQgZmV0Y2hDYXRlZ29yeVBvc3RzKCdidWRnZXQnLCAzKTtcblx0Y29uc3QgZXRoaWNhbCA9IGF3YWl0IGZldGNoQ2F0ZWdvcnlQb3N0cygnZXRoaWNhbCcsIDMpO1xuXHRjb25zdCBndWlkZXMgPSBhd2FpdCBmZXRjaENhdGVnb3J5UG9zdHMoJ2d1aWRlcycsIDMpO1xuXHRjb25zdCBjcmF2aW5ncyA9IGF3YWl0IGZldGNoQ2F0ZWdvcnlQb3N0cygnY3JhdmluZ3MnLCAzKTtcblxuXHRyZXR1cm4ge1xuXHRcdGZlYXR1cmVkOiBmZWF0dXJlZC5kYXRhLFxuXHRcdGJ1ZGdldDogYnVkZ2V0LmRhdGEsXG5cdFx0ZXRoaWNhbDogZXRoaWNhbC5kYXRhLFxuXHRcdGd1aWRlczogZ3VpZGVzLmRhdGEsXG5cdFx0Y3JhdmluZ3M6IGNyYXZpbmdzLmRhdGFcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/pages/index.js */"));
};

Index.getInitialProps = function _callee() {
  var fetchCategoryPosts, featured, budget, ethical, guides, cravings;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fetchCategoryPosts = function fetchCategoryPosts(category, noOfPosts) {
            var query = "\n      query HomePagePosts {\n        posts(where: {categoryName: \"".concat(category, "\"}, first: ").concat(noOfPosts, ") {\n          edges {\n            node {\n              id\n              slug\n              title\n              date\n              acf {\n                shortDescription\n              }\n              tags {\n                nodes {\n                  name\n                }\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t\t\tmediaItemUrl\n\t\t\t\t\t\t\t}\n            }\n          }\n        }\n      }\n    ");
            return axios__WEBPACK_IMPORTED_MODULE_6___default()({
              url: 'https://cms.traveleatinerary.com/graphql',
              method: 'POST',
              data: {
                query: query
              }
            });
          };

          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchCategoryPosts('featured', 3));

        case 3:
          featured = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchCategoryPosts('budget', 3));

        case 6:
          budget = _context.sent;
          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchCategoryPosts('ethical', 3));

        case 9:
          ethical = _context.sent;
          _context.next = 12;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchCategoryPosts('guides', 3));

        case 12:
          guides = _context.sent;
          _context.next = 15;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchCategoryPosts('cravings', 3));

        case 15:
          cravings = _context.sent;
          return _context.abrupt("return", {
            featured: featured.data,
            budget: budget.data,
            ethical: ethical.data,
            guides: guides.data,
            cravings: cravings.data
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.06aa5681237aa8542a08.hot-update.js.map