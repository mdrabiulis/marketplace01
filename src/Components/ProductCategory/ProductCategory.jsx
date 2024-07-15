import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

import "./ProductCategory.css";

const ProductCategory = () => {
  return (
    <div className="pl-40 pt-9">
      <ul className="">
        <li>
          <Link className="flex justify-between pr-8  items-center " to={"/"}>
            Smartphones
            {/* <div className="dropdown dropdown-right dropdown-end ">
              <div tabIndex={0} role="button" className="btn m-1 ">
                <GoChevronRight className="w-6 h-6"></GoChevronRight>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box    w-52 p-2 shadow "
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div> */}
            <div className="dropdown  dropdown-right">
              <div tabIndex={0} role="button" className="">
                <GoChevronRight className="w-6 h-6"></GoChevronRight>
              </div>
              <ul
                tabIndex={0}
                // className="dropdown-content menu bg-base-100 rounded-box z-[1] w-24 h-96 ml-5 p-2 shadow overscroll-contain"
                className="dropdown-content  bg-base-100 rounded-box z-[1] w-80 h-96 ml-5 p-2 shadow overflow-y-scroll overflow-x-hidden "
              >
                <li>
                  <a>Item 1 Item 1Item 1Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                
              </ul>
            </div>
          </Link>
        </li>

        <li className="">
          <Link className="flex justify-between pr-8  items-center " to={"/"}>
            Smartphones{" "}
            <div className="dropdown  dropdown-right">
              <div tabIndex={0} role="button" className="">
                <GoChevronRight className="w-6 h-6"></GoChevronRight>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content  bg-base-100 rounded-box z-[1] w-80 h-96 ml-5 p-2 shadow overflow-y-scroll overflow-x-hidden "
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-between pr-8 items-center gap-24"
            to={"/"}
          >
            Lifestyle{" "}
            <div className="dropdown  dropdown-right  ">
              <div tabIndex={0} role="button" className="">
                <GoChevronRight className="w-6 h-6"></GoChevronRight>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content  bg-base-100 rounded-box z-[1] w-80 h-96 ml-5 p-2 shadow overflow-y-scroll overflow-x-hidden "
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-between pr-8 items-center gap-24"
            to={"/"}
          >
            Computers <GoChevronRight className="w-6 h-6"></GoChevronRight>
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-between pr-8 items-center gap-24"
            to={"/"}
          >
            Mobile Accessories{" "}
            <GoChevronRight className="w-6 h-6"></GoChevronRight>
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-between pr-8 items-center gap-24"
            to={"/"}
          >
            Computer Accessories{" "}
            <GoChevronRight className="w-6 h-6"></GoChevronRight>
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-between pr-8 items-center gap-24"
            to={"/"}
          >
            Electronics & Appliances{" "}
            <div className="dropdown dropdown-right  ">
              <div tabIndex={0} role="button" className="">
                <GoChevronRight className="w-6 h-6"></GoChevronRight>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content  bg-base-100 rounded-box z-[1] w-80 h-96 ml-5 p-2 shadow overflow-y-scroll overflow-x-hidden "
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductCategory;
