import About from "./Components/About";
import HeroSection from "./Components/HeroSection";
import LearnSection from "./Components/LearnSection";
import MVP from "./Components/MVP";
import { RiMoneyRupeeCircleFill, RiMoneyEuroCircleFill, RiGroup3Fill, RiBookOpenFill, RiStockLine, RiUserStarLine } from "react-icons/ri";


export default function Home() {

  return (
    <>
      <HeroSection />
      <LearnSection />
      <About />
      {/* <MVP /> */}

      <div className="bg-neutral-900   flex flex-col items-center p-8 ">
        <RiBookOpenFill className=" h-12 w-12  text-primary mb-4" />
        <div className=" font-normal tracking-wide text-neutral-400 leading-normal  flex flex-col items-center justify-center ">
          <h1 className="text-lg font-medium mb-2 text-neutral-300 text-center">Ready to Start Building Wealth Today?</h1>
          <h1 className="text-base font-normal mb-6 text-neutral-400 text-center leading-relaxed "> We’re confident you’ll love the course, but if you’re not satisfied within the first 30 days, we’ll offer you a upcoming courses for free, no questions asked.</h1>
          <button className="w-fit bg-primary text-neutral-800 px-4 py-3 text-base rounded-xl font-medium">Quick Browse</button>
        </div>

      </div>
    </>
  );
}
