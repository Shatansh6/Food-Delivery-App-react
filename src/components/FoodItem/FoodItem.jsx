import React, { useContext } from "react";
import "./FoodItem.css";
import assets from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
const FoodItem = ({ id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-image">
        <img src={image} alt="" className="image" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt=""
            className="add-img"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => removeFromCart(id)}
              className="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              onClick={() => addToCart(id)}
              className="add"
            />
          </div>
        )}
      </div>
      <div className="food-info">
        <div className="food-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-description">{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
