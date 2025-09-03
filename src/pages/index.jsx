import { useState, useEffect } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";

export default function Home() {
   gsap.registerPlugin(ScrollTrigger)
   const [open, setOpen] = useState(false)
   useEffect(() => {


      window.addEventListener('scroll', (e) => {
         // if (true) { setOpen(false); }
      })

      // menuToggle()
      // ============== LOADER FUNCTION ==============
      function Loader() {
         // Loader ke time scroll disable kar do
         document.body.style.overflow = "hidden";

         var tl = gsap.timeline();
         var span = document.querySelector('#page1 span');
         var count = 0;
         var maxCount = 100;
         var animationDuration = 0.1; //3
         var interval = animationDuration * 1000 / maxCount;

         // Counter start kar do
         var counterInterval = setInterval(function () {
            if (count < maxCount) {
               count++;
               span.innerText = count;
            } else {
               clearInterval(counterInterval);
            }
         }, interval);

         tl.to("#container", {
            width: "20vw",
            height: "47vh",
            ease: "power2.inOut",
            duration: 2
         });


         tl.to("#page1", {
            position: "absolute",
            top: "32%",
            width: "90vw",
            duration: 1,
            delay: 0.1,
            onComplete: function () {
               // Loader complete hone ke baad scroll enable kar do
               document.body.style.overflow = "auto";
               // Extra ensure karo ki scroll top par hai
               window.scrollTo(0, 0);
            }
         }, "c")
         tl.to("#parent", {
            height: "70vh",
            duration: 1
         }, "d")
         tl.to("#partzero", {
            height: "47vh",
            duration: 1
         }, "d")
         tl.to("#head-text", {
            display: "block",
            duration: 1
         }, "d")
         tl.to("#parent-2", {
            display: "flex",
            duration: 1
         }, "d")
      }

      // Loader function call kar do
      Loader();

      // ============== SCROLL ANIMATIONS ==============

      // Text ko slide up karo jab page1 grow ho
      gsap.to("#text", {
         y: function () {
            return -document.getElementById("text").offsetHeight;
         },
         ease: "none",
         scrollTrigger: {
            trigger: "#page1",
            start: "top top",
            end: "bottom top",
            scrub: true
         }
      });

      // Page1 scroll animation
      let tp1 = gsap.timeline({
         scrollTrigger: {
            trigger: "#page1-container",
            // scroller: "body",
            start: "25% 52%",
            end: "90% 0%",
            scrub: true,
            // markers: true
         }
      });

      tp1
         .to("#page1", {
            width: "100%",
            height: "230vh",
            duration: 1,
         }, "a")
         .to(".lol", {
            top: "20%",
            delay: 0.2
         }, "a")
         .to("#container", {
            width: "24vw",
            height: "60vh",
         }, "a")
         .to("#head-text #head-text-content", {
            transform: "translateY(0%)",
            // delay: 0.5,
         }, "a")
         .to("#parent-2-top-text h1", {
            transform: "translateY(0%)",
            duration: 1,
            onStart: function () {
               document.querySelector('#parent-2-top-text').style.display = 'block';
            }
         }, "a")
         .to("#dabba #div-img2", {
            // opacity: 1,
            display: "block",
            duration: 0,
            delay: 0.3
         }, "b")
         .to("#parent-2-top-text>h1", {
            fontSize: "30px",
            delay: 1,
            duration: 2
         }, "b")
         .to("#parent-2>h2", {
            fontSize: "2vh",
            marginTop: "0vh",
            delay: 1,
            duration: 2

         }, "b")
         .to("#page1", {
            width: "80%",
            height: "140vh",
            duration: 1,
            delay: 1,
         }, "b")



      // Page2 scroll animation
      let tl2 = gsap.timeline({
         scrollTrigger: {
            trigger: "#page2-container",
            scroller: "body",
            start: "5% 75%",
            end: "70% 0%",
            // markers:true,
            scrub: true,
         }
      });

      tl2
         .to("#page2", {
            width: "100%",
            height: "180vh",
            duration: 1,
         }, "a")
         .to("#page2 .down-img", {
            top: "50%",
            duration: 1.5,
         }, "a")
         .to("#page2-text-top h2", {
            transform: "translateY(0%)",
            duration: 0.5,
         }, "a")
         .to("#dabba #div-img3", {
            display: "block",
            duration: 0
         })

         .to("#page2", {
            width: "80%",
            height: "140vh",
            duration: 1,
         }, "b")
         .to("#page2 .page-2-img-sec", {
            height: "17%",
            duration: 1,
         }, "b");



      // Page 4 animations
      let tl4 = gsap.timeline({
         scrollTrigger: {
            trigger: "#page4-container",
            scroller: "body",
            start: "19% 75%",
            end: "70% 0%",
            scrub: true,
            // markers: true
         }
      });

      tl4
         .to("#page4", {
            width: "100%",
            height: "150vh",
            duration: 0.5,
         }, "a")
         .to("#page4 .down-img", {
            top: "28%",
            duration: 1.5,
         }, "a")
         .to("#page4-text-top h2", {
            transform: "translateY(0%)",
            duration: 0.5,
         }, "a")


      // Open gallery with specific collection
      function openGallery(galleryKey) {
         if (!galleryCollections[galleryKey]) return;

         currentGallery = galleryKey;
         const wrapper = document.getElementById('gallery-wrapper');
         const titleElement = document.getElementById('gallery-title');

         // Update gallery title
         titleElement.textContent = galleryCollections[galleryKey].title;

         // Create gallery HTML
         createGalleryHTML(galleryKey);

         // Show wrapper
         wrapper.classList.add('active');
         document.body.style.overflow = 'hidden';

         // Reset scroll position first
         wrapper.scrollTop = 0;

         // Initialize gallery animations after wrapper is active
         setTimeout(() => {
            imageslider();
         }, 200);
      }

      function closeGallery() {
         const wrapper = document.getElementById('gallery-wrapper');
         wrapper.classList.remove('active');
         document.body.style.overflow = 'auto';

         // Clean up gallery ScrollTrigger instances
         galleryScrollTriggers.forEach(trigger => {
            if (trigger) trigger.kill();
         });
         galleryScrollTriggers = [];

         // Reset scroll position
         wrapper.scrollTop = 0;
         currentGallery = null;

         // Refresh main page ScrollTrigger
         setTimeout(() => {
            ScrollTrigger.refresh();
         }, 100);
      }

      // Prevent body scroll when gallery is open
      document.getElementById('gallery-wrapper').addEventListener('wheel', function (e) {
         e.stopPropagation();
      }, { passive: true });


      // Page3 scroll animation
      let tl3 = gsap.timeline({
         scrollTrigger: {
            trigger: "#page3-container",
            scroller: "body",
            start: "5% 75%",
            end: "70% 0%",
            scrub: true,
            // markers: true
         }
      });

      tl3
         .to("#page3-parent-container", {
            width: "100%",
            height: "250vh",
            duration: 0.5,
         }, "a")
         .to("#page3-text-top h2", {
            transform: "translateY(0%)",
            duration: 0.5,
         }, "a")
         .to("#dabba #div-img4", {
            display: "block",
            duration: 0.1
         })
         .to("#text-float .title1", {
            transform: "translateX(30%)",
            ease: "power2.out",
            duration: 1.5
         }, "f")
         .to("#text-float .title2", {
            transform: "translateX(-30%)",
            ease: "power2.out",
            duration: 1.5
         }, "f")

      return () => {
         window.removeEventListener("scroll", handleScroll);
         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
         gsap.globalTimeline.clear(); // kill timelines if needed
      };
   }, [])


   let clickfunc = () => {
      if (open) {
         gsap.to('.menu', {
            height: "0vh",
            duration: .3
         })
      }
      else {
         gsap.to('.menu', {
            height: "10vh",
            duration: .3
         })
      }
      setOpen(!open)


      console.log("clicked")
      console.log(open)
   }


   return (
      <>
         <button id="menu-button" onClick={clickfunc}>Menu</button>
         <div className="menu">
            <div className="menu-rel">
               <div className="menu-inner">
                  <Link href="/"><div className="menu-item">Home</div></Link>
                  <Link href="/work"><div className="menu-item">Work</div></Link>
                  <Link href="/contact"><div className="menu-item">Contact</div></Link>
               </div>
            </div>
         </div>
         <div id="dabba">
            <div className="dabba-wrapper">
               <div className={`dabba-in ${open ? 'dabba-anime' : null}`}>
                  <img
                     id="div-img1"
                     src="/WhatsApp Image 2025-08-26 at 19.35.59_355f49be.jpg"
                     alt=""
                  />
               </div>
            </div>

            <div className="dabba-wrapper">
              <div className={`dabba-in ${open ? 'dabba-anime' : null}`}>
                  <img id="div-img2" src="/l-1.jpg" alt="" />
               </div>
            </div>
            <div className="dabba-wrapper"><img id="div-img3" src="/l-2.jpg" alt="" /></div>
            <div className="dabba-wrapper"><img id="div-img4" src="/l-6.jpg" alt="" /></div>
         </div>
         <div id="main" className={open?'main-down':null}>

            <div id="page1-container" className={open ? 'page-anime page-open' : null}>
               <div id="text">
                  <div id="content">
                     <div id="image">
                        <img src="/l-1.jpg" alt="" />
                     </div>
                     <h2>
                        <span style={{ fontSize: 90 }}> One World</span> <br /> Production
                        Highway.
                     </h2>
                  </div>
               </div>

               {/* <div className={`page-wrapper ${open ? "page-wrapper-anime" : null}`}> */}
               <div id="page1">
                  <div id="parent">
                     <div id="partzero">
                        <img src="/l-1.jpg" alt="" />
                     </div>
                     <div className="lol" id="partzero">
                        <img src="/l-3.jpg" alt="" />
                     </div>
                     <div id="part1">
                        <div id="head-text">
                           <h2 id="head-text-content">Your Vision. Our Landscape</h2>
                        </div>
                        <div id="container">
                           <div className="elems" id="elems1">
                              <img src="/l-7.jpg" alt="" />
                           </div>
                           <div className="elems" id="elems2">
                              <img src="/l-1.jpg" alt="" />
                           </div>
                           <div className="elems" id="elems3">
                              <img src="/l-8.jpg" alt="" />
                           </div>
                           <div className="elems" id="elems4">
                              <img src="/l-3.jpg" alt="" />
                           </div>
                           <div className="elems" id="elems5">
                              <img src="/l-5.jpg" alt="" />
                           </div>
                           <div className="elems" id="elems6">
                              <img src="/l-6.jpg" alt="" />
                           </div>
                        </div>
                        <span id="count" className="count-bold">
                           0
                        </span>
                     </div>
                     <div id="partzero">
                        <img src="./l-7.jpg" alt="" />
                     </div>
                     <div className="lol" id="partzero">
                        <img src="./l-8.jpg" alt="" />
                     </div>
                  </div>
                  <div id="parent-2">
                     <div id="parent-2-top-text">
                        <h1>Why Film in Greece</h1>
                     </div>
                     <h2 style={{ textAlign: "center" }} className="centered-text">
                        A Cinematic Playground Like No Other <br />
                        From sun-drenched islands and ancient ruins to dramatic mountains
                        and sleek urban <br />
                        backdrops— <span> Greece offers</span> unmatched diversity in
                        locations that can double for anywhere in <br />
                        the world. Whether you’re shooting
                        <span>
                           a historical epic, indie romance, or a high-concept commercial,
                        </span>
                        <br />
                        Greece sets the perfect scene.
                     </h2>
                  </div>
               </div>


               {/* </div> */}
            </div>
            <div id="gap" />
            <div id="page2-container" className={open ? 'page-anime page-open' : null}>
               <div id="page2">
                  <div id="page2-text-top">
                     <h2>Filming locations Showcase</h2>
                  </div>
                  <div className="page-2-img-sec" id="image-sec-1">
                     <div id="img">
                        <img src="./l-1.jpg" alt="" />
                        <h3 className="img-caption">Blue Skies of Greece</h3>
                     </div>
                     <div className="down-img" id="img">
                        <img src="./l-2.jpg" alt="" />
                        <h3 className="img-caption">Historic Island Views</h3>
                     </div>
                     <div id="img">
                        <img src="./l-3.jpg" alt="" />
                        <h3 className="img-caption">Ancient City Charm</h3>
                     </div>
                     <div className="width-big" id="img">
                        <img src="./l-7.jpg" alt="" />
                        <h3 className="img-caption">Sunset Over Ruins</h3>
                     </div>
                     <div id="img">
                        <img src="./l-5.jpg" alt="" />
                        <h3 className="img-caption">Vibrant Coastal Life</h3>
                     </div>
                  </div>
                  <div className="page-2-img-sec" id="image-sec-2">
                     <div id="img">
                        <img src="./l-1.jpg" alt="" />
                        <h3 className="img-caption">Blue Skies of Greece</h3>
                     </div>
                     <div className="down-img bottom-down" id="img">
                        <img src="./l-2.jpg" alt="" />
                        <h3 className="img-caption">Historic Island Views</h3>
                     </div>
                     <div id="img">
                        <img src="./l-3.jpg" alt="" />
                        <h3 className="img-caption">Ancient City Charm</h3>
                     </div>
                     <div className="down-img width-big bottom-down" id="img">
                        <div id="normal-part">
                           <img src="./l-7.jpg" alt="" />
                           <h3 className="img-caption">Sunset Over Ruins</h3>
                        </div>
                     </div>
                     <div id="img">
                        <img src="./l-5.jpg" alt="" />
                        <h3 className="img-caption">Vibrant Coastal Life</h3>
                     </div>
                  </div>
               </div>
            </div>
            {/* Dynamic Gallery Slider */}
            <div className="wrapper" id="gallery-wrapper">
               <button className="close-gallery" onclick="closeGallery()">
                  ✕ Close
               </button>
               <div className="gallery-title" id="gallery-title">
                  Gallery
               </div>
               <div className="gallery" id="dynamic-gallery">
                  {/* Populated dynamically */}
               </div>
            </div>
            <div id="gap" />
            <div id="page3-container" className={open ? 'page-anime page-open' : null}>
               <div id="page3-parent-container">
                  <div id="page3-text-top">
                     <h2>Our Services</h2>
                  </div>
                  <div id="page3">
                     <div className="p3-elems">
                        <h1>
                           STRATÉGIE DE <img src="./l-1.jpg" alt="" /> MARQUE
                        </h1>
                     </div>
                     <div className="p3-elems">
                        <img src="./l-2.jpg" alt="" />
                        <h1>IDENTITÉ VISUELLE</h1>
                     </div>
                     <div className="p3-elems">
                        <h1>
                           DIRECTION ARTISTIQUE <img src="./l-3.jpg" alt="" />
                        </h1>
                     </div>
                     <div className="p3-elems">
                        <img src="./l-5.jpg" alt="" />
                        <h1>SITE INTERNET</h1>
                     </div>
                     <div className="p3-elems">
                        <h1>
                           EVENT &amp; COMMUNITY <img src="./l-8.jpg" alt="" />
                        </h1>
                     </div>
                  </div>
                  <div id="text-float">
                     <h1 className="float-title title1">
                        Filming made easy in Greece. Your shoot, our expertise. Seamless
                        production, stunning locations. Local support, global standards.
                        Greece, captured perfectly. Filming made easy in Greece. Your shoot,
                        our expertise. Seamless production, stunning locations. Local
                        support, global standards. Greece, captured perfectly. Filming made
                        easy in Greece. Your shoot, our expertise. Seamless production,
                        stunning locations. Local support, global standards. Greece,
                        captured perfectly.
                     </h1>
                     <div className="float-img">
                        <img src="./Text float.png" alt="Statue" />
                     </div>
                     <h1 className="float-title title2">
                        Filming made easy in Greece. Your shoot, our expertise. Seamless
                        production, stunning locations. Local support, global standards.
                        Greece, captured perfectly. Filming made easy in Greece. Your shoot,
                        our expertise. Seamless production, stunning locations. Local
                        support, global standards. Greece, captured perfectly. Filming made
                        easy in Greece. Your shoot, our expertise. Seamless production,
                        stunning locations. Local support, global standards. Greece,
                        captured perfectly.
                     </h1>
                     {/* <button class="float-btn">START PLANNING</button> */}
                  </div>
               </div>
               <footer className="footer">
                  <div className="footer-container">
                     {/* Contact */}
                     <div className="footer-col">
                        <h4>Contact</h4>
                        <p>
                           <a href="mailto:contact@giannitan.com">contact@giannitan.com</a>
                        </p>
                        <p>
                           <a href="tel:+31628331595">+31 6 28331595</a>
                        </p>
                        <p>
                           <a href="">Weesp, The Netherlands</a>
                        </p>
                     </div>
                     {/* General */}
                     <div className="footer-col">
                        <h4>General</h4>
                        <p>
                           <a href="#">Company No. #900209102</a>
                        </p>
                        <p>
                           <a href="#">VAT No. NL004780473B69</a>
                        </p>
                        <p>
                           <a href="#">Cookie Statement</a>
                        </p>
                     </div>
                     {/* Services */}
                     <div className="footer-col">
                        <h4>Services</h4>
                        <p>
                           <a href="#">Webdesign</a>
                        </p>
                        <p>
                           <a href="#">Web Support</a>
                        </p>
                        <p>
                           <a href="#">Branding</a>
                        </p>
                     </div>
                     {/* About */}
                     <div className="footer-col brand">
                        <h2>GianniTan</h2>
                        <h5>
                           GianniTan redefines client experience with bespoke, high-end
                           websites and exclusive brand identities.
                        </h5>
                     </div>
                  </div>
                  <div className="footer-bottom">
                     <h5>© GianniTan 2025 All rights reserved.</h5>
                     <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                     </div>
                  </div>
               </footer>
            </div>
         </div>
      </>


   )
}