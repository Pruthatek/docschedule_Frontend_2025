import React from "react";
import { montserrat, workSans } from "../layout";
import Image from "next/image";

const Features = () => {
  const data = [
    {
      name: "Appointment Management",
      icon: "/assets/appointment.svg",
      color: "#DBEAFE",
      text: "Efficiently schedule and manage surgical appointments across multiple hospitals",
    },
    {
      name: "Payment Processing",
      icon: "/assets/payment.svg",
      color: "#DCFCE7",
      text: "Streamline billing workflows and manage patient payments in one place",
    },
    {
      name: "Hospital Network",
      icon: "/assets/hospital.svg",
      color: "#F3E8FF",
      text: "Connect with hospitals and surgical centers through our extensive network",
    },
    {
      name: "Patient Records",
      icon: "/assets/patient.svg",
      color: "#FEE2E2",
      text: "Securely store and access patient information and surgical history",
    },
  ];
  return (
    <div className="w-full h-fit bg-[#F9FAFB] py-10 ">
      <p
        className={`${montserrat.className} md:text-[36px] text-[30px] font-bold text-[#1E1E1E] text-center `}
      >
        <b className="text-[#2C87F2] ">Key</b> Features
      </p>
      <p
        className={`${workSans.className} md:text-[18px] text-[16px] font-medium text-[#383A3E] text-center mt-1  px-3`}
      >
        Our platform offers powerful tools designed specifically for healthcare
        providers
      </p>

      <div className="w-[90%] mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
         {data.map((d, index)=>{
            return (
                <div className="w-[100%] h-[294px] rounded-[10px] bg-white drop-shadow-xl p-5 ">
                    <div style={{ backgroundColor: d.color }} className={`w-[57px] h-[57px] rounded-full flex justify-center items-center  `}>
                        <Image src={d.icon} width={24} height={24} alt={d.name} />
                    </div>

                    <p className={`font-semibold text-[20px] mt-7 ${workSans.className} text-[#383A3E] `}>{d.name}</p>

                    <p className={`font-medium  text-[16px] mt-5 ${workSans.className} text-[#383A3E] `}>{d.text}</p>
                </div>
            )
         })}
      </div>
    </div>
  );
};

export default Features;
