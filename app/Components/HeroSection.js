"use client";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const [timeLeft, setTimeLeft] = useState(12 * 60);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        if (typeof window !== "undefined") {
            const storedTime = localStorage.getItem("timeLeft");
            if (storedTime) {
                setTimeLeft(parseInt(storedTime, 10));
            }
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            if (timeLeft > 0) {
                const timer = setInterval(() => {
                    setTimeLeft((prevTime) => {
                        const updatedTime = prevTime - 1;
                        localStorage.setItem("timeLeft", updatedTime);
                        return updatedTime;
                    });
                }, 1000);

                return () => clearInterval(timer);
            } else {
                localStorage.removeItem("timeLeft");
            }
        }
    }, [timeLeft, isMounted]);


    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="*:rounded-2xl *:p-5 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 z-50">
            <div className="bg-noise bg-primary flex flex-col items-start relative col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 drop-shadow h-fit overflow-hidden group ease-in-out duration-300">
                {/* Image Section */}
             {/*  <div
                    className="relative w-full h-48 lg:h-[50vh] overflow-hidden pb-8 bg-black rounded-2xl"
                    style={{
                        backgroundImage: "url('/assets/thumbnail.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                 */} 

                <div className="*:z-20 relative">
                    <h1 className="text-2xl font-semibold text-neutral-900 leading-normal mb-2 font-mono pt-8">
                        Take Control of Your Financial Journey Today for{" "}
                        <span className="font-medium decoration decoration-wavy underline-offset-4 ">
                            Just ₹449!
                        </span>
                    </h1>
                    <h1 className="text-lg font-normal tracking-wider text-neutral-800 mb-3 w-10/12 leading-normal">
                        With actionable strategies and tangible outcomes at a fraction of the price.
                        <br />
                    </h1>

                    <div className="border-t-2 border-dashed border-primary pt-2 w-full">
                        <h6 className="text-sm mb-3 text-neutral-800 pb-2">
                            * Save 94% Off Competitor Pricing.{" "}
                        </h6>

                        <h1 className="text-l font-medium text-neutral-900 leading-normal mb-2 font-mono ">
                        🎉 Early Bird Offer! First 50 learners get the course for just ₹198 (instead of ₹449)!
                          </h1>
                          <h1 className="text-l font-medium text-neutral-900 leading-normal mb-2 font-mono pb-8">
                        🏷️ Use Code: "<span className="font-bold font-sans"> FIRST50 </span>" at Checkout. Hurry! Limited Spots!
                          </h1>

                        <div className="bg-black bg-opacity-60  text-white p-2  animate-bounce rounded-lg max-w-[220px] text-center">
                            <p className="text-sm font-medium tracking-wide ">
                                Hurry! Offer ends in:{" "}
                                {String(minutes).padStart(2, "0")}:
                                {String(seconds).padStart(2, "0")}
                            </p>
                        </div>
                        
                        <div className="pb-4 "></div>
                        <Link href="https://course.prathambhandari.com/">
                            <button className="w-full sm:w-full md:w-fit lg:w-fit xl:w-fit relative overflow-hidden dark:bg-neutral-950 bg-white dark:text-white text-neutral-950 rounded-lg px-4 py-3 text-base font-normal tracking-wide transition-all duration-75 ease-in-out drop-shadow hover:drop-shadow-md hover:scale-105 group transform-gpu">
                                <div className="flex flex-row items-center justify-center">
                                    <span className="relative z-10 flex flex-row text-base">
                                        Enroll Now{" "}
                                    </span>
                                    <RiArrowRightLine className="ms-2 z-30 text-lg" />
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
