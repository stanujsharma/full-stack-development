import { createContext, useContext, useEffect, useState } from "react";
import {
  loginUser,
  getUserFromToken,
  logoutUser,
} from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check existing JWT when application starts
  useEffect(() => {
    const currentUser = getUserFromToken();

    if (currentUser) {
      setUser(currentUser);
    }

    setLoading(false);
  }, []);

  // Login
  const login = (username, password) => {
    const token = loginUser(username, password);

    if (!token) {
      return false;
    }

    const userData = getUserFromToken();

    setUser(userData);

    return true;
  };

  // Logout
  const logout = () => {
    logoutUser();
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom authentication hook
export const useAuth = () => {
  return useContext(AuthContext);
};