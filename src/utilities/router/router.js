import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/HomePage/Home";
import Services from "../../Component/HomePage/Services/Services";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/services',
        element: <Services></Services>
    }
])