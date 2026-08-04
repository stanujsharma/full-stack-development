import { jwtDecode } from "jwt-decode";

// Mock users
const users = [
  {
    username: "admin",
    password: "admin123",
    role: "Admin",
  },
  {
    username: "editor",
    password: "editor123",
    role: "Editor",
  },
  {
    username: "viewer",
    password: "viewer123",
    role: "Viewer",
  },
];

// Mock JWT generation
export const generateToken = (user) => {
  const header = btoa(
    JSON.stringify({
      alg: "HS256",
      typ: "JWT",
    })
  );

  const payload = btoa(
    JSON.stringify({
      username: user.username,
      role: user.role,
      iat: Date.now(),
    })
  );

  const signature = btoa("mock-signature");

  return `${header}.${payload}.${signature}`;
};

// Validate login credentials
export const loginUser = (username, password) => {
  const user = users.find(
    (user) =>
      user.username === username &&
      user.password === password
  );

  if (!user) {
    return null;
  }

  const token = generateToken(user);

  localStorage.setItem("token", token);

  return token;
};

// Get stored JWT token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Decode JWT token
export const getUserFromToken = () => {
  const token = getToken();

  if (!token) {
    return null;
  }

  try {
    const parts = token.split(".");

    if (parts.length !== 3) {
      return null;
    }

    const payload = JSON.parse(atob(parts[1]));

    return payload;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("token");
};

// Check whether user is authenticated
export const isAuthenticated = () => {
  return getUserFromToken() !== null;
};