"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

 // min-h-[calc(100vh-120px)]

const Hero = () => {
  return (
    <motion.section
      id='hero'
      className='relative py-[44px] md:py-[60px] px-[20px] border-b-[10px] border-white flex items-center justify-center overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <div className='relative z-10 max-w-6xl mx-auto text-center'>
        {/* Main Headline */}
        <motion.h1
          className='text-[34px] md:text-[50px] font-[800] leading-[1.1] tracking-tight text-black mb-8'
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          Your Name,
          <br />
          <span className='text-black'>
            Your Art Gallery
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className='text-[16px] md:text-[20px] font-[400] leading-[1.4] text-[#4a5568] max-w-xl mx-auto mb-6'
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}>
          Show the world your art. Launch a{" "}
          <span className='font-[700] text-black'>professional website</span> in minutes—with{" "}
          <span className='font-[700] text-black'>zero coding</span>.
        </motion.p>

        {/* Badge */}
        <motion.div
          className='inline-flex items-center space-x-2 bg-black text-white px-4 py-1.5 rounded-full text-[12px] font-[600] uppercase tracking-wider mb-8'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <span className='w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse'></span>
          <span>Trusted by 10,000+ Artists</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16'
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href='#'
              className='group bg-black text-white text-[14px] sm:text-[16px]  leading-[1.1] font-[700] px-[24px] sm:px-[24px] py-[12px] sm:py-[14px] rounded-full transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl'>
              <span>Get Started Free</span>
              <FaArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href='#'
              className='text-black text-[14px] sm:text-[16px]  leading-[1.1] font-[700] px-[24px] sm:px-[24px] py-[12px] sm:py-[14px] rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 inline-block'>
              View Examples
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
