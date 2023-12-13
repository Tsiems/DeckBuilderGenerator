/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cards/card/card-options.ts":
/*!****************************************!*\
  !*** ./src/cards/card/card-options.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CardOptions = exports.CardOptionsList = void 0;
exports.CardOptionsList = [{
  name: "Name",
  type: "text",
  description: "The name of the card."
}, {
  name: "Type",
  type: "text",
  description: "The card type. Must be \"Equipment\", \"Ally\", \"Location\", " + "\"Starter\", \"Tactic\", \"Shadowspawn\", or \"Weakness\". " + "Alternatively \"Hero\" or \"Shadow\" are " + "shorthand for their oversized versions"
}, {
  name: "Variant",
  type: "checkbox",
  description: "If enabled, the card's textbox will be black instead of " + "white, such as for the Villain Stack. If the type is " + "\"Ally\" or \"Shadowspawn\", then they also gain the special " + "\"Hero/Shadow\" subtype. This option has no effect " + "on Oversized card"
}, {
  name: "Oversized",
  type: "checkbox",
  description: "If enabled, the card becomes an oversized player card. " + "This option is only valid for \"Ally\" and \"Shadowspawn\" types," + " and Sub Type, Cost, and Victory Points are ignored."
}, {
  name: "Type Prefix",
  type: "text",
  description: "Some text to place in front of the card's type. " + "Ignored on oversized cards."
}, {
  name: "Victory Points",
  type: "number",
  description: "The number of Victory Points this is worth at the end. " + "Can be negative or \"*\". Ignored on Oversized cards."
}, {
  name: "Cost",
  type: "number",
  description: "How much this card costs. Ignored on Oversized cards."
}, {
  name: "Text",
  type: "text",
  description: "The card text describing what this card does. It will " + "auto format in both font size and bold/italics. Words " + "like \"+2 Power\", \"Attack\", and other common <abbr " + "title=\"Cryptozoic Game Engine\">CGE</abbr> terms will " + "automatically be bolded or italics. To manually bold text" + " use [b]bold this[/b], and to italic use [i]italic " + "this[/i]. Newlines can be used, and two sequential " + "newlines indicate a break between sections of text."
}, {
  name: "Image URL",
  type: "url",
  description: "URL to the image for this card. We recommend using a site" + " like <a href=\"https://imgur.com/\">imgur</a> to manage " + "your images. The image will be automatically centered on " + "the card. Normal cards will be 750px \xD7 523px in size, and" + " Oversized ones will be 900px \xD7 741px."
}, {
  name: "Logo URL",
  type: "url",
  description: "URL to the image for the logo in the top right of this " + "card. For both sizes of cards the image will be rendered " + "at 175px \xD7 175px."
}, {
  name: "Logo Scale",
  type: "number",
  description: "A number between 0.00 to 1.00 that scales the logo down " + "so it better fits on cards."
}, {
  name: "Copyright",
  type: "text",
  description: "The year and company the card is Copyright from. The \xA9 " + "symbol is added automatically, and if this is omitted " + "just the year will be displayed, e.g. " + "\"\xA9".concat(new Date().getFullYear(), "\".")
}, {
  name: "Legal",
  type: "text",
  description: "The legal disclaimer at the bottom of the card. Often has" + " a set notation such as \"(s01)\"."
}, {
  name: "Subtype",
  type: "text",
  description: "An additional type describing the card, such as its owner" + " in the Street Fighter Deck Building Game."
}, {
  name: "Set",
  type: "text",
  description: "The set this card is a part of."
}, {
  name: "Set Text Color",
  type: "color",
  description: "The hex color to use for the text on the set indicator."
}, {
  name: "Set Background Color",
  type: "color",
  description: "The hex color to use for the background rectangle for the" + " set indication."
}, {
  name: "Preferred Text Size",
  type: "number",
  description: "The text size to start at when fitting text on the card. " + "Defaults to 38. <em>Note</em>: if the text does not fit " + "at this size it will be downsized until it fits."
}, {
  name: "Also Bold",
  type: "text list",
  description: "List of words separated by commas and a space \", \" of " + "words to bold even if they lack bold tags ([b]word[/b])."
}, {
  name: "Round Corners",
  type: "checkbox",
  description: "If the corners should be rounded. By default disabled " + "for the deck building tool, and enabled for the live " + "editor."
}];
exports.CardOptions = {};
var _iterator = _createForOfIteratorHelper(exports.CardOptionsList),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var cardOption = _step.value;
    exports.CardOptions[cardOption.name] = cardOption;
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./src/cards/card/card-styles.ts":
/*!***************************************!*\
  !*** ./src/cards/card/card-styles.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getStyle = void 0;
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var styles = {
  defaults: {
    defaults: {
      dropShadow: false,
      fill: "#000000",
      fontFamily: "Baskerville",
      fontSize: 32,
      lineJoin: "round"
    },
    cost: {
      fill: "#000000",
      fontSize: 91.67,
      fontWeight: "bold",
      letterSpacing: 0.06,
      padding: 100,
      stroke: "#646569",
      strokeThickness: 18
    },
    name: {
      dropShadow: true,
      dropShadowAngle: 60 * Math.PI / 180,
      dropShadowBlur: 0,
      dropShadowColor: "#000000",
      dropShadowDistance: 12,
      fill: "#ffffff",
      fontSize: 64,
      letterSpacing: -2,
      padding: 100
    },
    subtype: {
      fontSize: 33.333,
      letterSpacing: 1.375
    },
    type: {
      fill: "#ffffff",
      fontSize: 66.667,
      letterSpacing: 0,
      padding: 100
    },
    text: {
      fill: "#000000",
      fontSize: 38,
      letterSpacing: -0.84,
      padding: 0
    },
    vp: {
      fill: "#000000",
      fontSize: 48.75,
      padding: 100,
      stroke: "#fcb041",
      strokeThickness: 6,
      fontWeight: "bold"
    },
    copyright: {
      fill: "#000000",
      fontSize: 21,
      letterSpacing: -0.20
    },
    legal: {
      fill: "#ffffff",
      fontSize: 21.5,
      letterSpacing: -0.20
    },
    set: {
      fontSize: 30,
      letterSpacing: 1,
      padding: 100
    }
  },
  oversized: {
    copyright: {
      fill: "#ffffff",
      fontSize: 21.5
    },
    name: {
      fill: "#ffc70e",
      fontSize: 80,
      letterSpacing: -1
    },
    set: {
      fontSize: 22
    },
    subtype: {
      dropShadow: true,
      dropShadowAngle: 60 * Math.PI / 180,
      dropShadowBlur: 0,
      dropShadowColor: "#000000",
      dropShadowDistance: 6,
      fill: "#ffc70e",
      fontSize: 60
    },
    text: {
      fill: "#ffffff"
    }
  },
  Equipment: {
    type: {
      fill: "#000000"
    }
  },
  Ally: {
    name: {
      fill: "#00a5e3"
    }
  },
  Tactic: {
    name: {
      fill: "#f77d27"
    },
    type: {
      fill: "#000000"
    }
  },
  Shadowspawn: {
    name: {
      fill: "#ed2122"
    }
  },
  Location: {
    name: {
      fill: "#ea078c"
    }
  },
  Starter: {
    name: {
      fill: "#fff200"
    },
    type: {
      fill: "#000000"
    }
  },
  Weakness: {
    name: {
      fill: "#8dc73f"
    },
    type: {
      fill: "#000000"
    }
  }
};
function getStyle(type, part) {
  var oversized = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var style = Object.assign({}, styles.defaults.defaults);
  if (part === "subtype") {
    Object.assign(style, styles.defaults.type);
  }
  if (styles.defaults[part]) {
    Object.assign(style, styles.defaults[part]);
  }
  type = type.replace(" ", "");
  if (styles[type]) {
    if (part === "subtype") {
      Object.assign(style, styles[type].type);
    }
    if (styles[type][part]) {
      Object.assign(style, styles[type][part]);
    }
  }
  if (oversized && styles.oversized[part]) {
    Object.assign(style, styles.oversized[part]);
  }
  console.log("Style:", type, part, style);
  return new PIXI.TextStyle(style);
}
exports.getStyle = getStyle;

/***/ }),

/***/ "./src/cards/card/card.ts":
/*!********************************!*\
  !*** ./src/cards/card/card.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Card = exports.CARD_MAX_HEIGHT = exports.CARD_MAX_WIDTH = void 0;
var utils_1 = __webpack_require__(/*! src/utils/ */ "./src/utils/index.ts");
var card_styles_1 = __webpack_require__(/*! ./card-styles */ "./src/cards/card/card-styles.ts");
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
exports.CARD_MAX_WIDTH = 900;
exports.CARD_MAX_HEIGHT = 1200;
var Card = /*#__PURE__*/function () {
  function Card(args) {
    _classCallCheck(this, Card);
    this.pxWidth = exports.CARD_MAX_WIDTH;
    this.pxHeight = exports.CARD_MAX_HEIGHT;
    this.name = "Card Name";
    this.type = "Starter";
    this.variant = false;
    this.oversized = false;
    this.typePrefix = "";
    this.victoryPoints = 1;
    this.cost = 1;
    this.text = "";
    this.imageURL = "";
    this.logoURL = "";
    this.logoScale = 1;
    this.copyright = String(new Date().getFullYear());
    this.legal = "";
    this.subtype = "";
    this.set = "";
    this.setTextColor = "#cccccc";
    this.setBackgroundColor = "#333333";
    this.preferredTextSize = 0;
    this.alsoBold = [];
    this.roundCorners = true;
    if (args) {
      this.setFrom(args);
    }
  }
  _createClass(Card, [{
    key: "setFrom",
    value: function setFrom(args) {
      args = Object.assign({}, args);
      args.victoryPoints = args.victoryPoints || args.vp || args.VP || args.vP || 0;
      for (var key in args) {
        if (Object.prototype.hasOwnProperty.call(this, key)) {
          this[key] = args[key];
        }
      }
      if (this.type === "Hero") {
        this.type = "Ally";
        this.oversized = true;
      } else if (this.type === "Shadow") {
        this.type = "Shadowspawn";
        this.oversized = true;
      }
      var isAllyOrShadowspawn = this.type === "Ally" || this.type === "Shadowspawn";
      if (this.oversized && !isAllyOrShadowspawn) {
        this.oversized = false;
      }
      if (this.oversized) {
        this.pxWidth = exports.CARD_MAX_WIDTH;
        this.pxHeight = exports.CARD_MAX_HEIGHT;
      } else {
        this.pxWidth = 750;
        this.pxHeight = 1050;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.renderSync();
              case 2:
                resolve(this.container);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      });
    }
  }, {
    key: "renderSync",
    value: function renderSync() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var copyright, set;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (this.container) {
                this.container.removeChild(this.container);
              }
              this.container = new PIXI.Container();
              _context2.next = 4;
              return this.renderImage();
            case 4:
              _context2.next = 6;
              return this.renderBackground();
            case 6:
              _context2.next = 8;
              return this.renderLogo();
            case 8:
              _context2.next = 10;
              return this.renderCost();
            case 10:
              _context2.next = 12;
              return this.renderVP();
            case 12:
              this.renderName();
              this.renderType();
              this.renderSubType();
              this.renderText();
              copyright = this.renderCopyright();
              set = this.renderSet(copyright);
              this.renderLegal(set, copyright);
              this.renderRoundedCorners();
              return _context2.abrupt("return", this.container);
            case 21:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Card ".concat(this.name);
    }
  }, {
    key: "formatText",
    value: function formatText() {
      var formattedText = this.text;
      formattedText = (0, utils_1.surroundText)(formattedText, /\+(.*?)\ Power/g, "[b]", "[/b]");
      formattedText = (0, utils_1.surroundText)(formattedText, /(\d)\ Power/g, "[b]", "[/b]");
      formattedText = (0, utils_1.surroundText)(formattedText, /\(([^)]+)\)/g, "[i]", "[/i]");
      formattedText = (0, utils_1.surroundText)(formattedText, /(Stack)\ Ongoing/g, "[b]", "[/b]");
      var boldKeywords = Card.autoBoldKeywords.concat([this.name]).concat(this.alsoBold);
      var _iterator = _createForOfIteratorHelper(boldKeywords),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var toBold = _step.value;
          formattedText = (0, utils_1.replaceAll)(formattedText, toBold, "[b]".concat(toBold, "[/b]"));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return formattedText;
    }
  }, {
    key: "getStyle",
    value: function getStyle(part) {
      return (0, card_styles_1.getStyle)(this.type, part, this.oversized);
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var imageMaxWidth, imageMaxHeight, imageTop, backgroundImage, backgroundBounds, scale, backgroundImageMask;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (this.imageURL) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              imageMaxWidth = 750;
              imageMaxHeight = 523;
              imageTop = 117;
              if (this.oversized) {
                imageMaxWidth = 900;
                imageMaxHeight = 741;
                imageTop = 216;
              }
              _context3.next = 8;
              return (0, utils_1.newSprite)(this.imageURL, this.container);
            case 8:
              backgroundImage = _context3.sent;
              backgroundImage.position.x = imageMaxWidth / 2;
              backgroundImage.position.y = imageTop + imageMaxHeight / 2;
              backgroundBounds = backgroundImage.getBounds();
              scale = Math.max(imageMaxWidth / backgroundBounds.width, imageMaxHeight / backgroundBounds.height);
              backgroundBounds = backgroundImage.getLocalBounds();
              backgroundImage.scale.set(scale, scale);
              backgroundImage.pivot.x = backgroundBounds.width / 2;
              backgroundImage.pivot.y = backgroundBounds.height / 2;
              backgroundImageMask = new PIXI.Graphics();
              backgroundImageMask.beginFill(0);
              backgroundImageMask.drawRect(0, imageTop, imageMaxWidth, imageMaxHeight);
              backgroundImageMask.endFill();
              this.container.addChild(backgroundImageMask);
              backgroundImage.mask = backgroundImageMask;
            case 23:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var backgroundType, backgroundSprite, graphics;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (this.type) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");
            case 2:
              backgroundType = this.type;
              if (this.variant || this.oversized) {
                if (this.type === "Ally") {
                  backgroundType = "Hero";
                } else if (this.type === "Shadowspawn") {
                  backgroundType = "Shadow";
                }
              }
              if (this.oversized) {
                backgroundType = "Oversized-".concat(backgroundType);
              }
              _context4.next = 7;
              return (0, utils_1.newSprite)(backgroundType.replace(" ", "-").toLowerCase(), this.container);
            case 7:
              backgroundSprite = _context4.sent;
              console.log("BACKGROUND SPRITE", backgroundSprite, backgroundType.replace(" ", "-").toLowerCase());
              if (this.variant && !this.oversized) {
                graphics = new PIXI.Graphics();
                graphics.beginFill(0x000000);
                graphics.drawRect(0, 719, 750, 224);
                graphics.endFill();
                this.container.addChild(graphics);
              }
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "renderLogo",
    value: function renderLogo() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var maxLogoWidth, maxLogoHeight, logoSprite, bounds, scale, x, y;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (this.logoURL) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");
            case 2:
              maxLogoWidth = 175;
              maxLogoHeight = 175;
              _context5.next = 6;
              return (0, utils_1.newSprite)(this.logoURL, this.container);
            case 6:
              logoSprite = _context5.sent;
              bounds = logoSprite.getBounds();
              scale = 1;
              if (bounds.width > maxLogoWidth) {
                scale = Math.min(scale, maxLogoWidth / bounds.width);
              }
              if (bounds.height > maxLogoHeight) {
                scale = Math.min(scale, maxLogoHeight / bounds.height);
              }
              if (this.logoScale) {
                scale *= this.logoScale;
              }
              x = 714;
              y = 26;
              if (this.oversized) {
                x = exports.CARD_MAX_WIDTH - 40;
                y = 25;
              }
              bounds = logoSprite.getLocalBounds();
              logoSprite.scale.set(scale, scale);
              logoSprite.pivot.x = bounds.width;
              logoSprite.position.set(x, y);
            case 19:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "renderName",
    value: function renderName() {
      var x = 45;
      var y = 48 - 10;
      if (this.oversized) {
        x = 53;
        y = 55 - 10;
      }
      var cardName = new PIXI.Text(this.name.toUpperCase(), this.getStyle("name"));
      cardName.position.set(x, y);
      cardName.scale.y *= 0.75;
      cardName.scale.x *= 0.96;
      cardName.skew.x = -0.265;
      this.container.addChild(cardName);
    }
  }, {
    key: "getTypeName",
    value: function getTypeName() {
      return this.type.toUpperCase();
    }
  }, {
    key: "renderType",
    value: function renderType() {
      if (this.oversized || this.type === "Weakness") {
        return;
      }
      var text = this.getTypeName();
      if (this.typePrefix) {
        text = "".concat(this.typePrefix, " ").concat(text);
      }
      var cardTypeText = new PIXI.Text(text, this.getStyle("type"));
      cardTypeText.x = 45;
      cardTypeText.y = 666 - 10;
      cardTypeText.scale.y *= 0.75;
      cardTypeText.scale.x *= 0.96;
      cardTypeText.skew.x = -0.265;
      this.container.addChild(cardTypeText);
    }
  }, {
    key: "renderSubType",
    value: function renderSubType() {
      if (!this.subtype) {
        return;
      }
      var x = 710;
      var y = 700;
      if (this.oversized) {
        x = 900 - 39;
        y = 950;
      }
      var subtypeText = new PIXI.Text(this.subtype.toUpperCase(), this.getStyle("subtype"));
      subtypeText.scale.y *= 0.75;
      subtypeText.scale.x *= 0.96;
      subtypeText.skew.x = -0.265;
      subtypeText.pivot.set(subtypeText.width, subtypeText.height);
      subtypeText.position.set(x, y);
      this.container.addChild(subtypeText);
    }
  }, {
    key: "renderCost",
    value: function renderCost() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var cardCostBackStyle, cardCostBackText, cardCostFrontStyle, cardCostFrontText;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!this.oversized) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return");
            case 2:
              console.log("BACKGROUND COST");
              _context6.next = 5;
              return (0, utils_1.newSprite)("background-cost", this.container);
            case 5:
              cardCostBackStyle = this.getStyle("cost");
              cardCostBackText = new PIXI.Text(String(this.cost), cardCostBackStyle);
              cardCostBackText.pivot.x = cardCostBackText.width / 2;
              cardCostBackText.pivot.y = cardCostBackText.height / 2;
              cardCostBackText.position.set(641, 958 - 10);
              this.container.addChild(cardCostBackText);
              cardCostFrontStyle = cardCostBackStyle.clone();
              cardCostFrontStyle.stroke = "#ffffff";
              cardCostFrontStyle.strokeThickness = 10;
              cardCostFrontText = new PIXI.Text(String(this.cost), cardCostFrontStyle);
              cardCostFrontText.pivot.x = cardCostFrontText.width / 2;
              cardCostFrontText.pivot.y = cardCostFrontText.height / 2;
              cardCostFrontText.position.set(641, 958 - 10);
              this.container.addChild(cardCostFrontText);
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "renderVP",
    value: function renderVP() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var vpSign, scalar, vpStyle, vps, vpText, bounds;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!this.oversized) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              vpSign = this.victoryPoints !== "*" && this.victoryPoints < 0 ? "negative" : "normal";
              _context7.next = 5;
              return (0, utils_1.newSprite)("background-vp-".concat(vpSign), this.container);
            case 5:
              if (!(this.victoryPoints === "*")) {
                _context7.next = 10;
                break;
              }
              _context7.next = 8;
              return (0, utils_1.newSprite)("vp-variable", this.container);
            case 8:
              _context7.next = 23;
              break;
            case 10:
              scalar = 2;
              vpStyle = this.getStyle("vp");
              if (this.victoryPoints < 0) {
                vpStyle.stroke = "#9dcd4e";
              }
              vpStyle.fontSize = Number(vpStyle.fontSize) * scalar;
              vpStyle.strokeThickness = Number(vpStyle.strokeThickness) * scalar;
              vps = String(Math.abs(this.victoryPoints));
              vpText = new PIXI.Text(vps, vpStyle);
              vpText.scale.y *= 0.75 / scalar;
              vpText.scale.x *= 1 / scalar;
              bounds = vpText.getLocalBounds();
              vpText.pivot.set(bounds.width / 2, bounds.height / 2);
              vpText.position.set(88, 982 - 5);
              this.container.addChild(vpText);
            case 23:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var formattedText = this.formatText();
      formattedText = (0, utils_1.replaceAll)(formattedText, "[b]", utils_1.wrapStyledTextCharacters.boldStart);
      formattedText = (0, utils_1.replaceAll)(formattedText, "[/b]", utils_1.wrapStyledTextCharacters.boldEnd);
      formattedText = (0, utils_1.replaceAll)(formattedText, "[i]", utils_1.wrapStyledTextCharacters.italicStart);
      formattedText = (0, utils_1.replaceAll)(formattedText, "[/i]", utils_1.wrapStyledTextCharacters.italicEnd);
      var vpCircle = new PIXI.Circle(603, 215, 78 + 5);
      var collisions = [];
      var maxWidth = 750;
      var maxHeight = 172;
      var x = 39;
      var y = 731;
      if (this.oversized) {
        y = 974;
        maxWidth = 900;
        maxHeight = 161 - 14 * 2;
      } else {
        collisions.push(vpCircle);
      }
      var style = this.getStyle("text");
      if (this.variant && !this.oversized) {
        style.fill = "#ffffff";
      }
      if (this.preferredTextSize > 0) {
        style.fontSize = this.preferredTextSize;
      }
      var textContainer = (0, utils_1.autoSizeAndWrapStyledText)(formattedText, maxWidth - x * 2, maxHeight, style, 1, collisions, this.oversized, this.oversized);
      textContainer.position.set(x, y);
      this.container.addChild(textContainer);
    }
  }, {
    key: "renderSet",
    value: function renderSet(copyright) {
      if (!this.set) {
        throw "set is null in renderSet function";
      }
      var style = this.getStyle("set");
      style.fill = this.setTextColor || "#ffffff";
      var set = new PIXI.Text(this.set.toUpperCase(), style);
      set.scale.y *= 0.75;
      set.pivot.set(set.width, set.height);
      if (this.oversized) {
        set.position.x = copyright.x - copyright.width - 16;
        set.position.y = 1171 - set.height;
      } else {
        set.position.set(550, 934);
      }
      var xPad = 4;
      var topPad = 3;
      var bottomPad = 4;
      var backgroundColor = this.setBackgroundColor || "#000000";
      var graphics = new PIXI.Graphics();
      graphics.beginFill(parseInt(backgroundColor.replace(/^#/, ""), 16));
      graphics.drawRoundedRect(set.x - set.width - xPad, set.y - set.height - topPad, set.width + xPad * 2, set.height + bottomPad * 2, 8);
      graphics.endFill();
      this.container.addChild(graphics);
      this.container.addChild(set);
      return set;
    }
  }, {
    key: "renderCopyright",
    value: function renderCopyright() {
      var maxWidth = 332;
      var x = 223;
      var y = 941;
      if (this.oversized) {
        maxWidth = 182;
        x = 900 - 37;
        y = 1136;
      }
      var style = this.getStyle("copyright");
      if (this.variant && !this.oversized) {
        style.fill = "#ffffff";
      }
      var copyright = (0, utils_1.wrapStyledText)("\xA9".concat(this.copyright), maxWidth, style);
      if (this.oversized) {
        copyright.pivot.x = copyright.width;
      } else {
        copyright.pivot.y = copyright.height;
      }
      copyright.position.set(x, y);
      this.container.addChild(copyright);
      return copyright;
    }
  }, {
    key: "renderLegal",
    value: function renderLegal(set, copyright) {
      var maxWidth = 332;
      var x = 223;
      var y = 954;
      var style = this.getStyle("legal");
      var legal;
      if (this.oversized) {
        maxWidth = 824;
        x = 37;
        y = 1136;
        if (set) {
          maxWidth -= set.width + 16;
        }
        if (copyright) {
          maxWidth -= copyright.width + 16;
        }
        legal = (0, utils_1.autoSizeAndWrapStyledText)(this.legal, maxWidth, Number(style.fontSize) * 2, style, 0.25);
      } else {
        legal = (0, utils_1.wrapStyledText)(this.legal, maxWidth, this.getStyle("legal"));
      }
      if (legal) {
        legal.position.set(x, y);
        this.container.addChild(legal);
      }
    }
  }, {
    key: "renderRoundedCorners",
    value: function renderRoundedCorners() {
      if (!this.roundCorners) {
        return;
      }
      var borderRadius = this.oversized ? 45 : 37;
      var bleedMask = new PIXI.Graphics();
      bleedMask.beginFill(0, 1);
      bleedMask.drawRoundedRect(0, 0, this.pxWidth, this.pxHeight, borderRadius);
      bleedMask.endFill();
      console.log("ROUNDED CORNERS:", this.pxWidth, this.pxHeight, bleedMask);
      this.container.addChild(bleedMask);
      this.container.mask = bleedMask;
    }
  }]);
  return Card;
}();
exports.Card = Card;
Card.autoBoldKeywords = ["+Power", ":", "Attacked", "Attack", "Defense", "Ongoing", "Weakness"];

/***/ }),

/***/ "./src/cards/card/index.ts":
/*!*********************************!*\
  !*** ./src/cards/card/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__exportStar(__webpack_require__(/*! ./card */ "./src/cards/card/card.ts"), exports);

/***/ }),

/***/ "./src/cards/deck-builder.ts":
/*!***********************************!*\
  !*** ./src/cards/deck-builder.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DeckBuilder = void 0;
var csvParse = __webpack_require__(/*! csv-parse */ "./node_modules/csv-parse/dist/cjs/index.cjs");
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var JSZip = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var utils_1 = __webpack_require__(/*! src/utils/ */ "./src/utils/index.ts");
var card_1 = __webpack_require__(/*! ./card */ "./src/cards/card/index.ts");
var readmeText = __webpack_require__(/*! ./deck-builder-readme.txt */ "./src/cards/deck-builder-readme.txt");
var MAX_TEXTURE_LENGTH = 4096;
var DeckBuilder = /*#__PURE__*/function (_events_1$EventEmitte) {
  _inherits(DeckBuilder, _events_1$EventEmitte);
  var _super = _createSuper(DeckBuilder);
  function DeckBuilder() {
    var _this;
    var maxWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var maxHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
    _classCallCheck(this, DeckBuilder);
    _this = _super.call(this);
    _this.maxWidth = maxWidth;
    _this.maxHeight = maxHeight;
    return _this;
  }
  _createClass(DeckBuilder, [{
    key: "buildCards",
    value: function buildCards(csvText) {
      var _this2 = this;
      this.csvText = csvText;
      return new Promise(function (resolve, reject) {
        _this2.parse(csvText).then(function (cards) {
          var oversizedCards = cards.filter(function (card) {
            return card.oversized;
          });
          var normalCards = cards.filter(function (card) {
            return !card.oversized;
          });
          _this2.emit(DeckBuilder.EventSymbols.parsed, normalCards.length, oversizedCards.length);
          _this2.renderAllCards(normalCards, oversizedCards, {}, 1, function (cardImages) {
            _this2.emit(DeckBuilder.EventSymbols.doneRendering);
            _this2.zipCards(cardImages).then(resolve);
          });
        })["catch"](reject);
      });
    }
  }, {
    key: "parse",
    value: function parse(csv) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        var csvOptions = {
          columns: true,
          ltrim: true,
          rtrim: true,
          skip_empty_lines: true,
          auto_parse: true
        };
        csvParse.parse(csv, csvOptions, function (err, data) {
          if (err) {
            return reject(new Error("Could not parse CSV File: ".concat(err.message)));
          }
          var cards = _this3.parseCards(data);
          resolve(cards);
        });
      });
    }
  }, {
    key: "parseCards",
    value: function parseCards(data) {
      var baseCard = {};
      var baseOversizedCard = {};
      var cards = [];
      if (!data) {
        return [];
      }
      var _iterator = _createForOfIteratorHelper(data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cardData = _step.value;
          var sanitized = {
            roundCorners: false
          };
          for (var _i = 0, _Object$keys = Object.keys(cardData); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            var value = cardData[key];
            key = (0, utils_1.toCamelCase)(key);
            if (key.startsWith("#")) {
              continue;
            }
            if (key === "vp" || key === "vps") {
              key = "victorypoints";
            }
            if (key === "variant" && typeof value !== "boolean") {
              value = Boolean(value);
            }
            if (key === "alsoBold" && value !== "") {
              value = value.split(",");
            }
            if (value !== "") {
              if (typeof value === "string") {
                value = (0, utils_1.tryToCast)(value);
              }
              sanitized[key] = value;
            }
          }
          if (sanitized.name === "__defaults__") {
            Object.assign(baseCard, sanitized);
          } else if (sanitized.name === "__oversized_defaults__") {
            Object.assign(baseOversizedCard, baseCard);
            Object.assign(baseOversizedCard, sanitized);
          } else {
            var base = sanitized.oversized ? baseOversizedCard : baseCard;
            sanitized = Object.assign({}, base, sanitized);
          }
          if (sanitized.name !== "__defaults__" && sanitized.name !== "__oversized_defaults__") {
            var card = new card_1.Card(sanitized);
            cards.push(card);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return cards;
    }
  }, {
    key: "renderAllCards",
    value: function renderAllCards(normalCards, oversizedCards, cardImages, batch, callback) {
      var _this4 = this;
      this.emit(DeckBuilder.EventSymbols.batchStart, batch);
      this.renderCards(normalCards, oversizedCards).then(function (app) {
        console.log("RENDERED!");
        if (!app) {
          callback(cardImages);
          return;
        }
        app.render();
        app.view.toBlob(function (blob) {
          _this4.emit(DeckBuilder.EventSymbols.batchComplete, batch);
          cardImages["card-".concat(batch, ".png")] = blob;
          app.destroy(true);
          if (normalCards.length || oversizedCards.length) {
            batch++;
            _this4.renderAllCards(normalCards, oversizedCards, cardImages, batch, callback);
          } else {
            callback(cardImages);
          }
        });
      });
    }
  }, {
    key: "renderCards",
    value: function renderCards(normalCards, oversizedCards) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var cards, maxWidth, maxHeight, i, currentCards, card, cardWidth, cardHeight, renders, width, height, resizedWidth, resizedHeight, ourAspectRatio, app, scale, r, x, y, render;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              cards = normalCards.length ? normalCards : oversizedCards;
              if (!(cards.length === 0)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", null);
            case 3:
              maxWidth = this.maxWidth;
              maxHeight = this.maxHeight;
              i = 0;
              currentCards = [];
            case 7:
              if (!cards.length) {
                _context.next = 15;
                break;
              }
              i++;
              card = cards.shift();
              currentCards.push(card);
              if (!(i === maxWidth * maxHeight)) {
                _context.next = 13;
                break;
              }
              return _context.abrupt("break", 15);
            case 13:
              _context.next = 7;
              break;
            case 15:
              this.emit(DeckBuilder.EventSymbols.batchTexturesLoaded);
              cardWidth = currentCards[0].pxWidth;
              cardHeight = currentCards[0].pxHeight;
              _context.next = 20;
              return Promise.all(currentCards.map(function (card) {
                return card.renderSync();
              }));
            case 20:
              renders = _context.sent;
              width = 2;
              height = 1;
              while (width * height < renders.length) {
                if (width < maxWidth) {
                  width++;
                }
                if (height < maxHeight && width * height < renders.length) {
                  height++;
                }
              }
              maxWidth = width;
              maxHeight = height;
              resizedWidth = cardWidth;
              resizedHeight = cardHeight;
              ourAspectRatio = cardHeight / cardWidth;
              if (resizedWidth * maxWidth > resizedHeight * maxHeight) {
                resizedWidth = Math.floor(MAX_TEXTURE_LENGTH / maxWidth);
                resizedHeight = Math.round(resizedWidth * ourAspectRatio);
              } else {
                resizedHeight = Math.floor(MAX_TEXTURE_LENGTH / maxHeight);
                resizedWidth = Math.round(resizedHeight * (1 / ourAspectRatio));
              }
              if (resizedWidth > cardWidth) {
                resizedWidth = cardWidth;
                resizedHeight = cardHeight;
              }
              app = new PIXI.Application({
                width: resizedWidth * maxWidth,
                height: resizedHeight * maxHeight,
                antialias: true,
                backgroundAlpha: 0
              });
              scale = resizedWidth / cardWidth;
              for (r = 0; r < renders.length; r++) {
                x = r % maxWidth;
                y = Math.floor(r / maxWidth);
                render = renders[r];
                app.stage.addChild(render);
                if (scale !== 1) {
                  render.scale.set(scale);
                }
                render.pivot.set(0, 0);
                render.position.set(x * resizedWidth, y * resizedHeight);
                app.stage.addChild(render);
              }
              return _context.abrupt("return", app);
            case 35:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "zipCards",
    value: function zipCards(cardImages) {
      var _this5 = this;
      return new Promise(function (resolve, reject) {
        var zip = new JSZip();
        for (var _i2 = 0, _Object$keys2 = Object.keys(cardImages); _i2 < _Object$keys2.length; _i2++) {
          var key = _Object$keys2[_i2];
          zip.file(key, cardImages[key]);
        }
        zip.file("source-spreadsheet.csv", _this5.csvText);
        zip.file("readme.txt", readmeText["default"].replace("{width}", _this5.maxWidth.toString()).replace("{height}", _this5.maxHeight.toString()));
        zip.generateAsync({
          type: "blob"
        }).then(function (content) {
          _this5.generatedZip = content;
          _this5.emit(DeckBuilder.EventSymbols.zipped);
          resolve(_this5.generatedZip);
        });
      });
    }
  }]);
  return DeckBuilder;
}(events_1.EventEmitter);
exports.DeckBuilder = DeckBuilder;
DeckBuilder.EventSymbols = {
  error: Symbol("error"),
  parsed: Symbol("parsed"),
  doneRendering: Symbol("doneRendering"),
  batchStart: Symbol("batchStart"),
  batchTexturesLoaded: Symbol("batchTexturesLoaded"),
  batchComplete: Symbol("batchComplete"),
  zipped: Symbol("zipped")
};

/***/ }),

/***/ "./src/gui/table.ts":
/*!**************************!*\
  !*** ./src/gui/table.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EditableTable = void 0;
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var string_1 = __webpack_require__(/*! src/utils/string */ "./src/utils/string.ts");
var uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
var EditableTable = /*#__PURE__*/function (_events_1$EventEmitte) {
  _inherits(EditableTable, _events_1$EventEmitte);
  var _super = _createSuper(EditableTable);
  function EditableTable(parent, columns, rows) {
    var _this;
    _classCallCheck(this, EditableTable);
    _this = _super.call(this);
    _this.table = document.createElement("table");
    _this.headingsRow = document.createElement("tr");
    _this.headings = new Map();
    _this.parent = parent;
    _this.columns = [];
    _this.rows = [];
    _this.table.classList.add("gui-table");
    _this.table.appendChild(_this.headingsRow);
    _this.parent.appendChild(_this.table);
    if (columns) {
      _this.addColumns(columns);
    }
    if (rows) {
      _this.addRows(rows);
    }
    return _this;
  }
  _createClass(EditableTable, [{
    key: "addColumns",
    value: function addColumns(columns) {
      var _iterator = _createForOfIteratorHelper(columns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var column = _step.value;
          this.formatColumn(column);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.updateColumns();
    }
  }, {
    key: "addColumn",
    value: function addColumn(column) {
      this.formatColumn(column);
      this.updateColumns();
    }
  }, {
    key: "addRows",
    value: function addRows(rows) {
      var _iterator2 = _createForOfIteratorHelper(rows),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var row = _step2.value;
          this.formatRow(row);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.updateRows(true);
    }
  }, {
    key: "addRow",
    value: function addRow(row) {
      this.formatRow(row);
      this.updateRows(true);
    }
  }, {
    key: "getRow",
    value: function getRow(index) {
      if (index > -1 && index < this.rows.length) {
        return this.rows[index];
      }
      throw new RangeError("".concat(index, " not in range of table with ").concat(this.rows.length, " rows."));
    }
  }, {
    key: "getAllRows",
    value: function getAllRows() {
      return this.rows.slice();
    }
  }, {
    key: "deleteRow",
    value: function deleteRow(index) {
      if (_typeof(index) === "object") {
        index = index.index;
      }
      this.getRow(index);
      var row = this.rows[index];
      this.rows.splice(index, 1);
      for (var i = index; i < this.rows.length; i++) {
        this.rows[i].index = i;
      }
      row.tr.remove();
      this.emit(EditableTable.EventSymbols.rowDeleted, row);
    }
  }, {
    key: "formatColumn",
    value: function formatColumn(column) {
      if (typeof column === "string") {
        column = {
          id: column
        };
      }
      if (!column.name) {
        column.name = column.id;
      }
      if (!column.id) {
        column.id = (0, string_1.toCamelCase)(column.name);
      }
      column.type = column.type || "string";
      switch (column.type) {
        case "string":
          column.defaultValue = "";
          column.transform = column.transform || String;
          break;
        case "number":
          column.defaultValue = 0;
          column.transform = column.transform || Number;
          break;
        case "boolean":
          column.transform = column.transform || Boolean;
          if (column.defaultValue === undefined) {
            column.defaultValue = Boolean(column.defaultValue);
          }
          break;
        case "node":
          column.notEditable = true;
          column.transform = function (val) {
            return val;
          };
          if (!column.defaultValue) {
            throw new Error("Node values require default value to clone from");
          }
          break;
      }
      this.columns.push(column);
    }
  }, {
    key: "updateColumns",
    value: function updateColumns() {
      if (this.headings.size < this.columns.length) {
        var newColumns = this.columns.slice(this.headings.size);
        var _iterator3 = _createForOfIteratorHelper(newColumns),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var column = _step3.value;
            var hr = document.createElement("th");
            hr.innerHTML = column.name;
            this.headingsRow.appendChild(hr);
            this.headings.set(column.id, hr);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.updateRows(false);
      }
    }
  }, {
    key: "formatRow",
    value: function formatRow(values) {
      if (values instanceof Array) {
        var obj = {};
        for (var i = 0; i < this.columns.length; i++) {
          var column = this.columns[i];
          obj[column.id] = values[i];
        }
        values = obj;
      }
      var row = {
        index: this.rows.length,
        values: values,
        tr: document.createElement("tr"),
        tds: []
      };
      this.rows.push(row);
      var _iterator4 = _createForOfIteratorHelper(this.columns),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _column = _step4.value;
          if (_column.type === "node") {
            var cloning = _column.defaultValue;
            var clone = cloning.cloneNode();
            clone.innerHTML = cloning.innerHTML;
            row.values[_column.id] = clone;
          }
          if (_column.allowedValues) {
            if (_column.allowedValues.indexOf(row.values[_column.id]) === -1) {
              row.values[_column.id] = _column.allowedValues[0];
            }
          }
          if (row.values[_column.id] === undefined) {
            row.values[_column.id] = _column.defaultValue;
          }
          row.values[_column.id] = _column.transform(row.values[_column.id], row);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      this.emit(EditableTable.EventSymbols.rowAdded, row.values, row);
    }
  }, {
    key: "updateRows",
    value: function updateRows(added) {
      var _this2 = this;
      var _iterator5 = _createForOfIteratorHelper(this.rows),
        _step5;
      try {
        var _loop = function _loop() {
          var row = _step5.value;
          if (!row.tr.parentElement) {
            _this2.table.appendChild(row.tr);
          }
          var _loop2 = function _loop2() {
            var id = "cell-".concat((0, uuid_1.v4)());
            var column = _this2.columns[i];
            var td = document.createElement("td");
            td.setAttribute("class", "column-".concat(column.id));
            var wrapper = document.createElement("div");
            td.appendChild(wrapper);
            if (column.type === "node") {
              wrapper.appendChild(row.values[column.id]);
            }
            if (!column.notEditable) {
              var child;
              var event = "change";
              var checkbox = false;
              if (column.allowedValues) {
                child = document.createElement("select");
                var _iterator6 = _createForOfIteratorHelper(column.allowedValues),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var value = _step6.value;
                    var option = document.createElement("option");
                    option.setAttribute("value", String(value));
                    option.innerText = String(value);
                    child.appendChild(option);
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              } else if (column.longText) {
                child = document.createElement("textarea");
              } else {
                child = document.createElement("input");
                var inputType = "text";
                switch (column.type) {
                  case "boolean":
                    inputType = "checkbox";
                    event = "click";
                    checkbox = true;
                    var label = document.createElement("label");
                    label.setAttribute("for", id);
                    wrapper.appendChild(label);
                    break;
                  case "number":
                    inputType = "number";
                    break;
                  case "string":
                    if (column.color) {
                      inputType = "color";
                    }
                    break;
                }
                child.setAttribute("type", inputType);
              }
              if (checkbox) {
                child.checked = row.values[column.id];
              } else {
                child.value = String(row.values[column.id]);
              }
              if (column.inputAttributes) {
                for (var _i = 0, _Object$keys = Object.keys(column.inputAttributes); _i < _Object$keys.length; _i++) {
                  var attribute = _Object$keys[_i];
                  child.setAttribute(attribute, String(column.inputAttributes[attribute]));
                }
              }
              child.id = id;
              wrapper.insertBefore(child, wrapper.firstChild);
              var lastValue = child.value;
              child.addEventListener(event, function () {
                var newValue = child.value;
                if (checkbox) {
                  newValue = child.checked;
                }
                var untransformed = newValue;
                newValue = column.transform(newValue, row);
                if (lastValue !== newValue) {
                  row.values[column.id] = column.transform(newValue, row);
                  _this2.emit(EditableTable.EventSymbols.cellChanged, row, column, newValue);
                  lastValue = newValue;
                }
                if (newValue !== untransformed) {
                  if (checkbox) {
                    child.checked = newValue;
                  } else {
                    child.value = newValue;
                  }
                }
              });
            } else if (column.type !== "node") {
              wrapper.innerHTML = String(row.values[column.id]);
            }
            if (column.rowsTitle) {
              td.title = column.rowsTitle;
            }
            row.tds.push(td);
            row.tr.appendChild(td);
          };
          for (var i = row.tds.length; i < _this2.columns.length; i++) {
            _loop2();
          }
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }]);
  return EditableTable;
}(events_1.EventEmitter);
exports.EditableTable = EditableTable;
EditableTable.EventSymbols = {
  rowAdded: Symbol("rowAdded"),
  cellChanged: Symbol("cellChanged"),
  rowDeleted: Symbol("rowDeleted")
};

/***/ }),

/***/ "./src/gui/tabs/about.ts":
/*!*******************************!*\
  !*** ./src/gui/tabs/about.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tabular_1 = __webpack_require__(/*! src/gui/tabular/ */ "./src/gui/tabular/index.ts");
var entireReadme = __webpack_require__(/*! ../../../README.md */ "./README.md");
var AboutTab = /*#__PURE__*/function (_tabular_1$Tab) {
  _inherits(AboutTab, _tabular_1$Tab);
  var _super = _createSuper(AboutTab);
  function AboutTab() {
    var _this;
    _classCallCheck(this, AboutTab);
    var container = document.createElement("div");
    _this = _super.call(this, "About", container);
    var readme = String(entireReadme);
    container.innerHTML = readme.substr(0, readme.indexOf("<hr"));
    var _iterator = _createForOfIteratorHelper(container.getElementsByTagName("h1")),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var h1 = _step.value;
        h1.remove();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return _this;
  }
  return _createClass(AboutTab);
}(tabular_1.Tab);
exports["default"] = AboutTab;

/***/ }),

/***/ "./src/gui/tabs/deck-generator/deck-generator-tab.ts":
/*!***********************************************************!*\
  !*** ./src/gui/tabs/deck-generator/deck-generator-tab.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DeckGeneratorTab = void 0;
var filesaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var path_1 = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var deck_builder_1 = __webpack_require__(/*! src/cards/deck-builder */ "./src/cards/deck-builder.ts");
var tabular_1 = __webpack_require__(/*! src/gui/tabular/ */ "./src/gui/tabular/index.ts");
var utils_1 = __webpack_require__(/*! src/utils/ */ "./src/utils/index.ts");
var store = __webpack_require__(/*! store */ "./node_modules/store/dist/store.legacy.js");
var hbs = __webpack_require__(/*! ./deck-generator-tab.hbs */ "./src/gui/tabs/deck-generator/deck-generator-tab.hbs");
__webpack_require__(/*! ./deck-generator-tab.scss */ "./src/gui/tabs/deck-generator/deck-generator-tab.scss");
var tabTemplate = (0, utils_1.template)(hbs);
var DeckGeneratorTab = /*#__PURE__*/function (_tabular_1$Tab) {
  _inherits(DeckGeneratorTab, _tabular_1$Tab);
  var _super = _createSuper(DeckGeneratorTab);
  function DeckGeneratorTab() {
    var _this;
    _classCallCheck(this, DeckGeneratorTab);
    _this = _super.call(this, "Deck Generator", tabTemplate());
    _this.fakeLabelElement = (0, utils_1.select)(_this.element, ".file-name");
    _this.noneSelectedElement = (0, utils_1.select)(_this.fakeLabelElement, ".none-selected");
    _this.generateButton = (0, utils_1.select)(_this.element, ".generate-button");
    _this.maxCardsXInput = (0, utils_1.select)(_this.element, ".max-cards-x-input");
    _this.maxCardsYInput = (0, utils_1.select)(_this.element, ".max-cards-y-input");
    _this.progressBarElement = (0, utils_1.select)(_this.element, ".progress-bar-foreground");
    _this.generationLog = (0, utils_1.select)(_this.element, ".generation-log");
    _this.downloadButton = (0, utils_1.select)(_this.element, ".download-button");
    _this.inputElement = (0, utils_1.select)(_this.element, ".csv-file-selector");
    _this.generationDiv = (0, utils_1.select)(_this.element, ".generation");
    _this.inputElement.addEventListener("change", function () {
      return _this.updateFileInput();
    });
    _this.generateButton.addEventListener("click", function () {
      return _this.generate();
    });
    _this.downloadButton.addEventListener("click", function () {
      return _this.download();
    });
    _this.setupCardDimension(_this.maxCardsXInput, "x", 10, 7);
    _this.setupCardDimension(_this.maxCardsYInput, "y", 7, 5);
    _this.maxCardsXInput.value = String(store.get("max-cards-x") || 7);
    _this.maxCardsXInput.addEventListener("change", function () {
      store.set("max-cards-x", Number(_this.maxCardsXInput.value));
    });
    _this.maxCardsYInput.value = String(store.get("max-cards-y") || 5);
    _this.maxCardsYInput.addEventListener("change", function () {
      store.set("max-cards-y", Number(_this.maxCardsYInput.value));
    });
    _this.updateFileInput();
    return _this;
  }
  _createClass(DeckGeneratorTab, [{
    key: "updateFileInput",
    value: function updateFileInput() {
      var fakeValue = this.inputElement.value;
      this.fakeLabelElement.innerHTML = (0, path_1.basename)((0, utils_1.replaceAll)(fakeValue, "\\", "/"));
      if (!fakeValue) {
        this.fakeLabelElement.appendChild(this.noneSelectedElement);
      }
      this.generateButton.disabled = !fakeValue;
      this.generateButton.title = fakeValue ? "" : "Please select a file to generate you deck from.";
    }
  }, {
    key: "setupCardDimension",
    value: function setupCardDimension(input, coordinate, max, startingValue) {
      var id = "max-cards-".concat(coordinate);
      input.value = String(store.get(id) || startingValue);
      input.min = "2";
      input.max = "".concat(max);
      input.addEventListener("change", function () {
        var value = input.valueAsNumber;
        if (!value || value > Number(input.max) || value < Number(input.min)) {
          value = startingValue;
        }
        store.set(id, value);
        input.valueAsNumber = value;
      });
    }
  }, {
    key: "generate",
    value: function generate() {
      var _this2 = this;
      var file = this.inputElement.files[0];
      if (file) {
        (0, utils_1.expand)(this.generationDiv).then(function () {
          return _this2.startGenerating(file);
        });
      }
    }
  }, {
    key: "startGenerating",
    value: function startGenerating(file) {
      var _this3 = this;
      this.generateButton.disabled = true;
      this.inputElement.disabled = true;
      this.maxCardsXInput.disabled = true;
      this.maxCardsYInput.disabled = true;
      this.log("Reading local file...");
      var reader = new FileReader();
      reader.readAsText(file);
      reader.addEventListener("load", function () {
        var width = Number(_this3.maxCardsXInput.value);
        var height = Number(_this3.maxCardsYInput.value);
        var deckBuilder = new deck_builder_1.DeckBuilder(width, height);
        _this3.generateButton.innerText = "Generating...";
        deckBuilder.on(deck_builder_1.DeckBuilder.EventSymbols.error, function (error) {
          _this3.log(error, true);
        });
        var batches = 1;
        var currentBatch = 1;
        var renderingProgress = 0.9;
        deckBuilder.on(deck_builder_1.DeckBuilder.EventSymbols.parsed, function (numNormalCards, numOversizedCards) {
          _this3.log("File parsed.");
          _this3.log(" &bull; ".concat(numNormalCards, " normal sized cards found."));
          _this3.log(" &bull; ".concat(numOversizedCards, " oversized cards found."));
          var cardsPerBatch = width * height;
          batches = Math.ceil(numNormalCards / cardsPerBatch) + Math.ceil(numOversizedCards / cardsPerBatch);
          _this3.setProgress(0.02);
        });
        deckBuilder.on(deck_builder_1.DeckBuilder.EventSymbols.batchStart, function (batch) {
          currentBatch = batch;
          _this3.setProgress(renderingProgress * ((currentBatch - 1) / batches));
          _this3.log("Batch ".concat(currentBatch, "/").concat(batches, " - Downloading card images."));
        });
        deckBuilder.on(deck_builder_1.DeckBuilder.EventSymbols.batchTexturesLoaded, function (batch) {
          _this3.setProgress(renderingProgress * (currentBatch - 0.6667) / batches);
          _this3.log("Batch ".concat(currentBatch, "/").concat(batches, " - All card images downloaded."));
        });
        deckBuilder.on(deck_builder_1.DeckBuilder.EventSymbols.batchComplete, function (batch) {
          _this3.setProgress(renderingProgress * (currentBatch - 0.3333) / batches);
          _this3.log("Batch ".concat(currentBatch, "/").concat(batches, " - Rendering completed."));
        });
        deckBuilder.on(deck_builder_1.DeckBuilder.EventSymbols.doneRendering, function (batch) {
          _this3.setProgress(renderingProgress);
          _this3.log("All card batches have been rendered.");
          _this3.log("Zipping up cards into one achieve.");
        });
        deckBuilder.on(deck_builder_1.DeckBuilder.EventSymbols.zipped, function (batch) {
          _this3.setProgress(1);
          _this3.log("Zip file ready for download.");
          _this3.generateButton.innerText = "Generated!";
          _this3.downloadButton.disabled = false;
        });
        deckBuilder.buildCards(reader.result).then(function (zip) {
          _this3.generatedZip = zip;
        })["catch"](function (err) {
          _this3.log(err.message, true);
          _this3.log("Deck generation aborted due to fatal error", true);
        });
      });
    }
  }, {
    key: "log",
    value: function log(str, error) {
      var li = document.createElement("li");
      if (error) {
        str = "Error: ".concat(str);
        li.classList.add("error");
      }
      li.innerHTML = str;
      this.generationLog.appendChild(li);
    }
  }, {
    key: "setProgress",
    value: function setProgress(scale) {
      var percent = scale * 100;
      this.progressBarElement.style.width = "".concat(percent, "%");
      this.progressBarElement.innerHTML = "".concat(percent.toFixed(0), "%");
    }
  }, {
    key: "download",
    value: function download() {
      if (this.generatedZip) {
        filesaver.saveAs(this.generatedZip, "generated-deck.zip");
      }
    }
  }]);
  return DeckGeneratorTab;
}(tabular_1.Tab);
exports.DeckGeneratorTab = DeckGeneratorTab;

/***/ }),

/***/ "./src/gui/tabs/deck-generator/index.ts":
/*!**********************************************!*\
  !*** ./src/gui/tabs/deck-generator/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__exportStar(__webpack_require__(/*! ./deck-generator-tab */ "./src/gui/tabs/deck-generator/deck-generator-tab.ts"), exports);

/***/ }),

/***/ "./src/gui/tabs/help/help.ts":
/*!***********************************!*\
  !*** ./src/gui/tabs/help/help.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HelpTab = void 0;
var card_options_1 = __webpack_require__(/*! src/cards/card/card-options */ "./src/cards/card/card-options.ts");
var table_1 = __webpack_require__(/*! src/gui/table */ "./src/gui/table.ts");
var tabular_1 = __webpack_require__(/*! src/gui/tabular/ */ "./src/gui/tabular/index.ts");
var utils_1 = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
var hbs = __webpack_require__(/*! ./help.hbs */ "./src/gui/tabs/help/help.hbs");
__webpack_require__(/*! ./help.scss */ "./src/gui/tabs/help/help.scss");
var tabTemplate = (0, utils_1.template)(hbs);
var typeTitles = {
  "text": "Normal alphanumeric text.",
  "number": "A number, no text.",
  "checkbox": "If the cell is empty that counts as unchecked (false). " + "Any other value, such as \"X\" indicate that cell is checked.",
  "url": "Text that is a valid URL to an image",
  "color": "A hexadecimal color in the format #FF0000 (red)",
  "text list": "A list of words or text items. Indicate a new text in the " + "list via a comma and space \", \". E.g. \"Some Card Name, Some " + "Special Term, Bold This too\""
};
var HelpTab = /*#__PURE__*/function (_tabular_1$Tab) {
  _inherits(HelpTab, _tabular_1$Tab);
  var _super = _createSuper(HelpTab);
  function HelpTab() {
    var _this;
    _classCallCheck(this, HelpTab);
    _this = _super.call(this, "Help", tabTemplate());
    var columns = [{
      name: "Column Name",
      id: "name",
      notEditable: true
    }, {
      name: "Type",
      id: "type",
      notEditable: true
    }, {
      name: "Description",
      id: "description",
      notEditable: true
    }];
    _this.cardOptionsTable = new table_1.EditableTable((0, utils_1.select)(_this.element, ".card-options"), columns, card_options_1.CardOptionsList);
    var _iterator = _createForOfIteratorHelper(_this.element.getElementsByTagName("td")),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var td = _step.value;
        var title = typeTitles[(0, utils_1.removeTags)(td.innerHTML)];
        if (title) {
          td.title = title;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return _this;
  }
  return _createClass(HelpTab);
}(tabular_1.Tab);
exports.HelpTab = HelpTab;

/***/ }),

/***/ "./src/gui/tabs/help/index.ts":
/*!************************************!*\
  !*** ./src/gui/tabs/help/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__exportStar(__webpack_require__(/*! ./help */ "./src/gui/tabs/help/help.ts"), exports);

/***/ }),

/***/ "./src/gui/tabs/index.ts":
/*!*******************************!*\
  !*** ./src/gui/tabs/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTabs = void 0;
var about_1 = __webpack_require__(/*! ./about */ "./src/gui/tabs/about.ts");
var deck_generator_1 = __webpack_require__(/*! ./deck-generator/ */ "./src/gui/tabs/deck-generator/index.ts");
var help_1 = __webpack_require__(/*! ./help/ */ "./src/gui/tabs/help/index.ts");
var live_editor_1 = __webpack_require__(/*! ./live-editor/ */ "./src/gui/tabs/live-editor/index.ts");
function getTabs() {
  return [new live_editor_1.LiveEditorTab(), new deck_generator_1.DeckGeneratorTab(), new help_1.HelpTab(), new about_1["default"]()];
}
exports.getTabs = getTabs;

/***/ }),

/***/ "./src/gui/tabs/live-editor/index.ts":
/*!*******************************************!*\
  !*** ./src/gui/tabs/live-editor/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__exportStar(__webpack_require__(/*! ./live-editor */ "./src/gui/tabs/live-editor/live-editor.ts"), exports);

/***/ }),

/***/ "./src/gui/tabs/live-editor/live-editor-tables.ts":
/*!********************************************************!*\
  !*** ./src/gui/tabs/live-editor/live-editor-tables.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cardsRows = exports.cardsHeadings = exports.defaultsRows = exports.defaultsHeadings = void 0;
var card_options_1 = __webpack_require__(/*! src/cards/card/card-options */ "./src/cards/card/card-options.ts");
var utils_1 = __webpack_require__(/*! src/utils/ */ "./src/utils/index.ts");
function addTitlesTo(columns) {
  var _iterator = _createForOfIteratorHelper(columns),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var column = _step.value;
      var name = column.name;
      if (name === "Delete") {
        continue;
      }
      if (name === "VP") {
        name = "Victory Points";
      }
      column.rowsTitle = (0, utils_1.stripTagsFromString)(card_options_1.CardOptions[name].description);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
var deleteButton = document.createElement("button");
deleteButton.innerHTML = "&#x2716;";
deleteButton.setAttribute("title", "Delete this row");
exports.defaultsHeadings = [{
  name: "Name",
  notEditable: true
}, {
  name: "Set"
}, {
  name: "Set Text Color",
  color: true
}, {
  name: "Set Background Color",
  color: true
}, {
  name: "Copyright"
}, {
  name: "Legal",
  longText: true
}, {
  name: "Logo URL"
}, {
  name: "Logo Scale",
  type: "number",
  inputAttributes: {
    min: 0.010,
    max: 2,
    step: 0.001
  }
}];
addTitlesTo(exports.defaultsHeadings);
exports.defaultsRows = [{
  name: "__defaults__",
  logoURL: "wot-logo2",
  set: "Core",
  setTextColor: "#ffec34",
  setBackgroundColor: "#ed1c24",
  copyright: "2023",
  legal: "CORE and all related character and elements are trademarks and © Amazon\n(s15)",
  logoScale: 0.975
}];
exports.cardsHeadings = [{
  name: "Name"
}, {
  name: "Type",
  allowedValues: ["Equipment", "Ally", "Location", "Starter", "Tactic", "Shadowspawn", "Weakness"]
}, {
  name: "Text",
  longText: true
}, {
  name: "Cost",
  type: "number"
}, {
  name: "VP",
  id: "victoryPoints",
  type: "number"
}, {
  name: "Subtype"
}, {
  name: "Variant",
  type: "boolean"
}, {
  name: "Oversized",
  type: "boolean",
  transform: function transform(checked, row) {
    if (row && row.values.type !== "Ally" && row.values.type !== "Shadowspawn") {
      return false;
    }
    return checked;
  }
}, {
  name: "Image URL"
}, {
  name: "Delete",
  type: "node",
  defaultValue: deleteButton
}];
addTitlesTo(exports.cardsHeadings);
exports.cardsRows = [{
  name: "Fire Element",
  type: "Starter",
  text: "",
  imageURL: "data:image/jpeg;base64,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",
  vp: 0,
  cost: 0
}, {
  name: "Rand Al'thor",
  type: "Ally",
  oversized: true,
  imageURL: "data:image/jpeg;base64,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",
  text: "Once during each of your turns, if you control two or more " + "Equipment, draw two cards and then discard a card."
}];

/***/ }),

/***/ "./src/gui/tabs/live-editor/live-editor.ts":
/*!*************************************************!*\
  !*** ./src/gui/tabs/live-editor/live-editor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LiveEditorTab = void 0;
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var card_1 = __webpack_require__(/*! src/cards/card/ */ "./src/cards/card/index.ts");
var table_1 = __webpack_require__(/*! src/gui/table */ "./src/gui/table.ts");
var tabular_1 = __webpack_require__(/*! src/gui/tabular/ */ "./src/gui/tabular/index.ts");
var utils_1 = __webpack_require__(/*! src/utils/ */ "./src/utils/index.ts");
var store = __webpack_require__(/*! store */ "./node_modules/store/dist/store.legacy.js");
var live_editor_tables_1 = __webpack_require__(/*! ./live-editor-tables */ "./src/gui/tabs/live-editor/live-editor-tables.ts");
var hbs = __webpack_require__(/*! ./live-editor.hbs */ "./src/gui/tabs/live-editor/live-editor.hbs");
__webpack_require__(/*! ./live-editor.scss */ "./src/gui/tabs/live-editor/live-editor.scss");
var tabTemplate = (0, utils_1.template)(hbs);
var LiveEditorTab = /*#__PURE__*/function (_tabular_1$Tab) {
  _inherits(LiveEditorTab, _tabular_1$Tab);
  var _super = _createSuper(LiveEditorTab);
  function LiveEditorTab() {
    var _this;
    _classCallCheck(this, LiveEditorTab);
    _this = _super.call(this, "Live Editor", tabTemplate());
    _this.maxCustomCards = 6;
    _this.cards = new Map();
    _this.canvases = new Map();
    _this.tooManyCardsElement = (0, utils_1.select)(_this.element, ".too-many-cards");
    _this.canvasesElement = (0, utils_1.select)(_this.element, ".canvases");
    _this.addRowButton = (0, utils_1.select)(_this.element, ".add-row-button");
    _this.scaleSlider = (0, utils_1.select)(_this.element, ".canvases-scale-slider");
    _this.scaleSlider.addEventListener("input", function () {
      return _this.resizeCanvases();
    });
    _this.scaleSliderPercent = (0, utils_1.select)(_this.element, ".canvases-scale-percent");
    _this.scaleSlider.value = store.get("card-scale") || 0.5;
    _this.defaultsTable = new table_1.EditableTable((0, utils_1.select)(_this.element, ".defaults-table"));
    _this.defaultsTable.addColumns(live_editor_tables_1.defaultsHeadings);
    _this.defaultsTable.on(table_1.EditableTable.EventSymbols.rowAdded, function (rowValues, row) {
      setTimeout(function () {
        return row.tr.classList.add("shown");
      }, 50);
    });
    _this.defaultsTable.on(table_1.EditableTable.EventSymbols.cellChanged, function (row) {
      _this.updateStore(_this.defaultsTable);
      _this.renderAllCards();
    });
    _this.defaultsTable.addRows(store.get("card-defaults") || live_editor_tables_1.defaultsRows);
    var cardsElement = (0, utils_1.select)(_this.element, ".cards-table");
    _this.cardsTable = new table_1.EditableTable(cardsElement);
    _this.cardsTable.on(table_1.EditableTable.EventSymbols.rowAdded, function (rowValues, row) {
      _this.updateStore(_this.cardsTable);
      _this.rowAdded(row);
    });
    _this.cardsTable.on(table_1.EditableTable.EventSymbols.cellChanged, function (row) {
      _this.updateStore(_this.cardsTable);
      _this.renderCard(row);
    });
    _this.cardsTable.on(table_1.EditableTable.EventSymbols.rowDeleted, function (row) {
      _this.updateStore(_this.cardsTable);
      _this.rowDeleted(row);
    });
    _this.app = new PIXI.Application({
      width: card_1.CARD_MAX_WIDTH,
      height: card_1.CARD_MAX_HEIGHT,
      antialias: true,
      backgroundAlpha: 0
    });
    _this.clearGraphics = new PIXI.Graphics();
    _this.app.stage.addChild(_this.clearGraphics);
    _this.cardsTable.addColumns(live_editor_tables_1.cardsHeadings);
    _this.cardsTable.addRows(store.get("cards") || live_editor_tables_1.cardsRows);
    _this.addRowButton.addEventListener("click", function () {
      _this.cardsTable.addRow(live_editor_tables_1.cardsRows[0]);
    });
    _this.resetToDefaultsButton = (0, utils_1.select)(_this.element, ".reset-to-defaults");
    _this.resetToDefaultsButton.addEventListener("click", function () {
      _this.resetToDefaults();
    });
    return _this;
  }
  _createClass(LiveEditorTab, [{
    key: "rowAdded",
    value: function rowAdded(row) {
      var _this2 = this;
      var canvas = document.createElement("canvas");
      setTimeout(function () {
        canvas.classList.add("shown");
        row.tr.classList.add("shown");
      }, 50);
      var deleteButton = row.values["delete"];
      deleteButton.addEventListener("click", function () {
        row.tr.classList.remove("shown");
        canvas.classList.remove("shown");
        _this2.checkMaxCards(_this2.cardsTable.rows.length - 1);
        setTimeout(function () {
          _this2.cardsTable.deleteRow(row);
        }, 355);
      });
      var card = new card_1.Card(row.values);
      this.cards.set(row, card);
      this.canvases.set(row, canvas);
      this.canvasesElement.appendChild(canvas);
      this.renderCard(row);
      this.checkMaxCards(this.cardsTable.rows.length);
    }
  }, {
    key: "rowDeleted",
    value: function rowDeleted(row) {
      var _a;
      this.updateStore(this.cardsTable);
      this.cards["delete"](row);
      (_a = this.canvases.get(row)) === null || _a === void 0 ? void 0 : _a.remove();
      this.canvases["delete"](row);
    }
  }, {
    key: "renderAllCards",
    value: function renderAllCards() {
      var _iterator = _createForOfIteratorHelper(this.cardsTable.getAllRows()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;
          this.renderCard(row);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "renderCard",
    value: function renderCard(row) {
      var _this3 = this;
      var card = this.cards.get(row);
      var canvas = this.canvases.get(row);
      this.clearGraphics.beginFill(0x000000, 0);
      this.clearGraphics.drawRect(0, 0, card.pxWidth, card.pxHeight);
      var defaults = (0, utils_1.clone)(this.defaultsTable.getRow(0).values);
      var args = (0, utils_1.clone)(defaults, row.values);
      card.setFrom(args);
      card.render().then(function (container) {
        var _a;
        _this3.checkForErrors(row, card);
        _this3.app.stage.addChild(container);
        _this3.app.render();
        canvas.width = card.pxWidth;
        canvas.height = card.pxHeight;
        (_a = canvas.getContext("2d")) === null || _a === void 0 ? void 0 : _a.drawImage(_this3.app.view, 0, 0);
        _this3.app.stage.removeChild(container);
        _this3.resizeCanvases(canvas);
      });
    }
  }, {
    key: "resizeCanvases",
    value: function resizeCanvases(canvas) {
      var scale = Number(this.scaleSlider.value);
      var asPercent = Math.round(scale * 10000) / 100;
      this.scaleSliderPercent.innerHTML = "".concat(asPercent, "%");
      store.set("card-scale", scale);
      var elements;
      if (canvas) {
        elements = [canvas];
      } else {
        elements = this.canvasesElement.getElementsByTagName("canvas");
      }
      var _iterator2 = _createForOfIteratorHelper(elements),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          var width = Number(element.getAttribute("width"));
          var height = Number(element.getAttribute("height"));
          element.style.width = "".concat(width * scale, "px");
          element.style.height = "".concat(height * scale, "px");
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "checkForErrors",
    value: function checkForErrors(row, card) {
      this.checkIfImageLoaded(row, card, "imageURL");
      this.checkIfImageLoaded(this.defaultsTable.rows[0], card, "logoURL");
    }
  }, {
    key: "checkIfImageLoaded",
    value: function checkIfImageLoaded(row, card, key) {}
  }, {
    key: "updateStore",
    value: function updateStore(table) {
      var storeKey = table === this.cardsTable ? "cards" : "card-defaults";
      store.set(storeKey, table.rows.map(function (row) {
        return row.values;
      }));
    }
  }, {
    key: "resetToDefaults",
    value: function resetToDefaults() {
      var _this4 = this;
      var _a;
      var cards = this.cardsTable.rows.slice();
      var _iterator3 = _createForOfIteratorHelper(cards),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var row = _step3.value;
          row.tr.classList.remove("shown");
          (_a = this.canvases.get(row)) === null || _a === void 0 ? void 0 : _a.classList.remove("shown");
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var defaults = this.defaultsTable.rows.slice();
      var _iterator4 = _createForOfIteratorHelper(defaults),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _row2 = _step4.value;
          _row2.tr.classList.remove("shown");
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      this.scaleSlider.value = String(0.5);
      setTimeout(function () {
        var _iterator5 = _createForOfIteratorHelper(cards),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var row = _step5.value;
            _this4.cardsTable.deleteRow(row);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        var _iterator6 = _createForOfIteratorHelper(defaults),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _row = _step6.value;
            _this4.defaultsTable.deleteRow(_row);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        setTimeout(function () {
          _this4.defaultsTable.addRows(live_editor_tables_1.defaultsRows);
          _this4.updateStore(_this4.defaultsTable);
          _this4.cardsTable.addRows(live_editor_tables_1.cardsRows);
          _this4.updateStore(_this4.cardsTable);
        }, 50);
      }, 355);
    }
  }, {
    key: "checkMaxCards",
    value: function checkMaxCards(numberOfCards) {
      var tooManyCards = numberOfCards >= this.maxCustomCards;
      this.addRowButton.disabled = tooManyCards;
      this.tooManyCardsElement.classList.toggle("collapsed", !tooManyCards);
    }
  }]);
  return LiveEditorTab;
}(tabular_1.Tab);
exports.LiveEditorTab = LiveEditorTab;

/***/ }),

/***/ "./src/gui/tabular/index.ts":
/*!**********************************!*\
  !*** ./src/gui/tabular/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tab = void 0;
var tab_1 = __webpack_require__(/*! ./tab */ "./src/gui/tabular/tab.ts");
exports.Tab = tab_1["default"];
__webpack_require__(/*! ./tabular.scss */ "./src/gui/tabular/tabular.scss");
__exportStar(__webpack_require__(/*! ./tabular */ "./src/gui/tabular/tabular.ts"), exports);

/***/ }),

/***/ "./src/gui/tabular/tab.ts":
/*!********************************!*\
  !*** ./src/gui/tabular/tab.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var utils_1 = __webpack_require__(/*! src/utils/ */ "./src/utils/index.ts");
var Tab = /*#__PURE__*/_createClass(function Tab(name, element) {
  _classCallCheck(this, Tab);
  this.name = name;
  this.element = element;
  this.id = (0, utils_1.toDashCase)(this.name);
});
exports["default"] = Tab;

/***/ }),

/***/ "./src/gui/tabular/tabular.ts":
/*!************************************!*\
  !*** ./src/gui/tabular/tabular.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tabular = void 0;
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var utils_1 = __webpack_require__(/*! src/utils/ */ "./src/utils/index.ts");
var hbs = __webpack_require__(/*! ./tabular.hbs */ "./src/gui/tabular/tabular.hbs");
var tabularTemplate = (0, utils_1.template)(hbs);
var Tabular = /*#__PURE__*/function (_events_1$EventEmitte) {
  _inherits(Tabular, _events_1$EventEmitte);
  var _super = _createSuper(Tabular);
  function Tabular(tabs, parent) {
    var _this;
    _classCallCheck(this, Tabular);
    _this = _super.call(this);
    _this.tabToContent = new Map();
    _this.tabToListElement = new Map();
    _this.timeouts = new Set();
    _this.element = tabularTemplate();
    _this.tabsList = (0, utils_1.select)(_this.element, "ul");
    _this.tabsContents = (0, utils_1.select)(_this.element, ".tabular-contents");
    if (tabs) {
      _this.setTabs(tabs);
    }
    if (parent) {
      _this.setParent(parent);
    }
    return _this;
  }
  _createClass(Tabular, [{
    key: "setTabs",
    value: function setTabs(tabs, startingTab) {
      var _this2 = this;
      this.tabs = tabs;
      var _iterator = _createForOfIteratorHelper(tabs),
        _step;
      try {
        var _loop = function _loop() {
          var tab = _step.value;
          var li = document.createElement("li");
          li.innerHTML = tab.name;
          li.addEventListener("click", function () {
            return _this2.changeTab(tab);
          });
          _this2.tabsList.appendChild(li);
          _this2.tabToListElement.set(tab, li);
          var div = document.createElement("div");
          div.classList.add("tab-contents");
          div.appendChild(tab.element);
          _this2.tabsContents.appendChild(div);
          _this2.tabToContent.set(tab, div);
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.changeTab(startingTab || tabs[0]);
    }
  }, {
    key: "setParent",
    value: function setParent(parent) {
      this.parent = parent;
      parent.appendChild(this.element);
    }
  }, {
    key: "getTabByID",
    value: function getTabByID(id) {
      return this.tabs.find(function (tab) {
        return tab.id === id;
      });
    }
  }, {
    key: "changeTab",
    value: function changeTab(toTab) {
      var _this3 = this;
      var found = this.tabs.find(function (aTab) {
        return aTab === toTab;
      });
      if (!found) {
        throw new Error("Cannot change to Tab ".concat(toTab, " because it is not a tab of ours."));
      }
      var oldTab = this.currentTab;
      this.currentTab = toTab;
      if (oldTab) {
        this.tabToListElement.get(oldTab).classList.remove("current");
      }
      this.tabToListElement.get(this.currentTab).classList.add("current");
      var newContent = this.tabToContent.get(this.currentTab);
      var oldContent = this.tabToContent.get(oldTab);
      if (!oldTab) {
        newContent.classList.add("current");
        newContent.classList.remove("hidden");
        this.hideTabs();
      } else {
        this.tabsContents.style.height = "".concat(oldContent.clientHeight, "px");
        oldContent.classList.remove("current");
        newContent.classList.remove("hidden");
        this.clearTimeouts();
        this.setTimeout(function () {
          newContent.remove();
          _this3.tabsContents.insertBefore(newContent, _this3.tabsContents.firstChild);
          _this3.setTimeout(function () {
            oldContent.classList.add("hidden");
            newContent.classList.add("current");
            _this3.tabsContents.style.height = "".concat(newContent.clientHeight, "px");
            _this3.setTimeout(function () {
              _this3.tabsContents.style.height = "";
              _this3.hideTabs();
              _this3.emit(Tabular.EventSymbols.tabChanged, toTab);
            }, 355);
          }, 50);
        }, 355);
      }
      this.emit(Tabular.EventSymbols.tabChanging, toTab);
    }
  }, {
    key: "hideTabs",
    value: function hideTabs() {
      this.tabToContent.get(this.currentTab).classList.remove("hidden");
      this.tabToListElement.get(this.currentTab).classList.add("current");
      var _iterator2 = _createForOfIteratorHelper(this.tabs),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var tab = _step2.value;
          if (tab !== this.currentTab) {
            this.tabToContent.get(tab).classList.add("hidden");
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "setTimeout",
    value: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }
      setTimeout.toString = function () {
        return _setTimeout.toString();
      };
      return setTimeout;
    }(function (callback, time) {
      var _this4 = this;
      var timer = setTimeout(function () {
        _this4.timeouts["delete"](timer);
        callback();
      }, time);
      this.timeouts.add(timer);
    })
  }, {
    key: "clearTimeouts",
    value: function clearTimeouts() {
      var _iterator3 = _createForOfIteratorHelper(this.timeouts),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var timer = _step3.value;
          clearTimeout(timer);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.timeouts.clear();
    }
  }]);
  return Tabular;
}(events_1.EventEmitter);
exports.Tabular = Tabular;
Tabular.EventSymbols = {
  tabChanging: Symbol("tabChanging"),
  tabChanged: Symbol("tabChanged")
};

/***/ }),

/***/ "./src/gui/ui/index.ts":
/*!*****************************!*\
  !*** ./src/gui/ui/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__exportStar(__webpack_require__(/*! ./ui */ "./src/gui/ui/ui.ts"), exports);

/***/ }),

/***/ "./src/gui/ui/ui.ts":
/*!**************************!*\
  !*** ./src/gui/ui/ui.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UI = void 0;
var tabs_1 = __webpack_require__(/*! src/gui/tabs/ */ "./src/gui/tabs/index.ts");
var tabular_1 = __webpack_require__(/*! src/gui/tabular/ */ "./src/gui/tabular/index.ts");
var utils_1 = __webpack_require__(/*! src/utils/ */ "./src/utils/index.ts");
var hbs = __webpack_require__(/*! ./ui.hbs */ "./src/gui/ui/ui.hbs");
__webpack_require__(/*! ./ui.scss */ "./src/gui/ui/ui.scss");
var uiTemplate = (0, utils_1.template)(hbs);
var UI = /*#__PURE__*/_createClass(function UI(element) {
  var _this = this;
  _classCallCheck(this, UI);
  this.title = "WoT - Cryptozoic Game Engine";
  this.subtitle = "Deck Builder Generator";
  this.tabsChanging = true;
  this.parent = element;
  this.element = uiTemplate(this);
  this.parent.appendChild(this.element);
  this.mainElement = (0, utils_1.select)(this.element, "main");
  document.documentElement.setAttribute("data-browser", navigator.userAgent);
  document.title = "".concat(this.title, " - ").concat(this.subtitle);
  var faviconLink = document.createElement("link");
  faviconLink.href = __webpack_require__(/*! ../../../resources/images/favicon.png */ "./resources/images/favicon.png");
  faviconLink.rel = "icon";
  faviconLink.type = "image/png";
  document.head.appendChild(faviconLink);
  this.tabular = new tabular_1.Tabular();
  this.tabular.on(tabular_1.Tabular.EventSymbols.tabChanging, function (tab) {
    _this.tabsChanging = true;
    window.location.hash = tab.id;
  });
  this.tabular.on(tabular_1.Tabular.EventSymbols.tabChanged, function (tab) {
    _this.tabsChanging = false;
  });
  var tabs = (0, tabs_1.getTabs)();
  var startingTab = tabs[0];
  if (window.location.hash) {
    startingTab = tabs.find(function (tab) {
      return tab.id === window.location.hash.substr(1);
    });
  }
  this.tabular.setTabs(tabs, startingTab);
  this.tabular.setParent(this.mainElement);
  this.tabsChanging = false;
  document.body.onhashchange = function () {
    if (_this.tabsChanging) {
      return;
    }
    var hash = window.location.hash.substr(1);
    var tab = _this.tabular.getTabByID(hash);
    if (tab) {
      _this.tabular.changeTab(tab);
    }
  };
});
exports.UI = UI;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
__webpack_require__(/*! src/styles/style.scss */ "./src/styles/style.scss");
__webpack_require__(/*! src/styles/fonts.scss */ "./src/styles/fonts.scss");
var ui_1 = __webpack_require__(/*! src/gui/ui */ "./src/gui/ui/index.ts");
var initialize_1 = __webpack_require__(/*! src/initialize */ "./src/initialize.ts");
var unloadedMessage = document.createElement("p");
document.body.appendChild(unloadedMessage);
unloadedMessage.classList.add("unloaded-message");
unloadedMessage.innerText = "Loading...";
(0, initialize_1.initialize)(function () {
  unloadedMessage.remove();
  new ui_1.UI(document.body);
});

/***/ }),

/***/ "./src/initialize.ts":
/*!***************************!*\
  !*** ./src/initialize.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialize = exports.initialTexturesToKey = exports.initialTextures = void 0;
var path_1 = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var fonts_1 = __webpack_require__(/*! src/styles/fonts */ "./src/styles/fonts.ts");
__webpack_require__("./resources/card-images sync recursive \\.png$");
__webpack_require__("./resources/images sync recursive \\.png$");
var r = __webpack_require__("./resources/card-templates sync recursive \\.png$");
var wrapper = {
  fontsLoaded: false,
  pixiLoaded: false,
  callback: false
};
function checkIfInitialized() {
  if (wrapper.fontsLoaded && wrapper.pixiLoaded && wrapper.callback) {
    wrapper.callback();
  }
}
var textures = {};
function requireAll(r) {
  var _iterator = _createForOfIteratorHelper(r.keys()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var textureName = (0, path_1.basename)(key, ".png");
      var texturePath = r(key);
      console.log('path', texturePath, key);
      console.log(r);
      textures[textureName] = texturePath;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
requireAll(r);
exports.initialTextures = textures;
exports.initialTexturesToKey = new Map();
function initialize(callback) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          wrapper.callback = callback;
          PIXI.utils.skipHello();
          PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
          wrapper.callback();
          requireAll(r);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
}
exports.initialize = initialize;
(0, fonts_1.onFontsLoaded)(function (error) {
  if (error) {
    console.error(error);
  } else {
    wrapper.fontsLoaded = true;
    checkIfInitialized();
  }
});

/***/ }),

/***/ "./src/styles/fonts.ts":
/*!*****************************!*\
  !*** ./src/styles/fonts.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.onFontsLoaded = void 0;
var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");
__webpack_require__(/*! ./fonts.scss */ "./src/styles/fonts.scss");
var fonts = {};
var ready = {};
var onReady = {
  callback: null
};
function checkIfReady() {
  var areWeReady = true;
  for (var _i = 0, _Object$keys = Object.keys(ready); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (!ready[key]) {
      areWeReady = false;
      break;
    }
  }
  if (areWeReady && onReady.callback) {
    onReady.callback();
  }
}
function loadFonts() {
  var _loop = function _loop() {
    var fontFamily = _Object$keys2[_i2];
    var font = fonts[fontFamily];
    var _iterator = _createForOfIteratorHelper(font),
      _step;
    try {
      var _loop2 = function _loop2() {
        var fontType = _step.value;
        ready[fontFamily + fontType] = false;
        var properties = {};
        if (fontType !== "regular") {
          properties = fontType === "bold" ? {
            weight: "bold"
          } : {
            style: "italic"
          };
        }
        console.log('font face', fontFamily, properties);
        new FontFaceObserver(fontFamily, properties).load().then(function () {
          ready[fontFamily + fontType] = true;
          checkIfReady();
        }, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          console.log(args);
          var message = "".concat(fontFamily, " ").concat(fontType, " could not be loaded");
          onReady.callback(new Error(message));
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  for (var _i2 = 0, _Object$keys2 = Object.keys(fonts); _i2 < _Object$keys2.length; _i2++) {
    _loop();
  }
}
function onFontsLoaded(callback) {
  onReady.callback = callback;
  document.fonts.ready.then(function () {
    loadFonts();
    checkIfReady();
  });
}
exports.onFontsLoaded = onFontsLoaded;

/***/ }),

/***/ "./src/utils/dom.ts":
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.select = exports.expand = exports.template = void 0;
function createNodeFromTemplate(required, args) {
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = required(args);
  var node = tempDiv.firstChild;
  node.parentElement.removeChild(node);
  return node;
}
function template(required) {
  return function (args) {
    return createNodeFromTemplate(required, args);
  };
}
exports.template = template;
function expand(element) {
  return new Promise(function (resolve, reject) {
    element.classList.add("measuring");
    setTimeout(function () {
      var height = "".concat(element.clientHeight, "px");
      element.classList.remove("measuring");
      setTimeout(function () {
        element.style.height = height;
        element.classList.add("expanded");
        setTimeout(function () {
          element.classList.remove("expanded", "expandable");
          element.style.height = "";
          resolve();
        }, 350);
      }, 50);
    }, 50);
  });
}
exports.expand = expand;
function select(from, query) {
  if (query.startsWith(".")) {
    return from.getElementsByClassName(query.substr(1))[0];
  }
  if (query.startsWith("#")) {
    return document.getElementById(query.substr(1));
  }
  return from.getElementsByTagName(query)[0];
}
exports.select = select;

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clone = exports.cloneExceptEmpty = exports.sleep = void 0;
__exportStar(__webpack_require__(/*! ./dom */ "./src/utils/dom.ts"), exports);
__exportStar(__webpack_require__(/*! ./math */ "./src/utils/math.ts"), exports);
__exportStar(__webpack_require__(/*! ./pixi */ "./src/utils/pixi.ts"), exports);
__exportStar(__webpack_require__(/*! ./string */ "./src/utils/string.ts"), exports);
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
exports.sleep = sleep;
function cloneExceptEmpty() {
  var result = {};
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    var arg = _args[_i];
    for (var key in arg) {
      if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key] !== "") {
        result[key] = arg[key];
      }
    }
  }
  return result;
}
exports.cloneExceptEmpty = cloneExceptEmpty;
function clone() {
  var _Object$assign;
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return (_Object$assign = Object.assign).call.apply(_Object$assign, [Object, {}].concat(args));
}
exports.clone = clone;

/***/ }),

/***/ "./src/utils/math.ts":
/*!***************************!*\
  !*** ./src/utils/math.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.doesCircleOverlapRectangle = exports.doRectanglesOverlap = exports.clamp = void 0;
function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
exports.clamp = clamp;
function doRectanglesOverlap(r1, r2) {
  return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
}
exports.doRectanglesOverlap = doRectanglesOverlap;
function doesCircleOverlapRectangle(rect, circle) {
  var distX = Math.abs(circle.x - rect.x - rect.width / 2);
  var distY = Math.abs(circle.y - rect.y - rect.height / 2);
  if (distX > rect.width / 2 + circle.radius || distY > rect.height / 2 + circle.radius) {
    return false;
  }
  if (distX <= rect.width / 2 || distY <= rect.height / 2) {
    return true;
  }
  var dx = distX - rect.width / 2;
  var dy = distY - rect.height / 2;
  return dx * dx + dy * dy <= circle.radius * circle.radius;
}
exports.doesCircleOverlapRectangle = doesCircleOverlapRectangle;

/***/ }),

/***/ "./src/utils/pixi.ts":
/*!***************************!*\
  !*** ./src/utils/pixi.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.autoSizeAndWrapStyledText = exports.wrapStyledText = exports.wrapStyledTextCharacters = exports.newSprite = void 0;
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var math_1 = __webpack_require__(/*! ./math */ "./src/utils/math.ts");
var getTexturePath = function getTexturePath(textureKey) {
  return "resources/" + textureKey + ".png";
};
function newSprite(textureKey, container) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, texture, sprite;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = textureKey.startsWith("http") || textureKey.startsWith("data") ? textureKey : getTexturePath(textureKey);
          console.log("WAITING for texture: ", url);
          _context.next = 4;
          return PIXI.Texture.fromURL(url);
        case 4:
          texture = _context.sent;
          console.log("Received texture: ", texture);
          sprite = new PIXI.Sprite(texture);
          console.log("CONTAINER? ", container, sprite, textureKey);
          if (container) {
            container.addChild(sprite);
          }
          return _context.abrupt("return", sprite);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
}
exports.newSprite = newSprite;
exports.wrapStyledTextCharacters = {
  boldStart: String.fromCharCode(17),
  boldEnd: String.fromCharCode(18),
  italicStart: String.fromCharCode(19),
  italicEnd: String.fromCharCode(20)
};
function wrapStyledText(text, width, normalStyle) {
  var container = new PIXI.Container();
  var boldStyle = normalStyle.clone();
  boldStyle.fontWeight = "bold";
  var italicStyle = normalStyle.clone();
  italicStyle.fontStyle = "italic";
  var pixiLine = new PIXI.Container();
  pixiLine.setParent(container);
  var currentLine = "";
  var bolding = false;
  var italics = false;
  var x = 0;
  var y = 0;
  var iter = 5000;
  for (var i = 0; i < text.length; i++) {
    if (!iter--) {
      throw new Error("Infinite loop detected trying to wrap text, aborting");
    }
    var _char = text[i];
    var currentStyle = normalStyle;
    if (bolding) {
      currentStyle = boldStyle;
    }
    if (italics) {
      currentStyle = italicStyle;
    }
    var newline = false;
    var paddedNewline = false;
    var cutoff = false;
    switch (_char) {
      case "\n":
        newline = true;
        if (text[i + 1] === "\n") {
          i++;
          paddedNewline = true;
        }
        break;
      case exports.wrapStyledTextCharacters.boldStart:
        if (!italics) {
          if (!bolding) {
            cutoff = true;
          }
          bolding = true;
        }
        break;
      case exports.wrapStyledTextCharacters.boldEnd:
        if (!italics) {
          if (bolding) {
            cutoff = true;
          }
          bolding = false;
        }
        break;
      case exports.wrapStyledTextCharacters.italicStart:
        if (!italics || bolding) {
          cutoff = true;
        }
        bolding = false;
        italics = true;
        break;
      case exports.wrapStyledTextCharacters.italicEnd:
        if (italics || bolding) {
          cutoff = true;
        }
        bolding = false;
        italics = false;
        break;
      default:
        currentLine += _char;
        break;
    }
    if (i === text.length - 1) {
      newline = true;
    }
    if (!newline) {
      var bounds = PIXI.TextMetrics.measureText(currentLine, currentStyle);
      var lastLineObject = pixiLine.children[pixiLine.children.length - 1];
      var lastLineOffset = lastLineObject ? lastLineObject.x + lastLineObject.width : 0;
      var totalLineWidth = bounds.width + lastLineOffset;
      if (totalLineWidth >= width) {
        for (var r = i; r >= 0; r--) {
          var rChar = text[r];
          if (rChar === " ") {
            var delta = i - r;
            currentLine = currentLine.substring(0, currentLine.length - delta);
            i = r;
            newline = true;
            break;
          }
        }
      }
    }
    if (cutoff || newline) {
      var pixiText = null;
      if (currentLine) {
        pixiText = new PIXI.Text(currentLine, currentStyle);
        pixiLine.addChild(pixiText);
        pixiText.x = Math.round(x);
      }
      if (newline) {
        y += Number(currentStyle.fontSize) * (paddedNewline ? 1.5 : 1);
        x = 0;
        pixiLine = new PIXI.Container();
        pixiLine.position.set(Math.round(x), Math.round(y));
        container.addChild(pixiLine);
      } else if (pixiText) {
        x += pixiText.width - PIXI.TextMetrics.measureText(" ", currentStyle).width / 5;
      }
      currentLine = "";
    }
  }
  return container;
}
exports.wrapStyledText = wrapStyledText;
function autoSizeAndWrapStyledText(text, width, height, normalStyle) {
  var autoSizeStep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var collisions = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  var centerHorizontally = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var centerVertically = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var resizing = true;
  while (resizing) {
    if (normalStyle.fontSize <= 0) {
      return null;
    }
    resizing = false;
    var container = wrapStyledText(text, width, normalStyle);
    if (centerHorizontally) {
      container.pivot.y = -(height - container.height) / 2;
    }
    if (centerVertically) {
      var _iterator = _createForOfIteratorHelper(container.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          var childContainer = child;
          child.x = (width - childContainer.width) / 2;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (container.height > height) {
      resizing = true;
    } else {
      var _iterator2 = _createForOfIteratorHelper(collisions),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var collision = _step2.value;
          var _iterator3 = _createForOfIteratorHelper(container.children),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _child = _step3.value;
              var textbox = _child.getBounds();
              if (collision instanceof PIXI.Rectangle) {
                if ((0, math_1.doRectanglesOverlap)(collision, textbox)) {
                  resizing = true;
                  break;
                }
              } else if (collision instanceof PIXI.Circle) {
                if ((0, math_1.doesCircleOverlapRectangle)(textbox, collision)) {
                  resizing = true;
                  break;
                }
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          if (resizing) {
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    if (resizing) {
      normalStyle.fontSize = Number(normalStyle.fontSize) - autoSizeStep;
    } else {
      return container;
    }
  }
  return null;
}
exports.autoSizeAndWrapStyledText = autoSizeAndWrapStyledText;

/***/ }),

/***/ "./src/utils/string.ts":
/*!*****************************!*\
  !*** ./src/utils/string.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.surroundText = exports.replaceAll = exports.stripTagsFromString = exports.removeTags = exports.escapeRegExp = exports.toDashCase = exports.toCamelCase = exports.tryToCast = void 0;
function tryToCast(value) {
  if (typeof value === "string") {
    var asNum = Number(value);
    if (!isNaN(asNum)) {
      value = asNum;
    } else {
      var lowered = value.toLowerCase();
      if (lowered === "false") {
        value = false;
      } else if (lowered === "true") {
        value = true;
      }
    }
  }
  return value;
}
exports.tryToCast = tryToCast;
function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (matched, index) {
    if (+matched === 0) {
      return "";
    }
    return index === 0 ? matched.toLowerCase() : matched.toUpperCase();
  });
}
exports.toCamelCase = toCamelCase;
function toDashCase(str) {
  if (!str) {
    return "";
  }
  str = str[0].toLowerCase() + str.substr(1);
  str = replaceAll(str, " ", "");
  return str.replace(/([A-Z])/g, function (sub) {
    return "-" + sub.toLowerCase();
  });
}
exports.toDashCase = toDashCase;
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
exports.escapeRegExp = escapeRegExp;
function removeTags(str) {
  var replacement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return str.replace(/(<([^>]+)>)/ig, replacement);
}
exports.removeTags = removeTags;
function stripTagsFromString(str) {
  var div = document.createElement("div");
  div.innerHTML = str;
  return div.textContent || div.innerText || "";
}
exports.stripTagsFromString = stripTagsFromString;
function replaceAll(target, search) {
  var replacement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return target.replace(new RegExp(escapeRegExp(search), "g"), replacement);
}
exports.replaceAll = replaceAll;
function surroundText(search, regex, front, end) {
  var matches = [];
  while (true) {
    var result = regex.exec(search);
    if (result) {
      matches.push({
        start: result.index,
        end: result.index + result[0].length,
        str: result[0]
      });
    } else {
      break;
    }
  }
  var addLength = front.length + end.length;
  var addedLength = 0;
  for (var _i = 0, _matches = matches; _i < _matches.length; _i++) {
    var match = _matches[_i];
    search = [search.substring(0, match.start + addedLength), front, match.str, end, search.substring(match.end + addedLength)].join("");
    addedLength += addLength;
  }
  return search;
}
exports.surroundText = surroundText;

/***/ }),

/***/ "./src/handlebars-helpers/currentYear.js":
/*!***********************************************!*\
  !*** ./src/handlebars-helpers/currentYear.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = function () {
  return new Date().getFullYear();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabs/deck-generator/deck-generator-tab.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabs/deck-generator/deck-generator-tab.scss ***!
  \******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.deck-generator-tab .file-uploader-wrapper {
  display: block;
  width: 100%;
  text-align: center; }

.deck-generator-tab .csv-file-selector:disabled + .csv-file-selector-label .file-name, .deck-generator-tab .csv-file-selector:disabled + .csv-file-selector-label .file-button {
  background-color: #999;
  border-color: #999;
  cursor: default; }

.deck-generator-tab .csv-file-selector:disabled + .csv-file-selector-label .file-name {
  background-color: #ddd; }
  .deck-generator-tab .csv-file-selector:disabled + .csv-file-selector-label .file-name .none-selected {
    color: #999; }

.deck-generator-tab .csv-file-selector-label {
  cursor: pointer;
  display: inline-block; }
  .deck-generator-tab .csv-file-selector-label:hover .file-name, .deck-generator-tab .csv-file-selector-label:hover .file-button, .deck-generator-tab .csv-file-selector-label:focus .file-name, .deck-generator-tab .csv-file-selector-label:focus .file-button {
    background-color: #00adea;
    border-color: #00adea; }
  .deck-generator-tab .csv-file-selector-label:hover .file-name, .deck-generator-tab .csv-file-selector-label:focus .file-name {
    background-color: #ffffff; }
  .deck-generator-tab .csv-file-selector-label .file-name, .deck-generator-tab .csv-file-selector-label .file-button {
    float: left;
    width: 10em;
    height: 1em;
    padding: 1em 0;
    border: 0.125em solid #007AA2;
    color: #ffffff;
    box-shadow: 3px 3px #000000; }
  .deck-generator-tab .csv-file-selector-label .file-name {
    width: 35em;
    border-radius: 0.75em 0 0 0.75em;
    color: #000000;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden; }
    .deck-generator-tab .csv-file-selector-label .file-name .none-selected {
      font-weight: normal;
      color: #00adea; }
  .deck-generator-tab .csv-file-selector-label .file-button {
    background: #007AA2;
    text-align: center;
    border-radius: 0 0.75em 0.75em 0; }
    .deck-generator-tab .csv-file-selector-label .file-button svg {
      fill: #ffffff;
      margin-right: 0.25em;
      height: 0.8em; }

.deck-generator-tab .csv-file-selector {
  display: none; }

.deck-generator-tab .generate-button {
  font-size: 2em;
  padding: 1rem 2rem;
  display: block;
  margin: 0 auto; }

.deck-generator-tab .max-cards-x, .deck-generator-tab .max-cards-y {
  display: inline-block;
  margin: 1em; }

.deck-generator-tab .generation-options {
  text-align: center; }
  .deck-generator-tab .generation-options .max-cards-x {
    margin-right: 0.25em; }
  .deck-generator-tab .generation-options .max-cards-y {
    margin-left: 0.25em; }
  .deck-generator-tab .generation-options input[type=number] {
    width: 2.5em;
    text-align: right; }

.deck-generator-tab .progress-bar-background {
  width: 75%;
  margin: 0 auto;
  min-height: 2em;
  border: 0.25em solid #555555;
  background: #999;
  border-radius: 0.75em; }
  .deck-generator-tab .progress-bar-background .progress-bar-foreground {
    min-width: 0%;
    max-width: 100%;
    display: inline-block;
    background: #FFC60E;
    border-radius: 0.5em;
    min-height: 1em;
    padding: 0.5em 0;
    text-align: center; }

.deck-generator-tab .generation.expanded, .deck-generator-tab .generation:not(.expandable) {
  padding-bottom: 1em; }

.deck-generator-tab .generation-log {
  display: block;
  border: 0.25em solid #007AA2;
  padding: 1em;
  border-radius: 0.75em;
  background-color: #ddd;
  list-style-type: none; }
  .deck-generator-tab .generation-log li + li {
    margin-top: 1em; }
  .deck-generator-tab .generation-log li:nth-child(odd) {
    color: #005F7F; }
  .deck-generator-tab .generation-log li.error {
    color: #f82104; }
    .deck-generator-tab .generation-log li.error:nth-child(odd) {
      color: #ad1703; }

.deck-generator-tab .download-button {
  font-size: 4em;
  display: block;
  margin: 1rem auto 0 auto; }
  .deck-generator-tab .download-button svg {
    width: 0.8em;
    height: 0.8em; }
`, "",{"version":3,"sources":["webpack://./src/gui/tabs/deck-generator/deck-generator-tab.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EAEQ,cAAc;EACd,WAAW;EACX,kBAAkB,EAAA;;AAJ1B;EASY,sBCJI;EDKJ,kBCLI;EDMJ,eAAe,EAAA;;AAX3B;EAeY,sBCZK,EAAA;EDHjB;IAkBgB,WCbA,EAAA;;ADLhB;EAyBQ,eAAe;EACf,qBAAqB,EAAA;EA1B7B;IA8BgB,yBCrBC;IDsBD,qBCtBC,EAAA;EDTjB;IAmCgB,yBCrCD,EAAA;EDEf;IAyCY,WAAW;IACX,WAAW;IACX,WAAW;IACX,cAAc;IACd,6BCnCU;IDoCV,cChDG;IDiDH,2BChDG,EAAA;EDCf;IAmDY,WAAW;IACX,gCAAgC;IAChC,cCtDG;IDuDH,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB,EAAA;IAxD5B;MA2DgB,mBAAmB;MACnB,cCnDC,EAAA;EDTjB;IAiEY,mBCvDU;IDwDV,kBAAkB;IAClB,gCAAgC,EAAA;IAnE5C;MAsEgB,aCxED;MDyEC,oBAAoB;MACpB,aAAa,EAAA;;AAxE7B;EA8EQ,aAAa,EAAA;;AA9ErB;EAqFQ,cAAc;EACd,kBAAkB;EAClB,cAAc;EACd,cAAc,EAAA;;AAxFtB;EA4FQ,qBAAqB;EACrB,WAAW,EAAA;;AA7FnB;EAiGQ,kBAAkB,EAAA;EAjG1B;IAoGY,oBAAoB,EAAA;EApGhC;IAwGY,mBAAmB,EAAA;EAxG/B;IA4GY,YAAY;IACZ,iBAAiB,EAAA;;AA7G7B;EAkHQ,UAAU;EACV,cAAc;EACd,eAAe;EACf,4BCrHa;EDsHb,gBCjHQ;EDkHR,qBAAqB,EAAA;EAvH7B;IA0HY,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,mBC5GO;ID6GP,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,kBAAkB,EAAA;;AAjI9B;EAuIY,mBAAmB,EAAA;;AAvI/B;EA4IQ,cAAc;EACd,4BCnIc;EDoId,YAAY;EACZ,qBAAqB;EACrB,sBC7IS;ED8IT,qBAAqB,EAAA;EAjJ7B;IAqJgB,eAAe,EAAA;EArJ/B;IAyJgB,cC9IS,EAAA;EDXzB;IA6JgB,cCtJD,EAAA;IDPf;MAgKoB,cAA0B,EAAA;;AAhK9C;EAuKQ,cAAc;EACd,cAAc;EACd,wBAAwB,EAAA;EAzKhC;IA4KY,YAAY;IACZ,aAAa,EAAA","sourcesContent":["@import \"src/styles/colors.scss\";\n\n.deck-generator-tab {\n    & .file-uploader-wrapper {\n        display: block;\n        width: 100%;\n        text-align: center;\n    }\n\n    & .csv-file-selector:disabled + .csv-file-selector-label {\n        & .file-name, & .file-button {\n            background-color: $dark-gray;\n            border-color: $dark-gray;\n            cursor: default;\n        }\n\n        & .file-name {\n            background-color: $light-gray;\n\n            & .none-selected {\n                color: $dark-gray;\n            }\n        }\n    }\n\n    // we will style the label to appear as a better file selector\n    & .csv-file-selector-label {\n        cursor: pointer;\n        display: inline-block;\n\n        &:hover, &:focus {\n            & .file-name, & .file-button {\n                background-color: $primary;\n                border-color: $primary;\n            }\n\n            & .file-name {\n                background-color: $white;\n            }\n        }\n\n        & .file-name, & .file-button {\n            //display: inline-block;\n            float: left;\n            width: 10em;\n            height: 1em;\n            padding: 1em 0;\n            border: 0.125em solid $primary-dark;\n            color: $white;\n            box-shadow: 3px 3px $black;\n        }\n\n        & .file-name {\n            width: 35em;\n            border-radius: 0.75em 0 0 0.75em;\n            color: $black;\n            font-weight: bold;\n            white-space: nowrap;\n            overflow: hidden;\n\n            & .none-selected {\n                font-weight: normal;\n                color: $primary;\n            }\n        }\n\n        & .file-button {\n            background: $primary-dark;\n            text-align: center;\n            border-radius: 0 0.75em 0.75em 0;\n\n            & svg {\n                fill: $white;\n                margin-right: 0.25em;\n                height: 0.8em;\n            }\n        }\n    }\n\n    & .csv-file-selector {\n        display: none;\n    }\n\n    // progress section\n\n\n    & .generate-button {\n        font-size: 2em;\n        padding: 1rem 2rem;\n        display: block;\n        margin: 0 auto;\n    }\n\n    & .max-cards-x, & .max-cards-y {\n        display: inline-block;\n        margin: 1em;\n    }\n\n    & .generation-options {\n        text-align: center;\n\n        & .max-cards-x {\n            margin-right: 0.25em;\n        }\n\n        & .max-cards-y {\n            margin-left: 0.25em;\n        }\n\n        & input[type=number] {\n            width: 2.5em;\n            text-align: right;\n        }\n    }\n\n    & .progress-bar-background {\n        width: 75%;\n        margin: 0 auto;\n        min-height: 2em;\n        border: 0.25em solid $light-black;\n        background: $dark-gray;\n        border-radius: 0.75em;\n\n        & .progress-bar-foreground {\n            min-width: 0%;\n            max-width: 100%;\n            display: inline-block;\n            background: $secondary;\n            border-radius: 0.5em;\n            min-height: 1em;\n            padding: 0.5em 0;\n            text-align: center;\n        }\n    }\n\n    & .generation {\n        &.expanded, &:not(.expandable) {\n            padding-bottom: 1em;\n        }\n    }\n\n    & .generation-log {\n        display: block;\n        border: 0.25em solid $primary-dark;\n        padding: 1em;\n        border-radius: 0.75em;\n        background-color: $light-gray;\n        list-style-type: none;\n\n        & li {\n            & + li {\n                margin-top: 1em;\n            }\n\n            &:nth-child(odd) {\n                color: $primary-darkest;\n            }\n\n            &.error {\n                color: $error;\n\n                &:nth-child(odd) {\n                    color: darken($error, 15%);\n                }\n            }\n        }\n    }\n\n    & .download-button {\n        font-size: 4em;\n        display: block;\n        margin: 1rem auto 0 auto;\n\n        & svg {\n            width: 0.8em;\n            height: 0.8em;\n        }\n    }\n}\n","$white: #ffffff;\n$black: #000000;\n$light-black: #555555;\n\n$off-white: #eaeaea;\n$light-gray: #ddd;\n$gray: #bbb;\n$dark-gray: #999;\n\n$error: #f82104;//#e02605;\n\n$primary: #00adea;\n$primary-dark: #007AA2;\n$primary-darkest: #005F7F;\n$primary-light: #06C1FF;\n$primary-lightest: #27C7FC;\n\n$primary-bar: #00adea;\n\n$secondary: #FFC60E;\n$secondary-dark: #CD9D00;\n$secondary-darkest: #A17B00;\n$secondary-light: #FFD240;\n$secondary-lightest: #FFDC6A;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabs/help/help.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabs/help/help.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.help-tab table tr:first-child th {
  text-align: left; }
  .help-tab table tr:first-child th:nth-child(1) {
    width: 10em; }
  .help-tab table tr:first-child th:nth-child(2) {
    width: 5em; }
  .help-tab table tr:first-child th:nth-child(3) {
    padding-left: 0.5em; }

.help-tab table tr:not(first-child) td:nth-child(1) {
  font-family: monospace; }

.help-tab table tr:not(first-child) td:nth-child(2) {
  color: #007AA2;
  font-style: italic;
  cursor: help; }

.help-tab img {
  display: block;
  margin: 0 auto; }
`, "",{"version":3,"sources":["webpack://./src/gui/tabs/help/help.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EAIgB,gBAAgB,EAAA;EAJhC;IAOoB,WAAW,EAAA;EAP/B;IAWoB,UAAU,EAAA;EAX9B;IAeoB,mBAAmB,EAAA;;AAfvC;EAsBgB,sBAAsB,EAAA;;AAtBtC;EA0BgB,cChBM;EDiBN,kBAAkB;EAClB,YAAY,EAAA;;AA5B5B;EAkCQ,cAAc;EACd,cAAc,EAAA","sourcesContent":["@import \"src/styles/colors.scss\";\n\n.help-tab {\n    & table {\n        & tr:first-child {\n            & th {\n                text-align: left;\n\n                &:nth-child(1) {\n                    width: 10em;\n                }\n\n                &:nth-child(2) {\n                    width: 5em;\n                }\n\n                &:nth-child(3) {\n                    padding-left: 0.5em;\n                }\n            }\n        }\n\n        & tr:not(first-child) {\n            & td:nth-child(1) {\n                font-family: monospace;\n            }\n\n            & td:nth-child(2) {\n                color: $primary-dark;\n                font-style: italic;\n                cursor: help;\n            }\n        }\n    }\n\n    & img {\n        display: block;\n        margin: 0 auto;\n    }\n}\n","$white: #ffffff;\n$black: #000000;\n$light-black: #555555;\n\n$off-white: #eaeaea;\n$light-gray: #ddd;\n$gray: #bbb;\n$dark-gray: #999;\n\n$error: #f82104;//#e02605;\n\n$primary: #00adea;\n$primary-dark: #007AA2;\n$primary-darkest: #005F7F;\n$primary-light: #06C1FF;\n$primary-lightest: #27C7FC;\n\n$primary-bar: #00adea;\n\n$secondary: #FFC60E;\n$secondary-dark: #CD9D00;\n$secondary-darkest: #A17B00;\n$secondary-light: #FFD240;\n$secondary-lightest: #FFDC6A;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabs/live-editor/live-editor.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabs/live-editor/live-editor.scss ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.input-like, .live-editor table input[type=checkbox] + label:before {
  border: 1px solid #999;
  color: #000000;
  border-radius: 0.375em;
  background-color: #ffffff; }
  .input-like:hover, .live-editor table input[type=checkbox] + label:hover:before, .input-like:focus, .live-editor table input[type=checkbox] + label:focus:before {
    outline: none;
    border-color: #27C7FC; }
  .input-like:focus, .live-editor table input[type=checkbox] + label:focus:before {
    background-color: #ffffff; }
  .input-like:disabled, .live-editor table input[type=checkbox] + label:disabled:before {
    background-color: #999;
    cursor: default; }

.live-editor .custom-cards {
  margin-top: 1em; }

.live-editor .custom-cards-bottom {
  float: left;
  width: 100%;
  text-align: center;
  margin-top: 0.5em; }

.live-editor .canvases-scale {
  margin-top: 0.375em;
  float: left; }
  .live-editor .canvases-scale .canvases-scale-percent {
    margin-left: 0.5em;
    color: #007AA2;
    text-align: left;
    width: 3.5em;
    display: inline-block; }

.live-editor .add-row-button {
  font-weight: bold;
  cursor: pointer;
  float: right;
  margin-right: 0.625em; }

.live-editor .reset-to-defaults {
  background-color: #FFC60E;
  color: #000000; }
  .live-editor .reset-to-defaults:before {
    display: inline-block;
    content: '↻';
    margin-right: 0.375em; }
  .live-editor .reset-to-defaults:hover {
    background-color: #FFD240; }
    .live-editor .reset-to-defaults:hover:before {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg); }

.live-editor table {
  width: 100%; }
  .live-editor table input, .live-editor table select, .live-editor table textarea {
    font-size: 1em;
    width: 100%;
    padding: 0.25em; }
    .live-editor table input[type=number], .live-editor table select[type=number], .live-editor table textarea[type=number] {
      width: 4em;
      text-align: right; }
    .live-editor table input[type=color], .live-editor table select[type=color], .live-editor table textarea[type=color] {
      padding: 0;
      background: transparent;
      border: 0;
      cursor: pointer; }
      html[data-browser*="Chrome"] .live-editor table input[type=color], html[data-browser*="Chrome"] .live-editor table select[type=color], html[data-browser*="Chrome"] .live-editor table textarea[type=color] {
        height: 2em; }
  .live-editor table input[type=checkbox] {
    display: none; }
    .live-editor table input[type=checkbox] + label:before {
      font-weight: bold;
      content: '\\00a0';
      cursor: pointer;
      min-width: 1.5em;
      padding: 0.25em 0.125em;
      display: inline-block; }
    .live-editor table input[type=checkbox]:checked + label:before {
      content: '\\2713'; }
  .live-editor table .column-logoScale input, .live-editor table .column-copyright input {
    width: 3.75em; }
  .live-editor table input[type=color] {
    width: 5em; }
  .live-editor table textarea {
    height: 3.5em;
    resize: none; }
  .live-editor table .column-copyright input {
    width: 4.5em; }
  .live-editor table .column-type select, .live-editor table .column-type input, .live-editor table .column-subtype select, .live-editor table .column-subtype input {
    width: 6em; }
  .live-editor table .column-legal textarea {
    width: 20em; }
  .live-editor table .column-set input, .live-editor table .column-name input, .live-editor table .column-imageURL input, .live-editor table .column-logoURL input {
    width: 8.75em; }
  .live-editor table .column-cost input, .live-editor table .column-victoryPoints input {
    width: 2.5em; }
  .live-editor table .column-text {
    width: 30em; }
    .live-editor table .column-text textarea {
      width: calc(100% - 1em); }
  .live-editor table .column-delete > button {
    font-weight: bold;
    cursor: pointer; }
  .live-editor table tr td {
    text-align: center;
    padding: 0;
    opacity: 0; }
    .live-editor table tr td > div {
      max-height: 0;
      margin: 0; }
    .live-editor table tr td.error input {
      border-color: #f82104;
      background-color: #febab1; }
  .live-editor table tr.shown > td {
    opacity: 1; }
    .live-editor table tr.shown > td > div {
      margin: 0.5em;
      max-height: 4.5em;
      overflow: hidden;
      box-sizing: border-box; }

.live-editor .too-many-cards {
  clear: both;
  text-align: center;
  padding-top: 1em;
  max-height: 3em; }
  .live-editor .too-many-cards .warning-block {
    display: inline-block;
    text-align: center;
    background: #A17B00;
    color: #ffffff;
    padding: 0.5em;
    border-radius: 0.75em; }
    .live-editor .too-many-cards .warning-block a {
      color: #FFDC6A; }
      .live-editor .too-many-cards .warning-block a:hover, .live-editor .too-many-cards .warning-block a:focus {
        color: #27C7FC; }
  .live-editor .too-many-cards.collapsed {
    max-height: 0em;
    opacity: 0; }

.live-editor .canvases {
  text-align: center; }
  .live-editor .canvases canvas {
    margin: 0.75em;
    display: inline-block;
    opacity: 0;
    max-height: 0;
    max-width: 0;
    overflow: hidden; }
    .live-editor .canvases canvas.shown {
      opacity: 1;
      max-height: 1200px;
      max-width: 900px; }
`, "",{"version":3,"sources":["webpack://./src/gui/tabs/live-editor/live-editor.scss","webpack://./src/styles/utils.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACkChB;EACI,sBC5BY;ED6BZ,cCnCW;EDoCX,sBAAsB;EACtB,yBCtCW,EAAA;EDkCf;IAOQ,aAAa;IACb,qBC3BkB,EAAA;EDmB1B;IAYQ,yBC9CO,EAAA;EDkCf;IAgBQ,sBC3CQ;ID4CR,eAAe,EAAA;;ADhDvB;EAEQ,eAAe,EAAA;;AAFvB;EAMQ,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,iBAAiB,EAAA;;AATzB;EAaQ,mBAAmB;EACnB,WAAW,EAAA;EAdnB;IAiBY,kBAAkB;IAClB,cETU;IFUV,gBAAgB;IAChB,YAAY;IACZ,qBAAqB,EAAA;;AArBjC;EA0BQ,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,qBAAqB,EAAA;;AA7B7B;EAiCQ,yBEjBW;EFkBX,cEpCO,EAAA;EFEf;IAqCY,qBAAqB;IACrB,YAAS;IACT,qBAAqB,EAAA;EAvCjC;IA2CY,yBExBa,EAAA;IFnBzB;MC2BQ,iCAAoB;MAApB,8BAAoB;MAApB,6BAAoB;MAApB,4BAAoB;MAApB,yBAAoB,EAAA;;AD3B5B;EAmDQ,WAAW,EAAA;EAnDnB;IAsDY,cAAc;IACd,WAAW;IACX,eAAe,EAAA;IAxD3B;MA2DgB,UAAU;MACV,iBAAiB,EAAA;IA5DjC;MAgEgB,UAAU;MACV,uBAAuB;MACvB,SAAS;MACT,eAAe,EAAA;MChE3B;QDmEgB,WAAW,EAAA;EAtE/B;IA4EY,aAAa,EAAA;IA5EzB;MA+EgB,iBAAiB;MACjB,gBAAgB;MAChB,eAAe;MACf,gBAAgB;MAChB,uBAAuB;MACvB,qBAAqB,EAAA;IApFrC;MAyFgB,gBAAgB,EAAA;EAzFhC;IA+FgB,aAAa,EAAA;EA/F7B;IAoGY,UAAU,EAAA;EApGtB;IAwGY,aAAa;IACb,YAAY,EAAA;EAzGxB;IA8GgB,YAAY,EAAA;EA9G5B;IAoHgB,UAAU,EAAA;EApH1B;IA0HgB,WAAW,EAAA;EA1H3B;IAgIgB,aAAa,EAAA;EAhI7B;IAsIgB,YAAY,EAAA;EAtI5B;IA2IY,WAAW,EAAA;IA3IvB;MA8IgB,uBAAuB,EAAA;EA9IvC;IAmJY,iBAAiB;IACjB,eAAe,EAAA;EApJ3B;IAyJgB,kBAAkB;IAClB,UAAU;IACV,UAAU,EAAA;IA3J1B;MA8JoB,aAAa;MACb,SAAS,EAAA;IA/J7B;MAmKoB,qBE7JL;MF8JK,yBAAsC,EAAA;EApK1D;IA0KgB,UAAU,EAAA;IA1K1B;MA6KoB,aAAa;MACb,iBAAiB;MACjB,gBAAgB;MAChB,sBAAsB,EAAA;;AAhL1C;EAuLQ,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,eAAe,EAAA;EA1LvB;IA6LY,qBAAqB;IACrB,kBAAkB;IAClB,mBE7Ke;IF8Kf,cEnMG;IFoMH,cAAc;IACd,qBAAqB,EAAA;IAlMjC;MAqMgB,cEjLY,EAAA;MFpB5B;QAwMoB,cE5LM,EAAA;EFZ1B;IA8MY,eAAe;IACf,UAAU,EAAA;;AA/MtB;EAoNQ,kBAAkB,EAAA;EApN1B;IAuNY,cAAc;IACd,qBAAqB;IACrB,UAAU;IACV,aAAa;IACb,YAAY;IACZ,gBAAgB,EAAA;IA5N5B;MA+NgB,UAAU;MACV,kBAAkB;MAClB,gBAAgB,EAAA","sourcesContent":["@import \"src/styles/colors.scss\";\n@import \"src/styles/utils.scss\";\n\n.live-editor {\n    & .custom-cards {\n        margin-top: 1em;\n    }\n\n    & .custom-cards-bottom {\n        float: left;\n        width: 100%;\n        text-align: center;\n        margin-top: 0.5em;\n    }\n\n    & .canvases-scale {\n        margin-top: 0.375em;\n        float: left;\n\n        & .canvases-scale-percent {\n            margin-left: 0.5em;\n            color: $primary-dark;\n            text-align: left;\n            width: 3.5em;\n            display: inline-block;\n        }\n    }\n\n    & .add-row-button {\n        font-weight: bold;\n        cursor: pointer;\n        float: right;\n        margin-right: 0.625em;\n    }\n\n    & .reset-to-defaults {\n        background-color: $secondary;\n        color: $black;\n\n        &:before {\n            display: inline-block;\n            content: '↻';\n            margin-right: 0.375em;\n        }\n\n        &:hover {\n            background-color: $secondary-light;\n            &:before {\n                @include vendor-prefix(transform, rotate(360deg));\n            }\n        }\n    }\n\n    & table {\n        width: 100%;\n\n        & input, & select, & textarea {\n            font-size: 1em;\n            width: 100%;\n            padding: 0.25em;\n\n            &[type=number] {\n                width: 4em;\n                text-align: right;\n            }\n\n            &[type=color] {\n                padding: 0;\n                background: transparent;\n                border: 0;\n                cursor: pointer;\n\n                @include browser('Chrome') {\n                    height: 2em;\n                }\n            }\n        }\n\n        & input[type=checkbox] {\n            display: none;\n\n            & + label:before {\n                font-weight: bold;\n                content: '\\00a0'; // non breaking space to preserve height\n                cursor: pointer;\n                min-width: 1.5em;\n                padding: 0.25em 0.125em;\n                display: inline-block;\n                @extend .input-like;\n            }\n\n            &:checked + label:before {\n                content: '\\2713'; // checkmark\n            }\n        }\n\n        & .column-logoScale, & .column-copyright {\n            & input {\n                width: 3.75em;\n            }\n        }\n\n        & input[type=color] {\n            width: 5em;\n        }\n\n        & textarea {\n            height: 3.5em;\n            resize: none;\n        }\n\n        & .column-copyright {\n            & input {\n                width: 4.5em;\n            }\n        }\n\n        & .column-type, & .column-subtype {\n            & select, & input {\n                width: 6em;\n            }\n        }\n\n        & .column-legal {\n            & textarea {\n                width: 20em;\n            }\n        }\n\n        & .column-set, & .column-name, & .column-imageURL, & .column-logoURL {\n            & input {\n                width: 8.75em;\n            }\n        }\n\n        & .column-cost, & .column-victoryPoints {\n            & input {\n                width: 2.5em;\n            }\n        }\n\n        & .column-text {\n            width: 30em;\n\n            & textarea {\n                width: calc(100% - 1em);\n            }\n        }\n\n        & .column-delete > button {\n            font-weight: bold;\n            cursor: pointer;\n        }\n\n        & tr {\n            & td {\n                text-align: center;\n                padding: 0;\n                opacity: 0;\n\n                & > div { //we assume it's hidden by default\n                    max-height: 0;\n                    margin: 0;\n                }\n\n                &.error input {\n                    border-color: $error;\n                    background-color: lighten($error, 35%);\n                }\n            }\n\n            // this div is a wrapper so we can animate max-height changes\n            &.shown > td {\n                opacity: 1;\n\n                & > div {\n                    margin: 0.5em;\n                    max-height: 4.5em;\n                    overflow: hidden;\n                    box-sizing: border-box;\n                }\n            }\n        }\n    }\n\n    & .too-many-cards {\n        clear: both;\n        text-align: center;\n        padding-top: 1em;\n        max-height: 3em;\n\n        & .warning-block {\n            display: inline-block;\n            text-align: center;\n            background: $secondary-darkest;\n            color: $white;\n            padding: 0.5em;\n            border-radius: 0.75em;\n\n            & a {\n                color: $secondary-lightest;\n\n                &:hover, &:focus {\n                    color: $primary-lightest;\n                }\n            }\n        }\n\n        &.collapsed {\n            max-height: 0em;\n            opacity: 0;\n        }\n    }\n\n    & .canvases {\n        text-align: center;\n\n        & canvas {\n            margin: 0.75em;\n            display: inline-block;\n            opacity: 0;\n            max-height: 0;\n            max-width: 0;\n            overflow: hidden;\n\n            &.shown {\n                opacity: 1;\n                max-height: 1200px;\n                max-width: 900px;\n            }\n        }\n    }\n}","@import \"./colors.scss\";\n\n$transition-time: 0.35s;\n\n@mixin browser($browsers: Mozilla) {\n  @each $browser in $browsers {\n    html[data-browser*=\"#{$browser}\"] & {\n      @content;\n    }\n  }\n}\n\n@mixin notBrowser($browsers: Mozilla) {\n  @each $browser in $browsers {\n    html:not([data-browser*=\"#{$browser}\"]) & {\n      @content;\n    }\n  }\n}\n\n@mixin transition($args...) {\n    -webkit-transition: $args;\n    -moz-transition: $args;\n    -ms-transition: $args;\n    -o-transition: $args;\n    transition: $args;\n}\n\n@mixin vendor-prefix($name, $value) {\n    @each $vendor in ('-webkit-', '-moz-', '-ms-', '-o-', '') {\n        #{$vendor}#{$name}: #{$value};\n    }\n}\n\n.input-like {\n    border: 1px solid $dark-gray;\n    color: $black;\n    border-radius: 0.375em;\n    background-color: $white;\n\n    &:hover, &:focus {\n        outline: none;\n        border-color: $primary-lightest;\n    }\n\n    &:focus {\n        background-color: $white;\n    }\n\n    &:disabled {\n        background-color: $dark-gray;\n        cursor: default;\n    }\n}\n","$white: #ffffff;\n$black: #000000;\n$light-black: #555555;\n\n$off-white: #eaeaea;\n$light-gray: #ddd;\n$gray: #bbb;\n$dark-gray: #999;\n\n$error: #f82104;//#e02605;\n\n$primary: #00adea;\n$primary-dark: #007AA2;\n$primary-darkest: #005F7F;\n$primary-light: #06C1FF;\n$primary-lightest: #27C7FC;\n\n$primary-bar: #00adea;\n\n$secondary: #FFC60E;\n$secondary-dark: #CD9D00;\n$secondary-darkest: #A17B00;\n$secondary-light: #FFD240;\n$secondary-lightest: #FFDC6A;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabular/tabular.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabular/tabular.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tabular .tabluar-tabs li {
  cursor: pointer; }

.tabular .tabular-contents {
  position: relative; }
  .tabular .tabular-contents .tab-contents {
    display: block;
    overflow: hidden;
    opacity: 0;
    max-height: 999999px; }
    .tabular .tabular-contents .tab-contents.current {
      opacity: 1; }
    .tabular .tabular-contents .tab-contents.hidden {
      display: none; }
`, "",{"version":3,"sources":["webpack://./src/gui/tabular/tabular.scss"],"names":[],"mappings":"AAAA;EAEQ,eAAe,EAAA;;AAFvB;EAMQ,kBAAkB,EAAA;EAN1B;IASY,cAAc;IACd,gBAAgB;IAChB,UAAU;IACV,oBAAoB,EAAA;IAZhC;MAegB,UAAU,EAAA;IAf1B;MAmBgB,aAAa,EAAA","sourcesContent":[".tabular {\n    & .tabluar-tabs li {\n        cursor: pointer;\n    }\n\n    & .tabular-contents {\n        position: relative;\n\n        & .tab-contents {\n            display: block;\n            overflow: hidden;\n            opacity: 0;\n            max-height: 999999px;\n\n            &.current {\n                opacity: 1;\n            }\n\n            &.hidden {\n                display: none;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/ui/ui.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/ui/ui.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../resources/images/background.jpg */ "./resources/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../resources/images/bar-background.jpg */ "./resources/images/bar-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../resources/images/bar-background-2.jpg */ "./resources/images/bar-background-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.input-like, .custom-deck-builder input, .custom-deck-builder textarea, .custom-deck-builder select, .custom-deck-builder option, .custom-deck-builder button {
  border: 1px solid #999;
  color: #000000;
  border-radius: 0.375em;
  background-color: #ffffff; }
  .input-like:hover, .custom-deck-builder input:hover, .custom-deck-builder textarea:hover, .custom-deck-builder select:hover, .custom-deck-builder option:hover, .custom-deck-builder button:hover, .input-like:focus, .custom-deck-builder input:focus, .custom-deck-builder textarea:focus, .custom-deck-builder select:focus, .custom-deck-builder option:focus, .custom-deck-builder button:focus {
    outline: none;
    border-color: #27C7FC; }
  .input-like:focus, .custom-deck-builder input:focus, .custom-deck-builder textarea:focus, .custom-deck-builder select:focus, .custom-deck-builder option:focus, .custom-deck-builder button:focus {
    background-color: #ffffff; }
  .input-like:disabled, .custom-deck-builder input:disabled, .custom-deck-builder textarea:disabled, .custom-deck-builder select:disabled, .custom-deck-builder option:disabled, .custom-deck-builder button:disabled {
    background-color: #999;
    cursor: default; }

input[type=range] {
  -webkit-appearance: none; }
  input[type=range]:focus {
    outline: none; }
  input[type=range]::-webkit-slider-runnable-track {
    height: 8px;
    cursor: pointer;
    transition: all .2s ease;
    box-shadow: 0 0 0 transparent, 0 0 0 rgba(0, 0, 0, 0);
    background: #bbb;
    border: 0 solid transparent;
    border-radius: 0; }
    input[type=range]::-webkit-slider-runnable-track:disabled {
      cursor: default;
      background: #ddd;
      opacity: 0.5; }
  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0 0 0 transparent, 0 0 0 rgba(0, 0, 0, 0);
    border: 0 solid transparent;
    height: 22px;
    width: 7px;
    border-radius: 0;
    background: #007AA2;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px; }
    input[type=range]::-webkit-slider-thumb:disabled {
      cursor: default;
      background: #27C7FC;
      opacity: 0.5; }
    input[type=range]::-webkit-slider-thumb:hover {
      background: #06C1FF; }
    input[type=range]::-webkit-slider-thumb:disabled {
      cursor: default;
      background: #27C7FC;
      opacity: 0.5; }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #a2a2a2; }
  input[type=range]::-moz-range-track {
    height: 8px;
    cursor: pointer;
    transition: all .2s ease;
    box-shadow: 0 0 0 transparent, 0 0 0 rgba(0, 0, 0, 0);
    background: #bbb;
    border: 0 solid transparent;
    border-radius: 0; }
    input[type=range]::-moz-range-track:disabled {
      cursor: default;
      background: #ddd;
      opacity: 0.5; }
  input[type=range]::-moz-range-thumb {
    box-shadow: 0 0 0 transparent, 0 0 0 rgba(0, 0, 0, 0);
    border: 0 solid transparent;
    height: 22px;
    width: 7px;
    border-radius: 0;
    background: #007AA2;
    cursor: pointer; }
    input[type=range]::-moz-range-thumb:disabled {
      cursor: default;
      background: #27C7FC;
      opacity: 0.5; }
    input[type=range]::-moz-range-thumb:hover {
      background: #06C1FF; }
    input[type=range]::-moz-range-thumb:disabled {
      cursor: default;
      background: #27C7FC;
      opacity: 0.5; }
  input[type=range]::-ms-track {
    height: 8px;
    cursor: pointer;
    transition: all .2s ease;
    background: transparent;
    border-color: transparent;
    border-width: 7px 0;
    color: transparent; }
    input[type=range]::-ms-track:disabled {
      cursor: default;
      background: #ddd;
      opacity: 0.5; }
  input[type=range]::-ms-fill-lower {
    box-shadow: 0 0 0 transparent, 0 0 0 rgba(0, 0, 0, 0);
    background: #a2a2a2;
    border: 0 solid transparent;
    border-radius: 0; }
  input[type=range]::-ms-fill-upper {
    box-shadow: 0 0 0 transparent, 0 0 0 rgba(0, 0, 0, 0);
    background: #bbb;
    border: 0 solid transparent;
    border-radius: 0; }
    input[type=range]::-ms-fill-upper:disabled {
      background: #ddd; }
  input[type=range]::-ms-thumb {
    box-shadow: 0 0 0 transparent, 0 0 0 rgba(0, 0, 0, 0);
    border: 0 solid transparent;
    height: 22px;
    width: 7px;
    border-radius: 0;
    background: #007AA2;
    cursor: pointer; }
    input[type=range]::-ms-thumb:disabled {
      cursor: default;
      background: #27C7FC;
      opacity: 0.5; }
    input[type=range]::-ms-thumb:hover {
      background: #06C1FF; }
    input[type=range]::-ms-thumb:disabled {
      cursor: default;
      background: #27C7FC;
      opacity: 0.5; }
  input[type=range]:focus::-ms-fill-lower {
    background: #bbb; }
    input[type=range]:focus::-ms-fill-lower:disabled {
      background: #ddd; }
  input[type=range]:focus::-ms-fill-upper {
    background: #a2a2a2; }
  input[type=range]:disabled {
    cursor: default;
    background: #ddd;
    opacity: 0.5; }

html {
  overflow-y: scroll; }

body {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; }

.card-name, .custom-deck-builder h1, .custom-deck-builder h2, .custom-deck-builder h3, .custom-deck-builder h4, .custom-deck-builder h5, .custom-deck-builder h6, .custom-deck-builder .tabular nav ul li {
  font-size: 2.5em;
  font-family: CompactaBT, Impact, Charcoal, sans-serif;
  letter-spacing: -0.025em;
  margin: 0;
  color: #FFC60E;
  text-shadow: 2px 2px #000000;
  text-transform: uppercase;
  transform: skewX(-15deg) scaleY(0.75);
  -webkit-transform: skewX(-15deg) scaleY(0.75);
  -ms-transform: skewX(-15deg) scaleY(0.75);
  -moz-transform: skewX(-15deg) scaleY(0.75);
  -o-transform: skewX(-15deg) scaleY(0.75); }

.expandable {
  height: 0;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  pointer-events: none; }
  .expandable.measuring {
    -webkit-transition: none;
    -moz-transition: none;
    -ms-transition: none;
    -o-transition: none;
    transition: none;
    height: auto;
    position: absolute; }
  .expandable.expanded {
    opacity: 1;
    visibility: visible;
    height: auto;
    pointer-events: all; }

.custom-deck-builder {
  color: #ffffff;
  width: calc(1280px - 2em);
  margin: 2em auto 1em auto;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 1em;
  letter-spacing: -0.025em; }
  .custom-deck-builder a, .custom-deck-builder a:visited {
    color: #00adea;
    text-decoration: underline; }
    .custom-deck-builder a:hover, .custom-deck-builder a:focus, .custom-deck-builder a:visited:hover, .custom-deck-builder a:visited:focus {
      color: #CD9D00; }
  .custom-deck-builder .page-title h1 > span {
    font-size: 5rem;
    text-shadow: 5px 5px #000000;
    display: block;
    text-align: center; }
  .custom-deck-builder .page-title h1 .subtitle {
    color: #FFDC6A;
    font-size: 3.75rem; }
  .custom-deck-builder h2, .custom-deck-builder h3, .custom-deck-builder h4, .custom-deck-builder h5, .custom-deck-builder h6 {
    color: #06C1FF;
    margin-left: 0.075em; }
  .custom-deck-builder input, .custom-deck-builder textarea, .custom-deck-builder select, .custom-deck-builder option, .custom-deck-builder button {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 1em;
    letter-spacing: -0.025em; }
  .custom-deck-builder button {
    background-color: #007AA2;
    border: none;
    box-shadow: 3px 3px #000000;
    color: #ffffff;
    padding: 0.375em 0.5em;
    cursor: pointer;
    margin-bottom: 3px; }
    .custom-deck-builder button:hover, .custom-deck-builder button:focus {
      background-color: #06C1FF; }
    .custom-deck-builder button:disabled {
      background-color: #999;
      cursor: default; }
  .custom-deck-builder abbr[title] {
    text-decoration: none;
    cursor: help; }
  .custom-deck-builder .tabular nav {
    display: block;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: #ffffff;
    border-radius: 1em 1em 0 0;
    border-bottom: 0.375rem solid #00adea; }
    .custom-deck-builder .tabular nav ul {
      padding: 1em 0;
      margin: 0;
      list-style-type: none; }
      .custom-deck-builder .tabular nav ul li {
        cursor: pointer;
        font-size: 3.5em;
        text-shadow: 4px 4px #000000;
        display: inline-block;
        margin: 0 0.5em; }
        .custom-deck-builder .tabular nav ul li:not(.current) {
          color: #A17B00; }
        .custom-deck-builder .tabular nav ul li:hover, .custom-deck-builder .tabular nav ul li:focus {
          color: #FFDC6A; }
  .custom-deck-builder .tabular .tabular-contents {
    background: #ffffff;
    color: #000000;
    padding: 1em; }
  .custom-deck-builder dl dt {
    font-weight: bold;
    color: #007AA2; }
    .custom-deck-builder dl dt + dd {
      margin-left: 1em;
      color: #005F7F; }
      .custom-deck-builder dl dt + dd + dt {
        margin-top: 1em; }
  .custom-deck-builder table {
    border: none;
    border-collapse: collapse;
    border-spacing: 0; }
    .custom-deck-builder table tr:nth-child(even) > td {
      background-color: #ddd; }
    .custom-deck-builder table td {
      padding: 0.5em; }
  .custom-deck-builder tr:first-child > th {
    background-color: #FFDC6A;
    border-bottom: 0.25em solid #FFC60E;
    padding: 0.5em 0.5em 0.25em 0.5em; }
    .custom-deck-builder tr:first-child > th:first-child {
      border-radius: 0.625em 0 0 0; }
    .custom-deck-builder tr:first-child > th:last-child {
      border-radius: 0 0.625em 0 0; }
  .custom-deck-builder tr:last-child > td:first-child {
    border-radius: 0 0 0 0.625em; }
  .custom-deck-builder tr:last-child > td:last-child {
    border-radius: 0 0 0.625em 0; }
  .custom-deck-builder table, .custom-deck-builder tr, .custom-deck-builder th, .custom-deck-builder td {
    border: none; }
  .custom-deck-builder footer {
    text-align: center;
    font-size: 1.25em;
    padding: 1em 0;
    border-top: 0.375rem solid #00adea;
    border-radius: 0 0 1em 1em;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; }
    .custom-deck-builder footer a, .custom-deck-builder footer a:visited {
      color: #FFC60E; }
`, "",{"version":3,"sources":["webpack://./src/styles/utils.scss","webpack://./src/styles/colors.scss","webpack://./src/styles/range.scss","webpack://./src/gui/ui/ui.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"./colors.scss\";\n\n$transition-time: 0.35s;\n\n@mixin browser($browsers: Mozilla) {\n  @each $browser in $browsers {\n    html[data-browser*=\"#{$browser}\"] & {\n      @content;\n    }\n  }\n}\n\n@mixin notBrowser($browsers: Mozilla) {\n  @each $browser in $browsers {\n    html:not([data-browser*=\"#{$browser}\"]) & {\n      @content;\n    }\n  }\n}\n\n@mixin transition($args...) {\n    -webkit-transition: $args;\n    -moz-transition: $args;\n    -ms-transition: $args;\n    -o-transition: $args;\n    transition: $args;\n}\n\n@mixin vendor-prefix($name, $value) {\n    @each $vendor in ('-webkit-', '-moz-', '-ms-', '-o-', '') {\n        #{$vendor}#{$name}: #{$value};\n    }\n}\n\n.input-like {\n    border: 1px solid $dark-gray;\n    color: $black;\n    border-radius: 0.375em;\n    background-color: $white;\n\n    &:hover, &:focus {\n        outline: none;\n        border-color: $primary-lightest;\n    }\n\n    &:focus {\n        background-color: $white;\n    }\n\n    &:disabled {\n        background-color: $dark-gray;\n        cursor: default;\n    }\n}\n","$white: #ffffff;\n$black: #000000;\n$light-black: #555555;\n\n$off-white: #eaeaea;\n$light-gray: #ddd;\n$gray: #bbb;\n$dark-gray: #999;\n\n$error: #f82104;//#e02605;\n\n$primary: #00adea;\n$primary-dark: #007AA2;\n$primary-darkest: #005F7F;\n$primary-light: #06C1FF;\n$primary-lightest: #27C7FC;\n\n$primary-bar: #00adea;\n\n$secondary: #FFC60E;\n$secondary-dark: #CD9D00;\n$secondary-darkest: #A17B00;\n$secondary-light: #FFD240;\n$secondary-lightest: #FFDC6A;\n","// Styling Cross-Browser Compatible Range Inputs with Sass\n// Github: https://github.com/darlanrod/input-range-sass\n// Author: Darlan Rod https://github.com/darlanrod\n// Adapted by Jacob Fischer\n// Version 1.0.1\n// MIT License\n\n@import \"./colors.scss\";\n\n$track-color: $gray;\n$thumb-color: $primary-dark;\n$hover-thumb-color: $primary-light;\n\n$disabled-track-color: $light-gray;\n$disabled-thumb-color: $primary-lightest;\n\n$thumb-radius: 0;\n$thumb-height: 22px;\n$thumb-width: 7px;\n$thumb-shadow-size: 0;\n$thumb-shadow-blur: 0;\n$thumb-shadow-color: transparent;\n$thumb-border-width: 0;\n$thumb-border-color: transparent;\n\n$track-height: 8px;\n$track-shadow-size: 0;\n$track-shadow-blur: 0;\n$track-shadow-color: transparent;\n$track-border-width: 0;\n$track-border-color: transparent;\n\n$track-radius: 0;\n$contrast: 10%;\n\n@mixin shadow($shadow-size, $shadow-blur, $shadow-color) {\n    box-shadow: $shadow-size $shadow-size $shadow-blur $shadow-color, 0 0 $shadow-size darken($shadow-color, 5%);\n}\n\n@mixin track() {\n    height: $track-height;\n    cursor: pointer;\n    transition: all .2s ease;\n\n    &:disabled {\n        cursor: default;\n        background: $disabled-track-color;\n        opacity: 0.5;\n    }\n}\n\n@mixin thumb() {\n    @include shadow($thumb-shadow-size, $thumb-shadow-blur, $thumb-shadow-color);\n    border: $thumb-border-width solid $thumb-border-color;\n    height: $thumb-height;\n    width: $thumb-width;\n    border-radius: $thumb-radius;\n    background: $thumb-color;\n    cursor: pointer;\n\n    &:disabled {\n        cursor: default;\n        background: $disabled-thumb-color;\n        opacity: 0.5;\n    }\n\n    &:hover {\n        background: $hover-thumb-color;\n    }\n}\n\ninput[type=range] {\n    -webkit-appearance: none;\n    //margin: $thumb-height / 2 0;\n\n    &:focus {\n        outline: none;\n    }\n\n    &::-webkit-slider-runnable-track {\n        @include track();\n        @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);\n        background: $track-color;\n        border: $track-border-width solid $track-border-color;\n        border-radius: $track-radius;\n    }\n\n    &::-webkit-slider-thumb {\n        @include thumb();\n        -webkit-appearance: none;\n        margin-top: ((-$track-border-width * 2 + $track-height) / 2) - ($thumb-height / 2);\n        &:disabled {\n            cursor: default;\n            background: $disabled-thumb-color;\n            opacity: 0.5;\n        }\n    }\n\n    &:focus::-webkit-slider-runnable-track {\n        background: darken($track-color, $contrast);\n    }\n\n    &::-moz-range-track {\n        @include track();\n        @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);\n        background: $track-color;\n        border: $track-border-width solid $track-border-color;\n        border-radius: $track-radius;\n    }\n\n    &::-moz-range-thumb {\n        @include thumb();\n        &:disabled {\n            cursor: default;\n            background: $disabled-thumb-color;\n            opacity: 0.5;\n        }\n    }\n\n    &::-ms-track {\n        @include track();\n        background: transparent;\n        border-color: transparent;\n        border-width: $thumb-width 0;\n        color: transparent;\n    }\n\n    &::-ms-fill-lower {\n        @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);\n        background: darken($track-color, $contrast);\n        border: $track-border-width solid $track-border-color;\n        border-radius: $track-radius * 2;\n    }\n\n    &::-ms-fill-upper {\n        @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);\n        background: $track-color;\n        border: $track-border-width solid $track-border-color;\n        border-radius: $track-radius * 2;\n\n        &:disabled {\n            background: $disabled-track-color;\n        }\n    }\n\n    &::-ms-thumb {\n        @include thumb();\n        &:disabled {\n            cursor: default;\n            background: $disabled-thumb-color;\n            opacity: 0.5;\n        }\n    }\n\n    &:focus::-ms-fill-lower {\n        background: $track-color;\n\n        &:disabled {\n            background: $disabled-track-color;\n        }\n    }\n\n    &:focus::-ms-fill-upper {\n        background: darken($track-color, $contrast);\n    }\n\n    &:disabled {\n        cursor: default;\n        background: $disabled-track-color;\n        opacity: 0.5;\n    }\n}\n","@import \"src/styles/colors.scss\";\n@import \"src/styles/utils.scss\";\n@import \"src/styles/range.scss\";\n\n@mixin font-defaults() {\n    font-family: Verdana, Geneva, sans-serif; // TradeGothic\n    font-size: 1em;\n    letter-spacing: -0.025em;\n}\n\nhtml {\n    overflow-y: scroll;\n}\n\nbody {\n    background: url(../../../resources/images/background.jpg) no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\n.card-name {\n    font-size: 2.5em;\n    font-family: CompactaBT, Impact, Charcoal, sans-serif;\n    letter-spacing: -0.025em;\n    margin: 0;\n    color: $secondary;\n    text-shadow: 2px 2px #000000;\n    text-transform: uppercase;\n    transform: skewX(-15deg) scaleY(0.75);\n    -webkit-transform: skewX(-15deg) scaleY(0.75);\n    -ms-transform: skewX(-15deg) scaleY(0.75);\n    -moz-transform: skewX(-15deg) scaleY(0.75);\n    -o-transform: skewX(-15deg) scaleY(0.75);\n}\n\n.expandable {\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n    opacity: 0;\n    pointer-events: none;\n\n    &.measuring {\n        @include transition(none);\n        height: auto;\n        position: absolute;\n    }\n\n    &.expanded {\n        opacity: 1;\n        visibility: visible;\n        height: auto;\n        pointer-events: all;\n    }\n}\n\n.custom-deck-builder {\n    color: $white;\n    width: calc(1280px - 2em);\n    margin: 2em auto 1em auto;\n    @include font-defaults();\n\n    a, a:visited {\n        color: $primary;\n        text-decoration: underline;\n\n        &:hover, &:focus {\n            color: $secondary-dark;\n        }\n    }\n\n    & h1, & h2, & h3, & h4, & h5, & h6 {\n        @extend .card-name\n    }\n\n    & .page-title h1 {\n        & > span {\n            font-size: 5rem;\n            text-shadow: 5px 5px #000000;\n            display: block;\n            text-align: center;\n        }\n\n        & .subtitle {\n            color: $secondary-lightest;\n            font-size: 3.75rem;\n        }\n    }\n\n    & h2, & h3, & h4, & h5, & h6 {\n        color: $primary-light;\n        margin-left: 0.075em;\n    }\n\n    & input, & textarea, & select, & option, & button {\n        @include font-defaults();\n        @extend .input-like\n    }\n\n    & button {\n        background-color: $primary-dark;\n        border: none;\n        box-shadow: 3px 3px $black;\n        color: $white;\n        padding: 0.375em 0.5em;\n        cursor: pointer;\n        margin-bottom: 3px;\n\n        &:hover, &:focus {\n            background-color: $primary-light;\n        }\n\n        &:disabled {\n            background-color: $dark-gray;\n            cursor: default;\n        }\n    }\n\n    & abbr[title] {\n        text-decoration: none;\n        cursor: help;\n    }\n\n    // tabs\n\n    & .tabular {\n        & nav {\n            display: block;\n            background: url(../../../resources/images/bar-background.jpg) no-repeat center center;\n            -webkit-background-size: cover;\n            -moz-background-size: cover;\n            -o-background-size: cover;\n            background-size: cover;\n            color: $white;\n            border-radius: 1em 1em 0 0;\n            border-bottom: 0.375rem solid $primary;\n\n            & ul {\n                padding: 1em 0;\n                margin: 0;\n                list-style-type: none;\n\n                & li {\n                    cursor: pointer;\n                    font-size: 3.5em;\n                    text-shadow: 4px 4px #000000;\n                    display: inline-block;\n                    margin: 0 0.5em;\n                    @extend .card-name;\n\n                    &:not(.current) {\n                        color: $secondary-darkest;\n                    }\n\n                    &:hover, &:focus {\n                        color: $secondary-lightest;\n                    }\n                }\n            }\n        }\n\n        & .tabular-contents {\n            background: $white;\n            color: $black;\n            padding: 1em;\n        }\n    }\n\n    & dl {\n        & dt {\n            font-weight: bold;\n            color: $primary-dark;\n\n            & + dd {\n                margin-left: 1em;\n                color: $primary-darkest;\n\n                & + dt {\n                    margin-top: 1em;\n                }\n            }\n        }\n    }\n\n    & table {\n        border: none;\n        border-collapse: collapse;\n        border-spacing: 0;\n\n        & tr:nth-child(even) > td {\n            background-color: $light-gray;\n        }\n\n        & td {\n            padding: 0.5em;\n        }\n    }\n\n    & tr:first-child > th {\n        background-color: $secondary-lightest;\n        border-bottom: 0.25em solid $secondary;\n        padding: 0.5em 0.5em 0.25em 0.5em;\n\n        &:first-child {\n            border-radius: 0.625em 0 0 0;\n        }\n\n        &:last-child {\n            border-radius: 0 0.625em 0 0;\n        }\n    }\n\n    & tr:last-child > td {\n        &:first-child {\n            border-radius: 0 0 0 0.625em;\n        }\n\n        &:last-child {\n            border-radius: 0 0 0.625em 0;\n        }\n    }\n\n    & table, & tr, & th, & td {\n        border: none;\n    }\n\n\n    // footer\n\n    & footer {\n        text-align: center;\n        font-size: 1.25em;\n        padding: 1em 0;\n        border-top: 0.375rem solid $primary;\n        border-radius: 0 0 1em 1em;\n\n        background: url(../../../resources/images/bar-background-2.jpg) no-repeat center center;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-size: cover;\n\n        & a, & a:visited {\n            color: $secondary;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/fonts.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/fonts.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../resources/fonts/CompactaBT-Roman.otf */ "./resources/fonts/CompactaBT-Roman.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../resources/fonts/CompactaBT-Bold.otf */ "./resources/fonts/CompactaBT-Bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../resources/fonts/CompactaBT-Italic.otf */ "./resources/fonts/CompactaBT-Italic.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../resources/fonts/Compacta-Bd-BT-Roman.ttf */ "./resources/fonts/Compacta-Bd-BT-Roman.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../resources/fonts/Compacta-Bd-BT-Bold.ttf */ "./resources/fonts/Compacta-Bd-BT-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: CompactaBT;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("opentype"); }

@font-face {
  font-family: CompactaBT;
  font-weight: bold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("opentype"); }

@font-face {
  font-family: CompactaBT;
  font-style: italic;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("opentype"); }

@font-face {
  font-family: CompactaBdBT;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("ttf"); }

@font-face {
  font-family: CompactaBdBT;
  font-weight: bold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("ttf"); }
`, "",{"version":3,"sources":["webpack://./src/styles/fonts.scss"],"names":[],"mappings":"AAAA;EACI,uBAAuB;EACvB,+DAAyE,EAAA;;AAG7E;EACI,uBAAuB;EACvB,iBAAiB;EACjB,+DAAwE,EAAA;;AAG5E;EACI,uBAAuB;EACvB,kBAAkB;EAClB,+DAA0E,EAAA;;AAG9E;EACI,yBAAyB;EACzB,0DAAwE,EAAA;;AAG5E;EACI,yBAAyB;EACzB,iBAAiB;EACjB,0DAAuE,EAAA","sourcesContent":["@font-face {\n    font-family: CompactaBT;\n    src: url(\"../../resources/fonts/CompactaBT-Roman.otf\") format(\"opentype\");\n}\n\n@font-face {\n    font-family: CompactaBT;\n    font-weight: bold;\n    src: url(\"../../resources/fonts/CompactaBT-Bold.otf\") format(\"opentype\");\n}\n\n@font-face {\n    font-family: CompactaBT;\n    font-style: italic;\n    src: url(\"../../resources/fonts/CompactaBT-Italic.otf\") format(\"opentype\");\n}\n\n@font-face {\n    font-family: CompactaBdBT;\n    src: url(\"../../resources/fonts/Compacta-Bd-BT-Roman.ttf\") format(\"ttf\");\n}\n\n@font-face {\n    font-family: CompactaBdBT;\n    font-weight: bold;\n    src: url(\"../../resources/fonts/Compacta-Bd-BT-Bold.ttf\") format(\"ttf\");\n}\n\n\n\n// @font-face {\n//     font-family: TradeGothic;\n//     src: url(\"../../resources/fonts/TradeGothicLT-Regular.ttf\") format(\"ttf\");\n// }\n\n// @font-face {\n//     font-family: TradeGothic;\n//     font-weight: bold;\n//     src: url(\"../../resources/fonts/TradeGothicLT-Bold.ttf\") format(\"ttf\");\n// }\n\n// @font-face {\n//     font-family: TradeGothic;\n//     font-style: italic;\n//     src: url(\"../../resources/fonts/TradeGothicLT-Italic.ttf\") format(\"ttf\");\n// }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.input-like {
  border: 1px solid #999;
  color: #000000;
  border-radius: 0.375em;
  background-color: #ffffff; }
  .input-like:hover, .input-like:focus {
    outline: none;
    border-color: #27C7FC; }
  .input-like:focus {
    background-color: #ffffff; }
  .input-like:disabled {
    background-color: #999;
    cursor: default; }

*, *:before, *:after {
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out; }

p {
  margin: 0 0 1em 0; }

* + p {
  margin-top: 1em; }

h1 + p, h2 + p, h3 + p, h4 + p, h5 + p, h6 + p {
  margin-top: 0; }

body {
  background: #005F7F; }
  body > .unloaded-message {
    color: #FFC60E;
    display: block;
    font-weight: bold;
    font-size: 3em;
    margin: 1em auto;
    text-align: center; }
`, "",{"version":3,"sources":["webpack://./src/styles/utils.scss","webpack://./src/styles/colors.scss","webpack://./src/styles/style.scss"],"names":[],"mappings":"AAkCA;EACI,sBC5BY;ED6BZ,cCnCW;EDoCX,sBAAsB;EACtB,yBCtCW,EAAA;EDkCf;IAOQ,aAAa;IACb,qBC3BkB,EAAA;EDmB1B;IAYQ,yBC9CO,EAAA;EDkCf;IAgBQ,sBC3CQ;ID4CR,eAAe,EAAA;;AEhDvB;EFkBI,yCEjBoD;EFkBpD,sCElBoD;EFmBpD,qCEnBoD;EFoBpD,oCEpBoD;EFqBpD,iCErBoD,EAAA;;AAGxD;EACI,iBAAiB,EAAA;;AAGrB;EACI,eAAe,EAAA;;AAGnB;EAEQ,aAAa,EAAA;;AAKrB;EACI,mBDVqB,EAAA;ECSzB;IAIQ,cDPW;ICQX,cAAc;IACd,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,kBAAkB,EAAA","sourcesContent":["@import \"./colors.scss\";\n\n$transition-time: 0.35s;\n\n@mixin browser($browsers: Mozilla) {\n  @each $browser in $browsers {\n    html[data-browser*=\"#{$browser}\"] & {\n      @content;\n    }\n  }\n}\n\n@mixin notBrowser($browsers: Mozilla) {\n  @each $browser in $browsers {\n    html:not([data-browser*=\"#{$browser}\"]) & {\n      @content;\n    }\n  }\n}\n\n@mixin transition($args...) {\n    -webkit-transition: $args;\n    -moz-transition: $args;\n    -ms-transition: $args;\n    -o-transition: $args;\n    transition: $args;\n}\n\n@mixin vendor-prefix($name, $value) {\n    @each $vendor in ('-webkit-', '-moz-', '-ms-', '-o-', '') {\n        #{$vendor}#{$name}: #{$value};\n    }\n}\n\n.input-like {\n    border: 1px solid $dark-gray;\n    color: $black;\n    border-radius: 0.375em;\n    background-color: $white;\n\n    &:hover, &:focus {\n        outline: none;\n        border-color: $primary-lightest;\n    }\n\n    &:focus {\n        background-color: $white;\n    }\n\n    &:disabled {\n        background-color: $dark-gray;\n        cursor: default;\n    }\n}\n","$white: #ffffff;\n$black: #000000;\n$light-black: #555555;\n\n$off-white: #eaeaea;\n$light-gray: #ddd;\n$gray: #bbb;\n$dark-gray: #999;\n\n$error: #f82104;//#e02605;\n\n$primary: #00adea;\n$primary-dark: #007AA2;\n$primary-darkest: #005F7F;\n$primary-light: #06C1FF;\n$primary-lightest: #27C7FC;\n\n$primary-bar: #00adea;\n\n$secondary: #FFC60E;\n$secondary-dark: #CD9D00;\n$secondary-darkest: #A17B00;\n$secondary-light: #FFD240;\n$secondary-lightest: #FFDC6A;\n","@import \"./utils.scss\";\n@import \"./colors.scss\";\n\n*, *:before, *:after {\n    @include transition(all $transition-time ease-in-out);\n}\n\np {\n    margin: 0 0 1em 0;\n}\n\n* + p {\n    margin-top: 1em;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    & + p {\n        margin-top: 0;\n    }\n}\n\n// these styles should not be seen, or if so just while the UI loads\nbody {\n    background: $primary-darkest;\n\n    & > .unloaded-message {\n        color: $secondary;\n        display: block;\n        font-weight: bold;\n        font-size: 3em;\n        margin: 1em auto;\n        text-align: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/card-images/great-serpent-ring.png":
/*!******************************************************!*\
  !*** ./resources/card-images/great-serpent-ring.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/great-serpent-ring.png");

/***/ }),

/***/ "./resources/card-templates/ally.png":
/*!*******************************************!*\
  !*** ./resources/card-templates/ally.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/ally.png");

/***/ }),

/***/ "./resources/card-templates/background-cost.png":
/*!******************************************************!*\
  !*** ./resources/card-templates/background-cost.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/background-cost.png");

/***/ }),

/***/ "./resources/card-templates/background-vp-negative.png":
/*!*************************************************************!*\
  !*** ./resources/card-templates/background-vp-negative.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/background-vp-negative.png");

/***/ }),

/***/ "./resources/card-templates/background-vp-normal.png":
/*!***********************************************************!*\
  !*** ./resources/card-templates/background-vp-normal.png ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/background-vp-normal.png");

/***/ }),

/***/ "./resources/card-templates/crisis.png":
/*!*********************************************!*\
  !*** ./resources/card-templates/crisis.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/crisis.png");

/***/ }),

/***/ "./resources/card-templates/equipment.png":
/*!************************************************!*\
  !*** ./resources/card-templates/equipment.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/equipment.png");

/***/ }),

/***/ "./resources/card-templates/hero.png":
/*!*******************************************!*\
  !*** ./resources/card-templates/hero.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/hero.png");

/***/ }),

/***/ "./resources/card-templates/location.png":
/*!***********************************************!*\
  !*** ./resources/card-templates/location.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/location.png");

/***/ }),

/***/ "./resources/card-templates/oversized-hero.png":
/*!*****************************************************!*\
  !*** ./resources/card-templates/oversized-hero.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/oversized-hero.png");

/***/ }),

/***/ "./resources/card-templates/oversized-shadow.png":
/*!*******************************************************!*\
  !*** ./resources/card-templates/oversized-shadow.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/oversized-shadow.png");

/***/ }),

/***/ "./resources/card-templates/shadow.png":
/*!*********************************************!*\
  !*** ./resources/card-templates/shadow.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/shadow.png");

/***/ }),

/***/ "./resources/card-templates/shadowspawn.png":
/*!**************************************************!*\
  !*** ./resources/card-templates/shadowspawn.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/shadowspawn.png");

/***/ }),

/***/ "./resources/card-templates/starter.png":
/*!**********************************************!*\
  !*** ./resources/card-templates/starter.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/starter.png");

/***/ }),

/***/ "./resources/card-templates/tactic.png":
/*!*********************************************!*\
  !*** ./resources/card-templates/tactic.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/tactic.png");

/***/ }),

/***/ "./resources/card-templates/vp-variable.png":
/*!**************************************************!*\
  !*** ./resources/card-templates/vp-variable.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/vp-variable.png");

/***/ }),

/***/ "./resources/card-templates/weakness.png":
/*!***********************************************!*\
  !*** ./resources/card-templates/weakness.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/weakness.png");

/***/ }),

/***/ "./resources/images/card-help.png":
/*!****************************************!*\
  !*** ./resources/images/card-help.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/card-help.png");

/***/ }),

/***/ "./resources/images/favicon.png":
/*!**************************************!*\
  !*** ./resources/images/favicon.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/favicon.png");

/***/ }),

/***/ "./resources/images/wot-logo.png":
/*!***************************************!*\
  !*** ./resources/images/wot-logo.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/wot-logo.png");

/***/ }),

/***/ "./resources/images/wot-logo2.png":
/*!****************************************!*\
  !*** ./resources/images/wot-logo2.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resources/wot-logo2.png");

/***/ }),

/***/ "./src/gui/tabs/deck-generator/deck-generator-tab.hbs":
/*!************************************************************!*\
  !*** ./src/gui/tabs/deck-generator/deck-generator-tab.hbs ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"deck-generator-tab\">\n	<p>This tool is intended to convert a spreadsheet of cards into a few images of the generated cards. These images can then be imported and played in a game such as <a href=\"http://store.steampowered.com/app/286160/Tabletop_Simulator/\">Tabletop Simulator</a>.</p>\n	<p>Select a <a href=\"https://en.wikipedia.org/wiki/Comma-separated_values\">CSV file</a> to parse into a deck of custom cards to download.</p>\n	<div class=\"file-uploader-wrapper\">\n		<input id=\"file-selector-loader\" class=\"csv-file-selector\" type=\"file\" accept=\".csv\"/>\n		<label for=\"file-selector-loader\" class=\"csv-file-selector-label\">\n			<span class=\"file-name\">\n				<em class=\"none-selected\">None Selected</em>\n			</span>\n			<span class=\"file-button\">\n				<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\">\n					<path d=\"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z\"></path>\n					</svg>\n				 Choose a file\n			</span>\n		</label>\n	</div>\n	<p>For more information on the format your CSV file should be in, check out the <a href=\"#help\">Help tab</a>.</p>\n	<p><em>Note:</em> Generation cards can be memory intensive. Every image you set for your card will be loaded into memory and combined to form high resolution 4K textures of cards. For main deck sized spreadsheets (150 cards) this can take ~600 MB to 1 GB of memory. If you encounter bottlenecks due to your computer please consider splitting up your sheet into multiple files.</p>\n	<button class=\"generate-button\">Generate</button>\n	<div class=\"generation-options\">\n		<span class=\"max-cards-x\">\n			<label title=\"The maximum number of cards to pack into an image along the (horizontal) X-axis.\" for=\"x-input-id\">Max Cards X:</label> <input type=\"number\" class=\"max-cards-x-input\" id=\"x-input-id\" />\n		</span>\n		<span class=\"max-cards-y\">\n			<label title=\"The maximum number of cards to pack into an image along the (vertical) Y-axis.\" for=\"y-input-id\">Max Cards Y:</label> <input type=\"number\" class=\"max-cards-y-input\" id=\"y-input-id\" />\n		</span>\n	</div>\n	<div class=\"generation expandable\">\n		<div class=\"progress-bar-background\">\n			<div class=\"progress-bar-foreground\">0%</div>\n		</div>\n		<ul class=\"generation-log\">\n		</ul>\n		<button class=\"download-button\" disabled>\n			<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" width=\"512px\" height=\"512px\" viewBox=\"0 0 554.625 554.625\" xml:space=\"preserve\">\n				<path d=\"M267.75,153h95.625L248.625,19.125v114.75C248.625,145.35,258.188,153,267.75,153z\" fill=\"#FFFFFF\"/>\n				<path d=\"M133.875,401.625V267.75c0-32.513,24.862-57.375,57.375-57.375h172.125v-38.25H267.75c-21.038,0-38.25-17.212-38.25-38.25    V19.125H38.25C17.212,19.125,0,36.337,0,57.375V497.25c0,21.037,17.212,38.25,38.25,38.25h286.875    c21.037,0,38.25-17.213,38.25-38.25V459H191.25C158.737,459,133.875,434.138,133.875,401.625z\" fill=\"#FFFFFF\"/>\n				<path d=\"M516.375,229.5H191.25c-21.038,0-38.25,17.212-38.25,38.25v133.875c0,21.037,17.212,38.25,38.25,38.25h325.125    c21.037,0,38.25-17.213,38.25-38.25V267.75C554.625,246.712,537.412,229.5,516.375,229.5z M306,286.875L229.5,382.5H306v19.125    h-95.625V382.5l76.5-95.625h-76.5V267.75H306V286.875z M382.5,286.875h-19.125V382.5H382.5v19.125h-57.375V382.5h19.125v-95.625    h-19.125V267.75H382.5V286.875z M459,344.25h-38.25v57.375h-19.125V306v-38.25H459c21.037,0,38.25,17.213,38.25,38.25    S480.037,344.25,459,344.25z\" fill=\"#FFFFFF\"/>\n				<path d=\"M459,286.875h-38.25v38.25H459c11.475,0,19.125-7.65,19.125-19.125S470.475,286.875,459,286.875z\" fill=\"#FFFFFF\"/>\n			</svg>\n			Download Deck\n		</button>\n	</div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ "./src/gui/tabs/help/help.hbs":
/*!************************************!*\
  !*** ./src/gui/tabs/help/help.hbs ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"help-tab\">\n	<p>This tab is intended for help with using this tool, specifically uding the <a href=\"#deck-generator\">Deck Generator</a> functionality.</p>\n	<section class=\"availible-options\">\n		<h2>Your Custom Spreadsheet</h2>\n		<p>Most of the funtionality of this tool is in creating your down <abbr title=\"Cryptozoic Game Engine\">CGE</abbr> deck. To do that all you need to create is a spreadsheet in your office sheet of choice, and follow these rules when formatting it.</p>\n		<p>The first row of your spreadsheet <strong>must</strong> be the headers for each column of options. The list of availible options is below:</p>\n		<div class=\"card-options\"></div>\n		<p>After you make your first row, all entries after count as a card. You can create blank rows and they will be skipped over. Columns that do not match one of the above options are skipped as well, so feel free to add columns to help you organize your cards.</p>\n		<p>Additionally there are two special rows. If you name your card <code>__defaults__</code>, then <strong>all</strong> cards after it will default to the values of that row. This is useful for setting all the values for shared options such as Set, Legal, Copyright, etc. The other row name is <code>__oversized_defaults__</code> but will only be applied to Oversized cards.</p>\n	</section>\n	<section>\n		<h2>Examples</h2>\n		<p>Below are some examples of valid what to expect and valid spreadsheets to use.</p>\n		<p>For an example spreadsheet for use with this tool, check out my <a href=\"https://docs.google.com/spreadsheets/d/1C4sG2btMuTEaFaTlKtoSytHsuSTmM2uhnR2j-IEhsKk/edit?usp=sharing\">Overwatch Deck Building Game spreadsheet here</a>. You can download the first sheet as a CSV file and import it using this tool to generate your own copy of the deck.</p>\n		<img src=\"" + __webpack_require__(/*! ../../../../resources/images/card-help.png */ "./resources/images/card-help.png") + "\" alt=\"card example\" title=\"Example of what column names effect what parts of the card.\"/>\n		<p>For any issues, especially technical ones, create an <a href=\"https://github.com/JacobFischer/Custom-Deck-Builder/issues\">issue on GitHub</a>.</p>\n	</section>\n</div>\n";
},"useData":true});

/***/ }),

/***/ "./src/gui/tabs/live-editor/live-editor.hbs":
/*!**************************************************!*\
  !*** ./src/gui/tabs/live-editor/live-editor.hbs ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"live-editor\">\n	<div class=\"tables\">\n		<p>This tab allows you to edit cards live to get a feel for how this tool works. Feel free to play around with it, but for serious card generation please use the <a href=\"#deck-generator\">Deck Generator</a> tab to generation large batches of cards properly.</p>\n		<div class=\"defaults-table\">\n			<h2 title=\"These are default values for all custom cards.\">Card Defaults</h2>\n		</div>\n		<div class=\"custom-cards\">\n			<h2 title=\"These are custom cards you can create and play with to see how this builder works\">Custom Cards</h2>\n			<div class=\"cards-table\"></div>\n			<div class=\"custom-cards-bottom\">\n				<div class=\"canvases-scale\">\n					<label for=\"canvases-scale-slider\">Card Scale: </label>\n					<input id=\"canvases-scale-slider\" class=\"canvases-scale-slider\" type=\"range\" min=\"0.05\" max=\"1\" step=\"any\" value=\"0.5\"/>\n					<span class=\"canvases-scale-percent\"></span>\n				</div>\n				<button class=\"reset-to-defaults\" title=\"Resets the custom and default card rows to default values\">Reset to defaults</button>\n				<button class=\"add-row-button\">&#65291; Add Row</button>\n			</div>\n		</div>\n		<div class=\"too-many-cards collapsed\">\n			<span class=\"warning-block\">You've created a lot of custom cards. You should probably use the <a href=\"#deck-generator\">Deck Generator Tool</a> to handle all these cards instead.</span>\n		</div>\n	</div>\n	<div class=\"canvases\"></div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ "./src/gui/tabular/tabular.hbs":
/*!*************************************!*\
  !*** ./src/gui/tabular/tabular.hbs ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"tabular\">\n	<nav class=\"tabluar-tabs\">\n		<ul>\n		</ul>\n	</nav>\n	<div class=\"tabular-contents\"></div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ "./src/gui/ui/ui.hbs":
/*!***************************!*\
  !*** ./src/gui/ui/ui.hbs ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"custom-deck-builder\">\n	<div class=\"page-title\">\n		<h1>\n			<span class=\"title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</span>\n			<span class=\"subtitle\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"subtitle") : depth0), depth0))
    + "</span>\n		</h1>\n	</div>\n	<main></main>\n	<footer>Cryptozoic engine &copy; "
    + alias2(__default(__webpack_require__(/*! ../../handlebars-helpers/currentYear.js */ "./src/handlebars-helpers/currentYear.js")).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentYear","hash":{},"data":data,"loc":{"start":{"line":9,"column":34},"end":{"line":9,"column":49}}}))
    + " <a href=\"https://www.cryptozoic.com/\">Cryptozoic Entertainment</a>. This is a fan project by <a href=\"https://github.com/JacobFischer\">Jacob Fischer</a>. Source availible on <a href=\"https://github.com/JacobFischer/Custom-Deck-Builder\">Github</a>.</footer>\n</div>\n";
},"useData":true});

/***/ }),

/***/ "./README.md":
/*!*******************!*\
  !*** ./README.md ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<h1 id=\"deckbuildergenerator\">DeckBuilderGenerator</h1>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/cards/deck-builder-readme.txt":
/*!*******************************************!*\
  !*** ./src/cards/deck-builder-readme.txt ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("Congratulations on building your custom deck! This file helps to explain what you can do with your cool new cards.\n\nThe intended use for these images is to import into a card program, like Tabletop Simulator.\n\n## Tabletop Simulator\n\nTabletop Simulator can build custom decks of cards from textures (images) that contains a grid of cards. If you already know how to import custom decks into Tabletop Simulator, great! Otherwise this readme can help you.\n\nFor reference, your Deck was generated with {width} cards horizontally and {height} cards vertically, though the last sheets of normal and oversized cards may have less.\n\n## Other Notes\n\nThis file and the textures were generated using the Cryptozoic Deck Building Game Custom Card Builder tool created by Jacob Fischer.\n\nhttps://jacobfischer.github.io/Custom-Deck-Builder/\n\nSource Code for this tool is open source and available at GitHub: https://github.com/JacobFischer/Custom-Deck-Builder\n");

/***/ }),

/***/ "./src/gui/tabs/deck-generator/deck-generator-tab.scss":
/*!*************************************************************!*\
  !*** ./src/gui/tabs/deck-generator/deck-generator-tab.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_deck_generator_tab_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./deck-generator-tab.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabs/deck-generator/deck-generator-tab.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_deck_generator_tab_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_deck_generator_tab_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_deck_generator_tab_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_deck_generator_tab_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/gui/tabs/help/help.scss":
/*!*************************************!*\
  !*** ./src/gui/tabs/help/help.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_help_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./help.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabs/help/help.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_help_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_help_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_help_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_help_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/gui/tabs/live-editor/live-editor.scss":
/*!***************************************************!*\
  !*** ./src/gui/tabs/live-editor/live-editor.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_live_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./live-editor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabs/live-editor/live-editor.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_live_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_live_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_live_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_live_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/gui/tabular/tabular.scss":
/*!**************************************!*\
  !*** ./src/gui/tabular/tabular.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabular_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./tabular.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/tabular/tabular.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabular_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabular_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabular_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabular_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/gui/ui/ui.scss":
/*!****************************!*\
  !*** ./src/gui/ui/ui.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./ui.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gui/ui/ui.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/fonts.scss":
/*!*******************************!*\
  !*** ./src/styles/fonts.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./fonts.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/fonts.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./resources/card-images sync recursive \\.png$":
/*!********************************************!*\
  !*** ./resources/card-images/ sync \.png$ ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./great-serpent-ring.png": "./resources/card-images/great-serpent-ring.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/card-images sync recursive \\.png$";

/***/ }),

/***/ "./resources/card-templates sync recursive \\.png$":
/*!***********************************************!*\
  !*** ./resources/card-templates/ sync \.png$ ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ally.png": "./resources/card-templates/ally.png",
	"./background-cost.png": "./resources/card-templates/background-cost.png",
	"./background-vp-negative.png": "./resources/card-templates/background-vp-negative.png",
	"./background-vp-normal.png": "./resources/card-templates/background-vp-normal.png",
	"./crisis.png": "./resources/card-templates/crisis.png",
	"./equipment.png": "./resources/card-templates/equipment.png",
	"./hero.png": "./resources/card-templates/hero.png",
	"./location.png": "./resources/card-templates/location.png",
	"./oversized-hero.png": "./resources/card-templates/oversized-hero.png",
	"./oversized-shadow.png": "./resources/card-templates/oversized-shadow.png",
	"./shadow.png": "./resources/card-templates/shadow.png",
	"./shadowspawn.png": "./resources/card-templates/shadowspawn.png",
	"./starter.png": "./resources/card-templates/starter.png",
	"./tactic.png": "./resources/card-templates/tactic.png",
	"./vp-variable.png": "./resources/card-templates/vp-variable.png",
	"./weakness.png": "./resources/card-templates/weakness.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/card-templates sync recursive \\.png$";

/***/ }),

/***/ "./resources/images sync recursive \\.png$":
/*!***************************************!*\
  !*** ./resources/images/ sync \.png$ ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./card-help.png": "./resources/images/card-help.png",
	"./favicon.png": "./resources/images/favicon.png",
	"./wot-logo.png": "./resources/images/wot-logo.png",
	"./wot-logo2.png": "./resources/images/wot-logo2.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/images sync recursive \\.png$";

/***/ }),

/***/ "./resources/images/background.jpg":
/*!*****************************************!*\
  !*** ./resources/images/background.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2f8bca3f9e096b0f54ae.jpg";

/***/ }),

/***/ "./resources/images/bar-background-2.jpg":
/*!***********************************************!*\
  !*** ./resources/images/bar-background-2.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "81682fc9bfa4ca69c9e5.jpg";

/***/ }),

/***/ "./resources/images/bar-background.jpg":
/*!*********************************************!*\
  !*** ./resources/images/bar-background.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "48e3a4eceee5fb169cbb.jpg";

/***/ }),

/***/ "./resources/fonts/Compacta-Bd-BT-Bold.ttf":
/*!*************************************************!*\
  !*** ./resources/fonts/Compacta-Bd-BT-Bold.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d54e92e5f20b0cb4f501.ttf";

/***/ }),

/***/ "./resources/fonts/Compacta-Bd-BT-Roman.ttf":
/*!**************************************************!*\
  !*** ./resources/fonts/Compacta-Bd-BT-Roman.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7a4004a4f8181375c93d.ttf";

/***/ }),

/***/ "./resources/fonts/CompactaBT-Bold.otf":
/*!*********************************************!*\
  !*** ./resources/fonts/CompactaBT-Bold.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b0be894f303445e86a3d.otf";

/***/ }),

/***/ "./resources/fonts/CompactaBT-Italic.otf":
/*!***********************************************!*\
  !*** ./resources/fonts/CompactaBT-Italic.otf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6a0850e3ef7804b8468f.otf";

/***/ }),

/***/ "./resources/fonts/CompactaBT-Roman.otf":
/*!**********************************************!*\
  !*** ./resources/fonts/CompactaBT-Roman.otf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bf2c6ec88fdce6f53eda.otf";

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3e83":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?19e6":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdeck_builder_generator"] = self["webpackChunkdeck_builder_generator"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["node_modules"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map