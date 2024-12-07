import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Bot, Mic, Scissors, ShoppingBag, Youtube, Camera, VideoIcon } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: "Talking-Head Videos",
    description: "Grow a personal brand in any niche with our trendy edits."
  },
  {
    icon: Bot,
    title: "Automated Videos",
    description: "Get edits like MagnatesMedia with zero efforts."
  },
  {
    icon: Mic,
    title: "Podcast Editing",
    description: "Make those lengthy podcasts interesting by cutting out the fluff."
  },
  {
    icon: Scissors,
    title: "Podcast to Shorts",
    description: "Clip short form videos from your lengthy podcasts."
  },
  {
    icon: ShoppingBag,
    title: "UGC ADS",
    description: "High converting ads for any site, facebook, Instagram, TikTok."
  },
  {
    icon: Youtube,
    title: "YouTube Shorts",
    description: "Get viral with our highly engaging short-form videos."
  },
  {
    icon: Camera,
    title: "Vlogs",
    description: "Dynamic edits to turn your vlogs into a real cinematic experience."
  },
  {
    icon: VideoIcon,
    title: "Webinars",
    description: "Turn those seminars, webinars into interesting pieces of content."
  }
]

export default function ServicesTable() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Futuristic Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 text-white border-white border hover:bg-gray-800 transition-colors duration-300 cursor-pointer group">
                <CardHeader>
                  <service.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300" />
                  <CardTitle className="text-lg group-hover:text-blue-300 transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

