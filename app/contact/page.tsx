'use client'

import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { CLINIC } from '@/lib/data'

export default function ContactPage() {
  const waLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent('Hello, I would like to request an appointment.')}`
  const mapEmbedSrc = `https://www.google.com/maps?cid=${CLINIC.map_cid}&output=embed`

  const contactRows: {
    icon: string
    iconClass?: string
    iconStyle: CSSProperties
    label: string
    value: ReactNode
    href?: string
    external?: boolean
  }[] = [
    {
      icon: 'fa-location-dot',
      iconStyle: {},
      label: 'Address',
      value: CLINIC.address,
      href: CLINIC.google_maps_url,
      external: true,
    },
    {
      icon: 'fa-phone',
      iconStyle: {},
      label: 'Landline',
      value: CLINIC.phone1_display,
      href: `tel:${CLINIC.phone1}`,
    },
    {
      icon: 'fa-phone',
      iconStyle: {},
      label: 'Phone',
      value: CLINIC.phone2_display,
      href: `tel:${CLINIC.phone2}`,
    },
    {
      icon: 'fa-clock',
      iconStyle: {},
      label: 'Clinic Hours',
      value: (
        <>
          {CLINIC.timings.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </>
      ),
    },
    {
      icon: 'fa-whatsapp',
      iconClass: 'fa-brands',
      iconStyle: { background: 'rgba(37,211,102,.12)', color: '#1ebe5c' },
      label: 'WhatsApp',
      value: CLINIC.whatsapp_display,
      href: waLink,
      external: true,
    },
    {
      icon: 'fa-facebook-f',
      iconClass: 'fa-brands',
      iconStyle: { background: 'rgba(24,119,242,.1)', color: '#1877F2' },
      label: 'Facebook',
      value: '@AlHamdClinicKarachi',
      href: CLINIC.facebook_url,
      external: true,
    },
    {
      icon: 'fa-instagram',
      iconClass: 'fa-brands',
      iconStyle: { background: 'rgba(193,53,132,.1)', color: '#C13584' },
      label: 'Instagram',
      value: '@alhamdclinic',
      href: CLINIC.instagram_url,
      external: true,
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
            <div className="contact-info-col">
              <div className="contact-info-card">
                {contactRows.map((row, i) => {
                  const rowContent = (
                    <>
                      <div className="contact-info-icon" style={row.iconStyle}>
                        <i className={`${row.iconClass || 'fa-solid'} ${row.icon}`} />
                      </div>
                      <div className="contact-info-body">
                        <div className="contact-info-label">{row.label}</div>
                        <div className="contact-info-val">{row.value}</div>
                      </div>
                      {row.href && (
                        <i className={`fa-solid ${row.external ? 'fa-arrow-up-right-from-square' : 'fa-chevron-right'} contact-info-arrow`} />
                      )}
                    </>
                  )
                  return row.href ? (
                    <a
                      key={i}
                      href={row.href}
                      target={row.external ? '_blank' : undefined}
                      rel={row.external ? 'noopener' : undefined}
                      className="contact-info-row"
                    >
                      {rowContent}
                    </a>
                  ) : (
                    <div key={i} className="contact-info-row">
                      {rowContent}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Map + WA CTA + Call */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="contact-card">
                <h4>
                  <i className="fa-solid fa-location-dot" />
                  Our Location
                </h4>
                <div className="contact-map-embed">
                  <iframe
                    src={mapEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    title="Al-Hamd Rheumatology & Polyclinic location"
                  />
                </div>
                <a
                  href={CLINIC.google_maps_url}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 14 }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" /> Open in Google Maps
                </a>
              </div>

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

              {/* Quick Call */}
              <div className="contact-card">
                <h4>
                  <i className="fa-solid fa-phone" />
                  Call Directly
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href={`tel:${CLINIC.phone1}`} className="btn btn-outline" style={{ justifyContent: 'center' }}>
                    <i className="fa-solid fa-phone" /> {CLINIC.phone1_display}
                  </a>
                  <a href={`tel:${CLINIC.phone2}`} className="btn btn-ghost" style={{ justifyContent: 'center' }}>
                    <i className="fa-solid fa-phone" /> {CLINIC.phone2_display}
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
