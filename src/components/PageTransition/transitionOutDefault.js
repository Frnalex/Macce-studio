import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.4, ease: [0.43, 0.13, 0.26, 0.96] };

function TransitionOutDefault() {
    return <motion.div exit={{ height: "100%" }} transition={transition} className='transition-out-default'></motion.div>;
}

export default TransitionOutDefault;
