import Link from "next/link";
import About from "./Components/About";
import HeroSection from "./Components/HeroSection";
import LearnSection from "./Components/LearnSection";

import MVP from "./Components/MVP";
import { RiMoneyRupeeCircleFill, RiMoneyEuroCircleFill, RiGroup3Fill, RiBookOpenFill, RiStockLine, RiUserStarLine } from "react-icons/ri";
import HeaderSection from "./Components/HeaderSection";


export default function Home() {

  return (
    <>

      <HeaderSection/>
      <HeroSection />  
      <LearnSection />
      <About />
      {/* <MVP /> */}

      <div className="bg-neutral-900 bg-noise flex flex-col items-center p-8 ">
        <RiBookOpenFill className=" h-12 w-12  text-primary mb-4" />
        <div className=" font-normal tracking-wide text-neutral-400 leading-normal  flex flex-col items-center justify-center ">
          <h1 className="text-lg font-medium mb-2 text-neutral-300 text-center">Ready to Start Building Wealth Today?</h1>
          <h1 className="text-base font-normal mb-6 text-neutral-400 text-center leading-relaxed "> </h1>
          <Link href="https://course.prathambhandari.com/">
          <button className="w-fit bg-primary text-neutral-800 px-4 py-3 text-base rounded-xl font-medium">Quick Browse</button>
          </Link>
        </div>

      </div>
    </>
  );
}
