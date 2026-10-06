import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Expertise from './components/Expertise'
import AIPrompting from './components/AIPrompting'
import Business from './components/Business'
import Mindset from './components/Mindset'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Expertise />
        <AIPrompting />
        <Business />
        <Mindset />
        <Philosophy />
      </main>
      <Contact />
    </div>
  )
}
