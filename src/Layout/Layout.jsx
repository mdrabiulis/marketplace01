import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Baner from "../Components/Baner/Baner";
import Product from "../Components/Product/Product";

const Layout = () => {
  return (
    <>
      <div className="max-w-full">
        <Navbar></Navbar>
        <div className="flex max-w-full justify-between">
          <div className="bg-gray-200 w-[30%]">
            <Product></Product>
          </div>
          <div className="max-w-[70%]">
            <Baner></Baner>
          </div>
        </div>
        <div className="mx-36">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
