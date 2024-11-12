import { Shop } from "./Shop";

export const ContainerShop = () => {
  return (
    <ul
      className=" px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownSearchButton"
    >
      <Shop />
    </ul>
  );
};
