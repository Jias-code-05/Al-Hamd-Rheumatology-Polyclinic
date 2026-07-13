'use client'

import Link from 'next/link'
import { CLINIC } from '@/lib/data'

export default function ContactPage() {
  const waLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent('Hello, I would like to request an appointment.')}`

  const contactRows = [
    {
      icon: 'fa-location-dot',
      iconStyle: {},
      label: 'Address',
      content: (
        <a href={CLINIC.google_maps_url} target="_blank" rel="noopener" className="contact-map-link">
          {CLINIC.address}
          <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '.7rem', marginLeft: 4, opacity: .6 }} />
        </a>
      ),
    },
    {
      icon: 'fa-phone',
      iconStyle: {},
      label: 'Phone',
      content: <a href={`tel:${CLINIC.phone1}`}>{CLINIC.phone1}</a>,
    },
    {
      icon: 'fa-phone',
      iconStyle: {},
      label: 'Phone 2',
      content: <a href={`tel:${CLINIC.phone2}`}>{CLINIC.phone2}</a>,
    },
    {
      icon: 'fa-clock',
      iconStyle: {},
      label: 'Clinic Hours',
      content: (
        <div>
          {CLINIC.timings.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      ),
    },
    {
      icon: 'fa-whatsapp',
      iconStyle: { background: 'rgba(37,211,102,.12)', color: '#1ebe5c' },
      label: 'WhatsApp',
      content: (
        <a href={waLink} target="_blank" rel="noopener">{CLINIC.whatsapp_display}</a>
      ),
      iconClass: 'fa-brands',
    },
    {
      icon: 'fa-facebook-f',
      iconStyle: { background: 'rgba(24,119,242,.1)', color: '#1877F2' },
      label: 'Facebook',
      content: (
        <a href={CLINIC.facebook_url} target="_blank" rel="noopener">@AlHamdClinicKarachi</a>
      ),
      iconClass: 'fa-brands',
    },
    {
      icon: 'fa-instagram',
      iconStyle: { background: 'rgba(193,53,132,.1)', color: '#C13584' },
      label: 'Instagram',
      content: (
        <a href={CLINIC.instagram_url} target="_blank" rel="noopener">@alhamdclinic</a>
      ),
      iconClass: 'fa-brands',
    },
  ]

  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Contact</span>
          </nav>
          <h1>Contact Us</h1>
          <p>We're here to help. Reach out any time.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Info Card */}
            <div>
              <div className="contact-info-card">
                {contactRows.map((row, i) => (
                  <div key={i} className="contact-info-row" style={i === contactRows.length - 1 ? { borderBottom: 'none' } : {}}>
                    <div className="contact-info-icon" style={row.iconStyle}>
                      <i className={`${row.iconClass || 'fa-solid'} ${row.icon}`} />
                    </div>
                    <div className="contact-info-body">
                      <div className="contact-info-label">{row.label}</div>
                      <div className="contact-info-val">{row.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: WA CTA + Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="contact-wa-cta">
                <div className="contact-wa-icon">
                  <i className="fa-brands fa-whatsapp" />
                </div>
                <h3>Book via WhatsApp</h3>
                <p>
                  Message us now for a quick appointment. Our team will confirm promptly.
                </p>
                <a href={waLink} target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fa-brands fa-whatsapp" /> Request Appointment
                </a>
                <div className="contact-wa-note">
                  <i className="fa-solid fa-clock" />
                  We typically respond within a few hours
                </div>
              </div>

              <div className="contact-map-card">
                <h4>
                  <i className="fa-solid fa-location-dot" />
                  Our Location
                </h4>
                <a
                  href={CLINIC.google_maps_url}
                  target="_blank"
                  rel="noopener"
                  className="contact-map-preview"
                  aria-label="Open in Google Maps"
                >
                  <div className="contact-map-preview-inner">
                    <i className="fa-solid fa-map-location-dot" />
                    <div>
                      <div style={{ fontWeight: 600 }}>Open in Google Maps</div>
                      <div style={{ fontSize: '.8rem', opacity: .7, fontWeight: 400 }}>
                        {CLINIC.address}
                      </div>
                    </div>
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </div>
                </a>
              </div>

              {/* Quick Call */}
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)', padding: 24,
              }}>
                <h4 style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className="fa-solid fa-phone" style={{ color: 'var(--primary)' }} />
                  Call Directly
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href={`tel:${CLINIC.phone1}`} className="btn btn-outline" style={{ justifyContent: 'center' }}>
                    <i className="fa-solid fa-phone" /> {CLINIC.phone1}
                  </a>
                  <a href={`tel:${CLINIC.phone2}`} className="btn btn-ghost" style={{ justifyContent: 'center' }}>
                    <i className="fa-solid fa-phone" /> {CLINIC.phone2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
