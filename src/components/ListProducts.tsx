import { Product } from "../context/Product";
import { CardProduct } from "./CardProduct";

interface ListProductsProps {
  products: Product[];
}

export const ListProducts = ({ products = [] }: ListProductsProps) => {
  if (!products) return <h1>No hay productos</h1>;

  return (
    <div className=" mx-auto flex-auto self-start grid lg:grid-cols-3 justify-center gap-16 p-3">
      {products?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};
