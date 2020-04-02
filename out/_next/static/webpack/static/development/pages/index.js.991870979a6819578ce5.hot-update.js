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
    className: "jsx-1248390374" + " " + "featured",
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
      className: "jsx-1248390374" + " " + "post",
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
      className: "jsx-1248390374",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-1248390374" + " " + "tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 8
      }
    }, node.tags.nodes[0].name), __jsx("div", {
      className: "jsx-1248390374" + " " + "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-1248390374" + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, node.title), __jsx("div", {
      className: "jsx-1248390374" + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, node.acf.shortDescription)))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1248390374",
    __self: _this
  }, ".featured.jsx-1248390374{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}a.jsx-1248390374{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:384px;height:475px;padding:3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L2NvbXBvbmVudHMvRmVhdHVyZWRQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkssQUFHb0IsQUFLQSwwRUFKaUIsQUFLUiw4RUFDUSxxQ0FML0IsOEVBTWlCLGdCQUNILGFBQ0EsYUFDZCIsImZpbGUiOiIvVXNlcnMvYXJvbi9Qcm9nYW1taW5nL2dpdGh1Yi90cmF2ZWwtZWF0aW5lcmFyeS9jb21wb25lbnRzL0ZlYXR1cmVkUG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgRmVhdHVyZWRQb3N0cyA9ICh7IHBvc3RzIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlZFwiPlxuXHRcdFx0e3Bvc3RzLmRhdGEucG9zdHMuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gKFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicG9zdFwiXG5cdFx0XHRcdFx0a2V5PXtub2RlLnNsdWd9XG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudChyZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNCksIHJnYmEoMTAwLCAxMDAsIDEwMCwgMC40KSksIHVybCgke25vZGUuZmVhdHVyZWRJbWFnZS5tZWRpYUl0ZW1Vcmx9KWBcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17YC9wb3N0cy8ke25vZGUuc2x1Z31gfT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9e2AvcG9zdHMvJHtub2RlLnNsdWd9YH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+e25vZGUudGFncy5ub2Rlc1swXS5uYW1lfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e25vZGUudGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntub2RlLmFjZi5zaG9ydERlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0LmZlYXR1cmVkIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMzg0cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQ3NXB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogM3JlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkUG9zdHM7XG4iXX0= */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/components/FeaturedPosts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedPosts);

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


var _this = undefined,
    _jsxFileName = "/Users/aron/Progamming/github/travel-eatinerary/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Index = function Index(_ref) {
  var featured = _ref.featured;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: "Travel Eatinerary",
    description: "A Travel Blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }), __jsx("main", {
    className: "jsx-644318637",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "jsx-644318637" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_components_FeaturedPosts__WEBPACK_IMPORTED_MODULE_5__["default"], {
    posts: featured,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "644318637",
    __self: _this
  }, "main.jsx-644318637{padding:3rem 0;}h1.jsx-644318637{color:pink;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9uL1Byb2dhbW1pbmcvZ2l0aHViL3RyYXZlbC1lYXRpbmVyYXJ5L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZSxBQUdxQixBQUlKLFdBQ1osSUFKQSIsImZpbGUiOiIvVXNlcnMvYXJvbi9Qcm9nYW1taW5nL2dpdGh1Yi90cmF2ZWwtZWF0aW5lcmFyeS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBGZWF0dXJlZFBvc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZWRQb3N0cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBJbmRleCA9ICh7IGZlYXR1cmVkIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHRcdFx0PE5leHRTZW8gdGl0bGU9XCJUcmF2ZWwgRWF0aW5lcmFyeVwiIGRlc2NyaXB0aW9uPVwiQSBUcmF2ZWwgQmxvZ1wiIC8+XG5cdFx0XHQ8bWFpbj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8RmVhdHVyZWRQb3N0cyBwb3N0cz17ZmVhdHVyZWR9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdG1haW4ge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDNyZW0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRjb2xvcjogcGluaztcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvTGF5b3V0PlxuXHQpO1xufTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBmZXRjaENhdGVnb3J5UG9zdHMgPSAoY2F0ZWdvcnksIG5vT2ZQb3N0cykgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5ID0gYFxuICAgICAgcXVlcnkgSG9tZVBhZ2VQb3N0cyB7XG4gICAgICAgIHBvc3RzKHdoZXJlOiB7Y2F0ZWdvcnlOYW1lOiBcIiR7Y2F0ZWdvcnl9XCJ9LCBmaXJzdDogJHtub09mUG9zdHN9KSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgZGF0ZVxuICAgICAgICAgICAgICBhY2Yge1xuICAgICAgICAgICAgICAgIHNob3J0RGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0YWdzIHtcbiAgICAgICAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGZlYXR1cmVkSW1hZ2Uge1xuXHRcdFx0XHRcdFx0XHRcdG1lZGlhSXRlbVVybFxuXHRcdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcblxuXHRcdHJldHVybiBheGlvcyh7XG5cdFx0XHR1cmw6ICdodHRwczovL2Ntcy50cmF2ZWxlYXRpbmVyYXJ5LmNvbS9ncmFwaHFsJyxcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRxdWVyeVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGZlYXR1cmVkID0gYXdhaXQgZmV0Y2hDYXRlZ29yeVBvc3RzKCdmZWF0dXJlZCcsIDMpO1xuXHRjb25zdCBidWRnZXQgPSBhd2FpdCBmZXRjaENhdGVnb3J5UG9zdHMoJ2J1ZGdldCcsIDMpO1xuXHRjb25zdCBldGhpY2FsID0gYXdhaXQgZmV0Y2hDYXRlZ29yeVBvc3RzKCdldGhpY2FsJywgMyk7XG5cdGNvbnN0IGd1aWRlcyA9IGF3YWl0IGZldGNoQ2F0ZWdvcnlQb3N0cygnZ3VpZGVzJywgMyk7XG5cdGNvbnN0IGNyYXZpbmdzID0gYXdhaXQgZmV0Y2hDYXRlZ29yeVBvc3RzKCdjcmF2aW5ncycsIDMpO1xuXG5cdHJldHVybiB7XG5cdFx0ZmVhdHVyZWQ6IGZlYXR1cmVkLmRhdGEsXG5cdFx0YnVkZ2V0OiBidWRnZXQuZGF0YSxcblx0XHRldGhpY2FsOiBldGhpY2FsLmRhdGEsXG5cdFx0Z3VpZGVzOiBndWlkZXMuZGF0YSxcblx0XHRjcmF2aW5nczogY3JhdmluZ3MuZGF0YVxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/aron/Progamming/github/travel-eatinerary/pages/index.js */"));
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
//# sourceMappingURL=index.js.991870979a6819578ce5.hot-update.js.map