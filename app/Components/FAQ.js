"use client";
import { FAQData } from "../data";
import { RiArrowDownWideLine } from "react-icons/ri";
import { useState } from "react";

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const handleToggleFAQ = (id) => {
        setOpenFAQ((prevOpenFAQ) => (prevOpenFAQ === id ? null : id));
    };

    return (
        <div className="bg-white dark:bg-neutral-900 bg-noise p-6 drop-shadow-sm">
            <div className="text-center">
                <h1 className="mb-2 text-xl font-medium text-neutral-900 dark:text-primary">Frequently Asked Questions</h1>
                <h6 className="text-md text-neutral-500 tracking-wide">
                    These are the most commonly asked questions about courses.
                </h6>
            </div>
            <div className="mt-8">
                {FAQData.map((data, id) => (
                    <div className="my-6" key={id}>
                        <div className="flex flex-row items-center justify-between mb-2 cursor-pointer" onClick={() => handleToggleFAQ(id)}>
                            <h1 className="text-md font-medium text-neutral-900 dark:text-primary">
                                {data?.question}
                            </h1>
                            <RiArrowDownWideLine
                                className={`text-lime-300 text-2xl transform ${openFAQ === id ? "rotate-180" : ""
                                    } transition-transform duration-300`}

                            />
                        </div>
                        {openFAQ === id && (
                            <h6 className="text-base font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed  tracking-wide">
                                {data?.answer}
                            </h6>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
