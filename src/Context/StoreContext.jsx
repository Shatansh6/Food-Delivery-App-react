import React, { createContext, useState, useMemo } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (!updated[itemId]) return updated;
      updated[itemId] -= 1;
      if (updated[itemId] <= 0) delete updated[itemId];
      return updated;
    });
  };

  // 🧠 Derived count (always accurate)
  const count = useMemo(() => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    count,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
