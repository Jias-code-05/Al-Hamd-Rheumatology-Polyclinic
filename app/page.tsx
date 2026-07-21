'use client'

import Link from 'next/link'
import { CLINIC, DOCTORS, HEALTH_POSTS } from '@/lib/data'
import { BASE_PATH } from '@/lib/basePath'
import TestimonialSlider from '@/components/TestimonialSlider'
import ServicesSlider from '@/components/ServicesSlider'
import DoctorsSlider from '@/components/DoctorsSlider'

export default function HomePage() {
  const waAppt = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent('Hello, I would like to request an appointment.')}`
  const recentPosts = HEALTH_POSTS.slice(0, 3)
  const founder = DOCTORS.find(d => d.id === '1')!
  const waFounder = `https://wa.me/${founder.whatsapp}?text=${encodeURIComponent(`Hello, I would like to book an appointment with ${founder.name}`)}`

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" style={{ backgroundImage: `url(${BASE_PATH}/images/hero-clinic.jpg)` }}>
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-split">

            {/* Left: text */}
            <div className="hero-content">
              <h1>{CLINIC.name}</h1>
              <p className="hero-subtitle">
                From expert rheumatology care to trusted everyday medicine, helping you live a healthier, active, pain-free life.
              </p>
              <div className="hero-actions">
                <a href={waAppt} target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">
                  <i className="fa-brands fa-whatsapp" />
                  Request Appointment
                </a>
                <a href={`tel:${CLINIC.phone1}`} className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,.5)', color: '#fff' }}>
                  <i className="fa-solid fa-phone" />
                  Call Now
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="num">9+</div>
                  <div className="lbl">Specialists</div>
                </div>
                <div className="hero-stat">
                  <div className="num">5000+</div>
                  <div className="lbl">Satisfied Patients</div>
                </div>
                <div className="hero-stat">
                  <div className="num">4.9</div>
                  <div className="lbl">Patient Rating</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ── Quick Bar ────────────────────────────────────────── */}
      <div className="quick-bar">
        <div className="container">
          <div className="quick-bar-inner">
            <div className="quick-item">
              <div className="quick-icon"><i className="fa-solid fa-phone" /></div>
              <div className="quick-text">
                <div className="q-label">Phone</div>
                <div className="q-value"><a href={`tel:${CLINIC.phone1}`}>{CLINIC.phone1_display}</a></div>
              </div>
            </div>
            <div className="quick-item">
              <div className="quick-icon"><i className="fa-brands fa-whatsapp" /></div>
              <div className="quick-text">
                <div className="q-label">WhatsApp</div>
                <div className="q-value">
                  <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener">
                    {CLINIC.whatsapp_display}
                  </a>
                </div>
              </div>
            </div>
            <div className="quick-item">
              <div className="quick-icon"><i className="fa-solid fa-clock" /></div>
              <div className="quick-text">
                <div className="q-label">Clinic Hours</div>
                <div className="q-value" style={{ whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                  {CLINIC.timings.join('\n')}
                </div>
              </div>
            </div>
            <div
              className="quick-item"
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(CLINIC.google_maps_url, '_blank')}
            >
              <div className="quick-icon"><i className="fa-solid fa-location-dot" /></div>
              <div className="quick-text">
                <div className="q-label">Location</div>
                <div className="q-value" style={{ textDecoration: 'underline', textUnderlineOffset: 3, fontSize: '.82rem', lineHeight: 1.4 }}>
                  Ground Floor, Baab e Siddiq, Near Ali Masjid, BMCHS, Karachi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Founder ──────────────────────────────────────────── */}
      <section className="section founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-photo">
              <img src={`${BASE_PATH}${founder.photo}`} alt={`${founder.name} - Founder of ${CLINIC.name}`} />
            </div>
            <div>
              <span className="section-label">Founder &amp; Lead Rheumatologist</span>
              <h2 className="section-title">{founder.name}</h2>
              <p className="founder-credentials">{founder.qualification} · Fellow, American College of Rheumatology</p>
              <p>
                {founder.name} is the founder of {CLINIC.name} and serves as Assistant Professor and Head of the
                Department of Rheumatology at Liaquat National Hospital &amp; Medical College, Karachi, a position
                she has held since 2009. With over {founder.experience.replace(' years', '')} years of experience, she is an Executive
                Member of the Pakistan Society for Rheumatology and a registered member of the Pakistan Medical
                Commission (PMC), specializing in the diagnosis and treatment of Rheumatoid Arthritis, Lupus (SLE),
                Osteoporosis, and other complex rheumatic and autoimmune conditions in both adults and children.
              </p>
              <div className="founder-actions" style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
                <Link href={`/doctors/${founder.id}`} className="btn btn-outline">
                  View Full Profile
                </Link>
                <a href={waFounder} target="_blank" rel="noopener" className="btn btn-whatsapp">
                  <i className="fa-brands fa-whatsapp" /> Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Our Services</span>
            <h2 className="section-title section-title-lg">What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive specialist services and medical care for all your health needs.
            </p>
          </div>
          <ServicesSlider />
          <div className="text-center mt-3">
            <Link href="/services" className="btn btn-outline">
              View All Services <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Doctors ──────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Our Doctors</span>
            <h2 className="section-title section-title-lg">Meet Our Specialists</h2>
            <p className="section-subtitle">
              Our qualified and experienced doctors are committed to your health and well-being.
            </p>
          </div>
          <DoctorsSlider />
          <div className="text-center mt-3">
            <Link href="/doctors" className="btn btn-outline">
              All Doctors <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Health Posts ──────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-label">News</span>
            <h2 className="section-title section-title-lg">Latest News & Health Info</h2>
            <p className="section-subtitle">
              Stay informed with the latest health topics and clinic news.
            </p>
          </div>
          <div className="posts-grid">
            {recentPosts.map(post => (
              <Link key={post.id} href={`/health-info/${post.id}`} className="post-card">
                <div className="post-thumb">
                  <img src={`${BASE_PATH}${post.image}`} alt={post.title} loading="lazy" />
                  <span className="post-type-badge">
                    {post.post_type === 'video' ? 'Video' : 'Article'}
                  </span>
                </div>
                <div className="post-body">
                  <div className="post-tags">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="post-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="post-title">{post.title}</div>
                  <p className="post-excerpt">
                    {post.excerpt.slice(0, 120)}…
                  </p>
                  <div className="post-footer">
                    <span className="post-date">
                      <i className="fa-regular fa-calendar" />
                      {new Date(post.date).toLocaleDateString('en-GB')}
                    </span>
                    <span className="post-read-more">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link href="/health-info" className="btn btn-outline">
              View All News <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="section section-reviews">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <span className="section-label">Patient Reviews</span>
            <h2 className="section-title section-title-lg" style={{ marginTop: 8 }}>
              What Our Patients Say
            </h2>
            <p className="section-subtitle">
              Real experiences from our valued patients.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Appointment</span>
          <h2 className="section-title-lg" style={{ color: '#fff', margin: '12px 0' }}>
            Book Your Appointment Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,.8)', maxWidth: '48ch', margin: '0 auto 36px' }}>
            Message us on WhatsApp and our team will confirm your appointment shortly.
          </p>
          <div className="cta-actions">
            <a href={waAppt} target="_blank" rel="noopener" className="btn btn-white btn-lg">
              <i className="fa-brands fa-whatsapp" />
              Request on WhatsApp
            </a>
            <a href={`tel:${CLINIC.phone1}`} className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,.5)', color: '#fff' }}>
              <i className="fa-solid fa-phone" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
