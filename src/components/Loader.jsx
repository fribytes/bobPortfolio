import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <motion.div
          className="text-white text-[4rem] lg:text-[7rem] font-bold"
          initial={{ scale: 0.8, rotate: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
            textShadow: [
              "0px 0px 0px rgba(255,255,255,0)",
              "0px 0px 8px rgba(255,255,255,0.6)",
              "0px 0px 0px rgba(255,255,255,0)",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
        >
          &lt;Bop /&gt;
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
