import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Messages from "../Pages/Messages/Messages";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Page02 from "../Pages/Page02/Page02";
import Page01 from "../Pages/Page01/Page01";
import Page03 from "../Pages/Page03/Page03";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/Home",
        element: <Home></Home>,
      },
      {
        path: "/Service",
        element: <Service></Service>,
      },
      {
        path: "/Page02",
        element: <Page02></Page02>,
      },
      {
        path: "/Page01",
        element: <Page01></Page01>,
      },
      {
        path: "/Page03",
        element: <Page03></Page03>,
      },
      {
        path: "/Messages",
        element: <Messages></Messages>,
      },
      {
        path: "/AboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

export default Router;
