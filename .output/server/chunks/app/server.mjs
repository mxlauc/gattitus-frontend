import { v as vue_cjs_prod, s as serverRenderer, r as require$$0 } from '../handlers/renderer.mjs';
import { hasProtocol, isEqual, joinURL, withBase, withQuery } from 'ufo';
import { defineStore, createPinia, setActivePinia } from 'pinia/dist/pinia.mjs';
import axios from 'axios';
import { u as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import 'h3';
import 'unenv/runtime/mock/proxy';
import 'stream';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

var vue=vue_cjs_prod;function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce$1(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }
  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}
// Adds compatibility for ES modules
debounce$1.debounce = debounce$1;

var debounce_1 = debounce$1;function useContent(slots, popperNode, content) {
  var observer = null;
  var hasContent = vue.ref(false);
  vue.onMounted(function () {
    if (slots.content !== undefined || content.value) {
      hasContent.value = true;
    }

    observer = new MutationObserver(checkContent);
    observer.observe(popperNode.value, {
      childList: true,
      subtree: true
    });
  });
  vue.onBeforeUnmount(function () {
    return observer.disconnect();
  });
  /**
   * Watch the content prop
   */

  vue.watch(content, function (content) {
    if (content) {
      hasContent.value = true;
    } else {
      hasContent.value = false;
    }
  });
  /**
   * Check the content slot
   */

  var checkContent = function checkContent() {
    if (slots.content) {
      hasContent.value = true;
    } else {
      hasContent.value = false;
    }
  };

  return {
    hasContent: hasContent
  };
}// import { isHTMLElement } from './instanceOf';
function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
includeScale) {

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1; // FIXME:
  // `offsetWidth` returns an integer while `getBoundingClientRect`
  // returns a float. This results in `scaleX` or `scaleY` being
  // non-1 when it should be for elements that aren't a full pixel in
  // width or height.
  // if (isHTMLElement(element) && includeScale) {
  //   const offsetHeight = element.offsetHeight;
  //   const offsetWidth = element.offsetWidth;
  //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
  //   // Fallback to 1 in case both values are `0`
  //   if (offsetWidth > 0) {
  //     scaleX = rect.width / offsetWidth || 1;
  //   }
  //   if (offsetHeight > 0) {
  //     scaleY = rect.height / offsetHeight || 1;
  //   }
  // }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main$1 = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main$1, afterMain, beforeWrite, write, afterWrite];function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}function getBasePlacement(placement) {
  return placement.split('-')[0];
}function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}var max = Math.max;
var min = Math.min;
var round = Math.round;// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}function getVariation(placement) {
  return placement.split('-')[1];
}function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}var passive = {
  passive: true
};

function effect$2(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$1,
  requires: ['computeStyles']
};var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};var toInt = function toInt(x) {
  return parseInt(x, 10);
};

function usePopper(_ref) {
  var arrowPadding = _ref.arrowPadding,
      emit = _ref.emit,
      locked = _ref.locked,
      offsetDistance = _ref.offsetDistance,
      offsetSkid = _ref.offsetSkid,
      placement = _ref.placement,
      popperNode = _ref.popperNode,
      triggerNode = _ref.triggerNode;
  var state = vue.reactive({
    isOpen: false,
    popperInstance: null
  }); // Enable or disable event listeners to optimize performance.

  var setPopperEventListeners = function setPopperEventListeners(enabled) {
    var _state$popperInstance;

    (_state$popperInstance = state.popperInstance) === null || _state$popperInstance === void 0 ? void 0 : _state$popperInstance.setOptions(function (options) {
      return _objectSpread2(_objectSpread2({}, options), {}, {
        modifiers: [].concat(_toConsumableArray(options.modifiers), [{
          name: "eventListeners",
          enabled: enabled
        }])
      });
    });
  };

  var enablePopperEventListeners = function enablePopperEventListeners() {
    return setPopperEventListeners(true);
  };

  var disablePopperEventListeners = function disablePopperEventListeners() {
    return setPopperEventListeners(false);
  };

  var close = function close() {
    if (!state.isOpen) {
      return;
    }

    state.isOpen = false;
    emit("close:popper");
  };

  var open = function open() {
    if (state.isOpen) {
      return;
    }

    state.isOpen = true;
    emit("open:popper");
  }; // When isOpen or placement change


  vue.watch([function () {
    return state.isOpen;
  }, placement], /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var _ref4, isOpen;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref4 = _slicedToArray(_ref2, 1), isOpen = _ref4[0];

              if (!isOpen) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return initializePopper();

            case 4:
              enablePopperEventListeners();
              _context.next = 8;
              break;

            case 7:
              disablePopperEventListeners();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());

  var initializePopper = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return vue.nextTick();

            case 2:
              state.popperInstance = createPopper(triggerNode.value, popperNode.value, {
                placement: placement.value,
                modifiers: [preventOverflow$1, flip$1, {
                  name: "flip",
                  enabled: !locked.value
                }, arrow$1, {
                  name: "arrow",
                  options: {
                    padding: toInt(arrowPadding.value)
                  }
                }, offset$1, {
                  name: "offset",
                  options: {
                    offset: [toInt(offsetSkid.value), toInt(offsetDistance.value)]
                  }
                }]
              }); // Update its position

              state.popperInstance.update();

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function initializePopper() {
      return _ref5.apply(this, arguments);
    };
  }();

  vue.onBeforeUnmount(function () {
    var _state$popperInstance2;

    (_state$popperInstance2 = state.popperInstance) === null || _state$popperInstance2 === void 0 ? void 0 : _state$popperInstance2.destroy();
  });
  return _objectSpread2(_objectSpread2({}, vue.toRefs(state)), {}, {
    open: open,
    close: close
  });
}var _hoisted_1$1 = {
  id: "arrow",
  "data-popper-arrow": ""
};
function render(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1);
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$1 = "\n#arrow[data-v-20b7fd4a],\n  #arrow[data-v-20b7fd4a]::before {\n    transition: background 250ms ease-in-out;\n    position: absolute;\n    width: calc(10px - var(--popper-theme-border-width, 0px));\n    height: calc(10px - var(--popper-theme-border-width, 0px));\n    box-sizing: border-box;\n    background: var(--popper-theme-background-color);\n}\n#arrow[data-v-20b7fd4a] {\n    visibility: hidden;\n}\n#arrow[data-v-20b7fd4a]::before {\n    visibility: visible;\n    content: \"\";\n    transform: rotate(45deg);\n}\n\n  /* Top arrow */\n.popper[data-popper-placement^=\"top\"] > #arrow[data-v-20b7fd4a] {\n    bottom: -5px;\n}\n.popper[data-popper-placement^=\"top\"] > #arrow[data-v-20b7fd4a]::before {\n    border-right: var(--popper-theme-border-width)\n      var(--popper-theme-border-style) var(--popper-theme-border-color);\n    border-bottom: var(--popper-theme-border-width)\n      var(--popper-theme-border-style) var(--popper-theme-border-color);\n}\n\n  /* Bottom arrow */\n.popper[data-popper-placement^=\"bottom\"] > #arrow[data-v-20b7fd4a] {\n    top: -5px;\n}\n.popper[data-popper-placement^=\"bottom\"] > #arrow[data-v-20b7fd4a]::before {\n    border-left: var(--popper-theme-border-width)\n      var(--popper-theme-border-style) var(--popper-theme-border-color);\n    border-top: var(--popper-theme-border-width)\n      var(--popper-theme-border-style) var(--popper-theme-border-color);\n}\n\n  /* Left arrow */\n.popper[data-popper-placement^=\"left\"] > #arrow[data-v-20b7fd4a] {\n    right: -5px;\n}\n.popper[data-popper-placement^=\"left\"] > #arrow[data-v-20b7fd4a]::before {\n    border-right: var(--popper-theme-border-width)\n      var(--popper-theme-border-style) var(--popper-theme-border-color);\n    border-top: var(--popper-theme-border-width)\n      var(--popper-theme-border-style) var(--popper-theme-border-color);\n}\n\n  /* Right arrow */\n.popper[data-popper-placement^=\"right\"] > #arrow[data-v-20b7fd4a] {\n    left: -5px;\n}\n";
styleInject(css_248z$1);var script$1 = {};
script$1.render = render;
script$1.__scopeId = "data-v-20b7fd4a";
var Arrow = script$1;var _hoisted_1 = ["onKeyup"];
var script = {
  props: {
    /**
     * Preferred placement (the "auto" placements will choose the side with most space.)
     */
    placement: {
      type: String,
      default: "bottom",
      validator: function validator(value) {
        return ["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(value);
      }
    },

    /**
     * Disables automatically closing the popover when the user clicks away from it
     */
    disableClickAway: {
      type: Boolean,
      default: false
    },

    /**
     * Offset in pixels along the trigger element
     */
    offsetSkid: {
      type: String,
      default: "0"
    },

    /**
     * Offset in pixels away from the trigger element
     */
    offsetDistance: {
      type: String,
      default: "12"
    },

    /**
     * Trigger the popper on hover
     */
    hover: {
      type: Boolean,
      default: false
    },

    /**
     * Manually open/close the Popper, other events are ignored if this prop is set
     */
    show: {
      type: Boolean,
      default: null
    },

    /**
     * Disables the Popper. If it was already open, it will be closed.
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Open the Popper after a delay (ms).
     */
    openDelay: {
      type: [Number, String],
      default: 0
    },

    /**
     * Close the Popper after a delay (ms).
     */
    closeDelay: {
      type: [Number, String],
      default: 0
    },

    /**
     * The z-index of the Popper.
     */
    zIndex: {
      type: [Number, String],
      default: 9999
    },

    /**
     * Display an arrow on the popper
     */
    arrow: {
      type: Boolean,
      default: false
    },

    /**
     * Stop arrow from reaching the edge of the popper
     */
    arrowPadding: {
      type: String,
      default: "0"
    },

    /**
     * If the Popper should be interactive, it will close when clicked/hovered if false
     */
    interactive: {
      type: Boolean,
      default: true
    },

    /**
     * Lock the Popper into place, it will not flip dynamically when it runs out of space if true
     */
    locked: {
      type: Boolean,
      default: false
    },

    /**
     * If the content is just a simple string, it can be passed in as a prop
     */
    content: {
      type: String,
      default: null
    }
  },
  emits: ["open:popper", "close:popper"],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var props = __props;

    vue.useCssVars(function (_ctx) {
      return {
        "c81fc0a4": __props.zIndex
      };
    });

    var slots = vue.useSlots();
    var popperContainerNode = vue.ref(null);
    var popperNode = vue.ref(null);
    var triggerNode = vue.ref(null);
    var modifiedIsOpen = vue.ref(false);
    vue.onMounted(function () {
      var children = slots.default();

      if (children && children.length > 1) {
        return console.error("[Popper]: The <Popper> component expects only one child element at its root. You passed ".concat(children.length, " child nodes."));
      }
    });

    var _toRefs = vue.toRefs(props),
        arrowPadding = _toRefs.arrowPadding,
        closeDelay = _toRefs.closeDelay,
        content = _toRefs.content,
        disableClickAway = _toRefs.disableClickAway,
        disabled = _toRefs.disabled,
        interactive = _toRefs.interactive,
        locked = _toRefs.locked,
        offsetDistance = _toRefs.offsetDistance,
        offsetSkid = _toRefs.offsetSkid,
        openDelay = _toRefs.openDelay,
        placement = _toRefs.placement,
        show = _toRefs.show;

    var _usePopper = usePopper({
      arrowPadding: arrowPadding,
      emit: emit,
      locked: locked,
      offsetDistance: offsetDistance,
      offsetSkid: offsetSkid,
      placement: placement,
      popperNode: popperNode,
      triggerNode: triggerNode
    }),
        isOpen = _usePopper.isOpen,
        open = _usePopper.open,
        close = _usePopper.close;

    var _useContent = useContent(slots, popperNode, content),
        hasContent = _useContent.hasContent;

    var manualMode = vue.computed(function () {
      return show.value !== null;
    });
    var invalid = vue.computed(function () {
      return disabled.value || !hasContent.value;
    });
    var shouldShowPopper = vue.computed(function () {
      return isOpen.value && !invalid.value;
    });
    var enableClickAway = vue.computed(function () {
      return !disableClickAway.value && !manualMode.value;
    }); // Add an invisible border to keep the Popper open when hovering from the trigger into it

    var interactiveStyle = vue.computed(function () {
      return interactive.value ? "border: ".concat(offsetDistance.value, "px solid transparent; margin: -").concat(offsetDistance.value, "px;") : null;
    });
    var openPopperDebounce = debounce_1.debounce(open, openDelay.value);
    var closePopperDebounce = debounce_1.debounce(close, closeDelay.value);

    var openPopper = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(invalid.value || manualMode.value)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                closePopperDebounce.clear();
                openPopperDebounce();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function openPopper() {
        return _ref2.apply(this, arguments);
      };
    }();

    var closePopper = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!manualMode.value) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                openPopperDebounce.clear();
                closePopperDebounce();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function closePopper() {
        return _ref3.apply(this, arguments);
      };
    }();

    var togglePopper = function togglePopper() {
      isOpen.value ? closePopper() : openPopper();
    };
    /**
     * If Popper is open, we automatically close it if it becomes
     * disabled or without content.
     */


    vue.watch([hasContent, disabled], function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          hasContent = _ref5[0],
          disabled = _ref5[1];

      if (isOpen.value && (!hasContent || disabled)) {
        close();
      }
    });
    /**
     * In order to eliminate flickering or visibly empty Poppers due to
     * the transition when using the isOpen slot property, we need to return a
     * separate debounced value based on isOpen.
     */

    vue.watch(isOpen, function (isOpen) {
      if (isOpen) {
        modifiedIsOpen.value = true;
      } else {
        debounce_1.debounce(function () {
          modifiedIsOpen.value = false;
        }, 200);
      }
    });
    /**
     * Watch for manual mode.
     */

    vue.watchEffect(function () {
      if (manualMode.value) {
        show.value ? openPopperDebounce() : closePopperDebounce();
      }
    });
    /**
     * Use click away if it should be enabled.
     */

    vue.watchEffect(function () {
      if (enableClickAway.value) ;
    });
    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "inline-block",
        style: vue.normalizeStyle(vue.unref(interactiveStyle)),
        onMouseleave: _cache[2] || (_cache[2] = function ($event) {
          return __props.hover && closePopper();
        }),
        ref: function ref(_value, _refs) {
          _refs['popperContainerNode'] = _value;
          popperContainerNode.value = _value;
        }
      }, [vue.createElementVNode("div", {
        ref: function ref(_value, _refs) {
          _refs['triggerNode'] = _value;
          triggerNode.value = _value;
        },
        onMouseover: _cache[0] || (_cache[0] = function ($event) {
          return __props.hover && openPopper();
        }),
        onClick: togglePopper,
        onFocus: openPopper,
        onKeyup: vue.withKeys(closePopper, ["esc"])
      }, [vue.renderSlot(_ctx.$slots, "default")], 40, _hoisted_1), vue.createVNode(vue.Transition, {
        name: "fade"
      }, {
        default: vue.withCtx(function () {
          return [vue.withDirectives(vue.createElementVNode("div", {
            onClick: _cache[1] || (_cache[1] = function ($event) {
              return !vue.unref(interactive) && closePopper();
            }),
            class: "popper",
            ref: function ref(_value, _refs) {
              _refs['popperNode'] = _value;
              popperNode.value = _value;
            }
          }, [vue.renderSlot(_ctx.$slots, "content", {
            close: vue.unref(close),
            isOpen: modifiedIsOpen.value
          }, function () {
            return [vue.createTextVNode(vue.toDisplayString(vue.unref(content)), 1)];
          }), __props.arrow ? (vue.openBlock(), vue.createBlock(Arrow, {
            key: 0
          })) : vue.createCommentVNode("", true)], 512), [[vue.vShow, vue.unref(shouldShowPopper)]])];
        }),
        _: 3
      })], 36);
    };
  }
};var css_248z = "\n.inline-block[data-v-5784ed69] {\n    display: inline-block;\n}\n.popper[data-v-5784ed69] {\n    transition: background 250ms ease-in-out;\n    background: var(--popper-theme-background-color);\n    padding: var(--popper-theme-padding);\n    color: var(--popper-theme-text-color);\n    border-radius: var(--popper-theme-border-radius);\n    border-width: var(--popper-theme-border-width);\n    border-style: var(--popper-theme-border-style);\n    border-color: var(--popper-theme-border-color);\n    box-shadow: var(--popper-theme-box-shadow);\n    z-index: var(--c81fc0a4);\n}\n.popper[data-v-5784ed69]:hover,\n  .popper:hover > #arrow[data-v-5784ed69]::before {\n    background: var(--popper-theme-background-color-hover);\n}\n.inline-block[data-v-5784ed69] {\n    display: inline-block;\n}\n.fade-enter-active[data-v-5784ed69],\n  .fade-leave-active[data-v-5784ed69] {\n    transition: opacity 0.2s ease;\n}\n.fade-enter-from[data-v-5784ed69],\n  .fade-leave-to[data-v-5784ed69] {\n    opacity: 0;\n}\n";
styleInject(css_248z);script.__scopeId = "data-v-5784ed69";// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component("Popper", installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== "default") component[exportName] = exported;
});var popper_ssr=component;

const Popper = popper_ssr;

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request, error, response) {
  let message = "";
  if (request && response) {
    message = `${response.status} ${response.statusText} (${request.toString()})`;
  }
  if (error) {
    message = `${error.message} (${message})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", { get() {
    return request;
  } });
  Object.defineProperty(fetchError, "response", { get() {
    return response;
  } });
  Object.defineProperty(fetchError, "data", { get() {
    return response && response._data;
  } });
  return fetchError;
}
const payloadMethods = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(val) {
  if (val === void 0) {
    return false;
  }
  const t = typeof val;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(val)) {
    return true;
  }
  return val.constructor && val.constructor.name === "Object" || typeof val.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift();
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  409,
  425,
  429,
  500,
  502,
  503,
  504
]);
function createFetch(globalOptions) {
  const { fetch: fetch2, Headers: Headers2 } = globalOptions;
  function onError(ctx) {
    if (ctx.options.retry !== false) {
      const retries = typeof ctx.options.retry === "number" ? ctx.options.retry : isPayloadMethod(ctx.options.method) ? 0 : 1;
      const responseCode = ctx.response && ctx.response.status || 500;
      if (retries > 0 && retryStatusCodes.has(responseCode)) {
        return $fetchRaw(ctx.request, __spreadProps(__spreadValues({}, ctx.options), {
          retry: retries - 1
        }));
      }
    }
    const err = createFetchError(ctx.request, ctx.error, ctx.response);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, $fetchRaw);
    }
    throw err;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _opts = {}) {
    const ctx = {
      request: _request,
      options: __spreadValues(__spreadValues({}, globalOptions.defaults), _opts),
      response: void 0,
      error: void 0
    };
    if (ctx.options.onRequest) {
      await ctx.options.onRequest(ctx);
    }
    if (typeof ctx.request === "string") {
      if (ctx.options.baseURL) {
        ctx.request = withBase(ctx.request, ctx.options.baseURL);
      }
      if (ctx.options.params) {
        ctx.request = withQuery(ctx.request, ctx.options.params);
      }
      if (ctx.options.body && isPayloadMethod(ctx.options.method)) {
        if (isJSONSerializable(ctx.options.body)) {
          ctx.options.body = JSON.stringify(ctx.options.body);
          ctx.options.headers = new Headers2(ctx.options.headers);
          if (!ctx.options.headers.has("content-type")) {
            ctx.options.headers.set("content-type", "application/json");
          }
          if (!ctx.options.headers.has("accept")) {
            ctx.options.headers.set("accept", "application/json");
          }
        }
      }
    }
    ctx.response = await fetch2(ctx.request, ctx.options).catch(async (error) => {
      ctx.error = error;
      if (ctx.options.onRequestError) {
        await ctx.options.onRequestError(ctx);
      }
      return onError(ctx);
    });
    const responseType = (ctx.options.parseResponse ? "json" : ctx.options.responseType) || detectResponseType(ctx.response.headers.get("content-type") || "");
    if (responseType === "json") {
      const data = await ctx.response.text();
      const parseFn = ctx.options.parseResponse || destr;
      ctx.response._data = parseFn(data);
    } else {
      ctx.response._data = await ctx.response[responseType]();
    }
    if (ctx.options.onResponse) {
      await ctx.options.onResponse(ctx);
    }
    if (!ctx.response.ok) {
      if (ctx.options.onResponseError) {
        await ctx.options.onResponseError(ctx);
      }
    }
    return ctx.response.ok ? ctx.response : onError(ctx);
  };
  const $fetch2 = function $fetch22(request, opts) {
    return $fetchRaw(request, opts).then((r) => r._data);
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.create = (defaultOptions = {}) => createFetch(__spreadProps(__spreadValues({}, globalOptions), {
    defaults: __spreadValues(__spreadValues({}, globalOptions.defaults), defaultOptions)
  }));
  return $fetch2;
}
const _globalThis$3 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const fetch = _globalThis$3.fetch || (() => Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!")));
const Headers = _globalThis$3.Headers;
const $fetch$1 = createFetch({ fetch, Headers });
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
function serialCaller(hooks, args) {
  return hooks.reduce((promise, hookFn) => promise.then(() => hookFn.apply(void 0, args)), Promise.resolve(null));
}
function parallelCaller(hooks, args) {
  return Promise.all(hooks.map((hook) => hook.apply(void 0, args)));
}
class Hookable {
  constructor() {
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let deprecatedHookObj;
    while (this._deprecatedHooks[name]) {
      const deprecatedHook = this._deprecatedHooks[name];
      if (typeof deprecatedHook === "string") {
        deprecatedHookObj = { to: deprecatedHook };
      } else {
        deprecatedHookObj = deprecatedHook;
      }
      name = deprecatedHookObj.to;
    }
    if (deprecatedHookObj) {
      if (!deprecatedHookObj.message) {
        console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
      } else {
        console.warn(deprecatedHookObj.message);
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }
  hookOnce(name, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name, _fn);
    return _unreg;
  }
  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  callHook(name, ...args) {
    return serialCaller(this._hooks[name] || [], args);
  }
  callHookParallel(name, ...args) {
    return parallelCaller(this._hooks[name] || [], args);
  }
  callHookWith(caller, name, ...args) {
    return caller(this._hooks[name] || [], args);
  }
}
function createHooks() {
  return new Hookable();
}
function createContext() {
  let currentInstance = null;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  return {
    use: () => currentInstance,
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = null;
      isSingleton = false;
    },
    call: (instance, cb) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return cb();
      } finally {
        if (!isSingleton) {
          currentInstance = null;
        }
      }
    },
    async callAsync(instance, cb) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = cb();
        if (!isSingleton) {
          currentInstance = null;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace() {
  const contexts = {};
  return {
    get(key) {
      if (!contexts[key]) {
        contexts[key] = createContext();
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis$2[globalKey] || (_globalThis$2[globalKey] = createNamespace());
const getContext = (key) => defaultNamespace.get(key);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$2[asyncHandlersKey] || (_globalThis$2[asyncHandlersKey] = /* @__PURE__ */ new Set());
function createMock(name, overrides = {}) {
  const fn = function() {
  };
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    enumerate(_target) {
      return [];
    }
  });
}
const mockContext = createMock("mock");
function mock(warning) {
  console.warn(warning);
  return mockContext;
}
const unsupported = /* @__PURE__ */ new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = /* @__PURE__ */ new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: false,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
};
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = __spreadValues({
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive(__spreadValues({
      data: {},
      state: {},
      _errors: {}
    }, { serverRendered: true })),
    isHydrating: false,
    _asyncDataPromises: {}
  }, options);
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  let needsLegacyContext = false;
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins2.unshift(legacyPlugin);
  }
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const vm = vue_cjs_prod.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vueRouter_cjs_prod = {};
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = require$$0;
  const hasSymbol2 = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const PolySymbol = (name) => hasSymbol2 ? Symbol(name) : "_vr_" + name;
  const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
  const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
  const routerKey = /* @__PURE__ */ PolySymbol("r");
  const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
  const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
  function isESModule(obj) {
    return obj.__esModule || hasSymbol2 && obj[Symbol.toStringTag] === "Module";
  }
  const assign2 = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const TRAILING_SLASH_RE2 = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE2, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const searchPos = location2.indexOf("?");
    const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (position === 1 || segment === ".")
        continue;
      if (segment === "..")
        position--;
      else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign2({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign2({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign2({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state = assign2({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign2({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index2 = listeners.indexOf(callback);
          if (index2 > -1)
            listeners.splice(index2, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign2(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign2({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse2(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (Array.isArray(param) && !repeatable)
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            const text = Array.isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2 && segments.length > 1) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path;
    }
    return {
      re,
      score,
      keys,
      parse: parse2,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    return bScore.length - aScore.length;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign2(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign2({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if ("children" in mainNormalizedRecord) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index2 = matchers.indexOf(matcherRef);
        if (index2 > -1) {
          matchers.splice(index2, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign2(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign2({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || {} : { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta2, record) => assign2(meta2, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode2(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode2(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode2(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!Array.isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false)
          reject(createRouterError(4, {
            from,
            to
          }));
        else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
            enterCallbackArray.push(valid);
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index2 > -1)
        return index2;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](vue.unref(props.to)).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const depth = vue.inject(viewDepthKey, 0);
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth]);
      vue.provide(viewDepthKey, depth + 1);
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[props.name];
        const currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[props.name];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign2({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode2);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign2({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign2(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode2(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign2({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign2({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign2({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign2({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign2({
        fullPath,
        hash,
        query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign2({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign2(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign2({
          query: to.query,
          hash: to.hash,
          params: to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(assign2(locationAsObject(shouldRedirect), {
          state: data,
          force,
          replace: replace2
        }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign2(locationAsObject(failure2.to), {
              state: data,
              force,
              replace: replace2
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign2({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener)
        return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign2(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(error.to, toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta)
            routerHistory.go(-info.delta, false);
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = /* @__PURE__ */ new Set();
    const router = {
      currentRoute,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter2() {
    return vue.inject(routerKey);
  }
  function useRoute2() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute2;
  exports.useRouter = useRouter2;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_cjs_prod);
const wrapInRef = (value) => vue_cjs_prod.isRef(value) ? value : vue_cjs_prod.ref(value);
const useState = (key, init) => {
  const nuxt = useNuxtApp();
  const state = vue_cjs_prod.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (vue_cjs_prod.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
const useError = () => {
  const nuxtApp = useNuxtApp();
  return useState("error", () => nuxtApp.ssrContext.error);
};
const throwError = (_err) => {
  const nuxtApp = useNuxtApp();
  useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  }
  return err;
};
const decode = decodeURIComponent;
const encode = encodeURIComponent;
const pairSplitRegExp = /; */;
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  let obj = {};
  let opt = options || {};
  let pairs = str.split(pairSplitRegExp);
  let dec = opt.decode || decode;
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i];
    let eq_idx = pair.indexOf("=");
    if (eq_idx < 0) {
      continue;
    }
    let key = pair.substr(0, eq_idx).trim();
    let val = pair.substr(++eq_idx, pair.length).trim();
    if (val[0] == '"') {
      val = val.slice(1, -1);
    }
    if (obj[key] == void 0) {
      obj[key] = tryDecode(val, dec);
    }
  }
  return obj;
}
function serialize(name, value, options) {
  let opt = options || {};
  let enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  let encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (opt.maxAge != null) {
    let maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.sameSite) {
    let sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
const MIMES = {
  html: "text/html",
  json: "application/json"
};
const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      event.res.end(data);
      resolve(void 0);
    });
  });
}
function defaultContentType(event, type) {
  if (type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", type);
  }
}
function sendRedirect(event, location2, code2 = 302) {
  event.res.statusCode = code2;
  event.res.setHeader("Location", location2);
  return send(event, "Redirecting to " + location2, MIMES.html);
}
function appendHeader(event, name, value) {
  let current = event.res.getHeader(name);
  if (!current) {
    event.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.res.setHeader(name, current.concat(value));
}
class H3Error extends Error {
  constructor() {
    super(...arguments);
    this.statusCode = 500;
    this.statusMessage = "H3Error";
  }
}
function createError(input) {
  var _a;
  if (input instanceof H3Error) {
    return input;
  }
  const err = new H3Error((_a = input.message) != null ? _a : input.statusMessage);
  if (input.statusCode) {
    err.statusCode = input.statusCode;
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  }
  if (input.data) {
    err.data = input.data;
  }
  return err;
}
function useRequestHeaders(include) {
  var _a, _b;
  const headers = (_b = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event.req.headers) != null ? _b : {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a, _b;
  const opts = __spreadValues(__spreadValues({}, CookieDefaults), _opts);
  const cookies = readRawCookies(opts);
  const cookie = wrapInRef((_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse$1(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, __spreadProps(__spreadValues({}, opts), { maxAge: -1 }));
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  return useNuxtApp()._route;
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = router.resolve(to).fullPath || "/";
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main2, sub) => {
  };
  return vue_cjs_prod.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = vue_cjs_prod.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = vue_cjs_prod.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return vue_cjs_prod.h(vue_cjs_prod.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return vue_cjs_prod.h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$4 = defineNuxtLink({ componentName: "NuxtLink" });
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame$1(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray$2(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$2(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$2(value)) {
    return value;
  } else if (isObject$3(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString$2(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString$2(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$2(value)) {
    res = value;
  } else if (isArray$2(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$3(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString$2(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml$1(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index2;
  let lastIndex = 0;
  for (index2 = match.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html += str.slice(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html += escaped;
  }
  return lastIndex !== index2 ? html + str.slice(lastIndex, index2) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate$1(a);
  let bValidType = isDate$1(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isArray$2(a);
  bValidType = isArray$2(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$3(a);
  bValidType = isObject$3(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString$1 = (val) => {
  return isString$2(val) ? val : val == null ? "" : isArray$2(val) || isObject$3(val) && (val.toString === objectToString$1 || !isFunction$2(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$3(val) && !isArray$2(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$1.call(val, key);
const isArray$2 = Array.isArray;
const isMap = (val) => toTypeString$1(val) === "[object Map]";
const isSet = (val) => toTypeString$1(val) === "[object Set]";
const isDate$1 = (val) => val instanceof Date;
const isFunction$2 = (val) => typeof val === "function";
const isString$2 = (val) => typeof val === "string";
const isSymbol$1 = (val) => typeof val === "symbol";
const isObject$3 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$3(val) && isFunction$2(val.then) && isFunction$2(val.catch);
};
const objectToString$1 = Object.prototype.toString;
const toTypeString$1 = (value) => objectToString$1.call(value);
const toRawType = (value) => {
  return toTypeString$1(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString$1(val) === "[object Object]";
const isIntegerKey = (key) => isString$2(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis$1;
const getGlobalThis$1 = () => {
  return _globalThis$1 || (_globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml$1;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.generateCodeFrame = generateCodeFrame$1;
shared_cjs_prod.getGlobalThis = getGlobalThis$1;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn$1;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray$2;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
shared_cjs_prod.isDate = isDate$1;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction$2;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject$3;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject$1;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString$2;
shared_cjs_prod.isSymbol = isSymbol$1;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString$1;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString$1;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString$1;
function useHead(meta2) {
  const resolvedMeta = isFunction_1(meta2) ? vue_cjs_prod.computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {};
function componentsPlugin_50ade27a(nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues$1({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a;
  const head = document2.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document2));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index2 = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index2 = i;
                  break;
                }
              }
              if (index2 !== -1) {
                deduped.splice(index2, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps$1(__spreadValues$1({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps$1(__spreadValues$1({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
function isObject$2(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject$2(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = val.concat(obj[key]);
    } else if (isObject$2(val) && isObject$2(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function createDefu(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const vueuseHead_4a9f6d35 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    vue_cjs_prod.watchEffect(() => {
      head.updateDOM();
    });
  });
  const titleTemplate = vue_cjs_prod.ref();
  nuxtApp._useHead = (_meta) => {
    const meta2 = vue_cjs_prod.ref(_meta);
    if ("titleTemplate" in meta2.value) {
      titleTemplate.value = meta2.value.titleTemplate;
    }
    const headObj = vue_cjs_prod.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta2.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta2.value.title) : titleTemplate.value.replace(/%s/g, meta2.value.title);
      }
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => renderHeadToString(head);
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory(__spreadValues(__spreadValues({}, removeUndefinedProps(props)), ctx.attrs), ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  props: __spreadProps(__spreadValues({}, globalProps), {
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  }),
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  props: __spreadProps(__spreadValues({}, globalProps), {
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  }),
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  props: __spreadProps(__spreadValues({}, globalProps), {
    href: String,
    target: String
  }),
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  props: __spreadProps(__spreadValues({}, globalProps), {
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  }),
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  props: __spreadProps(__spreadValues({}, globalProps), {
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  }),
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = __spreadValues({}, props);
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  props: __spreadProps(__spreadValues({}, globalProps), {
    manifest: String,
    version: String,
    xmlns: String
  }),
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const metaConfig = { "globalMeta": { "charset": "utf-8", "viewport": "width=device-width, initial-scale=1", "meta": [], "link": [], "style": [], "script": [] } };
const metaMixin = {
  created() {
    const instance = vue_cjs_prod.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? vue_cjs_prod.computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const _7cf82f29 = defineNuxtPlugin((nuxtApp) => {
  useHead(vue_cjs_prod.markRaw(metaConfig.globalMeta));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = {
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? vue_cjs_prod.h(component, props === true ? {} : props, slots) : vue_cjs_prod.h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = vue_cjs_prod.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = useNuxtApp();
    const isNested = vue_cjs_prod.inject(isNestedKey, false);
    vue_cjs_prod.provide(isNestedKey, true);
    return () => {
      return vue_cjs_prod.h(vueRouter_cjs_prod.RouterView, {}, {
        default: (routeProps) => {
          var _a;
          return routeProps.Component && _wrapIf(vue_cjs_prod.Transition, (_a = routeProps.route.meta.pageTransition) != null ? _a : defaultPageTransition, wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) : vue_cjs_prod.h(vue_cjs_prod.Suspense, {
            onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
            onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
          }, { default: () => vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) }))).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const fetchWithCookie = async (url, method = "get", replaceCookies = true) => {
  var _a;
  const cookie_to_modify = useCookie("XSRF-TOKEN");
  const cookie_to_modify2 = useCookie("gattitus_session");
  let response = null;
  const headers = useRequestHeaders();
  headers.referer = headers.host;
  {
    response = await $fetch.raw(url, {
      credentials: "include",
      headers,
      method: method === "post" ? "POST" : "GET"
    });
  }
  if (replaceCookies && true && response.headers && response.headers.get("set-cookie")) {
    const cookies = Object.fromEntries((_a = response.headers.get("set-cookie")) == null ? void 0 : _a.split(",").map((a) => a.trim().split("=")));
    if ("XSRF-TOKEN" in cookies) {
      cookie_to_modify.value = cookies["XSRF-TOKEN"];
    }
    if ("gattitus_session" in cookies) {
      cookie_to_modify2.value = cookies.gattitus_session;
    }
  }
  {
    return response._data;
  }
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$11 = {
  props: ["image", "option", "aspect", "objectFit", "width", "height"],
  mounted() {
    if (this.$refs.image.complete) {
      this.onLoadImage();
    } else {
      this.$refs.image.addEventListener("load", () => {
        this.onLoadImage();
      });
    }
  },
  methods: {
    onLoadImage() {
      this.$refs.image.classList.remove("opacity-0");
      this.$refs.background.style.background = "#000";
    }
  },
  computed: {
    estilo() {
      var _a, _b, _c, _d, _e;
      let as = 90;
      if (this.aspect) {
        as = this.aspect;
      }
      if (((_b = (_a = this.image) == null ? void 0 : _a.meta_data) == null ? void 0 : _b.aspect_ratio) < 0.9) {
        as = 0.9;
      }
      as = (_e = (_d = (_c = this.image) == null ? void 0 : _c.meta_data) == null ? void 0 : _d.aspect_ratio) != null ? _e : 1;
      return {
        colo: as
      };
    },
    getWidth() {
      if (this.width) {
        return this.width;
      }
      return null;
    },
    getHeight() {
      if (this.height) {
        return this.height;
      }
      return null;
    },
    aspectRatio() {
      var _a, _b, _c, _d, _e;
      if (this.aspect) {
        return this.aspect;
      }
      if (((_b = (_a = this.image) == null ? void 0 : _a.meta_data) == null ? void 0 : _b.aspect_ratio) < 0.9) {
        return 0.9;
      }
      return (_e = (_d = (_c = this.image) == null ? void 0 : _c.meta_data) == null ? void 0 : _d.aspect_ratio) != null ? _e : 1;
    }
  }
};
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "overflow-hidden",
    style: [{ "display": "inline-table", "max-width": "100%" }, "aspect-ratio: " + $options.aspectRatio + `; background: linear-gradient(45deg, ${(_b = (_a = $props.image) == null ? void 0 : _a.meta_data) == null ? void 0 : _b.color_bl} 0%, ${(_d = (_c = $props.image) == null ? void 0 : _c.meta_data) == null ? void 0 : _d.color_tr} 100%); width: ` + $options.getWidth + "; height: " + $options.getHeight],
    ref: "background"
  }, _attrs))} data-v-3e6916df><img class="image-preloader img-fluid w-100 opacity-0" loading="lazy"${serverRenderer.exports.ssrRenderAttr("src", (_g = (_f = $props.image) == null ? void 0 : _f[(_e = $props.option) != null ? _e : "url_sm"]) != null ? _g : $props.image)} style="${serverRenderer.exports.ssrRenderStyle("aspect-ratio: " + $options.aspectRatio + "; objectFit: " + ($props.objectFit ? $props.objectFit : null))}" data-v-3e6916df></div>`);
}
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/images/ImagePreloader.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const ImagePreloader = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["ssrRender", _sfc_ssrRender$N], ["__scopeId", "data-v-3e6916df"]]);
const useMainStore = defineStore("main", {
  state: () => {
    return {
      posts: null,
      userLogged: null,
      backendUrl: "https://api.donotify.com",
      toasts: []
    };
  },
  actions: {
    async login() {
      await fetchWithCookie(`${this.backendUrl}/sanctum/csrf-cookie`);
    },
    setUser() {
      return fetchWithCookie(`${this.backendUrl}/api/user`).then((result) => {
        this.userLogged = result.data;
      });
    },
    async loadPosts() {
      console.log("cargando posts...");
      const result = await fetchWithCookie(`${this.backendUrl}/api/posts`);
      this.posts = result.data;
    },
    async deletePost(id) {
      await fetchWithCookie(`${this.backendUrl}/api/posts/${id}`);
      const indice = this.posts.findIndex((post) => post.id === id);
      this.posts.splice(indice, 1);
    },
    showToast(msg) {
      this.toasts.push({ message: msg });
      window.setTimeout(() => {
        this.toasts.splice(0, 1);
      }, 5e3);
    }
  }
});
const _sfc_main$10 = {
  components: {
    ImagePreloader
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    var _a, _b, _c;
    return {
      my_follow: Array.isArray((_a = this.user) == null ? void 0 : _a.my_follow) ? (_b = this.user) == null ? void 0 : _b.my_follow.length : !!((_c = this.user) == null ? void 0 : _c.my_follow)
    };
  },
  props: ["user"],
  mounted() {
  },
  methods: {
    follow() {
      axios.post(`${this.mainStore.backendUrl}/api/followers`, {
        user_id: this.user.id
      }, {
        withCredentials: true
      }).then((response) => {
        this.my_follow = response.data.following;
      }).catch((error) => {
        console.error(error);
      });
    }
  }
};
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_image_preloader = vue_cjs_prod.resolveComponent("image-preloader");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "card shadow-sm" }, _attrs))}><div class="card-body p-4"><div class="row gy-3"><div class="col-12 col-sm-3 col-md-2 text-center">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_image_preloader, {
    option: "url_xl",
    image: (_a = $props.user) == null ? void 0 : _a.image,
    aspect: 1,
    class: "shadow-sm",
    style: { "width": "160px", "border-radius": "20%" }
  }, null, _parent));
  _push(`</div><div class="col-12 col-sm-9 col-md-10 text-center text-sm-start"><h1 class="mb-0" style="${serverRenderer.exports.ssrRenderStyle({ "font-weight": "900" })}">${serverRenderer.exports.ssrInterpolate((_b = $props.user) == null ? void 0 : _b.name)}</h1><h6>${serverRenderer.exports.ssrInterpolate("@" + ((_c = $props.user) == null ? void 0 : _c.username))}</h6><span class="d-block">Se unio el 3 de Septiembre del 2021</span><span class="d-block">activo hace 3 horas</span><button class="btn btn-sm btn-primary mt-2">${serverRenderer.exports.ssrInterpolate($data.my_follow ? "Dejar de seguir" : "Seguir")}</button></div></div></div></div>`);
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserHeaderComponent.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const UserHeaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$M]]);
const _sfc_main$$ = {
  components: {
    ImagePreloader
  },
  props: ["pet"]
};
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_image_preloader = vue_cjs_prod.resolveComponent("image-preloader");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "text-center" }, _attrs))} data-v-0b3d99ec>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_image_preloader, {
    image: $props.pet.image,
    class: "pet-item-img shadow",
    aspect: "1"
  }, null, _parent));
  _push(`<span class="d-block mt-2 text-muted" data-v-0b3d99ec><small data-v-0b3d99ec>${serverRenderer.exports.ssrInterpolate($props.pet.name)}</small></span></div>`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pet/PetItemComponent.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const PetItemComponent = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$L], ["__scopeId", "data-v-0b3d99ec"]]);
const __default__$a = {
  components: {
    UserHeaderComponent,
    PetItemComponent
  },
  data() {
    return {};
  },
  mounted() {
  }
};
const _sfc_main$_ = /* @__PURE__ */ Object.assign(__default__$a, {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const mainStore = useMainStore();
    const route = useRoute();
    let user = null;
    let pets = null;
    let result = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchWithCookie(`${mainStore.backendUrl}/api/@${route.params.username}`)), __temp = await __temp, __restore(), __temp);
    user = result.data;
    result = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchWithCookie(`${mainStore.backendUrl}/api/users/${user.id}/pets`)), __temp = await __temp, __restore(), __temp);
    pets = result.data;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (vue_cjs_prod.unref(user)) {
        _push(serverRenderer.exports.ssrRenderComponent(UserHeaderComponent, vue_cjs_prod.mergeProps({ user: vue_cjs_prod.unref(user) }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row gy-4 gx-0 mt-0"><div class="col-12 col-md-7 order-2 order-md-1 text-center"><div style="${serverRenderer.exports.ssrRenderStyle({ "max-width": "460px", "margin": "auto" })}"><div class="card shadow mb-4" style="${serverRenderer.exports.ssrRenderStyle({ "height": "500px" })}"></div><div class="card shadow mb-4" style="${serverRenderer.exports.ssrRenderStyle({ "height": "500px" })}"></div><div class="card shadow mb-4" style="${serverRenderer.exports.ssrRenderStyle({ "height": "500px" })}"></div><div class="card shadow mb-4" style="${serverRenderer.exports.ssrRenderStyle({ "height": "500px" })}"></div><div class="card shadow mb-4" style="${serverRenderer.exports.ssrRenderStyle({ "height": "500px" })}"></div><div class="card shadow mb-4" style="${serverRenderer.exports.ssrRenderStyle({ "height": "500px" })}"></div></div></div><div class="col-12 col-md-5 order-1 order-md-2"><div class="card shadow-sm" style="${serverRenderer.exports.ssrRenderStyle({ "max-height": "400px", "overflow-y": "auto" })}"><div class="card-body p-4"><h1 class="pb-3 fw-bold">${serverRenderer.exports.ssrInterpolate(_ctx.$t("myPets"))}</h1><div class="row gy-3"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(pets), (pet) => {
        _push(`<div class="col-4 col-lg-3">`);
        _push(serverRenderer.exports.ssrRenderComponent(PetItemComponent, { pet }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/UserShowComponent.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const meta$f = {
  layout: "main"
};
const __default__$9 = {
  data() {
    return {
      editor: null,
      page: null
    };
  },
  mounted() {
    axios.get(`${this.mainStore.backendUrl}/api/pages/${this.$route.params.slug}`).then((response) => {
      this.page = response.data;
      const methodUploader = this.uploadByFile;
      this.editor = new this.EditorJS({
        readOnly: false,
        data: JSON.parse(response.data.content),
        tools: {
          header: this.Header,
          image: {
            class: this.ImageTool,
            config: {
              buttonContent: "Escoge una image",
              uploader: {
                uploadByFile: methodUploader
              }
            }
          },
          list: {
            class: this.List,
            inlineToolbar: true
          }
        },
        i18n: {
          messages: {
            ui: {
              blockTunes: {
                toggler: {
                  "Click to tune": "Click para m\xE1s opciones",
                  "or drag to move": "O arrastra para mover"
                }
              },
              inlineToolbar: {
                converter: {
                  "Convert to": "Convertir a"
                }
              },
              toolbar: {
                toolbox: {
                  Add: "Agregar elemento"
                }
              }
            },
            toolNames: {
              Text: "Texto",
              Heading: "Titulo",
              List: "Lista",
              Link: "Enlace",
              Bold: "Negrita",
              Italic: "Italica"
            },
            tools: {
              link: {
                "Add a link": "Agregar enlace"
              },
              stub: {
                "The block can not be displayed correctly.": "El elemento no puede ser mostrado correctamente"
              }
            },
            blockTunes: {
              delete: {
                Delete: "Eliminar"
              },
              moveUp: {
                "Move up": "Subir"
              },
              moveDown: {
                "Move down": "Bajar"
              }
            }
          }
        }
      });
    });
  },
  methods: {
    uploadByFile(file) {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        axios.post(`${this.mainStore.backendUrl}/api/images`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then((response) => {
          resolve({
            success: 1,
            file: {
              url: response.data.url
            }
          });
        }).catch((error) => {
          console.log(error);
          reject(error);
        });
      });
    },
    save() {
      this.editor.save().then((r) => console.log(JSON.stringify(r)));
      this.editor.save().then((r) => {
        axios.patch(`${this.mainStore.backendUrl}/api/pages/${this.page.slug}`, {
          title: this.$refs.title.value,
          slug: this.$refs.slug.value,
          content: JSON.stringify(r)
        });
      });
    }
  }
};
const _sfc_main$Z = /* @__PURE__ */ Object.assign(__default__$9, {
  __ssrInlineRender: true,
  async setup(__props) {
    useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<!--[--><button class="btn btn-primary"> Guardar </button><div class="row"><div class="col-6"><input type="text" placeholder="title"${serverRenderer.exports.ssrRenderAttr("value", (_a = _ctx.page) == null ? void 0 : _a.title)}></div><div class="col-6"><input type="text" placeholder="slug"${serverRenderer.exports.ssrRenderAttr("value", (_b = _ctx.page) == null ? void 0 : _b.slug)}></div></div><div class="card"><div id="editorjs"></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/pages/PageEdit.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const meta$e = {
  layout: "main"
};
const __default__$8 = {
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    const methodUploader = this.uploadByFile;
    this.editor = new this.EditorJS({
      readOnly: false,
      tools: {
        header: this.Header,
        image: {
          class: this.ImageTool,
          config: {
            buttonContent: "Escoge una image",
            uploader: {
              uploadByFile: methodUploader
            }
          }
        },
        list: {
          class: this.List,
          inlineToolbar: true
        }
      },
      i18n: {
        messages: {
          ui: {
            blockTunes: {
              toggler: {
                "Click to tune": "Click para m\xE1s opciones",
                "or drag to move": "O arrastra para mover"
              }
            },
            inlineToolbar: {
              converter: {
                "Convert to": "Convertir a"
              }
            },
            toolbar: {
              toolbox: {
                Add: "Agregar elemento"
              }
            }
          },
          toolNames: {
            Text: "Texto",
            Heading: "Titulo",
            List: "Lista",
            Link: "Enlace",
            Bold: "Negrita",
            Italic: "Italica"
          },
          tools: {
            link: {
              "Add a link": "Agregar enlace"
            },
            stub: {
              "The block can not be displayed correctly.": "El elemento no puede ser mostrado correctamente"
            }
          },
          blockTunes: {
            delete: {
              Delete: "Eliminar"
            },
            moveUp: {
              "Move up": "Subir"
            },
            moveDown: {
              "Move down": "Bajar"
            }
          }
        }
      }
    });
  },
  methods: {
    uploadByFile(file) {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        axios.post(`${this.mainStore.backendUrl}/api/images`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then((response) => {
          resolve({
            success: 1,
            file: {
              url: response.data.url
            }
          });
        }).catch((error) => {
          console.log(error);
          reject(error);
        });
      });
    },
    save() {
      this.editor.save().then((r) => console.log(JSON.stringify(r)));
      this.editor.save().then((r) => {
        axios.post(`${this.mainStore.backendUrl}/api/pages`, {
          title: this.$refs.title.value,
          slug: this.$refs.slug.value,
          content: JSON.stringify(r)
        });
      });
    }
  }
};
const _sfc_main$Y = /* @__PURE__ */ Object.assign(__default__$8, {
  __ssrInlineRender: true,
  async setup(__props) {
    useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><button class="btn btn-primary"> Guardar </button><div class="row"><div class="col-6"><input type="text" placeholder="title"></div><div class="col-6"><input type="text" placeholder="slug"></div></div><div class="card"><div id="editorjs"></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/pages/PageCreate.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const meta$d = {
  layout: "main"
};
const _sfc_main$X = {
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      pages: null
    };
  },
  mounted() {
    axios.get(`${this.mainStore.backendUrl}/api/pages`).then((response) => {
      this.pages = response.data;
    });
  }
};
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  _push(`<!--[--><ol><!--[-->`);
  serverRenderer.exports.ssrRenderList($data.pages, (p) => {
    _push(`<li>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
      to: "/pages/" + p.slug
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${serverRenderer.exports.ssrInterpolate(p.title)}`);
        } else {
          return [
            vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(p.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
      to: "/admin/pages/" + p.slug + "/edit"
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` editar `);
        } else {
          return [
            vue_cjs_prod.createTextVNode(" editar ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ol>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/pages/create",
    class: "btn btn-primary"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Crear `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Crear ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/pages/PagesList.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const PagesList = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$K]]);
const meta$c = {
  layout: "main"
};
const _sfc_main$W = {
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      punishments: [
        {
          time: 1,
          title: "Un d\xEDa"
        },
        {
          time: 3,
          title: "Tres d\xEDas"
        },
        {
          time: 7,
          title: "Una semana"
        },
        {
          time: 14,
          title: "Dos semanas"
        },
        {
          time: 30,
          title: "Un mes"
        },
        {
          time: 365,
          title: "Un a\xF1o"
        }
      ]
    };
  },
  emits: ["close"],
  inject: ["postId"],
  methods: {
    sendReport() {
      const formData = new FormData(this.$refs.form);
      formData.append("user_id", this.mainStore.userLogged.id);
      console.log(formData);
      axios.post(`${this.mainStore.backendUrl}/api/admin/punishments`, formData).then((response) => {
        this.close();
      });
    },
    close() {
      this.$emit("close");
    }
  }
};
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  serverRenderer.exports.ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div class="post-modal" data-v-56a4be08><div class="card shadow p-4" data-v-56a4be08><h3 data-v-56a4be08>Aplicar castigo</h3><form data-v-56a4be08><!--[-->`);
    serverRenderer.exports.ssrRenderList($data.punishments, (p) => {
      _push2(`<div class="form-check" data-v-56a4be08><input class="form-check-input" type="radio" name="time"${serverRenderer.exports.ssrRenderAttr("value", p.time)}${serverRenderer.exports.ssrRenderAttr("id", "radio" + p.time)} data-v-56a4be08><label class="form-check-label"${serverRenderer.exports.ssrRenderAttr("for", "radio" + p.time)} data-v-56a4be08>${serverRenderer.exports.ssrInterpolate(p.title)}</label></div>`);
    });
    _push2(`<!--]--><div class="row" data-v-56a4be08><div class="col" data-v-56a4be08><button type="button" class="btn btn-secondary" data-v-56a4be08> Cancelar </button></div><div class="col" data-v-56a4be08><button type="submit" class="btn btn-primary" data-v-56a4be08> Aplicar castigo </button></div></div></form></div></div>`);
  }, "body", false, _parent);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/reports/ApplyPunishment.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const ApplyPunishment = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$J], ["__scopeId", "data-v-56a4be08"]]);
const _sfc_main$V = {
  components: {
    ImagePreloader,
    ApplyPunishment
  },
  data() {
    return {
      applyPunishment: false
    };
  },
  props: ["post"]
};
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_image_preloader = vue_cjs_prod.resolveComponent("image-preloader");
  const _component_ApplyPunishment = vue_cjs_prod.resolveComponent("ApplyPunishment");
  _push(`<!--[--><div class="card"><div class="card-body"><strong>${serverRenderer.exports.ssrInterpolate($props.post.reports[0].user.name)}</strong> report\xF3 la publicaci\xF3n de <strong>${serverRenderer.exports.ssrInterpolate($props.post.user.name)}</strong> por <strong>${serverRenderer.exports.ssrInterpolate($props.post.reports[0].report_type.title)}</strong><hr><div class="row"><div class="col-auto">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_image_preloader, {
    image: $props.post.simple_post.image.url_lg,
    class: "shadow",
    style: { "width": "150px" },
    aspect: "1"
  }, null, _parent));
  _push(`</div><div class="col"><p><i>&quot;${serverRenderer.exports.ssrInterpolate($props.post.simple_post.description)}&quot;</i></p><button class="btn btn-primary mx-2"> Ver publicaci\xF3n </button><button class="btn btn-primary mx-2"> Aplicar castigo </button></div></div></div></div><br>`);
  if ($data.applyPunishment === true) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ApplyPunishment, _attrs, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/reports/ReportedPostItem.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const ReportedPostItem = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$I]]);
const _sfc_main$U = {
  components: {
    ReportedPostItem
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      postsPaginate: null
    };
  },
  mounted() {
    axios.get(`${this.mainStore.backendUrl}/api/admin/reports/posts`).then((response) => {
      this.postsPaginate = response.data;
      console.log(response.data);
    });
  }
};
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_ReportedPostItem = vue_cjs_prod.resolveComponent("ReportedPostItem");
  _push(`<!--[-->`);
  serverRenderer.exports.ssrRenderList((_a = $data.postsPaginate) == null ? void 0 : _a.data, (post) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ReportedPostItem, {
      key: post.id,
      post
    }, null, _parent));
  });
  _push(`<!--]-->`);
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/reports/ReportedPostsList.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const ReportedPostsList = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$H]]);
const meta$b = {
  layout: "main"
};
axios.defaults.withCredentials = true;
const _sfc_main$T = {
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  methods: {
    guardarReporte() {
      if (!this.$refs.title.value || !this.$refs.description.value) {
        alert("no se permiten campos vacios");
        return;
      }
      const formData = new FormData();
      formData.append("title", this.$refs.title.value);
      formData.append("description", this.$refs.description.value);
      axios.post(`${this.mainStore.backendUrl}/api/admin/reports/types`, formData).then((response) => {
        this.$router.replace({ path: "/admin/reports/types" });
      }).catch((e) => {
        console.log(e);
      });
    }
  }
};
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><input type="text"><textarea cols="30" rows="10"></textarea><button class="btn btn-primary"> Guardar </button><!--]-->`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/reports/CreateReportType.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const CreateReportType = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$G]]);
const meta$a = {
  layout: "main"
};
const _sfc_main$S = {
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      reportsPaginate: null
    };
  },
  mounted() {
    axios.get(`${this.mainStore.backendUrl}/api/admin/reports/types`).then((response) => {
      this.reportsPaginate = response.data;
    });
  }
};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_NuxtLink = __nuxt_component_0$4;
  _push(`<!--[-->`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/reports/types/create",
    class: "btn btn-primary"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Crear reporte `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Crear reporte ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` lista de reportes <ol><!--[-->`);
  serverRenderer.exports.ssrRenderList((_a = $data.reportsPaginate) == null ? void 0 : _a.data, (report) => {
    _push(`<li>${serverRenderer.exports.ssrInterpolate(report.title)}</li>`);
  });
  _push(`<!--]--></ol><!--]-->`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/reports/ReportTypesList.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const ReportTypesList = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$F]]);
const meta$9 = {
  layout: "main"
};
const _sfc_main$R = {
  props: ["user"]
};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  _push(`<tr${serverRenderer.exports.ssrRenderAttrs(_attrs)}><td>${serverRenderer.exports.ssrInterpolate($props.user.id)}</td><td><img${serverRenderer.exports.ssrRenderAttr("src", $props.user.image.url_xs)} width="40" height="40" alt=""></td><td>${serverRenderer.exports.ssrInterpolate($props.user.name)}</td><td>${serverRenderer.exports.ssrInterpolate($props.user.username)}</td><td>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: $props.user.url
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${serverRenderer.exports.ssrInterpolate($props.user.url)}`);
      } else {
        return [
          vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString($props.user.url), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>${serverRenderer.exports.ssrInterpolate(_ctx.$t("timeAgo", { date: $props.user.created_at }))}</td></tr>`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/UserItem.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const UserItem = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$E]]);
const _sfc_main$Q = {
  components: {
    UserItem
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      usersPaginate: null
    };
  },
  mounted() {
    axios.get(`${this.mainStore.backendUrl}/api/admin/users`).then((response) => {
      this.usersPaginate = response.data;
    });
  }
};
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_UserItem = vue_cjs_prod.resolveComponent("UserItem");
  _push(`<!--[--> users vistos por el admin <table border="1"><tr><td><strong>id</strong></td><td><strong>perfil</strong></td><td><strong>nombre</strong></td><td><strong>nombre de usuario</strong></td><td><strong>url</strong></td><td><strong>fecha de creacion</strong></td></tr><!--[-->`);
  serverRenderer.exports.ssrRenderList((_a = $data.usersPaginate) == null ? void 0 : _a.data, (user) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_UserItem, {
      key: user.username,
      user
    }, null, _parent));
  });
  _push(`<!--]--></table><div class="loading-container"><div class="loading-point"></div><div class="loading-point"></div><div class="loading-point"></div></div><!--]-->`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/UsersList.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const UsersList = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$D]]);
const meta$8 = {
  layout: "main"
};
const _sfc_main$P = {
  mounted() {
    document.body.style.overflow = "hidden";
  },
  unmounted() {
    document.body.style.overflow = null;
  },
  props: ["hideButtons"],
  emits: ["cancel", "ok"]
};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  serverRenderer.exports.ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div class="modal-container" data-v-41ef62b3><div class="modal-background" data-v-41ef62b3></div><div class="card shadow p-3" data-v-41ef62b3><h3 data-v-41ef62b3>`);
    serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent);
    _push2(`</h3>`);
    serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
    if (!$props.hideButtons) {
      _push2(`<div class="row" data-v-41ef62b3><div class="col text-center" data-v-41ef62b3><button class="btn btn-secondary" data-v-41ef62b3>`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "cancel", {}, null, _push2, _parent);
      _push2(`</button></div><div class="col text-center" data-v-41ef62b3><button class="btn btn-primary" data-v-41ef62b3>`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "ok", {}, null, _push2, _parent);
      _push2(`</button></div></div>`);
    } else {
      _push2(`<!---->`);
    }
    _push2(`</div></div>`);
  }, "body", false, _parent);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CustomModal.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$C], ["__scopeId", "data-v-41ef62b3"]]);
const _sfc_main$O = {
  components: {
    CustomModal: __nuxt_component_0$3
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {};
  },
  emits: ["close"],
  inject: ["postId"],
  methods: {
    eliminarPost() {
      this.mainStore.deletePost(this.postId).then(() => {
        this.close();
      });
    },
    close() {
      this.$emit("close");
    }
  }
};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CustomModal = __nuxt_component_0$3;
  _push(serverRenderer.exports.ssrRenderComponent(_component_CustomModal, _attrs, {
    title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \xBFEliminar publicaci\xF3n? `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" \xBFEliminar publicaci\xF3n? ")
        ];
      }
    }),
    cancel: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cancelar `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Cancelar ")
        ];
      }
    }),
    ok: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Aceptar `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Aceptar ")
        ];
      }
    }),
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\xBFEsta seguro que desea eliminar esta publicaci\xF3n?</p>`);
      } else {
        return [
          vue_cjs_prod.createVNode("p", null, "\xBFEsta seguro que desea eliminar esta publicaci\xF3n?")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/posts/DeletePostDialog.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const DeletePostDialog = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$B]]);
const _sfc_main$N = {
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      reportsPaginate: null
    };
  },
  mounted() {
    axios.get(`${this.mainStore.backendUrl}/api/admin/reports/types`).then((response) => {
      this.reportsPaginate = response.data;
    });
  },
  emits: ["close"],
  inject: ["postId"],
  methods: {
    sendReport() {
      const formData = new FormData(this.$refs.form);
      formData.append("post_id", this.postId);
      formData.append("user_id", this.mainStore.userLogged.id);
      console.log(formData);
      axios.post(`${this.mainStore.backendUrl}/api/admin/reports`, formData).then((response) => {
        this.close();
      });
    },
    close() {
      this.$emit("close");
    }
  }
};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  serverRenderer.exports.ssrRenderTeleport(_push, (_push2) => {
    var _a;
    _push2(`<div class="post-modal" data-v-6f0b010c><div class="card shadow p-4" data-v-6f0b010c><h3 data-v-6f0b010c>\xBFReportar publicaci\xF3n?</h3><form data-v-6f0b010c><!--[-->`);
    serverRenderer.exports.ssrRenderList((_a = $data.reportsPaginate) == null ? void 0 : _a.data, (report) => {
      _push2(`<label class="d-block" data-v-6f0b010c><input type="radio" name="report_type_id"${serverRenderer.exports.ssrRenderAttr("value", report.id)} data-v-6f0b010c> ${serverRenderer.exports.ssrInterpolate(report.title)}</label>`);
    });
    _push2(`<!--]--><textarea class="form-control my-3" name="details" id="" cols="30" rows="4" placeholder="Detalles" data-v-6f0b010c></textarea><p class="text-center" data-v-6f0b010c><small data-v-6f0b010c> Reportar esta publicaci\xF3n para que <br data-v-6f0b010c> el administrador de Gattitus la revise </small></p><div class="row" data-v-6f0b010c><div class="col" data-v-6f0b010c><button type="button" class="btn btn-secondary" data-v-6f0b010c> Cancelar </button></div><div class="col" data-v-6f0b010c><button type="submit" class="btn btn-primary" data-v-6f0b010c> Enviar reporte </button></div></div></form></div></div>`);
  }, "body", false, _parent);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/posts/ReportPostDialog.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const ReportPostDialog = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$A], ["__scopeId", "data-v-6f0b010c"]]);
const _sfc_main$M = {
  components: {
    DeletePostDialog,
    ReportPostDialog
  },
  data() {
    return {
      deletePostDialog: false,
      reportPostDialog: false
    };
  },
  props: ["postId"],
  provide: ["postId"]
};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  const _component_delete_post_dialog = vue_cjs_prod.resolveComponent("delete-post-dialog");
  const _component_ReportPostDialog = vue_cjs_prod.resolveComponent("ReportPostDialog");
  _push(`<!--[--><ul class="dropdown-menu dropdown-menu-end shadow p-2" data-v-7c46fee2><li data-v-7c46fee2>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    class: "list-group-item border-0",
    to: "/posts/" + $props.postId
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16" data-v-7c46fee2${_scopeId}><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" data-v-7c46fee2${_scopeId}></path></svg> ${serverRenderer.exports.ssrInterpolate(_ctx.$t("seePost"))}`);
      } else {
        return [
          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            class: "bi bi-arrow-up-right-square",
            viewBox: "0 0 16 16"
          }, [
            vue_cjs_prod.createVNode("path", {
              "fill-rule": "evenodd",
              d: "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
            })
          ])),
          vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString(_ctx.$t("seePost")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-7c46fee2>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    class: "list-group-item border-0",
    to: "/posts/" + $props.postId + "/edit"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" data-v-7c46fee2${_scopeId}><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" data-v-7c46fee2${_scopeId}></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" data-v-7c46fee2${_scopeId}></path></svg> Editar publicacion `);
      } else {
        return [
          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            class: "bi bi-pencil-square",
            viewBox: "0 0 16 16"
          }, [
            vue_cjs_prod.createVNode("path", { d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" }),
            vue_cjs_prod.createVNode("path", {
              "fill-rule": "evenodd",
              d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            })
          ])),
          vue_cjs_prod.createTextVNode(" Editar publicacion ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="list-group-item border-0" role="button" data-v-7c46fee2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" data-v-7c46fee2><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" data-v-7c46fee2></path></svg> Eliminar publicaci\xF3n </li><li class="list-group-item border-0" role="button" data-v-7c46fee2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" data-v-7c46fee2><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" data-v-7c46fee2></path></svg> Reportar publicaci\xF3n </li></ul>`);
  if ($data.deletePostDialog) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_delete_post_dialog, _attrs, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.reportPostDialog) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ReportPostDialog, _attrs, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/posts/PostMenu.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const PostMenu = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$z], ["__scopeId", "data-v-7c46fee2"]]);
const _sfc_main$L = {
  components: {
    ImagePreloader,
    Popper
  },
  props: {
    pet: Object
  }
};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Popper = vue_cjs_prod.resolveComponent("Popper");
  const _component_ImagePreloader = vue_cjs_prod.resolveComponent("ImagePreloader");
  const _component_NuxtLink = __nuxt_component_0$4;
  _push(serverRenderer.exports.ssrRenderComponent(_component_Popper, vue_cjs_prod.mergeProps({
    arrow: "",
    placement: "top",
    class: "popper-activator"
  }, _attrs), {
    content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="pet-card-popper m-3"${_scopeId}><div class="row g-2"${_scopeId}><div class="col-auto"${_scopeId}>`);
        _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: "/pets/" + $props.pet.slug
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.exports.ssrRenderComponent(_component_ImagePreloader, {
                option: "url_lg",
                image: $props.pet.image,
                aspect: 1,
                class: "shadow-sm rounded-5 pet-icon-popper"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_ImagePreloader, {
                  option: "url_lg",
                  image: $props.pet.image,
                  aspect: 1,
                  class: "shadow-sm rounded-5 pet-icon-popper"
                }, null, 8, ["image"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col"${_scopeId}>`);
        _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: "/pets/" + $props.pet.slug,
          class: "text-decoration-none"
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h3 class="mb-0"${_scopeId2}><strong${_scopeId2}>${serverRenderer.exports.ssrInterpolate($props.pet.name)}</strong></h3>`);
            } else {
              return [
                vue_cjs_prod.createVNode("h3", { class: "mb-0" }, [
                  vue_cjs_prod.createVNode("strong", null, vue_cjs_prod.toDisplayString($props.pet.name), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<h6 class="mb-0"${_scopeId}>${serverRenderer.exports.ssrInterpolate($props.pet.nickname)}</h6></div></div>`);
        _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: "/pets/" + $props.pet.slug,
          class: "btn btn-primary mt-2"
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Ver m\xE1s fotos `);
            } else {
              return [
                vue_cjs_prod.createTextVNode(" Ver m\xE1s fotos ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("div", { class: "pet-card-popper m-3" }, [
            vue_cjs_prod.createVNode("div", { class: "row g-2" }, [
              vue_cjs_prod.createVNode("div", { class: "col-auto" }, [
                vue_cjs_prod.createVNode(_component_NuxtLink, {
                  to: "/pets/" + $props.pet.slug
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode(_component_ImagePreloader, {
                      option: "url_lg",
                      image: $props.pet.image,
                      aspect: 1,
                      class: "shadow-sm rounded-5 pet-icon-popper"
                    }, null, 8, ["image"])
                  ]),
                  _: 1
                }, 8, ["to"])
              ]),
              vue_cjs_prod.createVNode("div", { class: "col" }, [
                vue_cjs_prod.createVNode(_component_NuxtLink, {
                  to: "/pets/" + $props.pet.slug,
                  class: "text-decoration-none"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode("h3", { class: "mb-0" }, [
                      vue_cjs_prod.createVNode("strong", null, vue_cjs_prod.toDisplayString($props.pet.name), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["to"]),
                vue_cjs_prod.createVNode("h6", { class: "mb-0" }, vue_cjs_prod.toDisplayString($props.pet.nickname), 1)
              ])
            ]),
            vue_cjs_prod.createVNode(_component_NuxtLink, {
              to: "/pets/" + $props.pet.slug,
              class: "btn btn-primary mt-2"
            }, {
              default: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createTextVNode(" Ver m\xE1s fotos ")
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ];
      }
    }),
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_ImagePreloader, {
          option: "url_lg",
          image: $props.pet.image,
          aspect: 1,
          class: "shadow-sm pet-icon"
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_ImagePreloader, {
            option: "url_lg",
            image: $props.pet.image,
            aspect: 1,
            class: "shadow-sm pet-icon"
          }, null, 8, ["image"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/posts/PetIconItem.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const PetIconItem = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$y]]);
const _sfc_main$K = {
  components: { PetIconItem },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  props: ["pets", "pets_count"]
};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PetIconItem = vue_cjs_prod.resolveComponent("PetIconItem");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "row" }, _attrs))}><div class="col"></div><div class="col-auto position-relative"><small class="text-muted me-2">Gatos que aparecen en esta publicaci\xF3n</small><!--[-->`);
  serverRenderer.exports.ssrRenderList($props.pets, (c) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_PetIconItem, {
      key: c.id,
      pet: c
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/posts/PetIconList.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const PetIconList = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$x]]);
const _sfc_main$J = {
  components: {
    CustomModal: __nuxt_component_0$3,
    ImagePreloader
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      reactions: [],
      reactionsPaginator: null,
      loadingMore: true
    };
  },
  props: ["url"],
  emits: ["close"],
  mounted() {
    this.getReactions(this.url);
    this.addScrollListener();
  },
  beforeUnmount() {
    this.removeScrollListener();
  },
  methods: {
    addScrollListener() {
      this.$refs.scroller.addEventListener("scroll", this.onScroll);
    },
    removeScrollListener() {
      this.$refs.scroller.removeEventListener("scroll", this.onScroll);
    },
    onScroll() {
      const pixelsToBottom = this.$refs.scroller.scrollHeight - (this.$refs.scroller.clientHeight + this.$refs.scroller.scrollTop);
      if (pixelsToBottom < 200) {
        this.loadMore();
      }
    },
    loadMore() {
      if (this.loadingMore) {
        return;
      }
      this.loadingMore = true;
      if (!this.reactionsPaginator.next) {
        console.log("ya no hay mas, desactivar listener");
        this.removeScrollListener();
        this.loadingMore = false;
        return;
      }
      console.log("cargando mas...");
      this.getReactions(this.reactionsPaginator.next);
    },
    getReactions(url) {
      axios.get(`${url}`).then((response) => {
        this.reactionsPaginator = response.data.links;
        this.reactions = this.reactions.concat(response.data.data);
        this.loadingMore = false;
      });
    }
  }
};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CustomModal = __nuxt_component_0$3;
  const _component_NuxtLink = __nuxt_component_0$4;
  const _component_ImagePreloader = vue_cjs_prod.resolveComponent("ImagePreloader");
  _push(serverRenderer.exports.ssrRenderComponent(_component_CustomModal, vue_cjs_prod.mergeProps({ "hide-buttons": true }, _attrs), {
    title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Reacciones `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Reacciones ")
        ];
      }
    }),
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${serverRenderer.exports.ssrRenderStyle({ "max-height": "80vh", "overflow-y": "auto" })}" class="custom-scroll"${_scopeId}><!--[-->`);
        serverRenderer.exports.ssrRenderList($data.reactions, (r) => {
          _push2(`<div class="my-1"${_scopeId}>`);
          _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
            to: r.user.url,
            role: "button"
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.exports.ssrRenderComponent(_component_ImagePreloader, {
                  image: r.user.image,
                  class: "shadow rounded-5",
                  aspect: 1,
                  style: { "width": "40px" }
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  vue_cjs_prod.createVNode(_component_ImagePreloader, {
                    image: r.user.image,
                    class: "shadow rounded-5",
                    aspect: 1,
                    style: { "width": "40px" }
                  }, null, 8, ["image"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
            to: r.user.url,
            class: "text-decoration-none text-dark ms-2",
            role: "button"
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${serverRenderer.exports.ssrInterpolate(r.user.name)}`);
              } else {
                return [
                  vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(r.user.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("div", {
            style: { "max-height": "80vh", "overflow-y": "auto" },
            class: "custom-scroll",
            ref: "scroller"
          }, [
            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList($data.reactions, (r) => {
              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                key: r.id,
                class: "my-1"
              }, [
                vue_cjs_prod.createVNode(_component_NuxtLink, {
                  to: r.user.url,
                  role: "button"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode(_component_ImagePreloader, {
                      image: r.user.image,
                      class: "shadow rounded-5",
                      aspect: 1,
                      style: { "width": "40px" }
                    }, null, 8, ["image"])
                  ]),
                  _: 2
                }, 1032, ["to"]),
                vue_cjs_prod.createVNode(_component_NuxtLink, {
                  to: r.user.url,
                  class: "text-decoration-none text-dark ms-2",
                  role: "button"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(r.user.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]);
            }), 128))
          ], 512)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShowReactionsDialog.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$w]]);
const _sfc_main$I = {
  components: {
    ShowReactionsDialog: __nuxt_component_0$2
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      reactioning: false,
      showReactions: false
    };
  },
  props: ["myReaction", "id", "reactionsCount", "commentsCount"],
  emits: ["react"],
  methods: {
    react() {
      if (this.reactioning) {
        return;
      }
      this.reactioning = true;
      axios.post(`${this.mainStore.backendUrl}/api/posts/${this.id}/reactions`, null, {
        withCredentials: true
      }).then((response) => {
        this.$emit("react", response.data);
      }).finally(() => {
        this.reactioning = false;
      });
    }
  }
};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  const _component_ShowReactionsDialog = __nuxt_component_0$2;
  _push(`<!--[--><div class="row g-0 py-2"><div class="col text-center" role="button"><span class="text-muted">${serverRenderer.exports.ssrInterpolate($props.reactionsCount)} Reacciones</span></div><div class="col text-center">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/posts/" + $props.id,
    class: "text-muted text-decoration-none",
    role: "button"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${serverRenderer.exports.ssrInterpolate($props.commentsCount)} Comentarios `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString($props.commentsCount) + " Comentarios ", 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><hr class="my-0" style="${serverRenderer.exports.ssrRenderStyle({ "opacity": "0.1" })}"><div class="row text-secondary g-0 fw-bold" role="button" style="${serverRenderer.exports.ssrRenderStyle({ "user-select": "none", "font-size": "14px" })}"><div class="col"><div class="${serverRenderer.exports.ssrRenderClass([{ "text-primary": $props.myReaction }, "text-center py-3 guide-3"])}">`);
  if ($props.myReaction) {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path></svg>`);
  } else {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path></svg>`);
  }
  _push(` Me encanta </div></div><div class="col text-center py-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path></svg> Comentar </div>`);
  if ($data.showReactions) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ShowReactionsDialog, {
      url: $setup.mainStore.backendUrl + "/api/posts/" + $props.id + "/reactions"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--]-->`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/posts/ReactAndCommentButtons.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const ReactAndCommentButtons = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$v]]);
const _sfc_main$H = {
  components: {
    CustomModal: __nuxt_component_0$3
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  props: ["comment"],
  emits: ["close", "commentDeleted", "contadorActualizado"],
  methods: {
    deleteComment() {
      axios.delete(`${this.mainStore.backendUrl}/api/comments/${this.comment.id}`).then((response) => {
        this.$emit("contadorActualizado", response.data.comments_count);
      }).then(() => {
        this.$emit("commentDeleted", this.comment.id);
      }).then(() => {
        this.$emit("close");
      });
    }
  }
};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CustomModal = __nuxt_component_0$3;
  _push(serverRenderer.exports.ssrRenderComponent(_component_CustomModal, _attrs, {
    title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Eliminar comentario `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Eliminar comentario ")
        ];
      }
    }),
    cancel: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cancelar `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Cancelar ")
        ];
      }
    }),
    ok: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Eliminar `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Eliminar ")
        ];
      }
    }),
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\xBFDesea eliminar este comentario?</p>`);
      } else {
        return [
          vue_cjs_prod.createVNode("p", null, "\xBFDesea eliminar este comentario?")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comments/DeleteCommentDialog.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const DeleteCommentDialog = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$u]]);
const _sfc_main$G = {
  components: {
    CustomModal: __nuxt_component_0$3
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  props: ["comment"],
  emits: ["close", "commentEdited"],
  methods: {
    editComment() {
      const texto = new DOMParser().parseFromString(this.$refs.textarea.innerHTML.replaceAll("<br>", "\n").replaceAll("<div>", "\n<div>"), "text/html").documentElement.textContent;
      axios.patch(`${this.mainStore.backendUrl}/api/comments/${this.comment.id}`, {
        description: texto
      }).then(() => {
        this.$emit("commentEdited", {
          id: this.comment.id,
          description: texto
        });
      }).then(() => {
        this.$emit("close");
      });
    }
  }
};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CustomModal = __nuxt_component_0$3;
  _push(serverRenderer.exports.ssrRenderComponent(_component_CustomModal, _attrs, {
    title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Editar comentario `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Editar comentario ")
        ];
      }
    }),
    cancel: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cancelar `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Cancelar ")
        ];
      }
    }),
    ok: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Guardar `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Guardar ")
        ];
      }
    }),
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="contenedorTextarea mb-3" data-v-31c2e609${_scopeId}><span class="textarea text-break" contenteditable data-v-31c2e609${_scopeId}>${serverRenderer.exports.ssrInterpolate($props.comment.description)}</span></div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("div", { class: "contenedorTextarea mb-3" }, [
            vue_cjs_prod.createVNode("span", {
              class: "textarea text-break",
              contenteditable: "",
              ref: "textarea",
              onKeydown: _ctx.onKeyDown
            }, vue_cjs_prod.toDisplayString($props.comment.description), 41, ["onKeydown"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comments/EditCommentDialog.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const EditCommentDialog = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$t], ["__scopeId", "data-v-31c2e609"]]);
const _sfc_main$F = {
  components: {
    ImagePreloader,
    DeleteCommentDialog,
    EditCommentDialog,
    ShowReactionsDialog: __nuxt_component_0$2
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      miLike: false,
      contador: 0,
      showLikes: false,
      showDeleteCommentDialog: false,
      showEditCommentDialog: false,
      showReactions: false
    };
  },
  props: ["comentario", "postId", "hideOptions"],
  emits: ["commentDeleted", "commentEdited", "contadorActualizado"],
  mounted() {
    this.miLike = this.comentario.my_reaction;
    this.contador = this.comentario.reactions_count;
  },
  methods: {
    like() {
      axios.post(`${this.mainStore.backendUrl}/api/comments/${this.comentario.id}/reactions`).then((response) => {
        this.miLike = response.data.own_reaction;
        this.contador = response.data.reactions_count;
      }).catch((response) => {
        console.log(response.data);
      });
    },
    contadorActualizado(c) {
      this.$emit("contadorActualizado", c);
    },
    commentDeleted(id) {
      this.$emit("commentDeleted", id);
    },
    commentEdited(c) {
      this.$emit("commentEdited", c);
    }
  },
  computed: {
    userLogged() {
      var _a;
      return (_a = this.mainStore) == null ? void 0 : _a.userLogged;
    }
  }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_image_preloader = vue_cjs_prod.resolveComponent("image-preloader");
  const _component_DeleteCommentDialog = vue_cjs_prod.resolveComponent("DeleteCommentDialog");
  const _component_EditCommentDialog = vue_cjs_prod.resolveComponent("EditCommentDialog");
  const _component_ShowReactionsDialog = __nuxt_component_0$2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "py-1" }, _attrs))} data-v-80099c18><div class="row g-0" data-v-80099c18><div class="col col-auto py-1" data-v-80099c18><a${serverRenderer.exports.ssrRenderAttr("href", $props.comentario.user.url)} data-v-80099c18>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_image_preloader, {
    image: $props.comentario.user.image,
    aspect: "1",
    class: "imagen-usuario shadow"
  }, null, _parent));
  _push(`</a></div><div class="col ps-2 pt-1" data-v-80099c18><span class="text-break" style="${serverRenderer.exports.ssrRenderStyle({ "font-size": "15px" })}" data-v-80099c18><a${serverRenderer.exports.ssrRenderAttr("href", $props.comentario.user.url)} class="text-dark text-decoration-none d-block mb-1" data-v-80099c18><span class="fw-bold" data-v-80099c18>${serverRenderer.exports.ssrInterpolate($props.comentario.user.name)}</span><span style="${serverRenderer.exports.ssrRenderStyle({ "color": "#bbb" })}" data-v-80099c18> @${serverRenderer.exports.ssrInterpolate($props.comentario.user.username)}</span></a><p class="m-0" style="${serverRenderer.exports.ssrRenderStyle({ "color": "#777" })}" data-v-80099c18>${serverRenderer.exports.ssrInterpolate($props.comentario.description)}</p>`);
  if ($props.comentario.gif_url) {
    _push(`<div class="position-relative" data-v-80099c18><img${serverRenderer.exports.ssrRenderAttr("src", $props.comentario.gif_url)} class="img-fluid shadow-sm" style="${serverRenderer.exports.ssrRenderStyle({ "border-radius": "10px", "height": "120px" })}" data-v-80099c18><span class="px-1 rounded position-absolute bottom-0 start-0 m-1" style="${serverRenderer.exports.ssrRenderStyle({ "background-color": "rgba(255,255,255,0.4)" })}" data-v-80099c18><img src="https://www.gstatic.com/tenor/web/attribution/via_tenor_logo_grey.png" style="${serverRenderer.exports.ssrRenderStyle({ "filter": "drop-shadow(1px 1px 2px rgba(255, 255, 255, 1))" })}" width="50" data-v-80099c18></span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><div class="mb-1 pt-2 text-muted" style="${serverRenderer.exports.ssrRenderStyle({ "font-size": "13px" })}" data-v-80099c18>`);
  if ($options.userLogged) {
    _push(`<span role="button" class="${serverRenderer.exports.ssrRenderClass([{ "text-primary": $data.miLike }, "fw-bold"])}" data-v-80099c18>${serverRenderer.exports.ssrInterpolate(_ctx.$t("like"))}</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.userLogged && $data.contador) {
    _push(`<span data-v-80099c18> \xB7</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.contador) {
    _push(`<span class="fw-bold px-1" role="button" data-v-80099c18>${serverRenderer.exports.ssrInterpolate($data.contador)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.userLogged || $data.contador) {
    _push(`<span class="ms-3" data-v-80099c18></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span data-v-80099c18>${serverRenderer.exports.ssrInterpolate(_ctx.$t("timeAgo", { date: $props.comentario.created_at }))}</span></div></div>`);
  if (!$props.hideOptions && $options.userLogged && $options.userLogged.id == $props.comentario.user.id) {
    _push(`<div class="col col-auto" data-v-80099c18><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="py-3 px-2" style="${serverRenderer.exports.ssrRenderStyle({ "width": "32px", "color": "#888" })}" viewBox="0 0 16 16" data-bs-toggle="dropdown" aria-expanded="false" data-v-80099c18><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" data-v-80099c18></path></svg><ul class="dropdown-menu dropdown-menu-end shadow" data-v-80099c18><li data-v-80099c18><button class="dropdown-item" type="button" data-v-80099c18><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" data-v-80099c18><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" data-v-80099c18></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" data-v-80099c18></path></svg> ${serverRenderer.exports.ssrInterpolate(_ctx.$t("editComment"))}</button></li><li data-v-80099c18><button class="dropdown-item" type="button" data-v-80099c18><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" data-v-80099c18><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" data-v-80099c18></path></svg> ${serverRenderer.exports.ssrInterpolate(_ctx.$t("deleteComment"))}</button></li></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.showDeleteCommentDialog) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_DeleteCommentDialog, { comment: $props.comentario }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.showEditCommentDialog) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_EditCommentDialog, { comment: $props.comentario }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.showReactions) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ShowReactionsDialog, {
      url: $setup.mainStore.backendUrl + "/api/comments/" + $props.comentario.id + "/reactions"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comments/ComentarioComponent.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const ComentarioComponent = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$s], ["__scopeId", "data-v-80099c18"]]);
const _sfc_main$E = {
  props: ["img", "postId"]
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "p-1" }, _attrs))}><img${serverRenderer.exports.ssrRenderAttr("src", $props.img.url)} class="w-100" style="${serverRenderer.exports.ssrRenderStyle([{ aspectRatio: $props.img.dims[0] / $props.img.dims[1] }, { "border-radius": "5px" }])}"></div>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comments/GifSearchedComponent.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const GifSearchedComponent = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$r]]);
const sharedData = {
  gifs: [],
  yaCargoElPrimerComponente: false
};
const __default__$7 = {
  components: {
    GifSearchedComponent,
    Popper
  },
  data() {
    return {
      gifs: [],
      timeOut: null,
      textoEscrito: "",
      showDialog: null
    };
  },
  props: ["postId"],
  mounted() {
  },
  emits: ["gifSeleccionado"],
  methods: {
    onDialogShown() {
      this.$refs.input.focus();
      if (!sharedData.yaCargoElPrimerComponente) {
        sharedData.yaCargoElPrimerComponente = true;
        this.cargarDefaultGifs();
      } else if (this.gifs.length === 0) {
        this.gifs = sharedData.gifs;
      }
    },
    cargarDefaultGifs() {
      this.obtenerGifsTenor("gato alegre");
    },
    escribir() {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        const texto = this.$refs.input.value.trim();
        if (texto !== this.textoEscrito) {
          this.textoEscrito = texto;
          this.buscarGifs();
        }
      }, 1e3);
    },
    buscarGifs() {
      this.obtenerGifsTenor(this.textoEscrito);
    },
    obtenerGifsTenor(texto) {
      axios.get(`https://g.tenor.com/v1/search?q=${texto}&key=L8942WRVS35R&limit=20&media_filter=basic&locale=es_PE&ar_range=standard`, { withCredentials: false }).then((response) => {
        this.gifs = response.data.results;
        sharedData.gifs = response.data.results;
      }).then(() => {
        const msnry = new this.Masonry("#masonry-gifs-row" + this.postId, {
          percentPosition: true
        });
        msnry.reloadItems();
        msnry.layout();
      });
    },
    imprimir(url) {
      this.$emit("gifSeleccionado", url);
      this.showDialog = false;
    }
  }
};
const _sfc_main$D = /* @__PURE__ */ Object.assign(__default__$7, {
  __ssrInlineRender: true,
  async setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Popper), vue_cjs_prod.mergeProps({
        arrow: "",
        show: _ctx.showDialog,
        placement: "top"
      }, _attrs), {
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="contenedorGifs" data-v-b69e47f6${_scopeId}><div class="contenedorInput" data-v-b69e47f6${_scopeId}><input type="text"${serverRenderer.exports.ssrRenderAttr("placeholder", _ctx.$t("search"))} data-v-b69e47f6${_scopeId}></div><div style="${serverRenderer.exports.ssrRenderStyle({ "height": "344px", "overflow": "auto" })}" data-v-b69e47f6${_scopeId}><div class="row g-0"${serverRenderer.exports.ssrRenderAttr("id", ["masonry-gifs-row" + __props.postId])} data-v-b69e47f6${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(_ctx.gifs, (gif) => {
              _push2(`<div class="col-6" style="${serverRenderer.exports.ssrRenderStyle({ aspectRatio: gif.media[0].nanogif.dims[0] / gif.media[0].nanogif.dims[1] })}" data-v-b69e47f6${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(GifSearchedComponent, {
                "post-id": __props.postId,
                img: gif.media[0].nanogif
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "contenedorGifs" }, [
                vue_cjs_prod.createVNode("div", { class: "contenedorInput" }, [
                  vue_cjs_prod.createVNode("input", {
                    type: "text",
                    placeholder: _ctx.$t("search"),
                    onKeyup: _ctx.escribir,
                    ref: "input"
                  }, null, 40, ["placeholder", "onKeyup"])
                ]),
                vue_cjs_prod.createVNode("div", { style: { "height": "344px", "overflow": "auto" } }, [
                  vue_cjs_prod.createVNode("div", {
                    class: "row g-0",
                    id: ["masonry-gifs-row" + __props.postId]
                  }, [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.gifs, (gif) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                        class: "col-6",
                        key: gif,
                        style: { aspectRatio: gif.media[0].nanogif.dims[0] / gif.media[0].nanogif.dims[1] },
                        onClick: ($event) => _ctx.imprimir(gif.media[0].tinygif.url)
                      }, [
                        vue_cjs_prod.createVNode(GifSearchedComponent, {
                          "post-id": __props.postId,
                          img: gif.media[0].nanogif
                        }, null, 8, ["post-id", "img"])
                      ], 12, ["onClick"]);
                    }), 128))
                  ], 8, ["id"])
                ])
              ])
            ];
          }
        }),
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="p-1" viewBox="0 0 16 16" data-v-b69e47f6${_scopeId}><path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z" data-v-b69e47f6${_scopeId}></path></svg>`);
          } else {
            return [
              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "35",
                onClick: ($event) => _ctx.showDialog = _ctx.showDialog ? true : null,
                height: "35",
                fill: "currentColor",
                class: "p-1",
                viewBox: "0 0 16 16"
              }, [
                vue_cjs_prod.createVNode("path", { d: "M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z" })
              ], 8, ["onClick"]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comments/GifPickerComponent.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const GifPickerComponent = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-b69e47f6"]]);
const _sfc_main$C = {
  components: {
    GifPickerComponent,
    ImagePreloader
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      gifSeleccionado: null
    };
  },
  props: ["postId"],
  emits: ["commented", "contadorActualizado"],
  computed: {
    userLogged() {
      var _a;
      return (_a = this.mainStore) == null ? void 0 : _a.userLogged;
    }
  },
  methods: {
    onKeyDown(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        this.enviarComentario();
      }
    },
    enviarComentario() {
      const texto = new DOMParser().parseFromString(this.$refs.textarea.innerHTML.replaceAll("<br>", "\n").replaceAll("<div>", "\n<div>"), "text/html").documentElement.textContent.trim();
      if (!texto && !this.gifSeleccionado) {
        return;
      }
      axios({
        method: "post",
        url: `${this.mainStore.backendUrl}/api/posts/${this.postId}/comments`,
        data: {
          description: texto,
          gif_url: this.gifSeleccionado
        },
        withCredentials: true
      }).then((response) => {
        this.$emit("commented", {
          id: response.data.id,
          description: texto,
          created_at: Math.trunc(Date.now() / 1e3),
          gif_url: this.gifSeleccionado,
          user: this.userLogged
        });
        this.$emit("contadorActualizado", response.data.comments_count);
        this.$refs.textarea.innerHTML = "";
        this.gifSeleccionado = null;
      }).catch((error) => {
        console.log(error);
        const indices = Object.keys(error.response.data.errors);
        if (indices.length > 0) {
          alert(error.response.data.errors[indices[0]]);
        }
      });
    },
    recibirGif(url) {
      this.gifSeleccionado = url;
    }
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_image_preloader = vue_cjs_prod.resolveComponent("image-preloader");
  const _component_gif_picker_component = vue_cjs_prod.resolveComponent("gif-picker-component");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)} data-v-7793ef12><div class="row g-0 border-top pt-1" data-v-7793ef12>`);
  if ($data.gifSeleccionado) {
    _push(`<div class="col-auto position-relative mx-auto" data-v-7793ef12><img${serverRenderer.exports.ssrRenderAttr("src", $data.gifSeleccionado)} style="${serverRenderer.exports.ssrRenderStyle({ "height": "100px", "border-radius": "5px" })}" data-v-7793ef12><button type="button" class="btn-close bg-white shadow position-absolute top-0 end-0 m-1 p-2 rounded-circle" aria-label="Close" data-v-7793ef12></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($options.userLogged) {
    _push(`<div class="row g-0 pb-2 pt-1" data-v-7793ef12><div class="col col-auto" data-v-7793ef12>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_image_preloader, {
      image: $options.userLogged.image,
      aspect: "1",
      class: "imagenUsuario shadow"
    }, null, _parent));
    _push(`</div><div class="col ms-2" data-v-7793ef12><div class="row g-0 contenedorTextarea" data-v-7793ef12><div class="col" data-v-7793ef12><span class="textarea text-break" contenteditable data-v-7793ef12></span></div><div class="col col-auto guide-4" style="${serverRenderer.exports.ssrRenderStyle({ "color": "#f50" })}" data-v-7793ef12>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_gif_picker_component, { "post-id": $props.postId }, null, _parent));
    _push(`<svg class="pe-2" fill="currentColor" role="button" width="35" height="35" viewBox="0 0 24 24" data-v-7793ef12><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill-rule="evenodd" stroke="none" data-v-7793ef12></path></svg></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comments/NewComment.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const NewComment = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$q], ["__scopeId", "data-v-7793ef12"]]);
const _sfc_main$B = {
  components: {
    ComentarioComponent,
    NewComment
  },
  data() {
    return {
      comments: this.bestComments
    };
  },
  props: ["postId", "bestComments"],
  emits: ["contadorActualizado"],
  methods: {
    onCommented(comment) {
      this.comments.push(comment);
    },
    contadorActualizado(c) {
      this.$emit("contadorActualizado", c);
    }
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_comentario_component = vue_cjs_prod.resolveComponent("comentario-component");
  const _component_NewComment = vue_cjs_prod.resolveComponent("NewComment");
  _push(`<!--[--><hr class="my-0" data-v-2c7d774c><!--[-->`);
  serverRenderer.exports.ssrRenderList($data.comments, (comentario) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_comentario_component, {
      "hide-options": true,
      "post-id": $props.postId,
      key: comentario.id,
      comentario
    }, null, _parent));
  });
  _push(`<!--]-->`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NewComment, { "post-id": $props.postId }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comments/BestComments.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const BestComments = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$p], ["__scopeId", "data-v-2c7d774c"]]);
const _sfc_main$A = {
  components: {
    ImagePreloader,
    PostMenu,
    PetIconList,
    ReactAndCommentButtons,
    BestComments
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      reactions_count: this.post.reactions_count,
      comments_count: this.post.comments_count,
      my_reaction: this.post.my_reaction
    };
  },
  props: ["post"],
  provide() {
    return {
      postId: this.post.id,
      clickTimeout: null
    };
  },
  methods: {
    reactLove() {
      if (!this.my_reaction) {
        this.react();
      }
    },
    react(response) {
      this.my_reaction = response.own_reaction;
      this.reactions_count = response.reactions_count;
    },
    contadorActualizado(count) {
      this.comments_count = count;
    },
    clickHandler() {
      if (this.clickTimeout) {
        clearTimeout(this.clickTimeout);
        this.clickTimeout = null;
        this.doubleclick();
      } else {
        this.clickTimeout = setTimeout(() => {
          this.click();
          this.clickTimeout = null;
        }, 250);
      }
    },
    click() {
      this.$router.push(`/posts/${this.post.id}`);
    },
    doubleclick() {
      this.reactLove();
    }
  },
  computed: {
    userLogged() {
      var _a;
      return (_a = this.mainStore) == null ? void 0 : _a.userLogged;
    }
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  const _component_image_preloader = vue_cjs_prod.resolveComponent("image-preloader");
  const _component_post_menu = vue_cjs_prod.resolveComponent("post-menu");
  const _component_PetIconList = vue_cjs_prod.resolveComponent("PetIconList");
  const _component_ReactAndCommentButtons = vue_cjs_prod.resolveComponent("ReactAndCommentButtons");
  const _component_BestComments = vue_cjs_prod.resolveComponent("BestComments");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "card card-post shadow-sm f-rubick mb-4" }, _attrs))} data-v-6b20f476><div class="card-body pb-0" data-v-6b20f476><div class="row g-0" data-v-6b20f476><div class="col-auto" data-v-6b20f476>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/@" + $props.post.user.username
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_image_preloader, {
          image: $props.post.user.image,
          class: "img-user-post shadow"
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_image_preloader, {
            image: $props.post.user.image,
            class: "img-user-post shadow"
          }, null, 8, ["image"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col px-2" data-v-6b20f476>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/@" + $props.post.user.username,
    class: "name-user-post fw-bold text-decoration-none text-dark"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${serverRenderer.exports.ssrInterpolate($props.post.user.name)}`);
      } else {
        return [
          vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString($props.post.user.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="d-block text-black-50 fs-6" role="button" data-v-6b20f476><small data-v-6b20f476>${serverRenderer.exports.ssrInterpolate(_ctx.$t("timeAgo", { date: $props.post.created_at }))}</small></span></div><div class="col-auto" data-v-6b20f476><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.055 32.055" width="20" height="20" class="text-black-50" fill="currentColor" data-bs-toggle="dropdown" aria-expanded="false" data-v-6b20f476><path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
              C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
              s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
              c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z" data-v-6b20f476></path></svg>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_post_menu, {
    "post-id": $props.post.id
  }, null, _parent));
  _push(`</div></div><p class="fs-6 mt-1 mb-1 text-muted" data-v-6b20f476>${serverRenderer.exports.ssrInterpolate($props.post.simple_post.description)}</p>`);
  if ($props.post.pets_count) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_PetIconList, {
      pets: $props.post.pets,
      "pets-count": $props.post.pets_count
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="my-2 position-relative" data-v-6b20f476>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_image_preloader, {
    aspect: $props.post.simple_post.image.aspect_ratio,
    option: "url_lg",
    image: $props.post.simple_post.image,
    class: "rounded-5 w-100 shadow-sm"
  }, null, _parent));
  _push(`<div class="position-absolute top-0 start-0 end-0 bottom-0" data-v-6b20f476></div></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ReactAndCommentButtons, {
    id: $props.post.id,
    "my-reaction": $data.my_reaction,
    "reactions-count": $data.reactions_count,
    "comments-count": $data.comments_count
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_BestComments, {
    "post-id": $props.post.id,
    "best-comments": $props.post.best_comments
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/posts/PostComponent.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const SimplePostComponent = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$o], ["__scopeId", "data-v-6b20f476"]]);
const _sfc_main$z = {
  components: {
    ImagePreloader
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    var _a, _b, _c;
    return {
      my_follow: Array.isArray((_a = this.user) == null ? void 0 : _a.my_follow) ? (_b = this.user) == null ? void 0 : _b.my_follow.length : !!((_c = this.user) == null ? void 0 : _c.my_follow)
    };
  },
  props: {
    user: Object
  },
  computed: {
    pets_amount() {
      var _a, _b;
      const pets_n = Math.min(3, (_a = this.user) == null ? void 0 : _a.pets_count);
      if (pets_n) {
        return "| " + "\u{1F431}".repeat(pets_n) + (((_b = this.user) == null ? void 0 : _b.pets_count) > 3 ? " + " : "");
      } else {
        return "";
      }
    }
  },
  methods: {
    follow() {
      axios.post(`${this.mainStore.backendUrl}/api/followers`, {
        user_id: this.user.id
      }).then((response) => {
        this.my_follow = response.data.following;
      }).catch((error) => {
        console.error(error);
      });
    }
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  const _component_ImagePreloader = vue_cjs_prod.resolveComponent("ImagePreloader");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "row" }, _attrs))} data-v-bd06ca3c><div class="col-auto" data-v-bd06ca3c>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/@" + $props.user.username
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_ImagePreloader, {
          image: $props.user.image,
          class: "user-item-img shadow",
          aspect: "1"
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_ImagePreloader, {
            image: $props.user.image,
            class: "user-item-img shadow",
            aspect: "1"
          }, null, 8, ["image"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col text-start" data-v-bd06ca3c>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/@" + $props.user.username,
    class: "text-decoration-none"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${serverRenderer.exports.ssrInterpolate($props.user.name)}`);
      } else {
        return [
          vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString($props.user.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br data-v-bd06ca3c><small class="text-muted" data-v-bd06ca3c>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/@" + $props.user.username,
    class: "text-decoration-none text-muted"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` @${serverRenderer.exports.ssrInterpolate($props.user.username)}`);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" @" + vue_cjs_prod.toDisplayString($props.user.username), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` ${serverRenderer.exports.ssrInterpolate($options.pets_amount)}</small></div><div class="col-auto" data-v-bd06ca3c><button class="${serverRenderer.exports.ssrRenderClass([{ "btn-outline-primary": $data.my_follow, "btn-primary": !$data.my_follow }, "btn btn-sm"])}" data-v-bd06ca3c>${serverRenderer.exports.ssrInterpolate($data.my_follow ? "Dejar de seguir" : "Seguir")}</button></div></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/UserToFollowItem.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$n], ["__scopeId", "data-v-bd06ca3c"]]);
const __default__$6 = {
  components: {
    UserToFollowItem: __nuxt_component_0$1
  },
  data() {
    return {};
  },
  mounted() {
  }
};
const _sfc_main$y = /* @__PURE__ */ Object.assign(__default__$6, {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const mainStore = useMainStore();
    const result = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchWithCookie(`${mainStore.backendUrl}/api/users`, "XSRF-TOKEN")), __temp = await __temp, __restore(), __temp);
    const users = result.data;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h4 data-v-2708c0e8><strong data-v-2708c0e8>Usuarios que podr\xEDan interesarte</strong></h4><div class="card shadow-sm mb-3" data-v-2708c0e8><div class="card-body" data-v-2708c0e8><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(users), (u) => {
        _push(serverRenderer.exports.ssrRenderComponent(__nuxt_component_0$1, {
          class: "user-item",
          key: u.id,
          user: u
        }, null, _parent));
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/UserToFollowList.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const UserToFollowList = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-2708c0e8"]]);
const _sfc_main$x = {
  components: { ImagePreloader },
  props: {
    pet: Object
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  const _component_ImagePreloader = vue_cjs_prod.resolveComponent("ImagePreloader");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "row" }, _attrs))} data-v-be617f26><div class="col-auto" data-v-be617f26>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/pets/" + $props.pet.slug
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_ImagePreloader, {
          image: $props.pet.image,
          class: "pet-item-img shadow",
          aspect: "1"
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_ImagePreloader, {
            image: $props.pet.image,
            class: "pet-item-img shadow",
            aspect: "1"
          }, null, 8, ["image"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col" data-v-be617f26>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/pets/" + $props.pet.slug,
    class: "text-decoration-none"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${serverRenderer.exports.ssrInterpolate($props.pet.name)}`);
      } else {
        return [
          vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString($props.pet.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br data-v-be617f26><small class="text-muted" data-v-be617f26>${serverRenderer.exports.ssrInterpolate($props.pet.nickname)}</small></div></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pet/PetToSeeItem.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const PetToSeeItem = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$m], ["__scopeId", "data-v-be617f26"]]);
const __default__$5 = {
  components: {
    PetToSeeItem
  }
};
const _sfc_main$w = /* @__PURE__ */ Object.assign(__default__$5, {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const mainStore = useMainStore();
    const result = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchWithCookie(`${mainStore.backendUrl}/api/pets`)), __temp = await __temp, __restore(), __temp);
    const pets = result.data;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h4 data-v-d0cc83e2><strong data-v-d0cc83e2>Gatos que podr\xEDan gustarte</strong></h4><div class="card shadow-sm mb-3" data-v-d0cc83e2><div class="card-body" data-v-d0cc83e2><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(pets), (c) => {
        _push(serverRenderer.exports.ssrRenderComponent(PetToSeeItem, {
          class: "pet-item",
          key: c.id,
          pet: c
        }, null, _parent));
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pet/PetToSeeList.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const PetToSeeList = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-d0cc83e2"]]);
const _sfc_main$v = {
  data() {
    var _a;
    return {
      scrollPos: 0,
      maxTop: (_a = this.top) != null ? _a : 0,
      minTop: 0,
      topScroll: 0,
      sizeObserver: null
    };
  },
  props: ["top"],
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.sizeObserver = new ResizeObserver(this.calcMinTop);
    this.sizeObserver.observe(this.$refs.col);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
    this.sizeObserver.disconnect();
  },
  methods: {
    onScroll() {
      if (this.$refs.col.clientHeight + this.maxTop > window.innerHeight) {
        const diffScroll = document.documentElement.scrollTop - this.scrollPos;
        if (diffScroll > 0) {
          this.topScroll -= diffScroll;
          if (this.topScroll < this.minTop) {
            this.topScroll = this.minTop;
          }
        } else {
          this.topScroll -= diffScroll;
          if (this.topScroll > this.maxTop) {
            this.topScroll = this.maxTop;
          }
        }
      } else {
        this.topScroll = this.maxTop;
      }
      this.$refs.col.style.top = `${this.topScroll}px`;
      this.scrollPos = document.documentElement.scrollTop;
    },
    calcMinTop() {
      this.minTop = window.innerHeight - this.$refs.col.clientHeight;
    }
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    ref: "col",
    style: { "align-self": "flex-start", "position": "sticky" }
  }, _attrs))}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StickyMiddleColumn.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const StickyMiddleColumn = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$l]]);
const __default__$4 = {
  components: {
    SimplePostComponent,
    ImagePreloader,
    UserToFollowList,
    PetToSeeList,
    StickyMiddleColumn
  },
  data() {
    return {};
  },
  mounted() {
  },
  computed: {
    posts() {
      var _a;
      return (_a = this.mainStore) == null ? void 0 : _a.posts;
    }
  }
};
const _sfc_main$u = /* @__PURE__ */ Object.assign(__default__$4, {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const mainStore = useMainStore();
    [__temp, __restore] = vue_cjs_prod.withAsyncContext(() => mainStore.loadPosts()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = vue_cjs_prod.resolveComponent("router-view");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "row g-0" }, _attrs))}><div class="col-12 col-md-8"><div style="${serverRenderer.exports.ssrRenderStyle({ "max-width": "500px", "margin": "auto" })}">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`<!--[-->`);
      serverRenderer.exports.ssrRenderList(_ctx.posts, (p) => {
        _push(serverRenderer.exports.ssrRenderComponent(SimplePostComponent, {
          post: p,
          key: p.id
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(StickyMiddleColumn, {
        top: "80",
        class: "col-12 col-md-4",
        style: { "max-width": "100%" }
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(UserToFollowList, null, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(PetToSeeList, null, null, _parent2, _scopeId));
            _push2(`<h4${_scopeId}><strong${_scopeId}>Ideas para publicar</strong> ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(mainStore).state)}</h4><div class="card shadow-sm mb-3"${_scopeId}><div class="card-body"${_scopeId}><h5 class="card-title fw-bold"${_scopeId}> Gato dormido </h5><p class="card-text"${_scopeId}> Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) </p>`);
            _push2(serverRenderer.exports.ssrRenderComponent(ImagePreloader, {
              image: "/img/samples/s1.jpg",
              aspect: 2,
              class: "rounded-5 w-100 shadow-sm"
            }, null, _parent2, _scopeId));
            _push2(`<a href="#" class="btn btn-primary mt-2"${_scopeId}>Ver publicaciones</a></div></div><hr class="mx-3" style="${serverRenderer.exports.ssrRenderStyle({ "border-top": "2px dashed", "background-color": "transparent" })}"${_scopeId}><h4${_scopeId}><strong${_scopeId}>A\xFAn no sigues a estos gatos</strong></h4><div class="card shadow-sm mb-3"${_scopeId}><div class="card-body"${_scopeId}><h5 class="card-title fw-bold"${_scopeId}> Gato dormido </h5><p class="card-text"${_scopeId}> Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) </p>`);
            _push2(serverRenderer.exports.ssrRenderComponent(ImagePreloader, {
              image: "/img/samples/s1.jpg",
              aspect: 2,
              class: "rounded-5 w-100 shadow-sm"
            }, null, _parent2, _scopeId));
            _push2(`<a href="#" class="btn btn-primary mt-2"${_scopeId}>Ver publicaciones</a></div></div><hr class="mx-3" style="${serverRenderer.exports.ssrRenderStyle({ "border-top": "2px dashed", "background-color": "transparent" })}"${_scopeId}><div class="card shadow-sm mb-3"${_scopeId}><div class="card-body"${_scopeId}><h5 class="card-title"${_scopeId}> Card title </h5><p class="card-text"${_scopeId}> Some quick example text to build on the card title and make up the bulk of the card&#39;s content. </p><a href="#" class="btn btn-primary"${_scopeId}>Go somewhere</a></div></div><div class="card shadow-sm mb-3"${_scopeId}><div class="card-body"${_scopeId}><h5 class="card-title"${_scopeId}> Card title </h5><p class="card-text"${_scopeId}> Some quick example text to build on the card title and make up the bulk of the card&#39;s content. </p><a href="#" class="btn btn-primary"${_scopeId}>Go somewhere</a></div></div><div class="card shadow-sm mb-3"${_scopeId}><div class="card-body"${_scopeId}><h5 class="card-title"${_scopeId}> Card title </h5><p class="card-text"${_scopeId}> Some quick example text to build on the card title and make up the bulk of the card&#39;s content. </p><a href="#" class="btn btn-primary"${_scopeId}>Go somewhere</a></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode(UserToFollowList),
              vue_cjs_prod.createVNode(PetToSeeList),
              vue_cjs_prod.createVNode("h4", null, [
                vue_cjs_prod.createVNode("strong", null, "Ideas para publicar"),
                vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(mainStore).state), 1)
              ]),
              vue_cjs_prod.createVNode("div", { class: "card shadow-sm mb-3" }, [
                vue_cjs_prod.createVNode("div", { class: "card-body" }, [
                  vue_cjs_prod.createVNode("h5", { class: "card-title fw-bold" }, " Gato dormido "),
                  vue_cjs_prod.createVNode("p", { class: "card-text" }, " Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) "),
                  vue_cjs_prod.createVNode(ImagePreloader, {
                    image: "/img/samples/s1.jpg",
                    aspect: 2,
                    class: "rounded-5 w-100 shadow-sm"
                  }, null, 8, ["image"]),
                  vue_cjs_prod.createVNode("a", {
                    href: "#",
                    class: "btn btn-primary mt-2"
                  }, "Ver publicaciones")
                ])
              ]),
              vue_cjs_prod.createVNode("hr", {
                class: "mx-3",
                style: { "border-top": "2px dashed", "background-color": "transparent" }
              }),
              vue_cjs_prod.createVNode("h4", null, [
                vue_cjs_prod.createVNode("strong", null, "A\xFAn no sigues a estos gatos")
              ]),
              vue_cjs_prod.createVNode("div", { class: "card shadow-sm mb-3" }, [
                vue_cjs_prod.createVNode("div", { class: "card-body" }, [
                  vue_cjs_prod.createVNode("h5", { class: "card-title fw-bold" }, " Gato dormido "),
                  vue_cjs_prod.createVNode("p", { class: "card-text" }, " Muestranos a tu gato durmiendo... (ver\xA0m\xE1s) "),
                  vue_cjs_prod.createVNode(ImagePreloader, {
                    image: "/img/samples/s1.jpg",
                    aspect: 2,
                    class: "rounded-5 w-100 shadow-sm"
                  }, null, 8, ["image"]),
                  vue_cjs_prod.createVNode("a", {
                    href: "#",
                    class: "btn btn-primary mt-2"
                  }, "Ver publicaciones")
                ])
              ]),
              vue_cjs_prod.createVNode("hr", {
                class: "mx-3",
                style: { "border-top": "2px dashed", "background-color": "transparent" }
              }),
              vue_cjs_prod.createVNode("div", { class: "card shadow-sm mb-3" }, [
                vue_cjs_prod.createVNode("div", { class: "card-body" }, [
                  vue_cjs_prod.createVNode("h5", { class: "card-title" }, " Card title "),
                  vue_cjs_prod.createVNode("p", { class: "card-text" }, " Some quick example text to build on the card title and make up the bulk of the card's content. "),
                  vue_cjs_prod.createVNode("a", {
                    href: "#",
                    class: "btn btn-primary"
                  }, "Go somewhere")
                ])
              ]),
              vue_cjs_prod.createVNode("div", { class: "card shadow-sm mb-3" }, [
                vue_cjs_prod.createVNode("div", { class: "card-body" }, [
                  vue_cjs_prod.createVNode("h5", { class: "card-title" }, " Card title "),
                  vue_cjs_prod.createVNode("p", { class: "card-text" }, " Some quick example text to build on the card title and make up the bulk of the card's content. "),
                  vue_cjs_prod.createVNode("a", {
                    href: "#",
                    class: "btn btn-primary"
                  }, "Go somewhere")
                ])
              ]),
              vue_cjs_prod.createVNode("div", { class: "card shadow-sm mb-3" }, [
                vue_cjs_prod.createVNode("div", { class: "card-body" }, [
                  vue_cjs_prod.createVNode("h5", { class: "card-title" }, " Card title "),
                  vue_cjs_prod.createVNode("p", { class: "card-text" }, " Some quick example text to build on the card title and make up the bulk of the card's content. "),
                  vue_cjs_prod.createVNode("a", {
                    href: "#",
                    class: "btn btn-primary"
                  }, "Go somewhere")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomeComponent.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const meta$7 = {
  layout: "main"
};
const __default__$3 = {
  data() {
    return {
      editor: null,
      page: null
    };
  },
  mounted() {
    axios.get(`${this.mainStore.backendUrl}/api/pages/${this.$route.params.slug}`).then((response) => {
      this.page = response.data;
      this.editor = new this.EditorJS({
        readOnly: true,
        data: JSON.parse(response.data.content),
        tools: {
          header: this.Header,
          image: {
            class: this.ImageTool
          },
          list: {
            class: this.List,
            inlineToolbar: true
          }
        },
        i18n: {
          messages: {
            ui: {
              blockTunes: {
                toggler: {
                  "Click to tune": "Click para m\xE1s opciones",
                  "or drag to move": "O arrastra para mover"
                }
              },
              inlineToolbar: {
                converter: {
                  "Convert to": "Convertir a"
                }
              },
              toolbar: {
                toolbox: {
                  Add: "Agregar elemento"
                }
              }
            },
            toolNames: {
              Text: "Texto",
              Heading: "Titulo",
              List: "Lista",
              Link: "Enlace",
              Bold: "Negrita",
              Italic: "Italica"
            },
            tools: {
              link: {
                "Add a link": "Agregar enlace"
              },
              stub: {
                "The block can not be displayed correctly.": "El elemento no puede ser mostrado correctamente"
              }
            },
            blockTunes: {
              delete: {
                Delete: "Eliminar"
              },
              moveUp: {
                "Move up": "Subir"
              },
              moveDown: {
                "Move down": "Bajar"
              }
            }
          }
        }
      });
    });
  },
  methods: {}
};
const _sfc_main$t = /* @__PURE__ */ Object.assign(__default__$3, {
  __ssrInlineRender: true,
  async setup(__props) {
    useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "card" }, _attrs))}><div id="editorjs"></div></div>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageShow.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const meta$6 = {
  layout: "main"
};
const meta$5 = {
  layout: "main"
};
const _sfc_main$s = {
  components: {
    ImagePreloader
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      pets: null
    };
  },
  mounted() {
    axios.get(`${this.mainStore.backendUrl}/api/pets`, {
      withCredentials: true
    }).then((response) => {
      this.pets = response.data.data;
    });
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  const _component_ImagePreloader = vue_cjs_prod.resolveComponent("ImagePreloader");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><input type="text" class="w-100 form-control my-4" placeholder="Buscar mascota"><div class="row g-3 mx-0"><!--[-->`);
  serverRenderer.exports.ssrRenderList($data.pets, (p) => {
    _push(`<div class="col-6 col-sm-4 col-md-3 col-lg-2"><div class="card shadow-sm" style="${serverRenderer.exports.ssrRenderStyle({ "height": "100%" })}"><div class="card-body">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
      to: "/pets/" + p.slug
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(_component_ImagePreloader, {
            image: p.image,
            class: "w-100 rounded-3 mb-3",
            aspect: 1
          }, null, _parent2, _scopeId));
        } else {
          return [
            vue_cjs_prod.createVNode(_component_ImagePreloader, {
              image: p.image,
              class: "w-100 rounded-3 mb-3",
              aspect: 1
            }, null, 8, ["image"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
      to: "/pets/" + p.slug,
      class: "d-block fw-bold text-decoration-none"
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${serverRenderer.exports.ssrInterpolate(p.name)}`);
        } else {
          return [
            vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(p.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<small class="text-muted">${serverRenderer.exports.ssrInterpolate(p.nickname)}</small></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pet/PetsComponent.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const PetsComponent = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$k]]);
const meta$4 = {
  layout: "main"
};
const meta$3 = {
  layout: "main"
};
const _sfc_main$r = {
  components: {
    ComentarioComponent,
    NewComment
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      comentarios: null,
      comentariosPaginador: null
    };
  },
  props: ["postId"],
  emits: ["contadorActualizado"],
  mounted() {
    axios.get(`${this.mainStore.backendUrl}/api/posts/${this.postId}/comments`).then((response) => {
      this.$emit("contadorActualizado", response.data.meta.total);
      this.comentariosPaginador = response.data.links;
      this.comentarios = response.data.data;
    }).catch((response) => {
      console.log(response);
    });
  },
  methods: {
    cargarMasComentarios() {
      axios.get(this.comentariosPaginador.next).then((response) => {
        this.comentariosPaginador = response.data.links;
        this.comentarios = this.comentarios.concat(response.data.data);
      }).then(() => {
        this.$refs.commentsDiv.scrollTop = 0;
      }).catch((response) => {
        console.log(response);
      });
    },
    onCommented(comment) {
      this.comentarios.unshift(comment);
      window.setTimeout(() => {
        this.$refs.commentsDiv.scrollTop = this.$refs.commentsDiv.scrollHeight;
      }, 200);
    },
    contadorActualizado(c) {
      this.$emit("contadorActualizado", c);
    },
    commentDeleted(id) {
      const indice = this.comentarios.findIndex((comentario) => comentario.id === id);
      this.comentarios.splice(indice, 1);
    },
    commentEdited(c) {
      const comment_f = this.comentarios.find((comentario) => comentario.id === c.id);
      comment_f.description = c.description;
    }
  },
  computed: {
    userLogged() {
      var _a;
      return (_a = this.mainStore) == null ? void 0 : _a.userLogged;
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_comentario_component = vue_cjs_prod.resolveComponent("comentario-component");
  const _component_NewComment = vue_cjs_prod.resolveComponent("NewComment");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)} data-v-62359c64><div style="${serverRenderer.exports.ssrRenderStyle({ "height": "100%", "display": "flex", "flex-direction": "column" })}" data-v-62359c64>`);
  if ((_a = $data.comentarios) == null ? void 0 : _a.length) {
    _push(`<hr class="my-0" data-v-62359c64>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.comentariosPaginador && $data.comentariosPaginador.next) {
    _push(`<a class="d-block text-muted text-center py-2 fw-bold" style="${serverRenderer.exports.ssrRenderStyle({ "font-size": "12px", "text-decoration": "none" })}" role="button" data-v-62359c64>${serverRenderer.exports.ssrInterpolate(_ctx.$t("previousComments"))}</a>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.comentariosPaginador && $data.comentariosPaginador.next) {
    _push(`<hr class="my-0" data-v-62359c64>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${serverRenderer.exports.ssrRenderStyle({ "overflow": "hidden auto", "scroll-behavior": "smooth", "flex-grow": "1" })}" class="ps-3 pe-0 custom-scroll" data-v-62359c64><!--[-->`);
  serverRenderer.exports.ssrRenderList((_b = $data.comentarios) == null ? void 0 : _b.slice().reverse(), (comentario) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_comentario_component, {
      "post-id": $props.postId,
      key: comentario.id,
      comentario
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NewComment, {
    class: "mx-3",
    "post-id": $props.postId
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comments/SeccionComentariosComponent.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const SeccionComentariosComponent = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$j], ["__scopeId", "data-v-62359c64"]]);
const __default__$2 = {
  components: {
    SeccionComentariosComponent,
    ImagePreloader,
    PetIconList,
    PostMenu,
    ReactAndCommentButtons
  },
  data() {
    return {};
  },
  methods: {
    contadorActualizado(count) {
      this.comments_count = count;
    },
    back() {
      this.$router.replace("/");
    },
    react(response) {
      this.my_reaction = response.own_reaction;
      this.reactions_count = response.reactions_count;
    }
  }
};
const _sfc_main$q = /* @__PURE__ */ Object.assign(__default__$2, {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const mainStore = useMainStore();
    const route = useRoute();
    let post = null;
    let my_reaction = null;
    let reactions_count = null;
    let comments_count = null;
    const result = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchWithCookie(`${mainStore.backendUrl}/api/posts/${route.params.id}`)), __temp = await __temp, __restore(), __temp);
    post = result.data;
    my_reaction = post.my_reaction;
    reactions_count = post.reactions_count;
    comments_count = post.comments_count;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_NuxtLink = __nuxt_component_0$4;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "row" }, _attrs))} data-v-5c070739><div class="col-7" data-v-5c070739>`);
      _push(serverRenderer.exports.ssrRenderComponent(ImagePreloader, {
        aspect: (_a = vue_cjs_prod.unref(post)) == null ? void 0 : _a.simple_post.aspect_ratio,
        image: (_b = vue_cjs_prod.unref(post)) == null ? void 0 : _b.simple_post.image,
        option: "url_xl",
        "object-fit": "contain",
        style: { "width": "100%", "height": "600px", "display": "block" },
        class: "rounded-5 w-100 shadow-sm"
      }, null, _parent));
      _push(`</div><div class="col-5" data-v-5c070739><div class="card shadow-sm" style="${serverRenderer.exports.ssrRenderStyle({ "height": "calc(100vh - 120px)" })}" data-v-5c070739><div class="card-body p-0 container-x" data-v-5c070739><div class="row g-0 p-3 pb-0" data-v-5c070739><div class="col-auto" data-v-5c070739>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/@" + ((_c = vue_cjs_prod.unref(post)) == null ? void 0 : _c.user.username)
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(ImagePreloader, {
              image: (_a2 = vue_cjs_prod.unref(post)) == null ? void 0 : _a2.user.image,
              class: "img-user-post shadow"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(ImagePreloader, {
                image: (_b2 = vue_cjs_prod.unref(post)) == null ? void 0 : _b2.user.image,
                class: "img-user-post shadow"
              }, null, 8, ["image"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col px-2" data-v-5c070739>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/@" + ((_d = vue_cjs_prod.unref(post)) == null ? void 0 : _d.user.username),
        class: "name-user-post fw-bold text-decoration-none text-dark"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate((_a2 = vue_cjs_prod.unref(post)) == null ? void 0 : _a2.user.name)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_b2 = vue_cjs_prod.unref(post)) == null ? void 0 : _b2.user.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="d-block text-black-50 fs-6" role="button" data-v-5c070739><small data-v-5c070739>${serverRenderer.exports.ssrInterpolate(_ctx.$t("timeAgo", { date: (_e = vue_cjs_prod.unref(post)) == null ? void 0 : _e.created_at }))}</small></span></div><div class="col-auto" data-v-5c070739><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.055 32.055" width="20" height="20" class="text-black-50" fill="currentColor" data-bs-toggle="dropdown" aria-expanded="false" data-v-5c070739><path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
              C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
              s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
              c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z" data-v-5c070739></path></svg>`);
      _push(serverRenderer.exports.ssrRenderComponent(PostMenu, {
        "post-id": (_f = vue_cjs_prod.unref(post)) == null ? void 0 : _f.id
      }, null, _parent));
      _push(`</div></div><p class="fs-6 mt-1 mb-1 mx-3 text-muted" data-v-5c070739>${serverRenderer.exports.ssrInterpolate((_g = vue_cjs_prod.unref(post)) == null ? void 0 : _g.simple_post.description)}</p>`);
      if ((_h = vue_cjs_prod.unref(post)) == null ? void 0 : _h.pets_count) {
        _push(serverRenderer.exports.ssrRenderComponent(PetIconList, {
          pets: vue_cjs_prod.unref(post).pets,
          "pets-count": vue_cjs_prod.unref(post).pets_count,
          class: "px-3"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vue_cjs_prod.unref(post)) {
        _push(serverRenderer.exports.ssrRenderComponent(ReactAndCommentButtons, {
          id: vue_cjs_prod.unref(post).id,
          "my-reaction": vue_cjs_prod.unref(my_reaction),
          "reactions-count": vue_cjs_prod.unref(reactions_count),
          "comments-count": vue_cjs_prod.unref(comments_count)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vue_cjs_prod.unref(post)) {
        _push(serverRenderer.exports.ssrRenderComponent(SeccionComentariosComponent, {
          "post-id": vue_cjs_prod.unref(post).id,
          style: { "flex-grow": "1", "overflow": "hidden" }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/posts/ViewPost.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const ViewPost = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-5c070739"]]);
const meta$2 = {
  layout: "main"
};
const meta$1 = void 0;
const _sfc_main$p = {
  components: {
    UserToFollowItem: __nuxt_component_0$1
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      users: null
    };
  },
  mounted() {
    axios.get(`${this.mainStore.backendUrl}/api/users`).then((response) => {
      this.users = response.data.data;
    });
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UserToFollowItem = __nuxt_component_0$1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><input type="text" class="w-100 form-control my-4" placeholder="Buscar usuario"><div class="row g-3 mx-0"><!--[-->`);
  serverRenderer.exports.ssrRenderList($data.users, (u) => {
    _push(`<div class="col-12 col-sm-6 col-lg-4"><div class="card shadow-sm" style="${serverRenderer.exports.ssrRenderStyle({ "height": "100%" })}"><div class="card-body">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_UserToFollowItem, { user: u }, null, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/UsersComponent.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const UsersComponent = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$i]]);
const meta = {
  layout: "main"
};
const routes = [
  {
    name: "@username",
    path: "/@:username",
    file: "/home/marx/proyectos/gattitus-frontend/pages/@[username].vue",
    children: [],
    meta: meta$f,
    alias: (meta$f == null ? void 0 : meta$f.alias) || [],
    component: () => Promise.resolve().then(function() {
      return __username_$1;
    })
  },
  {
    name: "admin-pages-slug-edit",
    path: "/admin/pages/:slug/edit",
    file: "/home/marx/proyectos/gattitus-frontend/pages/admin/pages/[slug]/edit.vue",
    children: [],
    meta: meta$e,
    alias: (meta$e == null ? void 0 : meta$e.alias) || [],
    component: () => Promise.resolve().then(function() {
      return edit$3;
    })
  },
  {
    name: "admin-pages-create",
    path: "/admin/pages/create",
    file: "/home/marx/proyectos/gattitus-frontend/pages/admin/pages/create.vue",
    children: [],
    meta: meta$d,
    alias: (meta$d == null ? void 0 : meta$d.alias) || [],
    component: () => Promise.resolve().then(function() {
      return create$5;
    })
  },
  {
    name: "admin-pages",
    path: "/admin/pages",
    file: "/home/marx/proyectos/gattitus-frontend/pages/admin/pages/index.vue",
    children: [],
    meta: meta$c,
    alias: (meta$c == null ? void 0 : meta$c.alias) || [],
    component: () => Promise.resolve().then(function() {
      return index$f;
    })
  },
  {
    name: "admin-reports-posts",
    path: "/admin/reports/posts",
    file: "/home/marx/proyectos/gattitus-frontend/pages/admin/reports/posts/index.vue",
    children: [],
    meta: meta$b,
    alias: (meta$b == null ? void 0 : meta$b.alias) || [],
    component: () => Promise.resolve().then(function() {
      return index$d;
    })
  },
  {
    name: "admin-reports-types-create",
    path: "/admin/reports/types/create",
    file: "/home/marx/proyectos/gattitus-frontend/pages/admin/reports/types/create.vue",
    children: [],
    meta: meta$a,
    alias: (meta$a == null ? void 0 : meta$a.alias) || [],
    component: () => Promise.resolve().then(function() {
      return create$3;
    })
  },
  {
    name: "admin-reports-types",
    path: "/admin/reports/types",
    file: "/home/marx/proyectos/gattitus-frontend/pages/admin/reports/types/index.vue",
    children: [],
    meta: meta$9,
    alias: (meta$9 == null ? void 0 : meta$9.alias) || [],
    component: () => Promise.resolve().then(function() {
      return index$b;
    })
  },
  {
    name: "admin-users",
    path: "/admin/users",
    file: "/home/marx/proyectos/gattitus-frontend/pages/admin/users/index.vue",
    children: [],
    meta: meta$8,
    alias: (meta$8 == null ? void 0 : meta$8.alias) || [],
    component: () => Promise.resolve().then(function() {
      return index$9;
    })
  },
  {
    name: "index",
    path: "/",
    file: "/home/marx/proyectos/gattitus-frontend/pages/index.vue",
    children: [],
    meta: meta$7,
    alias: (meta$7 == null ? void 0 : meta$7.alias) || [],
    component: () => Promise.resolve().then(function() {
      return index$7;
    })
  },
  {
    name: "pages-slug",
    path: "/pages/:slug",
    file: "/home/marx/proyectos/gattitus-frontend/pages/pages/[slug].vue",
    children: [],
    meta: meta$6,
    alias: (meta$6 == null ? void 0 : meta$6.alias) || [],
    component: () => Promise.resolve().then(function() {
      return _slug_$1;
    })
  },
  {
    name: "pets-nickname",
    path: "/pets/:nickname",
    file: "/home/marx/proyectos/gattitus-frontend/pages/pets/[nickname].vue",
    children: [],
    meta: meta$5,
    alias: (meta$5 == null ? void 0 : meta$5.alias) || [],
    component: () => Promise.resolve().then(function() {
      return _nickname_$1;
    })
  },
  {
    name: "pets",
    path: "/pets",
    file: "/home/marx/proyectos/gattitus-frontend/pages/pets/index.vue",
    children: [],
    meta: meta$4,
    alias: (meta$4 == null ? void 0 : meta$4.alias) || [],
    component: () => Promise.resolve().then(function() {
      return index$5;
    })
  },
  {
    name: "posts-id-edit",
    path: "/posts/:id/edit",
    file: "/home/marx/proyectos/gattitus-frontend/pages/posts/[id]/edit.vue",
    children: [],
    meta: meta$3,
    alias: (meta$3 == null ? void 0 : meta$3.alias) || [],
    component: () => Promise.resolve().then(function() {
      return edit$1;
    })
  },
  {
    name: "posts-id",
    path: "/posts/:id",
    file: "/home/marx/proyectos/gattitus-frontend/pages/posts/[id]/index.vue",
    children: [],
    meta: meta$2,
    alias: (meta$2 == null ? void 0 : meta$2.alias) || [],
    component: () => Promise.resolve().then(function() {
      return index$3;
    })
  },
  {
    name: "posts-create",
    path: "/posts/create",
    file: "/home/marx/proyectos/gattitus-frontend/pages/posts/create.vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return create$1;
    })
  },
  {
    name: "users",
    path: "/users",
    file: "/home/marx/proyectos/gattitus-frontend/pages/users/index.vue",
    children: [],
    meta,
    alias: (meta == null ? void 0 : meta.alias) || [],
    component: () => Promise.resolve().then(function() {
      return index$1;
    })
  }
];
const configRouterOptions = {};
const routerOptions = __spreadValues({}, configRouterOptions);
const globalMiddleware = [];
const namedMiddleware = {};
const _2f12118a = defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = vueRouter_cjs_prod.createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = vueRouter_cjs_prod.createRouter(__spreadProps(__spreadValues({}, routerOptions), {
    history: routerHistory,
    routes
  }));
  nuxtApp.vueApp.use(router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = vue_cjs_prod.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = vue_cjs_prod.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = to.matched[0]) == null ? void 0 : _a.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = vue_cjs_prod.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = vue_cjs_prod.reactive(route);
  nuxtApp._activeRoute = vue_cjs_prod.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  router.afterEach(async (to) => {
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, throwError, [createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    }
  });
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    callWithNuxt(nuxtApp, throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    var _a;
    to.meta = vue_cjs_prod.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a = namedMiddleware[entry2]) == null ? void 0 : _a.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace(__spreadProps(__spreadValues({}, router.resolve(initialURL)), {
        force: true
      }));
    } catch (error2) {
      callWithNuxt(nuxtApp, throwError, [error2]);
    }
  });
  return { provide: { router } };
});
/*!
  * shared v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = false;
const hasSymbol$1 = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol$1 = (name) => hasSymbol$1 ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
function warn$1(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign$1 = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray$1 = Array.isArray;
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isBoolean$1 = (val) => typeof val === "boolean";
const isObject$1 = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray$1(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
/*!
  * message-compiler v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const CompileErrorCodes = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = code2;
  const error = new SyntaxError(String(msg));
  error.code = code2;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
/*!
  * devtools-if v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const pathStateMachine = [];
pathStateMachine[0] = {
  ["w"]: [0],
  ["i"]: [3, 0],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[1] = {
  ["w"]: [1],
  ["."]: [2],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[2] = {
  ["w"]: [2],
  ["i"]: [3, 0],
  ["0"]: [3, 0]
};
pathStateMachine[3] = {
  ["i"]: [3, 0],
  ["0"]: [3, 0],
  ["w"]: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  ["o"]: [7, 1]
};
pathStateMachine[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  ["o"]: 8,
  ["l"]: [4, 0]
};
pathStateMachine[5] = {
  ["'"]: [4, 0],
  ["o"]: 8,
  ["l"]: [5, 0]
};
pathStateMachine[6] = {
  ['"']: [4, 0],
  ["o"]: 8,
  ["l"]: [6, 0]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index2 = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[0] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[1] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[2] = () => {
    actions[0]();
    subPathDepth++;
  };
  actions[3] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[0]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[1]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index2 + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index2++;
      newChar = "\\" + nextChar;
      actions[0]();
      return true;
    }
  }
  while (mode !== null) {
    index2++;
    c = path[index2];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["l"] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject$1(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject$1(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index2 = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index2 : index2;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject$1(options.pluralRules) && isString$1(locale) && isFunction$1(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject$1(options.pluralRules) && isString$1(locale) && isFunction$1(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  const _list = options.list || [];
  const list = (index2) => _list[index2];
  const _named = options.named || {};
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction$1(options.messages) ? options.messages(key) : isObject$1(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction$1(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction$1(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const linked = (key, modifier) => {
    const msg = message(key)(ctx);
    return isString$1(modifier) ? _modifier(modifier)(msg) : msg;
  };
  const type = isPlainObject(options.processor) && isString$1(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const ctx = {
    ["list"]: list,
    ["named"]: named,
    ["plural"]: plural,
    ["linked"]: linked,
    ["message"]: message,
    ["type"]: type,
    ["interpolate"]: interpolate,
    ["normalize"]: normalize
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version, meta2) {
  devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
    timestamp: Date.now(),
    i18n,
    version,
    meta: meta2
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray$1(fallback) ? fallback : isObject$1(fallback) ? Object.keys(fallback) : isString$1(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString$1(start) ? start : DEFAULT_LOCALE$1;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray$1(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray$1(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString$1(defaults) ? [defaults] : defaults;
    if (isArray$1(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean$1(follow); i++) {
    const locale = block[i];
    if (isString$1(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray$1(blocks) || isPlainObject(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const VERSION$1 = "9.2.0-beta.35";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE$1 = "en-US";
const MISSING_RESOLVE_VALUE = "";
function getDefaultLinkedModifiers() {
  return {
    upper: (val) => isString$1(val) ? val.toUpperCase() : val,
    lower: (val) => isString$1(val) ? val.toLowerCase() : val,
    capitalize: (val) => isString$1(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
  };
}
let _compiler;
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = (meta2) => {
  _additionalMeta = meta2;
};
const getAdditionalMeta = () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const version = isString$1(options.version) ? options.version : VERSION$1;
  const locale = isString$1(options.locale) ? options.locale : DEFAULT_LOCALE$1;
  const fallbackLocale = isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages = isPlainObject(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = assign$1({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction$1(options.missing) ? options.missing : null;
  const missingWarn = isBoolean$1(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean$1(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean$1(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction$1(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction$1(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction$1(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject$1(options.fallbackContext) ? options.fallbackContext : void 0;
  const onWarn = isFunction$1(options.onWarn) ? options.onWarn : warn$1;
  const internalOptions = options;
  const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  if (__INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version, __meta);
  }
  return context;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString$1(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
let code$2 = CompileErrorCodes.__EXTEND_POINT__;
const inc$2 = () => ++code$2;
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$2,
  INVALID_DATE_ARGUMENT: inc$2(),
  INVALID_ISO_DATE_ARGUMENT: inc$2(),
  __EXTEND_POINT__: inc$2()
};
function createCoreError(code2) {
  return createCompileError(code2, null, void 0);
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction$1(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean$1(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean$1(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean$1(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString$1(options.default) || isBoolean$1(options.default) ? !isBoolean$1(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || {}
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString$1(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString$1(format2) || isMessageFunction(format2)) || !isString$1(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged) : messaged;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const payloads = {
      timestamp: Date.now(),
      key: isString$1(key) ? key : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString$1(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign$1({}, context.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray$1(options.list)) {
    options.list = options.list.map((item) => isString$1(item) ? escapeHtml(item) : item);
  } else if (isObject$1(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString$1(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format2 = null;
  const type = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    message = messages[targetLocale] || {};
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (isString$1(format2) || isFunction$1(format2))
      break;
    const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
    if (missingRet !== key) {
      format2 = missingRet;
    }
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString$1(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString$1(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray$1(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString$1(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign$1(options, arg3);
  }
  return [key, options];
}
function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        throw err;
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key) => {
    let val = resolveValue2(message, key);
    if (val == null && fallbackContext) {
      const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue2(message2, key);
    }
    if (isString$1(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean$1(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean$1(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  if (!isString$1(key) || key === "") {
    return new Intl.DateTimeFormat(locale).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString$1(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign$1({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  let value;
  if (isString$1(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString$1(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    options = arg2;
  }
  if (isString$1(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean$1(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean$1(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  if (!isString$1(key) || key === "") {
    return new Intl.NumberFormat(locale).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString$1(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign$1({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString$1(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    options = arg2;
  }
  if (isString$1(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
{
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
/*!
  * vue-i18n v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.2.0-beta.35";
function initFeatureFlags() {
  if (typeof __VUE_I18N_FULL_INSTALL__ !== "boolean") {
    getGlobalThis().__VUE_I18N_FULL_INSTALL__ = true;
  }
  if (typeof __VUE_I18N_LEGACY_API__ !== "boolean") {
    getGlobalThis().__VUE_I18N_LEGACY_API__ = true;
  }
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  UNEXPECTED_RETURN_TYPE: code,
  INVALID_ARGUMENT: inc(),
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  UNEXPECTED_ERROR: inc(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  __EXTEND_POINT__: inc()
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, void 0);
}
const TransrateVNodeSymbol = /* @__PURE__ */ makeSymbol$1("__transrateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol$1("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol$1("__numberParts");
const SetPluralRulesSymbol = makeSymbol$1("__setPluralRules");
const InejctWithOption = /* @__PURE__ */ makeSymbol$1("__injectWithOption");
function handleFlatJson(obj) {
  if (!isObject$1(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject$1(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        currentObj = currentObj[subKeys[i]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject$1(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages) ? messages : isArray$1(__i18n) ? {} : { [locale]: {} };
  if (isArray$1(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString$1(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray$1(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages = isObject$1(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(global2.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject$1(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject$1(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return vue_cjs_prod.createVNode(vue_cjs_prod.Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, vue_cjs_prod.getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = vue_cjs_prod.getCurrentInstance();
  let meta2 = null;
  return instance && (meta2 = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta2 } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean$1(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = vue_cjs_prod.ref(__root && _inheritLocale ? __root.locale.value : isString$1(options.locale) ? options.locale : DEFAULT_LOCALE$1);
  const _fallbackLocale = vue_cjs_prod.ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString$1(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
  const _messages = vue_cjs_prod.ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = vue_cjs_prod.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = vue_cjs_prod.ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean$1(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean$1(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean$1(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction$1(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction$1(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean$1(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  function getCoreContext() {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  }
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = vue_cjs_prod.computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = vue_cjs_prod.computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = vue_cjs_prod.computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ vue_cjs_prod.computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ vue_cjs_prod.computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction$1(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
    trackReactivityValues();
    let ret;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      try {
        setAdditionalMeta(getMetaInfo());
        if (!_isGlobal) {
          _context.fallbackContext = __root ? getFallbackContext() : void 0;
        }
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
        if (!_isGlobal) {
          _context.fallbackContext = void 0;
        }
      }
    } else {
      ret = fn(_context);
    }
    if (isNumber(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  }
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString$1(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$1(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, assign$1({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$1(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$1(val));
  }
  function normalize(values) {
    return values.map((val) => isString$1(val) ? createTextNode(val) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps((context) => {
      let ret;
      const _context2 = context;
      try {
        _context2.processor = processor;
        ret = Reflect.apply(translate, null, [_context2, ...args]);
      } finally {
        _context2.processor = null;
      }
      return ret;
    }, () => parseTranslateArgs(...args), "translate", (root) => root[TransrateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray$1(val));
  }
  function numberParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), () => [], (val) => isString$1(val) || isArray$1(val));
  }
  function datetimeParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), () => [], (val) => isString$1(val) || isArray$1(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = isString$1(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign$1(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign$1(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    vue_cjs_prod.watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    vue_cjs_prod.watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TransrateVNodeSymbol] = transrateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
function convertComposerOptions(options) {
  const locale = isString$1(options.locale) ? options.locale : DEFAULT_LOCALE$1;
  const fallbackLocale = isString$1(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const missing = isFunction$1(options.missing) ? options.missing : void 0;
  const missingWarn = isBoolean$1(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = isBoolean$1(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = isBoolean$1(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : void 0;
  const warnHtmlMessage = isString$1(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = isBoolean$1(options.sync) ? options.sync : true;
  let messages = options.messages;
  if (isPlainObject(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages = locales.reduce((messages2, locale2) => {
      const message = messages2[locale2] || (messages2[locale2] = {});
      assign$1(message, sharedMessages[locale2]);
      return messages2;
    }, messages || {});
  }
  const { __i18n, __root, __injectWithOption } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  return {
    locale,
    fallbackLocale,
    messages,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    messageResolver: options.messageResolver,
    inheritLocale,
    __i18n,
    __root,
    __injectWithOption
  };
}
function createVueI18n(options = {}, VueI18nLegacy) {
  {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      id: composer.id,
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      get messages() {
        return composer.messages.value;
      },
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      get numberFormats() {
        return composer.numberFormats.value;
      },
      get availableLocales() {
        return composer.availableLocales;
      },
      get formatter() {
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
      },
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      get silentTranslationWarn() {
        return isBoolean$1(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean$1(val) ? !val : val;
      },
      get silentFallbackWarn() {
        return isBoolean$1(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean$1(val) ? !val : val;
      },
      get modifiers() {
        return composer.modifiers;
      },
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      get preserveDirectiveContent() {
        return true;
      },
      set preserveDirectiveContent(val) {
      },
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      __composer: composer,
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString$1(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString$1(arg2)) {
          options2.locale = arg2;
        } else if (isArray$1(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray$1(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      rt(...args) {
        return Reflect.apply(composer.rt, composer, [...args]);
      },
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString$1(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString$1(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray$1(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString$1(arg3)) {
          options2.locale = arg3;
        } else if (isArray$1(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      te(key, locale) {
        return composer.te(key, locale);
      },
      tm(key) {
        return composer.tm(key);
      },
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      d(...args) {
        return Reflect.apply(composer.d, composer, [...args]);
      },
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      n(...args) {
        return Reflect.apply(composer.n, composer, [...args]);
      },
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      getChoiceIndex(choice, choicesLength) {
        return -1;
      },
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    return vueI18n;
  }
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return slot = [
        ...slot,
        ...isArray$1(current.children) ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return vue_cjs_prod.Fragment;
}
const Translation = {
  name: "i18n-t",
  props: assign$1({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    const keys = Object.keys(slots).filter((key) => key !== "_");
    return () => {
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString$1(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign$1({}, attrs);
      const tag = isString$1(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag();
      return vue_cjs_prod.h(tag, assignedAttrs, children);
    };
  }
};
function isVNode(target) {
  return isArray$1(target) && !isString$1(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString$1(props.format)) {
      options.key = props.format;
    } else if (isObject$1(props.format)) {
      if (isString$1(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign$1({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray$1(parts)) {
      children = parts.map((part, index2) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index: index2, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index2}`;
        }
        return node;
      });
    } else if (isString$1(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign$1({}, attrs);
    const tag = isString$1(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag();
    return vue_cjs_prod.h(tag, assignedAttrs, children);
  };
}
const NUMBER_FORMAT_KEYS = [
  "localeMatcher",
  "style",
  "unit",
  "unitDisplay",
  "currency",
  "currencyDisplay",
  "useGrouping",
  "numberingSystem",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "notation",
  "formatMatcher"
];
const NumberFormat = {
  name: "i18n-n",
  props: assign$1({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
  }
};
const DATETIME_FORMAT_KEYS = [
  "dateStyle",
  "timeStyle",
  "fractionalSecondDigits",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "localeMatcher",
  "timeZone",
  "hour12",
  "hourCycle",
  "formatMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName"
];
const DatetimeFormat = {
  name: "i18n-d",
  props: assign$1({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
  }
};
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const bind = (el, { instance, value, modifiers }) => {
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    const parsedValue = parseValue(value);
    el.textContent = Reflect.apply(composer.t, composer, [
      ...makeParams(parsedValue)
    ]);
  };
  return {
    beforeMount: bind,
    beforeUpdate: bind
  };
}
function parseValue(value) {
  if (isString$1(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString$1(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean$1(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
function defineMixin(vuei18n, composer, i18n) {
  return {
    beforeCreate() {
      const instance = vue_cjs_prod.getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          this.$i18n = createVueI18n(optionsI18n);
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, options);
        } else {
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __root: composer
          });
        }
      } else {
        this.$i18n = vuei18n;
      }
      if (options.__i18nGlobal) {
        adjustI18nResources(composer, options, options);
      }
      vuei18n.__onComponentInstanceCreated(this.$i18n);
      i18n.__setInstance(instance, this.$i18n);
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$tc = (...args) => this.$i18n.tc(...args);
      this.$te = (key, locale) => this.$i18n.te(key, locale);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = (key) => this.$i18n.tm(key);
    },
    mounted() {
    },
    unmounted() {
      const instance = vue_cjs_prod.getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      delete this.$t;
      delete this.$rt;
      delete this.$tc;
      delete this.$te;
      delete this.$d;
      delete this.$n;
      delete this.$tm;
      i18n.__deleteInstance(instance);
      delete this.$i18n;
    }
  };
}
function mergeToRoot(root, options) {
  root.locale = options.locale || root.locale;
  root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
  root.missing = options.missing || root.missing;
  root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
  root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
  root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
  root.postTranslation = options.postTranslation || root.postTranslation;
  root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
  root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
  root.sync = options.sync || root.sync;
  root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
  const messages = getLocaleMessages(root.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages).forEach((locale) => root.mergeLocaleMessage(locale, messages[locale]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
  }
  return root;
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol$1("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __legacyMode = __VUE_I18N_LEGACY_API__ && isBoolean$1(options.legacy) ? options.legacy : __VUE_I18N_LEGACY_API__;
  const __globalInjection = isBoolean$1(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = __VUE_I18N_LEGACY_API__ && __legacyMode ? !!options.allowComposition : true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options, __legacyMode);
  const symbol = makeSymbol$1("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && __legacyMode ? "legacy" : "composition";
      },
      get allowComposition() {
        return __allowComposition;
      },
      async install(app, ...options2) {
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n.global);
        }
        if (__VUE_I18N_FULL_INSTALL__) {
          apply(app, i18n, ...options2);
        }
        if (__VUE_I18N_LEGACY_API__ && __legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n));
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          i18n.dispose();
          unmountApp();
        };
      },
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      __instances,
      __getInstance,
      __setInstance,
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = vue_cjs_prod.getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (__VUE_I18N_LEGACY_API__) {
    if (i18n.mode === "legacy" && !options.__useComponent) {
      if (!i18n.allowComposition) {
        throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
      }
      return useI18nForLegacy(instance, scope, global2, options);
    }
  }
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer$3(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign$1({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = vue_cjs_prod.effectScope();
  {
    const obj = __VUE_I18N_LEGACY_API__ && legacyMode ? scope.run(() => createVueI18n(options)) : scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = vue_cjs_prod.inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer$3(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      if (__VUE_I18N_LEGACY_API__) {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
          if (useComponent && composer && !composer[InejctWithOption]) {
            composer = null;
          }
        }
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n, target, composer) {
  {
    vue_cjs_prod.onMounted(() => {
    }, target);
    vue_cjs_prod.onUnmounted(() => {
      i18n.__deleteInstance(target);
    }, target);
  }
}
function useI18nForLegacy(instance, scope, root, options = {}) {
  const isLocale = scope === "local";
  const _composer = vue_cjs_prod.shallowRef(null);
  if (isLocale && instance.proxy && !instance.proxy.$options.i18n) {
    throw createI18nError(I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  }
  const _inheritLocale = isBoolean$1(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = vue_cjs_prod.ref(isLocale && _inheritLocale ? root.locale.value : isString$1(options.locale) ? options.locale : DEFAULT_LOCALE$1);
  const _fallbackLocale = vue_cjs_prod.ref(isLocale && _inheritLocale ? root.fallbackLocale.value : isString$1(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
  const _messages = vue_cjs_prod.ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = vue_cjs_prod.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = vue_cjs_prod.ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  const _missingWarn = isLocale ? root.missingWarn : isBoolean$1(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const _fallbackWarn = isLocale ? root.fallbackWarn : isBoolean$1(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const _fallbackRoot = isLocale ? root.fallbackRoot : isBoolean$1(options.fallbackRoot) ? options.fallbackRoot : true;
  const _fallbackFormat = !!options.fallbackFormat;
  const _missing = isFunction$1(options.missing) ? options.missing : null;
  const _postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  const _warnHtmlMessage = isLocale ? root.warnHtmlMessage : isBoolean$1(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const _escapeParameter = !!options.escapeParameter;
  const _modifiers = isLocale ? root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  const _pluralRules = options.pluralRules || isLocale && root.pluralRules;
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = vue_cjs_prod.computed({
    get: () => {
      return _composer.value ? _composer.value.locale.value : _locale.value;
    },
    set: (val) => {
      if (_composer.value) {
        _composer.value.locale.value = val;
      }
      _locale.value = val;
    }
  });
  const fallbackLocale = vue_cjs_prod.computed({
    get: () => {
      return _composer.value ? _composer.value.fallbackLocale.value : _fallbackLocale.value;
    },
    set: (val) => {
      if (_composer.value) {
        _composer.value.fallbackLocale.value = val;
      }
      _fallbackLocale.value = val;
    }
  });
  const messages = vue_cjs_prod.computed(() => {
    if (_composer.value) {
      return _composer.value.messages.value;
    } else {
      return _messages.value;
    }
  });
  const datetimeFormats = vue_cjs_prod.computed(() => _datetimeFormats.value);
  const numberFormats = vue_cjs_prod.computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return _composer.value ? _composer.value.getPostTranslationHandler() : _postTranslation;
  }
  function setPostTranslationHandler(handler) {
    if (_composer.value) {
      _composer.value.setPostTranslationHandler(handler);
    }
  }
  function getMissingHandler() {
    return _composer.value ? _composer.value.getMissingHandler() : _missing;
  }
  function setMissingHandler(handler) {
    if (_composer.value) {
      _composer.value.setMissingHandler(handler);
    }
  }
  function warpWithDeps(fn) {
    trackReactivityValues();
    return fn();
  }
  function t(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.t, null, [...args])) : warpWithDeps(() => "");
  }
  function rt(...args) {
    return _composer.value ? Reflect.apply(_composer.value.rt, null, [...args]) : "";
  }
  function d(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.d, null, [...args])) : warpWithDeps(() => "");
  }
  function n(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.n, null, [...args])) : warpWithDeps(() => "");
  }
  function tm(key) {
    return _composer.value ? _composer.value.tm(key) : {};
  }
  function te(key, locale2) {
    return _composer.value ? _composer.value.te(key, locale2) : false;
  }
  function getLocaleMessage(locale2) {
    return _composer.value ? _composer.value.getLocaleMessage(locale2) : {};
  }
  function setLocaleMessage(locale2, message) {
    if (_composer.value) {
      _composer.value.setLocaleMessage(locale2, message);
      _messages.value[locale2] = message;
    }
  }
  function mergeLocaleMessage(locale2, message) {
    if (_composer.value) {
      _composer.value.mergeLocaleMessage(locale2, message);
    }
  }
  function getDateTimeFormat(locale2) {
    return _composer.value ? _composer.value.getDateTimeFormat(locale2) : {};
  }
  function setDateTimeFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.setDateTimeFormat(locale2, format2);
      _datetimeFormats.value[locale2] = format2;
    }
  }
  function mergeDateTimeFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.mergeDateTimeFormat(locale2, format2);
    }
  }
  function getNumberFormat(locale2) {
    return _composer.value ? _composer.value.getNumberFormat(locale2) : {};
  }
  function setNumberFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.setNumberFormat(locale2, format2);
      _numberFormats.value[locale2] = format2;
    }
  }
  function mergeNumberFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.mergeNumberFormat(locale2, format2);
    }
  }
  const wrapper = {
    get id() {
      return _composer.value ? _composer.value.id : -1;
    },
    locale,
    fallbackLocale,
    messages,
    datetimeFormats,
    numberFormats,
    get inheritLocale() {
      return _composer.value ? _composer.value.inheritLocale : _inheritLocale;
    },
    set inheritLocale(val) {
      if (_composer.value) {
        _composer.value.inheritLocale = val;
      }
    },
    get availableLocales() {
      return _composer.value ? _composer.value.availableLocales : Object.keys(_messages.value);
    },
    get modifiers() {
      return _composer.value ? _composer.value.modifiers : _modifiers;
    },
    get pluralRules() {
      return _composer.value ? _composer.value.pluralRules : _pluralRules;
    },
    get isGlobal() {
      return _composer.value ? _composer.value.isGlobal : false;
    },
    get missingWarn() {
      return _composer.value ? _composer.value.missingWarn : _missingWarn;
    },
    set missingWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackWarn() {
      return _composer.value ? _composer.value.fallbackWarn : _fallbackWarn;
    },
    set fallbackWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackRoot() {
      return _composer.value ? _composer.value.fallbackRoot : _fallbackRoot;
    },
    set fallbackRoot(val) {
      if (_composer.value) {
        _composer.value.fallbackRoot = val;
      }
    },
    get fallbackFormat() {
      return _composer.value ? _composer.value.fallbackFormat : _fallbackFormat;
    },
    set fallbackFormat(val) {
      if (_composer.value) {
        _composer.value.fallbackFormat = val;
      }
    },
    get warnHtmlMessage() {
      return _composer.value ? _composer.value.warnHtmlMessage : _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      if (_composer.value) {
        _composer.value.warnHtmlMessage = val;
      }
    },
    get escapeParameter() {
      return _composer.value ? _composer.value.escapeParameter : _escapeParameter;
    },
    set escapeParameter(val) {
      if (_composer.value) {
        _composer.value.escapeParameter = val;
      }
    },
    t,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    rt,
    d,
    n,
    tm,
    te,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getDateTimeFormat,
    setDateTimeFormat,
    mergeDateTimeFormat,
    getNumberFormat,
    setNumberFormat,
    mergeNumberFormat
  };
  function sync(composer) {
    composer.locale.value = _locale.value;
    composer.fallbackLocale.value = _fallbackLocale.value;
    Object.keys(_messages.value).forEach((locale2) => {
      composer.mergeLocaleMessage(locale2, _messages.value[locale2]);
    });
    Object.keys(_datetimeFormats.value).forEach((locale2) => {
      composer.mergeDateTimeFormat(locale2, _datetimeFormats.value[locale2]);
    });
    Object.keys(_numberFormats.value).forEach((locale2) => {
      composer.mergeNumberFormat(locale2, _numberFormats.value[locale2]);
    });
    composer.escapeParameter = _escapeParameter;
    composer.fallbackFormat = _fallbackFormat;
    composer.fallbackRoot = _fallbackRoot;
    composer.fallbackWarn = _fallbackWarn;
    composer.missingWarn = _missingWarn;
    composer.warnHtmlMessage = _warnHtmlMessage;
  }
  vue_cjs_prod.onBeforeMount(() => {
    if (instance.proxy == null || instance.proxy.$i18n == null) {
      throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    }
    const composer = _composer.value = instance.proxy.$i18n.__composer;
    if (scope === "global") {
      _locale.value = composer.locale.value;
      _fallbackLocale.value = composer.fallbackLocale.value;
      _messages.value = composer.messages.value;
      _datetimeFormats.value = composer.datetimeFormats.value;
      _numberFormats.value = composer.numberFormats.value;
    } else if (isLocale) {
      sync(composer);
    }
  });
  return wrapper;
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = vue_cjs_prod.isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  initFeatureFlags();
}
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const STRATEGIES = {
  PREFIX: "prefix",
  PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
  PREFIX_AND_DEFAULT: "prefix_and_default",
  NO_PREFIX: "no_prefix"
};
const DEFAULT_LOCALE = "";
const DEFAULT_STRATEGY = STRATEGIES.PREFIX_EXCEPT_DEFAULT;
const DEFAULT_TRAILING_SLASH = false;
const DEFAULT_ROUTES_NAME_SEPARATOR = "___";
const DEFAULT_LOCALE_ROUTE_NAME_SUFFIX = "default";
const DEFAULT_DETECTION_DIRECTION = "ltr";
const DEFAULT_BASE_URL = "";
/*!
  * shared v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const assign = Object.assign;
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[vue-i18n-routing] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
function getNormalizedLocales(locales) {
  locales = locales || [];
  const normalized = [];
  for (const locale of locales) {
    if (isString(locale)) {
      normalized.push({ code: locale });
    } else {
      normalized.push(locale);
    }
  }
  return normalized;
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && vue_cjs_prod.isRef(target.locale);
}
function isVueI18n(target) {
  return target != null && "__composer" in target;
}
function isExportedGlobalComposer(target) {
  return target != null && !("__composer" in target) && !vue_cjs_prod.isRef(target.locale);
}
function isLegacyVueI18n(target) {
  return target != null && ("__VUE_I18N_BRIDGE__" in target || "_sync" in target);
}
function getComposer(i18n) {
  return isI18nInstance(i18n) ? isComposer(i18n.global) ? i18n.global : i18n.global.__composer : isVueI18n(i18n) ? i18n.__composer : i18n;
}
function getLocale(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.locale.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n(target) ? target.locale : target.locale;
}
function getLocales(i18n) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  return isComposer(target) ? target.locales.value : isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n(target) ? target.locales : target.locales;
}
function setLocale(i18n, locale) {
  const target = isI18nInstance(i18n) ? i18n.global : i18n;
  if (isComposer(target)) {
    {
      target.locale.value = locale;
    }
  } else if (isExportedGlobalComposer(target) || isVueI18n(target) || isLegacyVueI18n(target)) {
    target.locale = locale;
  } else {
    throw new Error("TODO:");
  }
}
function getRouteName(routeName) {
  return isString(routeName) ? routeName : isSymbol(routeName) ? routeName.toString() : "(null)";
}
function getLocaleRouteName(routeName, locale, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  let name = getRouteName(routeName) + (strategy === "no_prefix" ? "" : routesNameSeparator + locale);
  if (locale === defaultLocale && strategy === "prefix_and_default") {
    name += routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name;
}
function resolveBaseUrl(baseUrl, context) {
  if (isFunction(baseUrl)) {
    return baseUrl(context);
  }
  return baseUrl;
}
function proxyVueInstance(target) {
  return function() {
    return Reflect.apply(target, {
      getRouteBaseName: this.getRouteBaseName,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      resolveRoute: this.resolveRoute,
      switchLocalePath: this.switchLocalePath,
      localeHead: this.localeHead,
      i18n: this.$i18n,
      route: this.$route,
      router: this.$router
    }, arguments);
  };
}
function extendI18n(i18n, { locales = [], localeCodes: localeCodes2 = [], baseUrl = DEFAULT_BASE_URL, hooks = {} } = {}) {
  const scope = vue_cjs_prod.effectScope();
  const orgInstall = i18n.install;
  i18n.install = (vue, ...options) => {
    Reflect.apply(orgInstall, i18n, [vue, ...options]);
    const composer = getComposer(i18n);
    scope.run(() => extendComposer(composer, { locales, localeCodes: localeCodes2, baseUrl, hooks }));
    if (isVueI18n(i18n.global)) {
      extendVueI18n(i18n.global, hooks.onExtendVueI18n);
    }
    const app = vue;
    const exported = i18n.mode === "composition" ? app.config.globalProperties.$i18n : null;
    if (exported) {
      extendExportedGlobal(exported, composer, hooks.onExtendExportedGlobal);
    }
    const pluginOptions = isPluginOptions(options[0]) ? options[0] : { inject: true };
    if (pluginOptions.inject) {
      vue.mixin({
        methods: {
          resolveRoute: proxyVueInstance(resolveRoute),
          localePath: proxyVueInstance(localePath),
          localeRoute: proxyVueInstance(localeRoute),
          localeLocation: proxyVueInstance(localeLocation),
          switchLocalePath: proxyVueInstance(switchLocalePath),
          getRouteBaseName: proxyVueInstance(getRouteBaseName),
          localeHead: proxyVueInstance(localeHead)
        }
      });
    }
    if (app.unmount) {
      const unmountApp = app.unmount;
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
  return scope;
}
function extendComposer(composer, options) {
  const { locales, localeCodes: localeCodes2, baseUrl } = options;
  const _locales = vue_cjs_prod.ref(locales);
  const _localeCodes = vue_cjs_prod.ref(localeCodes2);
  composer.locales = vue_cjs_prod.computed(() => _locales.value);
  composer.localeCodes = vue_cjs_prod.computed(() => _localeCodes.value);
  composer.__baseUrl = resolveBaseUrl(baseUrl, {});
  if (options.hooks && options.hooks.onExtendComposer) {
    options.hooks.onExtendComposer(composer);
  }
}
function extendExportedGlobal(exported, global2, hook) {
  const properties = [
    {
      locales: {
        get() {
          return global2.locales.value;
        }
      },
      localeCodes: {
        get() {
          return global2.localeCodes.value;
        }
      },
      __baseUrl: {
        get() {
          return global2.__baseUrl;
        }
      }
    }
  ];
  hook && properties.push(hook(global2));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(exported, key, descriptor);
    }
  }
}
function extendVueI18n(vueI18n, hook) {
  const composer = getComposer(vueI18n);
  const properties = [
    {
      locales: {
        get() {
          return composer.locales.value;
        }
      },
      localeCodes: {
        get() {
          return composer.localeCodes.value;
        }
      },
      __baseUrl: {
        get() {
          return composer.__baseUrl;
        }
      }
    }
  ];
  hook && properties.push(hook(composer));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(vueI18n, key, descriptor);
    }
  }
}
function isPluginOptions(options) {
  return isObject(options) && "inject" in options && isBoolean(options.inject);
}
const GlobalOptionsRegistory = makeSymbol("vue-i18n-routing-gor");
function registerGlobalOptions(router, options) {
  const _options = router[GlobalOptionsRegistory];
  if (_options) {
    warn("already registered global options");
  } else {
    router[GlobalOptionsRegistory] = options;
  }
}
function getGlobalOptions(router) {
  var _a;
  return (_a = router[GlobalOptionsRegistory]) != null ? _a : {};
}
function getLocalesRegex(localeCodes2) {
  return new RegExp(`^/(${localeCodes2.join("|")})(?:/|$)`, "i");
}
function createLocaleFromRouteGetter(localeCodes2, routesNameSeparator, defaultLocaleRouteNameSuffix) {
  const localesPattern = `(${localeCodes2.join("|")})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  const regexpPath = getLocalesRegex(localeCodes2);
  const getLocaleFromRoute = (route) => {
    if (isObject(route)) {
      if (route.name) {
        const name = isString(route.name) ? route.name : route.name.toString();
        const matches = name.match(regexpName);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      } else if (route.path) {
        const matches = route.path.match(regexpPath);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      }
    } else if (isString(route)) {
      const matches = route.match(regexpPath);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    }
    return "";
  };
  return getLocaleFromRoute;
}
function getI18nRoutingOptions(router, proxy, {
  defaultLocale = DEFAULT_LOCALE,
  defaultDirection = DEFAULT_DETECTION_DIRECTION,
  defaultLocaleRouteNameSuffix = DEFAULT_LOCALE_ROUTE_NAME_SUFFIX,
  routesNameSeparator = DEFAULT_ROUTES_NAME_SEPARATOR,
  strategy = DEFAULT_STRATEGY,
  trailingSlash = DEFAULT_TRAILING_SLASH,
  localeCodes: localeCodes2 = []
} = {}) {
  const options = getGlobalOptions(router);
  return {
    defaultLocale: proxy.defaultLocale || options.defaultLocale || defaultLocale,
    defaultDirection: proxy.defaultDirection || options.defaultDirection || defaultDirection,
    defaultLocaleRouteNameSuffix: proxy.defaultLocaleRouteNameSuffix || options.defaultLocaleRouteNameSuffix || defaultLocaleRouteNameSuffix,
    routesNameSeparator: proxy.routesNameSeparator || options.routesNameSeparator || routesNameSeparator,
    strategy: proxy.strategy || options.strategy || strategy,
    trailingSlash: proxy.trailingSlash || options.trailingSlash || trailingSlash,
    localeCodes: proxy.localeCodes || options.localeCodes || localeCodes2
  };
}
const RESOLVED_PREFIXED = /* @__PURE__ */ new Set([STRATEGIES.PREFIX_AND_DEFAULT, STRATEGIES.PREFIX_EXCEPT_DEFAULT]);
function getRouteBaseName(givenRoute) {
  const router = this.router;
  const { routesNameSeparator } = getI18nRoutingOptions(router, this);
  const route = givenRoute != null ? vue_cjs_prod.isRef(givenRoute) ? vue_cjs_prod.unref(givenRoute) : givenRoute : this.route;
  if (!route.name) {
    return;
  }
  const name = getRouteName(route.name);
  return name.split(routesNameSeparator)[0];
}
function localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute == null ? "" : localizedRoute.redirectedFrom || localizedRoute.fullPath;
}
function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved == null ? void 0 : resolved;
}
function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved == null ? void 0 : resolved;
}
function resolveRoute(route, locale) {
  const router = this.router;
  const i18n = this.i18n;
  const _locale = locale || getLocale(i18n);
  const { routesNameSeparator, defaultLocale, defaultLocaleRouteNameSuffix, strategy, trailingSlash } = getI18nRoutingOptions(router, this);
  let _route = route;
  if (isString(route)) {
    if (_route[0] === "/") {
      _route = { path: route };
    } else {
      _route = { name: route };
    }
  }
  let localizedRoute = assign({}, _route);
  if (localizedRoute.path && !localizedRoute.name) {
    const _resolvedRoute = router.resolve(localizedRoute);
    const resolvedRoute2 = _resolvedRoute;
    const resolvedRouteName = getRouteBaseName.call(this, resolvedRoute2);
    if (isString(resolvedRouteName)) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, _locale, {
          defaultLocale,
          strategy,
          routesNameSeparator,
          defaultLocaleRouteNameSuffix
        }),
        params: resolvedRoute2.params,
        query: resolvedRoute2.query,
        hash: resolvedRoute2.hash
      };
    } else {
      const isDefaultLocale = _locale === defaultLocale;
      const isPrefixed = !(isDefaultLocale && RESOLVED_PREFIXED.has(strategy)) && !(strategy === STRATEGIES.NO_PREFIX);
      if (isPrefixed) {
        localizedRoute.path = `/${_locale}${localizedRoute.path}`;
      }
      localizedRoute.path = trailingSlash ? withTrailingSlash(localizedRoute.path, true) : withoutTrailingSlash(localizedRoute.path, true);
    }
  } else {
    localizedRoute.name = getLocaleRouteName(localizedRoute.name, _locale, {
      defaultLocale,
      strategy,
      routesNameSeparator,
      defaultLocaleRouteNameSuffix
    });
    const { params } = localizedRoute;
    if (params && params["0"] === void 0 && params.pathMatch) {
      params["0"] = params.pathMatch;
    }
  }
  const resolvedRoute = router.resolve(localizedRoute);
  if (resolvedRoute.name) {
    return resolvedRoute;
  }
  return router.resolve(route);
}
function switchLocalePath(locale) {
  const route = this.route;
  const name = getRouteBaseName.call(this, route);
  if (!name) {
    return "";
  }
  const _a = route, { params } = _a, routeCopy = __objRest(_a, ["params"]);
  const langSwitchParams = {};
  const baseRoute = assign({}, routeCopy, {
    name,
    params: __spreadProps2(__spreadValues2(__spreadValues2({}, params), langSwitchParams), {
      0: params.pathMatch
    })
  });
  const path = localePath.call(this, baseRoute, locale);
  return path;
}
function localeHead({ addDirAttribute = false, addSeoAttributes = false } = {}) {
  const router = this.router;
  const i18n = this.i18n;
  const { defaultDirection } = getI18nRoutingOptions(router, this);
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  if (i18n.locales == null || i18n.__baseUrl == null) {
    return metaObject;
  }
  const locale = getLocale(i18n);
  const locales = getLocales(i18n);
  const currentLocale = getNormalizedLocales(locales).find((l) => l.code === locale) || {
    code: locale
  };
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || defaultDirection;
  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  if (addSeoAttributes && locale && i18n.locales) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso;
    }
    addHreflangLinks.call(this, locales, i18n.__baseUrl, metaObject.link);
    addCanonicalLinks.call(this, i18n.__baseUrl, metaObject.link, addSeoAttributes);
    addCurrentOgLocale(currentLocale, currentLocaleIso, metaObject.meta);
    addAlternateOgLocales(locales, currentLocaleIso, metaObject.meta);
  }
  return metaObject;
}
function addHreflangLinks(locales, baseUrl, link) {
  const router = this.router;
  const { defaultLocale, strategy } = getI18nRoutingOptions(router, this);
  if (strategy === STRATEGIES.NO_PREFIX) {
    return;
  }
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale of locales) {
    const localeIso = locale.iso;
    if (!localeIso) {
      warn("Locale ISO code is required to generate alternate link");
      continue;
    }
    const [language, region] = localeIso.split("-");
    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }
    localeMap.set(localeIso, locale);
  }
  for (const [iso, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath.call(this, mapLocale.code);
    if (localePath2) {
      link.push({
        hid: `i18n-alt-${iso}`,
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: iso
      });
    }
  }
  if (defaultLocale) {
    const localePath2 = switchLocalePath.call(this, defaultLocale);
    if (localePath2) {
      link.push({
        hid: "i18n-xd",
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: "x-default"
      });
    }
  }
}
function addCanonicalLinks(baseUrl, link, seoAttributesOptions) {
  const route = this.route;
  const currentRoute = localeRoute.call(this, __spreadProps2(__spreadValues2({}, route), {
    name: getRouteBaseName.call(this, route)
  }));
  if (currentRoute) {
    let href = toAbsoluteUrl(currentRoute.path, baseUrl);
    const canonicalQueries = isObject(seoAttributesOptions) && seoAttributesOptions.canonicalQueries || [];
    if (canonicalQueries.length) {
      const currentRouteQueryParams = currentRoute.query;
      const params = new URLSearchParams();
      for (const queryParamName of canonicalQueries) {
        if (queryParamName in currentRouteQueryParams) {
          const queryParamValue = currentRouteQueryParams[queryParamName];
          if (isArray(queryParamValue)) {
            queryParamValue.forEach((v) => params.append(queryParamName, v || ""));
          } else {
            params.append(queryParamName, queryParamValue || "");
          }
        }
      }
      const queryString = params.toString();
      if (queryString) {
        href = `${href}?${queryString}`;
      }
    }
    link.push({
      hid: "i18n-can",
      rel: "canonical",
      href
    });
  }
}
function addCurrentOgLocale(currentLocale, currentLocaleIso, meta2) {
  const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;
  if (!hasCurrentLocaleAndIso) {
    return;
  }
  meta2.push({
    hid: "i18n-og",
    property: "og:locale",
    content: hypenToUnderscore(currentLocaleIso)
  });
}
function addAlternateOgLocales(locales, currentLocaleIso, meta2) {
  const localesWithoutCurrent = locales.filter((locale) => {
    const localeIso = locale.iso;
    return localeIso && localeIso !== currentLocaleIso;
  });
  if (localesWithoutCurrent.length) {
    const alternateLocales = localesWithoutCurrent.map((locale) => ({
      hid: `i18n-og-alt-${locale.iso}`,
      property: "og:locale:alternate",
      content: hypenToUnderscore(locale.iso)
    }));
    meta2.push(...alternateLocales);
  }
}
function hypenToUnderscore(str) {
  return (str || "").replace(/-/g, "_");
}
function toAbsoluteUrl(urlOrPath, baseUrl) {
  if (urlOrPath.match(/^https?:\/\//)) {
    return urlOrPath;
  }
  return baseUrl + urlOrPath;
}
const localeCodes = ["en", "es"];
const loadMessages = async () => {
  const messages = Object({});
  return Promise.resolve(messages);
};
const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({});
  const vueI18nOptionsLoader = async (context2) => Object({ "fallbackLocale": "en", "messages": Object({ "es": Object({ "home": "Inicio", "profile": "Mi perfil", "myPets": "Mis gatos", "todayThereIsNewPosts": "Hoy hay nuevas publicaciones para ver", "minutesAgo": "Hace un momento | Hace un minuto | Hace {n} minutos", "hoursAgo": "Hace una hora | Hace {n} horas", "daysAgo": "Hace un d\xEDa | Hace {n} d\xEDas", "monthsName": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"], "date": ({ named, linked }) => `${named("day")} de ${linked(`monthsName.${named("month")}`)} del ${named("year")} a las ${named("hours")}:${named("minutes")} ${named("ampm")}`, "seePost": "Ver publicaci\xF3n", "deleteComment": "Eliminar publicaci\xF3n", "rusDeleteComment": "\xBFEsta seguro de eliminar este comentario?", "cancel": "Cancelar", "delete": "Eliminar", "editComment": "Editar comentario", "save": "Guardar", "search": "Buscar", "like": "Me encanta", "peopleLikedComment": "These people liked this comment", "previousComments": "Comentarios anteriores", "timeAgo": ({ named, linked }) => {
    const ahora = Date.now();
    const date = named("date");
    let diferencia = Math.trunc((ahora / 1e3 - date) / 60);
    if (diferencia < 60) {
      return linked("message.minutesAgo", diferencia);
    }
    diferencia = Math.trunc(diferencia / 60);
    if (diferencia < 24) {
      return linked("hoursAgo", diferencia);
    }
    diferencia = Math.trunc(diferencia / 24);
    if (diferencia < 14) {
      return linked("daysAgo", diferencia);
    }
    const fecha = new Date(date * 1e3);
    const mm = fecha.getMinutes();
    const h2 = fecha.getHours();
    const d = fecha.getDate();
    const m = fecha.getMonth();
    const y = fecha.getFullYear();
    return linked("date", { year: y, month: m, day: d, hours: h2 % 12, minutes: mm < 10 ? "0" + mm : mm, ampm: h2 > 11 ? "PM" : "AM" });
  } }), "en": Object({ "home": "Home", "profile": "My profile", "myPets": "My cats", "todayThereIsNewPosts": "Today there is new posts to see", "minutesAgo": "A momment ago | A minute ago | {n} minutes ago", "hoursAgo": "An hour ago | {n} hours ago", "daysAgo": "A day ago | {n} days ago", "monthsName": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], "date": ({ named, linked }) => `${named("day")} ${linked(`monthsName.${named("month")}`)} ${named("year")} at ${named("hours")}:${named("minutes")} ${named("ampm")}`, "seePost": "See post" }) }) });
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader();
  nuxtI18nOptions.locales = ["en", "es"];
  nuxtI18nOptions.defaultLocale = "es";
  nuxtI18nOptions.defaultDirection = "ltr";
  nuxtI18nOptions.routesNameSeparator = "___";
  nuxtI18nOptions.trailingSlash = false;
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default";
  nuxtI18nOptions.strategy = "no_prefix";
  nuxtI18nOptions.lazy = false;
  nuxtI18nOptions.langDir = null;
  nuxtI18nOptions.baseUrl = "";
  nuxtI18nOptions.pages = Object({});
  return nuxtI18nOptions;
};
const nuxtI18nInternalOptions = Object({ __normalizedLocales: [Object({ "code": "en" }), Object({ "code": "es" })] });
async function loadAndSetLocale(newLocale, i18n) {
  if (!newLocale) {
    return;
  }
  const oldLocale = getLocale(i18n);
  if (newLocale === oldLocale) {
    return;
  }
  setLocale(i18n, newLocale);
  console.log("loadAndSetLocale", newLocale, oldLocale, i18n);
}
function getBrowserLocale(options, context) {
  {
    {
      throw new Error("Not implement for nuxt3 options API style");
    }
  }
}
const nuxt3Plugin_1ee1e800 = defineNuxtPlugin(async (nuxt) => {
  const router = useRouter();
  const { vueApp: app } = nuxt;
  const nuxtI18nOptions = await resolveNuxtI18nOptions();
  const getLocaleFromRoute = createLocaleFromRouteGetter(localeCodes, nuxtI18nOptions.routesNameSeparator, nuxtI18nOptions.defaultLocaleRouteNameSuffix);
  const vueI18nOptions = nuxtI18nOptions.vueI18n;
  registerGlobalOptions(router, nuxtI18nOptions);
  const messages = await loadMessages();
  if (!isEmptyObject(messages)) {
    vueI18nOptions.messages = messages;
  }
  const initialLocale = vueI18nOptions.locale || "en-US";
  const i18n = createI18n(__spreadProps(__spreadValues({}, vueI18nOptions), {
    locale: nuxtI18nOptions.defaultLocale
  }));
  extendI18n(i18n, {
    locales: nuxtI18nOptions.locales,
    localeCodes,
    baseUrl: nuxtI18nOptions.baseUrl,
    hooks: {
      onExtendComposer(composer) {
        const _localeProperties = vue_cjs_prod.ref(nuxtI18nInternalOptions.__normalizedLocales.find((l) => l.code === composer.locale.value) || {
          code: composer.locale.value
        });
        composer.localeProperties = vue_cjs_prod.computed(() => _localeProperties.value);
        composer.setLocale = (locale) => loadAndSetLocale(locale, i18n);
        composer.getBrowserLocale = () => getBrowserLocale(nuxtI18nInternalOptions, nuxt.ssrContext);
      },
      onExtendExportedGlobal(global2) {
        return {
          localeProperties: {
            get() {
              return global2.localeProperties.value;
            }
          },
          getBrowserLocale: {
            get() {
              return () => Reflect.apply(global2.getBrowserLocale, global2, []);
            }
          }
        };
      },
      onExtendVueI18n(composer) {
        return {
          localeProperties: {
            get() {
              return composer.localeProperties.value;
            }
          },
          getBrowserLocale: {
            get() {
              return () => Reflect.apply(composer.getBrowserLocale, composer, []);
            }
          }
        };
      }
    }
  });
  app.use(i18n);
  {
    const finalLocale = getLocaleFromRoute(nuxt.ssrContext.url) || nuxtI18nOptions.defaultLocale || initialLocale;
    await loadAndSetLocale(finalLocale, i18n);
  }
});
const PiniaNuxtPlugin = (context, inject2) => {
  const pinia = createPinia();
  {
    context.vueApp.use(pinia);
  }
  inject2("pinia", pinia);
  context.pinia = pinia;
  setActivePinia(pinia);
  pinia._p.push(({ store }) => {
    Object.defineProperty(store, "$nuxt", { value: context });
  });
  {
    {
      context.nuxtState.pinia = pinia.state.value;
    }
  }
};
const _plugins = [
  preload,
  componentsPlugin_50ade27a,
  vueuseHead_4a9f6d35,
  _7cf82f29,
  _2f12118a,
  nuxt3Plugin_1ee1e800,
  PiniaNuxtPlugin
];
const _sfc_main$o = {
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "404"
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-011aae6d><div class="fixed left-0 right-0 spotlight z-10" data-v-011aae6d></div><div class="max-w-520px text-center z-20" data-v-011aae6d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-011aae6d>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-011aae6d>${serverRenderer.exports.ssrInterpolate(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-011aae6d>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Error404 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-011aae6d"]]);
const _sfc_main$n = {
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "500"
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-6aee6495><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-6aee6495></div><div class="max-w-520px text-center" data-v-6aee6495><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-6aee6495>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-6aee6495>${serverRenderer.exports.ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Error500 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-6aee6495"]]);
const _sfc_main$l = {
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const error = props.error;
    (error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = String(error.statusCode || 500);
    const is404 = statusCode === "404";
    const statusMessage = (_a = error.statusMessage) != null ? _a : is404 ? "Page Not Found" : "Internal Server Error";
    const description = error.message || error.toString();
    const stack = void 0;
    const ErrorTemplate = is404 ? Error404 : Error500;
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ErrorTemplate), vue_cjs_prod.mergeProps({ statusCode: vue_cjs_prod.unref(statusCode), statusMessage: vue_cjs_prod.unref(statusMessage), description: vue_cjs_prod.unref(description), stack: vue_cjs_prod.unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    vue_cjs_prod.onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, throwError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = vue_cjs_prod.resolveComponent("App");
      serverRenderer.exports.ssrRenderSuspense(_push, {
        default: () => {
          if (vue_cjs_prod.unref(error)) {
            _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(_sfc_main$l), { error: vue_cjs_prod.unref(error) }, null, _parent));
          } else {
            _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const layouts = {
  main: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return main;
  }))
};
const defaultLayoutTransition = { name: "layout", mode: "out-in" };
const __nuxt_component_0 = vue_cjs_prod.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout = (_b = (_a = vue_cjs_prod.isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      return _wrapIf(vue_cjs_prod.Transition, hasLayout && ((_c = route.meta.layoutTransition) != null ? _c : defaultLayoutTransition), _wrapIf(layouts[layout], hasLayout, context.slots)).default();
    };
  }
});
const _sfc_main$j = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$h]]);
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = vue_cjs_prod.createApp(_sfc_main$k);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
const _sfc_main$i = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UserShowComponent = _sfc_main$_;
  _push(`<!--[--> hola ${serverRenderer.exports.ssrInterpolate(_ctx.$route.params.username)} `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_UserShowComponent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/@[username].vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __username_ = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$g]]);
const __username_$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __username_
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  components: {
    PageEdit: _sfc_main$Z
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageEdit = vue_cjs_prod.resolveComponent("PageEdit");
  _push(serverRenderer.exports.ssrRenderComponent(_component_PageEdit, _attrs, null, _parent));
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/pages/[slug]/edit.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const edit$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$f]]);
const edit$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": edit$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  components: {
    PageCreate: _sfc_main$Y
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageCreate = vue_cjs_prod.resolveComponent("PageCreate");
  _push(serverRenderer.exports.ssrRenderComponent(_component_PageCreate, _attrs, null, _parent));
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/pages/create.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const create$4 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$e]]);
const create$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": create$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  components: {
    PagesList
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PagesList = vue_cjs_prod.resolveComponent("PagesList");
  _push(`<!--[--> lista de pages `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_PagesList, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/pages/index.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const index$e = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$d]]);
const index$f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  components: {
    ReportedPostsList
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ReportedPostsList = vue_cjs_prod.resolveComponent("ReportedPostsList");
  _push(`<!--[--> lista reprots posts `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ReportedPostsList, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/reports/posts/index.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const index$c = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$c]]);
const index$d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  components: {
    CreateReportType
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CreateReportType = vue_cjs_prod.resolveComponent("CreateReportType");
  _push(serverRenderer.exports.ssrRenderComponent(_component_CreateReportType, _attrs, null, _parent));
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/reports/types/create.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const create$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$b]]);
const create$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": create$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  components: {
    ReportTypesList
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ReportTypesList = vue_cjs_prod.resolveComponent("ReportTypesList");
  _push(`<!--[--> lista de rerpots types `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ReportTypesList, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/reports/types/index.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const index$a = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$a]]);
const index$b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  components: {
    UsersList
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UsersList = vue_cjs_prod.resolveComponent("UsersList");
  _push(serverRenderer.exports.ssrRenderComponent(_component_UsersList, _attrs, null, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const index$8 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$9]]);
const index$9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  components: {
    HomeComponent: _sfc_main$u
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}> bienvenido </div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const index$6 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$8]]);
const index$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageShow = _sfc_main$t;
  _push(serverRenderer.exports.ssrRenderComponent(_component_PageShow, _attrs, null, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pages/[slug].vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const _slug_$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _slug_
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(` pagina del gato ${serverRenderer.exports.ssrInterpolate(_ctx.$route.params.nickname)}`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pets/[nickname].vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _nickname_ = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _nickname_$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _nickname_
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  components: {
    PetsComponent
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PetsComponent = vue_cjs_prod.resolveComponent("PetsComponent");
  _push(`<!--[--> lista de pets `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_PetsComponent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pets/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const index$4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(` editar post `);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[id]/edit.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const edit = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const edit$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  components: {
    ViewPost
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ViewPost = vue_cjs_prod.resolveComponent("ViewPost");
  _push(`<!--[--> ver post ${serverRenderer.exports.ssrInterpolate(_ctx.$route.params.id)} `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ViewPost, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[id]/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(` crear template `);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/create.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const create$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  components: {
    UsersComponent
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UsersComponent = vue_cjs_prod.resolveComponent("UsersComponent");
  _push(`<!--[--> lista de usuarios xd `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_UsersComponent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = publicAssetsURL(`img/icons/icon-72x72.png`);
const __default__$1 = {
  components: {
    ImagePreloader
  },
  mounted() {
  },
  computed: {
    saludo() {
      var _a;
      const hour = new Date().getHours();
      const saludoStr = hour < 12 ? "Buenos d\xEDas" : hour < 18 ? "Buenas tardes" : "Buenas noches";
      return `Hola ${(_a = this.userLogged) == null ? void 0 : _a.name}, ${saludoStr} \u{1F431}`;
    },
    userLogged() {
      var _a;
      return (_a = this.mainStore) == null ? void 0 : _a.userLogged;
    }
  },
  methods: {
    logout() {
      axios.post(`${this.mainStore.backendUrl}/api/auth/logout`).then((response) => {
        window.location = "/";
      });
    },
    toggleMenu() {
      document.querySelector("#sidebar").classList.add("show-sidebar");
      document.querySelector("#dark").classList.add("show-dark");
      document.body.style.overflow = "hidden";
    }
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$4;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "py-2 px-0 pe-1 pe-sm-4 container-xxl" }, _attrs))} data-v-688a475f><div class="row g-0" data-v-688a475f><div class="col-auto d-xl-none" data-v-688a475f><span class="d-inline-block py-2 px-3" data-v-688a475f><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" data-v-688a475f><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" data-v-688a475f></path></svg></span></div><div class="col-auto d-none d-xl-block text-center" style="${serverRenderer.exports.ssrRenderStyle({ "width": "260px" })}" data-v-688a475f>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-decoration-none fw-bold text-black d-inline-block",
        style: { "font-size": "30px", "margin-top": "4px" }
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_0)} style="${serverRenderer.exports.ssrRenderStyle({ "height": "40px", "margin-top": "-10px" })}" data-v-688a475f${_scopeId}><span class="title" data-v-688a475f${_scopeId}>Gattitus</span>`);
          } else {
            return [
              vue_cjs_prod.createVNode("img", {
                src: _imports_0,
                style: { "height": "40px", "margin-top": "-10px" }
              }),
              vue_cjs_prod.createVNode("span", { class: "title" }, "Gattitus")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col d-none d-lg-block ms-3" data-v-688a475f>`);
      if (_ctx.userLogged) {
        _push(`<!--[--><h5 class="fq-bold mb-0 f-fredoka" data-v-688a475f>${serverRenderer.exports.ssrInterpolate(_ctx.saludo)}</h5><span data-v-688a475f>${serverRenderer.exports.ssrInterpolate(_ctx.$t("todayThereIsNewPosts"))}</span><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-auto ms-auto" data-v-688a475f>`);
      if (_ctx.userLogged) {
        _push(`<div data-v-688a475f><button class="btn btn-primary" data-bs-toggle="dropdown" data-v-688a475f> Crear </button><ul class="dropdown-menu shadow" data-v-688a475f><li data-v-688a475f>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: "/posts/create",
          class: "dropdown-item"
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-post" viewBox="0 0 16 16" data-v-688a475f${_scopeId}><path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8z" data-v-688a475f${_scopeId}></path><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" data-v-688a475f${_scopeId}></path></svg> Publicaci\xF3n `);
            } else {
              return [
                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  class: "bi bi-file-post",
                  viewBox: "0 0 16 16"
                }, [
                  vue_cjs_prod.createVNode("path", { d: "M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8z" }),
                  vue_cjs_prod.createVNode("path", { d: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" })
                ])),
                vue_cjs_prod.createTextVNode(" Publicaci\xF3n ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-688a475f><hr class="dropdown-divider" data-v-688a475f></li><li data-v-688a475f><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#createPet" data-v-688a475f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="-26 0 512 512" data-v-688a475f><path d="m179.300781 409.507812c-4.710937 0-8.53125 3.820313-8.53125 8.535157v8.53125c-.0625 14.234375 8.753907 26.996093 22.082031 31.980469 13.332032 4.984374 28.359376 1.136718 37.652344-9.640626 9.292969 10.777344 24.316406 14.625 37.648438 9.640626 13.332031-4.984376 22.144531-17.746094 22.082031-31.980469v-8.53125c0-4.714844-3.820313-8.535157-8.53125-8.535157-4.714844 0-8.535156 3.820313-8.535156 8.535157v8.53125c0 9.425781-7.640625 17.066406-17.066407 17.066406-9.425781 0-17.066406-7.640625-17.066406-17.066406v-27.203125c3.003906-1.105469 5.71875-2.882813 7.9375-5.191406l12.773438-13.65625c4.835937-4.953126 6.210937-12.332032 3.476562-18.695313-3.65625-7.621094-11.480468-12.355469-19.929687-12.054687h-25.582031c-8.449219-.300782-16.269532 4.433593-19.925782 12.054687-2.730468 6.359375-1.363281 13.738281 3.46875 18.695313l12.789063 13.65625c2.214843 2.308593 4.925781 4.085937 7.925781 5.191406v27.203125c0 9.425781-7.640625 17.066406-17.066406 17.066406-9.425782 0-17.066406-7.640625-17.066406-17.066406v-8.53125c0-4.714844-3.820313-8.535157-8.535157-8.535157zm34.125-40.851562c.101563-.398438 1.378907-1.816406 4.285157-1.816406h25.582031c2.910156 0 4.183593 1.417968 3.992187 2.019531l-12.773437 13.652344c-2.390625 1.726562-5.617188 1.726562-8.007813 0zm0 0" data-v-688a475f></path><path d="m122.679688 320.65625c15.1875-5.9375 27.273437-6.640625 35.949218-2.054688 6.050782 3.484376 10.488282 9.214844 12.339844 15.949219 1.074219 4.523438 5.570312 7.355469 10.113281 6.367188 4.542969-.984375 7.460938-5.429688 6.5625-9.988281-2.914062-11.539063-10.410156-21.390626-20.757812-27.265626-13.277344-7.144531-30.234375-6.777343-50.425781 1.09375-4.390626 1.71875-6.558594 6.667969-4.84375 11.058594 1.71875 4.390625 6.667968 6.558594 11.0625 4.839844zm0 0" data-v-688a475f></path><path d="m271.386719 341.054688c2.210937.46875 4.523437.042968 6.421875-1.1875 1.898437-1.234376 3.230468-3.171876 3.703125-5.382813 1.824219-6.660156 6.195312-12.332031 12.164062-15.796875 8.675781-4.675781 20.828125-4.003906 36.117188 1.960938 4.390625 1.71875 9.34375-.449219 11.058593-4.839844 1.71875-4.390625-.449218-9.34375-4.839843-11.058594-20.183594-7.875-37.144531-8.242188-50.425781-1.097656-10.347657 5.878906-17.847657 15.730468-20.757813 27.269531-.476563 2.210937-.050781 4.523437 1.175781 6.425781 1.230469 1.898438 3.167969 3.234375 5.382813 3.707032zm0 0" data-v-688a475f></path><path d="m8.636719 332.707031c7.765625.007813 15.527343.496094 23.234375 1.457031-4.011719 13.371094-6.089844 27.25-6.167969 41.210938v.074219c-7.691406 2.269531-15.027344 5.601562-21.800781 9.890625-2.566406 1.679687-4.035156 4.605468-3.8476565 7.667968.1875005 3.0625 2.0039065 5.785157 4.7578125 7.136719 2.753906 1.351563 6.019531 1.121094 8.558594-.601562 4.289062-2.742188 8.894531-4.960938 13.714844-6.609375 1.496093 10.363281 4.464843 20.460937 8.820312 29.984375-15.800781 10.359375-25.878906 27.480469-27.269531 46.324219 0 26.316406 26.15625 42.664062 68.265625 42.664062 18.992187 1.167969 37.859375-3.804688 53.808594-14.179688 32.359374 9.742188 66.003906 14.523438 99.792968 14.179688 33.789063.34375 67.433594-4.4375 99.789063-14.179688 15.949219 10.375 34.816406 15.347657 53.808593 14.179688 42.109376 0 68.265626-16.347656 68.265626-42.664062-1.386719-18.84375-11.46875-35.964844-27.269532-46.324219 4.355469-9.523438 7.324219-19.621094 8.820313-29.984375 4.820312 1.648437 9.425781 3.867187 13.71875 6.609375 2.535156 1.722656 5.800781 1.953125 8.554687.601562 2.753906-1.351562 4.570313-4.074219 4.761719-7.136719.1875-3.0625-1.28125-5.988281-3.851563-7.667968-6.773437-4.289063-14.109374-7.621094-21.800781-9.890625v-.074219c-.074219-13.960938-2.152343-27.839844-6.167969-41.210938 7.707032-.960937 15.46875-1.445312 23.234376-1.457031 4.714843 0 8.535156-3.820312 8.535156-8.53125 0-4.714843-3.820313-8.535156-8.535156-8.535156-9.738282.003906-19.464844.691406-29.109376 2.054687-3.585937-8.792968-7.832031-17.304687-12.695312-25.460937 5.613281-18.222656 27.605469-94.890625 8.648438-121.035156-4.027344-5.832031-10.699219-9.265625-17.785157-9.15625-12.707031.96875-25.0625 4.632812-36.242187 10.75-21.832032-30.859375-60.328125-52.539063-104.207032-59.503907-.144531-11.625-1.605468-23.195312-4.351562-34.496093-1.914062-9.46875 1.597656-19.21875 9.109375-25.296875 10.644531-7.171875 28.027344 3.925781 35 9.023437 7.382813 5.480469 17.132813 6.582031 25.550781 2.886719 8.417969-3.691406 14.210938-11.617188 15.171875-20.761719.964844-9.140625-3.050781-18.097656-10.511719-23.464843-46.835937-34.277344-81.144531-18.617188-93.777343-10.257813-25.328125 18.0625-37.265625 49.621094-30.230469 79.925781 1.695312 6.921875 2.679688 13.996094 2.929688 21.117188-47.957032 5.085937-90.621094 27.640625-114.027344 60.769531-11.109375-6.070313-23.382813-9.714844-36.003906-10.691406-7.097657-.109375-13.785157 3.332031-17.824219 9.167969-18.882813 26.035156 3 102.480468 8.597656 120.675781-4.9375 8.261719-9.242187 16.886719-12.875 25.800781-9.640625-1.359375-19.363281-2.042969-29.097656-2.046875-4.714844 0-8.535157 3.820313-8.535157 8.535156 0 4.710938 3.820313 8.53125 8.535157 8.53125zm17.066406 136.535157c0-19.207032 23.625-42.667969 51.199219-42.667969 27.574218 0 51.199218 23.460937 51.199218 42.667969 0 12.421874-11.476562 19.554687-26.363281 23 .488281-1.941407.746094-3.933594.765625-5.933594v-17.066406c0-4.714844-3.820312-8.535157-8.535156-8.535157-4.710938 0-8.53125 3.820313-8.53125 8.535157v17.066406c0 4.710937-3.820312 8.53125-8.535156 8.53125-4.710938 0-8.535156-3.820313-8.535156-8.53125v-17.066406c0-4.714844-3.820313-8.535157-8.53125-8.535157-4.714844 0-8.535157 3.820313-8.535157 8.535157v17.066406c.019531 2 .277344 3.992187.765625 5.933594-14.886718-3.445313-26.363281-10.578126-26.363281-23zm409.597656 0c0 12.421874-11.476562 19.554687-26.359375 23 .484375-1.941407.742188-3.933594.761719-5.933594v-17.066406c0-4.714844-3.820313-8.535157-8.535156-8.535157-4.710938 0-8.53125 3.820313-8.53125 8.535157v17.066406c0 4.710937-3.820313 8.53125-8.535157 8.53125-4.710937 0-8.53125-3.820313-8.53125-8.53125v-17.066406c0-4.714844-3.820312-8.535157-8.535156-8.535157-4.710937 0-8.53125 3.820313-8.53125 8.535157v17.066406c.019532 2 .273438 3.992187.761719 5.933594-14.886719-3.445313-26.363281-10.578126-26.363281-23 0-19.207032 23.625-42.667969 51.199218-42.667969 27.574219 0 51.199219 23.46875 51.199219 42.667969zm-211.789062-382.457032c-5.480469-23.34375 3.652343-47.691406 23.132812-61.667968 11.925781-7.886719 37.40625-17.109376 74.226563 9.839843 2.460937 1.800781 3.777344 4.773438 3.449218 7.808594-.324218 3.03125-2.246093 5.65625-5.035156 6.890625-2.785156 1.234375-6.023437.882812-8.484375-.914062-21.191406-15.496094-40.574219-18.835938-54.566406-9.425782-13.460937 10.074219-19.792969 27.089844-16.191406 43.511719 2.292969 9.347656 3.59375 18.910156 3.890625 28.527344-4.449219-.304688-8.917969-.515625-13.429688-.515625-1.210937 0-2.40625.082031-3.613281.105468-.308594-8.148437-1.441406-16.242187-3.378906-24.160156zm6.992187 41.121094c49.746094 0 95.496094 20.542969 119.476563 52.949219-11.4375 6.472656-24.058594 14.488281-38.035157 24.285156-51.75-23.210937-110.941406-23.238281-162.710937-.074219-14.046875-9.800781-26.714844-17.816406-38.171875-24.28125 23.917969-32.363281 69.648438-52.878906 119.441406-52.878906zm-162.476562 162.476562c-15.640625-47.894531-21.117188-96.851562-12.203125-109.148437.839843-1.402344 2.382812-2.21875 4.011719-2.125 12.175781 1.351563 23.898437 5.394531 34.316406 11.832031.074218.046875.109375.121094.183594.167969.277343.136719.5625.257813.851562.363281 16.710938 9.0625 32.8125 19.203125 48.203125 30.355469 2.511719 1.78125 5.785156 2.070313 8.566406.753906 49.726563-23.75 107.53125-23.722656 157.234375.074219 2.792969 1.332031 6.089844 1.046875 8.609375-.753906 38.21875-27.195313 68.703125-42.792969 83.625-42.792969 1.609375-.089844 3.136719.722656 3.964844 2.105469 8.960937 12.359375 3.460937 61.480468-12.25 109.5-.789063 2.40625-.46875 5.035156.875 7.179687 4.585937 7.355469 8.617187 15.039063 12.070313 22.984375-18.8125 3.929688-36.703126 11.421875-52.703126 22.070313-3.675781 2.851562-4.386718 8.121093-1.601562 11.847656s8.042969 4.535156 11.816406 1.816406c14.824219-9.511719 31.304688-16.148437 48.582032-19.566406 3.449218 11.046875 5.425781 22.503906 5.878906 34.070313-14.015625-2.644532-28.230469-4.074219-42.488282-4.277344-4.714843 0-8.535156 3.820312-8.535156 8.535156 0 4.710938 3.820313 8.53125 8.535156 8.53125 14.054688.25 28.0625 1.746094 41.851563 4.46875-1.128906 9.066406-3.578125 17.917969-7.269531 26.277344-8.269532-3.382813-17.117188-5.128906-26.050782-5.144532-38.449218 0-68.265624 32.109376-68.265624 59.734376-.03125 4.886718.972656 9.726562 2.941406 14.203124-28.761719 7.832032-58.464844 11.667969-88.273438 11.394532-29.808594.273437-59.511718-3.5625-88.277344-11.394532 1.96875-4.476562 2.972657-9.316406 2.941407-14.203124 0-27.625-29.816407-59.734376-68.265625-59.734376-8.933594.015626-17.78125 1.761719-26.050782 5.144532-3.691406-8.359375-6.140624-17.210938-7.269531-26.277344 13.792969-2.722656 27.796875-4.21875 41.855469-4.46875 4.710938 0 8.53125-3.820312 8.53125-8.53125 0-4.714844-3.820312-8.535156-8.53125-8.535156-14.261719.203125-28.480469 1.632812-42.492188 4.277344.449219-11.5625 2.425782-23.019532 5.875-34.066407 17.277344 3.414063 33.757813 10.050781 48.582032 19.5625 3.773437 2.714844 9.03125 1.910157 11.816406-1.816406 2.789062-3.722656 2.078125-8.996094-1.597656-11.847656-16.003906-10.652344-33.894532-18.144531-52.714844-22.074219 3.496094-8.066406 7.589844-15.863281 12.25-23.316406 1.339844-2.144532 1.660156-4.773438.871094-7.175782zm0 0" data-v-688a475f></path></svg> Gato </a></li><li data-v-688a475f><a class="dropdown-item" href="/editor" data-v-688a475f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" data-v-688a475f><path d="M7 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V7.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7s1.54-1.274 1.639-1.208zM5 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" data-v-688a475f></path><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" data-v-688a475f></path></svg> Art\xEDculo </a></li></ul>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: "/@" + ((_a = _ctx.userLogged) == null ? void 0 : _a.username),
          class: "d-inline-block text-decoration-none text-dark btn-user-url"
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b, _c, _d;
            if (_push2) {
              _push2(`<span class="fw-bold ms-3 me-2 d-none d-sm-inline-block" data-v-688a475f${_scopeId}>${serverRenderer.exports.ssrInterpolate((_a2 = _ctx.userLogged) == null ? void 0 : _a2.name)}</span>`);
              _push2(serverRenderer.exports.ssrRenderComponent(ImagePreloader, {
                image: (_b = _ctx.userLogged) == null ? void 0 : _b.image,
                class: "user-img-small"
              }, null, _parent2, _scopeId));
            } else {
              return [
                vue_cjs_prod.createVNode("span", { class: "fw-bold ms-3 me-2 d-none d-sm-inline-block" }, vue_cjs_prod.toDisplayString((_c = _ctx.userLogged) == null ? void 0 : _c.name), 1),
                vue_cjs_prod.createVNode(ImagePreloader, {
                  image: (_d = _ctx.userLogged) == null ? void 0 : _d.image,
                  class: "user-img-small"
                }, null, 8, ["image"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span data-bs-toggle="dropdown" aria-expanded="false" class="rounded-3 p-3 more-options" data-v-688a475f><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" data-v-688a475f><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" data-v-688a475f></path></svg></span><ul class="dropdown-menu shadow" data-v-688a475f><li data-v-688a475f><a class="dropdown-item" href="#" data-v-688a475f>Action</a></li><li data-v-688a475f><a class="dropdown-item" href="#" data-v-688a475f>Another action</a></li><li data-v-688a475f><a class="dropdown-item" href="#" data-v-688a475f>Something else here</a></li><li data-v-688a475f><hr class="dropdown-divider" data-v-688a475f></li><li data-v-688a475f><a class="dropdown-item" href="#" data-v-688a475f>Cerrar sesi\xF3n</a></li></ul></div>`);
      } else {
        _push(`<a${serverRenderer.exports.ssrRenderAttr("href", vue_cjs_prod.unref(mainStore).backendUrl + "/auth/login/facebook")} class="btn btn-primary" data-v-688a475f> Iniciar sesi\xF3n</a>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-688a475f"]]);
const _sfc_main$1 = {
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
  data() {
    return {
      imagenPreview: null,
      textareaLength: 0,
      imageId: null
    };
  },
  mounted() {
  },
  computed: {
    disableButton() {
      return !this.imagenPreview && !this.textareaLength;
    }
  },
  emits: ["postCreated"],
  methods: {
    keyup(e) {
      this.textareaLength = this.$refs.textarea.value.trim().length;
    },
    enviarFormulario(e) {
      e.preventDefault();
      const formData = new FormData(this.$refs.formCrear);
      formData.append("image_id", this.imageId);
      axios.post(`${this.mainStore.backendUrl}/api/pets`, formData).then((response) => {
        console.log(response.data);
        this.$refs.formCrear.reset();
        this.imageId = null;
        this.textareaLength = 0;
        this.imagenPreview = null;
      }).catch((error) => {
        console.log(error);
      });
    },
    ocultarModal() {
      this.imagenPreview = null;
      this.$refs.formCrear.reset();
    },
    mostrarPreview(e) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      axios.post(`${this.mainStore.backendUrl}/api/images`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        console.log(response.data.url);
        this.imagenPreview = response.data.url;
        this.imageId = response.data.imageId;
      }).catch((response) => {
        console.log(response);
      });
    },
    borrarImagen() {
      this.$refs.formCrear.imagePet.value = "";
      this.imagenPreview = null;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="modal fade" id="createPet" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content" style="${serverRenderer.exports.ssrRenderStyle({ "box-shadow": "2px 2px 8px rgba(0, 0, 0, 0.1)" })}"><div class="modal-header"><h5 class="modal-title"> Create cat </h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div><form action="/" method="POST"><div class="row gy-3"><div class="col-sm-5"><span class="d-block form-label">Foto</span>`);
  if ($data.imagenPreview) {
    _push(`<div class="position-relative"><img${serverRenderer.exports.ssrRenderAttr("src", $data.imagenPreview)} class="w-100 rounded-3" style="${serverRenderer.exports.ssrRenderStyle({ "aspect-ratio": "1" })}"><button type="button" class="btn-close bg-white shadow position-absolute top-0 end-0 m-3 p-2 rounded-circle" aria-label="Close"></button></div>`);
  } else {
    _push(`<label for="imagePet" class="form-control" tabindex="0" role="button" style="${serverRenderer.exports.ssrRenderStyle({ "aspect-ratio": "1", "display": "flex", "align-items": "center", "justify-content": "center" })}"><img src="https://img.icons8.com/cotton/2x/image-file-add--v2.png" style="${serverRenderer.exports.ssrRenderStyle({ "height": "20px" })}"> Add image </label>`);
  }
  _push(`</div><div class="col-sm-7"><div class="mb-3"><label class="form-label">Nombre</label><input type="text" class="form-control" placeholder="Ejemplo: El se\xF1or Bigotes" name="name"></div><div><label class="form-label">Apodo (Opcional)</label><textarea class="form-control" name="nickname" style="${serverRenderer.exports.ssrRenderStyle({ "height": "100px" })}" placeholder="Ejemplo: El que me pide comida a las 5 de la ma\xF1ana"></textarea></div></div></div><input type="file" id="imagePet" class="d-none" accept="image/png, image/jpeg"></form></div></div><div class="modal-footer"><button type="button" class="btn btn-primary w-100 mt-2"${serverRenderer.exports.ssrIncludeBooleanAttr($options.disableButton) ? " disabled" : ""}> Publish </button></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pet/CreatePetComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CreatePetComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  components: {
    HeaderComponent,
    CreatePetComponent
  },
  mounted() {
  },
  methods: {
    hideDrawer() {
      this.$refs.sidebar.classList.remove("show-sidebar");
      this.$refs.dark.classList.remove("show-dark");
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let mensaje = "consultando";
    [__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchWithCookie("https://api.donotify.com/sanctum/csrf-cookie").then((r) => {
      mensaje = r;
    }).catch((r) => {
      mensaje = "error es: " + r.message;
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}> hola layout mensaje: ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(mensaje))} `);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const main = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { entry$1 as default };
//# sourceMappingURL=server.mjs.map
