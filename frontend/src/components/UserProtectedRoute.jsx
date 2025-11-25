// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { UserDataContext } from "../context/UserContext";

// const UserProtectedRoute = ({ children }) => {
//   const { user } = useContext(UserDataContext);

//   // Check if user is logged in
//   if (!user || !user.email) {
//     return <Navigate to="/userlogin" replace />;
//   }

//   return children;
// };

// export default UserProtectedRoute;

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const UserProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(UserDataContext);

  // 1. If still checking backend, show nothing or a spinner
  if (loading) {
    return <div>Loading...</div>; // Or a nice Spinner component
  }

  // 2. If check finishes and no user, Redirect
  if (!user || !user.email) {
    return <Navigate to="/userlogin" replace />;
  }

  // 3. User exists, render page
  return children;
};

export default UserProtectedRoute;
