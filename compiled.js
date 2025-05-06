"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
var _ReactDOM = ReactDOM,
  createRoot = _ReactDOM.createRoot;
var _ref = window.ReactRouterDOM || {},
  BrowserRouter = _ref.BrowserRouter,
  Routes = _ref.Routes,
  Route = _ref.Route,
  Link = _ref.Link,
  useNavigate = _ref.useNavigate;
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary() {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ErrorBoundary, [].concat(args));
    _defineProperty(_this, "state", {
      hasError: false,
      error: null
    });
    return _this;
  }
  _inherits(ErrorBoundary, _React$Component);
  return _createClass(ErrorBoundary, [{
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/React.createElement("h2", {
          className: "text-red-500 text-center p-4"
        }, "Something went wrong: ", this.state.error.message);
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        error: error
      };
    }
  }]);
}(React.Component);
var menuItems = [{
  name: "Jelly/Butter Biscuit",
  price: 1.29,
  category: "Breakfast - Biscuits"
}, {
  name: "Sausage",
  price: 2.29,
  category: "Breakfast - Biscuits"
}
// ... (rest of menuItems truncated for brevity)
];
var promotions = ["10% off on all sandwiches this week!", "Free Bottled Water with any Fuel Can purchase!"];
var MenuItem = function MenuItem(_ref2) {
  var item = _ref2.item,
    onAddToCart = _ref2.onAddToCart,
    onRemoveFromCart = _ref2.onRemoveFromCart,
    isInCart = _ref2.isInCart;
  return /*#__PURE__*/React.createElement("div", {
    className: "card flex items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold",
    style: {
      color: '#26A69A'
    }
  }, item.name), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600"
  }, "$", item.price.toFixed(2)), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center mt-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "mr-2",
    checked: isInCart,
    onChange: function onChange() {
      return isInCart ? onRemoveFromCart(item.name) : onAddToCart(item);
    }
  }), /*#__PURE__*/React.createElement("span", null, "Add to Cart"))));
};
var Cart = function Cart(_ref3) {
  var cartItems = _ref3.cartItems,
    removeFromCart = _ref3.removeFromCart,
    taxRate = _ref3.taxRate,
    tipAmount = _ref3.tipAmount,
    setTipAmount = _ref3.setTipAmount,
    onPay = _ref3.onPay;
  var subtotal = cartItems.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);
  var tax = subtotal * taxRate;
  var total = subtotal + tax + tipAmount;
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#26A69A'
    }
  }, "Cart"), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, cartItems.length ? cartItems.map(function (item) {
    return /*#__PURE__*/React.createElement("p", {
      key: item.id,
      className: "flex justify-between"
    }, /*#__PURE__*/React.createElement("span", null, item.name, ": $", item.price.toFixed(2)), /*#__PURE__*/React.createElement("button", {
      className: "text-red-500",
      onClick: function onClick() {
        return removeFromCart(item.id);
      }
    }, "Remove"));
  }) : /*#__PURE__*/React.createElement("p", null, "No items in cart.")), /*#__PURE__*/React.createElement("div", {
    className: "border-t pt-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal:"), " ", /*#__PURE__*/React.createElement("span", null, "$", subtotal.toFixed(2))), /*#__PURE__*/React.createElement("p", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Tax (9.25%):"), " ", /*#__PURE__*/React.createElement("span", null, "$", tax.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("span", null, "Tip:"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "button mr-2",
    onClick: function onClick() {
      return setTipAmount(subtotal * 0.05);
    }
  }, "5%"), /*#__PURE__*/React.createElement("button", {
    className: "button mr-2",
    onClick: function onClick() {
      return setTipAmount(subtotal * 0.10);
    }
  }, "10%"), /*#__PURE__*/React.createElement("button", {
    className: "button mr-2",
    onClick: function onClick() {
      return setTipAmount(subtotal * 0.15);
    }
  }, "15%"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "Custom $",
    className: "border rounded px-2 py-1",
    min: "0",
    step: "0.01",
    value: tipAmount || '',
    onChange: function onChange(e) {
      return setTipAmount(parseFloat(e.target.value) || 0);
    }
  }))), /*#__PURE__*/React.createElement("p", {
    className: "flex justify-between font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "Total:"), " ", /*#__PURE__*/React.createElement("span", null, "$", total.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold mb-4",
    style: {
      color: '#26A69A'
    }
  }, "Payment"), /*#__PURE__*/React.createElement("div", {
    id: "card-element",
    className: "border rounded p-4 mb-4"
  }), /*#__PURE__*/React.createElement("div", {
    id: "card-errors",
    className: "text-red-500 mb-4"
  }), /*#__PURE__*/React.createElement("button", {
    className: "button",
    onClick: function onClick() {
      return onPay(total);
    }
  }, "Pay Now")));
};
var Navbar = function Navbar() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, "Julie's Fuel Stop"), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "Home"), /*#__PURE__*/React.createElement(Link, {
    to: "/menu"
  }, "Menu"), /*#__PURE__*/React.createElement(Link, {
    to: "/promotions"
  }, "Promotions"), /*#__PURE__*/React.createElement(Link, {
    to: "/cart"
  }, "Cart"), /*#__PURE__*/React.createElement(Link, {
    to: "/reviews"
  }, "Reviews"), /*#__PURE__*/React.createElement(Link, {
    to: "/about"
  }, "About"), /*#__PURE__*/React.createElement(Link, {
    to: "/contact"
  }, "Contact")));
};
var Footer = function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-26A69A text-white p-4 text-center"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2025 Julie's Fuel Stop. All rights reserved."));
};
var HomePage = function HomePage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "content text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl font-bold mb-4",
    style: {
      color: '#26A69A'
    }
  }, "Welcome to Julie's Fuel Stop"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg mb-6"
  }, "Your one-stop shop for delicious deli food and fuel services!"), /*#__PURE__*/React.createElement("button", {
    className: "button"
  }, "Explore Menu"));
};
var PromotionsPage = function PromotionsPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#26A69A'
    }
  }, "Promotions"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, promotions.map(function (promo, index) {
    return /*#__PURE__*/React.createElement("p", {
      key: index,
      className: "text-lg text-center"
    }, promo);
  })));
};
var MenuPage = function MenuPage(_ref4) {
  var addToCart = _ref4.addToCart,
    removeFromCart = _ref4.removeFromCart,
    cartItems = _ref4.cartItems;
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#26A69A'
    }
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6"
  }, menuItems.map(function (item, index) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: "".concat(item.name, "-").concat(index),
      item: item,
      onAddToCart: addToCart,
      onRemoveFromCart: removeFromCart,
      isInCart: cartItems.some(function (cartItem) {
        return cartItem.name === item.name;
      })
    });
  })));
};
var CartPage = function CartPage(_ref5) {
  var cartItems = _ref5.cartItems,
    removeFromCart = _ref5.removeFromCart,
    taxRate = _ref5.taxRate,
    tipAmount = _ref5.tipAmount,
    setTipAmount = _ref5.setTipAmount,
    onPay = _ref5.onPay;
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement(Cart, {
    cartItems: cartItems,
    removeFromCart: removeFromCart,
    taxRate: taxRate,
    tipAmount: tipAmount,
    setTipAmount: setTipAmount,
    onPay: onPay
  }));
};
var ReviewsPage = function ReviewsPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#26A69A'
    }
  }, "Reviews"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "italic"
  }, "\"Best turkey sandwich in town!\""), /*#__PURE__*/React.createElement("p", {
    className: "text-right font-semibold mt-2"
  }, "- Sarah M.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "italic"
  }, "\"Great fuel stop experience!\""), /*#__PURE__*/React.createElement("p", {
    className: "text-right font-semibold mt-2"
  }, "- John D."))));
};
var AboutPage = function AboutPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#26A69A'
    }
  }, "About Us"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-lg"
  }, "Julie's Fuel Stop, located in Knoxville, TN, offers deli delights, fuel, and more with over 4 decades of experience.")));
};
var ContactPage = function ContactPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "content text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold mb-6",
    style: {
      color: '#26A69A'
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-lg mb-2"
  }, "Email: juliesfuelstop@gmail.com"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg mb-2"
  }, "Address: 3522 E Governor John Sevier Hwy, Knoxville, TN 37914"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg"
  }, "Phone: (865) 337-7493")));
};
var App = function App() {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    cartItems = _useState2[0],
    setCartItems = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    tipAmount = _useState4[0],
    setTipAmount = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    stripe = _useState6[0],
    setStripe = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    cardElement = _useState8[0],
    setCardElement = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isCartRendered = _useState0[0],
    setIsCartRendered = _useState0[1];
  var _useState1 = useState(0),
    _useState10 = _slicedToArray(_useState1, 2),
    cartItemCounter = _useState10[0],
    setCartItemCounter = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    routerReady = _useState12[0],
    setRouterReady = _useState12[1];
  useEffect(function () {
    var checkRouter = setInterval(function () {
      if (window.ReactRouterDOM) {
        setRouterReady(true);
        clearInterval(checkRouter);
      }
    }, 50);
    return function () {
      return clearInterval(checkRouter);
    };
  }, []);
  useEffect(function () {
    if (window.Stripe) {
      setStripe(Stripe('pk_test_51RG5m3042fybFFGR1wSrYc9nuPu1XduYHudm6CX0hVheMCLLbO1CK4unC9jjGOC1dhxOP1zcBbYhxtJPvxstvFTN00HhhZY5TB'));
    }
  }, []);
  useEffect(function () {
    if (stripe && isCartRendered) {
      var cardElementDiv = document.getElementById('card-element');
      if (cardElementDiv && !cardElement) {
        var elements = stripe.elements();
        var card = elements.create('card');
        card.mount('#card-element');
        setCardElement(card);
      }
    }
  }, [stripe, isCartRendered]);
  useEffect(function () {
    return setIsCartRendered(true);
  }, []);
  var addToCart = function addToCart(item) {
    var newItem = _objectSpread(_objectSpread({}, item), {}, {
      id: cartItemCounter
    });
    setCartItems([].concat(_toConsumableArray(cartItems), [newItem]));
    setCartItemCounter(cartItemCounter + 1);
  };
  var removeFromCart = function removeFromCart(id) {
    return setCartItems(cartItems.filter(function (item) {
      return item.id !== id;
    }));
  };
  var handlePayment = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(total) {
      var _yield$stripe$createT, error, token;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!cartItems.length || total <= 0)) {
              _context.next = 3;
              break;
            }
            document.getElementById('card-errors').textContent = 'Invalid cart or total.';
            return _context.abrupt("return");
          case 3:
            if (!(stripe && cardElement)) {
              _context.next = 10;
              break;
            }
            _context.next = 6;
            return stripe.createToken(cardElement);
          case 6:
            _yield$stripe$createT = _context.sent;
            error = _yield$stripe$createT.error;
            token = _yield$stripe$createT.token;
            if (error) document.getElementById('card-errors').textContent = error.message;else {
              document.getElementById('card-errors').textContent = '';
              alert("Payment successful! Total: $".concat(total.toFixed(2), ", Token: ").concat(token.id));
              setCartItems([]);
              setTipAmount(0);
              setCartItemCounter(0);
              cardElement.clear();
            }
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handlePayment(_x) {
      return _ref6.apply(this, arguments);
    };
  }();
  if (!routerReady) return /*#__PURE__*/React.createElement("div", {
    className: "loading"
  }, "Loading...");
  return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(HomePage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/menu",
    element: /*#__PURE__*/React.createElement(MenuPage, {
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      cartItems: cartItems
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/promotions",
    element: /*#__PURE__*/React.createElement(PromotionsPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/cart",
    element: /*#__PURE__*/React.createElement(CartPage, {
      cartItems: cartItems,
      removeFromCart: removeFromCart,
      taxRate: 0.0925,
      tipAmount: tipAmount,
      setTipAmount: setTipAmount,
      onPay: handlePayment
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/reviews",
    element: /*#__PURE__*/React.createElement(ReviewsPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/about",
    element: /*#__PURE__*/React.createElement(AboutPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/contact",
    element: /*#__PURE__*/React.createElement(ContactPage, null)
  })), /*#__PURE__*/React.createElement(Footer, null)));
};
var rootElement = document.getElementById('root');
var root = createRoot(rootElement);
root.render(/*#__PURE__*/React.createElement(App, null));
