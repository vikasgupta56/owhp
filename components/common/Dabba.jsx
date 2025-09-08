import React, { useEffect } from 'react'
import Image from 'next/image'
import back1 from "../../public/cover-pics/back1.webp"
import back2 from "../../public/cover-pics/back2.webp"
import back3 from "../../public/cover-pics/back3.webp"
import { isMobile } from '../../utils/common'

import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

let mobileAnimations = () => {
gsap.to('.dabba2',{
    scrollTrigger:{
        trigger:".ms1-cont",
        start:"5% top",
    },
    display:"block"
})
gsap.to('.dabba3',{
    scrollTrigger:{
        trigger:".ms2-cont",
        start:"5% top",
    },
    display:"block"
})

}

const Dabba = ({ open }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        if (!isMobile()) { return; }
        mobileAnimations()

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.globalTimeline.clear(); // kill timelines if needed
        };
    }, [])

    return (
        <>
            <div id="dabba">
                <div className="dabba-wrapper">
                    <div className={`dabba-in dabba1 ${open ? 'dabba-anime' : null}`}>
                        <div className="black-overlay"></div>
                        <Image fill
                            id="div-img1"
                            src={back1}
                            alt=""
                        />
                    </div>
                </div>

                <div className="dabba-wrapper">
                    <div className={`dabba-in dabba2 ${open ? 'dabba-anime' : null}`}>
                        <div className="black-overlay"></div>
                        <Image fill
                            id="div-img2"
                            src={back2}
                            alt=""
                        />
                    </div>
                </div>
                <div className="dabba-wrapper">
                    <div className={`dabba-in dabba3 ${open ? 'dabba-anime' : null}`}>
                        <div className="black-overlay"></div>
                        <Image fill
                            id="div-img3"
                            src={back3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dabba