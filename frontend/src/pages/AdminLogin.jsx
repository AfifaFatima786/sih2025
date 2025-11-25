import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { AdminDataContext } from "../context/AdminContext";


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
    const { setAdmin } = useContext(AdminDataContext);
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`, // your admin login route
        { email, password },
        { withCredentials: true } // HttpOnly cookie
      )
      .then((res) => {
        console.log(res.data);

        // set admin in context
        // setAdmin(res.data);
         setAdmin({ email }); 

        toast.success("Admin successfully logged in!");
        navigate("/admin"); // redirect to admin dashboard
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Invalid Email or Password");
        } else if (err.request) {
          console.log("Backend not running. Please start Spring Boot server.");
        } else {
          console.log("Error:", err.message);
        }
      });
  };


  return (
    <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-2xl shadow-xl border border-[#473472] w-full max-w-md"
      >
        <div className="flex justify-center mb-4">
          <ShieldCheck className="text-[#53629E]" size={48} />
        </div>

        <h1 className="text-3xl font-extrabold text-center text-[#473472]">
          Admin Login
        </h1>
        <p className="text-center text-[#53629E] mt-2">
          Authorized personnel only
        </p>

        {/* Username */}
        <label className="block mt-6 text-[#473472] font-semibold">Email</label>
        <input
          type="text"
          className="w-full p-3 mt-2 rounded-lg border border-[#53629E]"
          placeholder="Enter admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="block mt-4 text-[#473472] font-semibold">Password</label>
        <input
          type="password"
          className="w-full p-3 mt-2 rounded-lg border border-[#53629E]"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full bg-[#473472] text-white p-3 rounded-lg font-bold hover:bg-[#3F4B8B] transition"
        >
          Login as Admin
        </button>

        {/* Switch to user */}
        <div className="mt-6 text-center">
          <p className="text-[#473472]">
            Not an admin?
            <Link to="/userlogin" className="text-[#3F4B8B] ml-1 font-bold">
              User Login
            </Link>
          </p>

          <p className="text-[#53629E] mt-3">
            Don't have an account?
            <Link to="/adminregister" className="text-[#3F4B8B] ml-1 font-bold">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
