import React from 'react'
import { Link } from 'react-router-dom'

const Home1 = () => {
  return (
    <div>
      <div
      class="w-96 h-[100vh] flex flex-col items-center border-slate-900 rounded-xl px-4 bg-[#F5F5F5]"
    >
      <div class="flex justify-end mb-14 mt-6 w-full ">
        <Link to="/Registration" class="text-blue-500 underline">Skip</Link>
      </div>
     

      <img src="home2.png" class="h-72 w-full  rounded-xl"/>
      <div class="flex flex-col pl-4 mt-16">
        <p class="text-2xl font-semibold py-4">Get Burn</p>
        <p class=" text-gray-500">
            Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever.
        </p>
      </div>

      <div class="w-full flex justify-end mt-16">
        <Link to="/registration"  class="h-14 w-14 bg-[#7B91FF]  rounded-full"><img src="chevron-right.png" alt="" /></Link>
      </div>
    </div>
    </div>
  )
}

export default Home1
