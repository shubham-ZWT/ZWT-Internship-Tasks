import type { Product, ProductResponse } from "../types/product";
import api from "./api";

const PRODUCT_BASE = "/products";

const productService = {
  getAllProducts: async (search: string = "") => {
    const url = search ? `${PRODUCT_BASE}/search?q=${search}` : PRODUCT_BASE;
    return await api.get<ProductResponse>(url);
  },

  deleteProductById: async (id: number) => {
    return api.delete<Product>(`${PRODUCT_BASE}/${id}`);
  },
};

export default productService;
