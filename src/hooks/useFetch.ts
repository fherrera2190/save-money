import { useEffect, useState } from "react";
import { ProductFiltered } from "../interfaces/ProductsFiltered";
import { Product } from "../context/Product";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>;
  isLoading: boolean;
  hasError: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [state, setState] = useState<Data<T>>(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState<ErrorType>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    const fetchData = async () => {
      try {
        const resp = await fetch(url, controller);
        if (!resp.ok) {
          throw new Error("Error en la petición");
        }
        const jsonData = await resp.json();

        const filteredResults = jsonData?.reduce(
          (acc: ProductFiltered, item: Product) => {
            const ean = item.ean;
            if (!acc[ean]) {
              acc[ean] = [];
            }
            acc[ean].push(item);
            return acc;
          },
          {}
        );
        setState(filteredResults);
        setHasError(null);
      } catch (error) {
        setHasError(error as ErrorType);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data: state, isLoading, hasError };
};
