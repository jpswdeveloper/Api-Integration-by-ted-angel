import React, { useState } from 'react'
import './navbar.css'
const NavBar = () => {
    const [showBg, setShowBg] = useState(false);

    window.onscroll = () => {
        setShowBg(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null;
    }
    // const changeBg = () => {
    //     if (window.scrollY > 60) {
    //         setShowBg(true)
    //     }
    //     else {
    //         setShowBg(false)
    //     }
    // }

    // console.log(showBg)
    // useEffect(() => {
    //     window.addEventListener('scroll', changeBg);
    //     return () => window.removeEventListener('scroll', changeBg)
    // },
    //     [])
    // console.log(window.scrollY)
    return (
        // <div className={`navbar ${showBg && 'nav-bar'}`}>
        <div className={showBg ? 'navbar nav-bar' : 'navbar'}>
            <div className="nav-logo">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            </div>
            <div className="nav-end">
                <div className="nav-end">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavBar