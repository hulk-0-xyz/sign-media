import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CustomerOpportunity() {
  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Unlock Your Content's Potential</h2>
          <p className="text-xl text-center mb-12 text-gray-300">
            Join the content revolution and stay ahead of the curve with our AI-powered solutions.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Start Your Journey
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/opportunity-pattern.svg')] opacity-10"></div>
      </div>
    </section>
  )
}

