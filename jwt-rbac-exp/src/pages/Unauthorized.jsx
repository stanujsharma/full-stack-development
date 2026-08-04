import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="page-container">
      <h1>Access Denied</h1>

      <p>
        You do not have permission to access this page.
      </p>

      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
};

export default Unauthorized;