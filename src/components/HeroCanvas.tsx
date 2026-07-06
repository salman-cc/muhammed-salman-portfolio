import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || typeof IntersectionObserver === 'undefined') return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let raf = 0
    let t = 0
    let pointerX = 0.5
    let running = true

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      if (!running) return
      t += 0.0035
      ctx.clearRect(0, 0, width, height)

      const lines = 26
      for (let l = 0; l < lines; l++) {
        const depth = l / lines
        ctx.beginPath()
        const baseY = height * 0.5 + (depth - 0.5) * height * 0.72
        const amp = 26 + depth * 60
        const drift = (pointerX - 0.5) * 60 * (1 - depth)

        for (let x = 0; x <= width; x += 8) {
          const nx = x / width
          const wave =
            Math.sin(nx * 4.4 + t * 5 + depth * 5.5) * amp * Math.sin(nx * Math.PI) +
            Math.sin(nx * 9.5 - t * 3 + depth * 2) * amp * 0.28
          const y = baseY + wave + drift
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        const violet = `rgba(155, 140, 255, ${0.028 + depth * 0.05})`
        const cyan = `rgba(102, 217, 208, ${0.02 + depth * 0.035})`
        ctx.strokeStyle = l % 3 === 0 ? cyan : violet
        ctx.lineWidth = 1
        ctx.stroke()
      }

      raf = requestAnimationFrame(draw)
    }

    const onPointer = (event: PointerEvent) => {
      pointerX = event.clientX / window.innerWidth
    }

    const visibility = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting
        if (running) {
          cancelAnimationFrame(raf)
          raf = requestAnimationFrame(draw)
        }
      },
      { threshold: 0 },
    )

    resize()
    visibility.observe(canvas)
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    raf = requestAnimationFrame(draw)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      visibility.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [reduced])

  if (reduced) return null
  return <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />
}
