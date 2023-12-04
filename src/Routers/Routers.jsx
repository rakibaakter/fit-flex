import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Classes from "../Pages/Classes/Classes/Classes";
import ClassDetails from "../Pages/Classes/ClassDetails/ClassDetails";
import Trainers from "../Pages/Trainers/Trainers/Trainers";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/features.json"),
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/trainers",
        element: <Trainers />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "//class-details/:id",
        element: <ClassDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Routers;
