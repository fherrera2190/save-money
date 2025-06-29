import { Product } from "../context/Product";
import { IconCart } from "./IconCart";

export const CardProduct = ({ product }: { product: Product }) => {
  return (
    <div className="group border-red-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="peer absolute top-0 right-0 h-full w-full object-contain"
          loading="lazy"
          src={product.images}
          alt="product image"
        />
        <img
          className="peer peer-hover:right-0 absolute top-0 right-96 h-full w-full object-contain transition-all delay-100 duration-1000 hover:right-0"
          src={product.seller.sellerLogo}
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
        {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span> */}
      </a>
      <div className="mt-4 px-5 pb-5">
        <h6 className="text-xl tracking-tight text-white">{product.name}</h6>
        <img
          className=" object-contain max-h-10"
          src={product.seller.sellerLogo}
          alt="product image"
        />
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            {product.Price === product.ListPrice ? (
              <span className="text-3xl font-bold text-white">
                ${product.Price}
              </span>
            ) : (
              <>
                <span className="text-3xl font-bold text-white">
                  ${product.Price}
                </span>
                <span className="text-sm text-white line-through">
                  ${product.ListPrice}
                </span>
              </>
            )}
          </p>
        </div>
        <div className="flex justify-center">
          <button className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
            <IconCart />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
