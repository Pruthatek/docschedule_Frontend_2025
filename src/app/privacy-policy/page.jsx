import React from 'react'
import { montserrat } from '../layout'
import { X } from 'lucide-react'
import Link from 'next/link'

const PrivacyPolicy = () => {

    const data = [
        {
            name: "Information We Collect",
            text: [
                "We collect the following types of information to provide a seamless and secure experience:",
                "Personal details (name, email, phone number, address)",
                "Medical history and appointment records",
                "Payment information (processed via secure third-party gateways)",
                "Device and usage data (for service improvement)"
            ]
        },
        {
            name: "Payment Policy",
            text: [
                "To ensure service efficiency and reduce appointment cancellations:",
                "Advance payment is mandatory to confirm subscription-based plan.",
                "Payments are processed through industry-standard SSL-encrypted payment gateways, ensuring your transaction is 100% secure.",
                "We do not store or retain your credit/debit card information on our servers."
            ]
        },
        {
            name: "Cancellation & Future Service Eligibility",
            text: [
                "Once a service or plan is confirmed and paid for, cancellation is subject to our refund terms.",
                "In the event of frequent cancellations or misuse, the platform reserves the right to restrict or deny future services to maintain system integrity and ensure fairness to other users.",
                "Refunds, if applicable, will be processed as per the Refund & Cancellation Policy."
            ]
        },
        {
            name: "Data Security",
            text: [
                "We use a combination of physical, electronic, and administrative safeguards to:",
                "Prevent unauthorized access or disclosure.",
                "Maintain data accuracy.",
                "Ensure appropriate use of your information.",
                "Your data is encrypted and stored securely. Only authorized personnel and healthcare providers have access based on your consent."
            ]
        },
        {
            name: "Use of Information",
            text: [
                "The information you share is used for:",
                "Booking and managing medical appointments",
                "Sending appointment reminders and service updates",
                "Enabling doctors to view relevant medical history",
                "Processing payments and maintaining transaction history",
                "Providing customer support",
                "We do not sell, rent, or share your personal or medical data with any third parties for marketing purposes."
            ]
        },
        {
            name: "Access & Control Over Your Data",
            text: [
                "You can access, update, or delete your personal information anytime from your user dashboard.",
                "You have full control over who can view your medical history and appointment records."
            ]
        },
        {
            name: "Data Retention",
            text: [
                "We retain your data for as long as your account is active or as needed to comply with legal, tax, or regulatory requirements."
            ]
        },
        {
            name: "Cookies and Tracking",
            text: [
                "We may use cookies and tracking tools to enhance user experience, monitor platform performance, and improve features. You can manage cookie preferences through your browser settings."
            ]
        },
        {
            name: "Changes to This Policy",
            text: [
                "We may update this Privacy Policy from time to time. When changes are made, we will notify users via email or through a platform alert. Continued use of our services implies acceptance of the revised terms."
            ]
        },
        {
            name: "Contact Us",
            text: [
                "If you have any questions or concerns regarding this Privacy Policy or the safety of your data, please contact our support team at vn@pruthatek.com"
            ]
        },

    ]

    return (
        <div className={`w-full ${montserrat.className} bg-white  mb-10 mt-20 `}>

            <div className='lg:w-[70%] md:w-[80%] w-[90%] bg-[#F9FAFB] drop-shadow-xl mx-auto rounded-[20px] p-5 '>
                <div className='flex justify-between items-center '>
                    <p className=' text-[#383A3E] font-semibold md:text-[24px] text-[20px] '>Privacy Policy</p>

                    <Link href="/" >
                        <X />
                    </Link>
                </div>


                <p className=' text-[#383A3E] font-semibold md:text-[20px] text-[16px] mt-4 '>Effective Date: 16/05/2025</p>
                <p className=' text-[#383A3E] font-medium md:text-[18px] text-[14px] mt-4 '>At Doctor CRM, we are deeply committed to protecting your personal, medical, and financial information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide while using our platform. By using our services, you consent to the practices described in this policy.
                </p>

                <div className='flex flex-col gap-y-4 mt-6 '>
                    {data.map((d, index) => {
                        return (

                            <>
                                <p key={index} className=' text-[#383A3E] font-medium md:text-[14px] text-[12px]  '> <b>{index + 1}. {d.name}</b></p>

                                <div className='flex flex-col gap-y-2 '>


                                    {d.text.map((t, i) => {
                                        return (
                                            <p key={i} className=' text-[#383A3E] font-medium md:text-[14px] text-[12px]  '> {t}</p>
                                        )
                                    })}
                                </div>
                            </>
                        )
                    })}

                </div>

            </div>

        </div>
    )
}

export default PrivacyPolicy
