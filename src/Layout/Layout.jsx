import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Baner from "../Components/Baner/Baner";
import ProductCategory from "../Components/ProductCategory/ProductCategory";

const Layout = () => {
  return (
    <>
      <div className="max-w-full">
        <Navbar></Navbar>
        <div className="flex max-w-full justify-between">
          <div className="bg-gray-100 w-[30%]">
            <ProductCategory></ProductCategory>
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
