import React from "react";
import Item from "../components/Item";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function ItemsPage() {
  const cart = useContext(CartContext);

  const totalPrice = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <Item itemName={"MacBook"} itemPrice={1000000} />
      <Item itemName={"Pen Drive"} itemPrice={6000} />
      <Item itemName={"Phone"} itemPrice={60000} />

      <div>
        <h1>CART</h1>
        {cart.items.map((item) => (
          <li>
            {item.name} - {item.price}
          </li>
        ))}

        <h1>Total : {totalPrice}</h1>
      </div>
    </div>
  );
}
