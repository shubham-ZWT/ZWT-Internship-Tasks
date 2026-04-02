import React, { useState, useEffect } from "react";
import { useProducts } from "../queries/productQueries";
import ProductCard from "../components/ProductCard";
import useDebounce from "../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";

export default function ProductManagement() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchterm] = useState(searchParams.get("q") || "");
  const debouncedValue = useDebounce(searchTerm, 1000);
  const { data, isLoading } = useProducts(debouncedValue);

  useEffect(() => {
    if (debouncedValue) {
      setSearchParams({ q: debouncedValue });
    } else {
      setSearchParams({});
    }
  }, [debouncedValue, setSearchParams]);

  console.log(debouncedValue);

  console.log("here in pro manage", data);

  const handleOnChange = (e) => {
    setSearchterm(e.target.value);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Product Management</h1>
      <div className="search flex flex-col gap-1 w-full py-3">
        <label htmlFor="search" className="text-xl">
          Search Items
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          className="border border-gray-400 px-3 py-1 rounded-lg"
          placeholder="Search any Item by Name"
          onChange={handleOnChange}
        />
      </div>
      {isLoading ? (
        <div className="felx flex-row items-center justify-center">
          <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
        </div>
      ) : (
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          {data?.products
            ?.filter((product) => product.isDeleted !== true)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      )}
    </div>
  );
}
