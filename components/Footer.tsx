'use client'

import { Mail, Globe, MapPin } from 'lucide-react'
import Image from 'next/image'

// Custom SVGs for Brands
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white/60 border-t border-black/5 pt-16 pb-8">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/arc.png" 
                alt="Advanced Robotics Club Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-xl tracking-tight text-foreground">ARC Robotics</span>
            </div>
            <p className="text-foreground/70 max-w-sm leading-relaxed">
              An educational organization within Advanced College of Engineering and Management (ACEM). Providing a platform for STEM innovators since 2012.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="text-foreground/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#activities" className="text-foreground/60 hover:text-primary transition-colors">Activities</a></li>
              <li><a href="#members" className="text-foreground/60 hover:text-primary transition-colors">Members</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Connect</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="http://arc.acem.edu.np" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors">
                  <Globe className="w-4 h-4" />
                  arc.acem.edu.np
                </a>
              </li>
              <li>
                <a href="mailto:advancedroboticsclub@acem.edu.np" className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="break-all">advancedroboticsclub@acem.edu.np</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-foreground/60">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Kalanki, Nepal
                </span>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a 
                  href="https://github.com/advancedroboticsclub-25" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-foreground/5 rounded-full text-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/arcacem" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-foreground/5 rounded-full text-foreground/60 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/advanced-robotics-club" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-foreground/5 rounded-full text-foreground/60 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/50">
          <p>&copy; {currentYear} Advanced Robotics Club. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}