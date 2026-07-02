import { useEffect, useState } from 'react'
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Career from './pages/Career'
import Contact from './pages/Contact'

function App() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 320)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-950/95">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <NavLink to="/" className="text-lg font-semibold text-slate-100 sm:text-2xl">Tshehla Cornelius Koteli</NavLink>
              <p className="text-xs text-slate-400 sm:text-sm"> Business Journalist</p>
            </div>
            <nav className="flex flex-wrap items-center gap-1 text-xs text-slate-300 sm:gap-3 sm:text-sm">
              {['Home', 'About', 'Portfolio', 'Career', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`
                return (
                  <NavLink
                    key={item}
                    to={path}
                    className={({ isActive }) =>
                      `rounded-full px-2 py-1 sm:px-3 sm:py-2 transition ${
                        isActive ? 'bg-slate-800 text-rose-300' : 'hover:bg-slate-800 hover:text-slate-100'
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                )
              })}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-800 bg-slate-950/95 py-6 text-center text-sm text-rose-300">
          © By KK Mokoena 2026
        </footer>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-600 text-slate-100 shadow-2xl shadow-rose-900/30 transition hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </HashRouter>
  )
}

export default App
