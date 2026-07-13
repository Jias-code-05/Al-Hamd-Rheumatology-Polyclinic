'use client'

import { useState, useEffect, useRef } from 'react'
import { SERVICE_CATEGORIES } from '@/lib/data'

const GAP = 20
const PAD_H = 16  // horizontal clearance so hover border/shadow isn't clipped
const PAD_V = 12  // vertical clearance so hover translateY isn't clipped

const allServices = SERVICE_CATEGORIES.flatMap(cat => cat.services)

export default function ServicesSlider() {
  const [idx, setIdx] = useState(0)
  const [pv, setPv] = useState(3)
  const [cardWidth, setCardWidth] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const getPerView = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 900) return 2
    return 3
  }

  useEffect(() => {
    const update = () => {
      const newPv = getPerView()
      setPv(newPv)
      if (sliderRef.current) {
        // offsetWidth includes inner padding (PAD_H * 2), subtract it for actual card space
        const w = (sliderRef.current.offsetWidth - PAD_H * 2 - GAP * (newPv - 1)) / newPv
        setCardWidth(Math.floor(w))
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const max = Math.max(0, allServices.length - pv)

  const go = (i: number) => setIdx(Math.min(Math.max(i, 0), max))
  const next = () => go(idx < max ? idx + 1 : 0)
  const prev = () => go(idx > 0 ? idx - 1 : max)

  useEffect(() => {
    timerRef.current = setInterval(next, 4000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [idx, pv])

  useEffect(() => {
    if (trackRef.current && cardWidth > 0) {
      trackRef.current.style.transform = `translateX(-${idx * (cardWidth + GAP)}px)`
    }
  }, [idx, cardWidth])

  const cardStyle = cardWidth > 0
    ? { flex: `0 0 ${cardWidth}px`, minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }
    : {}

  return (
    <div>
      {/*
        Outer: overflow:hidden provides the horizontal clip.
        Its padding pushes the clip boundary OUT by PAD_H on each side.
        Inner: negative margin expands to fill outer's padding area.
        Inner: matching padding pushes track content back to the correct position.
        Net result: PAD_H pixels of clearance between clip edge and card edge
        so hover borders/shadows are never cut off.
      */}
      <div style={{ overflow: 'hidden', padding: `${PAD_V}px ${PAD_H}px` }}>
        <div
          ref={sliderRef}
          style={{
            margin: `-${PAD_V}px -${PAD_H}px`,
            padding: `${PAD_V}px ${PAD_H}px`,
            overflow: 'visible',
          }}
        >
          <div ref={trackRef} className="testimonials-track">
            {allServices.map(svc => (
              <div key={svc.id} className="service-card" style={cardStyle}>
                <div className="service-icon"><i className={`fa-solid ${svc.icon}`} /></div>
                <div className="service-name">{svc.name}</div>
                <p className="service-desc">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="slider-controls">
        <button className="slider-btn" onClick={prev} aria-label="Previous">
          <i className="fa-solid fa-chevron-left" />
        </button>
        <div className="slider-dots">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === idx ? ' active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
        <button className="slider-btn" onClick={next} aria-label="Next">
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  )
}
