
import { Reviews } from "../data";
import { Star, Quote } from "lucide-react";

export default function ReviewSection() {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-950 py-12 ">
            <h1 className="text-3xl font-semibold leading-normal tracking-wide mb-10 text-center dark:text-neutral-100">
            Here’s what our 
            Learners have to say...
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Reviews?.map((item, id) => (
                    <div 
                        key={id} 
                        className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 relative"
                    >
                        {/* Quote Icon */}
                        <Quote className="absolute top-4 right-4 text-neutral-300 dark:text-neutral-700" size={24} />

                        {/* Avatar & Name */}
                        <div className="flex items-center gap-4 mb-3">
                          
                            <div>
                                <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary">{item.name}</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.designation}</p>
                            </div>
                        </div>

                        {/* Star Ratings */}
                        <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    size={18} 
                                    className={i < item.rating ? "text-yellow-500" : "text-gray-300 dark:text-neutral-600"} 
                                    fill={i < item.rating ? "currentColor" : "none"}
                                />
                            ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {item.comment}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
