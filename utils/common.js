// common.js
import gsap from "gsap/dist/gsap";

export const toggleMenu = (open, setOpen) => {
  if (open) {
    gsap.to('.menu', { height: "0vh", duration: .3 })
  } else {
    gsap.to('.menu', { height: "10vh", duration: .3 })
  }
  setOpen(!open);
  console.log("clicked", open);
};

export const isMobile = () => {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}