"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
import { RiApps2Line, RiCloseLargeFill } from "react-icons/ri";
import "./globals.css";
import Link from 'next/link';
import { useState } from "react";



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'], // You can add 'latin-ext' or other subsets as needed
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Load all weights
  variable: '--font-inter', // Optional CSS variable
  display: 'swap', // Improves performance by using fallback fonts until the font loads
});

export default function RootLayout({ children }) {

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased bg-neutral-100 dark:bg-neutral-950`}>

        <main className="max-w-screen-lg  mx-auto p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 ">
          <div className=" w-full text-gray-700 h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 lg:grid-cols-1 xl:grid-cols-1  *:rounded-2xl">
            {children}
          </div>
        </main>



        <div className=" cursor-pointer flex items-center justify-center flex-col fixed bottom-12 right-0 -translate-x-10 w-fit rounded-2xl z-50 bg-primary drop-shadow-lg border-2 border-neutral-950 p-4">

          {/* <div className='text-base  font-bold text-neutral-900'>
              Start Journey
            </div> */}
          {showMenu && (
            <div className="h-32 w-32 transition-all ease-in-out duration-150 ">
              <Link href={"/terms_and_condition"}>
                <h1 className="text-sm after:content-['_↗'] underline underline-offset-4">T&C</h1>
              </Link>

              <Link href={"/Privacy_policy"}>
                <h1 className="text-sm  after:content-['_↗'] underline underline-offset-4 my-2">Privacy Policy</h1>
              </Link>

              <Link href={"/Refund_policy"}>
                <h1 className="text-sm  after:content-['_↗'] underline underline-offset-4">Refund Policy</h1>
              </Link>
            </div>
          )}

          <div className='h-full w-full flex items-center justify-center hover:scale-110' onClick={handleShowMenu}>
            {showMenu ?
              <RiCloseLargeFill className=" text-neutral-950 h-6 w-6 " /> :
              <RiApps2Line className=" text-neutral-950 h-6 w-6 " />
            }
          </div>
        </div>

      </body>
    </html >
  );
}
