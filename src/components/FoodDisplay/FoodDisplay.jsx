import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category, searchText }) => {
  const { food_list } = useContext(StoreContext);

  const filtered = food_list.filter((item) => {
    const matchCategory = category === "All" || category === item.category;
    const matchSearch =
      !searchText ||
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.category.toLowerCase().includes(searchText.toLowerCase());
      
    return matchCategory && matchSearch;
  });

  return (
    <div className="food-display" id="food-display">
      <h2 className="font-bold text-2xl">Top dishes near you</h2>

      <div className="food-display-list">
        {filtered.map((item, index) => (
          <FoodItem
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
