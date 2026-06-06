'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const members = [
  // --- EXECUTIVE BOARD ---
  { name: 'Aviskar Poudel', role: 'President', exp: '4th Year' },
  { name: 'Sugam Sen Sinjali', role: '1st Vice President', exp: '4th Year' },
  { name: 'Safal Sapkota', role: '2nd Vice President', exp: '3rd Year' },
  { name: 'Ritika Budathoki', role: 'Secretary', exp: '3rd Year' },
  { name: 'Prepshuna Dhakal', role: 'Vice Secretary', exp: '2nd Year' },
  { name: 'Himal Joshi', role: 'Treasurer', exp: '4th Year' },

  // --- LEADS & COORDINATORS ---
  { name: 'Shishir Pandeya', role: 'Club Coordinator', exp: '4th Year' },
  { name: 'Ayush Joshi', role: 'Lead Strategist', exp: '4th Year' },
  { name: 'Suvechchha Pandeya', role: 'PR Lead', exp: '4th Year' },
  { name: 'Joyash Shrestha', role: 'Project Coordinator', exp: '4th Year' },
  { name: 'Anush Bhattarai', role: 'H/W LEAD', exp: '3rd Year' },
  { name: 'Bishal Giri', role: 'S/W LEAD', exp: '3rd Year' },
  { name: 'Saurav Jha', role: 'Inventory Manager', exp: '3rd Year' },

  // --- CORE MEMBERS ---
  { name: 'Dina Shrestha', role: 'Core Member', exp: '2nd Year' },
  { name: 'Sweta Pokharel', role: 'Core Member', exp: '2nd Year' },

  // --- GENERAL MEMBERS ---
  // 3rd Year
  { name: 'Prashant Thapa', role: 'Member', exp: '3rd Year' },
  { name: 'Sukrima Maharjhan', role: 'Member', exp: '3rd Year' },
  
  // 2nd Year
  { name: 'Abhinav Sharma', role: 'Member', exp: '2nd Year' },
  { name: 'Nabin Timsina', role: 'Member', exp: '2nd Year' },
  { name: 'Sneha Jha', role: 'Member', exp: '2nd Year' },
  { name: 'Yuttena Singh Dangol', role: 'Member', exp: '2nd Year' },
  
  // 1st Year
  { name: 'Binaya Pokharel', role: 'Member', exp: '1st Year' },
  { name: 'Jenisha Chaudhary', role: 'Member', exp: '1st Year' },
  { name: 'Nirjam Thapaliya', role: 'Member', exp: '1st Year' },
  { name: 'Nishant K. Bhandari', role: 'Member', exp: '1st Year' }, 
  { name: 'Prabesh Kunwar', role: 'Member', exp: '1st Year' },
  { name: 'Vishal Maske', role: 'Member', exp: '1st Year' },
]

function MemberCard({ member, bgParallax }: { member: any, bgParallax: MotionValue<string> }) {
  const [imgError, setImgError] = useState(false)
  
  // Format: "First_Last.jpg"
  const imagePath = `/members/${member.name.replace(/ /g, '_')}.jpg`

  return (
    <div className="relative w-[280px] md:w-[350px] h-[400px] md:h-[450px] rounded-3xl overflow-hidden group bg-white/5 border border-white/10 shrink-0">
      
      {/* 1. Base Parallax Background (Always visible, serves as the fallback) */}
      <motion.div 
        style={{ x: bgParallax }}
        className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary via-transparent to-accent pointer-events-none z-0"
      />

      {/* 2. Member Photo (Disappears entirely if there is no image file to prevent broken icon) */}
      {!imgError && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src={imagePath}
            alt={member.name}
            fill
            onError={() => setImgError(true)}
            className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
          />
          {/* Dark gradient overlay so text remains readable over the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        </div>
      )}
      
      {/* 3. Card Content (No generic icons, just text) */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-xs md:text-sm drop-shadow-md">
            {member.role}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">
            {member.name}
          </h3>
          <p className="text-white/70 text-sm font-medium drop-shadow-md">
            {member.exp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Members() {
  const targetRef = useRef<HTMLDivElement>(null)
  
  // High scroll range to account for the large array of 27 members
  const { scrollYProgress } = useScroll({ target: targetRef })
  
  // Transforms vertical scroll into horizontal movement across the cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"])
  const bgParallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section ref={targetRef} id="members" className="relative h-[500vh] bg-foreground text-background">
      {/* Sticky container that stays on screen while user scrolls */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
        
        <div className="container-custom mb-12 px-8 z-10 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Meet the Team</h2>
          <p className="text-lg text-white/60 max-w-xl">
            Scroll down to explore the brilliant minds driving our innovations forward.
          </p>
        </div>

        {/* The horizontally moving track */}
        <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-8 w-max">
          {members.map((member, i) => (
            <MemberCard key={i} member={member} bgParallax={bgParallax} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}