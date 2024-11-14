import { ListProductsProps } from "../interfaces/ListProductsProps";
import { CardProduct } from "./CardProduct";

export const ListProducts = ({ products }: ListProductsProps) => {
  if (!products) return <h1>No hay productos</h1>;

  return (
    <div className="flex-auto self-start grid lg:grid-cols-3 justify-center gap-16 p-3">
      {products?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};
