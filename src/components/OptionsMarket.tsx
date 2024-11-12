import { OptionsMarketProps } from "../interfaces/OptionsMarket";
import { ContainerShop } from "./ContainerShop";
import { Search } from "./Search";

export const OptionsMarket = ({ getSearch }:OptionsMarketProps) => {
  return (
    <div className=" z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700">
      <Search getSearch={getSearch} />
      <ContainerShop />
    </div>
  );
};
