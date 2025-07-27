import { motion } from "framer-motion"
import { CiMail } from "react-icons/ci";
import { FiGithub, FiLinkedin  } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Templates", href: "#" },
    { name: "Blog", href: "#" },
  ]

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Community", href: "#" },
    { name: "Status", href: "#" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ]

  const socialLinks = [
    { name: "Twitter", icon: FaXTwitter, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
    { name: "LinkedIn", icon: FiLinkedin , href: "#" },
    { name: "GitHub", icon: FiGithub, href: "#" },
  ]

  return (
    <motion.footer
      className="bg-gray-50 border-t border-gray-200 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                className="font-[800] text-3xl tracking-wide text-[#1a202c]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                MAKELY
              </motion.div>
              <p className="text-[#4a5568] text-lg leading-relaxed max-w-md">
                Create stunning portfolio websites in minutes. Showcase your art, connect with clients, and grow your
                creative business with our powerful platform.
              </p>

              {/* Contact Email */}
              <motion.div
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                  <CiMail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-[600] text-[#4a5568] uppercase tracking-wider">Contact Us</p>
                  <a
                    href="mailto:hello@makely.art"
                    className="text-lg font-[700] text-[#1a202c] hover:text-gray-600 transition-colors duration-300"
                  >
                    hello@makely.art
                  </a>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-[800] text-lg text-[#1a202c] uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-[#4a5568] hover:text-[#1a202c] transition-colors duration-300 font-[500] relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a202c] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              className="space-y-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-[800] text-lg text-[#1a202c] uppercase tracking-wider">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-[#4a5568] hover:text-[#1a202c] transition-colors duration-300 font-[500] relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a202c] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              className="space-y-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-[800] text-lg text-[#1a202c] uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-[#4a5568] hover:text-[#1a202c] transition-colors duration-300 font-[500] relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a202c] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <motion.div
          className="border-t border-gray-200 py-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-[#4a5568] font-[500]">© {new Date().getFullYear()} Makely. All rights reserved.</p>
              <p className="text-[#4a5568] font-[500] text-sm">Made with ❤️ for creative professionals</p>
            </div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <span className="text-[#4a5568] font-[500] text-sm">Powered by</span>
              <div className="font-[800] text-[#1a202c] text-sm tracking-wider">MAKELY</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
