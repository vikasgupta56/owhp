import React, { useEffect } from 'react'
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { isMobile } from '../../utils/common';
import l1 from "../../public/greece/l-1.webp"
import l2 from "../../public/greece/l-2.webp"
import l3 from "../../public/greece/l-3.webp"
import l7 from "../../public/greece/l-7.webp"
import l8 from "../../public/greece/l-8.webp"
import l5 from "../../public/greece/l-5.webp"
import Image from 'next/image';
import l6 from "../../public/greece/l-6.webp"





const Section1 = ({ open }) => {
    gsap.registerPlugin(ScrollTrigger);


    function Loader() {
        // Loader ke time scroll disable kar do
        document.body.style.overflow = "hidden";

        var tl = gsap.timeline();
        var span = document.querySelector('#page1 span');
        var count = 0;
        var maxCount = 100;
        var animationDuration = 3;
        var interval = animationDuration * 1000 / maxCount;

        // Counter start kar do
        let imgDuration = .5

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
            duration: 1.7
        });

        tl.to("#elems2", {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
            duration: 0.3,
        }, "a");
        tl.to("#elems3", {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
            duration: 0.3,
            delay: 0.3
        }, "a");
        tl.to("#elems4", {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
            duration: 0.3,
            delay: .6
        }, "a");
        tl.to("#elems5", {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
            duration: 0.3,
            delay: .9
        }, "a");
        tl.to("#elems6", {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
            duration: 0.3,
            delay: 1.2
        }, "a");
        tl.to("#page1 #count", {
            autoAlpha: 0,
            duration: 0.5,
            onComplete: function () {
                document.getElementById("count").style.display = "none";
            }
        }, "b")

        tl.to("#page1", {
            position: "absolute",
            top: "32%",
            width: "90vw",
            duration: .7,
            delay: 0.1,
            onComplete: function () {
                // Loader complete hone ke baad scroll enable kar do
                document.body.style.overflow = "auto";
                // Extra ensure karo ki scroll top par hai
                window.scrollTo(0, 0);
            }
        }, "c")
        tl.to("#main", {
            zIndex: "unset"
        }, "d")
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

    let desktopAnimation = () => {
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
                delay: 0.5,
            }, "a")
            .to("#parent-2-top-text h1", {
                transform: "translateY(0%)",
                duration: 1,
                onStart: function () {
                    document.querySelector('#parent-2-top-text').style.display = 'block';
                }
            }, "a")
            .to("#dabba #div-img2", {
                opacity: 1,
                display: "block",
                duration: 0,
                delay: 0.3
            }, "b")
            .to("#parent-2-top-text h1", {
                fontSize: "7vh",
                delay: 1,
                duration: 2
            },)
            .to("#parent-2>h2", {
                fontSize: "2.1vh",
                delay: 1,
                duration: 2

            }, "b")
            .to("#page1", {
                width: "80%",
                // height: "140vh",
                duration: 1,
                delay: 1,
            }, "b")

    }
    useEffect(() => {
        console.log(isMobile(),"mobile")
        // if (isMobile()) {
        //     return;
        // }
        // else {
            Loader()
            // desktopAnimation();
        // }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.globalTimeline.clear(); // kill timelines if needed
        };
    }, [])

    return (
        <>
            <div id="page1-container" className={`mob-none ${open ? 'page-anime page-open' : null}`}>
                <div id="text">
                    <div id="content">
                        <div id="image">
                            <Image src={l1} fill alt="" />
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
                            <Image src={l1} fill alt="" />

                        </div>
                        <div className="lol" id="partzero">
                            <Image src={l3} fill alt="" />

                        </div>
                        <div id="part1">
                            <div id="head-text" >
                                <h2 id="head-text-content" className="fw5" >Your Vision. Our Landscape</h2>
                            </div>
                           
                                <div id="container">
                                    <div className="elems" id="elems1">
                                        <Image src={l7} fill alt="" />

                                    </div>
                                    <div className="elems" id="elems2">
                                        <Image src={l1} fill alt="" />
                                    </div>
                                    <div className="elems" id="elems3">
                                        <Image src={l8} fill alt="" />
                                    </div>
                                    <div className="elems" id="elems4">
                                        <Image src={l3} fill alt="" />
                                    </div>
                                    <div className="elems" id="elems5">
                                        <Image src={l5} fill alt="" />
                                    </div>
                                    <div className="elems" id="elems6">
                                        <Image src={l6} fill alt="" />
                                    </div>
                                </div>
                                <span id="count" className="count-bold">
                                    0
                                </span>
                          
                        </div>
                        <div id="partzero">
                            <Image fill src={l2} alt="" />
                        </div>
                        <div className="lol" id="partzero">
                            <Image src={l8} fill alt="" />
                        </div>
                    </div>
                    <div id="parent-2">
                        <div id="parent-2-top-text">
                            <h1 className="fw5">Why Film in Greece</h1>
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





        </>
    )
}

export default Section1