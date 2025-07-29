import React from "react";
import { motion } from "framer-motion";

const ProPlan = () => {
  return (
    <motion.section
      className='py-[80px] px-[20px] border-b-[10px] border-white'
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeInOut" }}>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          className='text-center'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}>
          <motion.div
            className='inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm font-[600] uppercase tracking-wider mb-6'
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <span>✨</span>
            <span>Coming Soon</span>
          </motion.div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-[800] leading-tight tracking-tight text-black mb-6'>
            Introducing
            <br />
            <span className='text-black'>Makely Pro</span>
          </h1>

          <p className='text-xl sm:text-2xl text-[#4a5568] font-[400] max-w-3xl mx-auto leading-relaxed'>
            Transform your portfolio into a powerful storefront. From{" "}
            <span className='font-[700] text-black'>"Inquire Now"</span> to{" "}
            <span className='font-[700] text-black'>"Buy Now"</span> in one simple click.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProPlan;
