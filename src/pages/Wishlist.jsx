import Navbar from '../Navbar'
import Footer from '../components/Footer'

export default function Wishlist(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold">Wishlist</h1>
        <p className="mt-2 text-white/70">Save styles or services you want to try later.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">No items yet.</div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
