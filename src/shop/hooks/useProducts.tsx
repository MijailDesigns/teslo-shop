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

  const price = searchParams.get("price");
  let minPrice = undefined;
  let maxPrice = undefined;

  const query = searchParams.get("query") || undefined;

  switch (price) {
    case "any":
      break;
    case "0-50":
      minPrice = 0;
      maxPrice = 50;
      break;
    case "50-100":
      minPrice = 50;
      maxPrice = 100;
      break;
    case "100-200":
      minPrice = 100;
      maxPrice = 200;
      break;
    case "200+":
      minPrice = 200;
      maxPrice = undefined;
      break;
    default:
      break;
  }

  return useQuery({
    queryKey: [
      "products",
      { offset, limit, gender, sizes, minPrice, maxPrice, query },
    ],
    queryFn: () =>
      getProductsAction({
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
        gender,
        sizes,
        minPrice,
        maxPrice,
        query,
      }),
    staleTime: 1000 * 60 * 5,
  });
};

export default useProducts;
