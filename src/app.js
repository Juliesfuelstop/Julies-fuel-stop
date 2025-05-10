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
        Food: [
          { id: 1, name: 'Burger', price: 5.99, description: 'Juicy beef patty with fresh veggies.' },
          { id: 2, name: 'Pizza Slice', price: 3.99, description: 'Cheesy slice with your favorite toppings.' },
          { id: 3, name: 'Hot Dog', price: 2.99, description: 'Classic hot dog with mustard and ketchup.' },
        ],
        Drinks: [
          { id: 4, name: 'Cola', price: 1.99, description: 'Refreshing cola drink.' },
          { id: 5, name: 'Lemonade', price: 2.49, description: 'Freshly squeezed lemonade.' },
          { id: 6, name: 'Coffee', price: 1.79, description: 'Hot brewed coffee.' },
        ],
        Snacks: [
          { id: 7, name: 'Chips', price: 1.29, description: 'Crispy potato chips.' },
          { id: 8, name: 'Candy Bar', price: 1.49, description: 'Sweet chocolate bar.' },
          { id: 9, name: 'Pretzels', price: 1.19, description: 'Salty pretzel sticks.' },
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