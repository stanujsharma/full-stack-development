import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <p>Welcome, {user.username}!</p>

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
        <h2>Access Control</h2>
        <p>
          Your access to application features is determined by
          your assigned role.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;