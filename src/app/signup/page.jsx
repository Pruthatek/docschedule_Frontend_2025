import React from 'react'
import { workSans } from '../layout'
import { Check, Eye } from 'lucide-react'

const SignUp = () => {

  return (
    <div className={`h-full py-20 xl:mt-[100px] mt-[80px] bg-[#F9FAFB] ${workSans.className} `}>
        
        <div className='xl:w-[55%] w-[90%] h-fit rounded-[12px] bg-white drop-shadow-xl py-5 px-3 mx-auto '>
            <p className={` font-bold md:text-[36px] text-[30px] text-[#383A3E] text-center `}>Create <b className='text-[#2C87F2] '>Your</b> Account</p>
            <p className={`text-[#4B5563]  font-normal text-[14px] text-center `}>Join thousands of healthcare professionals using DoctoresCRM to streamline their
            practice</p>


            <form className='w-[95%] mx-auto mt-8 flex flex-col gap-y-6 '>
                <div className='w-full'>
                    <p className={` font-normal text-[14px] text-[#374151] `}>Full Name</p>
                    <input type='text' placeholder='Dr. John Smith' className='w-full h-[43px] mt-2 px-4 rounded-[6px] border border-[#D1D5DB] '/>
                </div>

                <div className='w-full'>
                    <p className={` font-normal text-[14px] text-[#374151] `}>Email Address</p>
                    <input type='email' placeholder='john.smith@example.com' className='w-full h-[43px] mt-2 px-4 rounded-[6px] border border-[#D1D5DB] '/>
                </div>

                <div className='w-full relative'>
                    <p className={` font-normal text-[14px] text-[#374151] `}>Password</p>
                    <input type='passowrd' placeholder='Create a secure password' className='w-full h-[43px] mt-2 px-4 rounded-[6px] border border-[#D1D5DB] '/>
                    <Eye className="absolute right-5 top-9.5 cursor-pointer " color='#6B7280' />
                    <p className={` font-normal text-[12px] mt-1 text-[#6B7280] `}>Must be at least 8 characters and include a number and special character</p>
                </div>

                <div className='w-full'>
                    <p className={` font-normal text-[14px] text-[#374151] `}>Practice/Hospital Name</p>
                    <input type='text' placeholder='City Medical Center' className='w-full h-[43px] mt-2 px-4 rounded-[6px] border border-[#D1D5DB] '/>
                </div>

                <div className='w-full flex md:flex-row flex-col justify-between gap-x-10 gap-y-5 '>

                <div className='w-full md:w-[50%] '>
                    <p className={` font-normal text-[14px] text-[#374151] `}>Your Role</p>
                    <select className='w-full h-[43px] mt-2 px-4 rounded-[6px] border border-[#D1D5DB] '>
                        <option>Select your role</option>
                    </select>
                </div>

                <div className='w-full md:w-[50%] '>
                    <p className={`font-normal text-[14px] text-[#374151] `}>Number of Doctors</p>
                    <input type='number' placeholder='1' className='w-full h-[43px] mt-2 px-4 rounded-[6px] border border-[#D1D5DB] '/>
                       
                </div>
                </div>

                <div className='w-full '>
                    <p className={`  font-normal text-[16px] text-[#111827] `}>Select your Plan</p>

                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-4'>

                        <div className='w-[100%] h-fit bg-white border border-[#E5E7EB] rounded-[8px] p-5 '>

                            <div className='flex gap-x-3 items-center '>

                                <input type='radio' className='w-4 h-4  ' />
                                <p className='font-normal text-[16px] text-[#111827] '>Basic</p>

                            </div>

                           <div className='ml-7 '>

                           
                            <p className='text-[12px] font-normal text-[#6B7280] '>For small practices</p>

                            <p className='text-[11px] font-normal text-[#6B7280]  '><b className='font-bold text-[16px] text-[#2C87F2] '>49 </b>/month</p>
                           
                            <div className='flex items-center gap-x-2 mt-2'>
                            <Check color="#22C55E" size={20} />
                            <p className='font-normal text-[14px] text-[#4B5563] '>Up to 2 doctors</p>
                            </div>

                            <div className='flex items-center gap-x-2 mt-1'>
                            <Check color="#22C55E" size={20} />
                            <p className='font-normal text-[14px] text-[#4B5563] '>100 appointments/month</p>
                            </div>
                           
                            </div>
                        </div>

                        <div className='w-[100%] h-fit bg-white border border-[#E5E7EB] rounded-[8px] p-5 '>

<div className='flex gap-x-3 items-center '>

    <input type='radio' className='w-4 h-4  ' />
    <p className='font-normal text-[16px] text-[#111827] '>Professional</p>

    <div className='w-fit h-[20px] rounded-full px-3 flex justify-center items-center bg-[#DBEAFE] '>
      <p className='font-normal text-[12px] text-[#1E40AF] '>Popular</p>
    </div>

</div>

<div className='ml-7 '>


<p className='text-[12px] font-normal text-[#6B7280] '>For growing clinics</p>

<p className='text-[11px] font-normal text-[#6B7280]  '><b className='font-bold text-[16px] text-[#2C87F2] '>99 </b>/month</p>

<div className='flex items-center gap-x-2 mt-2'>
<Check color="#22C55E" size={20} />
<p className='font-normal text-[14px] text-[#4B5563] '>Up to 5 doctors</p>
</div>

<div className='flex items-center gap-x-2 mt-1'>
<Check color="#22C55E" size={20} />
<p className='font-normal text-[14px] text-[#4B5563] '>500 appointments/month</p>
</div>

</div>
                        </div>

                        <div className='w-[100%] h-fit bg-white border border-[#E5E7EB] rounded-[8px] p-5 '>

                            <div className='flex gap-x-3 items-center '>

                                <input type='radio' className='w-4 h-4  ' />
                                <p className='font-normal text-[16px] text-[#111827] '>Custom</p>

                            </div>

                           <div className='ml-7 '>

                           
                            <p className='text-[12px] font-normal text-[#6B7280] '>For healthcare networks</p>

                            <p className='text-[11px] font-normal text-[#6B7280]  '><b className='font-bold text-[16px] text-[#2C87F2] '>Custom </b>/month</p>
                           
                            <div className='flex items-center gap-x-2 mt-2'>
                            <Check color="#22C55E" size={20} />
                            <p className='font-normal text-[14px] text-[#4B5563] '>Unlimited doctors</p>
                            </div>

                            <div className='flex items-center gap-x-2 mt-1'>
                            <Check color="#22C55E" size={20} />
                            <p className='font-normal text-[14px] text-[#4B5563] '>Unlimited appointments </p>
                            </div>
                           
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex items-center gap-x-3  '>
                   <input type='checkbox' className='w-4 h-4 ' />
                   <p className='font-normal text-[13px] text-[#4B5563] '>I agree to the <b className='text-[#2C87F2] font-normal '>Terms of Service</b> and <b className='text-[#2C87F2] font-normal '>Privacy Policy</b></p>
                </div>

                <button className='w-full h-[48px] rounded-[4px] bg-[#2C87F2] text-white text-[14px] font-medium '>Create Account</button>

                 <p className='text-[#4B5563] font-normal text-[13px] text-center '>Already have an account? <b className='text-[#2C87F2] font-normal '>Log in</b></p>
            </form>
        </div>

        <div className='flex mx-auto gap-x-2 items-start justify-center mt-10 px-5 w-full '>
           <img src="/assets/secure.svg" className='mt-1 md:mt-0 '/> <p className='text-[12px] font-normal text-[#6B7280] '>Your data is secure and encrypted. We comply with HIPAA regulations.</p>
        </div>
    </div>
  )
}

export default SignUp
