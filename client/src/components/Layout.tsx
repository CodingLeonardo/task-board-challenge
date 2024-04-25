import {Outlet} from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <main className="sm:w-10/12 m-auto">
        <Header title="My Task Board" description="Tasks to keep organised" />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
