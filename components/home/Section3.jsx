import React, { useEffect } from 'react'
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import serv1 from "../../public/services/serv1.webp"
import serv2 from "../../public/services/serv2.webp"
import serv3 from "../../public/services/serv3.webp"
import serv4 from "../../public/services/serv4.webp"
import serv5 from "../../public/services/serv5.webp"


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
                                Location Scouting
                                <div className="serv-img">
                                    <Image fill src={serv1} alt="Location Scouting & Permits by One World Produciton Highway - Greece" />

                                </div> & Permits
                            </h1>
                        </div>
                        <div className="p3-elems">
                            <div className="serv-img">
                                <Image fill src={serv2} alt="Production Management by One World Produciton Highway - Greece" />

                            </div>
                            <h1>Production Management</h1>
                        </div>
                        <div className="p3-elems">
                            <h1>
                                Crew & Casting
                                <div className="serv-img">
                                    <Image fill src={serv3} alt=" Crew & Casting by One World Produciton Highway - Greece" />

                                </div>
                            </h1>
                        </div>
                        <div className="p3-elems">
                            <div className="serv-img">

                                <Image fill src={serv4} alt="Equipment & Logistics by One World Produciton Highway - Greece" />

                            </div>
                            <h1>Equipment & Logistics</h1>
                        </div>
                        <div className="p3-elems">
                            <h1>
                                Drone & Aerial Filming
                                <div className="serv-img">
                                    <Image fill src={serv5} alt="  Drone & Aerial Filming by One World Produciton Highway - Greece" />

                                </div>
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

            </div>
        </>
    )
}

export default Section3