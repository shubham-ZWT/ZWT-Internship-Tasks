import React, { useRef } from "react";
import DeleteProductModal from "./DeleteProductModal";
import useCart from "../store/useCart";

export default function ProductCard({ product }) {
  const deleteModalRef = useRef();

  const { addToCart } = useCart();

  return (
    <div className="flex flex-row bg-gray-200 rounded-lg p-3 gap-3 h-full">
      <DeleteProductModal ref={deleteModalRef} />
      <div className="shrink-0">
        <img
          src={product.images[0]}
          alt={product.title}
          className="bg-white rounded-xl object-contain h-32 w-32 md:h-40 md:w-40"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-semibold line-clamp-1">{product.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 md:line-clamp-3">
            {product.description}
          </p>
        </div>

        <div className="flex flex-row gap-3 mt-3 justify-between items-center">
          <div className="flex gap-3">
            <p className="bg-black text-white px-3 py-1 rounded-full text-sm">
              ${product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-white px-3 py-1 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Add to Cart
            </button>
          </div>
          <button
            className="bg-red-100 text-sm px-3 py-1 text-red-800 font-semibold border border-red-600 rounded-full"
            onClick={() => deleteModalRef.current.open(product.id)}
          >
            Remove Product
          </button>
        </div>
      </div>
    </div>
  );
}
