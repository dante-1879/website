'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Rocket } from 'lucide-react'

export default function About() {
  const timelineItems = [
    {
      year: '2012',
      title: 'Club Founded',
      description: 'Advanced Robotics Club (ARC) was established at Advanced College of Engineering and Management (ACEM).',
    },
    {
      year: 'Community Growth',
      title: 'Platform for Innovators',
      description: 'Grew into a vital platform for thousands of STEM-driven Nepalese students, helping them implement real-world engineering solutions.',
    },
    {
      year: 'Skill Building',
      title: 'Technical Workshops',
      description: 'Fostered technical minds through rigorous training on App-controlled robots, AVR programming, and PCB Designing.',
    },
    {
      year: '4 Years Running',
      title: 'Technorion Nepal',
      description: 'Successfully organized the International Selection of Nepal in the Technorion category for Techfest, IIT Bombay for 4 consecutive years.',
    },
  ]

  return (
    <section id="about" className="section bg-white/40 border-y border-white/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Sticky Left Column: Mission & Values */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey & <br/><span className="text-primary">Mission</span></h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Since 2012, ARC has been home to many robotics enthusiasts. We are committed to developing ideas and helping innovators implement them, inspiring students to become the brightest minds in Engineering across the nation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-6 flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Innovation Platform</h4>
                  <p className="text-sm text-foreground/60 mt-1">Providing a launchpad for thousands of students driven towards STEM.</p>
                </div>
              </div>
              <div className="glass-card p-6 flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hands-on Expertise</h4>
                  <p className="text-sm text-foreground/60 mt-1">Bridging the gap through practical seminars, programming, and hardware design.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Bento */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass-card p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <span className="inline-block px-3 py-1 rounded-full bg-foreground/5 text-primary font-bold text-sm mb-4">
                  {item.year}
                </span>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
            
            {/* Visual Callout Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-card p-8 sm:col-span-2 bg-primary text-white border-none relative overflow-hidden"
            >
              <Rocket className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10" />
              <h4 className="font-bold text-2xl mb-2">Looking Ahead</h4>
              <p className="text-white/80 max-w-md">Continuing our legacy of excellence by expanding our international competition presence and bringing new STEM opportunities to ACEM.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}