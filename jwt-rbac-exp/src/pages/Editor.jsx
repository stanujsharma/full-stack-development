import { useAuth } from "../context/AuthContext";

const Editor = () => {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Editor Panel</h1>

      <p>
        Welcome, <strong>{user.username}</strong>.
      </p>

      <p>
        You have <strong>Editor</strong> permissions.
      </p>

      <div className="role-card">
        <h2>Editor Features</h2>

        <ul>
          <li>View application content</li>
          <li>Create new content</li>
          <li>Edit existing content</li>
          <li>Manage assigned content</li>
        </ul>
      </div>
    </div>
  );
};

export default Editor;