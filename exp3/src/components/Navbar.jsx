import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <strong>JWT RBAC App</strong>
      </div>

      <div className="navbar-user">
        <span>
          {user.username} ({user.role})
        </span>

        <Link to="/dashboard">Dashboard</Link>

        {user.role === "Admin" && (
          <Link to="/admin">Admin Panel</Link>
        )}

        {user.role === "Editor" && (
          <Link to="/editor">Editor Panel</Link>
        )}

        {user.role === "Viewer" && (
          <Link to="/viewer">Viewer Panel</Link>
        )}

        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;