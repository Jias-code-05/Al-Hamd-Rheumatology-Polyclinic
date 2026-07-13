'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { DOCTORS } from '@/lib/data'
import { BASE_PATH } from '@/lib/basePath'

export default function DoctorSearch() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return DOCTORS
    const q = query.toLowerCase()
    return DOCTORS.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.specialization.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div>
      <div style={{ marginBottom: 36 }}>
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by name or specialization..."
          />
          <button className="btn btn-primary" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass" /> Search
          </button>
          {query && (
            <button className="btn btn-ghost" onClick={() => setQuery('')}>
              <i className="fa-solid fa-xmark" />
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center" style={{ padding: '60px 0' }}>
          <i className="fa-solid fa-user-doctor" style={{ fontSize: '3rem', color: 'var(--gray)', marginBottom: 16, display: 'block' }} />
          <h3>No doctors found</h3>
          <p style={{ color: 'var(--text-muted)' }}>Try a different search term</p>
        </div>
      ) : (
        <div className="doctors-grid">
          {filtered.map(doc => (
            <div key={doc.id} className="doctor-card">
              <div className="doctor-photo">
                <img src={`${BASE_PATH}${doc.photo}`} alt={doc.name} loading="lazy" />
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
                    href={`https://wa.me/${doc.whatsapp}?text=${encodeURIComponent(`Hello, I would like to book an appointment with ${doc.name}`)}`}
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
      )}
    </div>
  )
}
