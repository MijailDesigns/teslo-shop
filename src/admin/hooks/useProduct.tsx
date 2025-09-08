import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.actions";
import { createUpdateProductAction } from "../actions/create-update-product.action";
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
  const mutation = useMutation({
    mutationKey: [""],
    mutationFn: createUpdateProductAction,
    onSuccess: (product: Product) => {
      console.log("todo salio bien", product);
      // TODO
      // Invalidar cache
      // Actualizar queryData
    },
  });

  // const handleSubmitedForm = async (productLike: Partial<Product>) => {
  //   console.log({ productLike });
  // };

  return {
    ...query,
    mutation,
  };
};

export default useProduct;
