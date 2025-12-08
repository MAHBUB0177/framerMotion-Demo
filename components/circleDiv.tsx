'use client'
import React from 'react';
import { motion } from 'framer-motion';

const SpinningRing = () => {
    return (
        <div className="relative w-48 h-48 flex  justify-center  items-center mx-auto my-4">
            {/* Outer spinning ring */}
            <motion.div
                className="absolute w-full h-full rounded-full border-8 border-blue-500 border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 2, // faster rotation to be visible
                    ease: "linear",
                }}
            />

            {/* Inner static div */}
            <div className="w-44 h-44 bg-orange-500 border-2 rounded-full flex items-center justify-center text-red-500 font-bold text-lg relative">
                <img
                    className="relative overflow-hidden w-40 h-42"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""

                />
            </div>
        </div>
    );
};

export default SpinningRing;
