import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

import "./ProductCategory.css";

const ProductCategory = () => {
  return (
    <div className="pl-40 pt-9">
      <ul className="">
        <li>
          <Link className="flex justify-between pr-8  items-center " to={"/"}>
            Smartphones <GoChevronRight className="w-6 h-6"></GoChevronRight>
          </Link>
        </li>
        <li>
          <Link className="flex justify-between pr-8 items-center gap-24" to={"/"}>
            Lifestyle <GoChevronRight className="w-6 h-6"></GoChevronRight>
          </Link>
        </li>
        <li>
          <Link className="flex justify-between pr-8 items-center gap-24" to={"/"}>
            Computers <GoChevronRight className="w-6 h-6"></GoChevronRight>
          </Link>
        </li>
        <li>
          <Link className="flex justify-between pr-8 items-center gap-24" to={"/"}>
            Mobile Accessories{" "}
            <GoChevronRight className="w-6 h-6"></GoChevronRight>
          </Link>
        </li>
        <li>
          <Link className="flex justify-between pr-8 items-center gap-24" to={"/"}>
            Computer Accessories{" "}
            <GoChevronRight className="w-6 h-6"></GoChevronRight>
          </Link>
        </li>
        <li>
          <Link className="flex justify-between pr-8 items-center gap-24" to={"/"}>
            Electronics & Appliances{" "}
            <GoChevronRight className="w-6 h-6"></GoChevronRight>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductCategory;
