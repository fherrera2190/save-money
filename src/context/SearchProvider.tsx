import { ReactNode, useState } from "react";
import { ContextProps, ShearchContext } from "./SearchContext";
import { useFetch } from "../hooks/useFetch";
import { config } from "../config/app.config";
import { ProductFiltered } from "../interfaces/ProductsFiltered";

interface Props {
  children: ReactNode;
}
const url = `${config.VITE_API_URL}/?q=`;

export const SearchProvider = ({ children }: Props) => {
  const [search, setSearch] = useState<string>(url + "gaseosas");
  const { data, isLoading } = useFetch<ProductFiltered>(search);

  return (
    <ShearchContext.Provider
      value={{ search, setSearch, data, isLoading, url } as ContextProps}
    >
      {children}
    </ShearchContext.Provider>
  );
};
