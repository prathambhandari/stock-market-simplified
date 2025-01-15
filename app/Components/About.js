import { RiUserStarLine } from "react-icons/ri";

export default function About() {
    return (
        <div className=" bg-primary  flex flex-col items-start  relative p-8 drop-shadow-sm hover:drop-shadow cursor-pointer">
            <div className="z-20 relative">
                <div className=" flex flex-col items-start justify-start  ">
                    <div className="flex flex-row items-center  justify-center mb-4">
                        <RiUserStarLine className=" h-8 w-8 text-neutral-900   " />
                        <h1 className="text-lg font-semibold text-neutral-900  tracking-wide ps-4 leading-normal">Pratham Bhandari</h1>
                    </div>
                    <div className="text-base font-normal  text-neutral-900   tracking-wide leading-loose">
                        <span className="font-semibold text-md mb-2">My Promise to You As A Author</span>
                        <p className="text-base leading-relaxed">This course isn’t just about theory; it’s about delivering real, actionable results. Whether you’re starting from scratch or looking to refine your skills, you’ll walk away with the confidence to make informed decisions in the market.

                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}