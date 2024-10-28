import Image from "next/image";
import Nav from "./components/Nav";
import HeroSection from "./components/Hero-section";
import { StickyScrollRevealDemo } from "./components/StickyScrollRevealDemo";
import AboutUs from "./aboutus/page";
import { HeroScrollDemo } from "./components/HeroScrollDemo";
import ScrollBackgroundSection from "./components/ScrollBackgroundSection";
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import Packages from "./components/packages";
import Footer from "./components/Footer";
import Tours from "./components/Tours";


export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-t from-[#868F9] to-[#596164]" >
     {/* <Nav/> */}
     <HeroSection/>
    
    <AboutUs/>
   
    <HeroScrollDemo/>
    <Packages/>
    <ScrollBackgroundSection/>
    <Tours/>
   
    {/* <Footer/> */}
    </div>
  );
}
