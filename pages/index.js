"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navabr from "../components/Navabr";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Benifits from "../components/Home/Benifits";
import Testimonial from "../components/Home/Testimonial";
import ProPlan from "../components/Home/ProPlan";
import Pricing from "../components/Home/Pricing";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <div className='w-full mx-auto bg-[#f8f9fa] overflow-x-hidden'>
      {/* NAVIGATION */}
      <Navabr />

      {/* HERO SECTION */}
      <Hero />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* BENEFITS */}
      <Benifits />

      {/* NAME SECTION - Full width background */}
      {/* <div className='w-full bg-[#DFE2DC]/70'>
        <motion.section
          className='py-32 relative'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>
          <div className='max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-[72px] relative'>
            <div className='max-w-[700px] text-center'>
              <motion.h2
                className='text-6xl sm:text-7xl md:text-8xl lg:text-[130px] leading-[0.9] font-[900] mb-6 tracking-tight text-[#1a202c] '
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}>
                YOUR
                <br />
                NAME
              </motion.h2>

              <motion.p
                className='font-[500] text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#4a5568] leading-relaxed  mb-10'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}>
                From custom subdomain to your own .art domain, and then your own e-commerce.
              </motion.p>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}>
                <Link
                  href='#'
                  className='bg-black text-white text-lg sm:text-xl md:text-2xl font-[700] uppercase px-12 sm:px-16 md:px-20 py-4 sm:py-5 lg:py-5 inline-block rounded-full transition-all duration-300 tracking-wide '>
                  Get Started
                </Link>
              </motion.div>
            </div>

            <motion.div
              className='absolute right-0 bottom-[-50px] hidden lg:block'
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
                className='w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] object-contain'
              />
            </motion.div>
          </div>
        </motion.section>
      </div> */}
      <div className='md:min-h-screen w-full'>
        <Image
          src={"/images/banner.png"}
          alt=''
          width={5000}
          height={5000}
          className='w-full h-full object-cover '
        />
      </div>

      {/* TESTIMONIALS SECTION */}
      <Testimonial />

      {/* PRO PLAN SECTION */}
      <ProPlan />

      {/* PRICING SECTION */}
      <Pricing />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
