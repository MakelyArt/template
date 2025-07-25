"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Adam",
    message:
      "Makely.art made it so easy to launch my portfolio. I had a beautiful website live in minutes—no coding, no stress.",
    img: "/3.png",
  },
  {
    name: "Isabelle Pascual",
    message:
      "As an emerging artist, having a custom domain and clean layout helped me look professional and land more opportunities.",
    img: "/2.png",
  },
  {
    name: "Felipe",
    message:
      "I love how simple Makely is. Uploading my artwork was fast, and the themes really showcase my style beautifully.",
    img: "/1.png",
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className='w-full mx-auto bg-[#f8f9fa] overflow-x-hidden'>
      {/* NAVIGATION */}
      <motion.nav
        className='w-full h-auto relative z-50'
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className='max-w-7xl w-full mx-auto flex flex-col sm:flex-col lg:flex-row justify-between items-center pt-8 space-y-4 lg:space-y-0'>
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
                href='#'
                className='hover:text-black transition-colors duration-300 relative group'
                whileHover={{ scale: 1.02 }}>
                PRICING
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
              </motion.a>
              <span className='mx-3 text-gray-400'>|</span>
              <motion.a
                href='#'
                className='hover:text-black transition-colors duration-300 relative group'
                whileHover={{ scale: 1.02 }}>
                START FREE
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <motion.section
        id='hero'
        className='py-24 min-h-[calc(100vh-200px)] flex items-center justify-center text-center relative'
        style={{ y: textY }}>
        <div className='space-y-10'>
          <motion.h1
            className='text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-[800] leading-[1.1] tracking-tight  text-[#1a202c] max-w-5xl mx-auto'
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}>
            YOUR NAME, YOUR ART GALLERY
          </motion.h1>

          <motion.p
            className='text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-[400] leading-[1.3] tracking-wide w-full max-w-[1200px] mx-auto text-[#4a5568] '
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}>
            Show the world your art. Launch a professional website in minutes— with zero coding.
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className='mt-10'>
            <Link
              href='#'
              className='bg-black text-white text-base sm:text-lg md:text-xl lg:text-[20px] font-[700] uppercase px-10 sm:px-12 md:px-16 lg:px-18 py-3 sm:py-4 lg:py-4 rounded-full transition-all duration-300 inline-block tracking-wide '>
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        id='how-it-works'
        className='max-w-7xl w-full mx-auto py-24'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}>
        <div className='flex flex-col justify-center items-center space-y-12'>
          <motion.h1
            className='text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[800] leading-tight text-[#1a202c]  tracking-tight'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            How It Works
          </motion.h1>

          <div className='w-full flex flex-col lg:flex-row justify-between text-left space-y-10 lg:space-y-0 lg:space-x-8'>
            {[
              {
                input: "TYPE YOUR NAME...",
                title: "1. Enter Your Name",
                description: "Type your name and we'll suggest a beautiful domain.",
                isButton: false,
              },
              {
                input: "PUBLISH",
                title: "2. Launch Instantly",
                description: "Preview and publish your portfolio site in seconds.",
                isButton: true,
              },
              {
                input: "YOURNAME.com",
                title: "3. Go Premium",
                description: "Upgrade anytime to use your own domain and customizations.",
                isButton: false,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className='w-full lg:w-[360px]'
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -3 }}>
                <motion.div
                  className='relative inline-block w-full sm:w-80 mb-5'
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}>
                  {item.isButton ? (
                    <motion.button
                      className='w-full px-5 py-3 font-[700] text-base rounded-xl bg-black text-white border-2 border-black transition-all duration-300  tracking-wide'
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}>
                      {item.input}
                    </motion.button>
                  ) : (
                    <motion.input
                      className='w-full px-5 py-3 text-base rounded-xl bg-white border-2 border-black placeholder-black text-gray-800 font-[600] transition-all duration-300  tracking-wide'
                      placeholder={item.input}
                      whileFocus={{ scale: 1.01 }}
                    />
                  )}

                  {index === 1 && (
                    <div className='absolute top-2.5 right-3'>
                      <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2.5'
                        viewBox='0 0 24 24'
                        height='24px'
                        width='24px'
                        className='text-white'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>

                <h3 className='text-2xl sm:text-3xl lg:text-[30px] font-[700] mb-3 text-[#1a202c]  tracking-tight'>
                  {item.title}
                </h3>

                <p className='text-lg sm:text-xl lg:text-[22px] text-[#4a5568] font-[400] leading-relaxed '>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}>
            <Link
              href='#'
              className='bg-black text-white text-base sm:text-lg md:text-xl font-[700] uppercase px-10 sm:px-12 md:px-16 py-3 sm:py-4 lg:py-4 rounded-full transition-all duration-300 inline-block tracking-wide '>
              Start Free
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* BENEFITS */}
      <motion.section
        className='py-28'
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
                <span className='inline-block w-2 h-2 bg-black rounded-full mr-5 mt-3 flex-shrink-0' />
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

      {/* NAME SECTION - Full width background */}
      <div className='w-full bg-[#DFE2DC]/70'>
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
      </div>

      {/* TESTIMONIALS SECTION */}
      <motion.section
        id='testimonials'
        className='py-32 text-[#1a202c]'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}>
        <div className='max-w-7xl w-full mx-auto'>
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-[800] tracking-tight text-center mb-12 '
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Testimonials
          </motion.h2>

          <div className='grid grid-cols-1 gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {testimonials.map(({ name, message, img }, i) => (
              <motion.div
                key={i}
                className='flex flex-col border-2 border-[#e2e8f0] p-6 max-w-full sm:max-w-[400px] mx-auto transition-all duration-300 hover:border-[#cbd5e0] rounded-lg'
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -3 }}>
                <blockquote className='flex-grow mb-6'>
                  <p className='text-base sm:text-lg lg:text-[18px] leading-relaxed font-[400] text-[#4a5568] '>
                    {message}
                  </p>
                </blockquote>

                <footer className='flex justify-between items-center'>
                  <div className='text-sm sm:text-[15px] font-[700] uppercase tracking-wider text-[#1a202c] '>
                    {name}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Image
                      className='h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover'
                      src={img || "/placeholder.svg"}
                      alt={name}
                      width={64}
                      height={64}
                    />
                  </motion.div>
                </footer>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PRO PLAN SECTION */}
      <motion.section
        className='py-32'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}>
        <div className='mx-auto max-w-7xl'>
          <motion.h1
            className='text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-[800] leading-tight tracking-tight text-[#1a202c]  mb-8'
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Introducing the Pro Plan
          </motion.h1>

          <motion.div
            className='flex flex-col justify-center items-center mx-auto text-center mb-12'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className='max-w-4xl space-y-4'>
              <span className='text-base sm:text-lg font-[600] uppercase tracking-wide text-[#4a5568]  block'>
                TURN YOUR PORTFOLIO INTO A STOREFRONT WITH MAKELY PRO
              </span>

              <span className='text-lg sm:text-xl md:text-2xl font-[600] uppercase tracking-wide text-[#4a5568]  block'>
                FROM "<span className='font-[800] text-[#1a202c]'>INQUIRE NOW</span>" TO "
                <span className='font-[800] text-[#1a202c]'>BUY NOW</span>" IN ONE SIMPLE CLICK.
              </span>
            </div>
          </motion.div>

          <motion.div
            className='text-center'
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <p className='font-[400] text-xl sm:text-2xl md:text-3xl lg:text-[32px] italic uppercase tracking-wide text-[#4a5568] '>
              COMING SOON
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* PRICING SECTION */}
      <motion.section
        className='py-16'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}>
        <div className='max-w-7xl flex flex-col justify-center items-center mx-auto'>
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-[800] tracking-tight text-center mb-12 text-[#1a202c] '
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            PRICING
          </motion.h2>

          {/* Mobile/Tablet Pricing Cards */}
          <motion.div
            className='w-full lg:hidden'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className='space-y-5'>
              {[
                {
                  title: "Free",
                  price: null,
                  features: [
                    { label: "Domain:", value: "yourname.makely.art" },
                    { label: "Templates:", value: "Basic Theme" },
                    { label: "Artwork Uploads:", value: "Up to 5 artworks" },
                    { label: "Blog:", value: "1 Blog post" },
                    { label: "E-commerce:", value: "-" },
                  ],
                },
                {
                  title: "Premium",
                  price: "12$ monthly / 120$ yearly",
                  features: [
                    { label: "Domain:", value: "Custom Domain" },
                    { label: "Templates:", value: "Premium Templates" },
                    { label: "Artwork Uploads:", value: "Up to 100 artworks" },
                    { label: "Blog:", value: "Up to 100 blog posts" },
                    { label: "E-commerce:", value: "-" },
                  ],
                },
                {
                  title: "Pro (Coming Soon)",
                  price: null,
                  features: [
                    { label: "Domain:", value: "Custom Domain" },
                    { label: "Templates:", value: "Premium/Pro Templates" },
                    { label: "Artwork Uploads:", value: "Unlimited Artworks" },
                    { label: "Blog:", value: "Unlimited Blog Posts" },
                    { label: "E-commerce:", value: "Included" },
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className='border-2 border-gray-200 rounded-lg p-5'
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}>
                  <h3 className='text-lg font-[800] text-[#1a202c] text-center mb-3 '>
                    {plan.title}
                  </h3>
                  {plan.price && (
                    <p className='text-xs text-[#4a5568] text-center mb-5 font-[500]'>
                      {plan.price}
                    </p>
                  )}
                  <div className='space-y-2'>
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className='flex justify-between py-1.5 border-b border-gray-100'>
                        <span className='font-[600] text-[#1a202c]  text-sm'>{feature.label}</span>
                        <span className='text-[#4a5568] font-[500] text-sm'>{feature.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Desktop Pricing Table */}
          <motion.div
            className='w-full border-2 border-gray-200 overflow-hidden hidden lg:block rounded-lg'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            {/* Header Row */}
            <div className='grid grid-cols-11 items-center bg-gray-50'>
              <div className='col-span-2 p-5 h-full'></div>
              <div className='col-span-3 p-5 text-center border-l-2 border-gray-200 h-full flex flex-col justify-center'>
                <h2 className='text-lg font-[800] text-[#1a202c] '>Free</h2>
              </div>
              <div className='col-span-3 p-3 text-center border-l-2 border-gray-200 h-full flex flex-col justify-center'>
                <h2 className='text-lg font-[800] text-[#1a202c] '>Premium</h2>
                <p className='text-xs text-[#4a5568] mt-1 font-[500] leading-tight'>
                  12$ monthly /<br />
                  120$ yearly
                </p>
              </div>
              <div className='col-span-3 p-5 text-center border-l-2 border-gray-200 h-full flex flex-col justify-center'>
                <h2 className='text-lg text-[#1a202c] '>
                  <span className='font-[800]'>Pro</span> (Coming Soon)
                </h2>
              </div>
            </div>

            {/* Feature Rows */}
            {[
              {
                label: "Domain",
                values: ["yourname.makely.art", "Custom Domain", "Custom Domain"],
              },
              {
                label: "Templates",
                values: ["Basic Theme", "Premium Templates", "Premium/Pro Templates"],
              },
              {
                label: "Artwork Uploads",
                values: ["Up to 5 artworks", "Up to 100 artworks", "Unlimited Artworks"],
              },
              {
                label: "Blog",
                values: ["1 Blog post", "Up to 100 blog posts", "Unlimited Blog Posts"],
              },
              { label: "E-commerce", values: ["-", "-", "Included"] },
            ].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className='grid grid-cols-11 border-t-2 border-gray-200 items-center hover:bg-gray-50 transition-colors duration-300'>
                <div className='col-span-2 p-5 font-[700] text-center text-[#1a202c]  text-sm'>
                  {row.label}
                </div>
                {row.values.map((value, valueIndex) => (
                  <div
                    key={valueIndex}
                    className='col-span-3 p-5 text-center border-l-2 border-gray-200 text-[#4a5568] font-[500] text-sm'>
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}>
            <Link
              href='#'
              className='inline-block bg-black text-white text-lg sm:text-xl md:text-2xl font-[700] uppercase px-12 sm:px-16 md:px-20 py-4 sm:py-5 lg:py-5 rounded-full transition-all duration-300 tracking-wide  mt-10'>
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        className='py-12 border-t border-gray-200'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            {/* Logo */}
            <motion.div
              className='font-[800] text-2xl tracking-wide text-[#1a202c] '
              whileHover={{ scale: 1.05 }}>
              MAKELY
            </motion.div>

            {/* Links */}
            <div className='flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8'>
              {["CONTACT EMAIL", "TERMS & PRIVACY", "SUPPORT"].map((item, index) => (
                <motion.a
                  key={index}
                  href='#'
                  className='font-[600] text-sm uppercase tracking-wider text-[#4a5568] hover:text-[#1a202c] transition-colors duration-300  relative group'
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}>
                  {item}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a202c] transition-all duration-300 group-hover:w-full'></span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
