// Import React and ReactDOM libraries
import React from "react";
// Import styling for the application (styles.css)
import { createRoot } from "react-dom/client";
import "./styles.css";

// Navigation menu items data
const menus = [
  { key: "home", label: "Home", url: "/" },
  {
    key: "product",
    label: "Product",
    url: "/product",
    subcategories: [
      { key: "courses", label: "Courses", url: "/product/courses" },
      { key: "plans", label: "Plans", url: "/product/plans" },
      { key: "paths", label: "Paths", url: "/product/paths" },
    ],
  },
  {
    key: "about",
    label: "About",
    url: "/about",
    subcategories: [
      { key: "history", label: "History", url: "/about/history" },
      { key: "team", label: "Team", url: "/about/team" },
    ],
  },
  { key: "secure", label: "Secure", url: "/secure", disabled: true },
];

const NavItem = ({ label, subcategories, disabled, onClick }) => {
  return (
    <li>
      <button disabled={disabled} onClick={onClick}>
        {label}
      </button>
      {subcategories ? (
        <ul className="sub-menu">
          {subcategories.map((subItem) => (
            <li key={subItem.key}>
              <a href={subItem.url}>{subItem.label}</a>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </li>
  );
};

// Nav component for rendering a list of navigation items
const Nav = ({ selected, items }) => {
  // Function to handle click events on navigation items, redirecting to the item's URL
  const onClick = (item) => {
    // Handle click event logic would be added here
    window.location.href = item.url;
  };
  // Function to check if an item is active based on its key
  const isActive = (item) => item.key === selected;

  // Placeholder JSX for the component, describing its purpose
  return (
    <ul className="nav-menu">
      {items.map((item) => (
        <NavItem
          key={item.key}
          label={item.label}
          subcategories={item.subcategories}
          isActive={isActive(item)}
          disabled={item.disabled}
          onClick={() => {
            onClick(item);
          }}
        />
      ))}
    </ul>
  );
};

// App component using Nav with predefined menu items and the selected item set to "home"
const App = () => {
  return (
    <div id="navigation-bar">
      <Nav items={menus} selected="home" />
    </div>
  );
};

// Get the root element by its ID ("root")
const rootEl = document.getElementById("root");
// Render the App component into the root element using ReactDOM
const root = createRoot(rootEl);
root.render(<App />);
