import { useState, useEffect } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Section2 from "../../components/home/Section2";
import Section1 from "../../components/home/Section1";
import Section3 from "../../components/home/Section3";
import Dabba from "../../components/common/Dabba";
import Navbar from "../../components/common/Navbar";
import { toggleMenu } from "../../utils/common";
import Footer from "../../components/common/Footer";
import HomeSEO from "../../components/seo/Home";
import MobHome from "../../components/home/MobHome";
// import "../styles/mobhome.css"

export default function Home() {
   const [open, setOpen] = useState(false);
   const [mobile, setMobile] = useState(false);
   gsap.registerPlugin(ScrollTrigger)
   useEffect(() => {
      if (window.innerWidth < 768) { setMobile(true) }
      return () => {
         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
         gsap.globalTimeline.clear(); // kill timelines if needed
      };
   }, [])



   return (
      <>
         <HomeSEO />

         <Navbar onClick={() => toggleMenu(open, setOpen)} />
         <Dabba open={open} />

         <div id="main" className={`mob-none ${open ? 'main-down' : null}`}>
            <Section1 open={open} />
            <div id="gap" />
            <Section2 open={open} />
            <div id="gap" />
            <Section3 open={open} />
            <Footer />
         </div>


         <div id="main-mob" className="mob-block">
            <MobHome />
         </div>

      </>


   )
}