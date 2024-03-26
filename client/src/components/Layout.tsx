import {FC, ReactNode} from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
      <main className="sm:w-10/12 m-auto">
        <Header title="My Task Board" description="Tasks to keep organised" />
        <div>{children}</div>
      </main>
    </>
  );
};

export default Layout;
