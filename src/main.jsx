import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Routers/Routers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen bg-slate-950 text-gray-200 italic tracking-wider  md:tracking-widest">
      <RouterProvider router={Routers} />
    </div>
  </React.StrictMode>
);
