import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { RiMenu4Fill } from "react-icons/ri";
import "./globals.css";



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-neutral-100 dark:bg-neutral-950`}>

        <main className="max-w-screen-lg  mx-auto p-8 ">
          <div className=" w-full text-gray-700 h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-1 *:shadow-sm *:rounded-2xl">
            {children}
          </div>
        </main>

        <div className="flex items-center justify-between fixed bottom-24 left-1/2 -translate-x-1/2 w-[10vw] rounded-full z-50 bg-lime-300 drop-shadow-lg border-2 border-neutral-950 py-2 px-4">

          <div className='text-sm font-mono font-bold text-neutral-900'>
            PB
          </div>
          <div className='h-full'>
            <RiMenu4Fill className="text-2xl text-neutral-950 h-6 w-6" />
          </div>
        </div>
      </body>
    </html >
  );
}
