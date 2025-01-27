"use client"
import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full bg-neutral-100 dark:bg-neutral-900 bg-noise rounded-2xl p-6 flex justify-between items-center drop-shadow-sm">
            <div className="flex items-center">
                <img
                    src="/assets/Pb.png"
                    alt="Logo"
                    className="h-10"
                />
            </div>

            <div className="flex items-center">
                <Link href="https://course.prathambhandari.com/" className="dark:text-lime-300 text-neutral-900 font-medium hover:underline underline-offset-8 drop-shadow-sm ">
                    Courses
                </Link>
            </div>
        </header>
    );
}
