import Navbar from '../Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2018', title: 'Humble Beginnings', desc: 'Started as a freelance edit studio with a passion for cinematic cuts.' },
  { year: '2020', title: 'Team Expansion', desc: 'Grew into a tight-knit team of editors, colorists, and sound designers.' },
  { year: '2023', title: 'Signature Look', desc: 'Developed our Neon-Cinematic style known for bold colors and clean motion.' },
  { year: '2025', title: 'Prime Cut', desc: 'Re-launched with futuristic tools and 3D visuals to elevate creators.' },
]

export default function About(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-28 pb-16 relative">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-fuchsia-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold">About Prime Cut</h1>
          <p className="mt-2 text-white/70 max-w-2xl">We shape visuals with precision and emotion—every frame purposeful, every cut intentional.</p>

          <div className="mt-12 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-fuchsia-500 via-indigo-500 to-cyan-400" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <motion.div key={t.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${i % 2 ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'}`}>
                  <div className={`${i % 2 ? 'order-2 md:order-1' : 'order-2'}`}>
                    <h3 className="text-2xl font-bold">{t.title}</h3>
                    <p className="mt-2 text-white/70">{t.desc}</p>
                  </div>
                  <div className={`${i % 2 ? 'order-1 md:order-2' : 'order-1'} justify-self-center`}>
                    <div className="relative">
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 border border-white/20" />
                      <div className="relative bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm">{t.year}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
