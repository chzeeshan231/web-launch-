import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Plus, Star, X } from 'lucide-react'

// --- Assets Import ---
import logo from '../assets/logo.png'
import callIcon from '../assets/call.png'
import mainHero from '../assets/main.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import l1 from '../assets/logo1.png'
import l2 from '../assets/logo2.png'
import l3 from '../assets/logo3.png'
import l4 from '../assets/logo4.png'
import l5 from '../assets/logo5.png'
import l6 from '../assets/logo6.png'

const AgencyLanding = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const [tickBursts, setTickBursts] = useState([])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    {
      name: 'Services',
      dropdown: [
        { label: 'Web Design', href: '#services' },
        { label: 'SEO', href: '#services' },
        { label: 'Marketing', href: '#services' },
      ],
    },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' },
  ]

  const partnerLogos = [l1, l2, l3, l4, l5, l6]
  const Motion = motion

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
        setMobileDropdown(null)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25,
      },
    },
  }

  const revealUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setMobileDropdown(null)
  }

  const triggerTickBurst = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const originX = rect.left + rect.width / 2
    const originY = rect.top + rect.height / 2

    const burstId = Date.now()
    const particles = Array.from({ length: 18 }).map((_, index) => {
      const angle = (Math.PI * 2 * index) / 18
      const radius = 130 + Math.random() * 420

      return {
        id: `${burstId}-${index}`,
        x: originX,
        y: originY,
        tx: Math.cos(angle) * radius,
        ty: Math.sin(angle) * radius,
        size: 18 + Math.random() * 10,
        rotate: -35 + Math.random() * 70,
        duration: 0.95 + Math.random() * 0.6,
        delay: index * 0.015,
      }
    })

    setTickBursts((prev) => [...prev, ...particles])

    setTimeout(() => {
      setTickBursts((prev) => prev.filter((item) => !String(item.id).startsWith(String(burstId))))
    }, 1900)
  }

  return (
    <div id="home" className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden scroll-mt-24">
      {/* Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');
        body { font-family: 'Outfit', sans-serif; }
      `}</style>

      <AnimatePresence>
        {tickBursts.map((item) => (
          <Motion.div
            key={item.id}
            className="fixed pointer-events-none z-[90] flex items-center justify-center rounded-full bg-[#CFFE25] text-[#182100] shadow-[0_10px_24px_rgba(207,254,37,0.45)]"
            style={{
              width: item.size,
              height: item.size,
              left: item.x,
              top: item.y,
            }}
            initial={{ opacity: 0, scale: 0.45, x: 0, y: 0, rotate: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.45, 1.08, 0.8],
              x: item.tx,
              y: item.ty,
              rotate: item.rotate,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: item.duration, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] leading-none font-bold">✓</span>
          </Motion.div>
        ))}
      </AnimatePresence>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="WebLaunch" className="h-10 sm:h-12 lg:h-16 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button
                    type="button"
                    className="text-[15px] font-medium flex items-center gap-1 hover:text-[#9ccb12] transition-colors py-4"
                    onClick={() =>
                      setActiveDropdown((prev) =>
                        prev === link.name ? null : link.name,
                      )
                    }
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="text-[15px] font-medium flex items-center gap-1 hover:text-[#9ccb12] transition-colors py-4"
                  >
                    {link.name}
                  </a>
                )}

                <AnimatePresence>
                  {activeDropdown === link.name && link.dropdown && (
                    <Motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 w-52 bg-white shadow-2xl rounded-2xl py-3 border border-gray-100"
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-5 py-2.5 hover:bg-[#CFFE25]/12 text-sm font-medium text-slate-700 hover:text-slate-900"
                        >
                          {item.label}
                        </a>
                      ))}
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Call Section */}
          <div className="hidden md:flex bg-[#CFFE25] px-5 py-2.5 rounded-full items-center gap-3 shadow-lg shadow-[#CFFE25]/30">
            <img src={callIcon} alt="call" className="w-6 h-6" />
            <div>
              <p className="text-[10px] font-semibold uppercase opacity-60 leading-none">Call Any Time</p>
              <p className="text-sm font-semibold">22 (333) 555 7590</p>
            </div>
          </div>

          {/* Mobile Toggle */}
          <Motion.button
            type="button"
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.94 }}
            className={`lg:hidden p-2.5 rounded-full border transition-all duration-300 ${
              isMobileMenuOpen
                ? 'bg-[#CFFE25] border-[#c7f01e] shadow-lg shadow-[#cffe25]/40'
                : 'bg-white border-gray-200 shadow-md shadow-gray-200/40'
            }`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <Motion.span
                  key="close"
                  initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="block"
                >
                  <X size={24} />
                </Motion.span>
              ) : (
                <Motion.span
                  key="menu"
                  initial={{ rotate: 90, scale: 0.7, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="block"
                >
                  <Menu size={24} />
                </Motion.span>
              )}
            </AnimatePresence>
          </Motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <Motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden bg-white border-t border-gray-100 h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="p-6 sm:p-8 space-y-4">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.name} className="border-b border-gray-100 pb-3">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-left text-2xl font-bold py-2"
                        onClick={() =>
                          setMobileDropdown((prev) =>
                            prev === link.name ? null : link.name,
                          )
                        }
                      >
                        {link.name}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${mobileDropdown === link.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileDropdown === link.name && (
                          <Motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 pb-1 space-y-2">
                              {link.dropdown.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  onClick={closeMobileMenu}
                                  className="block text-base font-medium text-slate-600 px-1"
                                >
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          </Motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block text-2xl font-bold py-2 border-b border-gray-100"
                    >
                      {link.name}
                    </a>
                  ),
                )}

                <div className="mt-6 bg-[#CFFE25] px-5 py-4 rounded-2xl flex items-center gap-3">
                  <img src={callIcon} alt="call" className="w-7 h-7" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase opacity-60 leading-none">Call Any Time</p>
                    <p className="text-sm font-semibold">22 (333) 555 7590</p>
                  </div>
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="pt-28 sm:pt-32 pb-14 sm:pb-20 relative overflow-x-clip">
        <Motion.div
          aria-hidden="true"
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[620px] max-h-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(207,254,37,0.3),rgba(255,255,255,0))] blur-2xl"
          animate={{ scale: [1, 1.04, 1], opacity: [0.6, 0.85, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <Motion.div
          variants={heroContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10"
        >
          {/* Left Content */}
          <Motion.div variants={revealUp} className="min-w-0">
            <Motion.span
              variants={revealUp}
              className="inline-block bg-gray-100 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            >
              Creative Ideas That Inspire Growth
            </Motion.span>
            <Motion.h1
              variants={revealUp}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-[1.05] mb-6 sm:mb-8"
            >
              We Build Websites That Bring You More Clients
            </Motion.h1>
            <Motion.p variants={revealUp} className="text-gray-500 text-base sm:text-lg mb-8 sm:mb-10 max-w-lg">
              High-converting websites, landing pages, and digital solutions designed to grow your business and turn visitors into paying customers.
            </Motion.p>

            <Motion.div variants={revealUp} className="flex w-full sm:w-auto flex-nowrap items-center gap-2 sm:gap-4 mb-12 sm:mb-16">
              <Motion.a
                href="#projects"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none bg-[#CFFE25] px-4 sm:px-8 py-3 sm:py-4 rounded-full text-[14px] sm:text-base whitespace-nowrap font-bold shadow-lg shadow-[#CFFE25]/30"
              >
                View Our Work
              </Motion.a>
              <Motion.a
                href="#about"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none border-2 border-gray-100 px-4 sm:px-8 py-3 sm:py-4 rounded-full text-[14px] sm:text-base whitespace-nowrap font-bold hover:bg-gray-50 transition-colors"
              >
                More About Us
              </Motion.a>
            </Motion.div>

            {/* Founder Section */}
            <Motion.div variants={revealUp} className="flex flex-col items-center text-center gap-4 sm:gap-5 lg:gap-6 lg:items-start lg:text-left">
              <p className="text-xl sm:text-2xl font-bold leading-tight">
                <span className="lg:hidden whitespace-nowrap">Founder & Director</span>
                <span className="hidden lg:block whitespace-nowrap">Founder &</span>
                <span className="hidden lg:block">Director</span>
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5">
                <div className="text-center">
                  <img src={p1} alt="Founder 1" className="w-16 h-16 rounded-lg mb-2 shadow-sm" />
                  <p className="text-[10px] font-bold whitespace-nowrap">Max Subberg</p>
                </div>
                <div className="text-center">
                  <img src={p2} alt="Founder 2" className="w-16 h-16 rounded-lg mb-2 shadow-sm" />
                  <p className="text-[10px] font-bold whitespace-nowrap">Henry McCandless</p>
                </div>
              </div>
            </Motion.div>
          </Motion.div>

          {/* Right Image Content */}
          <Motion.div
            variants={revealUp}
            className="relative mt-6 lg:mt-0 max-w-[560px] mx-auto lg:max-w-none"
          >
            <Motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -1.2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full rounded-tl-[80px] sm:rounded-tl-[120px] rounded-br-[80px] sm:rounded-br-[120px] rounded-tr-[30px] sm:rounded-tr-[40px] rounded-bl-[30px] sm:rounded-bl-[40px] overflow-hidden "
            >
              <img src={mainHero} alt="Hero" className="w-full h-auto object-cover" />
            </Motion.div>

            <Motion.button
              type="button"
              aria-label="Spread ticks"
              whileTap={{ scale: 0.9 }}
              onClick={triggerTickBurst}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 sm:-top-6 right-2 sm:-right-6 z-20 bg-[#69A1E5] p-3 sm:p-4 rounded-full shadow-2xl"
            >
              <div className="text-white bg-[#4383D1] p-2.5 sm:p-3 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23 10a2 2 0 00-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32 0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10a2 2 0 002 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2zM1 21h4V9H1v12z"/></svg>
              </div>
            </Motion.button>

            <Motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute bottom-2 sm:bottom-7 lg:bottom-10 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-3 md:left-2 lg:-left-12 z-20 bg-white p-3 sm:p-6 rounded-2xl shadow-lg shadow-black/10 border border-gray-50 flex flex-col gap-2.5 sm:gap-3 min-w-[180px] sm:min-w-[240px]"
            >
              <div className="flex -space-x-3 sm:-space-x-4">
                {[1, 2, 3].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white shadow-sm" alt="client" />
                ))}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#CFFE25] border-4 border-white flex items-center justify-center shadow-sm">
                  <Plus size={18} />
                </div>
              </div>
              <div className="flex text-yellow-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-wide uppercase">Client Satisfaction Rate</p>
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </main>

      {/* --- PARTNERS LOGOS (Continuous Auto-Scroll) --- */}
      <footer className="relative bg-gray-50/50 py-14 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-16">
            <span className="inline-flex items-center bg-white px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold text-gray-400 shadow-sm border border-gray-100 uppercase tracking-[0.18em] whitespace-nowrap">
              Trusted Partners Worldwide For Success
            </span>
        </div>

        {/* Scrolling Ticker Container */}
        <div className="relative flex">
          {/* Gradient Overlays for smooth fading edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <Motion.div 
            className="flex items-center gap-8 sm:gap-12 lg:gap-20 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: 22,
              repeat: Infinity,
            }}
          >
            {/* First Set of Logos */}
            {partnerLogos.map((logo, i) => (
              <img 
                key={`logo-1-${i}`} 
                src={logo} 
                alt="partner" 
                className="h-5 sm:h-7 lg:h-9 w-auto grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer flex-shrink-0" 
              />
            ))}
            
            {/* Duplicate Set of Logos (required for seamless loop) */}
            {partnerLogos.map((logo, i) => (
              <img 
                key={`logo-2-${i}`} 
                src={logo} 
                alt="partner" 
                className="h-5 sm:h-7 lg:h-9 w-auto grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer flex-shrink-0" 
              />
            ))}
          </Motion.div>
        </div>
      </footer>
    </div>
  )
}

export default AgencyLanding