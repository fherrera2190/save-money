import { useEffect, useState } from "react";
import { ListProducts } from "./components/ListProducts";
import { Navbar } from "./components/Navbar";
import { OptionsMarket } from "./components/OptionsMarket";
import { config } from "./config/app.config";

function App() {
  //console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.querySelector("html")!.classList.add("dark");
  }
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState([]);
  // const { data, isLoading, hasError } = useFetch("");

  const getSearch = (text: string) => {
    setSearch(text);
  };

  console.log("me dispare");

  useEffect(() => {
    const getData = async () => {
      if (search === "") return;
      const url = `${config.VITE_API_URL}/?q=${search}`;

      const resp = await fetch(url);
      const data = await resp.json();
      setData(data);
    };

    getData();
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="flex flex-grow">
        <OptionsMarket getSearch={getSearch} />
        <ListProducts products={data} />
      </div>
    </>
  );
}

export default App;
