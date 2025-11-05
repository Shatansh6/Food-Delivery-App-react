import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";

const Cart = () => {
  const { food_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const getTotalCartAmount = () => {
    return food_list.reduce((total, item) => {
      if (cartItems[item.id] > 0) {
        total += item.price * cartItems[item.id];
      }
      return total;
    }, 0);
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="title ">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {food_list.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div className="cart-item  " key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  {cartItems[item.id]}
                  <button onClick={() => addToCart(item.id)}>+</button>
                </p>
                <p>₹{item.price * cartItems[item.id]}</p>
                <p
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌
                </p>
              </div>
            );
          }
          return null;
        })}

        {Object.keys(cartItems).length === 0 && (
          <p className="empty-cart">Your cart is empty 😔</p>
        )}
      </div>

      {getTotalCartAmount() > 0 && (
        <div className="cart-total">
          <h3>Total Amount: ₹{getTotalCartAmount()}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
