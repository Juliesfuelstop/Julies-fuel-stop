import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItemsCount(cart.length);
    };

    // Initial load
    updateCartCount();

    // Listen for storage changes
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
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
          Cart <span className="badge">{cartItemsCount}</span>
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
    <div className="welcome-section">
      <img src="/images/logo.png" alt="Julie's Fuel Stop Logo" className="welcome-logo" />
      <h1>WELCOME to JULIE'S FUEL STOP</h1>
    </div>
    <div className="card">
      <p>Experience the best fuel stop with delicious food and refreshing drinks!</p>
      <Link to="/menu">
        <button className="button">Explore Menu</button>
      </Link>
    </div>
  </div>
);

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('Breakfast');
  const [menuItems, setMenuItems] = useState({
    Breakfast: [],
    'Lunch & Dinner': [],
    Specials: [],
    Extras: [],
    Chicken: [],
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
        Chicken: [
          { id: 96, name: 'Potato Wedges - Small', price: 2.49, description: 'Small serving of potato wedges.' },
          { id: 97, name: 'Potato Wedges - Large', price: 3.99, description: 'Large serving of potato wedges.' },
          { id: 98, name: 'Potato Wedges - Family', price: 4.99, description: 'Family-sized potato wedges.' },
          { id: 99, name: 'Honey Butter Biscuits - 1 Pc', price: 0.99, description: 'One honey butter biscuit.' },
          { id: 100, name: 'Honey Butter Biscuits - 2 Pcs', price: 1.89, description: 'Two honey butter biscuits.' },
          { id: 101, name: 'Honey Butter Biscuits - 6 Pcs', price: 4.29, description: 'Six honey butter biscuits.' },
          { id: 102, name: 'Traditional Wings - 5 Pc', price: 6.99, description: 'Five traditional wings.' },
          { id: 103, name: 'Traditional Wings - 10 Pc', price: 13.99, description: 'Ten traditional wings.' },
          { id: 104, name: 'Traditional Wings - 20 Pc', price: 27.99, description: 'Twenty traditional wings.' },
          { id: 105, name: 'Traditional Wings - 40 Pc', price: 55.99, description: 'Forty traditional wings.' },
          { id: 106, name: 'Crispy Chicken Sandwich', price: 4.99, description: 'Crispy chicken sandwich.' },
          { id: 107, name: 'Fish Sandwich', price: 4.99, description: 'Fish sandwich.' },
          { id: 108, name: 'Combo (Fries + Fountain Drink)', price: 6.99, description: 'Crispy chicken sandwich with fries and fountain drink.' },
          { id: 109, name: 'Chicken Tender Sandwich', price: 5.49, description: 'Chicken tender sandwich.' },
          { id: 110, name: 'Fish - 1 Pc', price: 4.29, description: 'One piece of fish.' },
          { id: 111, name: 'Fish - 2 Pc', price: 7.29, description: 'Two pieces of fish.' },
          { id: 112, name: 'Fish - 3 Pc', price: 10.29, description: 'Three pieces of fish.' },
          { id: 113, name: 'Chicken Meal - 12 Dark/White + 6 Tenders + 6 Biscuits + Family Fries', price: 39.99, description: '12-piece dark/white chicken, 6 tenders, 6 biscuits, and family fries.' },
          { id: 114, name: 'Chicken Meal - 12 Tenders + 6 Biscuits + Family Fries', price: 24.99, description: '12 tenders, 6 biscuits, and family fries.' },
          { id: 115, name: 'Chicken Meal - 3 Pc Tender + 1 Biscuit + Wedges + Drink', price: 8.99, description: 'Three-piece tender, one biscuit, wedges, and a drink.' },
          { id: 116, name: 'Crispy Tenders - 4 Pc', price: 7.99, description: 'Four crispy tenders.' },
          { id: 117, name: 'Crispy Tenders - 6 Pc', price: 10.99, description: 'Six crispy tenders.' },
          { id: 118, name: 'Crispy Tenders - 8 Pc', price: 14.99, description: 'Eight crispy tenders.' },
          { id: 119, name: 'Crispy Tenders - 12 Pc', price: 21.99, description: 'Twelve crispy tenders.' },
          { id: 120, name: 'Dark Chicken - Thigh', price: 2.29, description: 'One chicken thigh.' },
          { id: 121, name: 'Dark Chicken - Legs', price: 2.19, description: 'One chicken leg.' },
          { id: 122, name: 'Dark Chicken - 2 Pc', price: 4.29, description: 'Two pieces of dark chicken.' },
          { id: 123, name: 'Dark Chicken - 4 Pc', price: 8.29, description: 'Four pieces of dark chicken.' },
          { id: 124, name: 'Dark Chicken - 8 Pc', price: 16.49, description: 'Eight pieces of dark chicken.' },
          { id: 125, name: 'Dark Chicken - 25 Pc', price: 44.99, description: 'Twenty-five pieces of dark chicken.' },
          { id: 126, name: 'White Chicken - Wings', price: 2.19, description: 'One white chicken wing.' },
          { id: 127, name: 'White Chicken - 2 Pc', price: 3.69, description: 'Two pieces of white chicken.' },
          { id: 128, name: 'White Chicken - 3 Pc', price: 4.99, description: 'Three pieces of white chicken.' },
          { id: 129, name: 'White Chicken - 5 Pc', price: 7.99, description: 'Five pieces of white chicken.' },
          { id: 130, name: 'Chicken Liver', price: 3.79, description: 'Chicken liver.' },
          { id: 131, name: 'Chicken Breast', price: 3.49, description: 'One chicken breast.' },
          { id: 132, name: 'Shrimp - 5', price: 4.29, description: 'Five shrimp.' },
          { id: 133, name: 'Shrimp - 10', price: 7.29, description: 'Ten shrimp.' },
          { id: 134, name: 'Shrimp - 16', price: 10.29, description: 'Sixteen shrimp.' },
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
        <div className="menu-header">
          <p className="disclaimer">
            CONSUMING RAW OR UNDERCOOKED MEAT, POULTRY, SEAFOOD, OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS ESPECIALLY IF YOU HAVE CERTAIN MEDICAL CONDITIONS.
          </p>
          <div className="deli-hours">
            <p><strong>DELI TIME:</strong></p>
            <p>MON TO FRIDAY: 4:30AM TO 7:30PM</p>
            <p>SAT: 6:30AM TO 6PM</p>
            <p>SUN: 9AM TO 4PM</p>
          </div>
        </div>
        <div className="tabs">
          {Object.keys(menuItems).map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''} ${tab === 'Chicken' ? 'chicken-tab' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="menu-grid">
          {menuItems[activeTab].length > 0 ? (
            menuItems[activeTab].map((item) => (
              <div key={item.id} className={`menu-item ${activeTab === 'Chicken' ? 'chicken-item' : ''}`}>
                {item.image && <img src={item.image} alt={item.name} className="menu-image" />}
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price.toFixed(2)}</p>
                <button className="button" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No items available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

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

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

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
            <p className="total">Total: ${totalPrice.toFixed(2)}</p>
            <button className="button" onClick={clearCart}>
              Clear Cart
            </button>
            <p className="payment-placeholder">Online payment coming soon!</p>
          </>
        )}
      </div>
    </div>
  );
};

const PromotionsPage = () => (
  <div className="content">
    <div className="card">
      <h2>Promotions</h2>
      <video
        className="promo-video"
        src="/media/promotions.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <p>Check out our latest promotions in the slideshow above!</p>
    </div>
  </div>
);

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
      <img src="/images/fuel-stop.png" alt="Julie's Fuel Stop Location" className="about-image" />
      <p>Julie's Fuel Stop, located conveniently in Knoxville, Tennessee, is a one-stop-shop offering a wide range of convenience and specialty products. With over 4 decades of experience as Sam and Jerry's Deli and Market, Julie's continues to fulfill diverse needs of the community. From grocery must-haves to satisfying deli delights and refueling options like high-quality gasoline, customers can find what they need and more. Additionally, Julie's Fuel Stop enhances its unique offerings with a smoke shop, beer collection, and novelty items including vapes, certified THC products, providing an enjoyable shopping experience for all.</p>
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