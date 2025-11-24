import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user object or null

  // simple logout function
  const logout = () => setUser(null);

  return (
    <UserDataContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContextProvider;
