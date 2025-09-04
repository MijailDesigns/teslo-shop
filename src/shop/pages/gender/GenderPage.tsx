import CustomPagination from "@/components/custom/CustomPagination";
import { products } from "@/mocks/product.mock";
import CustomJumbotron from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { useParams } from "react-router";

const GenderPage = () => {
  const { gender } = useParams();
  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";

  return (
    <>
      <CustomJumbotron title={`Productos para ${genderLabel}`} />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={7} />
    </>
  );
};

export default GenderPage;
