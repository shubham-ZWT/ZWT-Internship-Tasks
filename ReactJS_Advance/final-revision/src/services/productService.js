import api from "./api";

const PRODUCT_BASE = "/products";

const productService = {
  getAllProducts: async (search = "") => {
    const url = search ? `${PRODUCT_BASE}/search?q=${search}` : PRODUCT_BASE;

    return await api.get(url);
  },

  deleteProductById: async (id) => await api.delete(`${PRODUCT_BASE}/${id}`),
};

export default productService;
