import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { AdminDataContext } from "../context/AdminContext";
import { useContext } from "react";


export default function AdminRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    
  });

  const { setAdmin } = useContext(AdminDataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = (e) => {
  e.preventDefault();

  axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/auth/register-admin`, // registration endpoint
      form,
      { withCredentials: true }
    )
    .then((res) => {
      console.log(res.data);
      
      // If backend returns admin info + token, set context
      if (res.data) {
        setAdmin(res.data);
        toast.success("Admin registered and logged in!");
        navigate("/admin");
      } else {
        toast.success("Admin registered! Please login.");
        navigate("/adminlogin");
      }
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err.response.data.message || "Registration failed");
      } else if (err.request) {
        console.log("Backend not running. Please start Spring Boot server.");
      } else {
        console.log("Error:", err.message);
      }
    });
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EEEEEE] p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border">
        <h2 className="text-2xl font-bold text-center text-[#0A194F] mb-6">Admin Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-[#0A194F]"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-[#0A194F]"
              placeholder="Enter admin email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-[#0A194F]"
              placeholder="Create password"
            />
          </div>

          

          <button
            type="submit"
            className="w-full bg-[#0A194F] text-white py-2 rounded-lg hover:bg-[#0c226b] transition"
          >
            Register as Admin
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/adminlogin" className="text-[#0A194F] font-semibold">Login</Link>
        </p>

        <p className="mt-1 text-center text-sm">
          Not an admin?{' '}
          <Link to="/userregister" className="text-[#0A194F] font-semibold">Register as User</Link>
        </p>
      </div>
    </div>
  );
}
