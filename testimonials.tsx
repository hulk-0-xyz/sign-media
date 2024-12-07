import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Zara X",
    company: "Quantum Corp",
    content: "The SFC Agency's AI-driven content strategy increased our engagement by 500% across all platforms!",
    avatar: "/zara-avatar.jpg",
    metrics: { engagement: "+500%", reach: "+300%", conversion: "+200%" }
  },
  {
    name: "Neo Smith",
    company: "Virtual Realities Inc.",
    content: "Their VR-integrated short-form content revolutionized our brand's digital presence. Simply mind-blowing!",
    avatar: "/neo-avatar.jpg",
    metrics: { engagement: "+400%", reach: "+250%", conversion: "+150%" }
  },
  {
    name: "Aria Quantum",
    company: "FutureTech Innovations",
    content: "The predictive analytics provided by SFC Agency helped us stay ahead of trends and dominate our market.",
    avatar: "/aria-avatar.jpg",
    metrics: { engagement: "+450%", reach: "+275%", conversion: "+180%" }
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Voices from the Future</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white text-black border-black border">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Engagement Increase</TableHead>
                <TableHead>Reach Expansion</TableHead>
                <TableHead>Conversion Boost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.map((testimonial, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{testimonial.name}</TableCell>
                  <TableCell>{testimonial.metrics.engagement}</TableCell>
                  <TableCell>{testimonial.metrics.reach}</TableCell>
                  <TableCell>{testimonial.metrics.conversion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  )
}

