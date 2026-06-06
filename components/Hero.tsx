'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Bot, Cpu, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-grid-pattern pt-20">
      {/* Dynamic Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-multiply blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full mix-blend-multiply blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="container-custom section grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Typography & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mx-auto lg:mx-0">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold tracking-wide text-foreground/80">Est. 2012 • Kalanki, Nepal</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Advanced <br />
            <span className="text-gradient">Robotics</span> Club
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            An organization within Advanced College of Engineering and Management (ACEM). We provide a platform for students to develop ideas and help innovators implement them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" onClick={scrollToProjects} className="h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 group">
              Explore Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Visual Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          {/* Abstract Floating UI Elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-10 right-10 p-6 glass-card w-64"
          >
            <Cpu className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-lg">Hardware Innovation</h3>
            <p className="text-sm text-foreground/60 mt-2">Specialized training on AVR programming, PCB Designing, and Soldering.</p>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-20 left-0 p-6 glass-card w-72"
          >
            <Bot className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-bold text-lg">Technorion Nepal</h3>
            <p className="text-sm text-foreground/60 mt-2">Organizers of the International Selection for Techfest, IIT Bombay, successfully for 4 years.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}