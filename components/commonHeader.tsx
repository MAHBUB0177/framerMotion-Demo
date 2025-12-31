
'use client'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";


const CommonHeader = ({ title ,subtitle}: { title: string,subtitle:string }) => {
    return (
        <div className="pb-5">

    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
    <motion.h1
      className="text-2xl font-bold text-center text-white"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
     {title}
    </motion.h1>

    <motion.h4
      className="text-xl font-light text-center text-white"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
     {subtitle}
    </motion.h4>
    
      </motion.div>
     </AnimatePresence>
    </div>
    )
}

export default CommonHeader