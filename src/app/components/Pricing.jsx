import React from 'react'
import { montserrat, workSans } from '../layout'

const Pricing = () => {
  return (
    <div className="w-full bg-[#F9FAFB] pb-10 pt-5 ">


      <p
        className={`${montserrat.className} md:text-[36px] text-[30px] font-bold text-[#1E1E1E] text-center mt-14  `}
      >
       Transparent <b className="text-[#2C87F2] ">Pricing</b> Plans
      </p>
      <p
        className={`${workSans.className} md:text-[18px] text-[16px] font-medium text-[#383A3E] text-center mt-1 px-5 `}
      >
      Choose the perfect plan that fits your healthcare facility's needs
      </p>


      <div className="w-[90%] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-4 mt-20">

        <div className="w-[100%] md:h-[500px] h-fit bg-white drop-shadow-xl rounded-[10px] p-5  ">

            <p className={` text-[16px] font-medium text-[#2D2E2E] ${workSans.className} `}>Monthly</p>
            <p className={` text-[16px] font-medium text-[#2D2E2E] ${workSans.className} `}><b className="md:text-[38px] text-[32px] font-semibold">&#8377;1,200 /-</b> per user</p>

            <button className={` ${workSans.className} w-full mt-5 h-[50px] rounded-[8px] text-white bg-[#2C87F2] font-semibold text-[18px] `}>Get Monthly Plan</button>

            <li className={` text-[16px] font-medium text-[#2D2E2E] mt-7 ${workSans.className} `}>Add hospitals to your dashboard</li>
            <li className={` text-[16px] font-medium text-[#2D2E2E] mt-4 ${workSans.className} `}>Create Schedules</li>
            <li className={` text-[16px] font-medium text-[#2D2E2E] mt-4 ${workSans.className} `}>Track and update payment status</li>
            <li className={` text-[16px] font-medium text-[#2D2E2E] mt-4 ${workSans.className} `}>Get reminders for payments due</li>
        </div>

        <div className="w-[100%] md:h-[500px] h-fit border-[#2C87F2] border-[3px] bg-white drop-shadow-xl rounded-[10px] p-5  ">

<div className="flex w-full justify-between items-center ">
<p className={` text-[16px] font-medium text-[#2D2E2E] ${workSans.className} `}>Half-Yearly</p>

<div className={` ${workSans.className}  w-fit h-[40px] px-4 rounded-[80px] bg-[#2C87F2] text-white flex justify-center items-center font-medium text-[18px] `}>
  Popular
</div>
</div>

<p className={` text-[16px] font-medium text-[#2D2E2E] ${workSans.className} `}><b className="md:text-[38px] text-[32px] font-semibold">&#8377;6,999 /-</b> per user</p>

<button className={` ${workSans.className} w-full mt-1 h-[50px] rounded-[8px] text-white bg-[#2C87F2] font-semibold text-[18px] `}>Get Half Yearly Plan</button>

 <li className={` text-[16px] font-medium text-[#2D2E2E] mt-7 ${workSans.className} `}>Add hospitals to your dashboard</li>
            <li className={` text-[16px] font-medium text-[#2D2E2E] mt-4 ${workSans.className} `}>Create Schedules</li>
            <li className={` text-[16px] font-medium text-[#2D2E2E] mt-4 ${workSans.className} `}>Track and update payment status</li>
            <li className={` text-[16px] font-medium text-[#2D2E2E] mt-4 ${workSans.className} `}>Get reminders for payments due</li>
        </div>

        <div className="w-[100%] md:h-[500px] h-fit bg-[#005CC8] drop-shadow-xl rounded-[10px] p-5  ">

<div className="flex w-full justify-between items-center ">
<p className={` text-[16px] font-medium text-white ${workSans.className} `}>Annual</p>
</div>

<p className={` text-[16px] font-medium text-white ${workSans.className} `}><b className="md:text-[38px] text-[32px] font-semibold">&#8377;9,999 /-</b> per user</p>

<button className={` ${workSans.className} w-full mt-5 h-[50px] rounded-[8px] text-[#005CC8] bg-white font-semibold text-[18px] `}>Get Annual Plan</button>
 <li className={` text-[16px] font-medium text-white mt-7 ${workSans.className} `}>Add hospitals to your dashboard</li>
            <li className={` text-[16px] font-medium text-white mt-4 ${workSans.className} `}>Create Schedules</li>
            <li className={` text-[16px] font-medium text-white mt-4 ${workSans.className} `}>Track and update payment status</li>
            <li className={` text-[16px] font-medium text-white mt-4 ${workSans.className} `}>Get reminders for payments due</li>
        </div>



      </div>

      <div className="w-full flex flex-col justify-center items-center mt-20 ">
          <p className={`${workSans.className} font-medium text-[28px] text-[#383A3E] `}>All plans include:</p>

          <div className="flex md:flex-row flex-col mt-5 gap-5  md:gap-10 lg:gap-20 ">

           <div className="flex items-center gap-x-4 ">
             <img src="/assets/Shield.svg"/>
             <p className={`${workSans.className} font-medium text-[18px] text-black `}>Secure data encryption</p>
           </div>

           <div className="flex items-center gap-x-4 ">
             <img src="/assets/storage.svg"/>
             <p className={`${workSans.className} font-medium text-[18px] text-black `}>Cloud Storage</p>
           </div>

           <div className="flex items-center gap-x-4 ">
             <img src="/assets/Cloud.svg"/>
             <p className={`${workSans.className} font-medium text-[18px] text-black `}>Regular backups</p>
           </div>

          </div>
      </div>
      </div>
  )
}

export default Pricing
