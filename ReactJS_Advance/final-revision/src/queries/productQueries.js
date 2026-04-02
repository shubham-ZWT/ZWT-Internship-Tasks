import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import productService from "../services/productService";
import toast from "react-hot-toast";

const useProducts = (search = "") => {
  return useQuery({
    queryKey: ["products", search],
    queryFn: () => productService.getAllProducts(search),

    staleTime: 1000 * 60,
  });
};

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => productService.deleteProductById(id),

    onSuccess: () => {
      console.log("deleted");
      toast.success("Product Removed Successfully !!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },

    onSettled: () => {
      console.log("running settled");
    },
  });
};

export { useProducts, useDeleteProduct };
