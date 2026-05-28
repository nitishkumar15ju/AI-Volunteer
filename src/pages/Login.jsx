import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [useremail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      useremail === "nitishkumar7707@gmail.com" &&
      password === "1234567890"
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid Password");
    }

    try {
      const response = await fetch(
        "https://workaway-backend.oe3kec.easypanel.host/api/v1/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: useremail,
            password: password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center px-4 relative">    alt="background"


  {/* BACKGROUND IMAGE */}
  <img
    src="/assets/loginbgimg.jpg"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY (optional but recommended) */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* LOGIN CARD (ON TOP OF IMAGE) */}
  <div className="relative z-10 w-full max-w-md bg-white/30 backdrop-blur-lg shadow-2xl rounded-3xl border border-white/40 p-8">

    {/* Logo */}
    {/* <div className="flex justify-center mb-5">
      <img
        src="/assets/ailogo.jpeg"
        alt="logo"
        className="w-full h-[150px] rounded-2xl shadow-lg object-cover"
      />
    </div> */}

    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-white">
      Welcome Back 👋
    </h2>

    <p className="text-center text-white/80 mt-2 mb-6">
      Login to continue
    </p>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Email */}
      <input
        type="email"
        placeholder="Enter Email"
        value={useremail}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white placeholderDon’t have an account? Sign Up-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
        required
      />
      

      {/* Forgot */}
      <div className="text-right ">
        <a className="text-sm text-blue-300 hover:underline">
          Forgot Password?
        </a>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
      >
        Login
      </button>

    </form>

    {/* Footer */}
    <p className="text-center text-sm text-white/80 mt-6">
      Don't have an account?{"  "}
      <span className="text-blue-300 font-semibold cursor-pointer hover:underline">
        Sign Up
      </span>
    </p>

  </div>
</div>
  );
};

export default Login;