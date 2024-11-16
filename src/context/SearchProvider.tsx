import { ReactNode, useState } from "react";
import { ShearchContext } from "./SearchContext";
import { Product } from "../interfaces/Product";
import { useFetch } from "../hooks/useFetch";
import { config } from "../config/app.config";

interface Props {
  children: ReactNode;
}
const url = `${config.VITE_API_URL}/?q=`;

export const SearchProvider = ({ children }: Props) => {
  const [search, setSearch] = useState<string>(url + "gaseosas");
  const { data, isLoading } = useFetch<Product[]>(search);

  return (
    <ShearchContext.Provider
      value={{ search, setSearch, data, isLoading, url }}
    >
      {children}
    </ShearchContext.Provider>
  );
};
