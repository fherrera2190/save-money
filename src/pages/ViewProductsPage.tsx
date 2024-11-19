import { useContext, useEffect } from "react";
import { ListProducts } from "../components/ListProducts";
import { MainLayout } from "../layouts/MainLayout";
import { ShearchContext } from "../context/SearchContext";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { useNavigate, useParams } from "react-router-dom";

export const ViewProductsPage = () => {
  const { ean = "" } = useParams();
  const { data, isLoading } = useContext(ShearchContext);
  const navigate = useNavigate();

  // console.log(Object.keys(data).includes(ean));
  useEffect(() => {
    // if (Object.keys(data).includes(ean) === false) {
    //   navigate("/");
    // }
  }, []);

  return (
    <MainLayout>
      <>
        <div className="flex justify-center my-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-30"
            onClick={() => navigate("/")}
          >
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
