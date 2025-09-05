import React, { useEffect } from 'react'
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Section2 = ({ open }) => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {

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
            .to("#page2-container", {
                width: "100%",
               
                duration: 1,
            }, "a")
            .to("#page2",{
                 height: "180vh",
            },"b")
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

//             .to("#page2-container", {
//                 width: "80vw",
//                 height: "140vh",
//                 duration: 1,
//             }, "b")
//             .to('#page2 .page-2-img-sec #img',{
//                 scale:.9
//             },"b")
//             .to('#page2 .page-2-img-sec',{
// // padding:"0 2%"
//             },"b")
            // .to("#page2 .page-2-img-sec", {
            //     height: "17%",
            //     duration: 1,
            // }, "b");

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
                            <img src="/filming-locations/i1.jpg" alt="" />
                            <h3 className="img-caption">Beaches & Coastlines</h3>
                        </div>
                        <div className="down-img" id="img">
                            <img src="/filming-locations/i2.jpg" alt="" />
                            <h3 className="img-caption">Mountains & Valleys</h3>
                        </div>
                        <div id="img">
                            <img src="/filming-locations/i3.jpg" alt="" />
                            <h3 className="img-caption">Ancient Ruins & Archaeological Sites</h3>
                        </div>
                        <div className="width-big" id="img">
                            <img src="/filming-locations/i4.jpg" alt="" />
                            <h3 className="img-caption">Picturesque Villages</h3>
                        </div>
                        <div id="img">
                            <img src="/filming-locations/i5.jpg" alt="" />
                            <h3 className="img-caption">Urban Cityscapes</h3>
                        </div>
                    </div>
                    <div className="page-2-img-sec" id="image-sec-2">
                        <div id="img">
                            <img src="/filming-locations/i6.jpg" alt="" />
                            <h3 className="img-caption">Islands & Harbors</h3>
                        </div>
                        <div className="down-img bottom-down" id="img">
                            <img src="/filming-locations/i7.jpg" alt="" />
                            <h3 className="img-caption">Castles & Fortresses</h3>
                        </div>
                        <div id="img">
                            <img src="/filming-locations/i8.jpg" alt="" />
                            <h3 className="img-caption">Lakes & Rivers</h3>
                        </div>
                        <div className="down-img width-big bottom-down" id="img">
                            <div id="normal-part">
                                <img src="/filming-locations/i9.jpg" alt="" />
                                <h3 className="img-caption">Caves & Gorges</h3>
                            </div>
                        </div>
                        <div id="img">
                            <img src="/filming-locations/i10.jpg" alt="" />
                            <h3 className="img-caption">Vineyards & Olive Groves</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2