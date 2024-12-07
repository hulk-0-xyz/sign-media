import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-black text-white overflow-hidden relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              'Revolutionize Your Content',
              1000,
              'Dominate Social Media',
              1000,
              'Engage Your Audience',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Harness the power of AI-driven short-form content to dominate the digital landscape.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-colors duration-300">
            Explore the Future
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300">
            Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

