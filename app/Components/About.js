import { RiUserStarLine } from "react-icons/ri";

export default function About() {
    return (
        <div className=" bg-neutral-50 dark:bg-neutral-900  flex flex-col items-start  relative p-8 drop-shadow-sm hover:drop-shadow cursor-pointer">
            <div className="z-20 relative">
                <div className=" flex flex-col items-start justify-start  ">
                    <div className="flex flex-row items-center  justify-center mb-4">
                        <RiUserStarLine className=" h-20 w-20 text-neutral-500 dark:text-lime-300  " />
                        <h1 className="text-2xl font-semibold text-neutral-600 dark:text-lime-300 tracking-wide ps-4 leading-normal">Pratham Bhandari</h1>
                    </div>
                    <div className="text-base font-normal text-neutral-600 dark:text-neutral-400  tracking-wide leading-loose">
                        <span className="font-semibold text-xl mb-3">My Promise to You As A Author</span>
                        <p className="">This course isn’t just about theory; it’s about delivering real, actionable results. Whether you’re starting from scratch or looking to refine your skills, you’ll walk away with the confidence to make informed decisions in the market.
                            Let me help you take control of your financial future. Together, we’ll unlock the secrets of the stock market and set you on the path to lasting success.
                        </p>
                        <h1 className="text-lg font-semibold text-neutral-400 dark:text-lime-300  tracking-wide mt-3 leading-normal">Founder - prathambhandari.com</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}