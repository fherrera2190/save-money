import { ListProducts } from "./components/ListProducts";
import { Navbar } from "./components/Navbar";
import { OptionsMarket } from "./components/OptionsMarket";

function App() {
  console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.querySelector("html")!.classList.add("dark");
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-grow">
        <OptionsMarket />
        <ListProducts />
      </div>
    </>
  );
}

export default App;
