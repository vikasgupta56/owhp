import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar = ({onClick}) => {
     const router = useRouter();
  const isHome = router.pathname === "/";
  const isWork = router.pathname === "/work";
  const isContact = router.pathname === "/contact"
    return (
        <>
            <button id="menu-button" onClick={onClick}>Menu</button>
            <div className="menu">
                <div className="menu-rel">
                    <div className="menu-inner">
                        <Link href="/"><div className={`menu-item ${isHome ? 'menu-active':null}`}>Home</div></Link>
                        <Link href="/work"><div className={`menu-item ${isWork ? 'menu-active':null}`}>Work</div></Link>
                        <Link href="/contact"><div className={`menu-item ${isContact ? 'menu-active':null}`}>Contact</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar