import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Editor from "./pages/Editor";
import Viewer from "./pages/Viewer";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["Admin", "Editor", "Viewer"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/editor"
            element={
              <ProtectedRoute allowedRoles={["Admin", "Editor"]}>
                <Editor />
              </ProtectedRoute>
            }
          />

          <Route
            path="/viewer"
            element={
              <ProtectedRoute
                allowedRoles={["Admin", "Editor", "Viewer"]}
              >
                <Viewer />
              </ProtectedRoute>
            }
          />

          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;