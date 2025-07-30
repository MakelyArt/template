import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='w-full bg-[#DFE2DC]/70 md:min-h-screen   flex items-center justify-center border-b-[10px] border-white'>
      <motion.section
        className='py-[44px] md:py-[60px]  px-[20px] w-full relative'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}>
        <div className='max-w-6xl mx-auto w-full px-[20px] relative md:pb-0 pb-[150px]'>
          <div className='max-w-[570px] relative z-10'>
            <motion.h2
              className='text-[50px] md:text-[90px] leading-[0.9] font-[900] mb-6 tracking-tight text-black '
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              YOUR
              <br />
              NAME
            </motion.h2>

            <motion.p
              className='font-[500] text-[16px] md:text-[18px] text-[#4a5568] leading-[1.2]  mb-10'
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}>
              From custom subdomain to your own .art domain, and then your own e-commerce.
            </motion.p>

            <Link
              href='#'
              className='group bg-black hover:scale-[1.04] text-white text-[14px] sm:text-[16px]  leading-[1.1] font-[700] px-[24px] sm:px-[24px] py-[12px] sm:py-[14px] rounded-full transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl'>
              <span>Get Started</span>
              <FaArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </div>

          <motion.div
            className='absolute right-0 bottom-[-20px] md:bottom-[-100px]'
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}>
            <Image
              src='/girl.png'
              alt='Creative artist'
              width={600}
              height={600}
              className='w-[280px] h-[280px] lg:w-[600px] lg:h-[600px] object-contain'
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Banner;
