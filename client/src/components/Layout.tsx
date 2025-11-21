import {Outlet} from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <main className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 sm:mx-auto mx-12">
        {/* <main className="sm:w-10/12 lg:w-6/12 xl:w-6/12"> */}
        <Header />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
