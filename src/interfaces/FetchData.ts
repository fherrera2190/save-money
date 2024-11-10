import { Product } from "./Product";

export interface FetchData {
  data?: Product[];
  isLoading: boolean;
  hasError?: null;
}
