import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
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
                            <Link href={"/"}>Home</Link>
                        </p>
                        <p>
                           <Link href={"/work"}>Work</Link>
                        </p>
                        <p>
                          <Link href={"/contact"}>Contact</Link>
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
            </footer></>
    )
}

export default Footer