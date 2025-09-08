import React from 'react'
import Image from 'next/image'
import Section3 from './Section3'
import Footer from '../common/Footer'

const MobHome = () => {
    return (
        <>
            <div className='mob-page1 mob-block'>
                <div className='mob-hero'>

                    <div className="mob-cont">
                        <p className='p1'>One World</p>
                        <p>Highway Production</p>
                    </div>
                    <div className="mh1">
                        <div className="mh1-cont">
                            <Image src="/l-1.jpg" fill />
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