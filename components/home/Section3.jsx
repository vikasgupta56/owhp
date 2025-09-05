import Link from 'next/link'
import React, { useEffect } from 'react'
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


const Section3 = ({ open }) => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {

        // Page3 scroll animation
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#page3-container",
                scroller: "body",
                start: "0% 80%",
                end: "70% 0%",
                scrub: true,
                // markers: true
            }
        });

        tl3
        .to("#page3-container", {
            width: "100vw"
        }, "a")
            .to("#page3-text-top h2", {
                transform: "translateY(0%)",
                duration: 0.5,
            }, "a")
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
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.globalTimeline.clear(); // kill timelines if needed
        };
    }, [])

    return (
        <>
            <div id="page3-container" className={open ? 'page-anime page-open' : null}>
                <div id="page3-parent-container">
                    <div id="page3-text-top">
                        <h2>Our Services</h2>
                    </div>
                    <div id="page3">
                        <div className="p3-elems">
                            <h1>
                                Location Scouting  <img src="/services/serv1.jpg" alt="" /> & Permits
                            </h1>
                        </div>
                        <div className="p3-elems">
                            <img src="/services/serv2.jpg" alt="" />
                            <h1>Production Management</h1>
                        </div>
                        <div className="p3-elems">
                            <h1>
                                Crew & Casting <img src="./l-3.jpg" alt="" />
                            </h1>
                        </div>
                        <div className="p3-elems">
                            <img src="/services/serv3.jpg" alt="" />
                            <h1>Equipment & Logistics</h1>
                        </div>
                        <div className="p3-elems">
                            <h1>
                                Drone & Aerial Filming <img src="/services/serv4.jpg" alt="" />
                            </h1>
                        </div>
                    </div>
                    <div id="text-float">
                        <h1 className="float-title title1">
                            Filming made easy in Greece. &nbsp;&nbsp;Your shoot, our expertise. &nbsp;&nbsp;Seamless
                            production, stunning locations. &nbsp;&nbsp;Local support, global standards. &nbsp;&nbsp;
                            Greece, captured perfectly. &nbsp;&nbsp; Filming made easy in Greece. &nbsp;&nbsp;Your shoot,
                            our expertise. &nbsp;&nbsp;Seamless production, stunning locations. &nbsp;&nbsp;Local
                            support, global standards. &nbsp;&nbsp;Greece, captured perfectly. &nbsp;&nbsp;Filming made
                            easy in Greece. &nbsp;&nbsp;

                        </h1>
                        <div className="float-img">
                            <img src="/greece-idol.png" alt="Statue" />
                        </div>
                        <h1 className="float-title title2">
                            Filming made easy in Greece.&nbsp;&nbsp; Your shoot, our expertise.&nbsp;&nbsp; Seamless
                            production, stunning locations.&nbsp;&nbsp; Local support, global standards.&nbsp;&nbsp;
                            Greece, captured perfectly.&nbsp;&nbsp; Filming made easy in Greece.&nbsp;&nbsp; Your shoot,
                            our expertise.&nbsp;&nbsp; Seamless production, stunning locations.&nbsp;&nbsp; Local
                            support, global standards.&nbsp;&nbsp; Greece, captured perfectly.&nbsp;&nbsp; Filming made
                            easy in Greece.&nbsp;&nbsp; Your shoot, our expertise.&nbsp;&nbsp; Seamless production,
                            stunning locations.&nbsp;&nbsp; Local support, global standards. Greece,
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
                                <a href="mailto:contact@oneworldhighwayproduction.com">contact@oneworldhighwayproduction.com</a>
                            </p>
                            <p>
                                <a href="tel:+919819350779">+91 98193 50779</a>
                            </p>
                            <p>
                                <a href="">Athens, Greece</a>
                            </p>
                        </div>
                        {/* General */}
                        {/* <div className="footer-col">
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
                     </div> */}
                        {/* Services */}
                        <div className="footer-col">
                            <h4>Links</h4>
                            <p>
                                <a href="#">Home</a>
                            </p>
                            <p>
                                <a href="#">Work</a>
                            </p>
                            <p>
                                <a href="#">Contact</a>
                            </p>
                        </div>
                        {/* About */}
                        <div className="footer-col brand">
                            <h2>One World Highway Production</h2>
                            <h5>
                                One World Highway Productions offers end-to-end filming services in Greece. From permits and crews to breathtaking locations, we make production seamless.
                            </h5>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <h4>© One World Highway Production 2025 All rights reserved. &nbsp;| &nbsp;Developed by <span className="vyu-span"><Link href={"https://www.thevyu.com"} target="_blank">The Vyu</Link></span></h4>
                        <div className="social-links">
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Section3