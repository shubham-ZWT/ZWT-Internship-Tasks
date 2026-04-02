import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import productService from "../services/productService";

const useProducts = (search: string = "") => {
  return useQuery({
    queryKey: ["products", search],
    queryFn: () => productService.getAllProducts(search),

    staleTime: 1000 * 60,
  });
};

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => productService.deleteProductById(id),

    onSuccess: () => {
      console.log("deleted");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },

    onSettled: () => {
      console.log("running settled");
    },
  });
};

export { useProducts, useDeleteProduct };
