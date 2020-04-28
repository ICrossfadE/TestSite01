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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/addingBlocks.js":
/*!*****************************!*\
  !*** ./src/addingBlocks.js ***!
  \*****************************/
/*! exports provided: addingBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addingBlocks\", function() { return addingBlocks; });\nfunction addingBlocks() {\r\n\r\n    const container = document.querySelector('.container');    \r\n\r\n    let maxScroll = document.documentElement.scrollHeight;\r\n\r\n    window.addEventListener('scroll', addBlock);\r\n\r\n    function addBlock() {\r\n\r\n        let cord = document.documentElement.scrollTop;\r\n\r\n        if(cord >= 160) {\r\n            \r\n            container.classList.remove('none');\r\n            container.style.display = 'flex';\r\n            \r\n        } else if(cord <= 160) {\r\n\r\n            container.classList.add('none');\r\n            container.style.display = '';\r\n        }\r\n    }\r\n    console.log(maxScroll);\r\n}\r\n\r\n\r\n \r\n\n\n//# sourceURL=webpack:///./src/addingBlocks.js?");

/***/ }),

/***/ "./src/hoverRotate.js":
/*!****************************!*\
  !*** ./src/hoverRotate.js ***!
  \****************************/
/*! exports provided: hoverRotate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hoverRotate\", function() { return hoverRotate; });\nfunction hoverRotate() {\r\n\r\n        const cards = document.querySelectorAll('.card');\r\n\r\n    for (let item of cards) {\r\n        const card = item;\r\n        card.addEventListener('mousemove', startRotate);\r\n        card.addEventListener('mouseout', stopRotate);\r\n    }\r\n\r\n    // for (let i = 0; i < cards.length; i++) {\r\n    //     const card = cards[i];\r\n    //     card.addEventListener('mousemove', startRotate);\r\n    //     card.addEventListener('mouseout', stopRotate);\r\n    // }\r\n\r\n\r\n    function startRotate(e) {\r\n\r\n        const cardItem = this.querySelector('.card-item'); \r\n        let cardHeigth = cardItem.offsetHeight / 2; //ділимо висоту на 2\r\n\r\n        cardItem.style.transform = 'rotateX('+ -(e.offsetY - cardHeigth) / 10 + 'deg) rotateY(' + (e.offsetX - cardHeigth) / 10 + 'deg)';  \r\n    }\r\n\r\n    function stopRotate() {\r\n\r\n        const cardItem = this.querySelector('.card-item');\r\n        cardItem.style.transform = 'rotate(0)';\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/hoverRotate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/slider.js\");\n/* harmony import */ var _progresBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progresBar.js */ \"./src/progresBar.js\");\n/* harmony import */ var _hoverRotate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoverRotate.js */ \"./src/hoverRotate.js\");\n/* harmony import */ var _addingBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addingBlocks */ \"./src/addingBlocks.js\");\n\r\n\r\n\r\n\r\n\r\nObject(_slider_js__WEBPACK_IMPORTED_MODULE_0__[\"slider\"])();\r\nObject(_progresBar_js__WEBPACK_IMPORTED_MODULE_1__[\"progresBar\"])();\r\nObject(_hoverRotate_js__WEBPACK_IMPORTED_MODULE_2__[\"hoverRotate\"])();\r\nObject(_addingBlocks__WEBPACK_IMPORTED_MODULE_3__[\"addingBlocks\"])();\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/progresBar.js":
/*!***************************!*\
  !*** ./src/progresBar.js ***!
  \***************************/
/*! exports provided: progresBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"progresBar\", function() { return progresBar; });\nfunction progresBar() {\r\n\r\n    const progres = document.querySelector('.pogres-bar');\r\n\r\n    window.addEventListener('scroll', progresBar);\r\n\r\n    function progresBar() {\r\n        \r\n        let windowScrol = document.body.scrollTop || document.documentElement.scrollTop;\r\n        let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\r\n\r\n        let persent  = windowScrol / windowHeight * 100;\r\n\r\n        progres.style.width = persent + '%';\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/progresBar.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\nfunction slider() {\r\n\r\n        const sliderItem = document.querySelectorAll('.item'),\r\n        left = document.querySelector('.slide__arrow-left'),\r\n        right = document.querySelector('.slide__arrow-right'),\r\n        dotsActive = document.querySelector('.slider-dots'),\r\n        dots = document.querySelectorAll('.dot');\r\n\r\n    let sliderIndex = 1;\r\n\r\n    function showSlides() {\r\n        \r\n        if (sliderIndex > sliderItem.length) {\r\n            sliderIndex = 1;\r\n        }\r\n        if (sliderIndex < 1) {\r\n            sliderIndex = sliderItem.length;\r\n        }\r\n\r\n        for (let item of sliderItem) {\r\n            item.style.display = 'none';\r\n        }\r\n\r\n        for (let item of dots) {\r\n            item.classList.remove('dot-active');\r\n        }\r\n\r\n        sliderItem[sliderIndex - 1 ].style.display = 'block';\r\n        dots[sliderIndex -1 ].classList.add('dot-active');\r\n\r\n    }\r\n\r\n    function plusSliderIndex(n) {\r\n\r\n        showSlides(sliderIndex += n);\r\n    }\r\n\r\n    function currentSliderIndex(n) {\r\n\r\n        showSlides(sliderIndex = n);\r\n    }\r\n\r\n    right.addEventListener('click', function() {\r\n\r\n        plusSliderIndex(1);\r\n        console.log(sliderIndex);\r\n        \r\n    });\r\n\r\n    left.addEventListener('click', function() {\r\n\r\n        plusSliderIndex(-1);\r\n        console.log(sliderIndex);\r\n    });\r\n\r\n    dotsActive.addEventListener('click', function(e) {\r\n\r\n        for(let i = 0; i < dots.length + 1; i++) {\r\n\r\n            if (e.target.classList.contains('dot') && e.target == dots[i-1]) {\r\n                currentSliderIndex(i);\r\n            }\r\n        }\r\n    });\r\n\r\n    setInterval(() => {\r\n        plusSliderIndex(1);\r\n    }, 5000);\r\n\r\n    showSlides();\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/slider.js?");

/***/ })

/******/ });