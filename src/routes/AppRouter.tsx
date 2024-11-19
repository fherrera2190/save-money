import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchPage } from "../pages/SearchPage";
import { ViewProductsPage } from "../pages/ViewProductsPage";
import { SearchProvider } from "../context/SearchProvider";
import { ErrorPage } from "../pages/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SearchPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/products/:ean",
      element: <ViewProductsPage />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export const AppRouter = () => {
  return (
    <SearchProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </SearchProvider>
  );
};
