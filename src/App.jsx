import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Videos from './pages/Videos'
import About from './pages/About'
import Contact from './pages/Contact'
import Saved from './pages/Saved'
import Wishlist from './pages/Wishlist'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  )
}

export default App
