export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© 2025 Prime Cut | Designed for Creators.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
