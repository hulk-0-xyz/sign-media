import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Cpu, Globe } from 'lucide-react'
import { motion } from "framer-motion"

const services = [
  {
    icon: Zap,
    title: "Quantum Content Creation",
    description: "Leverage quantum computing to generate engaging short-form content at unprecedented speeds."
  },
  {
    icon: Cpu,
    title: "Neural Network Analytics",
    description: "Use advanced neural networks to predict and optimize content performance with unparalleled accuracy."
  },
  {
    icon: Globe,
    title: "Holographic Distribution",
    description: "Seamlessly adapt and distribute content across emerging holographic and AR platforms."
  }
]

export default function Services() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Futuristic Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black text-white border-white border-2">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-white mb-4" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

