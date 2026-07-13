'use client'

import { useEffect, useState } from 'react'
import { CLINIC } from '@/lib/data'

export default function FloatingCTA() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent('Hello, I would like to request an appointment.')}`

  return (
    <>
      <div className="float-cta" aria-label="Quick contact">
        <a href={waLink} target="_blank" rel="noopener" className="float-btn wa" aria-label="WhatsApp us">
          <i className="fa-brands fa-whatsapp" />
          <span className="float-tooltip">Book Appointment</span>
        </a>
        <a href={`tel:${CLINIC.phone1}`} className="float-btn call" aria-label="Call us">
          <i className="fa-solid fa-phone" />
          <span className="float-tooltip">Call Us</span>
        </a>
      </div>

      <button
        className={`back-to-top${showTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-chevron-up" />
      </button>
    </>
  )
}
