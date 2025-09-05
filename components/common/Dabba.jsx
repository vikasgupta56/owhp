import React from 'react'

const Dabba = ({ open }) => {
    return (
        <>
            <div id="dabba">
                <div className="dabba-wrapper">
                    <div className={`dabba-in ${open ? 'dabba-anime' : null}`}>
                        <div className="black-overlay"></div>
                        <img
                            id="div-img1"
                            src="/WhatsApp Image 2025-08-26 at 19.35.59_355f49be.jpg"
                            alt=""
                        />
                    </div>
                </div>

                <div className="dabba-wrapper">
                    <div className={`dabba-in ${open ? 'dabba-anime' : null}`}>
                        <div className="black-overlay"></div>

                        <img id="div-img2" src="/back2.jpg" alt="" />
                    </div>
                </div>
                <div className="dabba-wrapper">
                    <div className={`dabba-in ${open ? 'dabba-anime' : null}`}>
                        <div className="black-overlay"></div>

                        <img id="div-img3" src="/back3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dabba