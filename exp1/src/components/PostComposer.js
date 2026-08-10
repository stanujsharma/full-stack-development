import React, { useState } from "react";
import "./PostComposer.css";

function PostComposer() {
  const limits = {
    Facebook: 50,
    Twitter: 70,
    Instagram: 80,
    LinkedIn: 100,
  };

  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = limits[platform];
  const remaining = limit - post.length;

  let status = "";
  let warning = "";
  let color = "green";

  if (remaining < 0) {
    status = "Character limit exceeded.";
    color = "red";
  } else if (post.length > 0) {
    status = "Valid Post";
    color = "green";

    if (remaining <= 20) {
      warning = "You are close to the character limit.";
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h3>Social Media Post Composer</h3>

        <label>Select Platform</label>

        <select
          value={platform}
          onChange={(e) => {
            setPlatform(e.target.value);
            setPost("");
          }}
        >
          <option>Facebook</option>
          <option>Twitter</option>
          <option>Instagram</option>
          <option>LinkedIn</option>
        </select>

        <label>Write Your Post</label>

        <textarea
          placeholder="Write post here..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

        <div className="counter">
          Characters: {post.length} / {limit}
        </div>

        {status && (
          <p
            style={{
              color: color,
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {status}
          </p>
        )}

        {warning && (
          <p
            style={{
              color: "orange",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            {warning}
          </p>
        )}

        <button disabled={remaining < 0 || post.length === 0}>
          Publish Post
        </button>
      </div>
    </div>
  );
}

export default PostComposer;