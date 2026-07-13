'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DOCTORS } from '@/lib/data'

export default function DoctorDetailClient({ id }: { id: string }) {
  const doc = DOCTORS.find(d => d.id === id)

  if (!doc) return notFound()

  const waLink = `https://wa.me/${doc.whatsapp}?text=${encodeURIComponent(`Hello, I would like to book an appointment with ${doc.name}`)}`

  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/doctors">Doctors</Link>
            <span className="sep">/</span>
            <span>{doc.name}</span>
          </nav>
          <h1>{doc.name}</h1>
          <p>{doc.specialization}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="doctor-detail-grid">
            {/* Photo */}
            <div>
              <div className="doctor-detail-photo">
                <img src={doc.photo} alt={doc.name} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(11,3,2,.85) 0%, transparent 60%)',
                  padding: '20px 16px',
                }}>
                  <span style={{
                    background: 'var(--primary)', color: '#fff',
                    fontSize: '.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: 100,
                  }}>
                    {doc.specialization}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
                <a href={waLink} target="_blank" rel="noopener" className="btn btn-whatsapp" style={{ justifyContent: 'center' }}>
                  <i className="fa-brands fa-whatsapp" /> Book Appointment
                </a>
                <a href={`tel:${doc.phone}`} className="btn btn-outline" style={{ justifyContent: 'center' }}>
                  <i className="fa-solid fa-phone" /> Call Now
                </a>
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 style={{ marginBottom: 4 }}>{doc.name}</h2>
              <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 24 }}>
                {doc.specialization}
              </p>

              <div className="info-grid">
                {[
                  { label: 'Qualification', icon: 'fa-graduation-cap', val: doc.qualification },
                  { label: 'Experience', icon: 'fa-star', val: doc.experience },
                  { label: 'Clinic Days', icon: 'fa-calendar-days', val: doc.clinic_days, iconPrefix: 'fa-regular' },
                  { label: 'Timing', icon: 'fa-clock', val: doc.timing, iconPrefix: 'fa-regular' },
                  { label: 'Appointments', icon: 'fa-notes-medical', val: doc.appointment },
                ].map(item => (
                  <div key={item.label} className="info-item">
                    <div className="info-item-label">{item.label}</div>
                    <div className="info-item-val">
                      <i className={`${item.iconPrefix || 'fa-solid'} ${item.icon}`} />
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 4 }}>
                <h3 style={{ marginBottom: 12, fontSize: '1.1rem' }}>
                  About the Doctor
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
                  {doc.bio}
                </p>
              </div>

              <div style={{
                marginTop: 24, padding: '20px 24px',
                background: 'rgba(37,211,102,.08)', border: '1px solid rgba(37,211,102,.2)',
                borderRadius: 'var(--radius-lg)', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap',
              }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '2rem', color: '#25D366' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>
                    Book via WhatsApp
                  </div>
                  <div style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>
                    Fastest way to confirm your appointment
                  </div>
                </div>
                <a href={waLink} target="_blank" rel="noopener" className="btn btn-whatsapp btn-sm">
                  Chat Now
                </a>
              </div>
            </div>
          </div>

          {/* Other Doctors */}
          <div style={{ marginTop: 64 }}>
            <h3 style={{ marginBottom: 28 }}>Other Specialists</h3>
            <div className="doctors-grid">
              {DOCTORS.filter(d => d.id !== id).slice(0, 4).map(d => (
                <div key={d.id} className="doctor-card">
                  <div className="doctor-photo">
                    <img src={d.photo} alt={d.name} loading="lazy" />
                    <div className="doctor-overlay">
                      <span className="specialty-badge">{d.specialization}</span>
                    </div>
                  </div>
                  <div className="doctor-info">
                    <div className="doctor-name">{d.name}</div>
                    <div className="doctor-schedule">
                      <div className="schedule-row">
                        <i className="fa-regular fa-calendar-days" />
                        {d.clinic_days}
                      </div>
                      <div className="schedule-row">
                        <i className="fa-solid fa-notes-medical" />
                        {d.appointment}
                      </div>
                    </div>
                    <div className="doctor-actions-stack">
                      <Link href={`/doctors/${d.id}`} className="btn btn-outline btn-sm doc-btn-full">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
