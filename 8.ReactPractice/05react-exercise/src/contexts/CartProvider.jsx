import React, { useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
}
