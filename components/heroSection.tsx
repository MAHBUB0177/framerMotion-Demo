'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import CommonHeader from './commonHeader';
import heroImg from '../public/images/hero.jpg'

const HeroSection = () => {
    const data = {
    title: "Welcome to Framer Motion with Next.js",
    subtitle: "Animating the Future of Web Development",
  };
  return (
    <div>
          <div>
      {/* 🖼️ Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">

        {/* Background Image */}
        <Image
            src={heroImg}
            alt="hero"
            fill
            className="object-cover"
            placeholder="empty"
            />


        {/* Animated Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute inset-0 flex justify-center items-center text-center"
        >
          <CommonHeader title={data?.title} subtitle={data?.subtitle} />
        </motion.div>
      </div>

      {/* Product Section */}
      {/* <ProductPage />

      <RelatedProductList /> */}
    </div>
    </div>
  )
}

export default HeroSection