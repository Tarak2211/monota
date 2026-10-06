import { blogPosts } from '../data/products';

const RED = '#cc0000';

const CalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const UserIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

export default function LatestBlogs() {
  return (
    <section style={{ padding: '50px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 11, color: RED, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>
            OUR RECENT POSTS
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: '#111' }}>LATEST BLOGS</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 22 }}>
          {blogPosts.map(post => (
            <article key={post.id} style={{
              border: '1px solid #ebebeb', borderRadius: 10, overflow: 'hidden',
              background: '#fff', transition: 'all 0.3s', cursor: 'pointer'
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = '#ffcccc'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#ebebeb'; }}
            >
              {/* Image */}
              <div style={{ height: 190, overflow: 'hidden', background: '#f5f5f5' }}>
                <img src={post.image} alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div style={{ padding: '18px 20px 20px' }}>
                <div style={{ display: 'flex', gap: 14, marginBottom: 10 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#aaa' }}>
                    <CalIcon /> {post.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#aaa' }}>
                    <UserIcon /> {post.author}
                  </span>
                </div>

                <h3 style={{
                  fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 10,
                  lineHeight: 1.5, transition: 'color 0.2s',
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                }}>
                  {post.title.toUpperCase()}
                </h3>

                <p style={{
                  fontSize: 12, color: '#777', lineHeight: 1.7, marginBottom: 14,
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                }}>
                  {post.excerpt}
                </p>

                <a href="#" style={{
                  fontSize: 12, color: RED, fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: 4, transition: 'gap 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.gap = '8px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '4px'}
                >
                  READ MORE →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
