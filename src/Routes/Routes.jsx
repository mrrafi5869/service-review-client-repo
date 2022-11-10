import { createBrowserRouter } from "react-router-dom";
import AllServices from "../components/AllServices/AllServices";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SendReview from "../components/SendReview/SendReview";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/service/:id",
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/allservices",
                element: <AllServices></AllServices>
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><SendReview></SendReview></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            }
        ]
    }
])