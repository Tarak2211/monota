export default function PromoBanner() {
  const banners = [
    {
      img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80',
      tag: 'SPECIAL OFFER',
      title: 'Tool Sets',
      sub: 'Up to 40% Off',
      cta: 'SHOP NOW',
      overlay: 'linear-gradient(to right, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.2) 100%)',
      accent: '#cc0000',
    },
    {
      img: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80',
      tag: 'NEW ARRIVALS',
      title: 'LED Lighting',
      sub: 'Best Selection',
      cta: 'VIEW ALL',
      overlay: 'linear-gradient(to right, rgba(0,30,80,0.85) 0%, rgba(0,30,80,0.2) 100%)',
      accent: '#0099ff',
    },
  ];

  return (
    <section style={{ padding: '20px 0', background: '#fff' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {banners.map((b, i) => (
          <div key={i} style={{
            position: 'relative', height: 160, borderRadius: 10, overflow: 'hidden',
            backgroundImage: `url(${b.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
            cursor: 'pointer'
          }}>
            <div style={{ position: 'absolute', inset: 0, background: b.overlay }} />
            <div style={{ position: 'relative', zIndex: 2, padding: '22px 28px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: 10, color: b.accent, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>
                {b.tag}
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 4 }}>
                {b.title}<br />{b.sub}
              </div>
              <a href="#" style={{
                fontSize: 11, color: '#fff', fontWeight: 700, letterSpacing: 1,
                borderBottom: `2px solid ${b.accent}`, paddingBottom: 1,
                display: 'inline-block', marginTop: 6
              }}>
                {b.cta} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
