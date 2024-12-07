import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Future SFC Agency</h3>
            <p>Revolutionizing content creation with AI and emerging technologies.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-gray-300 transition-colors">Services</Link></li>
              <li><Link href="#process" className="hover:text-gray-300 transition-colors">Process</Link></li>
              <li><Link href="#portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link></li>
              <li><Link href="#testimonials" className="hover:text-gray-300 transition-colors">Testimonials</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Connect with Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-gray-300 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-gray-300 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-gray-300 transition-colors"><Linkedin /></a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; 2023 Future SFC Agency. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

