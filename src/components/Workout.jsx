import React from "react";
import { Link } from "react-router-dom";

const Workout = () => {
  return (
    <div class="w-96 h-[100vh] flex flex-col items-center border-slate-900 rounded-xl px-4 bg-[#F5F5F5]">
      <div class="flex w-full justify-center gap-12 pt-4">
        <div class="w-[10%] mt-2">
          <Link to="/tracker">
          <img class="h-5  " src="left.png"></img>
          </Link>
        </div>
        <div class="w-[90%]">
          <h1 class="text-gray-800 pl-4 text-xl font-bold">Workout Tracker</h1>
        </div>
      </div>
      <div class="mt-8">
        <Link to="/schedule">
        <img src="chart1.png" alt=""></img>
        </Link>
      </div>
      <div class=" pt-2 mt-4">
        <img src="Frame.png" alt="" />
      </div>

      <div class=" pt-2 mt-9  w-full flex  gap-24">
        <div class=" mb-2">
          <p class="text-[18px] font-semibold text-gray-700">Upcoming Workout</p>
        </div>
        <div class="pl-2 text-gray-500">
          <p>see more</p>
        </div>
      </div>
      <div class="flex flex-col w-full gap-4">
        <div class="w-full h-20 border rounded-xl flex ">
          <div class="w-14 m-3">
            <img src="girl1.png" alt="" />
          </div>
          <div class="flex flex-col mt-3 ml-2 pr-2">
            <p>Full Body Workout</p>
            <p class="text-xs text-gray-500">Today 3pm</p>
            
          </div>
          <div class="my-auto ml-16">
              <label class="inline-flex items-center cursor-pointer ">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6  bg-blue-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
        </div>
        <div class="w-full h-20 border rounded-xl flex ">
          <div class="w-14 m-3">
            <img src="girl2.png" alt="" />
          </div>
          <div class="flex flex-col mt-3 ml-2">
            <p>Upper Body Workout</p>
            <p class="text-xs text-gray-500">4 Feb,3:30 pm</p>
          </div>
          <div class="my-auto ml-14">
              <label class="inline-flex items-center cursor-pointer ">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6  bg-blue-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
        </div>
        <div>
          <div class="flex">
            <h1 class="text-xl font-semibold text-gray-700">
              What Do You Want To Train
            </h1>
          </div>
          <div class="bg-blue-300  rounded-t-xl  mt-2 flex gap-28 pl-4 h-[70px]  ">
            <div class="w-40 ">
              <ul class="mt-[4px]">
                <li class="text-base">Full Body Workout</li>
                <li class="text-sm">Arms</li>
                <li class="text-sm">Chest</li>
              </ul>
            </div>

            <div class="w-18 h-20 pr-2 flex justify-center mt-4">
              <img src="girl3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="h-16 bg-slate-100 relative  w-full">
        <div class="flex justify-between px-2 items-center">
          <img class=" w-[25px] h-[25px]" src="img1.png " alt="" />
          <img class=" w-[25px] h-[25px]" src="img2.png" alt="" />
          <img
            class="relative bottom-6 w-[75px] h-[75px] "
            src="img3.png"
            alt=""
          />
          <img class=" w-[25px] h-[25px]" src="img4.png" alt="" />
          <img class=" w-[25px] h-[25px]" src="img5.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Workout;
