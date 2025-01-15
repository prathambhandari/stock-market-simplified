import { RiArrowRightLine } from "react-icons/ri";
import Link from 'next/link'

export default function HeroSection() {
    return (
        <div className="*:rounded-2xl *:p-8  grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4  gap-4 z-50">

            <div className="bg-primary flex flex-col items-start  relative col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 drop-shadow h-fit overflow-hidden group  ease-in-out duration-300">

                <div className="*:z-20  relative">
                    <h1 className="text-2xl font-semibold text-neutral-900 leading-normal mb-2 font-mono">Take Control of Your Financial Journey Today for <span className=" font-medium    decoration decoration-wavy underline-offset-4 ">Just ₹499!</span></h1>
                    <h1 className="text-lg font-normal tracking-wider  text-neutral-800  mb-3 w-10/12 leading-normal">With Proven strategies and immediate results at a fraction of the price.<br />  </h1>
                    <div className="border-t-2 border-dashed  border-primary pt-2 w-fit">
                        <h6 className="text-sm mb-3 text-neutral-800">* Save 80% Off Competitor Pricing. Limited Time Offer! </h6>

                        <Link href="https://course.prathambhandari.com/">
                            <button className="relative overflow-hidden dark:bg-neutral-950 bg-white dark:text-white text-neutral-950 dark:t rounded-lg px-4 py-2 text-base font-normal tracking-wide transition-all duration-75 ease-in-out drop-shadow hover:drop-shadow-md hover:scale-105 group transform-gpu ">
                                <div className="flex flex-row items-center justify-center">
                                    <span className="relative z-10  flex flex-row text-base">Enroll Now </span>
                                    <RiArrowRightLine className="ms-2 z-30 text-lg" />

                                </div>{/* Shimmer Layer */}

                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="w-full bg-white flex flex-col items-center justify-center  relative col-span-1 drop-shadow h-fit overflow-hidden group  ease-in-out duration-300">

                <div className="*:z-20   ">
                    <h1 className="text-lg font-medium font-mono text-neutral-800 leading-normal mb-2">With <span className=" font-semibold  decoration decoration-wavy underline-offset-4 "> 827+ </span>Learners and Growing Together.</h1>

                </div>
            </div>
        </div >
    )
}