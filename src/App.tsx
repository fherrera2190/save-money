import { CardProduct } from "./components/CardProduct";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";

function App() {
  console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.querySelector("html")!.classList.add("dark");
  }
  return (
    <>
      <Navbar />
      <Search />
      <CardProduct />
    </>
  );
}

export default App;
