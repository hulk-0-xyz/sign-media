import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

const initialData = [
  { name: 'AI Content', value: 400 },
  { name: 'Engagement', value: 300 },
  { name: 'Distribution', value: 200 },
  { name: 'Analytics', value: 278 },
  { name: 'Optimization', value: 189 },
]

export default function GrowthFactors() {
  const [data, setData] = useState(initialData)

  const regenerateData = () => {
    const newData = data.map(item => ({
      ...item,
      value: Math.floor(Math.random() * 500) + 100
    }))
    setData(newData)
  }

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Quantum Factors Driving Your Growth</h2>
        <p className="text-center mb-12 text-gray-400">Visualize the impact of our AI-driven strategies on your content performance</p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#333', border: 'none' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
        <div className="flex justify-center">
          <Button 
            onClick={regenerateData}
            className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
          >
            Simulate Growth Projection
          </Button>
        </div>
      </div>
    </section>
  )
}

