import { useQuery } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.actions";

const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
    // enabled: !!id
  });

  // TODO mutation

  return {
    ...query,
  };
};

export default useProduct;
