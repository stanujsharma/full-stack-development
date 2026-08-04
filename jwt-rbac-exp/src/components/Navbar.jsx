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
        <h2>JWT RBAC App</h2>
      </div>

      <div className="navbar-user">
        <span>
          {user.username} ({user.role})
        </span>

        <Link to="/dashboard">Dashboard</Link>

        {user.role === "Admin" && (
          <Link to="/admin">Admin</Link>
        )}

        {(user.role === "Admin" || user.role === "Editor") && (
          <Link to="/editor">Editor</Link>
        )}

        <Link to="/viewer">Viewer</Link>

        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;