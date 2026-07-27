import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container">
      <h2>Redux Toolkit Post Manager</h2>

      <PostForm />

      <PostList />
    </div>
  );
}

export default App;