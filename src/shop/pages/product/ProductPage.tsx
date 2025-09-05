import { useCounterStore } from "@/auth/store/auth.store";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  const { count, inc, dec, incBy } = useCounterStore();
  return (
    <>
      <h1 className="text-3xl font-montserrat">Count: {count}</h1>
      <Button onClick={inc}>+1</Button>
      <Button onClick={dec}>-1</Button>
      <Button onClick={() => incBy(5)}>+5</Button>
    </>
  );
};

export default ProductPage;
