import React, { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const transition = { duration: 0.4, ease: [0.43, 0.13, 0.26, 0.96] };

const PageTransition = ({ children }) => {
    let tl = gsap.timeline();

    useEffect(() => {
        const textXl = document.querySelectorAll(".transition-enter .text .text-xl");
        if (textXl) {
            tl.to(".transition-enter .text .text-xl", {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: "power3.out",
                stagger: 0.1,
            });
        }
        tl.to(".transition-enter", {
            duration: 0.4,
            height: 0,
            ease: [0.43, 0.13, 0.26, 0.96],
            delay: -0.3,
            // onComplete: window.scrollTo(0, 0),
        });
    });

    return (
        <div className='transition'>
            <div className='transition-enter'>
                <div className='background'></div>
                <div className='text'>{children}</div>
            </div>
            <motion.div className='transition-exit' exit={{ height: "100%" }} transition={transition}></motion.div>
        </div>
    );
};

export default PageTransition;
