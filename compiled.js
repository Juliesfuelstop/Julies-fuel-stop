(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.app = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  const {
    useState,
    useEffect
  } = React;
  const {
    createRoot
  } = ReactDOM;
  const {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory
  } = window.ReactRouterDOM || {};
  class ErrorBoundary extends React.Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "state", {
        hasError: false,
        error: null
      });
    }
    static getDerivedStateFromError(error) {
      return {
        hasError: true,
        error
      };
    }
    render() {
      if (this.state.hasError) {
        return /*#__PURE__*/React.createElement("h2", {
          className: "text-red-500 text-center p-4"
        }, "Something went wrong: ", this.state.error.message);
      }
      return this.props.children;
    }
  }
  const menuItems = [{
    name: "Jelly/Butter Biscuit",
    price: 1.29,
    category: "Breakfast - Biscuits"
  }, {
    name: "Sausage",
    price: 2.29,
    category: "Breakfast - Biscuits"
  }, {
    name: "Bacon, Egg & Cheese Biscuit",
    price: 3.49,
    category: "Breakfast - Biscuits"
  }, {
    name: "Turkey Sandwich",
    price: 4.99,
    category: "Lunch - Sandwiches"
  }, {
    name: "Ham & Cheese Sandwich",
    price: 4.79,
    category: "Lunch - Sandwiches"
  }, {
    name: "Chicken Salad Sandwich",
    price: 5.29,
    category: "Lunch - Sandwiches"
  }, {
    name: "Regular Coffee",
    price: 1.49,
    category: "Drinks"
  }, {
    name: "Bottled Water",
    price: 1.99,
    category: "Drinks"
  }, {
    name: "Fuel Can (1 Gallon)",
    price: 6.99,
    category: "Fuel & Supplies"
  }, {
    name: "Oil (1 Quart)",
    price: 4.49,
    category: "Fuel & Supplies"
  }];
  const promotions = ["10% off on all sandwiches this week!", "Free Bottled Water with any Fuel Can purchase!"];
  const MenuItem = _ref => {
    let {
      item,
      onAddToCart,
      onRemoveFromCart,
      isInCart
    } = _ref;
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
      onChange: () => isInCart ? onRemoveFromCart(item.name) : onAddToCart(item)
    }), /*#__PURE__*/React.createElement("span", null, "Add to Cart"))));
  };
  const Cart = _ref2 => {
    let {
      cartItems,
      removeFromCart,
      taxRate,
      tipAmount,
      setTipAmount,
      onPay
    } = _ref2;
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax + tipAmount;
    return /*#__PURE__*/React.createElement("div", {
      className: "card"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-3xl font-bold mb-6 text-center",
      style: {
        color: '#26A69A'
      }
    }, "Cart"), /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, cartItems.length ? cartItems.map(item => /*#__PURE__*/React.createElement("p", {
      className: "flex justify-between",
      key: item.id
    }, /*#__PURE__*/React.createElement("span", null, item.name, ": $", item.price.toFixed(2)), /*#__PURE__*/React.createElement("button", {
      className: "text-red-500",
      onClick: () => removeFromCart(item.id)
    }, "Remove"))) : /*#__PURE__*/React.createElement("p", null, "No items in cart.")), /*#__PURE__*/React.createElement("div", {
      className: "border-t pt-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "flex justify-between"
    }, /*#__PURE__*/React.createElement("span", null, "Subtotal:"), " ", /*#__PURE__*/React.createElement("span", null, "$", subtotal.toFixed(2))), /*#__PURE__*/React.createElement("p", {
      className: "flex justify-between"
    }, /*#__PURE__*/React.createElement("span", null, "Tax (9.25%):"), " ", /*#__PURE__*/React.createElement("span", null, "$", tax.toFixed(2))), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-4"
    }, /*#__PURE__*/React.createElement("span", null, "Tip:"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "button mr-2",
      onClick: () => setTipAmount(subtotal * 0.05)
    }, "5%"), /*#__PURE__*/React.createElement("button", {
      className: "button mr-2",
      onClick: () => setTipAmount(subtotal * 0.10)
    }, "10%"), /*#__PURE__*/React.createElement("button", {
      className: "button mr-2",
      onClick: () => setTipAmount(subtotal * 0.15)
    }, "15%"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "Custom $",
      className: "border rounded px-2 py-1",
      min: "0",
      step: "0.01",
      value: tipAmount || '',
      onChange: e => setTipAmount(parseFloat(e.target.value) || 0)
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
      onClick: () => onPay(total)
    }, "Pay Now")));
  };
  const Navbar = () => /*#__PURE__*/React.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, "Julie's Fuel Stop"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Link, {
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
  const Footer = () => /*#__PURE__*/React.createElement("footer", {
    className: "bg-26A69A text-white p-4 text-center"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2025 Julie's Fuel Stop. All rights reserved."));
  const HomePage = () => /*#__PURE__*/React.createElement("div", {
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
  const PromotionsPage = () => /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#26A69A'
    }
  }, "Promotions"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, promotions.map((promo, index) => /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-center",
    key: index
  }, promo))));
  const MenuPage = _ref3 => {
    let {
      addToCart,
      removeFromCart,
      cartItems
    } = _ref3;
    return /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-3xl font-bold mb-6 text-center",
      style: {
        color: '#26A69A'
      }
    }, "Menu"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6"
    }, menuItems.map((item, index) => /*#__PURE__*/React.createElement(MenuItem, {
      key: "".concat(item.name, "-").concat(index),
      item: item,
      onAddToCart: addToCart,
      onRemoveFromCart: removeFromCart,
      isInCart: cartItems.some(cartItem => cartItem.name === item.name)
    }))));
  };
  const CartPage = _ref4 => {
    let {
      cartItems,
      removeFromCart,
      taxRate,
      tipAmount,
      setTipAmount,
      onPay
    } = _ref4;
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
  const ReviewsPage = () => /*#__PURE__*/React.createElement("div", {
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
  const AboutPage = () => /*#__PURE__*/React.createElement("div", {
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
  const ContactPage = () => /*#__PURE__*/React.createElement("div", {
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
  const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [tipAmount, setTipAmount] = useState(0);
    const [stripe, setStripe] = useState(null);
    const [cardElement, setCardElement] = useState(null);
    const [isCartRendered, setIsCartRendered] = useState(false);
    const [cartItemCounter, setCartItemCounter] = useState(0);
    const [routerReady, setRouterReady] = useState(false);
    useEffect(() => {
      const checkRouter = setInterval(() => {
        if (window.ReactRouterDOM) {
          setRouterReady(true);
          clearInterval(checkRouter);
        }
      }, 50);
      return () => clearInterval(checkRouter);
    }, []);
    useEffect(() => {
      if (window.Stripe) {
        setStripe(Stripe('pk_test_51RG5m3042fybFFGR1wSrYc9nuPu1XduYHudm6CX0hVheMCLLbO1CK4unC9jjGOC1dhxOP1zcBbYhxtJPvxstvFTN00HhhZY5TB'));
      }
    }, []);
    useEffect(() => {
      if (stripe && isCartRendered) {
        const cardElementDiv = document.getElementById('card-element');
        if (cardElementDiv && !cardElement) {
          const elements = stripe.elements();
          const card = elements.create('card');
          card.mount('#card-element');
          setCardElement(card);
        }
      }
    }, [stripe, isCartRendered]);
    useEffect(() => setIsCartRendered(true), []);
    const addToCart = item => {
      const newItem = _objectSpread(_objectSpread({}, item), {}, {
        id: cartItemCounter
      });
      setCartItems([...cartItems, newItem]);
      setCartItemCounter(cartItemCounter + 1);
    };
    const removeFromCart = id => setCartItems(cartItems.filter(item => item.id !== id));
    const handlePayment = async total => {
      if (!cartItems.length || total <= 0) {
        document.getElementById('card-errors').textContent = 'Invalid cart or total.';
        return;
      }
      if (stripe && cardElement) {
        const {
          error,
          token
        } = await stripe.createToken(cardElement);
        if (error) document.getElementById('card-errors').textContent = error.message;else {
          document.getElementById('card-errors').textContent = '';
          alert("Payment successful! Total: $".concat(total.toFixed(2), ", Token: ").concat(token.id));
          setCartItems([]);
          setTipAmount(0);
          setCartItemCounter(0);
          cardElement.clear();
        }
      }
    };
    if (!routerReady) return /*#__PURE__*/React.createElement("div", {
      className: "loading"
    }, "Loading...");
    return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
      exact: true,
      path: "/",
      component: HomePage
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/menu",
      component: () => /*#__PURE__*/React.createElement(MenuPage, {
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        cartItems: cartItems
      })
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/promotions",
      component: PromotionsPage
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/cart",
      component: () => /*#__PURE__*/React.createElement(CartPage, {
        cartItems: cartItems,
        removeFromCart: removeFromCart,
        taxRate: 0.0925,
        tipAmount: tipAmount,
        setTipAmount: setTipAmount,
        onPay: handlePayment
      })
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/reviews",
      component: ReviewsPage
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/about",
      component: AboutPage
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/contact",
      component: ContactPage
    })), /*#__PURE__*/React.createElement(Footer, null)));
  };
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  root.render(/*#__PURE__*/React.createElement(App, null));
});
