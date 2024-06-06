import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-400 ">
      <ul className="flex justify-end gap-4">
      {/* home */}
      <NavLink
        to="/home"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Home
      </NavLink>

      {/* Service */}
      <NavLink
        to="/service"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Service
      </NavLink>

      {/* AboutUs */}
      <NavLink
        to="AboutUs"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
       AboutUs
      </NavLink>

      {/* Page01 */}
      <NavLink
        to="/Page01"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Page01
      </NavLink>

      {/* Page02 */}
      <NavLink
        to="/Page02"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Page02
      </NavLink>

      {/* Page03 */}
      <NavLink
        to="/Page03"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Page03
      </NavLink>

      {/* Messages */}
      <NavLink
        to="/messages"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Messages
      </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
