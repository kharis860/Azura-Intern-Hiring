import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Sidebar() {
  const items = [
    { id: 1, href: "/book", item: "Book List" },
    { id: 2, href: "/book-category", item: "Book Category List" },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  const [activeItem, setActiveItem] = useState(null);
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        {items.map((item) => (
          <NavLink
            onClick={() => handleItemClick(item.id)}
            to={item.href}
            key={item.id}
            className={({ isActive }) => {
              return isActive ? "active" : "sidebar-item";
            }}
          >
            {console.log(item.id, "ini item id")}
            {console.log(activeItem, "ini item active")}
            {item.item}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
