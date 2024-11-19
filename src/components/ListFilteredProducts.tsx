import { ProductFiltered } from "../interfaces/ProductsFiltered";
import { FilteredProduct } from "./FilteredProduct";

export const ListFilteredProducts = ({
  products,
}: {
  products: ProductFiltered;
}) => {
  const keys: string[] = Object.keys(products);
  return (
    <>
      <div className="mx-auto flex-auto self-start grid lg:grid-cols-3 justify-center gap-16 p-3">
        {keys.map((key) => {
          return <FilteredProduct key={key} product={products[key][0]} />;
        })}
      </div>
    </>
  );
};
