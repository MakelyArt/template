"use client"

import { motion } from "framer-motion"
import Link from "next/link"
// import { ArrowRight, Users, Zap, Globe } from "lucide-react"
import { FaArrowRight } from "react-icons/fa6";


const Hero = () => {
  // const stats = [
  //   { icon: Users, value: "10K+", label: "Artists" },
  //   { icon: Globe, value: "50K+", label: "Portfolios" },
  //   { icon: Zap, value: "2 min", label: "Setup Time" },
  // ]

  return (
    <motion.section
      id="hero"
      className="relative py-24 px-4 min-h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm font-[600] uppercase tracking-wider mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span>Trusted by 10,000+ Artists</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-[800] leading-[1.1] tracking-tight text-[#1a202c] mb-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your Name,
          <br />
          <span className="bg-gradient-to-r from-[#1a202c] via-gray-700 to-[#1a202c] bg-clip-text text-transparent">
            Your Art Gallery
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-[400] leading-[1.4] text-[#4a5568] max-w-4xl mx-auto mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Show the world your art. Launch a <span className="font-[700] text-[#1a202c]">professional website</span> in
          minutes—with <span className="font-[700] text-[#1a202c]">zero coding</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#"
              className="group bg-[#1a202c] text-white text-lg sm:text-xl font-[700] px-8 sm:px-12 py-4 sm:py-5 rounded-full transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl hover:bg-gray-800"
            >
              <span>Get Started Free</span>
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#"
              className="text-[#1a202c] text-lg sm:text-xl font-[700] px-8 sm:px-12 py-4 sm:py-5 rounded-full border-2 border-[#1a202c] hover:bg-[#1a202c] hover:text-white transition-all duration-300 inline-block"
            >
              View Examples
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-3 group"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-[#1a202c] group-hover:text-white transition-all duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-[800] text-[#1a202c]">{stat.value}</div>
                <div className="text-sm font-[600] text-[#4a5568] uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Trust Indicators */}
        {/* <motion.div
          className="mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <p className="text-sm text-[#4a5568] font-[500] mb-4">Trusted by artists worldwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="w-20 h-8 bg-gray-200 rounded"></div>
            <div className="w-20 h-8 bg-gray-200 rounded"></div>
            <div className="w-20 h-8 bg-gray-200 rounded"></div>
            <div className="w-20 h-8 bg-gray-200 rounded"></div>
          </div>
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#4a5568] rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-3 bg-[#4a5568] rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div> */}
    </motion.section>
  )
}

export default Hero
