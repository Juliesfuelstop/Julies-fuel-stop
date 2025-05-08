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
const menuItems = [
// Breakfast - Biscuits
{
  name: "Jelly/Butter Biscuit",
  price: 1.29,
  category: "Breakfast - Biscuits"
}, {
  name: "Sausage",
  price: 2.29,
  category: "Breakfast - Biscuits"
}, {
  name: "Sausage Egg*",
  price: 2.69,
  category: "Breakfast - Biscuits"
}, {
  name: "Sausage Egg Cheese*",
  price: 3.09,
  category: "Breakfast - Biscuits"
}, {
  name: "Bacon",
  price: 2.69,
  category: "Breakfast - Biscuits"
}, {
  name: "Bacon Egg*",
  price: 2.99,
  category: "Breakfast - Biscuits"
}, {
  name: "Bacon Egg Cheese",
  price: 3.49,
  category: "Breakfast - Biscuits"
}, {
  name: "Country Ham",
  price: 3.29,
  category: "Breakfast - Biscuits"
}, {
  name: "Egg Biscuit (1 Egg)*",
  price: 2.09,
  category: "Breakfast - Biscuits"
}, {
  name: "Deli Ham",
  price: 2.99,
  category: "Breakfast - Biscuits"
}, {
  name: "Steak",
  price: 3.29,
  category: "Breakfast - Biscuits"
}, {
  name: "Chicken",
  price: 3.09,
  category: "Breakfast - Biscuits"
}, {
  name: "Tenderloin",
  price: 3.25,
  category: "Breakfast - Biscuits"
}, {
  name: "Extra Egg/Cheese*",
  price: 0.75,
  category: "Breakfast - Biscuits"
}, {
  name: "Extra Bacon",
  price: 1.75,
  category: "Breakfast - Biscuits"
}, {
  name: "Extra Biscuit",
  price: 0.99,
  category: "Breakfast - Biscuits"
},
// Breakfast - Sandwiches
{
  name: "BLT",
  price: 4.99,
  category: "Breakfast - Sandwiches"
}, {
  name: "Sausage",
  price: 4.99,
  category: "Breakfast - Sandwiches"
}, {
  name: "Sausage Egg/Cheese",
  price: 5.09,
  category: "Breakfast - Sandwiches"
}, {
  name: "Sausage Egg Cheese*",
  price: 5.25,
  category: "Breakfast - Sandwiches"
}, {
  name: "Bacon",
  price: 4.99,
  category: "Breakfast - Sandwiches"
}, {
  name: "Bacon Egg/Cheese*",
  price: 5.09,
  category: "Breakfast - Sandwiches"
}, {
  name: "Bacon Egg Cheese*",
  price: 5.25,
  category: "Breakfast - Sandwiches"
}, {
  name: "Country Ham + Egg*",
  price: 5.35,
  category: "Breakfast - Sandwiches"
}, {
  name: "Deli Ham + Egg*",
  price: 5.35,
  category: "Breakfast - Sandwiches"
}, {
  name: "Chuckwagon",
  price: 5.35,
  category: "Breakfast - Sandwiches"
}, {
  name: "Bologna + Egg + Cheese*",
  price: 5.29,
  category: "Breakfast - Sandwiches"
}, {
  name: "Bologna",
  price: 4.09,
  category: "Breakfast - Sandwiches"
}, {
  name: "Grilled Cheese",
  price: 3.49,
  category: "Breakfast - Sandwiches"
}, {
  name: "Egg Sandwich*",
  price: 3.49,
  category: "Breakfast - Sandwiches"
}, {
  name: "Grilled Ham and Cheese",
  price: 5.09,
  category: "Breakfast - Sandwiches"
},
// Breakfast - Special
{
  name: "Small Biscuit Gravy",
  price: 3.19,
  category: "Breakfast - Special"
}, {
  name: "Large Biscuit Gravy",
  price: 4.29,
  category: "Breakfast - Special"
}, {
  name: "Breakfast Burritos",
  price: 3.99,
  category: "Breakfast - Special"
}, {
  name: "Breakfast Pizzas + Drink",
  price: 3.49,
  category: "Breakfast - Special"
}, {
  name: "Breakfast Plate* (2 Eggs, Sausage/Bacon, Small Gravy)",
  price: 6.49,
  category: "Breakfast - Special"
},
// Lunch & Dinner - Burger
{
  name: "Hamburger",
  price: 4.59,
  category: "Lunch & Dinner - Burger"
}, {
  name: "Double Hamburger",
  price: 5.99,
  category: "Lunch & Dinner - Burger"
}, {
  name: "Cheeseburger",
  price: 5.99,
  category: "Lunch & Dinner - Burger"
}, {
  name: "Double Cheeseburger",
  price: 6.79,
  category: "Lunch & Dinner - Burger"
}, {
  name: "Chili Cheeseburger",
  price: 6.29,
  category: "Lunch & Dinner - Burger"
}, {
  name: "Bacon Cheeseburger",
  price: 6.29,
  category: "Lunch & Dinner - Burger"
}, {
  name: "Double Bacon Cheeseburger",
  price: 6.99,
  category: "Lunch & Dinner - Burger"
}, {
  name: "Jalapeno Cheeseburger",
  price: 5.99,
  category: "Lunch & Dinner - Burger"
}, {
  name: "Double Bacon Hamburger",
  price: 6.49,
  category: "Lunch & Dinner - Burger"
},
// Lunch & Dinner - Hotdog
{
  name: "Chili Bun/Hotdog Plain",
  price: 1.49,
  category: "Lunch & Dinner - Hotdog"
}, {
  name: "Hotdog - Chili",
  price: 2.19,
  category: "Lunch & Dinner - Hotdog"
}, {
  name: "Hotdog - Chili Slaw",
  price: 2.59,
  category: "Lunch & Dinner - Hotdog"
}, {
  name: "Hotdog - Chili Cheese",
  price: 2.59,
  category: "Lunch & Dinner - Hotdog"
}, {
  name: "Hotdog - Chili Cheese Slaw",
  price: 2.99,
  category: "Lunch & Dinner - Hotdog"
},
// Lunch & Dinner - Hoggie/Subs
{
  name: "Hoggie",
  price: 7.49,
  category: "Lunch & Dinner - Hoggie/Subs"
}, {
  name: "Ham",
  price: 7.49,
  category: "Lunch & Dinner - Hoggie/Subs"
}, {
  name: "Turkey",
  price: 7.49,
  category: "Lunch & Dinner - Hoggie/Subs"
}, {
  name: "Corn Beef",
  price: 7.49,
  category: "Lunch & Dinner - Hoggie/Subs"
}, {
  name: "Roast Beef",
  price: 7.49,
  category: "Lunch & Dinner - Hoggie/Subs"
}, {
  name: "Chicken Club",
  price: 7.29,
  category: "Lunch & Dinner - Hoggie/Subs"
}, {
  name: "Club",
  price: 7.29,
  category: "Lunch & Dinner - Hoggie/Subs"
}, {
  name: "Philly",
  price: 7.99,
  category: "Lunch & Dinner - Hoggie/Subs"
},
// Lunch & Dinner - Salads
{
  name: "Small Chef",
  price: 6.29,
  category: "Lunch & Dinner - Salads"
}, {
  name: "Large Chef",
  price: 7.49,
  category: "Lunch & Dinner - Salads"
}, {
  name: "Extra Egg/Cheese/Sauce",
  price: 1.00,
  category: "Lunch & Dinner - Salads"
}, {
  name: "Extra Meat",
  price: 1.99,
  category: "Lunch & Dinner - Salads"
},
// Lunch & Dinner - Specials
{
  name: "2 Hotdogs",
  price: 6.99,
  category: "Lunch & Dinner - Specials (Fries/Drink-20oz)"
}, {
  name: "Cheeseburger",
  price: 7.99,
  category: "Lunch & Dinner - Specials (Fries/Drink-20oz)"
}, {
  name: "Double Cheeseburger",
  price: 8.99,
  category: "Lunch & Dinner - Specials (Fries/Drink-20oz)"
}, {
  name: "Hoggie",
  price: 9.99,
  category: "Lunch & Dinner - Specials (Fries/Drink-20oz)"
}, {
  name: "Philly",
  price: 9.99,
  category: "Lunch & Dinner - Specials (Fries/Drink-20oz)"
}, {
  name: "Double Bacon Cheeseburger",
  price: 9.99,
  category: "Lunch & Dinner - Specials (Fries/Drink-20oz)"
}, {
  name: "Chicken Sandwich",
  price: 7.49,
  category: "Lunch & Dinner - Specials (Fries/Drink-20oz)"
},
// Extras - Sides
{
  name: "Fries",
  price: 2.39,
  category: "Extras - Sides"
}, {
  name: "Large Fries",
  price: 3.99,
  category: "Extras - Sides"
}, {
  name: "Cheese Fries",
  price: 2.99,
  category: "Extras - Sides"
}, {
  name: "Chili Cheese Fries",
  price: 3.99,
  category: "Extras - Sides"
}, {
  name: "Corn Dogs",
  price: 2.19,
  category: "Extras - Sides"
}, {
  name: "Onion Rings",
  price: 3.49,
  category: "Extras - Sides"
}, {
  name: "Egg/Pork Rolls",
  price: 2.19,
  category: "Extras - Sides"
}, {
  name: "Broccoli Bites",
  price: 3.99,
  category: "Extras - Sides"
}, {
  name: "Jalapeno Poppers",
  price: 3.99,
  category: "Extras - Sides"
}, {
  name: "Large Onion Rings",
  price: 6.49,
  category: "Extras - Sides"
}, {
  name: "Cheesesticks",
  price: 3.49,
  category: "Extras - Sides"
}, {
  name: "Wedges",
  price: 2.49,
  category: "Extras - Sides"
}, {
  name: "Large Wedges",
  price: 3.99,
  category: "Extras - Sides"
}, {
  name: "Family Wedges",
  price: 4.99,
  category: "Extras - Sides"
}, {
  name: "Tattertots",
  price: 2.49,
  category: "Extras - Sides"
}, {
  name: "Fried Pickles/Tomatoes",
  price: 3.99,
  category: "Extras - Sides"
}, {
  name: "Fried Okra",
  price: 3.49,
  category: "Extras - Sides"
}, {
  name: "Corn Nuggets",
  price: 3.49,
  category: "Extras - Sides"
}, {
  name: "Mini Tacos",
  price: 3.99,
  category: "Extras - Sides"
}, {
  name: "Breaded Mushrooms",
  price: 3.49,
  category: "Extras - Sides"
}, {
  name: "Chicken Liver",
  price: 3.99,
  category: "Extras - Sides"
}, {
  name: "Chicken Gizzards",
  price: 3.99,
  category: "Extras - Sides"
}, {
  name: "Chicken Cheese Tortilla",
  price: 2.29,
  category: "Extras - Sides"
},
// Extras - Additional
{
  name: "Toast",
  price: 0.79,
  category: "Extras - Additional"
}, {
  name: "2 Hashbrowns",
  price: 1.29,
  category: "Extras - Additional"
}, {
  name: "Sauce Cup",
  price: 0.49,
  category: "Extras - Additional"
}];
const promotions = ["10% off on all sandwiches this week!", "Free Drink with any Special purchase!"];
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
      color: '#87CEEB'
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
      color: '#87CEEB'
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
      color: '#87CEEB'
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
const Navbar = _ref3 => {
  let {
    cartItems
  } = _ref3;
  const [logoError, setLogoError] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = '/images/logo.png'; // Updated path
    img.onload = () => setLogoError(false);
    img.onerror = () => {
      setLogoError(true);
      console.error("Logo load failed: Check /images/logo.png on server");
    };
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, logoError ? /*#__PURE__*/React.createElement("span", null, "Logo not found (Check /images/logo.png)") : /*#__PURE__*/React.createElement("img", {
    src: "/images/logo.png",
    alt: "Julie's Fuel Stop Logo",
    className: "logo-img",
    onError: () => {
      setLogoError(true);
      console.error("Logo load error during render");
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "Home"), /*#__PURE__*/React.createElement(Link, {
    to: "/menu"
  }, "Menu"), /*#__PURE__*/React.createElement(Link, {
    to: "/promotions"
  }, "Promotions"), /*#__PURE__*/React.createElement(Link, {
    to: "/cart"
  }, "Cart ", /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, cartItems.length)), /*#__PURE__*/React.createElement(Link, {
    to: "/reviews"
  }, "Reviews"), /*#__PURE__*/React.createElement(Link, {
    to: "/about"
  }, "About"), /*#__PURE__*/React.createElement(Link, {
    to: "/contact"
  }, "Contact")));
};
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "bg-skyblue text-white p-4 text-center"
}, /*#__PURE__*/React.createElement("p", null, "\xA9 2025 Julie's Fuel Stop. All rights reserved."));
const HomePage = () => /*#__PURE__*/React.createElement("div", {
  className: "content text-center"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-4xl font-bold mb-4",
  style: {
    color: '#87CEEB'
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
    color: '#87CEEB'
  }
}, "Promotions"), /*#__PURE__*/React.createElement("div", {
  className: "card"
}, promotions.map((promo, index) => /*#__PURE__*/React.createElement("p", {
  className: "text-lg text-center",
  key: index
}, promo))));
const MenuPage = _ref4 => {
  let {
    addToCart,
    removeFromCart,
    cartItems
  } = _ref4;
  const categories = [...new Set(menuItems.map(item => item.category))];
  useEffect(() => {
    console.log("MenuPage mounted - Items Count:", menuItems.length);
    console.log("Menu Items:", menuItems);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#87CEEB'
    }
  }, "Menu"), categories.map(category => /*#__PURE__*/React.createElement("div", {
    key: category,
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold mb-4",
    style: {
      color: '#87CEEB'
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6"
  }, menuItems.filter(item => item.category === category).map((item, index) => /*#__PURE__*/React.createElement(MenuItem, {
    key: "".concat(item.name, "-").concat(index),
    item: item,
    onAddToCart: addToCart,
    onRemoveFromCart: removeFromCart,
    isInCart: cartItems.some(cartItem => cartItem.name === item.name)
  }))))), menuItems.length === 0 && /*#__PURE__*/React.createElement("p", null, "No menu items available."));
};
const CartPage = _ref5 => {
  let {
    cartItems,
    removeFromCart,
    taxRate,
    tipAmount,
    setTipAmount,
    onPay
  } = _ref5;
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
const ReviewsPage = () => {
  const [reviews, setReviews] = React.useState([{
    text: '"Best turkey sandwich in town!"',
    author: "- Sarah M."
  }, {
    text: '"Great fuel stop experience!"',
    author: "- John D."
  }]);
  const [newReview, setNewReview] = React.useState({
    text: '',
    author: ''
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (newReview.text && newReview.author) {
      setReviews([...reviews, _objectSpread(_objectSpread({}, newReview), {}, {
        author: "-".concat(newReview.author)
      })]);
      setNewReview({
        text: '',
        author: ''
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#87CEEB'
    }
  }, "Reviews"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, reviews.map((review, index) => /*#__PURE__*/React.createElement("div", {
    className: "card",
    key: index
  }, /*#__PURE__*/React.createElement("p", {
    className: "italic"
  }, review.text), /*#__PURE__*/React.createElement("p", {
    className: "text-right font-semibold mt-2"
  }, review.author)))), /*#__PURE__*/React.createElement("div", {
    className: "card mt-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold mb-4",
    style: {
      color: '#87CEEB'
    }
  }, "Add a Review"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "border rounded w-full p-2 mb-2",
    value: newReview.text,
    onChange: e => setNewReview(_objectSpread(_objectSpread({}, newReview), {}, {
      text: e.target.value
    })),
    placeholder: "Write your review",
    rows: "3"
  }), /*#__PURE__*/React.createElement("input", {
    className: "border rounded p-2 mb-2 w-full",
    value: newReview.author,
    onChange: e => setNewReview(_objectSpread(_objectSpread({}, newReview), {}, {
      author: e.target.value
    })),
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit"))));
};
const AboutPage = () => /*#__PURE__*/React.createElement("div", {
  className: "content"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold mb-6 text-center",
  style: {
    color: '#87CEEB'
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
    color: '#87CEEB'
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
  return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Navbar, {
    cartItems: cartItems
  }), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
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
