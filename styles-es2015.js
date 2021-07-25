(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emanuel/Desktop/Gustavo-Julio/src/styles.css */"OmL/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n\n/* You can add global styles to this file, and also import other style files */\n/* Lato Font */\n* {\n    font-family: 'Lato', sans-serif;\n    background-color: black;\n    color: white;\n}\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: black;\n}\n/* (items) navbar-flex DAD */\n.navbar-items-flex {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    font-size: 1.5 rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n/* (item individual) navbar-flex CHILD */\n.navbar-item-flex {\n    margin: 0 1rem 0 1rem;\n}\n/* music nav */\n.music-nav {\n    margin: 0 1rem 0 1rem;\n    cursor: pointer;\n    border: none;\n}\n/* Detalles esteticos para el nav */\n.nav-link,\n.navbar-brand {\n    font-size: x-large;\n    color: white !important;\n}\n.nav-item:last-child {\n    margin: 2px red solid;\n}\n/* Quitar el borde del icono de hamburguesa*/\n.navbar-toggler {\n    border-color: white;\n    margin: 0;\n    padding: 0;\n}\n/* item para el dropdown de la obras */\n.item-css {\n    font-size: large;\n    font-weight: bold;\n    margin: 1rem 0;\n    color: white;\n}\n/* dropdown background color */\n.dropdown-menu {\n    background-color: black;\n    border: 2px solid white;\n}\n/* Al situarse en el navbar se despliega. */\n.dropdown:hover>.dropdown-menu {\n    display: block;\n}\n/* transition */\n.transition-css {\n    -webkit-animation: fadeinout 1s linear;\n            animation: fadeinout 1s linear;\n}\n.transition-slow-css {\n    -webkit-animation: fadeinout 1.3s linear;\n            animation: fadeinout 1.3s linear;\n}\n.transition-very-slow-css {\n    -webkit-animation: fadeinout 1.7s linear;\n            animation: fadeinout 1.7s linear;\n}\n@keyframes fadeinout {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadeinout {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n/* Internet Explorer */\n/* Opera < 12.1 */\n/* Transition escala  */\n.scale {\n    /* Efecto de escala con soporte para distintos navegadores */\n    transform: scale(0.9);\n    transition: 1s ease-in-out;\n    opacity: 0.8;\n}\n.scale:hover {\n    transform: scale(1.0);\n    transition: 0.2s ease-in-out;\n    opacity: 1;\n}\n/* desktop */\n@media (min-width: 768px) {\n    .navbar-items-flex {\n        font-size: inherit;\n    }\n    .nav-link:hover {\n        color: gray !important;\n        /* border-bottom: 1px white solid; */\n    }\n    .navbar-items-flex {\n        justify-content: center;\n    }\n    .navbar-brand {\n        font-size: 2.5rem;\n    }\n    .music-nav:hover {\n        border-bottom: none;\n    }\n}\n@media (max-width: 992px) {\n    .navbar-items-flex {\n        justify-content: flex-start;\n        align-items: flex-start;\n    }\n}", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":";;AAAA,8EAA8E;AAG9E,cAAc;AAGd;IACI,+BAA+B;IAC/B,uBAAuB;IACvB,YAAY;AAChB;AAEA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;AAGA,4BAA4B;AAE5B;IACI,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;AAGA,wCAAwC;AAExC;IACI,qBAAqB;AACzB;AAGA,cAAc;AAEd;IACI,qBAAqB;IACrB,eAAe;IACf,YAAY;AAChB;AAGA,mCAAmC;AAEnC;;IAEI,kBAAkB;IAClB,uBAAuB;AAC3B;AAEA;IACI,qBAAqB;AACzB;AAGA,4CAA4C;AAE5C;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;AAGA,sCAAsC;AAEtC;IACI,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,YAAY;AAChB;AAGA,8BAA8B;AAE9B;IACI,uBAAuB;IACvB,uBAAuB;AAC3B;AAGA,2CAA2C;AAE3C;IACI,cAAc;AAClB;AAGA,eAAe;AAEf;IACI,sCAA8B;YAA9B,8BAA8B;AAClC;AAEA;IACI,wCAAgC;YAAhC,gCAAgC;AACpC;AAEA;IACI,wCAAgC;YAAhC,gCAAgC;AACpC;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;AAGA,iBAAiB;AAYjB,oCAAoC;AAEpC;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;AAGA,sBAAsB;AAYtB,iBAAiB;AAYjB,uBAAuB;AAEvB;IACI,4DAA4D;IAG5D,qBAAqB;IACrB,0BAA0B;IAC1B,YAAY;AAChB;AAEA;IAGI,qBAAqB;IACrB,4BAA4B;IAC5B,UAAU;AACd;AAGA,YAAY;AAEZ;IACI;QACI,kBAAkB;IACtB;IACA;QACI,sBAAsB;QACtB,oCAAoC;IACxC;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,iBAAiB;IACrB;IACA;QACI,mBAAmB;IACvB;AACJ;AAEA;IACI;QACI,2BAA2B;QAC3B,uBAAuB;IAC3B;AACJ","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n\n\n/* Lato Font */\n\n@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\n* {\n    font-family: 'Lato', sans-serif;\n    background-color: black;\n    color: white;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: black;\n}\n\n\n/* (items) navbar-flex DAD */\n\n.navbar-items-flex {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    font-size: 1.5 rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n\n\n/* (item individual) navbar-flex CHILD */\n\n.navbar-item-flex {\n    margin: 0 1rem 0 1rem;\n}\n\n\n/* music nav */\n\n.music-nav {\n    margin: 0 1rem 0 1rem;\n    cursor: pointer;\n    border: none;\n}\n\n\n/* Detalles esteticos para el nav */\n\n.nav-link,\n.navbar-brand {\n    font-size: x-large;\n    color: white !important;\n}\n\n.nav-item:last-child {\n    margin: 2px red solid;\n}\n\n\n/* Quitar el borde del icono de hamburguesa*/\n\n.navbar-toggler {\n    border-color: white;\n    margin: 0;\n    padding: 0;\n}\n\n\n/* item para el dropdown de la obras */\n\n.item-css {\n    font-size: large;\n    font-weight: bold;\n    margin: 1rem 0;\n    color: white;\n}\n\n\n/* dropdown background color */\n\n.dropdown-menu {\n    background-color: black;\n    border: 2px solid white;\n}\n\n\n/* Al situarse en el navbar se despliega. */\n\n.dropdown:hover>.dropdown-menu {\n    display: block;\n}\n\n\n/* transition */\n\n.transition-css {\n    animation: fadeinout 1s linear;\n}\n\n.transition-slow-css {\n    animation: fadeinout 1.3s linear;\n}\n\n.transition-very-slow-css {\n    animation: fadeinout 1.7s linear;\n}\n\n@keyframes fadeinout {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n/* Firefox < 16 */\n\n@-moz-keyframes fadeinout {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadeinout {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n/* Internet Explorer */\n\n@-ms-keyframes fadeinout {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n/* Opera < 12.1 */\n\n@-o-keyframes fadeinout {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n/* Transition escala  */\n\n.scale {\n    /* Efecto de escala con soporte para distintos navegadores */\n    -webkit-transform: scale(0.9);\n    -ms-transform: scale(0.9);\n    transform: scale(0.9);\n    transition: 1s ease-in-out;\n    opacity: 0.8;\n}\n\n.scale:hover {\n    -webkit-transform: scale(1.0);\n    -ms-transform: scale(1.0);\n    transform: scale(1.0);\n    transition: 0.2s ease-in-out;\n    opacity: 1;\n}\n\n\n/* desktop */\n\n@media (min-width: 768px) {\n    .navbar-items-flex {\n        font-size: inherit;\n    }\n    .nav-link:hover {\n        color: gray !important;\n        /* border-bottom: 1px white solid; */\n    }\n    .navbar-items-flex {\n        justify-content: center;\n    }\n    .navbar-brand {\n        font-size: 2.5rem;\n    }\n    .music-nav:hover {\n        border-bottom: none;\n    }\n}\n\n@media (max-width: 992px) {\n    .navbar-items-flex {\n        justify-content: flex-start;\n        align-items: flex-start;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map