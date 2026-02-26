import React, { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { StoreContext } from "../../Context/StoreContext";

const Checkout = () => {
  const { food_list, cartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
  });

  const selectedItems = useMemo(() => {
    return food_list.filter((item) => cartItems[item.id] > 0);
  }, [food_list, cartItems]);

  const totalAmount = useMemo(() => {
    return selectedItems.reduce(
      (acc, item) => acc + item.price * cartItems[item.id],
      0
    );
  }, [selectedItems, cartItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Full Name is required";
    if (!/^[6-9]\d{9}$/.test(formData.mobile))
      return "Enter valid 10-digit Indian mobile number";
    if (!formData.address.trim()) return "Address is required";
    if (!formData.city.trim()) return "City is required";
    if (!/^\d{6}$/.test(formData.pincode))
      return "Enter valid 6-digit Pincode";
    if (selectedItems.length === 0) return "Your cart is empty";

    return null;
  };

  const handleProceed = () => {
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    // Save checkout details to session storage
    sessionStorage.setItem("checkoutData", JSON.stringify(formData));

    navigate("/payment");
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-container">
        {/* LEFT SIDE - Delivery Form */}
        <div className="checkout-left">
          <h3>Delivery Details</h3>

          <div className="checkout-form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />

            <input
              type="text"
              name="address"
              placeholder="House No / Street"
              value={formData.address}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* RIGHT SIDE - Order Summary */}
        <div className="checkout-right">
          <h3>Order Summary</h3>

          <div className="summary-items">
            {selectedItems.map((item) => (
              <div key={item.id} className="summary-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Qty: {cartItems[item.id]}</p>
                </div>
                <p>₹{item.price * cartItems[item.id]}</p>
              </div>
            ))}
          </div>

          <hr />

          <div className="summary-total">
            <h3>Total: ₹{totalAmount.toFixed(2)}</h3>
          </div>

          <button
            className="proceed-btn"
            disabled={selectedItems.length === 0}
            onClick={handleProceed}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;