import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/country/:alpha",
    element: <h1>Home</h1>,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
