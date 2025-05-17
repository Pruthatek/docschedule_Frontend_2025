import Head from "next/head";
import "./globals.css";
import { Montserrat, Work_Sans } from "next/font/google";


export const montserrat = Montserrat({subsets: ["latin"], weight: ["400", "500", "600", "700"]}) 
export const workSans = Work_Sans({subsets: ["latin"], weight: ["400", "500", "600", "700"]})

// export const metadata = {
//   title: 'DoctorCRM - Your Medical Practice Assistant',
//   description: 'DoctorCRM helps you manage patients, appointments, and medical records with ease.',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head> 
        <title>DoctorCRM - Your Medical Practice Assistant</title>
        <meta name="description" content="Learn more about us." />
        <meta property="og:title" content="About Us - My Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      <body className={``} >
        
        {children}
       
      </body>
    </html>
  );
}
