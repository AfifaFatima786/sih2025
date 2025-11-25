import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/auth/logout`,
          { withCredentials: true }
        );

        if (res.status === 200) {
          navigate("/userlogin");
        }
      } catch (err) {
        console.error("Logout failed", err);
      }
    };

    logoutUser();
  }, []); // run once

  return <div>Logging out...</div>;
};

export default Logout;
