import Image from 'next/image'
import React from 'react'
import { montserrat, workSans } from '../layout'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='xl:mt-[100px] mt-[80px] '>
       <div className='w-full h-[548px] relative '>

          <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-white flex flex-col justify-center md:px-10 px-5 xl:px-20  z-40 '>
             <p className={`${montserrat.className} font-extrabold md:text-[38px] text-[30px] text-black `}>No more <b className='text-[#2C87F2] font-extrabold '>Diaries</b></p>
             <p className={`${montserrat.className} font-extrabold md:text-[38px] text-[30px] text-black `}><b className='text-[#2C87F2] font-extrabold '>No more</b> Paperwork-<b className='text-[#2C87F2] font-extrabold '></b></p>
             <p className={`${montserrat.className} font-extrabold md:text-[38px] text-[30px] text-black `}>Manage it all with a tap!</p>
          
             <p className={`${workSans.className} font-medium md:text-[16px] text-[14px] text-[#383A3E] mt-5 xl:w-[40%] md:w-[70%] `}>Streamline your healthcare operations with our comprehensive CRM solution designed specifically for managing surgical appointments across multiple hospitals and simplifying payment processes.</p>
         
             <div className='flex gap-x-3 w-full mt-8 '>
                <button className={`${workSans.className} w-fit px-5 h-[50px] bg-[#2C87F2] rounded-[10px] drop-shadow-lg text-white font-semibold text-[18px] `}>
                Get Started
                </button>
                
                <Link href="https://dr1.docschedule.in/" target='_blank'>
                <button className={`${workSans.className} w-fit px-5 h-[50px] bg-white cursor-pointer border-[#2C87F2] border-[1.5px] rounded-[10px] drop-shadow-lg text-[#2C87F2] font-semibold text-[18px] `}>
               Book a Demo
                </button>
                </Link>
                
             </div>
          </div>
          <Image src="/assets/image.svg" alt="Hero Image" fill className='object-cover ' />

       </div>
    </div>
  )
}

export default Hero
