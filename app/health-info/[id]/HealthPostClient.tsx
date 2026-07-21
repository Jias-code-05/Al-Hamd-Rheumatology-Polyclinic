'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HEALTH_POSTS, CLINIC } from '@/lib/data'
import { BASE_PATH } from '@/lib/basePath'

export default function HealthPostClient({ id }: { id: string }) {
  const post = HEALTH_POSTS.find(p => p.id === id)
  const related = HEALTH_POSTS.filter(p => p.id !== id).slice(0, 3)

  if (!post) return notFound()

  const waLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent('Hello, I would like to request an appointment.')}`

  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/health-info">News</Link>
            <span className="sep">/</span>
            <span style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {post.title}
            </span>
          </nav>
          <div style={{ marginBottom: 12 }}>
            <div className="post-tags" style={{ justifyContent: 'flex-start' }}>
              {post.tags.map((tag, i) => (
                <span key={i} className="post-tag" style={{ background: 'rgba(255,255,255,.15)', color: '#fff' }}>{tag}</span>
              ))}
            </div>
          </div>
          <h1 style={{ maxWidth: '720px' }}>{post.title}</h1>
          <p style={{ color: 'rgba(255,255,255,.65)', display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
            <i className="fa-regular fa-calendar" />
            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            <span style={{ opacity: .4 }}>·</span>
            <span style={{ textTransform: 'capitalize' }}>{post.post_type}</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="post-detail-grid">
            {/* Content */}
            <div className="post-content">
              <div className="post-featured-img">
                <img src={`${BASE_PATH}${post.image}`} alt={post.title} />
              </div>

              <div dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className="post-gallery">
                {post.gallery.map((img, i) => (
                  <img key={i} src={`${BASE_PATH}${img}`} alt={`${post.title} — infographic ${i + 2}`} loading="lazy" />
                ))}
              </div>

              <div style={{
                marginTop: 36, padding: '20px 24px',
                background: 'var(--primary-subtle)', border: '1px solid var(--primary)',
                borderRadius: 'var(--radius-lg)', display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <i className="fa-solid fa-circle-info" style={{ color: 'var(--primary)', fontSize: '1.3rem', flexShrink: 0, marginTop: 2 }} />
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '.88rem' }}>
                  This article is for informational purposes only. Please consult a qualified doctor for medical advice.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="post-sidebar">
              <div className="sidebar-card" style={{ background: 'linear-gradient(135deg,#0C3D1C,#1A6B35)', color: '#fff' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>
                  <i className="fa-brands fa-whatsapp" />
                </div>
                <h4 style={{ color: '#fff', marginBottom: 8 }}>Book Appointment</h4>
                <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '.88rem', marginBottom: 16 }}>
                  Connect with our specialists today.
                </p>
                <a href={waLink} target="_blank" rel="noopener" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fa-brands fa-whatsapp" /> WhatsApp
                </a>
              </div>

              <div className="sidebar-card">
                <h4>Related Articles</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {related.map(r => (
                    <Link
                      key={r.id}
                      href={`/health-info/${r.id}`}
                      style={{
                        display: 'flex', flexDirection: 'column', gap: 4, padding: 12,
                        background: 'var(--bg-alt)', borderRadius: 'var(--radius-md)',
                      }}
                    >
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {r.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="post-tag" style={{ fontSize: '.65rem' }}>{tag}</span>
                        ))}
                      </div>
                      <div style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>
                        {r.title}
                      </div>
                      <div style={{ fontSize: '.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <i className="fa-regular fa-calendar" />
                        {new Date(r.date).toLocaleDateString('en-GB')}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <h4>Our Doctors</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '.88rem', marginBottom: 14 }}>
                  Consult with our experienced specialists for personalised care.
                </p>
                <Link href="/doctors" className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                  Meet Our Doctors <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
