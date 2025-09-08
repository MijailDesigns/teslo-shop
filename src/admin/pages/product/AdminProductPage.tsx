import { Navigate, useParams } from "react-router";

import useProduct from "@/admin/hooks/useProduct";
import CustomFullScreenLoading from "@/components/custom/CustomFullScreenLoading";
import ProductForm from "./ui/ProductForm";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: string[];
  gender: string;
  tags: string[];
  images: string[];
}

const AdminProductPage = () => {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: product,
    handleSubmitedForm,
  } = useProduct(id || "");

  const title = id === "new" ? "Nuevo producto" : "Editar producto";
  const subtitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto.";

  if (isError) {
    return <Navigate to="/admin/products" />;
  }

  if (isLoading) {
    return <CustomFullScreenLoading />;
  }

  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  return (
    <ProductForm
      title={title}
      subTitle={subtitle}
      product={product}
      onSubmit={handleSubmitedForm}
    />
  );
};

export default AdminProductPage;
