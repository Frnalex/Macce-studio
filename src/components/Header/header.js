import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import gsap from "gsap";

const navTL = gsap.timeline();

const Header = ({ history, dimensions }) => {
    //NavToggle
    const [navToggle, setNavToggle] = useState(false);
    useEffect(() => {
        history.listen(() => {
            setNavToggle(false);
            window.scrollTo(0, 0);
        });

        if (navToggle === true) {
            navTL
                .set(".nav-burger", { pointerEvents: "none" })
                .set("body", { overflow: "hidden" })
                .to(".b1", { duration: 0.2, transform: "rotate(-45deg) translateY(5px)", ease: "Power2.easeOut" })
                .to(".b2", { duration: 0.2, transform: "rotate(45deg) translateY(-5px)", ease: "Power2.easeOut", delay: -0.2 })
                .to(".nav", {
                    duration: dimensions.width < 768 ? 0.5 : 0.8,
                    x: 0,
                    ease: "Power2.easeOut",
                })
                .from(".nav-content li", {
                    duration: 0.5,
                    delay: -0.4,
                    marginLeft: dimensions.width < 768 ? "-20px" : "-50px",
                    opacity: 0,
                    ease: "Power2.easeOut",
                    stagger: 0.1,
                })
                .set(".nav-burger", { pointerEvents: "auto" });
        } else {
            navTL
                .set(".nav-burger", { pointerEvents: "none" })
                .to(".b1", { duration: 0.2, transform: "rotate(0) translateY(0)" })
                .to(".b2", { duration: 0.2, transform: "rotate(0) translateY(0)", delay: -0.2 })
                .to(".nav", {
                    duration: dimensions.width > 768 ? 0.8 : 0.5,
                    x: "-100%",
                    ease: "Power2.easeOut",
                    delay: -0.2,
                })
                .set("body", { overflow: "auto" })
                .set(".nav-burger", { pointerEvents: "auto" });
        }
    });

    return (
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <NavLink to='/' exact>
                        <h2 className='logo'>Maccė Studio</h2>
                    </NavLink>

                    <div onClick={() => setNavToggle(!navToggle)} className='nav-burger'>
                        <span className='b1'></span>
                        <span className='b2'></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default withRouter(Header);
