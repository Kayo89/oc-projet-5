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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/order-recap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/include/loadHeaderFooter.js":
/*!*****************************************!*\
  !*** ./src/include/loadHeaderFooter.js ***!
  \*****************************************/
/*! exports provided: loadHeaderFooter, cartCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadHeaderFooter\", function() { return loadHeaderFooter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartCount\", function() { return cartCount; });\nvar cartCount = function cartCount() {\n  if (localStorage.orderList) {\n    var number = localStorage.orderList.split(',');\n    document.getElementById('cart-number').innerText = number.length;\n  }\n};\n\nvar loadHeaderFooter = function loadHeaderFooter() {\n  $('header').load('/pages/header.html');\n  $('footer').load('/pages/footer.html');\n  setTimeout(function () {\n    cartCount();\n  }, 400);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/include/loadHeaderFooter.js?");

/***/ }),

/***/ "./src/order-recap.js":
/*!****************************!*\
  !*** ./src/order-recap.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _include_loadHeaderFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./include/loadHeaderFooter */ \"./src/include/loadHeaderFooter.js\");\n\nvar price = parseFloat(0);\nObject(_include_loadHeaderFooter__WEBPACK_IMPORTED_MODULE_0__[\"loadHeaderFooter\"])();\n\nif (localStorage.orderRecap) {\n  var content = JSON.parse(localStorage.orderRecap);\n  console.log(content);\n\n  for (var i in content.products) {\n    price += content.products[i].price;\n  }\n\n  document.getElementById('userName').innerHTML = content.contact.firstName + \",\";\n  document.getElementById('order-email').innerHTML = content.contact.email;\n  document.getElementById('order-id').innerHTML = content.orderId;\n  document.getElementById('order-userName').innerHTML = content.contact.lastName + \" \" + content.contact.firstName;\n  document.getElementById('order-address').innerHTML = content.contact.address + \", \" + content.contact.city;\n  document.getElementById('order-total-price').innerHTML = (price / 100).toFixed(2) + \"€\";\n  delete localStorage.orderList;\n} else {\n  window.location.href = 'order.html';\n}\n\n//# sourceURL=webpack:///./src/order-recap.js?");

/***/ })

/******/ });