import { useAuth } from "../context/AuthContext";

const Admin = () => {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Admin Panel</h1>

      <p>
        Welcome, <strong>{user.username}</strong>.
      </p>

      <p>
        You have <strong>Admin</strong> permissions.
      </p>

      <div className="role-card">
        <h2>Admin Features</h2>

        <ul>
          <li>Manage users</li>
          <li>Manage application settings</li>
          <li>Create, edit and delete content</li>
          <li>View all application data</li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;