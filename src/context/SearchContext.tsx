import { createContext } from "react";
import { ProductFiltered } from "../interfaces/ProductsFiltered";

export interface ContextProps {
  search: string;
  setSearch: (text: string) => void;
  data: ProductFiltered;
  isLoading: boolean;
  url: string;
}

export const ShearchContext = createContext({} as ContextProps);
