import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Fallback component for errors
const ErrorFallback = ({ error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);

const Navbar = () => (
  React.createElement("nav", { className: "bg-gray-800 p-4" },
    React.createElement("div", { className: "text-2xl font-bold text-white" }, "Julie's Fuel Stop")
  )
);

const MenuItem = ({ name, description, price }) => (
  React.createElement("div", { className: "bg-white p-4 rounded-lg shadow-md m-2" },
    React.createElement("h3", { className: "text-lg font-semibold" }, name),
    React.createElement("p", { className: "text-gray-600" }, description),
    React.createElement("p", { className: "text-gray-800 font-bold" }, `$${price.toFixed(2)}`)
  )
);

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const menuItems = {
    breakfast: [
      { name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: 6.99 },
      { name: 'Omelette', description: 'Egg omelette with cheese', price: 7.99 },
    ],
    lunchDinner: [
      { name: 'Burger', description: 'Juicy beef burger with fries', price: 9.99 },
      { name: 'Grilled Chicken', description: 'Seasoned chicken with veggies', price: 10.99 },
    ],
    extras: [
      { name: 'Fries', description: 'Crispy golden fries', price: 3.99 },
      { name: 'Soda', description: 'Cold refreshing drink', price: 2.49 },
    ],
  };

  return (
    React.createElement("div", { className: "p-4" },
      React.createElement("div", { className: "flex space-x-4 mb-4" },
        ['breakfast', 'lunchDinner', 'extras'].map(tab => (
          React.createElement("button", {
            key: tab,
            className: `px-4 py-2 rounded ${activeTab === tab ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`,
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
  React.createElement(Router, null,
    React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-indigo-100 to-gray-100" },
      React.createElement(ErrorBoundary, { FallbackComponent: ErrorFallback },
        React.createElement(Navbar, null),
        React.createElement(Switch, null,
          React.createElement(Route, { path: "/", component: MenuPage })
        )
      )
    )
  )
);

export default App;

const root = createRoot(document.getElementById("root"));
root.render(React.createElement(ErrorBoundary, null, React.createElement(App, null)));