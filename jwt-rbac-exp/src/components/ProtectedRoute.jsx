import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  // Wait while authentication state is being checked
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // User is not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // User is logged in but does not have permission
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // User is authenticated and authorized
  return children;
};

export default ProtectedRoute;