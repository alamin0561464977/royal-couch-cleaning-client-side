import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/HomePage/Home";
import Services from "../../Component/Services/Services";
import Mine from "../../mine/Mine";
import ContactUs from "../../Component/ContactUs/ContactUs";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mine></Mine>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);
