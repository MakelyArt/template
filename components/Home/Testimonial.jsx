import { motion } from "framer-motion";
import Image from "next/image";
// import { Quote } from "lucide-react"

import { FaArrowRight, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Adam",
    role: "Digital Artist",
    message:
      "Makely.art made it so easy to launch my portfolio. I had a beautiful website live in minutes—no coding, no stress.",
    img: "/3.png",
    rating: 5,
  },
  {
    name: "Isabelle Pascual",
    role: "Emerging Artist",
    message:
      "As an emerging artist, having a custom domain and clean layout helped me look professional and land more opportunities.",
    img: "/2.png",
    rating: 5,
  },
  {
    name: "Felipe",
    role: "Visual Artist",
    message:
      "I love how simple Makely is. Uploading my artwork was fast, and the themes really showcase my style beautifully.",
    img: "/1.png",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <motion.section
      id='testimonials'
      className='py-[44px] md:py-[60px] px-[20px] bg-gray-50 border-b-[10px] border-white'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          className='text-center mb-8'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className='text-[30px] lg:text-[44px] font-[800] tracking-tight mb-4 text-black'>
            What Artists Say
          </h2>
          <p className='text-[16px] md:text-[18px] text-[#4a5568] max-w-2xl mx-auto'>
            Join thousands of artists who trust Makely to showcase their work professionally
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-[40px]'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-2xl p-8 min-h-[300px] flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group'
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}>
              {/* Background Quote Icon */}
              <div className='absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300'>
                <FaQuoteRight className='w-16 h-16 text-black' />
              </div>

              {/* Quote */}
              <blockquote className='relative'>
                {/* <div className='absolute -top-2 -left-1 text-4xl text-black opacity-20 font-serif'>
                  "
                </div> */}
                <p className='text-lg leading-relaxed text-[#4a5568] font-[400] relative z-10'>
                  {testimonial.message}
                </p>
                {/* <div className='absolute -bottom-4 -right-1 text-4xl text-black opacity-20 font-serif rotate-180'>
                  "
                </div> */}
              </blockquote>

              {/* Author Info */}
              <motion.div
                className='flex items-center space-x-4'
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}>
                <motion.div
                  className='relative'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}>
                  <div className='w-14 h-14 rounded-full overflow-hidden ring-2 ring-gray-100'>
                    <Image
                      src={testimonial.img || "/placeholder.svg?height=56&width=56&query=profile"}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  {/* <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div> */}
                </motion.div>

                <div>
                  <h4 className='font-[700] text-black text-lg'>{testimonial.name}</h4>
                  <p className='text-[#4a5568] text-sm font-[500]'>{testimonial.role}</p>
                </div>
              </motion.div>

              {/* Hover Effect Border */}
              <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black transition-all duration-300 pointer-events-none'></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className='text-center mt-8'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}>
          <p className='text-[16px] md:text-[18px] text-[#4a5568] mb-6'>
            Ready to join our community of successful artists?
          </p>
          {/* <motion.button
            className='bg-black text-white px-8 py-4 rounded-full font-[700] text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Start Your Website Today
          </motion.button> */}
          <button className='group bg-black hover:scale-[1.04] text-white text-[14px] sm:text-[16px]  leading-[1.1] font-[700] px-[24px] sm:px-[24px] py-[12px] sm:py-[14px] rounded-full transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl'>
            
            <span>Start Your Website Today</span>
            <FaArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonial;
