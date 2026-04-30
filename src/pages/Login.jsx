import React, { use, useState } from "react";
import { useNavigate } from "react-router";
const Login = () => {
  const [useremail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit =async(e) => {
    e.preventDefault();
    if(useremail==="nitishkumar7707@gmail.com" && password==="1234567"){
navigate("/dashboard")

    }
    else{
      alert("Invaild password")
    }
    console.log("Email::::::::", useremail);
    console.log("Password:", password);
    

    try {
      const response = await fetch(
        "https://workaway-backend.oe3kec.easypanel.host/api/v1/auth/login",
        {
          method: "POST",
       
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


    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-200 via-blue-300 to-pink-100  ">
      <div><img src={"/assets/loginLogo.png"} alt="logo" className="border border-2 rounded-xl" /></div>
      <div className=" p-6 rounded-xl shadow-md  h-80 ">


        <h2 className="text-xl font-bold text-center mb-4 text-blue-500">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="email"
            placeholder="Enter Email"
            value={useremail}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            required
          />


          <div className="text-right text-sm">
            <a href="#" className="text-blue-500">
              Forgot Password?
            </a>
          </div>


          <button
            onClick={(handleSubmit)}
            type="Login"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Login
          </button>

        </form>
      </div>

    </div>

  );
};

export default Login;