 
import "./globals.css";
import { Montserrat, Work_Sans } from "next/font/google";


export const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
export const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${montserrat.className} ${workSans.className}`}>


        {children}

      </body>
    </html>
  );
}
 