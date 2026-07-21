'use client'

import { useState, useEffect, useRef } from 'react'
import { TESTIMONIALS, Testimonial } from '@/lib/data'

const GAP = 24

function Stars({ rating }: { rating: number }) {
  return (
    <div className="t-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className={`fa-${i < rating ? 'solid' : 'regular'} fa-star`} />
      ))}
    </div>
  )
}

export default function TestimonialSlider() {
  const [idx, setIdx] = useState(0)
  const [pv, setPv] = useState(3)
  const [cardWidth, setCardWidth] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const getPerView = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  useEffect(() => {
    const update = () => {
      const newPv = getPerView()
      setPv(newPv)
      if (sliderRef.current) {
        const w = (sliderRef.current.offsetWidth - GAP * (newPv - 1)) / newPv
        setCardWidth(Math.floor(w))
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const max = Math.max(0, TESTIMONIALS.length - pv)

  const go = (i: number) => setIdx(Math.min(Math.max(i, 0), max))
  const next = () => go(idx < max ? idx + 1 : 0)
  const prev = () => go(idx > 0 ? idx - 1 : max)

  const touchStartX = useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) (delta < 0 ? next : prev)()
    touchStartX.current = null
  }

  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
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
      <div
        className="testimonials-slider"
        ref={sliderRef}
        style={{ touchAction: 'pan-y' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="testimonials-track" ref={trackRef}>
          {TESTIMONIALS.map((t_: Testimonial) => (
            <div key={t_.id} className="testimonial-card" style={cardStyle}>
              <Stars rating={t_.rating} />
              <p className="t-review">
                &ldquo;{t_.review}&rdquo;
              </p>
              <div className="t-patient">
                <div className="t-avatar">{t_.patient_name.charAt(0).toUpperCase()}</div>
                <div>
                  <div className="t-name">{t_.patient_name}</div>
                  <div className="t-role">{t_.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button className="slider-btn slider-prev" onClick={prev} aria-label="Previous">
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
        <button className="slider-btn slider-next" onClick={next} aria-label="Next">
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  )
}
