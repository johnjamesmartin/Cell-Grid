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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid/constructor */ \"./src/js/grid/constructor.js\");\n/* harmony import */ var _grid_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/config */ \"./src/js/grid/config.js\");\n/* Dependencies:\n ************************************************************/\n\n\n\n/* Construct the grid:\n ************************************************************/\nObject(_grid_constructor__WEBPACK_IMPORTED_MODULE_0__[\"ConstructGrid\"])(_grid_config__WEBPACK_IMPORTED_MODULE_1__[\"grid\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIERlcGVuZGVuY2llczpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgeyBDb25zdHJ1Y3RHcmlkIH0gZnJvbSAnLi9ncmlkL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGdyaWQgfSBmcm9tICcuL2dyaWQvY29uZmlnJztcblxuLyogQ29uc3RydWN0IHRoZSBncmlkOlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkNvbnN0cnVjdEdyaWQoZ3JpZCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: gridConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gridConfig\", function() { return gridConfig; });\n/* :\n ************************************************************/\nconst gridConfig = {\n  size: 12, // this number is squared to make up number of cells\n  scale: 0.8, // 0 - 1\n  width: 750,\n  border: {\n    color: '#000',\n    cellBorder: '#CCC',\n    style: 'solid',\n    width: 5,\n    rounded: true\n  }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy5qcz8xNGFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIDpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBncmlkQ29uZmlnID0ge1xuICBzaXplOiAxMiwgLy8gdGhpcyBudW1iZXIgaXMgc3F1YXJlZCB0byBtYWtlIHVwIG51bWJlciBvZiBjZWxsc1xuICBzY2FsZTogMC44LCAvLyAwIC0gMVxuICB3aWR0aDogNzUwLFxuICBib3JkZXI6IHtcbiAgICBjb2xvcjogJyMwMDAnLFxuICAgIGNlbGxCb3JkZXI6ICcjQ0NDJyxcbiAgICBzdHlsZTogJ3NvbGlkJyxcbiAgICB3aWR0aDogNSxcbiAgICByb3VuZGVkOiB0cnVlXG4gIH1cbn07XG5cbmV4cG9ydCB7IGdyaWRDb25maWcgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/config.js\n");

/***/ }),

/***/ "./src/js/element/constructor.js":
/*!***************************************!*\
  !*** ./src/js/element/constructor.js ***!
  \***************************************/
/*! exports provided: ConstructElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConstructElement\", function() { return ConstructElement; });\n/* ConstructElement is a constructor for creating an HTML\n   element. We pass it an object which is handled like so:\n ************************************************************/\nconst ConstructElement = o => {\n  let elementTag = document.createElement(o.element);\n\n  // Id of element we will append this newly constructed element to\n  let appendToIdElement = document.getElementById(o.appendToId);\n\n  // No element tag or id of element to append it to is passed? Error!\n  if (!elementTag || !appendToIdElement) {\n    const error =\n      'No element tag and/or id of DOM element to append it to was provided';\n    console.error(error);\n    alert(error);\n  }\n\n  // Element properties, such as id, width, height, border, classes, etc.\n  if (o.id) elementTag.id = o.id;\n  if (o.height) elementTag.style.height = o.height;\n  if (o.width) elementTag.style.width = o.width;\n  if (o.border) elementTag.style.border = o.border;\n  if (o.classes)\n    for (let i = 0; i < o.classes.length; i++) {\n      elementTag.classList.add(o.classes[i]);\n    }\n\n  if (o.innerHTML) elementTag.innerHTML = o.innerHTML;\n\n  // Finally, append newly constructed element to specified DOM element:\n  appendToIdElement.appendChild(elementTag);\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZWxlbWVudC9jb25zdHJ1Y3Rvci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzP2FkZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogQ29uc3RydWN0RWxlbWVudCBpcyBhIGNvbnN0cnVjdG9yIGZvciBjcmVhdGluZyBhbiBIVE1MXG4gICBlbGVtZW50LiBXZSBwYXNzIGl0IGFuIG9iamVjdCB3aGljaCBpcyBoYW5kbGVkIGxpa2Ugc286XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgQ29uc3RydWN0RWxlbWVudCA9IG8gPT4ge1xuICBsZXQgZWxlbWVudFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoby5lbGVtZW50KTtcblxuICAvLyBJZCBvZiBlbGVtZW50IHdlIHdpbGwgYXBwZW5kIHRoaXMgbmV3bHkgY29uc3RydWN0ZWQgZWxlbWVudCB0b1xuICBsZXQgYXBwZW5kVG9JZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvLmFwcGVuZFRvSWQpO1xuXG4gIC8vIE5vIGVsZW1lbnQgdGFnIG9yIGlkIG9mIGVsZW1lbnQgdG8gYXBwZW5kIGl0IHRvIGlzIHBhc3NlZD8gRXJyb3IhXG4gIGlmICghZWxlbWVudFRhZyB8fCAhYXBwZW5kVG9JZEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvciA9XG4gICAgICAnTm8gZWxlbWVudCB0YWcgYW5kL29yIGlkIG9mIERPTSBlbGVtZW50IHRvIGFwcGVuZCBpdCB0byB3YXMgcHJvdmlkZWQnO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIGFsZXJ0KGVycm9yKTtcbiAgfVxuXG4gIC8vIEVsZW1lbnQgcHJvcGVydGllcywgc3VjaCBhcyBpZCwgd2lkdGgsIGhlaWdodCwgYm9yZGVyLCBjbGFzc2VzLCBldGMuXG4gIGlmIChvLmlkKSBlbGVtZW50VGFnLmlkID0gby5pZDtcbiAgaWYgKG8uaGVpZ2h0KSBlbGVtZW50VGFnLnN0eWxlLmhlaWdodCA9IG8uaGVpZ2h0O1xuICBpZiAoby53aWR0aCkgZWxlbWVudFRhZy5zdHlsZS53aWR0aCA9IG8ud2lkdGg7XG4gIGlmIChvLmJvcmRlcikgZWxlbWVudFRhZy5zdHlsZS5ib3JkZXIgPSBvLmJvcmRlcjtcbiAgaWYgKG8uY2xhc3NlcylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZWxlbWVudFRhZy5jbGFzc0xpc3QuYWRkKG8uY2xhc3Nlc1tpXSk7XG4gICAgfVxuXG4gIGlmIChvLmlubmVySFRNTCkgZWxlbWVudFRhZy5pbm5lckhUTUwgPSBvLmlubmVySFRNTDtcblxuICAvLyBGaW5hbGx5LCBhcHBlbmQgbmV3bHkgY29uc3RydWN0ZWQgZWxlbWVudCB0byBzcGVjaWZpZWQgRE9NIGVsZW1lbnQ6XG4gIGFwcGVuZFRvSWRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRUYWcpO1xufTtcblxuZXhwb3J0IHsgQ29uc3RydWN0RWxlbWVudCB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/element/constructor.js\n");

/***/ }),

/***/ "./src/js/grid/config.js":
/*!*******************************!*\
  !*** ./src/js/grid/config.js ***!
  \*******************************/
/*! exports provided: grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grid\", function() { return grid; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\n/* Dependencies:\n ************************************************************/\n\n\n/* :\n ************************************************************/\nconst grid = {\n  // DOM element we will append grid to:\n  container: {\n    id: 'div-container',\n    border: {\n      color: _config__WEBPACK_IMPORTED_MODULE_0__[\"gridConfig\"].border.color,\n      style: _config__WEBPACK_IMPORTED_MODULE_0__[\"gridConfig\"].border.style,\n      width: _config__WEBPACK_IMPORTED_MODULE_0__[\"gridConfig\"].border.width,\n      rounded: _config__WEBPACK_IMPORTED_MODULE_0__[\"gridConfig\"].border.rounded,\n      radius: 10\n    },\n    scale: _config__WEBPACK_IMPORTED_MODULE_0__[\"gridConfig\"].scale,\n    width: _config__WEBPACK_IMPORTED_MODULE_0__[\"gridConfig\"].width\n  },\n\n  // The cells inside the grid\n  cell: {\n    idPrefix: 'div-cell',\n    border: {\n      color: _config__WEBPACK_IMPORTED_MODULE_0__[\"gridConfig\"].border.cellBorder,\n      style: _config__WEBPACK_IMPORTED_MODULE_0__[\"gridConfig\"].border.style,\n      width: _config__WEBPACK_IMPORTED_MODULE_0__[\"gridConfig\"].border.width / 2 / 2\n    },\n    elementTag: 'div',\n    classes: ['cell']\n  },\n\n  // Futher properties across all cells\n  cells: {\n    showLabels: true,\n    squareNumberIndex: _config__WEBPACK_IMPORTED_MODULE_0__[\"gridConfig\"].size\n  }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZ3JpZC9jb25maWcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZ3JpZC9jb25maWcuanM/NDNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEZXBlbmRlbmNpZXM6XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IHsgZ3JpZENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbi8qIDpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBncmlkID0ge1xuICAvLyBET00gZWxlbWVudCB3ZSB3aWxsIGFwcGVuZCBncmlkIHRvOlxuICBjb250YWluZXI6IHtcbiAgICBpZDogJ2Rpdi1jb250YWluZXInLFxuICAgIGJvcmRlcjoge1xuICAgICAgY29sb3I6IGdyaWRDb25maWcuYm9yZGVyLmNvbG9yLFxuICAgICAgc3R5bGU6IGdyaWRDb25maWcuYm9yZGVyLnN0eWxlLFxuICAgICAgd2lkdGg6IGdyaWRDb25maWcuYm9yZGVyLndpZHRoLFxuICAgICAgcm91bmRlZDogZ3JpZENvbmZpZy5ib3JkZXIucm91bmRlZCxcbiAgICAgIHJhZGl1czogMTBcbiAgICB9LFxuICAgIHNjYWxlOiBncmlkQ29uZmlnLnNjYWxlLFxuICAgIHdpZHRoOiBncmlkQ29uZmlnLndpZHRoXG4gIH0sXG5cbiAgLy8gVGhlIGNlbGxzIGluc2lkZSB0aGUgZ3JpZFxuICBjZWxsOiB7XG4gICAgaWRQcmVmaXg6ICdkaXYtY2VsbCcsXG4gICAgYm9yZGVyOiB7XG4gICAgICBjb2xvcjogZ3JpZENvbmZpZy5ib3JkZXIuY2VsbEJvcmRlcixcbiAgICAgIHN0eWxlOiBncmlkQ29uZmlnLmJvcmRlci5zdHlsZSxcbiAgICAgIHdpZHRoOiBncmlkQ29uZmlnLmJvcmRlci53aWR0aCAvIDIgLyAyXG4gICAgfSxcbiAgICBlbGVtZW50VGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ2NlbGwnXVxuICB9LFxuXG4gIC8vIEZ1dGhlciBwcm9wZXJ0aWVzIGFjcm9zcyBhbGwgY2VsbHNcbiAgY2VsbHM6IHtcbiAgICBzaG93TGFiZWxzOiB0cnVlLFxuICAgIHNxdWFyZU51bWJlckluZGV4OiBncmlkQ29uZmlnLnNpemVcbiAgfVxufTtcblxuZXhwb3J0IHsgZ3JpZCB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/grid/config.js\n");

/***/ }),

/***/ "./src/js/grid/constructor.js":
/*!************************************!*\
  !*** ./src/js/grid/constructor.js ***!
  \************************************/
/*! exports provided: ConstructGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConstructGrid\", function() { return ConstructGrid; });\n/* harmony import */ var _element_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element/constructor */ \"./src/js/element/constructor.js\");\n/* harmony import */ var _square_numbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square-numbers */ \"./src/js/grid/square-numbers.js\");\n/* harmony import */ var _round_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round-border */ \"./src/js/grid/round-border.js\");\n/* Dependencies:\n ************************************************************/\n\n\n\n\n/* Construct the grid:\n ************************************************************/\nconst ConstructGrid = o => {\n  const container = document.getElementById(o.container.id);\n  container.style.border = `${o.container.border.width}px ${\n    o.container.border.style\n  } ${o.container.border.color}`;\n  container.style.height = `${o.container.width}px`;\n  container.style.width = `${o.container.width}px`;\n  container.style.transform = `scale(${o.container.scale})`;\n\n  // Container width (accounting for border)\n  const containerWidth = container.offsetWidth - o.container.border.width * 2;\n\n  // Square index (index of square number array)\n  const sqIndex = o.cells.squareNumberIndex;\n\n  // Construct grid cells:\n  for (let i = 0; i < _square_numbers__WEBPACK_IMPORTED_MODULE_1__[\"squareNumbers\"][sqIndex]; i++) {\n    Object(_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"ConstructElement\"])({\n      element: o.cell.elementTag,\n      appendToId: o.container.id,\n      id: `${o.cell.idPrefix}-${i + 1}`,\n      classes: o.cell.classes,\n      height: `${containerWidth / Math.sqrt(_square_numbers__WEBPACK_IMPORTED_MODULE_1__[\"squareNumbers\"][sqIndex])}px`,\n      width: `${containerWidth / Math.sqrt(_square_numbers__WEBPACK_IMPORTED_MODULE_1__[\"squareNumbers\"][sqIndex])}px`,\n      border: `${o.cell.border.width}px ${o.cell.border.style} ${\n        o.cell.border.color\n      }`,\n      innerHTML: o.cells.showLabels ? i + 1 : ''\n    });\n  }\n\n  // If border rounding is turned on, implement this:\n  if (o.container.border.rounded) {\n    container.style.borderRadius = `${o.container.border.radius}px`;\n    Object(_round_border__WEBPACK_IMPORTED_MODULE_2__[\"roundBorder\"])({\n      corners: [\n        sqIndex / sqIndex,\n        sqIndex,\n        sqIndex * sqIndex - sqIndex + 1,\n        sqIndex * sqIndex\n      ],\n      containerRadius: o.container.border.radius,\n      cell: {\n        idPrefix: o.cell.idPrefix\n      }\n    });\n  }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZ3JpZC9jb25zdHJ1Y3Rvci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9ncmlkL2NvbnN0cnVjdG9yLmpzP2E5N2UiXSwic291cmNlc0NvbnRlbnQiOlsiLyogRGVwZW5kZW5jaWVzOlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCB7IENvbnN0cnVjdEVsZW1lbnQgfSBmcm9tICcuLi9lbGVtZW50L2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHNxdWFyZU51bWJlcnMgfSBmcm9tICcuL3NxdWFyZS1udW1iZXJzJztcbmltcG9ydCB7IHJvdW5kQm9yZGVyIH0gZnJvbSAnLi9yb3VuZC1ib3JkZXInO1xuXG4vKiBDb25zdHJ1Y3QgdGhlIGdyaWQ6XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgQ29uc3RydWN0R3JpZCA9IG8gPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvLmNvbnRhaW5lci5pZCk7XG4gIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBgJHtvLmNvbnRhaW5lci5ib3JkZXIud2lkdGh9cHggJHtcbiAgICBvLmNvbnRhaW5lci5ib3JkZXIuc3R5bGVcbiAgfSAke28uY29udGFpbmVyLmJvcmRlci5jb2xvcn1gO1xuICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7by5jb250YWluZXIud2lkdGh9cHhgO1xuICBjb250YWluZXIuc3R5bGUud2lkdGggPSBgJHtvLmNvbnRhaW5lci53aWR0aH1weGA7XG4gIGNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtvLmNvbnRhaW5lci5zY2FsZX0pYDtcblxuICAvLyBDb250YWluZXIgd2lkdGggKGFjY291bnRpbmcgZm9yIGJvcmRlcilcbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIub2Zmc2V0V2lkdGggLSBvLmNvbnRhaW5lci5ib3JkZXIud2lkdGggKiAyO1xuXG4gIC8vIFNxdWFyZSBpbmRleCAoaW5kZXggb2Ygc3F1YXJlIG51bWJlciBhcnJheSlcbiAgY29uc3Qgc3FJbmRleCA9IG8uY2VsbHMuc3F1YXJlTnVtYmVySW5kZXg7XG5cbiAgLy8gQ29uc3RydWN0IGdyaWQgY2VsbHM6XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlTnVtYmVyc1tzcUluZGV4XTsgaSsrKSB7XG4gICAgQ29uc3RydWN0RWxlbWVudCh7XG4gICAgICBlbGVtZW50OiBvLmNlbGwuZWxlbWVudFRhZyxcbiAgICAgIGFwcGVuZFRvSWQ6IG8uY29udGFpbmVyLmlkLFxuICAgICAgaWQ6IGAke28uY2VsbC5pZFByZWZpeH0tJHtpICsgMX1gLFxuICAgICAgY2xhc3Nlczogby5jZWxsLmNsYXNzZXMsXG4gICAgICBoZWlnaHQ6IGAke2NvbnRhaW5lcldpZHRoIC8gTWF0aC5zcXJ0KHNxdWFyZU51bWJlcnNbc3FJbmRleF0pfXB4YCxcbiAgICAgIHdpZHRoOiBgJHtjb250YWluZXJXaWR0aCAvIE1hdGguc3FydChzcXVhcmVOdW1iZXJzW3NxSW5kZXhdKX1weGAsXG4gICAgICBib3JkZXI6IGAke28uY2VsbC5ib3JkZXIud2lkdGh9cHggJHtvLmNlbGwuYm9yZGVyLnN0eWxlfSAke1xuICAgICAgICBvLmNlbGwuYm9yZGVyLmNvbG9yXG4gICAgICB9YCxcbiAgICAgIGlubmVySFRNTDogby5jZWxscy5zaG93TGFiZWxzID8gaSArIDEgOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgLy8gSWYgYm9yZGVyIHJvdW5kaW5nIGlzIHR1cm5lZCBvbiwgaW1wbGVtZW50IHRoaXM6XG4gIGlmIChvLmNvbnRhaW5lci5ib3JkZXIucm91bmRlZCkge1xuICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtvLmNvbnRhaW5lci5ib3JkZXIucmFkaXVzfXB4YDtcbiAgICByb3VuZEJvcmRlcih7XG4gICAgICBjb3JuZXJzOiBbXG4gICAgICAgIHNxSW5kZXggLyBzcUluZGV4LFxuICAgICAgICBzcUluZGV4LFxuICAgICAgICBzcUluZGV4ICogc3FJbmRleCAtIHNxSW5kZXggKyAxLFxuICAgICAgICBzcUluZGV4ICogc3FJbmRleFxuICAgICAgXSxcbiAgICAgIGNvbnRhaW5lclJhZGl1czogby5jb250YWluZXIuYm9yZGVyLnJhZGl1cyxcbiAgICAgIGNlbGw6IHtcbiAgICAgICAgaWRQcmVmaXg6IG8uY2VsbC5pZFByZWZpeFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBDb25zdHJ1Y3RHcmlkIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/grid/constructor.js\n");

/***/ }),

/***/ "./src/js/grid/round-border.js":
/*!*************************************!*\
  !*** ./src/js/grid/round-border.js ***!
  \*************************************/
/*! exports provided: roundBorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"roundBorder\", function() { return roundBorder; });\n/* Round the border of the grid's corner cells:\n ************************************************************/\nconst roundBorder = o => {\n  for (let i = 0; i < o.corners.length; i++) {\n    let borderRadius,\n      radius = Math.sqrt(o.containerRadius) * 1.5;\n    if (i === 0) {\n      borderRadius = `${radius}px 0 0 0`;\n    } else if (i === 1) {\n      borderRadius = `0 ${radius}px 0 0`;\n    } else if (i === 2) {\n      borderRadius = `0 0 0 ${radius}px`;\n    } else if (i === 3) {\n      borderRadius = `0 0 ${radius}px 0`;\n    }\n    document.getElementById(\n      `${o.cell.idPrefix}-${o.corners[i]}`\n    ).style.borderRadius = borderRadius;\n  }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZ3JpZC9yb3VuZC1ib3JkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZ3JpZC9yb3VuZC1ib3JkZXIuanM/MTRkYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSb3VuZCB0aGUgYm9yZGVyIG9mIHRoZSBncmlkJ3MgY29ybmVyIGNlbGxzOlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IHJvdW5kQm9yZGVyID0gbyA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgby5jb3JuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGJvcmRlclJhZGl1cyxcbiAgICAgIHJhZGl1cyA9IE1hdGguc3FydChvLmNvbnRhaW5lclJhZGl1cykgKiAxLjU7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGJvcmRlclJhZGl1cyA9IGAke3JhZGl1c31weCAwIDAgMGA7XG4gICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICBib3JkZXJSYWRpdXMgPSBgMCAke3JhZGl1c31weCAwIDBgO1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xuICAgICAgYm9yZGVyUmFkaXVzID0gYDAgMCAwICR7cmFkaXVzfXB4YDtcbiAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcbiAgICAgIGJvcmRlclJhZGl1cyA9IGAwIDAgJHtyYWRpdXN9cHggMGA7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgYCR7by5jZWxsLmlkUHJlZml4fS0ke28uY29ybmVyc1tpXX1gXG4gICAgKS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBib3JkZXJSYWRpdXM7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHJvdW5kQm9yZGVyIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/grid/round-border.js\n");

/***/ }),

/***/ "./src/js/grid/square-numbers.js":
/*!***************************************!*\
  !*** ./src/js/grid/square-numbers.js ***!
  \***************************************/
/*! exports provided: squareNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"squareNumbers\", function() { return squareNumbers; });\n/* Square numbers up to 59^2:\n ************************************************************/\nconst squareNumbers = [\n  0,\n  1,\n  4,\n  9,\n  16,\n  25,\n  36,\n  49,\n  64,\n  81,\n  100,\n  121,\n  144,\n  169,\n  196,\n  225,\n  256,\n  289,\n  324,\n  361,\n  400,\n  441,\n  484,\n  529,\n  576,\n  625,\n  676,\n  729,\n  784,\n  841,\n  900,\n  961,\n  1024,\n  1089,\n  1156,\n  1225,\n  1296,\n  1369,\n  1444,\n  1521,\n  1600,\n  1681,\n  1764,\n  1849,\n  1936,\n  2025,\n  2116,\n  2209,\n  2304,\n  2401,\n  2500,\n  2601,\n  2704,\n  2809,\n  2916,\n  3025,\n  3136,\n  3249,\n  3364,\n  3481\n];\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZ3JpZC9zcXVhcmUtbnVtYmVycy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9ncmlkL3NxdWFyZS1udW1iZXJzLmpzPzdiYWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogU3F1YXJlIG51bWJlcnMgdXAgdG8gNTleMjpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBzcXVhcmVOdW1iZXJzID0gW1xuICAwLFxuICAxLFxuICA0LFxuICA5LFxuICAxNixcbiAgMjUsXG4gIDM2LFxuICA0OSxcbiAgNjQsXG4gIDgxLFxuICAxMDAsXG4gIDEyMSxcbiAgMTQ0LFxuICAxNjksXG4gIDE5NixcbiAgMjI1LFxuICAyNTYsXG4gIDI4OSxcbiAgMzI0LFxuICAzNjEsXG4gIDQwMCxcbiAgNDQxLFxuICA0ODQsXG4gIDUyOSxcbiAgNTc2LFxuICA2MjUsXG4gIDY3NixcbiAgNzI5LFxuICA3ODQsXG4gIDg0MSxcbiAgOTAwLFxuICA5NjEsXG4gIDEwMjQsXG4gIDEwODksXG4gIDExNTYsXG4gIDEyMjUsXG4gIDEyOTYsXG4gIDEzNjksXG4gIDE0NDQsXG4gIDE1MjEsXG4gIDE2MDAsXG4gIDE2ODEsXG4gIDE3NjQsXG4gIDE4NDksXG4gIDE5MzYsXG4gIDIwMjUsXG4gIDIxMTYsXG4gIDIyMDksXG4gIDIzMDQsXG4gIDI0MDEsXG4gIDI1MDAsXG4gIDI2MDEsXG4gIDI3MDQsXG4gIDI4MDksXG4gIDI5MTYsXG4gIDMwMjUsXG4gIDMxMzYsXG4gIDMyNDksXG4gIDMzNjQsXG4gIDM0ODFcbl07XG5cbmV4cG9ydCB7IHNxdWFyZU51bWJlcnMgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/grid/square-numbers.js\n");

/***/ })

/******/ });