import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Navbar from '../Navbar'
import Footer from '../components/Footer'
import { Star, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Modern • Futuristic • Cinematic • Sleek</p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight">
              Cut. Create. Conquer.
            </h1>
            <p className="mt-4 text-lg text-white/80">Prime Cut brings cinematic perfection to your videos and photos.</p>
            <div className="mt-8 flex items-center gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-black font-medium px-5 py-3 rounded-full shadow-[0_0_40px_rgba(168,85,247,0.5)]">Get Started</Link>
              <Link to="/videos" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-full hover:bg-white/10 transition">See Samples</Link>
            </div>
            <div className="mt-10 flex items-center gap-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400" />
              ))}
              <p className="text-white/80">Trusted by 500+ creators</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 -z-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">What creators say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((t) => (
              <motion.div key={t} whileHover={{ y: -6 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <Quote className="h-6 w-6 text-white/50" />
                <p className="mt-4 text-white/80">“Prime Cut turned our raw footage into a cinematic story. Fast, friendly, and mind-blowing quality.”</p>
                <div className="mt-6 text-sm text-white/60">— Alex, Music Producer</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
