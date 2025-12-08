'use client'
import React, { useRef } from 'react'
import {  motion } from "framer-motion";
const DragableComponent = () => {
  const constraintsRef = useRef(null);

    const boxVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 },
    };

  return (
    <div>
     <div
      ref={constraintsRef}
      className="w-full h-[400px] border border-gray-300 relative mb-5 flex items-center justify-center"
    >
      <motion.div
        className="bg-red-500 px-4 py-2 text-black flex justify-center items-center rounded-lg"
        drag
        dragConstraints={constraintsRef}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        Animated Box
      </motion.div>
    </div>
    </div>
  )
}

export default DragableComponent;