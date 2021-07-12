module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/FirstVisitIndexPage.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/FirstVisitIndexPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FirstVisitIndexPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__);





var FirstVisitIndexPage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FirstVisitIndexPage, _Page);

  function FirstVisitIndexPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = FirstVisitIndexPage.prototype;

  _proto.view = function view() {
    var baseUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('baseUrl');
    return m('.IndexPage', [flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.hero(), m('.container', m('.sideNavContainer', [m('.IndexPage-results.sideNavOffset', m('div', {
      className: 'body-post'
    }, [m('section', {
      className: 'timeline-outer',
      id: 'timeline'
    }, m('div', {
      className: 'container',
      id: 'content'
    }, m('div', {
      className: 'row'
    }, m('div', {
      className: 'col s12 m12 l12'
    }, [m('h1', {
      className: 'maintitle-text lighten-1 header'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.title')), m("div", {
      id: "warningbox"
    }, m("div", {
      id: "rulesbox"
    }, [m("p", [m("i", {
      className: "fas fa-exclamation"
    }), m("strong", flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.warning-title'))]), m("p", flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.warning-text'))])), m('ul', {
      className: 'timeline'
    }, [m('li', {
      className: 'event'
    }, [m('h3', {
      id: 'generalRules'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.general-rules')), m('p', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.general-rules-text'))]), m('li', {
      className: 'event'
    }, [m('h3', {
      id: 'posting'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.posting-rules')), m('p', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.posting-rules-text'))]), m('li', {
      className: 'event'
    }, [m('h3', {
      id: 'spam'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.spam')), m('p', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.spam-text'))]), m('li', {
      className: 'event'
    }, [m('h3', {
      id: 'copyright'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.copyright')), m('p', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.copyright-text'))]), m('li', {
      className: 'event'
    }, [m('h3', {
      id: 'break'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.rule-break')), m('p', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.rule-break-text'))])])])))), m('button', {
      className: 'btn btn1',
      onclick: function onclick() {
        window.location = baseUrl;
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('first-visit-indexpage.forum.agree-button'))]))]))]);
  };

  return FirstVisitIndexPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FirstVisitIndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FirstVisitIndexPage */ "./src/forum/components/FirstVisitIndexPage.js");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_3__);




flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('justoverclock/first-visit-indexpage', function () {
  flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.routes.FirstVisitIndexPage = {
    path: '/forum-rules',
    component: _components_FirstVisitIndexPage__WEBPACK_IMPORTED_MODULE_2__["default"]
  };
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oninit', function () {
    var User = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user;
    var baseUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('baseUrl');

    if (User) {
      var redirect = function redirect() {
        var thecookie = readCookie('doRedirect');

        if (!thecookie) {
          location.href = baseUrl + '/forum-rules';
        }
      };

      var createCookie = function createCookie(name, value, days) {
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          var expires = '; expires=' + date.toGMTString();
        } else var expires = '';

        document.cookie = name + '=' + value + expires + '; path=/';
      };

      var readCookie = function readCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];

          while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
          }

          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }

        return null;
      };

      window.onload = function () {
        redirect();
        createCookie('doRedirect', 'true', '9999');
      };
    }
  });
});

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map