import { useQuery } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.actions";
import type { Product } from "@/interfaces/product.interface";

const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
    // enabled: !!id
  });

  // TODO mutation

  const handleSubmitedForm = async (productLike: Partial<Product>) => {
    console.log({ productLike });
  };

  return {
    ...query,
    handleSubmitedForm,
  };
};

export default useProduct;
