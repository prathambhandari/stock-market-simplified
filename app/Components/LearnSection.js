import { RiStockLine } from "react-icons/ri";
import { data } from "../data"

export default function LearnSection() {

    return (
        <div className="bg-neutral-100 dark:bg-neutral-950 mt-8">
            <h1 className="text-2xl font-medium leading-normal tracking-wide mb-12 text-center dark:text-neutral-100">Transform Your Understanding of the Stock Market in 8 Simple Steps with Proven Strategies Designed for Today’s Financial Professionals.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4   ">
                {
                    data?.map((item, id) => (
                        <div className=" bg-white dark:bg-neutral-900  rounded-2xl p-6 h-full drop-shadow-sm hover:drop-shadow cursor-pointer relative" key={id}>
                            <RiStockLine className=" h-36 w-36 text-neutral-400/10 dark:text-neutral-700/20 absolute bottom-0 right-0 z-0" />

                            <h3 className=" text-md font-semibold  text-neutral-800 dark:text-neutral-800 mb-4  p-3 bg-primary z-30 rounded-2xl h-6 w-6 flex items-center justify-center">{id + 1}</h3>
                            <h3 className="text-lg font-medium text-neutral-900 dark:text-primary mb-2 z-30">{item.title}</h3>
                            <p className="text-base font-normal  text-neutral-600 dark:text-neutral-400 z-30  leading-relaxed">{item.description}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
