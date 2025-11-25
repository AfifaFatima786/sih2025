import React, { useState,useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserDataContext); // get setUser from context
  const navigate = useNavigate();

   const handleLogin = (e) => {
    e.preventDefault();

    axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/login`, { email, password }, { withCredentials: true })
      .then((res) => {
        // setUser(res.data); // store logged-in user in context
        setUser({ email });  // store the email manually

        
        toast.success("User logged in successfully!");
        navigate("/"); // redirect to dashboard
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message || "Invalid email or password");
        } else if (err.request) {
          console.log("Backend not running. Please start the server.");
        } else {
          console.log("Error:", err.message);
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 rounded-2xl shadow-xl border border-[#53629E] w-full max-w-md"
      >
        <h1 className="text-3xl font-extrabold text-center text-[#473472]">
          User Login
        </h1>
        <p className="text-center text-[#53629E] mt-2">
          Access your proposal portal
        </p>

        {/* Email */}
        <label className="block mt-6 text-[#473472] font-semibold">Email</label>
        <input
          type="email"
          className="w-full p-3 mt-2 rounded-lg border border-[#53629E]"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="block mt-4 text-[#473472] font-semibold">Password</label>
        <input
          type="password"
          className="w-full p-3 mt-2 rounded-lg border border-[#53629E]"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full bg-[#53629E] text-white p-3 rounded-lg font-bold hover:bg-[#3F4B8B] transition"
        >
          Login
        </button>

        {/* Register + Admin Option */}
        <div className="mt-6 text-center">
          <p className="text-[#473472]">
            Don’t have an account?
            <Link to="/userregister" className="text-[#3F4B8B] font-bold ml-1">
              Register
            </Link>
          </p>

          <p className="text-[#53629E] mt-3">
            Are you an admin?
            <Link to="/adminlogin" className="text-[#3F4B8B] ml-1 font-bold">
              Admin Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default UserLogin;
