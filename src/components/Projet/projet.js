import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const Projet = ({ children }) => {
    const [hovered, setHovered] = useState(false);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    const imageMove = (e) => {
        const element = e.target.getBoundingClientRect();
        let x = e.clientX - element.left; //x position within the element.
        let y = e.clientY - element.top; //y position within the element.

        const image = document.querySelector(".image");
        image.style.left = x + "px";
        image.style.top = y + "px";
    };

    const transition = { duration: 0.4, ease: [0.43, 0.13, 0.26, 0.96] };

    return (
        <div className='projet' onMouseEnter={enter} onMouseLeave={leave} onMouseMove={imageMove}>
            <NavLink to={children.path}>
                <h2 className='text-lg'>{children.name}</h2>
            </NavLink>
            {hovered && (
                <div className='image'>
                    <AnimatePresence>
                        <ProgressiveImage
                            src={require(`../../assets/projets/${children.path}/${children.couvertureSm}`)}
                            placeholder={require(`../../assets/projets/${children.path}/tiny/${children.couvertureSm}`)}
                        >
                            {(src) => (
                                <motion.img
                                    initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
                                    animate={{ scale: 1, opacity: 0.8 }}
                                    transition={transition}
                                    src={src}
                                    alt=''
                                />
                            )}
                        </ProgressiveImage>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default Projet;
