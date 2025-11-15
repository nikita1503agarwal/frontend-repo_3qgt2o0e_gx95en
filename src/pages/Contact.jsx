import Navbar from '../Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact(){
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-28 pb-16 relative">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-pink-400/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold">Contact</h1>
          <p className="mt-2 text-white/70 max-w-2xl">Have a project in mind? Let’s craft something cinematic.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Name</label>
                <input className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-white/30" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Email</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-white/30" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Message</label>
                <textarea rows="5" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-white/30" placeholder="Tell us about your project"></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-black font-medium py-2 rounded-full">Send Message</button>

              <div className="text-sm text-white/70">
                <p>Phone: +1 (555) 123-4567</p>
                <p className="mt-1">Social: @primecut.studio</p>
              </div>
            </form>

            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                <h3 className="text-xl font-semibold">Live Chat</h3>
                <p className="text-white/70 mt-2">Prefer real-time? Open the chat bubble below.</p>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="bg-white/5 p-3 rounded-lg w-fit">Hi! I’d like to edit a wedding video.</div>
                  <div className="bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20 p-3 rounded-lg w-fit ml-auto">Awesome! Share your footage details and references ✨</div>
                </div>
              </div>

              <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 md:static md:mt-6 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-black font-semibold px-4 py-3 shadow-[0_0_30px_rgba(168,85,247,0.5)]">Chat</button>

              {open && (
                <div className="fixed bottom-24 right-6 w-80 bg-black/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="p-3 border-b border-white/10">Prime Cut — Live Chat</div>
                  <div className="p-3 space-y-3 max-h-72 overflow-y-auto">
                    <div className="bg-white/5 p-2 rounded-lg w-fit">Hey there!</div>
                    <div className="bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20 p-2 rounded-lg w-fit ml-auto">How can we help today?</div>
                  </div>
                  <div className="p-2 border-t border-white/10 flex items-center gap-2">
                    <input className="flex-1 bg-black/60 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none" placeholder="Type a message..." />
                    <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-sm">Send</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
