import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Premium Auto Parts',
    subtitle: 'Best Quality Tools & Equipment',
    desc: 'Discover our wide range of professional grade tools, tires, and accessories for every vehicle.',
    cta: 'Shop Now',
    badge: 'NEW ARRIVALS',
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=700&q=80',
    accent: '#cc0000',
  },
  {
    title: 'Top Tire Deals',
    subtitle: 'Up to 30% Off This Week',
    desc: 'All-season and performance tires for every vehicle type and budget. Shop the best brands.',
    cta: 'View Tires',
    badge: 'HOT DEALS',
    bg: 'linear-gradient(135deg, #1c0000 0%, #4a0000 50%, #7a0000 100%)',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    accent: '#ff6600',
  },
  {
    title: 'Smart Car Devices',
    subtitle: 'Upgrade Your Drive',
    desc: 'Bluetooth receivers, dash cams, smartwatches, and more cutting-edge tech for your car.',
    cta: 'Explore',
    badge: 'TRENDING',
    bg: 'linear-gradient(135deg, #001a33 0%, #003366 50%, #004d99 100%)',
    img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=700&q=80',
    accent: '#0099ff',
  },
];

const ChevL = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevR = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
);

export default function HeroSlider() {
  const [cur, setCur] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const go = (n) => { setCur((n + slides.length) % slides.length); setAnimKey(k => k + 1); };

  useEffect(() => {
    const t = setInterval(() => go(cur + 1), 4500);
    return () => clearInterval(t);
  }, [cur]);

  const sl = slides[cur];

  return (
    <div style={{ position: 'relative', height: 460, overflow: 'hidden' }}>
      {/* BG */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${sl.img})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        transition: 'opacity 0.5s',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: sl.bg, opacity: 0.88 }} />

      {/* Content */}
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div key={animKey} className="slide-in" style={{ maxWidth: 540 }}>
          <span style={{
            display: 'inline-block', background: sl.accent,
            color: '#fff', fontSize: 11, fontWeight: 800,
            padding: '4px 14px', borderRadius: 3, letterSpacing: 3,
            marginBottom: 16, textTransform: 'uppercase'
          }}>{sl.badge}</span>

          <h1 style={{
            fontSize: 46, fontWeight: 900, color: '#fff',
            lineHeight: 1.1, marginBottom: 10
          }}>{sl.title}</h1>

          <p style={{ fontSize: 20, color: sl.accent, fontWeight: 600, marginBottom: 12 }}>
            {sl.subtitle}
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 28, lineHeight: 1.7 }}>
            {sl.desc}
          </p>

          <button style={{
            background: sl.accent, color: '#fff', border: 'none',
            padding: '13px 34px', fontSize: 14, fontWeight: 800,
            borderRadius: 4, cursor: 'pointer', letterSpacing: 1,
            textTransform: 'uppercase', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'; }}
          >
            {sl.cta} →
          </button>
        </div>
      </div>

      {/* Arrows */}
      {[
        { side: 'left', dir: -1, comp: <ChevL /> },
        { side: 'right', dir: 1, comp: <ChevR /> },
      ].map(({ side, dir, comp }) => (
        <button key={side} onClick={() => go(cur + dir)} style={{
          position: 'absolute', [side]: 18, top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, background: 'rgba(0,0,0,0.4)', border: 'none',
          width: 44, height: 44, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'background 0.2s'
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#cc0000'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}
        >
          {comp}
        </button>
      ))}

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => go(i)} style={{
            width: i === cur ? 28 : 10, height: 10, borderRadius: 5,
            background: i === cur ? '#cc0000' : 'rgba(255,255,255,0.4)',
            border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0
          }} />
        ))}
      </div>
    </div>
  );
}
