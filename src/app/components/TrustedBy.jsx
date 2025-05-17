import React from 'react'
import { montserrat, workSans } from '../layout'

const TrustedBy = () => {
  return (
    <div className='w-full h-fit py-14 bg-[#005CC8] '>

        <p className={`${montserrat.className} md:text-[36px] text-[30px] font-semibold text-white text-center`}>Trusted by Healthcare Professionals</p>
        <p className={`${workSans.className} md:text-[18px] text-[16px] mt-2 font-medium text-[#F8F8F8] text-center   `}>Our platform is making a difference in healthcare management</p>
    
    
       <div className='w-[90%] grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-5 mx-auto mt-10 '>

           <div className=' '>
             <p className={`${montserrat.className} xl:text-[50px] md:text-[40px] text-[30px] font-bold text-white text-center md:text-start `}>150 +</p>
             <p className={`${workSans.className} text-[18px] font-medium text-[#F8F8F8] -mt-1  text-center md:text-start`}>Hospitals Connected</p>
           </div>

           <div className=' '>
             <p className={`${montserrat.className} xl:text-[50px] md:text-[40px] text-[30px] font-bold text-white text-center md:text-start `}>50 +</p>
             <p className={`${workSans.className} text-[18px] font-medium text-[#F8F8F8] -mt-1 text-center md:text-start `}>Doctors Registered</p>
           </div>

           <div className=' '>
             <p className={`${montserrat.className} xl:text-[50px] md:text-[40px] text-[30px] font-bold text-white text-center md:text-start `}>150 +</p>
             <p className={`${workSans.className} text-[18px] font-medium text-[#F8F8F8] -mt-1  text-center md:text-start`}>Appointments Managed</p>
           </div>

           <div className=' '>
             <p className={`${montserrat.className} xl:text-[50px] md:text-[40px] text-[30px] font-bold text-white text-center md:text-start `}>99%</p>
             <p className={`${workSans.className} text-[18px] font-medium text-[#F8F8F8] -mt-1 text-center md:text-start `}>Success Rate</p>
           </div>

       </div>
    </div>
  )
}

export default TrustedBy
