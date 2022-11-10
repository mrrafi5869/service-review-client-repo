import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/AddServices/AddServices";
import AllServices from "../components/AllServices/AllServices";
import Blog from "../components/Blog/Blog";
import DetailsUpdate from "../components/DetailsUpdate/DetailsUpdate";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import MyReviews from "../components/MyReviews/MyReviews";
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
                loader: ({params}) => fetch(`https://service-review-server-mu.vercel.app/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/allservices",
                element: <AllServices></AllServices>
            },
            {
                path: '/myservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><SendReview></SendReview></PrivateRoute>,
                loader: ({params}) => fetch(`https://service-review-server-mu.vercel.app/service/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                loader: ({params}) => fetch(`https://service-review-server-mu.vercel.app/reviews/${params.id}`)
            },
            {
                path: "/details/:id",
                element: <DetailsUpdate></DetailsUpdate>
            }
        ]
    }
])