'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { DOCTORS } from '@/lib/data'

const GAP = 24
const PAD_H = 16  // horizontal clearance so hover border/shadow isn't clipped
const PAD_V = 12  // vertical clearance so hover translateY isn't clipped

export default function DoctorsSlider() {
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
    if (window.innerWidth < 1200) return 3
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

  const max = Math.max(0, DOCTORS.length - pv)

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

  const waBase = 'Hello, I would like to book an appointment with '

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
          <div
            ref={trackRef}
            className="testimonials-track"
          >
            {DOCTORS.map(doc => (
              <div key={doc.id} className="doctor-card" style={cardStyle}>
                <div className="doctor-photo">
                  <img src={doc.photo} alt={doc.name} loading="lazy" />
                  <div className="doctor-overlay">
                    <span className="specialty-badge">{doc.specialization}</span>
                  </div>
                </div>
                <div className="doctor-info">
                  <div className="doctor-name">{doc.name}</div>
                  <div className="doctor-schedule">
                    <div className="schedule-row">
                      <i className="fa-regular fa-calendar-days" />
                      {doc.clinic_days}
                    </div>
                    <div className="schedule-row">
                      <i className="fa-regular fa-clock" />
                      {doc.timing}
                    </div>
                    <div className="schedule-row">
                      <i className="fa-solid fa-notes-medical" />
                      {doc.appointment}
                    </div>
                  </div>
                  <div className="doctor-actions-stack">
                    <Link href={`/doctors/${doc.id}`} className="btn btn-outline btn-sm doc-btn-full">
                      View Profile
                    </Link>
                    <a
                      href={`https://wa.me/${doc.whatsapp}?text=${encodeURIComponent(`${waBase}${doc.name}`)}`}
                      target="_blank"
                      rel="noopener"
                      className="btn btn-whatsapp btn-sm doc-btn-full"
                    >
                      <i className="fa-brands fa-whatsapp" /> Book Appointment
                    </a>
                  </div>
                </div>
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
