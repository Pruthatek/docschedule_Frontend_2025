"use client"

import React, { useState } from "react";
import { montserrat, workSans } from "../layout";
import Image from "next/image";

const HowItWorks = () => {
 
 
const steps = [
  { id: 1, content: <>Register with our platform</> },
  { id: 2, content: <>Add hospitals to your dashboard</> },
  { id: 3, content: <>Create and track schedules</> },
  { id: 4, content: <>Track and update payment status</> },
];

const [hovered, setHovered] = useState(null); 
    
  return (
    <div className="w-full h-fit bg-[#F9FAFB] pt-10 pb-5 ">
      <p
        className={`${montserrat.className} md:text-[36px] text-[30px] font-bold text-[#1E1E1E] text-center `}
      >
        <b className="text-[#2C87F2] ">How</b> it Works
      </p>
      <p
        className={`${workSans.className} md:text-[18px] text-[16px] font-medium text-[#383A3E] text-center mt-1  px-5`}
      >
       Our streamlined process makes managing medical appointments simple
      </p>

      <div className="w-full flex justify-center mt-14">
      <div className="relative w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3">

        {/* Dashed line */}
        <div className="absolute w-[80%] mx-auto left-0 right-0 top-6 border-t-2 border-dashed border-gray-300" />

        {/* Steps */}
        <div className="relative grid grid-cols-4 gap-4 z-10">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="flex flex-col items-center group cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              tabIndex={0}               /* keyboard accessibility */
            >
              {/* Numbered circle */}
              <div
                className={[
                  "flex items-center justify-center rounded-full font-medium shadow transition-colors",
                  "w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 text-sm sm:text-base",
                  i <= (hovered ?? -1)
                    ? "bg-blue-600 text-white ring-4 ring-blue-200"
                    : "bg-gray-800 text-white/90 ring-4 ring-gray-700",
                ].join(" ")}
              >
                {step.id}
              </div>

              {/* Content box */}
              <div className="mt-6 w-full h-24 sm:h-28 md:h-32 bg-white rounded-lg shadow-sm flex font-semibold items-center justify-center md:text-[14px] text-[10px] px-2 text-[#1E1E1E]">
                {step.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


      <p
        className={`${montserrat.className} md:text-[36px] text-[30px] font-bold text-[#1E1E1E] text-center mt-24  `}
      >
        <b className="text-[#2C87F2] ">Benefits</b> for Everyone
      </p>
      <p
        className={`${workSans.className} md:text-[18px] text-[16px] font-medium text-[#383A3E] text-center mt-1 px-5 `}
      >
      Our platform provides value to both doctors and hospitals
      </p>


      <div className="w-[90%] mx-auto flex gap-4 md:flex-row flex-col  mt-12">

        <div className="md:w-[50%] w-[100%] xl:h-[300px] md:h-[360px] h-fit  rounded-[10px] bg-white drop-shadow-xl xl:p-10 p-5 ">
              <p className={`text-black text-[24px] font-semibold ${workSans.className} `}>For Hospitals  </p>

              <div className="mt-5 flex flex-col gap-y-4 ">
                <li className={`font-medium text-[16px] ${workSans.className} text-[#1E1E1E] `}>Centralized appointment management across multiple facilities</li>
                <li className={`font-medium text-[16px] ${workSans.className} text-[#1E1E1E] `}>Reduced administrative burden and paperwork</li>
                <li className={`font-medium text-[16px] ${workSans.className} text-[#1E1E1E] `}>Streamlined billing and payment processing</li>
                <li className={`font-medium text-[16px] ${workSans.className} text-[#1E1E1E] `}>Enhanced operational efficiency </li>
              </div>
        </div>

        <div className="md:w-[50%] w-[100%] xl:h-[300px] md:h-[360px] h-fit  rounded-[10px] bg-white drop-shadow-xl xl:p-10 p-5 ">
              <p className={`text-black text-[24px] font-semibold ${workSans.className} `}>For Doctors</p>

              <div className="mt-5 flex flex-col gap-y-4 ">
                <li className={`font-medium text-[16px] ${workSans.className} text-[#1E1E1E] `}>Easy appointment scheduling and reminders</li>
                <li className={`font-medium text-[16px] ${workSans.className} text-[#1E1E1E] `}>Transparent billing and payment options</li>
                <li className={`font-medium text-[16px] ${workSans.className} text-[#1E1E1E] `}>Secure access to medical records and history</li>
                <li className={`font-medium text-[16px] ${workSans.className} text-[#1E1E1E] `}>Improved communication with patients</li>
              </div>
        </div>

      </div>


    </div>
  );
};

export default HowItWorks;
