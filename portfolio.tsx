import Image from 'next/image'
import { motion } from "framer-motion"

const portfolioItems = [
  { title: "Holographic TikTok Campaign", image: "/holographic-tiktok.jpg" },
  { title: "AI-Generated Instagram Reels", image: "/ai-reels.jpg" },
  { title: "VR YouTube Shorts Experience", image: "/vr-shorts.jpg" },
  { title: "Neuro-Responsive Facebook Ads", image: "/neuro-ads.jpg" }
]

export default function Portfolio() {
  return (
    <section className="bg-indigo-950 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-electric-blue">Our Futuristic Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-indigo-900 rounded-lg overflow-hidden shadow-neon"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={item.image} alt={item.title} width={300} height={300} className="w-full" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-electric-blue">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

