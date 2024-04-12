import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Tracker = () => {
 
  return (
    <div class="w-96 h-[100vh] flex flex-col items-center border-slate-900 rounded-xl bg-gray-100">
      <div class="flex flex-col gap-14 ">
        <div class="mt-6 flex justify-center">
          <h1 class="text-xl font-bold ">What are your Goals?</h1>
        </div>
        <div class="flex flex-col gap-6 w-[350px] ">
          <div class="border h-12 rounded-xl bg-gray-200 px-4 flex items-center gap-44">
            <div class="  w-32 ">
            <p class="text-md font-semibold">Weight Loss</p>
           </div>
        
           <input  type='checkbox'  value=''  className="w-6 h-6 border-blue-500 text-red-500 focus:ring-red-200 rounded-md" /> 
        
           
          
          </div>
          <div class="border h-12 rounded-xl bg-gray-200 px-4 flex items-center gap-44">
          <div class="  w-32 ">
            <p class="text-md font-semibold">Muscle Gain</p>
           </div>
           <input  type='checkbox'  value=''  className="w-6 h-6 border-blue-500 text-red-500 focus:ring-red-200 rounded-md" /> 
          </div>
          <div class="border h-12 rounded-xl bg-gray-200 px-4 flex items-center gap-4">
          <div class="  w-full ">
         
            
            <p class="text-md font-semibold">Flexibility and Mobility</p>
           </div>
          
           <input  type='checkbox'  value=''  className="w-6 h-6 border-blue-500 text-red-500 focus:ring-red-200 rounded-md" /> 
          </div>
          <div class="border h-12 rounded-xl bg-gray-200 px-4 flex items-center gap-44">
          <div class="  w-32 ">
            <p class="text-md font-semibold">General Fitness</p>
           </div>
           <input  type='checkbox'  value=''  className="w-6 h-6 border-blue-500 text-red-500 focus:ring-red-200 rounded-md" /> 
          </div>
          <div class="border h-12 rounded-xl bg-gray-200 px-4 flex items-center gap-4">
          <div class=" w-full ">
            <p class="text-md font-semibold">Event-specific training</p>
           </div>
           <input  type='checkbox'  value=''  className="w-6 h-6 border-blue-500 text-red-500 focus:ring-red-200 rounded-md" /> 
          </div>
          <div class="border h-12 rounded-xl bg-gray-200 px-4 flex items-center gap-4">
          <div class="  w-full ">
            <p class="text-md font-semibold">Mindfullness and Mental Health</p>
           </div>
           <input  type='checkbox'  value=''  className="w-6 h-6 border-blue-500 text-red-500 focus:ring-red-200 rounded-md" /> 
          </div>
          
        </div>
       
        <Link  to="/Workout"
            className="bg-[#7B91FF] mt-14 hover:bg-blue-500 text-white font-bold py-3 pl-[145px] rounded-2xl focus:outline-none focus:shadow-outline items-center"
            type="button"
          >
            Confirm
          </Link>
          </div>
      
    </div>
  );
};

export default Tracker;
