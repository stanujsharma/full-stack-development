import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/postSlice";

function PostForm() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleAddPost = () => {
    if (title.trim() === "") return;

    dispatch(
      addPost({
        id: Date.now(),
        title: title,
      })
    );

    setTitle("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Enter a Post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleAddPost}>
        Add Post
      </button>
    </div>
  );
}

export default PostForm;