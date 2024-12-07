import { motion } from "framer-motion"
import { CheckCircle } from 'lucide-react'

const reasons = [
  "AI-driven content strategy for maximum engagement",
  "Real-time analytics and performance optimization",
  "Cutting-edge AR and VR content integration",
  "Blockchain-based content authentication",
  "Quantum computing-powered audience insights",
  "Neuro-linguistic programming for persuasive messaging"
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-indigo-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-electric-blue">Why Choose Our Future-Ready Agency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="w-6 h-6 text-electric-blue mr-4 flex-shrink-0" />
              <p className="text-lg">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

