import { motion } from "framer-motion"
import { Database, Cpu, Globe, Zap } from 'lucide-react'

const processSteps = [
  {
    icon: Database,
    number: "01",
    title: "Quantum Data Collection",
    description: "Gather insights using quantum sensors and AI-powered analytics."
  },
  {
    icon: Cpu,
    number: "02",
    title: "Neural Content Generation",
    description: "Create engaging content with our advanced AI and machine learning algorithms."
  },
  {
    icon: Globe,
    number: "03",
    title: "Holographic Distribution",
    description: "Distribute content across traditional and emerging holographic platforms."
  },
  {
    icon: Zap,
    number: "04",
    title: "Quantum Feedback Loop",
    description: "Continuously optimize content based on real-time quantum network analysis."
  }
]

export default function OurProcess() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Quantum Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="border border-blue-500 p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <step.icon className="text-blue-400 w-12 h-12 mb-4 group-hover:text-blue-300 transition-colors duration-300" />
              <div className="text-4xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">{step.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

