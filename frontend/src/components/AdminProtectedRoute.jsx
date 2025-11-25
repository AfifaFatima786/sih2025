import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminDataContext } from "../context/AdminContext";

const AdminProtectedRoute = ({ children }) => {
  const { admin } = useContext(AdminDataContext);

  if (!admin || !admin.email) {
    return <Navigate to="/adminlogin" replace />;
  }

  return children;
};

export default AdminProtectedRoute;

