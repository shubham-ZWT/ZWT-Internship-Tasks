import React from "react";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function Item({ itemName, itemPrice }) {
  const cart = useContext(CartContext);
  return (
    <div>
      <h3>{itemName}</h3>
      <p>{itemPrice}</p>
      <button
        onClick={() => {
          cart.setItems([...cart.items, { name: itemName, price: itemPrice }]);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
