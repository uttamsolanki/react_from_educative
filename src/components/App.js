import React from "react";
import Nav from "./Nav";

const menus = [
  { key: "home", label: "Home", url: "#home" },
  { key: "product", label: "Product", url: "#product" },
  { key: "about", label: "About", url: "#about" },
  { key: "secure", label: "Secure", disabled: true, url: "secure" },
];

const App = () => {
  return <Nav items={menus} selected="home" />;
};
export default App;
