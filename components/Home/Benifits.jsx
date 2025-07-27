import React from "react";
import { motion } from "framer-motion";

const Benifits = () => {
  return (
    <motion.section
      className='py-20 sm:py-28 px-4'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}>
      <div className='max-w-7xl w-full mx-auto flex flex-col justify-center text-black'>
        <motion.h2
          className='text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-[800] mb-10 tracking-wide text-[#1a202c] '
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          BENEFITS
        </motion.h2>

        <motion.ul
          className='list-none space-y-5 text-lg sm:text-xl md:text-2xl lg:text-[26px] font-[400] leading-relaxed text-[#4a5568] '
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
              className='flex items-start group cursor-pointer'
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ x: 8 }}>
              <span className='inline-block sm:w-2 w-1.5 h-1.5 sm:h-2 bg-black rounded-full mr-2.5 sm:mr-5 mt-3 flex-shrink-0' />
              <span className='group-hover:text-[#1a202c] transition-colors duration-300'>
                {benefit}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className='text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-[600] text-[#1a202c] mt-12 text-center lg:text-right lg:mr-72  italic'
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
