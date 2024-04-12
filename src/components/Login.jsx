import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <form class="flex flex-col gap-5 w-96 h-[100vh] bg-gray-100 shadow-md rounded px-3 ">
        <div class="flex flex-col justify-center w-full  py-6">
          <h1 class="text-gray-800 text-xl font-bold ">Welcome Back</h1>
        </div>
        <div class="flex flex-col gap-4 ">
        <input
          type="text"
          class=" shadow bg border bg-[#F1F1F1] rounded-2xl w-full py-3 px-3 text-gray-900  focus:outline-none focus:shadow-outline my-2"
          id="email"
          placeholder="Email"
        />
        <input
          type="text"
          class=" shadow  border bg-[#F1F1F1] rounded-2xl w-full py-3 px-3 text-gray-900  focus:outline-none focus:shadow-outline my-2"
          id="password"
          placeholder="Password"
        />
        </div>
      <div class="mb-20">
      <p class="text-gray-500 text-md underline ml-1">Forgot password?</p>
      </div>
      <Link  to="/tracker"
            className="bg-[#7B91FF]  hover:bg-blue-500 text-white font-bold py-3 pl-[150px] rounded-2xl focus:outline-none focus:shadow-outline items-cente mt-20"
            type="button"
          >
            Sign In
          </Link>

        
        <div class="flex justify-center items-center">
          <div class="h-[1px] bg-gray-500 w-40 mt-1"></div>
          <p class="text-lg">or</p>
          <div class="h-[1px] bg-gray-500 w-40 mt-1"></div>
        </div>
        <div class=" flex justify-center gap-6 ">
          <div class="flex items-center border p-3 rounded-xl">
            <img src="google.png" class="w-8" />
          </div>
          <div class="flex items-center border p-3 rounded-xl ">
            <img src="facebook.png " class="w-8  " />
          </div>
        </div>
        <div class="flex justify-center">
          <p class="text-gray-500 underline">Don't have an account yet?<span><a href="/registration"  class="text-sm text-blue-400 underline p-1">Create an account</a></span></p>
          
        </div>
      </form>
    </div>
    
  );
};

export default Login;
