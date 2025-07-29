import React, { Fragment } from "react";
import { motion } from "framer-motion";

const links = [
  {
    title: "HOME",
    link: "#",
  },
  {
    title: "PRICING",
    link: "#pricing",
  },
  {
    title: "START FREE",
    link: "#how-it-works",
  },
];

const Navabr = () => {
  return (
    <motion.nav
      className='w-full h-auto relative z-50'
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className='max-w-7xl w-full mx-auto flex flex-col sm:flex-col lg:flex-row justify-between items-center py-6 px-4 space-y-4 lg:space-y-0'>
        <motion.div
          className='inline-block'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}>
          <h1 className='text-[30px] md:text-[50px] leading-[1] font-[800]  rounded-sm tracking-tight'>
            MAKELY
          </h1>
        </motion.div>

        <motion.div
          className='text-center lg:text-right'
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <div className='text-[12px] md:text-[14px] font-[500] text-[#4a5568] mb-3'>
            <motion.a
              href='#'
              className='hover:text-black transition-colors duration-300 relative group'
              whileHover={{ scale: 1.02 }}>
              Register
              <span className='absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full'></span>
            </motion.a>
            <motion.a
              href='#'
              className='ml-6 hover:text-black transition-colors duration-300 relative group'
              whileHover={{ scale: 1.02 }}>
              Login
              <span className='absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full'></span>
            </motion.a>
          </div>
          <div className='text-[14px] md:text-[16px] font-[600] tracking-wide'>
            {links.map((link, index) => (
              <Fragment key={index}>
                <motion.a
                  href={link.link}
                  className='hover:text-black transition-colors duration-300 relative group'
                  whileHover={{ scale: 1.02 }}>
                  {link.title}
                  <span className='absolute -bottom-1 left-0 w-0 h-[1.6px] bg-black transition-all duration-300 group-hover:w-full'></span>
                </motion.a>
                {index < links.length - 1 && <span className='mx-3 text-gray-200'>|</span>}
              </Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navabr;
