
'use client'
import React from 'react'
import { motion } from "framer-motion";


const CommonHeader = ({ title }: { title: String }) => {
    return (
        <motion.div
            className='text-xl text-slate-500 font-medium px-40 text-justify my-8'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}>{title}</motion.div>
    )
}

export default CommonHeader