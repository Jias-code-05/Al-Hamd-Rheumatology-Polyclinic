'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/lib/ThemeContext'
import { CLINIC } from '@/lib/data'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const waLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent('Hello, I would like to request an appointment.')}`

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href={CLINIC.google_maps_url} target="_blank" rel="noopener" className="top-bar-link">
              <i className="fa-solid fa-location-dot" />
              <span>Find our location</span>
            </a>
            <a href={waLink} target="_blank" rel="noopener" className="top-bar-link">
              <i className="fa-brands fa-whatsapp" />
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="top-bar-right">
            <a href={CLINIC.instagram_url} target="_blank" rel="noopener" className="top-bar-icon" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href={CLINIC.facebook_url} target="_blank" rel="noopener" className="top-bar-icon" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener" className="top-bar-icon" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp" />
            </a>
            <span className="top-bar-divider" />
            <a href={`tel:${CLINIC.phone1}`} className="top-bar-link">
              <i className="fa-solid fa-phone" />
              <span>{CLINIC.phone1}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
        <div className="container header-inner">
          <Link href="/" className="site-logo">
            <img src="/images/logo.jpg" alt="Al-Hamd Logo" className="site-logo-img" />
            <div className="logo-text">
              <div className="name">{CLINIC.name}</div>
              <div className="tagline">{CLINIC.tagline}</div>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/doctors', label: 'Doctors' },
              { href: '/services', label: 'Services' },
              { href: '/health-info', label: 'News' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className={isActive(href) ? 'active' : ''}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
            </button>

            <a href={waLink} target="_blank" rel="noopener" className="btn btn-whatsapp btn-sm">
              <i className="fa-brands fa-whatsapp" />
              WhatsApp
            </a>

            <button
              className={`menu-toggle${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {[
          { href: '/', icon: 'fa-house', label: 'Home' },
          { href: '/about', icon: 'fa-circle-info', label: 'About' },
          { href: '/doctors', icon: 'fa-user-doctor', label: 'Doctors' },
          { href: '/services', icon: 'fa-kit-medical', label: 'Services' },
          { href: '/health-info', icon: 'fa-newspaper', label: 'News' },
          { href: '/contact', icon: 'fa-location-dot', label: 'Contact' },
        ].map(({ href, icon, label }) => (
          <Link key={href} href={href} className={isActive(href) ? 'active' : ''}>
            <i className={`fa-solid ${icon}`} />
            {label}
          </Link>
        ))}
        <div className="mobile-actions">
          <a href={waLink} target="_blank" className="btn btn-whatsapp btn-sm">
            <i className="fa-brands fa-whatsapp" /> WhatsApp
          </a>
          <a href={CLINIC.google_maps_url} target="_blank" className="btn btn-outline btn-sm">
            <i className="fa-solid fa-map-location-dot" /> Map
          </a>
        </div>
      </nav>
    </>
  )
}
