import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LABELS = ['Initializing', 'Loading assets', 'Configuring', 'Almost ready']
const PCTS   = [0, 18, 45, 72, 88, 96]

export default function SiteLoader({ isVisible = true }) {
  const Motion = motion
  const canvasRef = useRef(null)
  const labelRef  = useRef(null)
  const pctRef    = useRef(null)

  /* ── Particle field ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.4 + 0.05,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(207,254,37,${p.o})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(207,254,37,${0.06 * (1 - d / 90)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  /* ── Progress counter ── */
  useEffect(() => {
    let step = 0
    const iv = setInterval(() => {
      step++
      if (labelRef.current && step < LABELS.length)
        labelRef.current.textContent = LABELS[step]
      if (pctRef.current && step < PCTS.length)
        pctRef.current.textContent   = `${PCTS[step]}%`
      if (step >= PCTS.length - 1) clearInterval(iv)
    }, 560)
    return () => clearInterval(iv)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999] overflow-hidden bg-[#080A07]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {/* ── Google Fonts ── */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@300;400&display=swap"
          />

          {/* ── Grain overlay ── */}
          <div
            className="pointer-events-none absolute inset-0 z-[2] opacity-60"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            }}
          />

          {/* ── Scan line ── */}
          <Motion.div
            className="pointer-events-none absolute left-0 right-0 z-[3] h-px"
            style={{
              background: 'linear-gradient(90deg,transparent 0%,rgba(207,254,37,0.15) 40%,rgba(207,254,37,0.15) 60%,transparent 100%)',
            }}
            animate={{ top: ['10%', '90%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, times: [0, 0.05, 0.95, 1] }}
          />

          {/* ── Ambient blobs ── */}
          <Motion.div
            className="pointer-events-none absolute -left-20 -top-20 h-[340px] w-[340px] rounded-full"
            style={{ background: 'radial-gradient(circle,rgba(207,254,37,0.13) 0%,transparent 70%)', filter: 'blur(80px)' }}
            animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          />
          <Motion.div
            className="pointer-events-none absolute -bottom-16 -right-16 h-[280px] w-[280px] rounded-full"
            style={{ background: 'radial-gradient(circle,rgba(140,203,25,0.10) 0%,transparent 70%)', filter: 'blur(80px)' }}
            animate={{ x: [0, -20, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
          />

          {/* ── Particle canvas ── */}
          <canvas ref={canvasRef} className="absolute inset-0 z-[1] h-full w-full" />

          {/* ── Corner accents ── */}
          {[
            'top-[18px] left-[18px] border-t border-l',
            'top-[18px] right-[18px] border-t border-r',
            'bottom-[18px] left-[18px] border-b border-l',
            'bottom-[18px] right-[18px] border-b border-r',
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute z-[5] h-5 w-5 border-[#CFFE25]/35 ${cls}`}
            />
          ))}

          {/* ── Center content ── */}
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">

            {/* Orbital system */}
            <div className="relative mb-10 flex h-40 w-40 items-center justify-center">

              {/* Outer slow ring + dot */}
              <Motion.div
                className="absolute inset-0 rounded-full border border-[#CFFE25]/12"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
              >
                <div className="absolute left-1/2 -top-[3px] h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#CFFE25]/50 shadow-[0_0_8px_2px_rgba(207,254,37,0.4)]" />
              </Motion.div>

              {/* Mid ring + bright dot */}
              <Motion.div
                className="absolute inset-[18px] rounded-full border-2 border-[#CFFE25]/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 3.5, ease: 'linear', repeat: Infinity }}
              >
                <div className="absolute top-1/2 -right-[4px] h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[#CFFE25] shadow-[0_0_12px_3px_rgba(207,254,37,0.7)]" />
              </Motion.div>

              {/* Inner dashed ring */}
              <Motion.div
                className="absolute inset-[36px] rounded-full border border-dashed border-[#CFFE25]/18"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
              />

              {/* Core diamond */}
              <Motion.div
                className="h-7 w-7 bg-[#CFFE25]"
                style={{ transform: 'rotate(45deg)' }}
                animate={{
                  scale: [1, 0.88, 1],
                  boxShadow: [
                    '0 0 20px 4px rgba(207,254,37,0.35),0 0 40px 8px rgba(207,254,37,0.15)',
                    '0 0 30px 8px rgba(207,254,37,0.5),0 0 60px 16px rgba(207,254,37,0.2)',
                    '0 0 20px 4px rgba(207,254,37,0.35),0 0 40px 8px rgba(207,254,37,0.15)',
                  ],
                }}
                transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
              />
            </div>

            {/* Wordmark */}
            <div className="overflow-hidden mb-1">
              <Motion.div
                className="flex items-baseline gap-0"
                initial={{ y: 48, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <span
                  className="text-[36px] font-extrabold leading-none tracking-[-1px] text-[#CFFE25]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  WEB
                </span>
                <span
                  className="text-[36px] font-extrabold leading-none tracking-[-1px] text-white/90"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  &thinsp;LAUNCH
                </span>
              </Motion.div>
            </div>

            {/* Tagline */}
            <Motion.p
              className="mb-10 text-[11px] uppercase tracking-[3.5px] text-[#CFFE25]/55"
              style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              Premium Digital Experiences
            </Motion.p>

            {/* Progress bar */}
            <Motion.div
              className="flex w-60 flex-col gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="relative h-px w-full overflow-visible bg-white/7">
                <Motion.div
                  className="h-full origin-left"
                  style={{
                    background: 'linear-gradient(90deg,rgba(207,254,37,0.4),#CFFE25)',
                    position: 'relative',
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: ['0%','18%','45%','72%','88%','96%'] }}
                  transition={{ duration: 2.8, ease: [0.4,0,0.2,1], delay: 0.8, times:[0,0.15,0.4,0.7,0.88,1] }}
                >
                  {/* Glowing tip */}
                  <div className="absolute -right-px -top-[3px] h-[7px] w-[7px] rounded-full bg-[#CFFE25] shadow-[0_0_10px_3px_rgba(207,254,37,0.7)]" />
                </Motion.div>
              </div>

              <div className="flex items-center justify-between">
                <span
                  ref={labelRef}
                  className="text-[10px] uppercase tracking-[1.5px] text-white/30"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Initializing
                </span>
                <span
                  ref={pctRef}
                  className="text-[11px] tracking-[1px] text-[#CFFE25]/70"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  0%
                </span>
              </div>
            </Motion.div>

            {/* Pulsing dots */}
            <Motion.div
              className="mt-1 flex items-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[0, 0.2, 0.4].map((delay, i) => (
                <Motion.div
                  key={i}
                  className="h-1 w-1 rounded-full bg-[#CFFE25]"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.6, 1] }}
                  transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, delay: 1.2 + delay }}
                />
              ))}
            </Motion.div>

          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  )
}