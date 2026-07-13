'use client'

import Link from 'next/link'
import ServiceTabs from '@/components/ServiceTabs'

export default function ServicesPage() {
  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
          </nav>
          <h1>Our Services</h1>
          <p>Comprehensive medical care and specialist services.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceTabs />
        </div>
      </section>
    </main>
  )
}
