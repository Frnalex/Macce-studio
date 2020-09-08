import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

function TransitionOutDefault({ children }) {
    let tl = gsap.timeline();

    useEffect(() => {
        const textXl = document.querySelectorAll(".transition-enter .text .text-xl");
        if (textXl) {
            tl.to(".transition-in-default .text .text-xl", {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: "power3.out",
                stagger: 0.1,
            });
        }
        tl.to(".transition-in-default", {
            duration: 0.4,
            height: 0,
            ease: [0.43, 0.13, 0.26, 0.96],
            delay: -0.3,
        });
    });

    return (
        <motion.div className='transition-in-default'>
            <div className='background'></div>
            <div className='text'>{children}</div>
        </motion.div>
    );
}

export default TransitionOutDefault;
