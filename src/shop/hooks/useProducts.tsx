import { useQuery } from "@tanstack/react-query";
import { getProductsAction } from "../actions/get-products.action";

const useProducts = () => {
  // todo: viene logica

  return useQuery({
    queryKey: ["products"],
    queryFn: getProductsAction,
  });
};

export default useProducts;
