/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.css":
/*!************************!*\
  !*** ./client/App.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./client/App.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./client/App.css?");

/***/ }),

/***/ "./client/App.jsx":
/*!************************!*\
  !*** ./client/App.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./client/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      products: []\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.fetchProducts();\n    }\n  }, {\n    key: \"fetchProducts\",\n    value: function fetchProducts() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:30013/products').then(function (_ref) {\n        var data = _ref.data;\n\n        _this2.setState({\n          products: data\n        });\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick() {\n      console.log('The link was clicked.');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      // const prevArrow = <img id='prevArrow' src='https://cdn1.iconfinder.com/data/icons/mixed-17/16/icon_right_rounded-512.png' />\n      var nextArrow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        id: \"nextArrow\",\n        src: \"./images/Next.png\"\n      });\n      var settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 6,\n        slidesToScroll: 1,\n        // prevArrow,\n        nextArrow: nextArrow\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        id: \"Customers\"\n      }, \"  Customers Who Viewed This Item Bought ... \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, settings, this.state.products.map(function (product) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          id: \"description\",\n          key: product.id\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          id: \"img\",\n          src: product.img,\n          alt: \"abc\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          id: \"name\"\n        }, \" \", product.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"product-price\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"product-price-small\"\n        }, \"$\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"product-price-large\"\n        }, product.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          onClick: _this3.handleClick,\n          id: \"button\"\n        }, \" Add To Cart\")));\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n{\n  /* <h1 id='Customers'>  Customers Who Viewed This Item Bought ... </h1> */\n}\n{\n  /* {this.state.products.map(product => \n  <div id='items' key = {product.id}>\n  <h1  key={product.name}> {product.name} ${product.price} {product.description} </h1>\n  </div> */\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/App.jsx?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.jsx */ \"./client/App.jsx\");\n/* eslint-disable import/extensions */\n\n\n // eslint-disable-next-line no-undef\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('Carousel'));\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/studentFifteen/Desktop/masterRepo/ImageCarousel/node_modules/axios/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/App.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/App.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"#Carousel{\\n    margin-top: 50%;\\n    height: 20%;\\n    \\n}\\n\\n#img {\\n    max-width: 57.5%;\\n    width: 170px 170px\\n}\\n#Customers {\\n    color: #333333;\\n    text-decoration: underline ;\\n    text-decoration-color: #EB6133;\\n    font-size: 3rem;\\n    font-family: helvetica-neue-light, \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n    justify-content: center;\\n    font-weight:400;\\n   }\\n\\n   #description {\\n       font-size: 14px;\\n   }\\n\\n   #nextArrow {\\n color:#ffffff;\\n    position: relative;\\n       bottom: 155px;\\n       left: 1350px;\\n       max-width: 140%;\\n       width: 110px 110px;\\n       background-color: #ffffff;\\n       /* padding: 15px 10px; */\\n       border: .5px solid #CCCCCC;\\n       height: 100px;\\n       width: 2.5%;\\n   }\\n   #prevArrow {\\n       max-width: 100% ;\\n       width: 150px 150px;\\n   }\\n   #name {\\n       position: relative;\\n       left: 50px;\\n       font-weight: bold;\\n       font-family: helvetica-neue;\\n      \\n\\n   }\\n   #priceFormat {\\n    font-family: helvetica-neue-bold, \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n    font-size: 2.4rem;\\n    vertical-align: top;\\n    line-height: 40px;\\n    margin: 0 2px;\\n   }\\n\\n   /* #desc {\\n    position: relative;\\n    top: 20px;\\n   } */\\n\\n   .product-price-small {\\n\\tfont-size: 1.0rem;\\n    vertical-align: top;\\n    line-height: 40px;\\n    margin: 0 2px;\\n}\\n.product-price-large {\\n\\talign-self: auto;\\n    font-size: 2.5rem;\\n    bottom: 400px;\\n    left: 50px;\\n    /* vertical-align: top; */\\n    /* line-height: 40px; */\\n    /* margin: 0 2px; */\\n}\\n#button {\\n    display: inline-block;\\n    border-color: #EB6133;\\n    box-sizing: border-box;\\n    border-width: 2px;\\n    padding: 1rem 2rem;\\n    margin: 0;\\n    text-decoration: none;\\n    background: #ffffff;\\n    color: #EB6133;\\n    font-family: helvetica-neue-bold, \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n    font-size: 1.2rem;\\n    cursor: pointer;\\n    text-align: center;\\n    transition: background 250ms ease-in-out, \\n                transform 150ms ease;\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n}\\n\\n/* #botton:hover\\n{\\nbackground-image:none;\\nbackground-color:#EB6133;\\n} */\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./client/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/studentFifteen/Desktop/masterRepo/ImageCarousel/node_modules/css-loader/dist/runtime/api.js'\");\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/studentFifteen/Desktop/masterRepo/ImageCarousel/node_modules/react-dom/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-dom/index.js?");

/***/ }),

/***/ "./node_modules/react-slick/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-slick/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/studentFifteen/Desktop/masterRepo/ImageCarousel/node_modules/react-slick/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-slick/lib/index.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/studentFifteen/Desktop/masterRepo/ImageCarousel/node_modules/react/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react/index.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/studentFifteen/Desktop/masterRepo/ImageCarousel/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'\");\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });