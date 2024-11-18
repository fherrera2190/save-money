// import { ContainerShop } from "./ContainerShop";
import { Search } from "./Search";

interface OptionsMarketProps {
  getSearch: (text: string) => void;
}

export const OptionsMarket = ({ getSearch }: OptionsMarketProps) => {
  return (
    <div className="mx-auto my-3 z-10 bg-white rounded-lg shadow w-full dark:bg-gray-700">
      <Search getSearch={getSearch} />
      {/* <ContainerShop /> */}
    </div>
  );
};
