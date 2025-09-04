import CustomPagination from "@/components/custom/CustomPagination";
import { products } from "@/mocks/product.mock";
import CustomJumbotron from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import useProducts from "@/shop/hooks/useProducts";

const HomePage = () => {
  const { data } = useProducts();

  return (
    <>
      <CustomJumbotron title="Todos los productos" />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={7} />
    </>
  );
};

export default HomePage;
