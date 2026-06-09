'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
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
  { name: 'Prashant Thapa', role: 'Member', exp: '3rd Year' },
  { name: 'Sukrima Maharjhan', role: 'Member', exp: '3rd Year' },
  { name: 'Abhinav Sharma', role: 'Member', exp: '2nd Year' },
  { name: 'Nabin Timsina', role: 'Member', exp: '2nd Year' },
  { name: 'Sneha Jha', role: 'Member', exp: '2nd Year' },
  { name: 'Yuttena Singh Dangol', role: 'Member', exp: '2nd Year' },
  { name: 'Binaya Pokharel', role: 'Member', exp: '1st Year' },
  { name: 'Jenisha Chaudhary', role: 'Member', exp: '1st Year' },
  { name: 'Nirjam Thapaliya', role: 'Member', exp: '1st Year' },
  { name: 'Nishant K. Bhandari', role: 'Member', exp: '1st Year' },
  { name: 'Prabesh Kunwar', role: 'Member', exp: '1st Year' },
  { name: 'Vishal Maske', role: 'Member', exp: '1st Year' },
]

// ─── Tiny inline blur placeholder (avoids a network round-trip) ──────────────
const BLUR_DATA_URL =
  'data:image/svg+xml;base64,' +
  btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="5">
      <filter id="b"><feGaussianBlur stdDeviation="1"/></filter>
      <rect width="4" height="5" fill="#1a1a2e" filter="url(#b)"/>
    </svg>`
  )

// ─── Hook: resolves after first paint so SSR/CSR always agree ─────────────────
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [breakpoint])
  return isMobile
}

// ─── Shared card ──────────────────────────────────────────────────────────────
interface MemberCardProps {
  member: (typeof members)[number]
  /** Only provided on desktop (scroll-driven parallax) */
  bgParallax?: MotionValue<string>
  /** First few cards get priority loading for LCP */
  priority?: boolean
}

function MemberCard({ member, bgParallax, priority = false }: MemberCardProps) {
  const [imgError, setImgError] = useState(false)
  const imagePath = `/members/${member.name.replace(/ /g, '_')}.jpg`

  return (
    <div className="relative w-[260px] h-[380px] md:w-[350px] md:h-[450px] rounded-3xl overflow-hidden group bg-white/5 border border-white/10 shrink-0 snap-center snap-always">

      {/* Gradient bg — parallax on desktop, static on mobile */}
      {bgParallax ? (
        <motion.div
          style={{ x: bgParallax }}
          className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary via-transparent to-accent pointer-events-none z-0"
        />
      ) : (
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary via-transparent to-accent pointer-events-none z-0" />
      )}

      {/* Member photo — lazy by default; priority for first visible cards */}
      {!imgError && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={imagePath}
            alt={member.name}
            fill
            priority={priority}
            // sizes tells Next.js exactly how wide this image renders
            // → it picks the right srcset entry and skips over-fetching
            sizes="(max-width: 767px) 260px, 350px"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            onError={() => setImgError(true)}
            className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        </div>
      )}

      {/* Text */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-xs drop-shadow-md">
            {member.role}
          </p>
          <h3 className="text-xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">
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

// ─── Mobile: native horizontal scroll with snap ───────────────────────────────
function MobileMembers() {
  return (
    <section id="members" className="bg-foreground text-background py-16">
      <div className="px-6 mb-8">
        <h2 className="text-4xl font-bold text-white mb-3">Meet the Team</h2>
        <p className="text-sm text-white/60">
          Swipe to explore the brilliant minds driving our innovations forward.
        </p>
      </div>

      {/*
        overflow-x-auto   → native horizontal scroll (hardware-accelerated on iOS/Android)
        snap-x mandatory  → snaps to each card center
        scrollbar-hidden  → hide scrollbar via utility (add to your globals if needed)
        -webkit-overflow-scrolling: touch already set by Tailwind's overflow utilities
      */}
      <div
        className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
      >
        {/* Hide webkit scrollbar */}
        <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

        {members.map((member, i) => (
          <MemberCard
            key={i}
            member={member}
            // Eagerly load only the first 2 cards visible at mount
            priority={i < 2}
          />
        ))}

        {/*
          Trailing spacer = 50vw - half-card-width (130px).
          This lets the last card's centre align with the viewport centre,
          which is exactly where snap-center wants to land it.
        */}
        <div className="shrink-0 w-[calc(50vw-130px)]" aria-hidden />
      </div>
    </section>
  )
}

// ─── Desktop: vertical-scroll-driven horizontal parallax ─────────────────────
function DesktopMembers() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  // -87% ensures the last card fully enters the viewport across common screen widths.
  // Formula: (trackWidth − viewportWidth) / trackWidth ≈ 86–87% for this member count.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-87%'])
  const bgParallax = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  return (
    <section ref={targetRef} id="members" className="relative h-[500vh] bg-foreground text-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
        <div className="container-custom mb-12 px-8 z-10 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Meet the Team</h2>
          <p className="text-lg text-white/60 max-w-xl">
            Scroll down to explore the brilliant minds driving our innovations forward.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-8 w-max">
          {members.map((member, i) => (
            <MemberCard
              key={i}
              member={member}
              bgParallax={bgParallax}
              priority={i < 3}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Root export ──────────────────────────────────────────────────────────────
export default function Members() {
  const isMobile = useIsMobile()
  // Render desktop shell on SSR to avoid hydration mismatch;
  // swap to mobile after first paint (no visible flash — both share same bg).
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <DesktopMembers />
  return isMobile ? <MobileMembers /> : <DesktopMembers />
}