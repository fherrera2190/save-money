import { Product } from "../context/Product";

export interface ProductFiltered {
  [key: string]: Product[];
}
