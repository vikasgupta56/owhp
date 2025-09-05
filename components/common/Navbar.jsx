import React from 'react'
import Link from 'next/link'

const Navbar = ({onClick}) => {
    return (
        <>
            <button id="menu-button" onClick={onClick}>Menu</button>
            <div className="menu">
                <div className="menu-rel">
                    <div className="menu-inner">
                        <Link href="/"><div className="menu-item">Home</div></Link>
                        <Link href="/work"><div className="menu-item">Work</div></Link>
                        <Link href="/contact"><div className="menu-item">Contact</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar