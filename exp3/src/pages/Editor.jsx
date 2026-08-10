import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import initialContent from "../data/content";

const Editor = () => {
  const { user } = useAuth();

  const [content, setContent] = useState(initialContent);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState(null);

  // Add new content
  const addContent = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please enter title and description.");
      return;
    }

    const newContent = {
      id: Date.now(),
      title: title,
      description: description,
    };

    setContent([...content, newContent]);

    setTitle("");
    setDescription("");
  };

  // Start editing existing content
  const startEdit = (item) => {
    setEditingId(item.id);
    setTitle(item.title);
    setDescription(item.description);
  };

  // Update existing content
  const updateContent = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please enter title and description.");
      return;
    }

    setContent(
      content.map((item) =>
        item.id === editingId
          ? {
              ...item,
              title: title,
              description: description,
            }
          : item
      )
    );

    setEditingId(null);
    setTitle("");
    setDescription("");
  };

  // Delete existing content
  const deleteContent = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this content?"
    );

    if (!confirmDelete) {
      return;
    }

    setContent(content.filter((item) => item.id !== id));
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="page-container">
      <h1>Editor Panel</h1>

      <p>
        Welcome, <strong>{user.username}</strong>.
      </p>

      <p>
        You have <strong>Editor</strong> permissions.
      </p>

      {/* Add / Edit Content */}
      <div className="role-card">
        <h2>
          {editingId ? "Edit Existing Content" : "Add New Content"}
        </h2>

        <input
          type="text"
          placeholder="Enter content title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Enter content description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        />

        <br />
        <br />

        {editingId ? (
          <>
            <button onClick={updateContent}>
              Update Content
            </button>

            <button onClick={cancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <button onClick={addContent}>
            Add New Content
          </button>
        )}
      </div>

      {/* Existing Content */}
      <div className="role-card">
        <h2>Existing Content</h2>

        {content.length === 0 ? (
          <p>No content available.</p>
        ) : (
          content.map((item) => (
            <div className="content-item" key={item.id}>
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button onClick={() => startEdit(item)}>
                Edit
              </button>

              <button onClick={() => deleteContent(item.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Editor Permissions */}
      <div className="role-card">
        <h2>Editor Permissions</h2>

        <ul>
          <li>View existing content</li>
          <li>Add new content</li>
          <li>Edit existing content</li>
          <li>Delete assigned content</li>
        </ul>
      </div>
    </div>
  );
};

export default Editor;