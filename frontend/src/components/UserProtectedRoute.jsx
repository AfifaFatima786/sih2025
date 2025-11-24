import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const UserProtectedRoute = ({ children }) => {
  const { user } = useContext(UserDataContext);

  // Check if user is logged in
  if (!user || !user.email) {
    return <Navigate to="/userlogin" replace />;
  }

  return children;
};

export default UserProtectedRoute;
