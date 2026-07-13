'use client'

import Link from 'next/link'
import { CLINIC } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  const waLink = `https://wa.me/${CLINIC.whatsapp}`

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="site-logo" style={{ marginBottom: 0 }}>
              <img src="/images/logo.jpg" alt="Al-Hamd Logo" className="site-logo-img" />
              <div className="logo-text">
                <div className="name">{CLINIC.name}</div>
                <div className="tagline">{CLINIC.tagline}</div>
              </div>
            </Link>
            <p className="footer-desc">{CLINIC.about}</p>
            <div className="footer-social">
              <a href={CLINIC.facebook_url} target="_blank" rel="noopener" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href={CLINIC.instagram_url} target="_blank" rel="noopener" aria-label="Instagram">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href={waLink} target="_blank" rel="noopener" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/doctors', label: 'Our Doctors' },
                { href: '/services', label: 'Services' },
                { href: '/health-info', label: 'News' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Timings */}
          <div className="footer-col">
            <h4>Clinic Hours</h4>
            <div className="footer-timings">
              {CLINIC.timings.map((line, i) => (
                <div className="timing-line" key={i}>{line}</div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot" />
              <a href={CLINIC.google_maps_url} target="_blank" rel="noopener">
                {CLINIC.address}
              </a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-phone" />
              <a href={`tel:${CLINIC.phone1}`}>{CLINIC.phone1}</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-brands fa-whatsapp" />
              <a href={waLink} target="_blank" rel="noopener">{CLINIC.whatsapp_display}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {year} {CLINIC.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
