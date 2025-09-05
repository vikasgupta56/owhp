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

export default function Home() {
   const [open, setOpen] = useState(false);
   gsap.registerPlugin(ScrollTrigger)
   useEffect(() => {

      return () => {
         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
         gsap.globalTimeline.clear(); // kill timelines if needed
      };
   }, [])



   return (
      <>
         <Navbar onClick={() => toggleMenu(open, setOpen)} />
         <Dabba open={open} />
         <div id="main" className={open ? 'main-down' : null}>
            <Section1 open={open} />
            <div id="gap" />
            <Section2 open={open} />
            <div id="gap" />
            <Section3 open={open} />

         </div>
      </>


   )
}