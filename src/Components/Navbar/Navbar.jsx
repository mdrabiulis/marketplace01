import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-indigo-500 px-10">
      <Logo></Logo>
      <div className="">
        <ul className="flex justify-end gap-8 p-7 ">
          {/* home */}
          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            Home
          </NavLink>

          {/* Service */}
          <NavLink
            to="/service"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            Service
          </NavLink>
          {/* AboutUs */}
          <NavLink
            to="/aboutUs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            AboutUs
          </NavLink>

          {/* Page01 */}
          <NavLink
            to="/page01"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            Page01
          </NavLink>

          {/* Page02 */}
          <NavLink
            to="/page02"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            Page02
          </NavLink>

          {/* Page03 */}
          <NavLink
            to="/page03"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            Page03
          </NavLink>

          {/* Messages */}
          <NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            Messages
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
