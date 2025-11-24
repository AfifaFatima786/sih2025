import React, { createContext, useState } from "react";

export const AdminDataContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null); // admin object or null

  const logout = () => setAdmin(null);

  return (
    <AdminDataContext.Provider value={{ admin, setAdmin, logout }}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminContextProvider;
