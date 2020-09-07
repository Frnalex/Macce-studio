import React from "react";
import { motion } from "framer-motion";

function Photo({ children }) {
    const transition = { duration: 0.4, ease: [0.43, 0.13, 0.26, 0.96] };

    return (
        <motion.div whileHover={{ scale: 0.95 }} transition={transition} className='photo-block'>
            {children}
        </motion.div>
    );
}

export default Photo;
