import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Classes from "../Pages/Classes/Classes/Classes";

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
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Routers;
