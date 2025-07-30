import React from "react";
import { motion } from "framer-motion";

// Generates a vertical floating animation
const generateFloatingVariant = (duration, delay = 0) => ({
  animate: {
    y: [0, -40, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

const colors = ["#E957FF", "#32E3DC", "#FF6D1F", "#4785FF", "#B794F4"];

const ProPlan = () => {
  // Generate 40 boxes total with varied placement
  const floatingBoxes = Array.from({ length: 40 }).map((_, i) => {
    const size = 12 + Math.random() * 18; // 12px - 30px
    const color = colors[i % colors.length];
    const duration = 3 + Math.random() * 4;
    const delay = Math.random() * 2;

    // Spread more across the screen
    const top = Math.random() * 100;
    const left = Math.random() * 100;

    return (
      <motion.div
        key={`float-${i}`}
        className='absolute z-0 rounded-sm !rotate-45 opacity-10 pointer-events-none'
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          top: `${top}%`,
          left: `${left}%`,
        }}
        variants={generateFloatingVariant(duration, delay)}
        animate='animate'
      />
    );
  });

  return (
    <motion.section
      className='relative overflow-hidden py-[80px] min-h-screen flex items-center justify-center px-[20px] border-b-[10px] border-white bg-white'
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeInOut" }}>
      {/* ✨ Fullscreen Background Floating Boxes */}
      {floatingBoxes}

      <div className='relative z-10 mx-auto max-w-7xl'>
        <motion.div
          className='text-center relative z-20'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}>
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

          <motion.div
            className='inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm font-[600] uppercase tracking-wider mt-6'
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <span>✨</span>
            <span>Coming Soon</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProPlan;
