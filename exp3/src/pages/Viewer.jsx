import { useAuth } from "../context/AuthContext";

const Viewer = () => {
  const { user } = useAuth();

  const content = [
    {
      id: 1,
      title: "Introduction to JWT",
      description: "JWT is used for token-based authentication.",
    },
    {
      id: 2,
      title: "Role-Based Access Control",
      description:
        "RBAC controls application access according to user roles.",
    },
    {
      id: 3,
      title: "Secure Authentication",
      description:
        "Authentication verifies the identity of a user before granting access.",
    },
  ];

  return (
    <div className="viewer-panel">
      <h1>Viewer Panel</h1>

      <p>
        Welcome, <strong>{user.username}</strong>.
      </p>

      <p>
        You have <strong>Viewer</strong> permissions.
      </p>

      <div className="role-card">
        <h2>Available Content</h2>

        {content.map((item) => (
          <div className="content-item" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="role-card">
        <h2>Viewer Permissions</h2>

        <ul>
          <li>View application content</li>
          <li>Read available information</li>
          <li>View personal profile</li>
        </ul>

        <p>
          <strong>Note:</strong> Viewer has read-only access.
        </p>
      </div>
    </div>
  );
};

export default Viewer;