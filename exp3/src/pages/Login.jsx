import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!username || !password) {
      setError("Please enter username and password.");
      return;
    }

    const success = login(username, password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>JWT Authentication</h1>
        <p>Login to access the application</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Login</button>
        </form>

        <div className="demo-credentials">
          <h3>Demo Credentials</h3>

          <p>
            <strong>Admin:</strong> admin / admin123
          </p>

          <p>
            <strong>Editor:</strong> editor / editor123
          </p>

          <p>
            <strong>Viewer:</strong> viewer / viewer123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;