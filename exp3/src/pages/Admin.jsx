import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import usersData from "../data/users";

const Admin = () => {
  const { user } = useAuth();

  const [users, setUsers] = useState(usersData);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("Viewer");

  const addUser = () => {
    if (!newUsername || !newPassword) {
      alert("Please enter username and password.");
      return;
    }

    const newUser = {
      id: Date.now(),
      username: newUsername,
      password: newPassword,
      role: newRole,
    };

    setUsers([...users, newUser]);

    setNewUsername("");
    setNewPassword("");
    setNewRole("Viewer");
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const editUser = (id) => {
    const updatedUsername = prompt("Enter new username:");

    if (!updatedUsername) {
      return;
    }

    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, username: updatedUsername }
          : user
      )
    );
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <p>
        Welcome, <strong>{user.username}</strong>.
      </p>

      <p>
        You have <strong>Admin</strong> permissions.
      </p>

      <div className="role-card">
        <h2>Manage Users</h2>

        <div className="add-user-form">
          <input
            type="text"
            placeholder="Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <select
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>

          <button onClick={addUser}>Add User</button>
        </div>
      </div>

      <div className="role-card">
        <h2>User List</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                <td>{item.username}</td>

                <td>{item.role}</td>

                <td>
                  <button onClick={() => editUser(item.id)}>
                    Edit
                  </button>

                  <button
                    onClick={() => deleteUser(item.id)}
                    disabled={item.username === user.username}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="role-card">
        <h2>Admin Permissions</h2>

        <ul>
          <li>Manage users</li>
          <li>Add users</li>
          <li>Edit users</li>
          <li>Delete users</li>
          <li>Manage application settings</li>
          <li>Create, edit and delete content</li>
          <li>View all application data</li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;