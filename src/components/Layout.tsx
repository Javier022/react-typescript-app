import { ReactNode } from "react";
import Navigation from "./Navigation";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <div className="w-11/12 mx-auto p-8">{children}</div>
    </>
  );
};

export default Layout;
