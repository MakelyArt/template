import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  // const quickLinks = [
  //   { name: "About", href: "#" },
  //   { name: "Features", href: "#" },
  //   { name: "Pricing", href: "#" },
  //   { name: "Templates", href: "#" },
  //   { name: "Blog", href: "#" },
  // ]

  // const supportLinks = [
  //   { name: "Help Center", href: "#" },
  //   { name: "Contact Support", href: "#" },
  //   { name: "Documentation", href: "#" },
  //   { name: "Community", href: "#" },
  //   { name: "Status", href: "#" },
  // ]

  const legalLinks = [
    { name: "Terms & Conditions", href: "#" },
    { name: "GDPR", href: "#" },
  ];
  return (
    <motion.footer
      className='bg-gray-50 border-t border-white overflow-hidden'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}>
      <div className='max-w-[1100px] mx-auto px-[20px]'>
        {/* Main Footer Content */}
        <div className='py-10'>
          <div className='flex flex-col md:flex-row gap-12'>
            {/* Company Info */}
            <motion.div
              className='space-y-4 md:w-[50%]'
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              <motion.div
                className='font-[800] text-[30px] leading-[1] tracking-wide text-black'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}>
                MAKELY
              </motion.div>
              <p className='text-[#4a5568] text-[15px] leading-[1.5] max-w-md'>
                Create stunning websites in minutes. Showcase your art, connect with clients, and
                grow your creative business with our powerful platform.
              </p>
            </motion.div>

            <div className='flex md:items-end flex-col md:w-[25%]'>
              <motion.div
                className='space-y-2'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}>
                <h3 className='font-[800] text-[16px] text-black uppercase tracking-wider'>
                  Contact Us
                </h3>
                <ul className='space-y-2'>
                    <motion.li
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5  }}>
                      <a
                        href={"#"}
                        className='text-[#4a5568] text-[14px] hover:text-black transition-colors duration-300 font-[500] relative group'>
                        hello@makely.art
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
                      </a>
                    </motion.li>
                </ul>
              </motion.div>
            </div>

            {/* Legal */}
            <div className='flex md:items-end flex-col md:w-[25%]'>
              <motion.div
                className='space-y-2'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}>
                <h3 className='font-[800] text-[16px] text-black uppercase tracking-wider'>
                  Legal
                </h3>
                <ul className='space-y-2'>
                  {legalLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}>
                      <a
                        href={link.href}
                        className='text-[#4a5568] text-[14px] hover:text-black transition-colors duration-300 font-[500] relative group'>
                        {link.name}
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          
          
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <motion.div
          className='border-t border-gray-200 py-5'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          <div className='flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0'>
            <div className='flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6'>
              <p className='text-[#4a5568] font-[500] text-[14px]'>
                © {new Date().getFullYear()} Makely. All rights reserved.
              </p>
              <p className='text-[#4a5568] font-[500] text-[14px]'>
                Made with ❤️ for creative professionals
              </p>
            </div>

            <motion.div
              className='flex items-center space-x-4'
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}>
              <span className='text-[#4a5568] font-[500] text-sm'>Powered by</span>
              <div className='font-[800] text-black text-sm tracking-wider'>MAKELY</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
