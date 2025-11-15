import Navbar from '../Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Clapperboard, Camera, Heart, Briefcase, Wand2 } from 'lucide-react'

const services = [
  { title: 'Cinematic Reels', icon: Clapperboard, desc: 'High-impact edits with transitions, VFX, and sound design.' },
  { title: 'Music Videos', icon: Camera, desc: 'Rhythm-synced cuts, color grading, and performance highlights.' },
  { title: 'Wedding Edits', icon: Heart, desc: 'Elegant storytelling, soft grading, and emotional pacing.' },
  { title: 'Business Promos', icon: Briefcase, desc: 'Sharp branding cuts, motion graphics, and CTA-focused edits.' },
  { title: 'Photo Retouching', icon: Wand2, desc: 'Skin cleanup, color balance, and creative retouching.' },
]

const tiers = [
  { name: 'Basic', price: '$99', features: ['1-2 minute edit', 'Basic color correction', 'Royalty-free music', '1 revision'] },
  { name: 'Premium', price: '$299', features: ['Up to 5 minutes', 'Advanced grading', 'Motion graphics', '3 revisions'] },
  { name: 'Pro', price: '$599', features: ['Full project', 'Cinematic sound design', 'Custom graphics', 'Priority delivery'] },
]

export default function Services(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-28 pb-16 relative">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-fuchsia-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold">Services</h1>
          <p className="mt-2 text-white/70 max-w-2xl">From reels to full productions, choose the style that fits your vision.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, icon: Icon, desc }) => (
              <motion.div key={title} whileHover={{ y: -6 }} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition" />
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-white/70">{desc}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="mt-16 text-3xl font-semibold">Pricing</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, idx) => (
              <motion.div key={tier.name} whileHover={{ y: -8 }} className={`rounded-2xl p-6 border ${idx===1 ? 'bg-gradient-to-br from-fuchsia-500/10 via-indigo-500/10 to-cyan-400/10 border-white/20' : 'bg-white/5 border-white/10'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <div className="text-2xl font-bold">{tier.price}</div>
                </div>
                <ul className="mt-4 space-y-2 text-white/80">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-black font-medium py-2 rounded-full">Choose {tier.name}</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
