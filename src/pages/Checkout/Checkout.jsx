import React, { useContext, useMemo } from "react";
import "./Checkout.css";
import { StoreContext } from "../../Context/StoreContext";

const Checkout = () => {
  const { food_list, cartItems } = useContext(StoreContext);

  const selectedItems = useMemo(() => {
    return food_list.filter((item) => cartItems[item.id] > 0);
  }, [food_list, cartItems]);

  const totalAmount = useMemo(() => {
    return selectedItems.reduce(
      (acc, item) => acc + item.price * cartItems[item.id],
      0
    );
  }, [selectedItems, cartItems]);

  const placeOrder = () => {
    if (selectedItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-container">
        {/* LEFT: Delivery Form */}
        <div className="checkout-left">
          <h3>Delivery Details</h3>

          <form className="checkout-form">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Mobile Number" required />
            <input type="text" placeholder="House No / Street" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Pincode" required />
          </form>

          <h3>Payment Method</h3>

          <div className="payment-options">
            <label>
              <input type="radio" name="payment" defaultChecked />
              UPI
            </label>
            <label>
              <input type="radio" name="payment" />
              Card
            </label>
            <label>
              <input type="radio" name="payment" />
              Cash on Delivery
            </label>
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="checkout-right">
          <h3>Order Summary</h3>

          <div className="summary-items">
            {selectedItems.map((item) => (
              <div key={item.id} className="summary-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>Qty: {cartItems[item.id]}</p>
                <p>₹{item.price * cartItems[item.id]}</p>
              </div>
            ))}
          </div>

          <hr />

          <h3>Total: ₹{totalAmount.toFixed(2)}</h3>

          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
