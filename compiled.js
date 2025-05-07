function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
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
  Routes,
  Route,
  Link,
  useNavigate
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
      return /*#__PURE__*/_jsxs("h2", {
        className: "text-red-500 text-center p-4",
        children: ["Something went wrong: ", this.state.error.message]
      });
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
}
// ... (rest of menuItems truncated for brevity)
];
const promotions = ["10% off on all sandwiches this week!", "Free Bottled Water with any Fuel Can purchase!"];
const MenuItem = _ref => {
  let {
    item,
    onAddToCart,
    onRemoveFromCart,
    isInCart
  } = _ref;
  return /*#__PURE__*/_jsx("div", {
    className: "card flex items-center",
    children: /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        className: "text-xl font-semibold",
        style: {
          color: '#26A69A'
        },
        children: item.name
      }), /*#__PURE__*/_jsxs("p", {
        className: "text-gray-600",
        children: ["$", item.price.toFixed(2)]
      }), /*#__PURE__*/_jsxs("label", {
        className: "flex items-center mt-2",
        children: [/*#__PURE__*/_jsx("input", {
          type: "checkbox",
          className: "mr-2",
          checked: isInCart,
          onChange: () => isInCart ? onRemoveFromCart(item.name) : onAddToCart(item)
        }), /*#__PURE__*/_jsx("span", {
          children: "Add to Cart"
        })]
      })]
    })
  });
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
  return /*#__PURE__*/_jsxs("div", {
    className: "card",
    children: [/*#__PURE__*/_jsx("h2", {
      className: "text-3xl font-bold mb-6 text-center",
      style: {
        color: '#26A69A'
      },
      children: "Cart"
    }), /*#__PURE__*/_jsx("div", {
      className: "mb-4",
      children: cartItems.length ? cartItems.map(item => /*#__PURE__*/_jsxs("p", {
        className: "flex justify-between",
        children: [/*#__PURE__*/_jsxs("span", {
          children: [item.name, ": $", item.price.toFixed(2)]
        }), /*#__PURE__*/_jsx("button", {
          className: "text-red-500",
          onClick: () => removeFromCart(item.id),
          children: "Remove"
        })]
      }, item.id)) : /*#__PURE__*/_jsx("p", {
        children: "No items in cart."
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "border-t pt-4",
      children: [/*#__PURE__*/_jsxs("p", {
        className: "flex justify-between",
        children: [/*#__PURE__*/_jsx("span", {
          children: "Subtotal:"
        }), " ", /*#__PURE__*/_jsxs("span", {
          children: ["$", subtotal.toFixed(2)]
        })]
      }), /*#__PURE__*/_jsxs("p", {
        className: "flex justify-between",
        children: [/*#__PURE__*/_jsx("span", {
          children: "Tax (9.25%):"
        }), " ", /*#__PURE__*/_jsxs("span", {
          children: ["$", tax.toFixed(2)]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "flex justify-between items-center mb-4",
        children: [/*#__PURE__*/_jsx("span", {
          children: "Tip:"
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("button", {
            className: "button mr-2",
            onClick: () => setTipAmount(subtotal * 0.05),
            children: "5%"
          }), /*#__PURE__*/_jsx("button", {
            className: "button mr-2",
            onClick: () => setTipAmount(subtotal * 0.10),
            children: "10%"
          }), /*#__PURE__*/_jsx("button", {
            className: "button mr-2",
            onClick: () => setTipAmount(subtotal * 0.15),
            children: "15%"
          }), /*#__PURE__*/_jsx("input", {
            type: "number",
            placeholder: "Custom $",
            className: "border rounded px-2 py-1",
            min: "0",
            step: "0.01",
            value: tipAmount || '',
            onChange: e => setTipAmount(parseFloat(e.target.value) || 0)
          })]
        })]
      }), /*#__PURE__*/_jsxs("p", {
        className: "flex justify-between font-bold",
        children: [/*#__PURE__*/_jsx("span", {
          children: "Total:"
        }), " ", /*#__PURE__*/_jsxs("span", {
          children: ["$", total.toFixed(2)]
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "mt-6",
      children: [/*#__PURE__*/_jsx("h3", {
        className: "text-xl font-semibold mb-4",
        style: {
          color: '#26A69A'
        },
        children: "Payment"
      }), /*#__PURE__*/_jsx("div", {
        id: "card-element",
        className: "border rounded p-4 mb-4"
      }), /*#__PURE__*/_jsx("div", {
        id: "card-errors",
        className: "text-red-500 mb-4"
      }), /*#__PURE__*/_jsx("button", {
        className: "button",
        onClick: () => onPay(total),
        children: "Pay Now"
      })]
    })]
  });
};
const Navbar = () => /*#__PURE__*/_jsxs("nav", {
  className: "navbar",
  children: [/*#__PURE__*/_jsx("div", {
    className: "logo",
    children: "Julie's Fuel Stop"
  }), " ", /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(Link, {
      to: "/",
      children: "Home"
    }), /*#__PURE__*/_jsx(Link, {
      to: "/menu",
      children: "Menu"
    }), /*#__PURE__*/_jsx(Link, {
      to: "/promotions",
      children: "Promotions"
    }), /*#__PURE__*/_jsx(Link, {
      to: "/cart",
      children: "Cart"
    }), /*#__PURE__*/_jsx(Link, {
      to: "/reviews",
      children: "Reviews"
    }), /*#__PURE__*/_jsx(Link, {
      to: "/about",
      children: "About"
    }), /*#__PURE__*/_jsx(Link, {
      to: "/contact",
      children: "Contact"
    })]
  })]
});
const Footer = () => /*#__PURE__*/_jsx("footer", {
  className: "bg-26A69A text-white p-4 text-center",
  children: /*#__PURE__*/_jsx("p", {
    children: "\xA9 2025 Julie's Fuel Stop. All rights reserved."
  })
});
const HomePage = () => /*#__PURE__*/_jsxs("div", {
  className: "content text-center",
  children: [/*#__PURE__*/_jsx("h2", {
    className: "text-4xl font-bold mb-4",
    style: {
      color: '#26A69A'
    },
    children: "Welcome to Julie's Fuel Stop"
  }), /*#__PURE__*/_jsx("p", {
    className: "text-lg mb-6",
    children: "Your one-stop shop for delicious deli food and fuel services!"
  }), /*#__PURE__*/_jsx("button", {
    className: "button",
    children: "Explore Menu"
  })]
});
const PromotionsPage = () => /*#__PURE__*/_jsxs("div", {
  className: "content",
  children: [/*#__PURE__*/_jsx("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#26A69A'
    },
    children: "Promotions"
  }), /*#__PURE__*/_jsx("div", {
    className: "card",
    children: promotions.map((promo, index) => /*#__PURE__*/_jsx("p", {
      className: "text-lg text-center",
      children: promo
    }, index))
  })]
});
const MenuPage = _ref3 => {
  let {
    addToCart,
    removeFromCart,
    cartItems
  } = _ref3;
  return /*#__PURE__*/_jsxs("div", {
    className: "content",
    children: [/*#__PURE__*/_jsx("h2", {
      className: "text-3xl font-bold mb-6 text-center",
      style: {
        color: '#26A69A'
      },
      children: "Menu"
    }), /*#__PURE__*/_jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6",
      children: menuItems.map((item, index) => /*#__PURE__*/_jsx(MenuItem, {
        item: item,
        onAddToCart: addToCart,
        onRemoveFromCart: removeFromCart,
        isInCart: cartItems.some(cartItem => cartItem.name === item.name)
      }, "".concat(item.name, "-").concat(index)))
    })]
  });
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
  return /*#__PURE__*/_jsx("div", {
    className: "content",
    children: /*#__PURE__*/_jsx(Cart, {
      cartItems: cartItems,
      removeFromCart: removeFromCart,
      taxRate: taxRate,
      tipAmount: tipAmount,
      setTipAmount: setTipAmount,
      onPay: onPay
    })
  });
};
const ReviewsPage = () => /*#__PURE__*/_jsxs("div", {
  className: "content",
  children: [/*#__PURE__*/_jsx("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#26A69A'
    },
    children: "Reviews"
  }), /*#__PURE__*/_jsxs("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "card",
      children: [/*#__PURE__*/_jsx("p", {
        className: "italic",
        children: "\"Best turkey sandwich in town!\""
      }), /*#__PURE__*/_jsx("p", {
        className: "text-right font-semibold mt-2",
        children: "- Sarah M."
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "card",
      children: [/*#__PURE__*/_jsx("p", {
        className: "italic",
        children: "\"Great fuel stop experience!\""
      }), /*#__PURE__*/_jsx("p", {
        className: "text-right font-semibold mt-2",
        children: "- John D."
      })]
    })]
  })]
});
const AboutPage = () => /*#__PURE__*/_jsxs("div", {
  className: "content",
  children: [/*#__PURE__*/_jsx("h2", {
    className: "text-3xl font-bold mb-6 text-center",
    style: {
      color: '#26A69A'
    },
    children: "About Us"
  }), /*#__PURE__*/_jsx("div", {
    className: "card",
    children: /*#__PURE__*/_jsx("p", {
      className: "text-lg",
      children: "Julie's Fuel Stop, located in Knoxville, TN, offers deli delights, fuel, and more with over 4 decades of experience."
    })
  })]
});
const ContactPage = () => /*#__PURE__*/_jsxs("div", {
  className: "content text-center",
  children: [/*#__PURE__*/_jsx("h2", {
    className: "text-3xl font-bold mb-6",
    style: {
      color: '#26A69A'
    },
    children: "Contact Us"
  }), /*#__PURE__*/_jsxs("div", {
    className: "card",
    children: [/*#__PURE__*/_jsx("p", {
      className: "text-lg mb-2",
      children: "Email: juliesfuelstop@gmail.com"
    }), /*#__PURE__*/_jsx("p", {
      className: "text-lg mb-2",
      children: "Address: 3522 E Governor John Sevier Hwy, Knoxville, TN 37914"
    }), /*#__PURE__*/_jsx("p", {
      className: "text-lg",
      children: "Phone: (865) 337-7493"
    })]
  })]
});
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
  if (!routerReady) return /*#__PURE__*/_jsx("div", {
    className: "loading",
    children: "Loading..."
  });
  return /*#__PURE__*/_jsx(ErrorBoundary, {
    children: /*#__PURE__*/_jsxs(BrowserRouter, {
      children: [/*#__PURE__*/_jsx(Navbar, {}), /*#__PURE__*/_jsxs(Routes, {
        children: [/*#__PURE__*/_jsx(Route, {
          path: "/",
          element: /*#__PURE__*/_jsx(HomePage, {})
        }), /*#__PURE__*/_jsx(Route, {
          path: "/menu",
          element: /*#__PURE__*/_jsx(MenuPage, {
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            cartItems: cartItems
          })
        }), /*#__PURE__*/_jsx(Route, {
          path: "/promotions",
          element: /*#__PURE__*/_jsx(PromotionsPage, {})
        }), /*#__PURE__*/_jsx(Route, {
          path: "/cart",
          element: /*#__PURE__*/_jsx(CartPage, {
            cartItems: cartItems,
            removeFromCart: removeFromCart,
            taxRate: 0.0925,
            tipAmount: tipAmount,
            setTipAmount: setTipAmount,
            onPay: handlePayment
          })
        }), /*#__PURE__*/_jsx(Route, {
          path: "/reviews",
          element: /*#__PURE__*/_jsx(ReviewsPage, {})
        }), /*#__PURE__*/_jsx(Route, {
          path: "/about",
          element: /*#__PURE__*/_jsx(AboutPage, {})
        }), /*#__PURE__*/_jsx(Route, {
          path: "/contact",
          element: /*#__PURE__*/_jsx(ContactPage, {})
        })]
      }), /*#__PURE__*/_jsx(Footer, {})]
    })
  });
};
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(/*#__PURE__*/_jsx(App, {}));
