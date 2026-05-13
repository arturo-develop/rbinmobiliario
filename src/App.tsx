import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { Process } from './components/sections/Process'
import { Trust } from './components/sections/Trust'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Process />
        <Features />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
