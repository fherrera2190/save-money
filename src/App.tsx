import { useEffect, useState } from "react";
import { ListProducts } from "./components/ListProducts";
import { Navbar } from "./components/Navbar";
import { OptionsMarket } from "./components/OptionsMarket";

function App() {
  //console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.querySelector("html")!.classList.add("dark");
  }
  const [search, setSearch] = useState<string>("");

  // const { data, isLoading, hasError } = useFetch("");

  const getSearch = (text: string) => {
    setSearch(text);
  };
  console.log("me dispare");

  useEffect(() => {
    if (search === "") return;
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="flex flex-grow">
        <OptionsMarket getSearch={getSearch} />
        <ListProducts />
      </div>
    </>
  );
}

export default App;
