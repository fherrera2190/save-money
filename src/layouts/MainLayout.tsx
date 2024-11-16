import { Navbar } from "../components/Navbar";

export const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
