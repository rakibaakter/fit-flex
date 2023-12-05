import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Classes from "../Pages/Classes/Classes/Classes";
import ClassDetails from "../Pages/Classes/ClassDetails/ClassDetails";
import Trainers from "../Pages/Trainers/Trainers/Trainers";
import TrainerDetails from "../Pages/Trainers/TrainerDetails/TrainerDetails";
import ApplyTrainer from "../Pages/Trainers/ApplyTrainer/ApplyTrainer";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import AllSubscriber from "../Dashboard/AdminAccess/Subscriber/AllSubscriber";

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
        path: "/trainer-details/:id",
        element: <TrainerDetails />,
      },
      {
        path: "/apply-trainer",
        element: (
          <PrivateRoutes>
            <ApplyTrainer />
          </PrivateRoutes>
        ),
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
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "all-subscribers",
        element: <AllSubscriber />,
      },
    ],
  },
]);

export default Routers;
