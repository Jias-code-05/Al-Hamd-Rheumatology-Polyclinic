'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HEALTH_POSTS } from '@/lib/data'
import { BASE_PATH } from '@/lib/basePath'

export default function HealthInfoPage() {
  const [query, setQuery] = useState('')

  const filtered = HEALTH_POSTS.filter(p => {
    if (!query.trim()) return true
    const q = query.toLowerCase()
    return (
      p.title.toLowerCase().includes(q) ||
      p.tags.some(tag => tag.toLowerCase().includes(q))
    )
  })

  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>News</span>
          </nav>
          <h1>Health Information</h1>
          <p>Stay informed with the latest health topics and medical advice.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Search */}
          <div style={{ marginBottom: 36 }}>
            <div className="search-bar">
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles..."
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
              <i className="fa-solid fa-newspaper" style={{ fontSize: '3rem', color: 'var(--gray)', marginBottom: 16, display: 'block' }} />
              <h3>No articles found</h3>
            </div>
          ) : (
            <div className="posts-grid">
              {filtered.map(post => (
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
                      {post.excerpt.slice(0, 130)}…
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
          )}
        </div>
      </section>
    </main>
  )
}
