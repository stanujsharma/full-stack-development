import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <p>
        Welcome, <strong>{user.username}</strong>!
      </p>

      <div className="user-info">
        <h2>User Information</h2>

        <p>
          <strong>Username:</strong> {user.username}
        </p>

        <p>
          <strong>Role:</strong> {user.role}
        </p>

        <p>
          <strong>Authentication:</strong> JWT Authenticated
        </p>
      </div>

      <div className="dashboard-message">
        <h2>Role-Based Access</h2>

        <p>
          Your available features and actions depend on your assigned role.
        </p>

        {/* Admin */}
        {user.role === "Admin" && (
          <div className="role-actions">
            <h3>Admin Actions</h3>

            <p>
              As an Admin, you can manage users and application resources.
            </p>

            <div className="action-buttons">
              <Link to="/admin" className="action-button">
                Manage Users
              </Link>

              <Link to="/admin" className="action-button">
                Add User
              </Link>

              <Link to="/admin" className="action-button">
                Edit / Delete Users
              </Link>
            </div>
          </div>
        )}

        {/* Editor */}
        {user.role === "Editor" && (
          <div className="role-actions">
            <h3>Editor Actions</h3>

            <p>
              As an Editor, you can create and modify application content.
            </p>

            <div className="action-buttons">
              <Link to="/editor" className="action-button">
                Manage Content
              </Link>

              <Link to="/editor" className="action-button">
                Add Content
              </Link>

              <Link to="/editor" className="action-button">
                Edit Content
              </Link>
            </div>
          </div>
        )}

        {/* Viewer */}
        {user.role === "Viewer" && (
          <div className="role-actions">
            <h3>Viewer Actions</h3>

            <p>
              As a Viewer, you have read-only access to application content.
            </p>

            <div className="action-buttons">
              <Link to="/viewer" className="action-button">
                View Content
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;