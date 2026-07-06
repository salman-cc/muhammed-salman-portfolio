import { useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#'

export function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(reduced ? text : '')

  useEffect(() => {
    if (reduced) {
      setDisplay(text)
      return
    }

    let frame = 0
    let raf = 0
    let started = false
    const totalFrames = text.length * 3 + 14

    const tick = () => {
      frame += 1
      const progress = frame / totalFrames
      const settled = Math.floor(progress * text.length * 1.35)
      let output = ''
      for (let i = 0; i < text.length; i++) {
        if (i < settled) {
          output += text[i]
        } else if (i < settled + 4) {
          output += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        }
      }
      setDisplay(output)
      if (settled < text.length + 4) {
        raf = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
      }
    }

    const timeout = window.setTimeout(() => {
      started = true
      raf = requestAnimationFrame(tick)
    }, delay)

    return () => {
      window.clearTimeout(timeout)
      if (started) cancelAnimationFrame(raf)
    }
  }, [text, delay, reduced])

  return (
    <span className="scramble">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display || '\u00A0'}</span>
    </span>
  )
}
