import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Activities from '@/components/Activities'
import Members from '@/components/Members'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full relative selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Members />
      <Footer />
    </main>
  )
}