import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header 
      className="bg-black border-b border-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">Future SFC</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#services" className="text-white hover:text-gray-300 transition-colors">Services</Link></li>
            <li><Link href="#process" className="text-white hover:text-gray-300 transition-colors">Process</Link></li>
            <li><Link href="#portfolio" className="text-white hover:text-gray-300 transition-colors">Portfolio</Link></li>
            <li><Link href="#testimonials" className="text-white hover:text-gray-300 transition-colors">Testimonials</Link></li>
            <li><Button asChild className="bg-white text-black hover:bg-gray-200"><Link href="#contact">Contact Us</Link></Button></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

