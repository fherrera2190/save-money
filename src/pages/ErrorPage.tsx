import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Error";
    const functionRedirect = () => {
      setTimeout(() => {
        document.title = "Save money";
        navigate("/");
      }, 3000);
    };
    functionRedirect();
  }, []);

  return <div className=" flex justify-center items-center text-3xl min-h-screen">La página no existe</div>;
};
