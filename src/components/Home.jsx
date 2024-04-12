import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div class>
      <div
      class="w-96 h-[100vh] flex flex-col items-center border-slate-900 rounded-xl px-4 bg-[#F5F5F5]"
    >
      <div class="flex justify-end mb-16 mt-6 w-full ">
      <Link to="/Registration" class="text-blue-500 underline">Skip</Link>
      </div>
     

      <img src="home1.png" class="h-72 w-72  rounded-xl"/>
      <div class="flex flex-col pl-4 mt-14">
        <p class="text-2xl font-semibold py-4">Track Your Goal</p>
        <p class=" text-gray-500">
            Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals.
        </p>
      </div>

      <div class="w-full flex justify-end mt-16">
        <Link to="/home" class="h-14 w-14 bg-[#7B91FF] rounded-full"><img src="chevron-right.png" alt="" /></Link>
      </div>
    </div>
    </div>
  )
}

export default Home
