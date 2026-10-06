import { useNavigate } from 'react-router-dom';
import { categories } from '../data/products';

const RED = '#cc0000';

export default function ShopByCategories() {
  const navigate = useNavigate();

  return (
    <section style={{ padding: '50px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 11, color: RED, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>
            TOP FEATURED COLLECTIONS
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: '#111' }}>SHOP BY CATEGORIES</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
          {categories.map((cat, i) => (
            <div key={i} style={{
              display: 'flex', gap: 16, border: '1px solid #ebebeb',
              borderRadius: 10, padding: 16, background: '#fff', transition: 'all 0.3s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ffcccc'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#ebebeb'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Image */}
              <div style={{ width: 90, height: 90, borderRadius: 8, overflow: 'hidden', flexShrink: 0, background: '#f5f5f5', cursor: 'pointer' }}
                onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}>
                <img src={cat.image} alt={cat.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  loading="lazy" />
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <h3 onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
                  style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 10, textTransform: 'uppercase', cursor: 'pointer' }}
                  onMouseEnter={e => e.target.style.color = RED}
                  onMouseLeave={e => e.target.style.color = '#111'}>
                  {cat.name}
                </h3>
                <ul>
                  {cat.subcategories.map((sub, si) => (
                    <li key={si} style={{ marginBottom: 3 }}>
                      <a href="#" onClick={e => { e.preventDefault(); navigate(`/category/${encodeURIComponent(cat.name)}/${encodeURIComponent(sub)}`); }}
                        style={{ fontSize: 12, color: '#666', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = RED}
                        onMouseLeave={e => e.target.style.color = '#666'}>
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="#" onClick={e => { e.preventDefault(); navigate(`/category/${encodeURIComponent(cat.name)}`); }}
                  style={{ fontSize: 11, color: RED, fontWeight: 700, marginTop: 6, display: 'inline-block' }}>
                  View More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
