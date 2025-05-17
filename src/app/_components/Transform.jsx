import React from 'react'
import { montserrat, workSans } from '../layout'
import Link from 'next/link'

const Transform = () => {
  return (
    <div className='w-full h-fit py-14 bg-[#005CC8] '>
       <p className={`${montserrat.className} text-white text-[30px] md:text-[36px] font-semibold text-center `}>Ready to Transform Your Healthcare Management?</p>
       <p className={`${workSans.className} md:block hidden md:text-[18px] text-[16px] mt-2 font-medium text-[#F8F8F8] text-center   `}>Join thousands of healthcare professionals who are already streamlining their <br></br>operations with DoctoredCRM</p>
       <p className={`${workSans.className} md:hidden block text-[16px] mt-2 font-medium text-[#F8F8F8] text-center   `}>Join thousands of healthcare professionals who are already streamlining their operations with DoctoredCRM</p>
    
       <div className={`${workSans.className} flex gap-3 md:flex-row flex-col justify-center items-center mt-10 `}>

      <Link href="https://dr1.docschedule.in/" target='_blank'>
        <button className='w-[202px] h-[60px] rounded-[10px] bg-[#F8F8F8] cursor-pointer text-[#1E40AF] font-semibold text-[18px] '>Book a Demo</button>
      </Link>
        <button className='w-[202px] h-[60px] rounded-[10px] bg-[#1E40AF] text-white font-semibold text-[18px] '>Get Started</button>
       </div>
    </div>
  )
}

export default Transform
