import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../features/postSlice";

function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Posts</h2>

      {posts.length === 0 ? (
        <p>No Posts Available</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <span>{post.title}</span>

            <button onClick={() => dispatch(deletePost(post.id))}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;