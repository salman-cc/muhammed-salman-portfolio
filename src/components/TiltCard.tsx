import { useRef, type ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const onMove = (event: React.PointerEvent) => {
    if (reduced || event.pointerType !== 'mouse') return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * -3.5
    const ry = (px - 0.5) * 3.5
    el.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg)`
    el.style.setProperty('--glare-x', `${px * 100}%`)
    el.style.setProperty('--glare-y', `${py * 100}%`)
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div className={`tilt-card ${className}`} ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="tilt-glare" aria-hidden="true" />
      {children}
    </div>
  )
}
