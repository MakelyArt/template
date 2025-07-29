import React from "react";
import { motion } from "framer-motion";

const Benifits = () => {
  return (
    <motion.section
      className='py-[44px] md:py-[60px]  px-[30px] border-b-[10px] border-white'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}>
      <div className='max-w-7xl w-full mx-auto flex flex-col justify-center text-black'>
        <motion.h2
          className='text-[26px] md:text-[34px] font-[800] mb-6 tracking-wide text-black '
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          Why Choose Us
        </motion.h2>

        <motion.ul
          className='list-none text-[16px] md:text-[18px] font-[400] leading-relaxed text-[#4a5568] '
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          {[
            "Turn your name into a brand.",
            "Launch a stunning art website in minutes with zero hassle.",
            "You create. We build.",
            "Hosting, themes, and setup—done for you.",
            "Start free. Grow when you're ready.",
            "From custom subdomain to your own .art domain, and then your own e-commerce, it's all possible.",
          ].map((benefit, index) => (
            <motion.li
              key={index}
              className='flex items-start group cursor-pointer mt-[5px]'
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ x: 8 }}>
              <span className='inline-block sm:w-[6px] w-[4.6px] h-[4.6px] sm:h-[6px] bg-black rounded-full mr-1 sm:mr-2 mt-3 flex-shrink-0' />
              <span className='group-hover:text-black transition-colors duration-300'>
                {benefit}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className='text-[22px] :text-[30px] font-[600] text-black mt-12 text-center lg:text-right lg:mr-72  italic'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          all in few minutes...
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Benifits;
