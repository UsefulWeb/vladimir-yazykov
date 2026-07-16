import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  value: string
}

function parseValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return null
  return { target: Number.parseFloat(match[1]), suffix: match[2] }
}

export function AnimatedNumber({ value }: AnimatedNumberProps) {
  const parsed = parseValue(value)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(parsed ? `0${parsed.suffix}` : value)

  useEffect(() => {
    const current = parseValue(value)
    if (!current || !inView) return
    const controls = animate(0, current.target, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(`${Math.round(v)}${current.suffix}`),
    })
    return () => controls.stop()
  }, [inView, value])

  return <span ref={ref}>{display}</span>
}
