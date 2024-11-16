import { createContext } from "react";
import { Product } from "../interfaces/Product";

interface ContextProps {
  search: string;
  setSearch: (text: string) => void;
  data: Product[] | null;
  isLoading: boolean;
  url: string;
}

export const ShearchContext = createContext({} as ContextProps);
