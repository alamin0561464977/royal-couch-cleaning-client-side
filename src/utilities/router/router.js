import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/HomePage/Home";
import Services from "../../Component/Services/Services";

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