import Navbar from '../Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const samples = [
  { id: 1, title: 'Energetic Reel', desc: 'Fast cuts, zooms, and bold transitions.', thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Moody Music Video', desc: 'Dark tones, slow motion, cinematic vibes.', thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Wedding Story', desc: 'Warm colors, smooth cuts, heartfelt pacing.', thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Business Promo', desc: 'Clean, modern, branded visual flow.', thumb: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Travel Montage', desc: 'Epic landscapes and kinetic typography.', thumb: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Photo Retouch Showcase', desc: 'Before-after skin retouch and color pop.', thumb: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop' },
]

export default function Videos(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-28 pb-16 relative">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-pink-400/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold">Video Samples</h1>
          <p className="mt-2 text-white/70 max-w-2xl">Preview styles and pick your favorite. We’ll tailor it to your content.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {samples.map((s) => (
              <motion.div key={s.id} whileHover={{ y: -6 }} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img src={s.thumb} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white text-black font-bold grid place-items-center shadow-lg/50">▶</button>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-white/70 mt-1">{s.desc}</p>
                  <a href={`/booking?style=${s.id}`} className="inline-block mt-4 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-black font-medium px-4 py-2 rounded-full">Use this style</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
