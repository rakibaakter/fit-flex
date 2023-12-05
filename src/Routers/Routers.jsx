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
import AdminRoutes from "./AdminRoutes";
import AllTrainers from "../Dashboard/AdminAccess/AllTrainers/AllTrainers";
import AppliedTrainers from "../Dashboard/AdminAccess/AppiedTrainers/AppliedTrainers";
import Balance from "../Dashboard/AdminAccess/Balance/Balance";
import Community from "../Pages/Community/Community";
import ActivityLog from "../Dashboard/UserAccess/Activity/ActivityLog";
import Profile from "../Dashboard/UserAccess/Profile/Profile";
import RecommendedClass from "../Dashboard/UserAccess/RecommendedClass/RecommendedClass";

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
        path: "/community",
        element: <Community />,
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
        element: (
          <AdminRoutes>
            <AllSubscriber />
          </AdminRoutes>
        ),
      },
      {
        path: "all-trainers",
        element: (
          <AdminRoutes>
            <AllTrainers />
          </AdminRoutes>
        ),
      },
      {
        path: "applied-trainers",
        element: (
          <AdminRoutes>
            <AppliedTrainers />
          </AdminRoutes>
        ),
      },
      {
        path: "balance",
        element: (
          <AdminRoutes>
            <Balance />
          </AdminRoutes>
        ),
      },
      {
        path: "activity-log",
        element: <ActivityLog />,
      },
      {
        path: "profile-setting",
        element: <Profile />,
      },
      {
        path: "recommended-classes",
        element: <RecommendedClass />,
      },
    ],
  },
]);

export default Routers;
