import { useProducts } from "../queries/productQueries";
import ProductCard from "../components/ProductCard";

export default function ProductManagement() {
  const { data } = useProducts();
  console.log("from pro", data);
  return (
    <div>
      <h1>Product Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
        {data?.products
          ?.filter((product) => product.isDeleted !== true)
          .map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>
    </div>
  );
}
