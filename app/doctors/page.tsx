'use client'

import Link from 'next/link'
import DoctorSearch from '@/components/DoctorSearch'

export default function DoctorsPage() {
  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Doctors</span>
          </nav>
          <h1>Our Doctors</h1>
          <p>Meet our qualified specialists dedicated to your health.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <DoctorSearch />
        </div>
      </section>
    </main>
  )
}
