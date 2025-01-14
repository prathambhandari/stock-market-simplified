import { RiArrowRightLine } from "react-icons/ri";
export default function HeroSection() {
    return (
        <div className="*:rounded-2xl *:p-8  z-50">

            <div className="bg-lime-300 flex flex-col items-start  relative col-span-3 drop-shadow-md h-fit overflow-hidden group  ease-in-out duration-300">

                <div className="*:z-20 font-mono relative">
                    <div className="absolute rotate-90 text-4xl  font-bold  tracking-wider text-lime-500/60 z-10 text-center -right-[8rem] top-1/2 -translate-y-1/2 "> Stock Market</div>
                    <h1 className="text-4xl font-bold  text-neutral-900 leading-normal mb-2">Take Control of Your Financial Journey Today for <span className=" font-semibold text-lime-700   decoration decoration-wavy underline-offset-4 ">Just ₹499!</span></h1>
                    <h1 className="text-xl font-normal tracking-wider  text-neutral-900  mb-6 w-10/12 leading-normal">With Proven strategies and immediate results at a fraction of the price.<br />  </h1>
                    <div className="border-t-2 border-dashed  border-lime-500/60 pt-6 w-fit">
                        <h6 className="text-sm mb-3 text-lime-600">* Save 80% Off Competitor Pricing. Limited Time Offer! </h6>

                        <button className="relative overflow-hidden bg-white text-neutral-950 rounded-lg px-6 py-3 text-lg font-medium tracking-wide transition-all duration-75 ease-in-out drop-shadow hover:drop-shadow-md group transform-gpu ring-2 ring-neutral-900">
                            <div className="flex flex-row items-center justify-center">
                                <span className="relative z-10  flex flex-row">Enroll Now </span>
                                <RiArrowRightLine className="ms-2 z-30 text-lg" />

                            </div>{/* Shimmer Layer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-lime-100 via-white to-lime-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-full transition-transform duration-500 ease-in-out">

                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </div >
    )
}