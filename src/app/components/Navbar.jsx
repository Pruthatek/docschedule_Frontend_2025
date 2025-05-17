"use client"

import { AlignJustify, ChevronDown, Phone, Search, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { montserrat, workSans } from '../layout';



const Navbar = () => {

    const pathname = usePathname();
    const [active, setActive] = useState("");
    
const links = [
  { name: "Features", link: "#features" },
  { name: "Solutions", link: "#solutions" },
  { name: "Pricing", link: "#pricing" },
  { name: "Contact", link: "#contact" }, 
];

       
      useEffect(() => {
        switch (pathname) {
          
          case "/features":
            setActive("Features");
            break;
          case "/solutions":
            setActive("Solutions");
            break;
          case "/pricing":
            setActive("Pricing");
            break;
          case "/contact":
            setActive("Contact");
            break;
          default:
            setActive("");
        }
      }, [pathname]);
      
      const [openNav, setOpenNav] = useState(false);
      const [closing, setClosing] = useState(false);
      
      const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
          setOpenNav(false);
          setClosing(false);
        }, 400); // duration should match animation
      };
      
      const handleClick = () => {
        window.scrollTo(0, 0);
      };
  return (

    <div className=''>

    <div className="xl:fixed xl:block hidden   top-0 left-0 w-full z-50">

        <div className='w-full h-[100px] bg-white drop-shadow-md flex  justify-start gap-x-40 items-center px-14'>
        <Link href="/" onClick={handleClick}>         
          
          <Image src="/assets/logo.svg" alt="Doctor CRM" className='w-[59px] h-[54px] ' width={59} height={54}/>
         
          </Link>

       <div className='flex items-center gap-x-10'>
  {links.map((link, index) => (
    <Link href={link.link} scroll={false} key={index}>
  <div onClick={() => {
    const id = link.link.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    
  }} className="relative flex gap-x-2 items-center py-2 cursor-pointer">

     
        <p className={`xl:text-[16px] lg:text-[14px] font-normal ${workSans.className} text-[#1E1E1E] whitespace-nowrap`}>
          {link.name}
        </p>

        {/* {active === link.name && (
          <div className="absolute -bottom-[10px] left-1/2 transform -translate-x-1/2 w-[100%] h-[6px] bg-white rounded-t-full" />
        )} */}
      </div>
    </Link>
  ))}
       </div>


      {/* <div className='flex gap-x-3'>

      <button className={`w-[108px] h-[48px] rounded-[10px] bg-[#F8F8F8] cursor-pointer border-[1.5px] border-[#908F8F] text-[#1E1E1E] font-semibold text-[16px] ${workSans.className} `}>
          Log in 
       </button>

      <Link href="/signup" >
       <button className={`w-[108px] h-[48px] rounded-[10px] bg-[#2C87F2] text-white cursor-pointer font-semibold text-[16px] ${workSans.className} `}>
          Sign up
       </button>
     </Link> 

      </div> */}
      
        </div>
  
    </div>

    <div className={`fixed xl:hidden bg-white drop-shadow-md h-[80px] px-5 top-0 left-0 w-screen flex justify-between items-center z-50 ${montserrat.className}`}>
       
       
    <Link href="/" onClick={handleClick}>
    <Image src="/assets/logo.svg" alt="Doctor CRM" className='w-[59px] h-[54px] ' width={59} height={54}/>
    
   </Link>
       
   <AlignJustify size={20} color='black' onClick={()=>setOpenNav(true)}/>
    </div>

    {openNav && (
  <div className="fixed top-0 left-0 w-screen h-screen  z-50">
    <div
      className={`fixed top-0 right-0 h-full w-[100%]  bg-white px-6 py-10 z-50 ${
        closing ? "animate-slide-out" : "animate-slide-in"
      }`}
    >
      <div className="flex justify-end">
        <button onClick={handleClose} className="text-black text-xl ">
          <X/>
        </button>
      </div>
      <div className="flex flex-col items-center gap-6 mt-6">
        {links.map((link, index) => (
          <Link
            href={link.link} scroll={false} key={index}
            onClick={handleClose}
            className={`text-[14px] font-normal text-start ${workSans.className} ${
              active === link.name ? "text-black  font-semibold" : "text-[#1E1E1E]"
            }`}
          >
            <div onClick={() => {
    const id = link.link.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpenNav(false); // if mobile nav
  }}>
            {link.name}
            </div>
          </Link>
        ))}

{/* <div className='flex gap-x-3'>

<button className={`w-[108px] h-[48px] rounded-[10px] bg-[#F8F8F8] border-[1.5px] border-[#908F8F] cursor-pointer text-[#1E1E1E] font-semibold text-[16px] ${workSans.className} `}>
    Log in 
 </button>

 <Link href="/signup" >
 <button className={`w-[108px] h-[48px] rounded-[10px] bg-[#2C87F2] text-white font-semibold text-[16px] cursor-pointer ${workSans.className} `}>
    Sign up
 </button>
 </Link>

</div> */}
      </div>
    </div>
  </div>
     )}

    </div>
  )
}

export default Navbar
