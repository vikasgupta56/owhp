import React, { useEffect } from 'react'
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import fl1 from "../../public/filming-locations/fl1.webp"
import fl2 from "../../public/filming-locations/fl2.webp"
import fl3 from "../../public/filming-locations/fl3.webp"
import fl4 from "../../public/filming-locations/fl4.webp"
import fl5 from "../../public/filming-locations/fl5.webp"
import fl6 from "../../public/filming-locations/fl6.webp"
import fl7 from "../../public/filming-locations/fl7.webp"
import fl8 from "../../public/filming-locations/fl8.webp"
import fl9 from "../../public/filming-locations/fl9.webp"
import fl10 from "../../public/filming-locations/fl10.webp"


const Section2 = ({ open }) => {
    gsap.registerPlugin(ScrollTrigger)

    let desktopAnimation = () => {

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#page2-container",
                scroller: "body",
                start: "10% 75%",
                end: "70% 0%",
                scrub: true,
                markers:true
            }
        });

        tl2
            .to("#page2", {
                width: "100vw",
                height: "180vh",
                duration: 1.5,
            }, "a")
            .to("#page2 .down-img", {
                top: "28%",
                duration: 1.5,
            }, "a")
            .to("#page2-text-top h2", {
                transform: "translateY(0%)",
                duration: 0.5,
            }, "a")

            .to("#dabba #div-img3", {

                // opacity: 1,
                display: "block",
                duration: 0,
                // delay: 0.3
            }, "b")
            .to("#page2", {
                width: "80vw",
                height: "140vh",
                duration: 1,
                delay: .3
            }, "b");
    }
    useEffect(() => {
        desktopAnimation()


        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.globalTimeline.clear(); // kill timelines if needed
        };
    }, [])

    return (
        <>
            <div id="page2-container" className={open ? 'page-anime page-open' : null}>
                <div id="page2">
                    <div id="page2-text-top">
                        <h2 className="fw5">Filming locations Showcase</h2>
                    </div>
                    <div className="page-2-img-sec" id="image-sec-1">
                        <div id="img">
                            <Image src={fl1} fill alt='Greece Lakes & Rivers' />
                            <h3 className="img-caption">Lakes & Rivers</h3>

                        </div>
                        <div className="down-img" id="img">
                            <Image src={fl2} fill alt='Greece Beaches & Coastlines' />
                            <h3 className="img-caption">Beaches & Coastlines</h3>
                        </div>
                        <div id="img">
                            <Image src={fl3} fill alt='Greece Castles & Fortresses' />
                            <h3 className="img-caption">Castles & Fortresses</h3>
                        </div>
                        <div className="width-big" id="img">
                            <Image src={fl4} fill alt='Greece Caves & Gorges' />
                           
                               <h3 className="img-caption">Caves & Gorges</h3>
                        </div>
                        <div id="img">
                            <Image src={fl5} fill alt='Greece Mountains & Valleys' />
                            <h3 className="img-caption">Mountains & Valleys</h3>


                        </div>
                    </div>
                    <div className="page-2-img-sec" id="image-sec-2">
                        <div id="img">
                            <Image src={fl6} fill alt='Greece Islands & Harbors' />
                          <h3 className="img-caption">Islands & Harbors</h3>

                        </div>
                        <div className="down-img bottom-down" id="img">
                            <Image src={fl7} fill alt='Greece Picturesque Villages' />
                            <h3 className="img-caption">Picturesque Villages</h3>

                        </div>
                        <div id="img">
                            <Image src={fl8} fill alt='Greece Vineyards & Olive Grove' />

                        <h3 className="img-caption">Vineyards & Olive Groves</h3>
                        </div>
                        <div className="down-img width-big bottom-down" id="img">
                            <div id="normal-part">
                                <Image src={fl9} fill alt='Greece Ancient Ruins & Archaeological Sites' />
                                <h3 className="img-caption">Ancient Ruins & Archaeological Sites</h3>

                            </div>
                        </div>
                        <div id="img">
                            <Image src={fl10} fill alt='Greece Urban Cityscapes' />
                            <h3 className="img-caption">Urban Cityscapes</h3>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2