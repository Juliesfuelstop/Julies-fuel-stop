import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items.length);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Julie's Fuel Stop Logo" className="logo-img" />
        <span>Julie's Fuel Stop</span>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/promotions">Promotions</Link>
        <Link to="/cart">
          Cart <span className="badge">{cartItems}</span>
        </Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

const HomePage = () => (
  <div className="content">
    <div className="card">
      <h1>Welcome to Julie's Fuel Stop</h1>
      <p>Experience the best fuel stop with delicious food and refreshing drinks!</p>
      <Link to="/menu">
        <button className="button">Explore Menu</button>
      </Link>
    </div>
  </div>
);

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('Food');
  const [menuItems, setMenuItems] = useState({
    Food: [],
    Drinks: [],
    Snacks: [],
  });
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setMenuItems({
      Breakfast: [
        { id: 1, name: 'Jelly/Butter Biscuit', price: 1.29, description: 'Biscuit with jelly or butter.' },
        { id: 2, name: 'Sausage Biscuit', price: 2.29, description: 'Biscuit with sausage.' },
        { id: 3, name: 'Sausage Egg Biscuit', price: 2.69, description: 'Biscuit with sausage and egg.' },
        { id: 4, name: 'Sausage Egg Cheese Biscuit', price: 3.09, description: 'Biscuit with sausage, egg, and cheese.' },
        { id: 5, name: 'Bacon Biscuit', price: 2.69, description: 'Biscuit with bacon.' },
        { id: 6, name: 'Bacon Egg Biscuit', price: 2.99, description: 'Biscuit with bacon and egg.' },
        { id: 7, name: 'Bacon Egg Cheese Biscuit', price: 3.49, description: 'Biscuit with bacon, egg, and cheese.' },
        { id: 8, name: 'Country Ham Biscuit', price: 3.29, description: 'Biscuit with country ham.' },
        { id: 9, name: 'Egg Biscuit (1 Egg)', price: 2.09, description: 'Biscuit with one egg.' },
        { id: 10, name: 'Deli Ham Biscuit', price: 2.99, description: 'Biscuit with deli ham.' },
        { id: 11, name: 'Steak Biscuit', price: 3.29, description: 'Biscuit with steak.' },
        { id: 12, name: 'Chicken Biscuit', price: 3.09, description: 'Biscuit with chicken.' },
        { id: 13, name: 'Tenderloin Biscuit', price: 3.25, description: 'Biscuit with tenderloin.' },
        { id: 14, name: 'Extra Egg/Cheese', price: 0.75, description: 'Additional egg or cheese.' },
        { id: 15, name: 'Extra Bacon', price: 1.75, description: 'Additional bacon.' },
        { id: 16, name: 'Extra Biscuit', price: 0.99, description: 'Additional biscuit.' },
        { id: 17, name: 'BLT Sandwich', price: 4.99, description: 'Bacon, lettuce, and tomato sandwich.' },
        { id: 18, name: 'Sausage Sandwich', price: 4.99, description: 'Sausage sandwich.' },
        { id: 19, name: 'Sausage Egg/Cheese Sandwich', price: 5.09, description: 'Sausage, egg, and cheese sandwich.' },
        { id: 20, name: 'Sausage Egg Cheese Sandwich', price: 5.25, description: 'Sausage, egg, and cheese sandwich.' },
        { id: 21, name: 'Bacon Sandwich', price: 4.99, description: 'Bacon sandwich.' },
        { id: 22, name: 'Bacon Egg/Cheese Sandwich', price: 5.09, description: 'Bacon, egg, and cheese sandwich.' },
        { id: 23, name: 'Bacon Egg Cheese Sandwich', price: 5.25, description: 'Bacon, egg, and cheese sandwich.' },
        { id: 24, name: 'Country Ham + Egg Sandwich', price: 5.35, description: 'Country ham and egg sandwich.' },
        { id: 25, name: 'Deli Ham + Egg Sandwich', price: 5.35, description: 'Deli ham and egg sandwich.' },
        { id: 26, name: 'Chuckwagon Sandwich', price: 5.35, description: 'Chuckwagon sandwich.' },
        { id: 27, name: 'Bologna + Egg + Cheese Sandwich', price: 5.29, description: 'Bologna, egg, and cheese sandwich.' },
        { id: 28, name: 'Bologna Sandwich', price: 4.09, description: 'Bologna sandwich.' },
        { id: 29, name: 'Grilled Cheese Sandwich', price: 3.49, description: 'Grilled cheese sandwich.' },
        { id: 30, name: 'Egg Sandwich', price: 3.49, description: 'Egg sandwich.' },
        { id: 31, name: 'Grilled Ham and Cheese Sandwich', price: 5.09, description: 'Grilled ham and cheese sandwich.' },
        { id: 32, name: 'Small Biscuit Gravy', price: 3.19, description: 'Biscuit with small gravy.' },
        { id: 33, name: 'Large Biscuit Gravy', price: 4.29, description: 'Biscuit with large gravy.' },
        { id: 34, name: 'Breakfast Burritos', price: 3.99, description: 'Breakfast burrito.' },
        { id: 35, name: 'Breakfast Pizzas + Drink', price: 3.49, description: 'Breakfast pizza with drink.' },
        { id: 36, name: 'Breakfast Plate', price: 6.49, description: '2 eggs, sausage/bacon, small gravy.' },
      ],
      'Lunch & Dinner': [
        { id: 37, name: 'Hamburger', price: 4.59, description: 'Basic hamburger.' },
        { id: 38, name: 'Double Hamburger', price: 5.99, description: 'Double patty hamburger.' },
        { id: 39, name: 'Cheeseburger', price: 5.99, description: 'Cheeseburger.' },
        { id: 40, name: 'Double Cheeseburger', price: 6.79, description: 'Double patty cheeseburger.' },
        { id: 41, name: 'Chili Cheeseburger', price: 6.29, description: 'Cheeseburger with chili.' },
        { id: 42, name: 'Bacon Cheeseburger', price: 6.29, description: 'Bacon and cheeseburger.' },
        { id: 43, name: 'Double Bacon Cheeseburger', price: 6.99, description: 'Double bacon cheeseburger.' },
        { id: 44, name: 'Jalapeno Cheeseburger', price: 5.99, description: 'Jalapeno cheeseburger.' },
        { id: 45, name: 'Double Bacon Hamburger', price: 6.49, description: 'Double bacon hamburger.' },
        { id: 46, name: 'Chili Bun/Hotdog Plain', price: 1.49, description: 'Plain chili bun or hotdog.' },
        { id: 47, name: 'Hotdog - Chili', price: 2.19, description: 'Hotdog with chili.' },
        { id: 48, name: 'Hotdog - Chili Slaw', price: 2.59, description: 'Hotdog with chili and slaw.' },
        { id: 49, name: 'Hotdog - Chili Cheese', price: 2.59, description: 'Hotdog with chili and cheese.' },
        { id: 50, name: 'Hotdog - Chili Cheese Slaw', price: 2.99, description: 'Hotdog with chili, cheese, and slaw.' },
        { id: 51, name: 'Hoggie', price: 7.49, description: 'Hoggie sandwich.' },
        { id: 52, name: 'Ham Sub', price: 7.49, description: 'Ham sub sandwich.' },
        { id: 53, name: 'Turkey Sub', price: 7.49, description: 'Turkey sub sandwich.' },
        { id: 54, name: 'Corn Beef Sub', price: 7.49, description: 'Corned beef sub sandwich.' },
        { id: 55, name: 'Roast Beef Sub', price: 7.49, description: 'Roast beef sub sandwich.' },
        { id: 56, name: 'Chicken Club', price: 7.29, description: 'Chicken club sandwich.' },
        { id: 57, name: 'Club', price: 7.29, description: 'Classic club sandwich.' },
        { id: 58, name: 'Philly', price: 7.99, description: 'Philly cheesesteak sandwich.' },
        { id: 59, name: 'Small Chef Salad', price: 6.29, description: 'Small chef salad.' },
        { id: 60, name: 'Large Chef Salad', price: 7.49, description: 'Large chef salad.' },
        { id: 61, name: 'Extra Egg/Cheese/Sauce', price: 1.00, description: 'Additional egg, cheese, or sauce.' },
        { id: 62, name: 'Extra Meat', price: 1.99, description: 'Additional meat.' },
      ],
      Specials: [
        { id: 63, name: '2 Hotdogs Special', price: 6.99, description: '2 hotdogs with fries and 20oz drink.' },
        { id: 64, name: 'Cheeseburger Special', price: 7.99, description: 'Cheeseburger with fries and 20oz drink.' },
        { id: 65, name: 'Double Cheeseburger Special', price: 8.99, description: 'Double cheeseburger with fries and 20oz drink.' },
        { id: 66, name: 'Hoggie Special', price: 9.99, description: 'Hoggie with fries and 20oz drink.' },
        { id: 67, name: 'Philly Special', price: 9.99, description: 'Philly with fries and 20oz drink.' },
        { id: 68, name: 'Double Bacon Cheeseburger Special', price: 9.99, description: 'Double bacon cheeseburger with fries and 20oz drink.' },
        { id: 69, name: 'Chicken Sandwich Special', price: 7.49, description: 'Chicken sandwich with fries and 20oz drink.' },
      ],
      Extras: [
        { id: 70, name: 'Fries', price: 2.39, description: 'Regular fries.' },
        { id: 71, name: 'Large Fries', price: 3.99, description: 'Large fries.' },
        { id: 72, name: 'Cheese Fries', price: 2.99, description: 'Fries with cheese.' },
        { id: 73, name: 'Chili Cheese Fries', price: 3.99, description: 'Fries with chili and cheese.' },
        { id: 74, name: 'Corn Dogs', price: 2.19, description: 'Corn dogs.' },
        { id: 75, name: 'Onion Rings', price: 3.49, description: 'Regular onion rings.' },
        { id: 76, name: 'Egg/Pork Rolls', price: 2.19, description: 'Egg or pork rolls.' },
        { id: 77, name: 'Broccoli Bites', price: 3.99, description: 'Broccoli bites.' },
        { id: 78, name: 'Jalapeno Poppers', price: 3.99, description: 'Jalapeno poppers.' },
        { id: 79, name: 'Large Onion Rings', price: 6.49, description: 'Large onion rings.' },
        { id: 80, name: 'Cheesesticks', price: 3.49, description: 'Cheese sticks.' },
        { id: 81, name: 'Wedges', price: 2.49, description: 'Regular wedges.' },
        { id: 82, name: 'Large Wedges', price: 3.99, description: 'Large wedges.' },
        { id: 83, name: 'Family Wedges', price: 4.99, description: 'Family-sized wedges.' },
        { id: 84, name: 'Tattertots', price: 2.49, description: 'Tater tots.' },
        { id: 85, name: 'Fried Pickles/Tomatoes', price: 3.99, description: 'Fried pickles or tomatoes.' },
        { id: 86, name: 'Fried Okra', price: 3.99, description: 'Fried okra.' },
        { id: 87, name: 'Corn Nuggets', price: 3.49, description: 'Corn nuggets.' },
        { id: 88, name: 'Mini Tacos', price: 3.99, description: 'Mini tacos.' },
        { id: 89, name: 'Breaded Mushrooms', price: 3.49, description: 'Breaded mushrooms.' },
        { id: 90, name: 'Chicken Liver', price: 3.99, description: 'Chicken liver.' },
        { id: 91, name: 'Chicken Gizzards', price: 3.99, description: 'Chicken gizzards.' },
        { id: 92, name: 'Chicken Cheese Tortilla', price: 2.29, description: 'Chicken and cheese tortilla.' },
        { id: 93, name: 'Toast', price: 0.79, description: 'Toast.' },
        { id: 94, name: '2 Hashbrowns', price: 1.29, description: 'Two hashbrowns.' },
        { id: 95, name: 'Sauce Cup', price: 0.49, description: 'Sauce cup.' },
      ],
    });
    setLoading(false);
  }, 1000);
}, []);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
  };

  if (loading) {
    return <div className="loading">Loading menu...</div>;
  }

  return (
    <div className="content">
      <div className="card">
        <h2>Menu</h2>
        <div className="tabs">
          {Object.keys(menuItems).map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="menu-grid">
          {menuItems[activeTab].map((item) => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price.toFixed(2)}</p>
              <button className="button" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PromotionsPage = () => (
  <div className="content">
    <div className="card">
      <h2>Promotions</h2>
      <p>Get a free drink with any food purchase over $5 this month!</p>
    </div>
  </div>
);

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);

    const handleStorageChange = () => {
      const updatedItems = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(updatedItems);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="content">
      <div className="card">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <button className="button" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const ReviewsPage = () => (
  <div className="content">
    <div className="card">
      <h2>Reviews</h2>
      <p>"Great food and quick service!" - John D.</p>
      <p>"Best fuel stop on the highway!" - Sarah M.</p>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="content">
    <div className="card">
      <h2>About Us</h2>
      <p>Julie's Fuel Stop has been serving travelers since 1995 with quality food and fuel.</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="content">
    <div className="card">
      <h2>Contact Us</h2>
      <p>Email: contact@juliesfuelstop.com</p>
      <p>Phone: (555) 123-4567</p>
    </div>
  </div>
);

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error('Error caught by ErrorBoundary:', error);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className="content">
        <div className="card">
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page or contact support.</p>
        </div>
      </div>
    );
  }

  return children;
};

const App = () => (
  <Router>
    <ErrorBoundary>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </ErrorBoundary>
  </Router>
);

export default App;