import React from "react";
import { motion } from "framer-motion";

function TransitionOutDefault() {
    return <motion.div exit={{ height: "100%" }} className='transition-out-default'></motion.div>;
}

export default TransitionOutDefault;
