import React from "react";
import useCart from "../store/useCart";
import ProductCard from "./ProductCard";
import CartProduct from "./CartProduct";

export default function CartDetails() {
  const { items } = useCart();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl">Cart Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((product) => (
          <CartProduct product={product} />
        ))}
      </div>

      <div className=" flex flex-col gap-3">
        <p className="bg-green-100 text-green-800 border font-semibold rounded-lg py-4 px-2 text-center">
          Total Cost : ${totalPrice.toFixed(2)}
        </p>
        <div className="w-full flex justify-center items-center">
          <button className="bg-purple-100 text-purple-800 font-semibold px-3 py-1 border rounded-full w-fit">
            Pay & Order
          </button>
        </div>
      </div>
    </div>
  );
}
