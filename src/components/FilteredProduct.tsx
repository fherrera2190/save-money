import { Link } from "react-router-dom";
import { Product } from "../context/Product";

export const FilteredProduct = ({ product }: { product: Product }) => {
  return (
    <div className="group border-red-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
      <Link to={`/products/${product.ean}`}>
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <img
            className="peer absolute top-0 right-0 h-full w-full object-contain"
            loading="lazy"
            src={product.images}
            alt="product image"
          />
          <svg
            className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
            />
          </svg>
        </div>
        <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl tracking-tight text-white">{product.name}</h5>
        </div>
      </Link>
    </div>
  );
};
