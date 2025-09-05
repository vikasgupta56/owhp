import { useState, useEffect } from "react";
import Navbar from "../../components/common/Navbar"
import Contact from "../../components/contact/Contact"
import { toggleMenu } from "../../utils/common";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Footer from "../../components/common/Footer";

export default function ContactPage() {
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
      <Contact open={open} />
      <Footer />
    </>
  )

}
