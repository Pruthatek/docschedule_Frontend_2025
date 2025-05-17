import React from 'react'
import { workSans } from '../layout'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full lg:h-[50px] h-fit py-4 bg-[#111827] flex md:flex-row md:flex-wrap flex-col gap-y-4 lg:justify-between md:justify-center md:gap-x-10 lg:gap-x-0 items-center md:px-5 px-2 '>
        <div className='flex gap-x-3 items-center text-white font-normal text-[14px] '>
         <Link href="/t&c">
         <p className={`${workSans.className} underline `}>Terms & Conditions</p>
         </Link>
          
          <Link href="/privacy-policy">
          <p className={`${workSans.className} underline `}>Privacy Policy</p>
          </Link>
        </div>

        <p className={`text-white font-normal text-[14px] ${workSans.className}  `}>Designed & Developed by <a href="https://pruthatek.com/" target='_blank' className='underline' >Pruthatek</a></p>
     
        <div className='flex gap-x-7 items-center text-white font-normal text-[14px] '>
            <div className='flex gap-x-1 items-center'>
               <Mail size={16} />
                <a href="mailto:vn@pruthatek.com">vn@pruthatek.com</a>
            </div>

            <div className='flex gap-x-1 items-center'>
               <Phone size={14} />
                <a href="tel:+919909918930">+91 9909918930</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
