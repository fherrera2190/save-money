import { AppRouter } from "./routes/AppRouter";

function App() {
  //console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.querySelector("html")!.classList.add("dark");
  }

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
