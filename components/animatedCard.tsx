"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CARD_COUNT = 12; // 4x3 layout
const TOTAL_ANIMATION_TIME = 7; // 7 seconds
const STAGGER = TOTAL_ANIMATION_TIME / CARD_COUNT; // auto-stagger

export default function AnimatedCardGrid() {
  const [expanded, setExpanded] = useState(false);
  const cards = Array.from({ length: CARD_COUNT });

  useEffect(() => {
    const totalTime = TOTAL_ANIMATION_TIME * 1000 + 500;
    const t = setTimeout(() => setExpanded(true), totalTime);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <motion.div
        className={
          expanded
            ? "grid grid-cols-4 gap-6 p-6 w-[1020px]"
            : "relative h-72 w-[520px] flex items-center justify-center"
        }
        initial={false}
        animate={{}}
      >
        {cards.map((_, i) => {
          const delay = i * STAGGER;
          const isFirst = i === 0;

          // First card comes from top; the rest come from left.
          const initialState = isFirst
            ? { opacity: 0, y: -500 }
            : { opacity: 0, x: -500 };

          const animateState = expanded
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 1, x: 0, y: -i * 4 };

          return (
            <motion.div
              key={i}
              layout
              initial={initialState}
              animate={animateState}
              transition={{
                type: isFirst ? "spring" : "tween",
                stiffness: isFirst ? 160 : undefined,
                damping: isFirst ? 18 : undefined,
                duration: isFirst ? undefined : STAGGER,
                ease: isFirst ? undefined : "easeOut",
                delay: expanded ? 0 : delay,
              }}
              style={expanded ? {} : { position: "absolute", zIndex: 200 + i }}
              className="w-40 h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center text-white font-bold"
            >
              Card {i + 1}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
