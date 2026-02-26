import React, { useContext, useMemo, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./Payment.css";

const Payment = () => {
  const { food_list, cartItems } = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const selectedItems = useMemo(() => {
    return food_list.filter((item) => cartItems[item.id] > 0);
  }, [food_list, cartItems]);

  const totalAmount = useMemo(() => {
    return selectedItems.reduce(
      (acc, item) => acc + item.price * cartItems[item.id],
      0
    );
  }, [selectedItems, cartItems]);

  const handlePayment = () => {
    if (selectedItems.length === 0) {
      alert("No items found.");
      return;
    }

    // Fake success
    alert(`Payment successful via ${paymentMethod}!`);
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>

      <div className="payment-container">

        <div className="payment-methods">
          <h3>Select Payment Method</h3>

          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>

          <label>
            <input
              type="radio"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Card
          </label>

          <label>
            <input
              type="radio"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>

        <div className="payment-summary">
          <h3>Order Summary</h3>

          {selectedItems.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} × {cartItems[item.id]}
              </p>
            </div>
          ))}

          <hr />
          <h2>Total: ₹{totalAmount.toFixed(2)}</h2>

          <button onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;