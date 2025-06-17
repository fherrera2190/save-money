import { useContext } from "react";
import { ListProducts } from "../components/ListProducts";
import { MainLayout } from "../layouts/MainLayout";
import { ShearchContext } from "../context/SearchContext";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";

export const ViewProductsPage = () => {
  const { ean = "" } = useParams();
  const { data, isLoading } = useContext(ShearchContext);
  const navigate = useNavigate();

  const keys: string[] = data ? Object.keys(data) : [];

  if (!keys.includes(ean)) {
    return <ErrorPage />;
  }

  return (
    <MainLayout>
      <>
        <div className="flex justify-center my-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-30 flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            Go to search page
          </button>
        </div>
        {!isLoading ? (
          <ListProducts products={data[+ean]} />
        ) : (
          <SpinnerLoading />
        )}
      </>
    </MainLayout>
  );
};
