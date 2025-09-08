import React, { useEffect } from 'react'
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Section3 from './Section3'
import Footer from '../common/Footer'
import { isMobile } from '../../utils/common'
import l1 from "../../public/greece/l-1.webp"
import l2 from "../../public/greece/l-2.webp"
import l3 from "../../public/greece/l-3.webp"
import l7 from "../../public/greece/l-7.webp"
import l8 from "../../public/greece/l-8.webp"
import l5 from "../../public/greece/l-5.webp"
import Image from 'next/image';
import l6 from "../../public/greece/l-6.webp"

const MobHome = () => {
    function Loader() {
        // Loader ke time scroll disable kar do
        document.body.style.overflow = "hidden";

        var tl = gsap.timeline();
        var span = document.querySelector('.cm span');
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

        tl.to(".cm", {
            scale: 1,
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

        tl.to(".cm", {
            scale: 0

        }, "c")

        tl.to(".mob-loader", {
            transform: 'translateY(100%)',
            onComplete: function () {
                // Loader complete hone ke baad scroll enable kar do
                document.body.style.overflow = "auto";
                // Extra ensure karo ki scroll top par hai
                window.scrollTo(0, 0);
            }
        })
    }

    let floatAnimation = () => {
        // Page3 scroll animation
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page3-mob",
                scroller: "body",
                start: "0% 80%",
                end: "70% 0%",
                scrub: true,
                // markers: true
            }
        });
        tl3.to(".title1", {
            transform: "translateX(30%)",
            ease: "power2.out",
            duration: 1.5
        }, "f")
            .to(".title2", {
                transform: "translateX(-30%)",
                ease: "power2.out",
                duration: 1.5
            }, "f")
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!isMobile()) { return; }
        Loader();
        floatAnimation();

    }, [])

    return (
        <>
            <div className="mob-loader">
                <div className="cm">
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
            </div>
            <div className='mob-page1 mob-block'>
                <div className='mob-hero'>

                    <div className="mob-cont">
                        <p className='p1'>One World</p>
                        <p>Highway Production</p>
                    </div>
                    <div className="mh1">
                        <div className="mh1-cont">
                            <Image src={l1} fill />
                        </div>
                    </div>
                </div>
                <div className="ms1-cont">
                    <div className="m-text">Your Vision. Our Landscape</div>

                    <div className="m1">
                        <div className="ms m11">
                            <Image src={"/greece/l-2.webp"} fill />
                        </div>
                        <div className="ms m12">
                            <Image src={"/greece/l-6.webp"} fill />
                        </div>
                    </div>
                    <div className="m2">
                        <Image src={"/greece/l-7.webp"} fill />
                    </div>
                    <div className="m1">
                        <div className="ms m11">
                            <Image src={"/greece/l-1.webp"} fill />
                        </div>
                        <div className="ms m12">
                            <Image src={"/greece/l-8.webp"} fill />
                        </div>
                    </div>
                    <div className="why-cont">
                        <h2>Why Film in Greece?</h2>
                        <p> A Cinematic Playground Like No Other <br />
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
                        </p>

                    </div>
                </div>

                <div className="gap"></div>

                <div className="ms1-cont ms2-cont">
                    <div className="m-text">Filming Location Showcase</div>

                    <div className="m1">
                        <div className="ms m11">
                            <Image src={"/filming-locations/fl4.webp"} fill />
                            <h4>Caves</h4>
                        </div>
                        <div className="ms m12">
                            <Image src={"/filming-locations/fl2.webp"} fill />
                            <h4>Beaches</h4>

                        </div>
                    </div>
                    <div className="m2">
                        <Image src={"/filming-locations/fl9.webp"} fill />
                        <h4>Ancient Ruins & Archaeological Sites</h4>
                    </div>
                    <div className="m1">
                        <div className="ms m11">
                            <Image src={"/filming-locations/fl7.webp"} fill />
                            <h4>Picturesque Villages
                            </h4>
                        </div>
                        <div className="ms m12">
                            <Image src={"/filming-locations/fl10.webp"} fill />
                            <h4>Urban Cityscapes</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap"></div>
            <Section3 />
            <Footer />
        </>
    )
}

export default MobHome