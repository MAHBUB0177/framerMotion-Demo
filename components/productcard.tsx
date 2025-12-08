'use client'
import React, { useState } from 'react';
import {  Reorder, motion } from "framer-motion";
import { FaArrowAltCircleDown } from 'react-icons/fa';


const Productcard = () => {
    // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
    const initialItems = Array.from({ length: 20 }, (_, i) => i + 1);

    // split into rows of 5 items
    const initialRows = [];
    for (let i = 0; i < initialItems.length; i += 5) {
        initialRows.push(initialItems.slice(i, i + 5));
    }

    const [rows, setRows] = useState(initialRows);

    const handleReorder = (rowIndex: number, newRow: number[]) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex] = newRow;
        setRows(updatedRows);
    };
    return (

        <div className="p-4">
            {rows.map((rowItems, rowIndex) =>
                <Reorder.Group
                    axis="x" // "y" for vertical dragging, "x" for horizontal
                    values={rowItems}
                    // onReorder={setItems}
                    onReorder={(newRow) => handleReorder(rowIndex, newRow)}
                    className=" flex flex-wrap items-center justify-center mx-auto"
                >
                    {rowItems.map((item) => (
                        <Reorder.Item
                            key={item}
                            value={item}
                            whileDrag={{ scale: 1.1 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5, type: "spring", stiffness: 200, }}//Delay before starting the animation repeat: Infinity work for spring infinity time
                            // whileTap={{ scale: 1.01 }}
                            whileHover={{ rotate: -5, scale: 1.02 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg"
                        >
                            <div className="relative pt-10 px-10 flex items-center justify-center">
                                <div
                                    className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                    style={{
                                        background: "radial-gradient(black, transparent 60%)",
                                        transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                        opacity: 0.2,
                                    }}
                                />
                                <img
                                    className="relative w-40"
                                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                                    alt=""
                                />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">
                                <span className="block opacity-75 -mb-1">Indoor</span>
                                <div className="flex justify-between">
                                    <span className="block font-semibold text-xl">Peace Lily</span>
                                    <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                                </div>
                            </div>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            )}

            <motion.div
                layout
                className="bg-white rounded-2xl shadow w-[100px] h-[100px] flex items-center justify-center mt-4 mx-auto mb-8"
                animate={{ y: [0, -20, 0] }} // bounce up and down
                transition={{
                    duration: 1,       // 1 second for full cycle
                    repeat: Infinity,  // repeat forever
                    ease: "easeInOut", // smooth easing
                }}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            >
                <FaArrowAltCircleDown className="h-10 w-10 text-gray-700" />
            </motion.div>


        </div>

    );
};

export default Productcard;
