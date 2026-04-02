import React from "react";
import useCart from "../store/useCart";

export default function CartProduct({ product }) {
  const { removeFromCart } = useCart();
  return (
    <div className="bg-white rounded-lg shadow-sm flex ">
      <div className="shrink-0">
        <img
          src={product.images[0]}
          alt={product.title}
          className="bg-white rounded-xl object-contain h-32 w-32 md:h-40 md:w-40"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex-grow p-4">
          <h3 className="font-semibold line-clamp-1">{product.title}</h3>
          <h3 className="font-semibold line-clamp-1">
            Price: ${product.price}
          </h3>
          <h3 className="font-semibold line-clamp-1">
            Quantity: {product.quantity}
          </h3>
          <button
            className="bg-amber-100 text-amber-800 font-semibold px-3 py-1 rounded-full mt-3"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}
