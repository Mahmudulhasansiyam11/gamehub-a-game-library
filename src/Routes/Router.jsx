import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import AllGames from "../Pages/AllGames/AllGames";
import GameDetails from "../Pages/GameDetails/GameDetails";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "../Provider/PrivateRoute/PrivateRoute";
import MyProfile from "../Pages/MyProfile/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import Feature from "../Pages/Feature/Feature";
import Loading from "../Pages/Loading/Loading";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact";
import Support from "../Pages/Support/Support";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            index: true,
            path: "/",
            element: <HomeLayout></HomeLayout>,
            loader: () => fetch("/game.json"),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
            path: "/allGames",
            element: <PrivateRoute>
                <AllGames></AllGames>
            </PrivateRoute>,
             loader: () => fetch("/game.json"),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/support",
            element: <Support></Support>
        },
        {
            path: "/feature",
            element: <PrivateRoute>
                <Feature></Feature>
            </PrivateRoute>,
            loader: () => fetch("/feature.json"),
            hydrateFallbackElement: <Loading></Loading>,
            errorElement: <ErrorPage></ErrorPage>
        },
        {
            path: "/gameDetails/:id",
            element: <PrivateRoute>
                <GameDetails></GameDetails>
            </PrivateRoute>,
            loader: () => fetch("/game.json"),
            hydrateFallbackElement: <Loading></Loading>,
            errorElement: <ErrorPage></ErrorPage>
            
        },
        {
            path: "/myProfile",
            element: <PrivateRoute>
                <MyProfile></MyProfile>
            </PrivateRoute>,
            errorElement: <ErrorPage></ErrorPage>
        },
        {
            path: "/updateProfile",
            element: <PrivateRoute>
                <UpdateProfile></UpdateProfile>
            </PrivateRoute>
        },
        {
            path: "/forgetPassword",
            element: <ForgetPassword></ForgetPassword>
        },
        {
            path: "/*",
            element: <ErrorPage></ErrorPage>
        }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: "/auth/login",
            element: <Login></Login>
        },
        {
            path: "/auth/Register",
            element: <Register></Register>
        }
    ]
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;