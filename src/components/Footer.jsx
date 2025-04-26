import React from "react";
import { HiOutlineArrowTrendingUp as Arrow } from "react-icons/hi2";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <motion.footer
      id="contactMe"
      className="text-white px-[10%] mt-[50px] gap-[50px] vsm:h-screen py-[50px] flex flex-col justify-between"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h1
        variants={itemVariants}
        className="text-left vsm:text-center text-[4rem] lg:text-[7rem] font-extrabold leading-none"
      >
        Let's Connect
      </motion.h1>

      <motion.div
        variants={containerVariants}
        className="w-full flex flex-col gap-2"
      >
        <motion.a
          href="https://t.me/boptheweb"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="flex items-center gap-2 py-2 border-b border-gray-600"
        >
          <p className="text-[3rem]">Telegram</p>
          <Arrow className="text-[2.5rem]" />
        </motion.a>
        <motion.a
          href="https://x.com/boptheweb"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="flex items-center gap-2 py-2 border-b border-gray-600"
        >
          <p className="text-[3rem]">Twitter</p>
          <Arrow className="text-[2.5rem]" />
        </motion.a>
        <motion.a
          href="mailto:boptheweb@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="flex items-center gap-2 py-2 border-b border-gray-600"
        >
          <p className="text-[3rem]">Mail</p>
          <Arrow className="text-[2.5rem]" />
        </motion.a>
        <motion.a
          href="https://discord.gg/boptheweb"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="flex items-center gap-2 py-2 border-b border-gray-600"
        >
          <p className="text-[3rem]">Discord</p>
          <Arrow className="text-[2.5rem]" />
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
