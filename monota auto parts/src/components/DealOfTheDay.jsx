import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { dealOfTheDay } from '../data/products';

const RED = '#cc0000';

function useCountdown() {
  const [end] = useState(() => { const d = new Date(); d.setDate(d.getDate() + 2); return d.getTime(); });
  const [rem, setRem] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = end - Date.now();
      if (diff <= 0) { setRem({ d:0,h:0,m:0,s:0 }); return; }
      setRem({ d: Math.floor(diff/86400000), h: Math.floor((diff%86400000)/3600000), m: Math.floor((diff%3600000)/60000), s: Math.floor((diff%60000)/1000) });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [end]);
  return rem;
}

function TimeBox({ val, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        background: '#1a1a1a', color: '#fff', fontWeight: 900,
        fontSize: 30, width: 68, height: 68, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        borderRadius: 8, boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
        letterSpacing: 2
      }}>
        {String(val ?? 0).padStart(2,'0')}
      </div>
      <div style={{ fontSize: 11, color: '#888', marginTop: 5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
        {label}
      </div>
    </div>
  );
}

const StarFilled = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#f5a623"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
);

export default function DealOfTheDay() {
  const { d, h, m, s } = useCountdown();
  const { addToCart } = useCart();
  const p = dealOfTheDay;

  return (
    <section style={{ padding: '50px 0', background: '#f7f7f7' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 11, color: RED, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>
            LIMITED TIME OFFER
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: '#111' }}>DEAL OF THE DAY</h2>
        </div>

        <div style={{
          background: '#fff', borderRadius: 12,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          overflow: 'hidden', maxWidth: 900, margin: '0 auto',
          display: 'flex', flexWrap: 'wrap'
        }}>
          {/* Image side */}
          <div style={{ flex: '0 0 380px', minWidth: 280, position: 'relative', background: '#f0f0f0' }}>
            <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', minHeight: 320, objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', top: 16, left: 16,
              background: RED, color: '#fff', fontWeight: 900,
              fontSize: 18, width: 58, height: 58, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              -{p.discount}%
            </div>
          </div>

          {/* Content side */}
          <div style={{ flex: 1, padding: '36px 40px', minWidth: 260 }}>
            <div style={{ fontSize: 11, color: RED, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
              {p.category}
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 900, color: '#111', marginBottom: 12, lineHeight: 1.3 }}>
              {p.name}
            </h3>

            {/* Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 14 }}>
              {[1,2,3,4,5].map(i => <StarFilled key={i} />)}
              <span style={{ fontSize: 12, color: '#aaa', marginLeft: 4 }}>({p.reviews} reviews)</span>
            </div>

            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, marginBottom: 20 }}>
              Professional grade brake pads for front axle. Premium ceramic compound for quiet, fade-resistant braking. Compatible with most standard vehicles.
            </p>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 32, fontWeight: 900, color: RED }}>${p.price.toFixed(2)}</span>
              <span style={{ fontSize: 18, color: '#ccc', textDecoration: 'line-through' }}>${p.oldPrice?.toFixed(2)}</span>
              <span style={{
                background: '#fff0f0', color: RED, fontSize: 12, fontWeight: 700,
                padding: '3px 10px', borderRadius: 3
              }}>
                SAVE ${(p.oldPrice - p.price).toFixed(2)}
              </span>
            </div>

            {/* Countdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 26 }}>
              <TimeBox val={d} label="Days" />
              <span style={{ fontSize: 28, fontWeight: 900, color: '#ccc', marginBottom: 18 }}>:</span>
              <TimeBox val={h} label="Hours" />
              <span style={{ fontSize: 28, fontWeight: 900, color: '#ccc', marginBottom: 18 }}>:</span>
              <TimeBox val={m} label="Mins" />
              <span style={{ fontSize: 28, fontWeight: 900, color: '#ccc', marginBottom: 18 }}>:</span>
              <TimeBox val={s} label="Secs" />
            </div>

            <button
              onClick={() => addToCart(p)}
              style={{
                background: RED, color: '#fff', border: 'none',
                padding: '12px 28px', fontSize: 13, fontWeight: 800,
                borderRadius: 4, cursor: 'pointer', letterSpacing: 1,
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 16px rgba(204,0,0,0.3)', transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#aa0000'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = RED; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              🛒 ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
