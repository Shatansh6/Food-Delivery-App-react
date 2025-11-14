import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import assets from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Food is an integral part of human existence, essential for sustenance
        and imbued with cultural significance.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (category === item.name) {
                setCategory("All");
              } else {
                setCategory(item.name);1
              }
            }}
            className="explore-item"
          >
            <img
              className={category === item.name ? "active" : ""}
              src={item.image}
              alt={item.name}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
