'use client'

import { motion } from 'framer-motion'
import { Cpu, Code2, Presentation, Globe2 } from 'lucide-react'
import Image from 'next/image'

const activities = [
  {
    title: 'Hardware & Electronics',
    description: 'Extensive hands-on training sessions focused on custom PCB Designing, advanced Soldering techniques, and hardware assembly.',
    icon: Cpu,
    image: '/hardware.jpg', 
    className: 'md:col-span-2 bg-gradient-to-br from-primary/5 to-transparent relative',
    iconColor: 'text-primary'
  },
  {
    title: 'Programming Seminars',
    description: 'Workshops dedicated to building logic, featuring embedded C and AVR microcontroller programming.',
    icon: Code2,
    image: '/programming.jpg', 
    className: 'md:col-span-1 relative',
    iconColor: 'text-accent'
  },
  {
    title: 'Technorion Nepal',
    description: 'Successfully organized the International Selection for Techfest, IIT Bombay for 4 consecutive years.',
    icon: Presentation,
    image: '/technorion.jpg', 
    className: 'md:col-span-1 relative',
    iconColor: 'text-yellow-600'
  },
  {
    title: 'App-Controlled Robotics',
    description: 'Building and racing custom, smartphone-controlled robotic systems.',
    icon: Globe2,
    image: '/robotics.jpg', 
    className: 'md:col-span-2 relative',
    iconColor: 'text-primary'
  }
]

export default function Activities() {
  return (
    <section id="activities" className="section bg-grid-pattern relative">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Training & Events</h2>
          <p className="text-lg text-foreground/70">
            We annually conduct various training programs, workshops, and seminars to foster brilliant technical minds.
          </p>
        </div>

        {/* 250px uniform height for all cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {activities.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`glass-card p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 overflow-hidden ${item.className}`}
              >
                {/* Background Spanning Image with Radial Fade Mask */}
                {item.image && (
                  <div 
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                      maskImage: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 80%)',
                      WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 80%)'
                    }}
                  >
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700 opacity-60" 
                    />
                  </div>
                )}

                {/* Top: Icon */}
                <div className={`relative z-10 p-4 rounded-xl bg-white shadow-sm border border-black/5 w-fit ${item.iconColor}`}>
                  <Icon size={28} />
                </div>

                {/* Bottom: Text */}
                <div className="relative z-10 mt-auto pt-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-foreground/80 font-medium leading-relaxed drop-shadow-sm">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}   