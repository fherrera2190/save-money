import { Product } from "../interfaces/Product";

export const ShowCardProduct = ({ product }: { product: Product }) => {
  return (
    <div className="group border-red-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="peer absolute top-0 right-0 h-full w-full object-contain"
          loading="lazy"
          src={product.images}
          alt="product image"
        />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-white">{product.name}</h5>
        </a>
      </div>
    </div>
  );
};
