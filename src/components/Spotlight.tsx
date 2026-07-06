import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || typeof window.matchMedia !== 'function') return
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches) return

    const el = ref.current
    if (!el) return

    let raf = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let x = targetX
    let y = targetY

    const animate = () => {
      x += (targetX - x) * 0.12
      y += (targetY - y) * 0.12
      el.style.transform = `translate3d(${x - 260}px, ${y - 260}px, 0)`
      raf = requestAnimationFrame(animate)
    }

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      el.style.opacity = '1'
    }
    const onLeave = () => {
      el.style.opacity = '0'
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [reduced])

  if (reduced) return null
  return <div className="spotlight" ref={ref} aria-hidden="true" />
}
