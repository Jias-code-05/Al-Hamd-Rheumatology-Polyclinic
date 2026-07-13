'use client'

import { useState } from 'react'
import { SERVICE_CATEGORIES, Service } from '@/lib/data'

const ALL_TAB = 'all'
const TOTAL = SERVICE_CATEGORIES.reduce((s, c) => s + c.services.length, 0)

export default function ServiceTabs() {
  const [active, setActive] = useState(ALL_TAB)

  const visibleServices: Service[] = active === ALL_TAB
    ? SERVICE_CATEGORIES.flatMap(c => c.services)
    : (SERVICE_CATEGORIES.find(c => c.id === active)?.services ?? [])

  return (
    <div>
      <div className="service-tabs">
        <button
          className={`tab-btn${active === ALL_TAB ? ' active' : ''}`}
          onClick={() => setActive(ALL_TAB)}
        >
          All Services
          <span style={{ fontSize: '.75rem', opacity: .6, marginLeft: 4 }}>({TOTAL})</span>
        </button>
        {SERVICE_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`tab-btn${active === cat.id ? ' active' : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.name}
            <span style={{ fontSize: '.75rem', opacity: .6, marginLeft: 4 }}>({cat.services.length})</span>
          </button>
        ))}
      </div>

      <div className="tab-panel active">
        {visibleServices.map(svc => (
          <div key={svc.id} className="service-card">
            <div className="service-icon">
              <i className={`fa-solid ${svc.icon}`} />
            </div>
            <div className="service-name">{svc.name}</div>
            <p className="service-desc">{svc.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center" style={{ marginTop: 48, padding: 36, background: 'var(--bg-alt)', borderRadius: 'var(--radius-lg)' }}>
        <h3 style={{ marginBottom: 8 }}>Ready to Get Started?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
          Contact us via WhatsApp to book your appointment.
        </p>
        <a
          href={`https://wa.me/923272937991?text=${encodeURIComponent('Hello, I would like to request an appointment.')}`}
          target="_blank"
          rel="noopener"
          className="btn btn-whatsapp btn-lg"
        >
          <i className="fa-brands fa-whatsapp" />
          Request on WhatsApp
        </a>
      </div>
    </div>
  )
}
