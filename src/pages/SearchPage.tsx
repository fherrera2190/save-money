import { useContext } from "react";
import { OptionsMarket } from "../components/OptionsMarket";
import { ShearchContext } from "../context/SearchContext";
import { MainLayout } from "../layouts/MainLayout";
import { Loading } from "../components/Loading";
import { ListFilteredProducts } from "../components/ListFilteredProducts";

export const SearchPage = () => {
  const { setSearch, data, isLoading, url } = useContext(ShearchContext);

  const getSearch = (text: string) => {
    if (text === "") {
      return;
    }
    setSearch(url + text);
  };

  return (
    <MainLayout>
      <div className="flex flex-grow flex-col">
        <OptionsMarket getSearch={getSearch} />

        {!isLoading ? <ListFilteredProducts products={data} /> : <Loading />}
      </div>
    </MainLayout>
  );
};
