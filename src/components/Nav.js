import React from "react";

const NavItem = ({ label, disabled, onClick, active }) => {
  return (
    <li className={active ? "active" : ""}>
      <button type="button" disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </li>
  );
};
const Nav = ({ items, selected }) => {
  const isActive = (item) => {
    return item.key === selected;
  };

  const onClick = (item) => {
    window.location.href = item.url;
  };

  return (
    <ul>
      {items.map((item, i) => (
        <NavItem
          key={i}
          label={item.label}
          disabled={item.disabled}
          onClick={() => {
            onClick(item);
          }}
          active={isActive(item)}
        />
      ))}
    </ul>
  );
};

export default Nav;
