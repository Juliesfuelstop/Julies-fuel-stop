import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

// Fallback component for errors
const ErrorFallback = ({ error }) => {
  console.error("Error caught in ErrorBoundary:", error);
  return React.createElement("div", { role: "alert", className: "p-4 text-red-500" },
    React.createElement("p", null, "Something went wrong:"),
    React.createElement("pre", null, error.message)
  );
};

const Navbar = () => (
  React.createElement("nav", { className: "bg-amber-800 p-4 flex items-center justify-between" },
    React.createElement("div", { className: "flex items-center" },
      React.createElement("img", { src: "/images/logo.png", alt: "Julie's Fuel Stop Logo", className: "h-10 mr-4" }),
      React.createElement("div", { className: "text-2xl font-bold text-white" }, "Julie's Fuel Stop")
    )
  )
);

const MenuItem = ({ name, description, price }) => (
  React.createElement("div", { className: "bg-white p-4 rounded-lg shadow-md m-2 transition-transform duration-200 hover:scale-105 hover:shadow-lg" },
    React.createElement("h3", { className: "text-lg font-semibold" }, name),
    React.createElement("p", { className: "text-gray-600" }, description),
    React.createElement("p", { className: "text-gray-800 font-bold" }, `$${price.toFixed(2)}`)
  )
);

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const menuItems = {
    breakfast: [
      { name: 'Pancakes', description: 'Fluffy pancakes with maple syrup and butter', price: 6.99 },
      { name: 'Omelette', description: 'Three-egg omelette with cheese, ham, and peppers', price: 7.99 },
      { name: 'French Toast', description: 'Cinnamon-spiced French toast with berries', price: 6.49 },
    ],
    lunchDinner: [
      { name: 'Burger', description: 'Juicy beef burger with fries and coleslaw', price: 9.99 },
      { name: 'Grilled Chicken', description: 'Herb-marinated chicken with roasted veggies', price: 10.99 },
      { name: 'BBQ Ribs', description: 'Slow-cooked ribs with BBQ sauce and mashed potatoes', price: 12.99 },
    ],
    extras: [
      { name: 'Fries', description: 'Crispy golden fries with sea salt', price: 3.99 },
      { name: 'Soda', description: 'Cold refreshing drink (Coke, Sprite, or Fanta)', price: 2.49 },
      { name: 'Milkshake', description: 'Vanilla, chocolate, or strawberry shake', price: 4.49 },
    ],
  };

  return (
    React.createElement("div", { className: "p-4" },
      React.createElement("div", { className: "flex space-x-4 mb-4" },
        ['breakfast', 'lunchDinner', 'extras'].map(tab => (
          React.createElement("button", {
            key: tab,
            className: `px-4 py-2 rounded transition-transform duration-200 ${activeTab === tab ? 'bg-indigo-600 text-white scale-105' : 'bg-gray-200 hover:scale-105'}`,
            onClick: () => setActiveTab(tab)
          }, tab.charAt(0).toUpperCase() + tab.slice(1).replace('lunchDinner', 'Lunch & Dinner'))
        ))
      ),
      React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" },
        menuItems[activeTab].map((item, index) => (
          React.createElement(MenuItem, { key: index, ...item })
        ))
      )
    )
  );
};

const App = () => (
  React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-amber-100 to-red-100" },
    React.createElement(ErrorBoundary, { FallbackComponent: ErrorFallback },
      React.createElement(Navbar, null),
      React.createElement(MenuPage, null)
    )
  )
);

export default App;

const root = createRoot(document.getElementById("root"));
root.render(React.createElement(ErrorBoundary, null, React.createElement(App, null)));