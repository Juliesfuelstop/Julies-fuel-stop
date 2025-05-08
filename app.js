const { useState, useEffect } = React;
const { createRoot } = ReactDOM;
const { BrowserRouter, Switch, Route, Link, useHistory } = window.ReactRouterDOM || {};

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <h2 className="text-red-500 text-center p-4">Something went wrong: {this.state.error.message}</h2>;
    }
    return this.props.children;
  }
}

const menuItems = [
  // Breakfast - Biscuits
  { name: "Jelly/Butter Biscuit", price: 1.29, category: "Breakfast - Biscuits" },
  { name: "Sausage", price: 2.29, category: "Breakfast - Biscuits" },
  { name: "Sausage Egg*", price: 2.69, category: "Breakfast - Biscuits" },
  { name: "Sausage Egg Cheese*", price: 3.09, category: "Breakfast - Biscuits" },
  { name: "Bacon", price: 2.69, category: "Breakfast - Biscuits" },
  { name: "Bacon Egg*", price: 2.99, category: "Breakfast - Biscuits" },
  { name: "Bacon Egg Cheese", price: 3.49, category: "Breakfast - Biscuits" },
  { name: "Country Ham", price: 3.29, category: "Breakfast - Biscuits" },
  { name: "Egg Biscuit (1 Egg)*", price: 2.09, category: "Breakfast - Biscuits" },
  { name: "Deli Ham", price: 2.99, category: "Breakfast - Biscuits" },
  { name: "Steak", price: 3.29, category: "Breakfast - Biscuits" },
  { name: "Chicken", price: 3.09, category: "Breakfast - Biscuits" },
  { name: "Tenderloin", price: 3.25, category: "Breakfast - Biscuits" },
  { name: "Extra Egg/Cheese*", price: 0.75, category: "Breakfast - Biscuits" },
  { name: "Extra Bacon", price: 1.75, category: "Breakfast - Biscuits" },
  { name: "Extra Biscuit", price: 0.99, category: "Breakfast - Biscuits" },
  // Breakfast - Sandwiches
  { name: "BLT", price: 4.99, category: "Breakfast - Sandwiches" },
  { name: "Sausage", price: 4.99, category: "Breakfast - Sandwiches" },
  { name: "Sausage Egg/Cheese", price: 5.09, category: "Breakfast - Sandwiches" },
  { name: "Sausage Egg Cheese*", price: 5.25, category: "Breakfast - Sandwiches" },
  { name: "Bacon", price: 4.99, category: "Breakfast - Sandwiches" },
  { name: "Bacon Egg/Cheese*", price: 5.09, category: "Breakfast - Sandwiches" },
  { name: "Bacon Egg Cheese*", price: 5.25, category: "Breakfast - Sandwiches" },
  { name: "Country Ham + Egg*", price: 5.35, category: "Breakfast - Sandwiches" },
  { name: "Deli Ham + Egg*", price: 5.35, category: "Breakfast - Sandwiches" },
  { name: "Chuckwagon", price: 5.35, category: "Breakfast - Sandwiches" },
  { name: "Bologna + Egg + Cheese*", price: 5.29, category: "Breakfast - Sandwiches" },
  { name: "Bologna", price: 4.09, category: "Breakfast - Sandwiches" },
  { name: "Grilled Cheese", price: 3.49, category: "Breakfast - Sandwiches" },
  { name: "Egg Sandwich*", price: 3.49, category: "Breakfast - Sandwiches" },
  { name: "Grilled Ham and Cheese", price: 5.09, category: "Breakfast - Sandwiches" },
  // Breakfast - Special
  { name: "Small Biscuit Gravy", price: 3.19, category: "Breakfast - Special" },
  { name: "Large Biscuit Gravy", price: 4.29, category: "Breakfast - Special" },
  { name: "Breakfast Burritos", price: 3.99, category: "Breakfast - Special" },
  { name: "Breakfast Pizzas + Drink", price: 3.49, category: "Breakfast - Special" },
  { name: "Breakfast Plate* (2 Eggs, Sausage/Bacon, Small Gravy)", price: 6.49, category: "Breakfast - Special" },
  // Lunch & Dinner - Burger
  { name: "Hamburger", price: 4.59, category: "Lunch & Dinner - Burger" },
  { name: "Double Hamburger", price: 5.99, category: "Lunch & Dinner - Burger" },
  { name: "Cheeseburger", price: 5.99, category: "Lunch & Dinner - Burger" },
  { name: "Double Cheeseburger", price: 6.79, category: "Lunch & Dinner - Burger" },
  { name: "Chili Cheeseburger", price: 6.29, category: "Lunch & Dinner - Burger" },
  { name: "Bacon Cheeseburger", price: 6.29, category: "Lunch & Dinner - Burger" },
  { name: "Double Bacon Cheeseburger", price: 6.99, category: "Lunch & Dinner - Burger" },
  { name: "Jalapeno Cheeseburger", price: 5.99, category: "Lunch & Dinner - Burger" },
  { name: "Double Bacon Hamburger", price: 6.49, category: "Lunch & Dinner - Burger" },
  // Lunch & Dinner - Hotdog
  { name: "Chili Bun/Hotdog Plain", price: 1.49, category: "Lunch & Dinner - Hotdog" },
  { name: "Hotdog - Chili", price: 2.19, category: "Lunch & Dinner - Hotdog" },
  { name: "Hotdog - Chili Slaw", price: 2.59, category: "Lunch & Dinner - Hotdog" },
  { name: "Hotdog - Chili Cheese", price: 2.59, category: "Lunch & Dinner - Hotdog" },
  { name: "Hotdog - Chili Cheese Slaw", price: 2.99, category: "Lunch & Dinner - Hotdog" },
  // Lunch & Dinner - Hoggie/Subs
  { name: "Hoggie", price: 7.49, category: "Lunch & Dinner - Hoggie/Subs" },
  { name: "Ham", price: 7.49, category: "Lunch & Dinner - Hoggie/Subs" },
  { name: "Turkey", price: 7.49, category: "Lunch & Dinner - Hoggie/Subs" },
  { name: "Corn Beef", price: 7.49, category: "Lunch & Dinner - Hoggie/Subs" },
  { name: "Roast Beef", price: 7.49, category: "Lunch & Dinner - Hoggie/Subs" },
  { name: "Chicken Club", price: 7.29, category: "Lunch & Dinner - Hoggie/Subs" },
  { name: "Club", price: 7.29, category: "Lunch & Dinner - Hoggie/Subs" },
  { name: "Philly", price: 7.99, category: "Lunch & Dinner - Hoggie/Subs" },
  // Lunch & Dinner - Salads
  { name: "Small Chef", price: 6.29, category: "Lunch & Dinner - Salads" },
  { name: "Large Chef", price: 7.49, category: "Lunch & Dinner - Salads" },
  { name: "Extra Egg/Cheese/Sauce", price: 1.00, category: "Lunch & Dinner - Salads" },
  { name: "Extra Meat", price: 1.99, category: "Lunch & Dinner - Salads" },
  // Lunch & Dinner - Specials
  { name: "2 Hotdogs", price: 6.99, category: "Lunch & Dinner - Specials (Fries/Drink-20oz)" },
  { name: "Cheeseburger", price: 7.99, category: "Lunch & Dinner - Specials (Fries/Drink-20oz)" },
  { name: "Double Cheeseburger", price: 8.99, category: "Lunch & Dinner - Specials (Fries/Drink-20oz)" },
  { name: "Hoggie", price: 9.99, category: "Lunch & Dinner - Specials (Fries/Drink-20oz)" },
  { name: "Philly", price: 9.99, category: "Lunch & Dinner - Specials (Fries/Drink-20oz)" },
  { name: "Double Bacon Cheeseburger", price: 9.99, category: "Lunch & Dinner - Specials (Fries/Drink-20oz)" },
  { name: "Chicken Sandwich", price: 7.49, category: "Lunch & Dinner - Specials (Fries/Drink-20oz)" },
  // Extras - Sides
  { name: "Fries", price: 2.39, category: "Extras - Sides" },
  { name: "Large Fries", price: 3.99, category: "Extras - Sides" },
  { name: "Cheese Fries", price: 2.99, category: "Extras - Sides" },
  { name: "Chili Cheese Fries", price: 3.99, category: "Extras - Sides" },
  { name: "Corn Dogs", price: 2.19, category: "Extras - Sides" },
  { name: "Onion Rings", price: 3.49, category: "Extras - Sides" },
  { name: "Egg/Pork Rolls", price: 2.19, category: "Extras - Sides" },
  { name: "Broccoli Bites", price: 3.99, category: "Extras - Sides" },
  { name: "Jalapeno Poppers", price: 3.99, category: "Extras - Sides" },
  { name: "Large Onion Rings", price: 6.49, category: "Extras - Sides" },
  { name: "Cheesesticks", price: 3.49, category: "Extras - Sides" },
  { name: "Wedges", price: 2.49, category: "Extras - Sides" },
  { name: "Large Wedges", price: 3.99, category: "Extras - Sides" },
  { name: "Family Wedges", price: 4.99, category: "Extras - Sides" },
  { name: "Tattertots", price: 2.49, category: "Extras - Sides" },
  { name: "Fried Pickles/Tomatoes", price: 3.99, category: "Extras - Sides" },
  { name: "Fried Okra", price: 3.49, category: "Extras - Sides" },
  { name: "Corn Nuggets", price: 3.49, category: "Extras - Sides" },
  { name: "Mini Tacos", price: 3.99, category: "Extras - Sides" },
  { name: "Breaded Mushrooms", price: 3.49, category: "Extras - Sides" },
  { name: "Chicken Liver", price: 3.99, category: "Extras - Sides" },
  { name: "Chicken Gizzards", price: 3.99, category: "Extras - Sides" },
  { name: "Chicken Cheese Tortilla", price: 2.29, category: "Extras - Sides" },
  // Extras - Additional
  { name: "Toast", price: 0.79, category: "Extras - Additional" },
  { name: "2 Hashbrowns", price: 1.29, category: "Extras - Additional" },
  { name: "Sauce Cup", price: 0.49, category: "Extras - Additional" }
];

const promotions = ["10% off on all sandwiches this week!", "Free Drink with any Special purchase!"];

const MenuItem = ({ item, onAddToCart, onRemoveFromCart, isInCart }) => (
  <div className="card flex items-center">
    <div>
      <h3 className="text-xl font-semibold" style={{ color: '#87CEEB' }}>{item.name}</h3>
      <p className="text-gray-600">${item.price.toFixed(2)}</p>
      <label className="flex items-center mt-2">
        <input
          type="checkbox"
          className="mr-2"
          checked={isInCart}
          onChange={() => (isInCart ? onRemoveFromCart(item.name) : onAddToCart(item))}
        />
        <span>Add to Cart</span>
      </label>
    </div>
  </div>
);

const Cart = ({ cartItems, removeFromCart, taxRate, tipAmount, setTipAmount, onPay }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax + tipAmount;

  return (
    <div className="card">
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#87CEEB' }}>
        Cart
      </h2>
      <div className="mb-4">
        {cartItems.length ? (
          cartItems.map((item) => (
            <p className="flex justify-between" key={item.id}>
              <span>
                {item.name}: ${item.price.toFixed(2)}
              </span>
              <button className="text-red-500" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </p>
          ))
        ) : (
          <p>No items in cart.</p>
        )}
      </div>
      <div className="border-t pt-4">
        <p className="flex justify-between">
          <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span>Tax (9.25%):</span> <span>${tax.toFixed(2)}</span>
        </p>
        <div className="flex justify-between items-center mb-4">
          <span>Tip:</span>
          <div>
            <button className="button mr-2" onClick={() => setTipAmount(subtotal * 0.05)}>
              5%
            </button>
            <button className="button mr-2" onClick={() => setTipAmount(subtotal * 0.10)}>
              10%
            </button>
            <button className="button mr-2" onClick={() => setTipAmount(subtotal * 0.15)}>
              15%
            </button>
            <input
              type="number"
              placeholder="Custom $"
              className="border rounded px-2 py-1"
              min="0"
              step="0.01"
              value={tipAmount || ''}
              onChange={(e) => setTipAmount(parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>
        <p className="flex justify-between font-bold">
          <span>Total:</span> <span>${total.toFixed(2)}</span>
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#87CEEB' }}>
          Payment
        </h3>
        <div id="card-element" className="border rounded p-4 mb-4"></div>
        <div id="card-errors" className="text-red-500 mb-4"></div>
        <button className="button" onClick={() => onPay(total)}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const cartItems = React.useContext ? React.useContext(window.cartContext || { cartItems: [] }) : [];
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/logo.png';
    img.onload = () => setLogoError(false);
    img.onerror = () => setLogoError(true);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        {logoError ? (
          <span>Logo not found</span>
        ) : (
          <img src="/images/logo.png" alt="Julie's Fuel Stop Logo" className="logo-img" onError={() => setLogoError(true)} />
        )}
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/promotions">Promotions</Link>
        <Link to="/cart">
          Cart <span className="badge">{cartItems.length}</span>
        </Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-skyblue text-white p-4 text-center">
    <p>© 2025 Julie's Fuel Stop. All rights reserved.</p>
  </footer>
);

const HomePage = () => (
  <div className="content text-center">
    <h2 className="text-4xl font-bold mb-4" style={{ color: '#87CEEB' }}>
      Welcome to Julie's Fuel Stop
    </h2>
    <p className="text-lg mb-6">Your one-stop shop for delicious deli food and fuel services!</p>
    <button className="button">Explore Menu</button>
  </div>
);

const PromotionsPage = () => (
  <div className="content">
    <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#87CEEB' }}>
      Promotions
    </h2>
    <div className="card">
      {promotions.map((promo, index) => (
        <p className="text-lg text-center" key={index}>
          {promo}
        </p>
      ))}
    </div>
  </div>
);

const MenuPage = ({ addToCart, removeFromCart, cartItems }) => {
  const categories = [...new Set(menuItems.map(item => item.category))];
  console.log("Menu Items:", menuItems); // Debug log
  return (
    <div className="content">
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#87CEEB' }}>
        Menu
      </h2>
      {categories.map(category => (
        <div key={category} className="mb-6">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: '#87CEEB' }}>{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menuItems.filter(item => item.category === category).map((item, index) => (
              <MenuItem
                key={`${item.name}-${index}`}
                item={item}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
                isInCart={cartItems.some((cartItem) => cartItem.name === item.name)}
              />
            ))}
          </div>
        </div>
      ))}
      {menuItems.length === 0 && <p>No menu items available.</p>}
    </div>
  );
};

const CartPage = ({ cartItems, removeFromCart, taxRate, tipAmount, setTipAmount, onPay }) => (
  <div className="content">
    <Cart
      cartItems={cartItems}
      removeFromCart={removeFromCart}
      taxRate={taxRate}
      tipAmount={tipAmount}
      setTipAmount={setTipAmount}
      onPay={onPay}
    />
  </div>
);

const ReviewsPage = () => {
  const [reviews, setReviews] = React.useState([
    { text: '"Best turkey sandwich in town!"', author: "- Sarah M." },
    { text: '"Great fuel stop experience!"', author: "- John D." }
  ]);
  const [newReview, setNewReview] = React.useState({ text: '', author: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text && newReview.author) {
      setReviews([...reviews, { ...newReview, author: `-${newReview.author}` }]);
      setNewReview({ text: '', author: '' });
    }
  };

  return (
    <div className="content">
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#87CEEB' }}>
        Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div className="card" key={index}>
            <p className="italic">{review.text}</p>
            <p className="text-right font-semibold mt-2">{review.author}</p>
          </div>
        ))}
      </div>
      <div className="card mt-6">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#87CEEB' }}>Add a Review</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            className="border rounded w-full p-2 mb-2"
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            placeholder="Write your review"
            rows="3"
          />
          <input
            className="border rounded p-2 mb-2 w-full"
            value={newReview.author}
            onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
            placeholder="Your name"
          />
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="content">
    <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#87CEEB' }}>
      About Us
    </h2>
    <div className="card">
      <p className="text-lg">
        Julie's Fuel Stop, located in Knoxville, TN, offers deli delights, fuel, and more with over 4 decades of experience.
      </p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="content text-center">
    <h2 className="text-3xl font-bold mb-6" style={{ color: '#87CEEB' }}>
      Contact Us
    </h2>
    <div className="card">
      <p className="text-lg mb-2">Email: juliesfuelstop@gmail.com</p>
      <p className="text-lg mb-2">Address: 3522 E Governor John Sevier Hwy, Knoxville, TN 37914</p>
      <p className="text-lg">Phone: (865) 337-7493</p>
    </div>
  </div>
);

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

  const addToCart = (item) => {
    const newItem = { ...item, id: cartItemCounter };
    setCartItems([...cartItems, newItem]);
    setCartItemCounter(cartItemCounter + 1);
  };

  const removeFromCart = (id) => setCartItems(cartItems.filter((item) => item.id !== id));

  const handlePayment = async (total) => {
    if (!cartItems.length || total <= 0) {
      document.getElementById('card-errors').textContent = 'Invalid cart or total.';
      return;
    }
    if (stripe && cardElement) {
      const { error, token } = await stripe.createToken(cardElement);
      if (error) document.getElementById('card-errors').textContent = error.message;
      else {
        document.getElementById('card-errors').textContent = '';
        alert(`Payment successful! Total: $${total.toFixed(2)}, Token: ${token.id}`);
        setCartItems([]);
        setTipAmount(0);
        setCartItemCounter(0);
        cardElement.clear();
      }
    }
  };

  if (!routerReady) return <div className="loading">Loading...</div>;

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div style={{ display: 'none' }}>
          <script>window.cartContext = { cartItems: [] };</script>
        </div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/menu"
            component={() => <MenuPage addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />}
          />
          <Route path="/promotions" component={PromotionsPage} />
          <Route
            path="/cart"
            component={() => (
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                taxRate={0.0925}
                tipAmount={tipAmount}
                setTipAmount={setTipAmount}
                onPay={handlePayment}
              />
            )}
          />
          <Route path="/reviews" component={ReviewsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);