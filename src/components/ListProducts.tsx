import { CardProduct } from "./CardProduct";

export const ListProducts = () => {
  return (
    <div className="flex-auto self-start grid lg:grid-cols-3 justify-center gap-16 p-3">
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  );
};
