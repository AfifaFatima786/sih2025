import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";





export default function UserRegisteration() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    institution: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Prepare payload according to backend format
  const payload = {
    name: form.name,
    email: form.email,
    password: form.password,
    ...(form.institution && { institution: form.institution }) // optional
  };

  axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/register-user`, payload)
    .then((res) => {
      setUser(res.data);
      toast.success("User registered successfully!");
      navigate("/"); // redirect to user login
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err.response.data.message || "Registration failed");
      } else if (err.request) {
        console.log("Backend not running. Please start the server.");
      } else {
        console.log("Error:", err.message);
      }
    });
};

  return (
    <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-[#0A194F] mb-6 text-center">
          User Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[#0A194F] font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A194F]"
            />
          </div>

          <div>
            <label className="text-[#0A194F] font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A194F]"
            />
          </div>

          <div>
            <label className="text-[#0A194F] font-semibold">Institution Name</label>
            <input
              type="text"
              name="institution"
              value={form.institution}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A194F]"
            />
          </div>

          <div>
            <label className="text-[#0A194F] font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A194F]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0A194F] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#0c226b] duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? {" "}
          <Link to="/userlogin" className="text-[#0A194F] font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
