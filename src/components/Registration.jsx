import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Registration = () => {

  return (
    <div>
      <form class="flex flex-col gap-4  w-96 h-[100vh] bg-gray-100 shadow-md rounded px-3 ">
        <div class="flex flex-col justify-center w-full py-4">
          <h1 class=" text-gray-700 text-xl text font-bold">Create an account</h1>
        </div>

        <input
          class="shadow border bg-gray-100
          rounded-2xl w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2"
          id="Firstname"
          type="text"
          placeholder="First name"
        />
        <input
          class="shadow border  bg-gray-100 
          rounded-2xl w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2"
          id="Lastname"
          type="text"
          placeholder="Last name"
        />

        <input
          class="shadow border  bg-gray-100
          rounded-2xl w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2"
          id="Email"
          type="Email"
          placeholder="Email"
        />
        <input
          class="shadow border bg-gray-100 
          rounded-2xl w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline  my-2"
          id="Password"
          type="Password"
          placeholder="Password"
        />
        <div className="flex gap-2 mb-14 ">
        <input  type='checkbox'  value=''  className="w-6 h-6 border-blue-500 text-red-500 focus:ring-red-200 rounded-md" /> 
          
        
          <p class="text-gray-500 text-sm ">
            By proceeding, I agree to all <span><a href="#"  class="text-sm text-blue-400 underline">T&C</a></span> and <span><a href="#"  class="text-sm text-blue-400 underline">Privacy Policy</a></span>
          </p>
        </div>

        <div class="flex flex-col">
          <Link  to="/tracker"
            className="bg-[#7B91FF]  hover:bg-blue-500 text-white font-bold py-3 pl-[125px] rounded-2xl focus:outline-none focus:shadow-outline items-center"
            type="button"
          >
            Create Account
          </Link>
        </div>
        <div class="flex justify-center items-center">
          <div class="h-[1px] bg-gray-500 w-40 mt-1"></div>
          <p class="text-lg">or</p>
          <div class="h-[1px] bg-gray-500 w-40 mt-1"></div>
        </div>
        <div class=" flex justify-center gap-6 ">
          <div class="flex items-center border p-3 rounded-xl">
            <img src="google.png" class="w-8" />
          </div>
          <div class="flex items-center border p-2 rounded-xl ">
            <img src="facebook.png " class="w-8  " />
          </div>
        </div>
        <div class="flex justify-center">
          <p class="text-gray-600">Already have an account?</p>
          <a href="/login" class="font-medium text-blue-400 px-1 hover:underline">
            Sign in
          </a>
        </div>
      </form>
    </div>
  );
};

export default Registration;
