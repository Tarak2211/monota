const RED = '#cc0000';

const SvgIcon = ({ path, size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d={path} />
  </svg>
);
const socialPaths = [
  "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z",
  "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
];

const links = {
  SERVICES: ['Contact Us', 'Returns', 'Support', 'Site Map', 'Customer Service'],
  'MY ACCOUNT': ['Brands', 'Gift Certificates', 'Affiliates', 'Specials', 'FAQs'],
  INFORMATION: ['About Us', 'FAQ', 'Warranty & Services', 'Support 24/7', 'Blog'],
};

export default function Footer() {
  return (
    <footer style={{ background: '#111', color: '#999' }}>
      {/* Main */}
      <div className="container" style={{ padding: '48px 16px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32, flexWrap: 'wrap' }}>

          {/* Contact col */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, textDecoration: 'none' }}>
              <div style={{ width: 42, height: 42, background: RED, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontWeight: 900, fontSize: 20 }}>M</span>
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: 20, color: '#fff', lineHeight: 1 }}>MONOTA</div>
                <div style={{ fontSize: 9, color: '#666', letterSpacing: 3 }}>AUTO PARTS</div>
              </div>
            </a>

            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 13, marginBottom: 14, textTransform: 'uppercase', letterSpacing: 1 }}>CONTACT US</h4>
            {[
              { icon: '📍', text: '5611 Wellington Road, Suite 115, Gainesville, VA 20155' },
              { icon: '📞', text: '888 9344 6000 — 888 1234 6789' },
              { icon: '✉️', text: 'contact@monota.com' },
              { icon: '🕐', text: '7 Days a week, 10:00 AM – 6:00 PM' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 9, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                <span style={{ fontSize: 12, lineHeight: 1.5 }}>{item.text}</span>
              </div>
            ))}

            {/* Newsletter */}
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 12, color: '#fff', fontWeight: 700, marginBottom: 8 }}>SUBSCRIBE TO NEWSLETTER</div>
              <div style={{ display: 'flex' }}>
                <input type="email" placeholder="Your email address..."
                  style={{
                    flex: 1, padding: '9px 12px', background: '#1e1e1e', border: '1px solid #333',
                    borderRight: 'none', color: '#ddd', fontSize: 12, outline: 'none',
                    borderRadius: '4px 0 0 4px'
                  }}
                />
                <button style={{
                  background: RED, color: '#fff', border: 'none',
                  padding: '0 16px', fontSize: 12, fontWeight: 700,
                  cursor: 'pointer', borderRadius: '0 4px 4px 0'
                }}>GO</button>
              </div>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 style={{ color: '#fff', fontWeight: 800, fontSize: 13, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>
                {title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map((item, i) => (
                  <li key={i}>
                    <a href="#" style={{ fontSize: 12, color: '#777', transition: 'color 0.2s, padding-left 0.2s' }}
                      onMouseEnter={e => { e.target.style.color = RED; e.target.style.paddingLeft = '6px'; }}
                      onMouseLeave={e => { e.target.style.color = '#777'; e.target.style.paddingLeft = '0'; }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #222' }}>
        <div className="container" style={{
          padding: '14px 16px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 12
        }}>
          <p style={{ fontSize: 12, color: '#555' }}>
            © 2024 <span style={{ color: '#ccc', fontWeight: 700 }}>MONOTA</span> — All Rights Reserved.
          </p>

          <div style={{ display: 'flex', gap: 8 }}>
            {socialPaths.map((p, i) => (
              <a key={i} href="#" style={{
                width: 32, height: 32, borderRadius: '50%', background: '#1e1e1e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#666', transition: 'all 0.2s', textDecoration: 'none'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1e1e1e'; e.currentTarget.style.color = '#666'; }}
              >
                <SvgIcon path={p} />
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 6 }}>
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((p, i) => (
              <span key={i} style={{
                fontSize: 10, fontWeight: 700, background: '#1e1e1e',
                color: '#666', padding: '4px 8px', borderRadius: 3,
                border: '1px solid #2a2a2a'
              }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
