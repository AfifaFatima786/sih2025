// import React, { createContext, useState } from "react";

// export const UserDataContext = createContext();

// const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // user object or null

//   // simple logout function
//   const logout = () => setUser(null);

//   return (
//     <UserDataContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </UserDataContext.Provider>
//   );
// };

// export default UserContextProvider;
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserDataContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Add a loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        // IMPORTANT: withCredentials: true sends the HttpOnly cookie to backend
        const response = await axios.get("http://localhost:8080/api/auth/profile", {
          withCredentials: true,
        });

        if (response.status === 200) {
          setUser(response.data); // Set user data from backend response
        }
      } catch (error) {
        console.log("No active session found");
        setUser(null);
      } finally {
        setLoading(false); // Stop loading regardless of success/fail
      }
    };

    checkUserSession();
  }, []);

  return (
    <UserDataContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContextProvider;