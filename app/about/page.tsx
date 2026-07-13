'use client'

import Link from 'next/link'
import { CLINIC } from '@/lib/data'

export default function AboutPage() {
  const waLink = `https://wa.me/${CLINIC.whatsapp}`

  const values = [
    {
      icon: 'fa-heart-pulse',
      title: 'Expert Care',
      desc: 'Our doctors are highly qualified specialists committed to excellence.',
    },
    {
      icon: 'fa-shield-halved',
      title: 'Trustworthy',
      desc: 'We prioritize patient privacy, trust, and transparent communication.',
    },
    {
      icon: 'fa-clock',
      title: 'Timely Service',
      desc: 'We respect your time and ensure minimal waiting with prompt service.',
    },
    {
      icon: 'fa-hand-holding-medical',
      title: 'Compassion',
      desc: 'Every patient is treated with care, compassion, and personal attention.',
    },
  ]

  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>About Us</span>
          </nav>
          <h1>About Us</h1>
          <p>Dedicated to delivering compassionate, expert healthcare.</p>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img">
              <div className="about-img-placeholder">
                <i className="fa-solid fa-hospital" />
              </div>
            </div>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">{CLINIC.name}</h2>
              <p>{CLINIC.about}</p>
              <div className="value-card" style={{ marginTop: 20 }}>
                <h4>
                  <i className="fa-solid fa-bullseye" style={{ color: 'var(--primary)', marginRight: 8 }} />
                  Our Mission
                </h4>
                <p>{CLINIC.mission}</p>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                <a href={waLink} target="_blank" rel="noopener" className="btn btn-whatsapp">
                  <i className="fa-brands fa-whatsapp" /> Book Appointment
                </a>
                <Link href="/doctors" className="btn btn-outline">
                  <i className="fa-solid fa-user-doctor" /> Meet Our Doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.icon} className="value-card">
                <h4>
                  <i className={`fa-solid ${v.icon}`} />
                  {v.title}
                </h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-label">By the Numbers</span>
            <h2 className="section-title">Our Track Record</h2>
          </div>
          <div className="stats-grid">
            {[
              { num: '9+', label: 'Specialist Doctors' },
              { num: '1000+', label: 'Happy Patients' },
              { num: '3', label: 'Medical Categories' },
              { num: '4.9★', label: 'Patient Rating' },
            ].map(s => (
              <div key={s.num} className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff' }}>Visit Us Today</h2>
          <p style={{ color: 'rgba(255,255,255,.8)', marginBottom: 36 }}>
            We're here to provide you with the best possible care.
          </p>
          <div className="cta-actions">
            <a href={waLink} target="_blank" className="btn btn-white btn-lg">
              <i className="fa-brands fa-whatsapp" /> Request Appointment
            </a>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,.5)', color: '#fff' }}>
              <i className="fa-solid fa-location-dot" /> Find Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
