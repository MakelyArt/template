import React from "react";
import { motion } from "framer-motion";

const Navabr = () => {
  return (
    <motion.nav
      className='w-full h-auto relative z-50'
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className='max-w-7xl w-full mx-auto flex flex-col sm:flex-col lg:flex-row justify-between items-center pt-6 px-4 space-y-4 lg:space-y-0'>
        <motion.div
          className='inline-block px-2'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.075] font-[800]  bg-white px-3 py-1 rounded-sm tracking-tight'>
            MAKELY
          </h1>
        </motion.div>

        <motion.div
          className='text-center lg:text-right'
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <div className='text-base sm:text-lg md:text-xl lg:text-[21px] font-[500] text-[#4a5568] mb-3'>
            <motion.a
              href='#'
              className='hover:text-black transition-colors duration-300 relative group'
              whileHover={{ scale: 1.02 }}>
              Register
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
            </motion.a>
            <motion.a
              href='#'
              className='ml-6 hover:text-black transition-colors duration-300 relative group'
              whileHover={{ scale: 1.02 }}>
              Login
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
            </motion.a>
          </div>
          <div className='text-base sm:text-lg md:text-xl lg:text-[21px] font-[600] tracking-wide'>
            <motion.a
              href='#'
              className='hover:text-black transition-colors duration-300 relative group'
              whileHover={{ scale: 1.02 }}>
              HOME
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
            </motion.a>
            <span className='mx-3 text-gray-400'>|</span>
            <motion.a
              href='#pricing'
              className='hover:text-black transition-colors duration-300 relative group'
              whileHover={{ scale: 1.02 }}>
              PRICING
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
            </motion.a>
            <span className='mx-3 text-gray-400'>|</span>
            <motion.a
              href='#how-it-works'
              className='hover:text-black transition-colors duration-300 relative group'
              whileHover={{ scale: 1.02 }}>
              START FREE
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navabr;
