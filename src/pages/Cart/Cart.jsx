import React, { useContext, useMemo } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";

const Cart = () => {
  const { food_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  if (!food_list || !cartItems) {
    return <p className="loading-text">Loading your cart...</p>;
  }

  const totalAmount = useMemo(() => {
    return food_list.reduce((acc, item) => {
      const qty = cartItems[item.id] || 0;
      return acc + item.price * qty;
    }, 0);
  }, [food_list, cartItems]);

  const isCartEmpty = !food_list.some((item) => cartItems[item.id] > 0);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {!isCartEmpty ? (
          food_list.map((item) => {
            const qty = cartItems[item.id] || 0;
            if (qty === 0) return null;

            return (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={`${item.name} image`}
                  className="cart-item-img"
                />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    −
                  </button>
                  <span>{qty}</span>
                  <button
                    className="qty-btn"
                    onClick={() => addToCart(item.id)}
                  >
                    +
                  </button>
                </div>
                <p>₹{item.price * qty}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove item"
                >
                  ❌
                </button>
              </div>
            );
          })
        ) : (
          <p className="empty-cart">Your cart is empty 😔</p>
        )}
      </div>

      {!isCartEmpty && (
        <div className="cart-total">
          <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
          <div className="cart-actions">
            <button
              className="checkout-btn"
              disabled={totalAmount <= 0}
              onClick={() => alert("Proceeding to checkout...")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
