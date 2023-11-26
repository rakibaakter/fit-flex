import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h2>home</h2>,
      },
    ],
  },
]);

export default Routers;
