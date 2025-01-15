import { RiMoneyRupeeCircleLine, RiGroup3Fill } from "react-icons/ri";

export default function MVP() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 *:rounded-2xl">
            <div className="h-fit col-span-1 bg-neutral-50 dark:bg-neutral-900 flex flex-col items-start  relative p-8 drop-shadow-sm hover:drop-shadow cursor-pointer">
                <div className="z-20 relative">
                    <div className=" flex flex-col items-start justify-start  ">
                        <div className="flex flex-col items-start  justify-center mb-2">
                            <RiMoneyRupeeCircleLine className=" h-28 w-28 text-neutral-500  mb-4" />
                            <h1 className="text-2xl font-semibold  text-neutral-600 dark:text-primary tracking-wide leading-normal">Unlock the Full Course for Only ₹499 – Save Over 80% Compared to Other Platforms!</h1>
                        </div>
                        <h1 className="text-base font-normal text-neutral-600 dark:text-neutral-400  tracking-wide leading-loose">Why pay ₹8999/- or more for the same stock market knowledge when you can learn from experts at a fraction of the cost? Our course offers the same value at an unbeatable price. For just ₹499, you’ll gain access to actionable strategies, expert insights, and a community of learners, making it the best value around.</h1>

                    </div>
                </div>
            </div>

            <div className="h-full col-span-1 bg-neutral-50 dark:bg-neutral-900 flex flex-col items-start justify-start p-8 rounded-2xl  relative drop-shadow-sm hover:drop-shadow cursor-pointer">
                <RiGroup3Fill className=" h-28 w-28  text-neutral-500 mb-4 " />
                <h1 className="text-2xl font-semibold  text-neutral-600 dark:text-primary tracking-wide mb-2">What Makes Us Different?</h1>
                <ul className="text-base font-normal text-neutral-600 dark:text-neutral-400 tracking-wide  *:leading-normal mb-8  *:p-2  list-inside list-['_※']">
                    <li className=""> Unlike free YouTube videos or other generic online courses, we offer structured, professional-grade training designed to provide real results.</li>
                    <li className=" " > We focus on practical, actionable knowledge, not just theory.</li>
                    <li className="" > Plus, with ongoing support and updates, we ensure you&apos;re always ready for the market’s next move.</li>
                </ul>
                <button className="bg-primary text-neutral-950 rounded-lg px-3 py-2 text-lg font-medium tracking-wide">Start My Journey Now!</button>

            </div>
        </div>

    )
}
