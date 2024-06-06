import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Baner from "../Components/Baner/Baner";

const Layout = () => {
  return (
    <>
      <div className="max-w-full">
        <Navbar></Navbar>
        <Baner></Baner>
        <div className="mx-36">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
