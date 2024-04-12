import React from 'react'
import { Link } from 'react-router-dom'
const Schedule = () => {
  return (
    <div class="w-96 h-[100vh]  border-slate-900 rounded-xl px-4 bg-[#F5F5F5] flex flex-col justify-center">
        <div class="flex  w-full justify-center gap-12 pt-3">
        <div class="w-[10%] mt-2">
          <Link to="/tracker">
          <img class="h-5  " src="left.png"></img>
          </Link>
          
        </div>
        <div class="w-[90%] mb-4">
          <h1 class="text-gray-800 font-semibold text-xl pl-3">Workout  Schedule</h1>
        </div>
      </div>
      <div class="flex justify-center ">
      <span><img class="w-3 h-4 mr-3 mt-1"src="left1.png" alt="" /></span> <p>Feb 2024</p><span><img class="w-3 ml-3 mt-1 h-4"src="right1.png" alt="" /></span>
      </div>
      <div class="mt-6">
        <img src="Calendar.png" alt="" />
      </div>
      <div class="flex flex-col justify-start mt-5 ">
        <div class=" border-b-2 pb-3">
            <p>
                06:00 AM
            </p>
        </div>
        <div class=" border-b-2 pb-2">
            <p>
                07:00 AM
            </p>
        </div>
        <div class=" border-b-2 pb-3 flex">
            <p>
                08:00 AM
            </p>
            <div class="bg-pink-300 relative bottom-4 flex ml-28 justify-center rounded-xl w-[150px]">
                <p class="text-sm">
                    ab workout,7:30 am
                </p>
            </div>
        </div>
        <div class=" border-b-2 pb-3 flex">
            <p>
                09:00 AM
            </p>
            <div class="bg-pink-300  relative top-3 ml-6 flex justify-center rounded-xl w-[180px]">
                <p class="text-sm">
                  Upperbody Workout, 9 am
                </p>
            </div>
        </div>
        <div class=" border-b-2 pb-3">
            <p>
                10:00 AM
            </p>
        </div>
        <div class=" border-b-2 pb-3">
            <p>
                11:00 AM
            </p>
        </div >
        <div class=" border-b-2 pb-3">
            <p>
            12:00 AM
            </p>
        </div>
        <div class=" border-b-2 pb-3">
            <p>
                01:00 AM
            </p>
        </div>
        <div class=" border-b-2 pb-3 flex">
            <p>
                02:00 AM
            </p>
            <div class="bg-gray-300 ml-6 relative top-1 flex justify-center rounded-xl w-[180px]">
                <p class="text-sm">
                   Lowerbody Workoout, 3pm
                </p>
            </div>
        </div>
        <div class=" border-b-2 pb-3 flex ">
            <p>
                03:00 AM
            </p>
           
        </div>
        <div class=" border-b-2 pb-3">
            <p>
                04:00 AM
            </p>
        </div>
        <div class=" border-b-2 pb-3">
            <p>
                05:00 AM
            </p>
        </div>
        {/* <div class="w-full flex justify-end ">
        <div class=" rounded-full w-16 h-16 flex justify-center  bg-pink-400 items-center  relative  bottom-32 mr-8 ">
                <img class="w-6 h-6"src="plus.png" alt="" />
        </div>
        </div> */}
        
        <div class="h-full bg-slate-100 relative  w-full">
        <div class="flex justify-between px-2 items-center">
          <img class=" w-[25px] h-[25px]" src="img1.png " alt="" />
          <img class=" w-[25px] h-[25px]" src="img2.png" alt="" />
          <img
            class="relative bottom-5 w-[75px] h-[75px]"
            src="img3.png"
            alt=""
          />
          <img class=" w-[25px] h-[25px]" src="img4.png" alt="" />
          <img class=" w-[25px] h-[25px]" src="img5.png" alt="" />
        </div>
      </div>
        
      </div>
    </div>
  )
}

export default Schedule
