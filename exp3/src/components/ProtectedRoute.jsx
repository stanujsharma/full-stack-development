import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  // Wait until authentication state is checked
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // User is not authenticated
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // User is authenticated but does not have required role
  if (
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  // User is authenticated and authorized
  return children;
};

export default ProtectedRoute;