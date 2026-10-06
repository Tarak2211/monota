import { useState } from 'react';

const RED = '#cc0000';

const brands = [
  { name: 'Bosch',   color: '#E20025', abbr: 'BO' },
  { name: 'Michelin', color: '#003189', abbr: 'MI' },
  { name: 'Castrol', color: '#006F3C', abbr: 'CA' },
  { name: '3M',      color: '#FF0000', abbr: '3M' },
  { name: 'Philips', color: '#0B5ED7', abbr: 'PH' },
  { name: 'NGK',     color: '#D4002A', abbr: 'NG' },
  { name: 'Gates',   color: '#E8761A', abbr: 'GA' },
  { name: 'Denso',   color: '#003087', abbr: 'DE' },
  { name: 'Monroe',  color: '#E8001A', abbr: 'MO' },
  { name: 'ACDelco', color: '#003087', abbr: 'AC' },
  { name: 'Hella',   color: '#CC9900', abbr: 'HE' },
  { name: 'Brembo',  color: '#D30000', abbr: 'BR' },
];

const ChevL = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevR = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
);

export default function ShopByBrands() {
  const [start, setStart] = useState(0);
  const SHOW = 6;

  return (
    <section style={{ padding: '50px 0', background: '#f7f7f7' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 11, color: RED, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>
            TOP QUALITY PARTNERS
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: '#111' }}>SHOP BY BRANDS</h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Prev */}
          <button onClick={() => setStart(s => Math.max(0, s - 1))}
            disabled={start === 0}
            style={{
              flexShrink: 0, width: 40, height: 40, border: '1px solid #ddd',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: start === 0 ? 'not-allowed' : 'pointer', opacity: start === 0 ? 0.3 : 1,
              background: '#fff', color: '#555', transition: 'all 0.2s'
            }}>
            <ChevL />
          </button>

          {/* Brands grid */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: `repeat(${SHOW}, 1fr)`, gap: 12 }}>
            {brands.slice(start, start + SHOW).map((b, i) => (
              <a key={i} href="#" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', padding: '20px 10px',
                background: '#fff', border: '2px solid #e8e8e8',
                borderRadius: 10, textDecoration: 'none',
                transition: 'all 0.25s', cursor: 'pointer'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = RED; e.currentTarget.style.boxShadow = '0 4px 16px rgba(204,0,0,0.15)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: b.color, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: '#fff', fontWeight: 900,
                  fontSize: 14, marginBottom: 8, transition: 'transform 0.2s',
                  boxShadow: `0 3px 12px ${b.color}55`
                }}>
                  {b.abbr}
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#333' }}>{b.name}</span>
              </a>
            ))}
          </div>

          {/* Next */}
          <button onClick={() => setStart(s => Math.min(brands.length - SHOW, s + 1))}
            disabled={start >= brands.length - SHOW}
            style={{
              flexShrink: 0, width: 40, height: 40, border: '1px solid #ddd',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: start >= brands.length - SHOW ? 'not-allowed' : 'pointer',
              opacity: start >= brands.length - SHOW ? 0.3 : 1,
              background: '#fff', color: '#555', transition: 'all 0.2s'
            }}>
            <ChevR />
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 20 }}>
          {Array.from({ length: brands.length - SHOW + 1 }).map((_, i) => (
            <button key={i} onClick={() => setStart(i)} style={{
              width: i === start ? 24 : 8, height: 8, borderRadius: 4,
              background: i === start ? RED : '#ccc', border: 'none',
              cursor: 'pointer', transition: 'all 0.3s', padding: 0
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
