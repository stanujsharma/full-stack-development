import { useAuth } from "../context/AuthContext";

const Viewer = () => {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Viewer Panel</h1>

      <p>
        Welcome, <strong>{user.username}</strong>.
      </p>

      <p>
        You have <strong>Viewer</strong> permissions.
      </p>

      <div className="role-card">
        <h2>Viewer Features</h2>

        <ul>
          <li>View application content</li>
          <li>Read available information</li>
          <li>View personal profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Viewer;