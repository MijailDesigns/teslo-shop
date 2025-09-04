import { useQuery } from "@tanstack/react-query";
import { getProductsAction } from "../actions/get-products.action";
import { useParams, useSearchParams } from "react-router";

const useProducts = () => {
  // todo: viene logica

  const [searchParams] = useSearchParams();

  const limit = searchParams.get("limit") || 9;
  const page = searchParams.get("page") || 1;
  const offset = (Number(page) - 1) * Number(limit);

  const { gender } = useParams();
  const sizes = searchParams.get("sizes") || undefined;

  return useQuery({
    queryKey: ["products", { offset, limit, gender, sizes }],
    queryFn: () =>
      getProductsAction({
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
        gender,
        sizes,
      }),
    staleTime: 1000 * 60 * 5,
  });
};

export default useProducts;
