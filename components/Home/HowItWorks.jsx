import { motion } from "framer-motion"
import Link from "next/link"

const KeyboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-black"
  >
    <path d="M10 8h.01" />
    <path d="M12 12h.01" />
    <path d="M14 8h.01" />
    <path d="M16 12h.01" />
    <path d="M18 8h.01" />
    <path d="M6 8h.01" />
    <path d="M7 16h10" />
    <path d="M8 12h.01" />
    <rect width="20" height="16" x="2" y="4" rx="2" />
  </svg>
)

const CursorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-black"
  >
    <path d="M7 22a5 5 0 0 1-2-4" />
    <path d="M7 16.93c.96.43 1.96.74 2.99.91" />
    <path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" />
    <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" />
  </svg>
)

const DiamondIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-black"
  >
    <path d="M6 3h12l4 6-10 13L2 9Z" />
    <path d="M11 3 8 9l4 13 4-13-3-6" />
    <path d="M2 9h20" />
  </svg>
)

const AnimatedArrow = ({ delay = 0 }) => (
  <motion.div
    className="hidden lg:flex items-center justify-center mx-8"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    <motion.svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="text-gray-400">
      <motion.path
        d="M2 12h76m-6-6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay + 0.3 }}
      />
    </motion.svg>
  </motion.div>
)

export default function HowItWorks() {
  const steps = [
    {
      icon: <KeyboardIcon />,
      title: "1. Enter Your Name",
      description: "We'll suggest your perfect domain.",
      example: "makely.art/yourname",
      delay: 0.1,
    },
    {
      icon: <CursorIcon />,
      title: "2. Launch Instantly",
      description: "Preview & publish your website in seconds.",
      example: "PUBLISH",
      isButton: true,
      delay: 0.2,
    },
    {
      icon: <DiamondIcon />,
      title: "3. Go Premium",
      description: "Upgrade anytime for your custom domain & full control.",
      example: "yourname.com",
      delay: 0.3,
    },
  ]

  return (
    <motion.section
      id="how-it-works"
      className="max-w-7xl w-full mx-auto py-24 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col justify-center items-center space-y-16">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[800] leading-tight text-[#1a202c] tracking-tight">
            How It Works
          </h1>
          <p className="text-xl sm:text-2xl text-[#4a5568] font-[400]">Simple. Fast. Free.</p>
        </motion.div>

        {/* Steps */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-12 lg:space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                className="flex flex-col items-center text-center space-y-6 max-w-sm"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.delay }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-gray-200 mb-2"
                  whileHover={{ scale: 1.05, borderColor: "#000" }}
                  transition={{ duration: 0.2 }}
                >
                  {step.icon}
                </motion.div>

                {/* Example/Demo */}
                <motion.div className="w-full max-w-xs" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  {step.isButton ? (
                    <motion.button
                      className="w-full px-6 py-4 font-[700] text-lg rounded-xl bg-black text-white border-2 border-black transition-all duration-300 tracking-wide"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {step.example}
                    </motion.button>
                  ) : (
                    <div className="w-full px-6 py-4 text-lg rounded-xl bg-white border-2 border-black text-gray-600 font-[600] tracking-wide text-center">
                      {step.example}
                    </div>
                  )}
                </motion.div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-[700] text-[#1a202c] tracking-tight">{step.title}</h3>
                  <p className="text-lg sm:text-xl text-[#4a5568] font-[400] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>

              {/* Animated Arrow (only between steps, not after last one) */}
              {index < steps.length - 1 && <AnimatedArrow delay={step.delay + 0.2} />}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="#"
            className="bg-black text-white text-lg sm:text-xl font-[700] uppercase px-12 sm:px-16 py-4 sm:py-5 rounded-full transition-all duration-300 inline-block tracking-wide hover:bg-gray-800"
          >
            START FREE →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
