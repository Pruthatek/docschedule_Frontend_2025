import React from 'react'
import { montserrat } from '../layout'
import Link from 'next/link'
import { X } from 'lucide-react'

const TC = () => {

  const data = [
    {
        name: "User Verification:",
        text: "All users must sign up and verify their contact details to access the platform."
    },
    // {
    //     name: "Advance Payment Requirement:",
    //     text: "Appointments will only be confirmed after successful advance payment."
    // },
    {
        name: "Service Availability:",
        text: "Our platform provides 24×7 access for booking, viewing appointments, and accessing records."
    },
    {
        name: "Data Privacy:",
        text: "Your personal and medical data will never be shared or sold to any third-party entity."
    },
    {
        name: "Platform Access:",
        text: "We reserve the right to restrict access to users who misuse the system."
    },
    {
        name: "Refunds:",
        text: "Refunds are issued only under valid circumstances and at the sole discretion of the company."
    },
    {
        name: "Record Security:",
        text: "All medical records are stored securely and accessible only by authorized personnel."
    },
    {
        name: "Doctor/Hospital Responsibility:",
        text: "Treatment and medical services are provided solely by registered hospitals and doctors."
    },
    {
        name: "Platform as a Facilitator:",
        text: "We act as a booking and management platform and are not liable for the quality of medical treatment provided."
    },
    // {
    //     name: "Schedule Changes:",
    //     text: "Users will be notified of any changes in appointment schedules. Rescheduling is subject to availability."
    // },
    // {
    //     name: "User Conduct:",
    //     text: "Users must behave respectfully with doctors and support staff. Any form of abuse may result in suspension."
    // },
    {
        name: "Limitation of Liability:",
        text: "We are not liable for any indirect or incidental damages arising from the use of our services."
    },
    {
        name: "Modifications:",
        text: "We may update these terms from time to time. Continued use implies acceptance of revised terms."
    },
    {
        name: "Third-party Links:",
        text: "Our site may include links to third-party websites; we are not responsible for their content or privacy practices."
    },
    {
        name: "Support:",
        text: "Our support team is available 24×7 to assist users with booking, payments, and general queries."
    },
  ]

  return (
    <div className={`w-full ${montserrat.className} bg-white mt-20 mb-10 `}>

        <div className='lg:w-[70%] md:w-[80%] w-[90%] bg-[#F9FAFB] drop-shadow-xl mx-auto rounded-[20px] p-5 '>
           <div className='flex justify-between items-center '>
               <p className=' text-[#383A3E] font-semibold md:text-[24px] text-[20px] '>Terms & Conditions</p>

               <Link href="/" >
                <X />
                </Link>
            </div>

           <p className=' text-[#383A3E] font-medium md:text-[20px] text-[16px] mt-4 '>By accessing or using our services, you agree to comply with the following terms:</p>
        
           <div className='flex flex-col gap-y-4 mt-6 '>
            {data.map((d,index)=>{
                return (

                
              <p key={index} className=' text-[#383A3E] font-medium md:text-[14px] text-[12px]  '> <b>{index+1}. {d.name}</b> {d.text}</p>
            )})}
              
           </div>
          
        </div>
      
    </div>
  )
}

export default TC
