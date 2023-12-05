import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({ children }) => {
  const { isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <progress className="progress w-56 mx-auto"></progress>
      </div>
    );
  }

  if (isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
