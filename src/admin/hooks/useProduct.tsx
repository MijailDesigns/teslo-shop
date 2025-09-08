import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.actions";
import { createUpdateProductAction } from "../actions/create-update-product.action";
import type { Product } from "@/interfaces/product.interface";

const useProduct = (id: string) => {
  const queryClient = useQueryClient();

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
      // Invalidar cache
      queryClient.invalidateQueries({ queryKey: ["products"] });

      // Actualizar queryData
      queryClient.setQueryData(["product", { id: product.id }], product);
    },
  });

  return {
    ...query,
    mutation,
  };
};

export default useProduct;
