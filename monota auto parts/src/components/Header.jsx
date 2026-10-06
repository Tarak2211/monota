import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const RED = '#cc0000';

const SearchIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const CartSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);
const HeartSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const BarsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const ChevR = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
);
const ChevD = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
);
const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
);
const SvgSocial = ({ d }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d={d}/></svg>
);

const socialPaths = [
  "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z",
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
];

/* ─── ALL CATEGORIES sidebar data ─── */
const allCatsData = [
  { name: 'Lighting',           subs: ['Aspering', 'Consectetur', 'Headlights', 'Interior Light', 'LED Tail Lights'] },
  { name: 'Oil Fluids',         subs: ['Engine Oil', 'Brake Fluid', 'Coolant', 'Transmission Fluid'] },
  { name: 'Smart Devices',      subs: ['Bluetooth Devices', 'USB Connect', 'Dash Cam', 'Screen TV', 'Smartwatch'] },
  { name: 'Paintworks',         subs: [] },
  { name: 'Replacement Parts',  subs: ['Brake Parts', 'Exhaust & Emission', 'Lighting & Electrical', 'Outerwear'] },
  { name: 'Tool & Equipments',  subs: ['Tool Boxes', 'Tool Sets', 'Impact Wrenches', 'Compressors', 'Hand Tools'] },
  { name: 'Wheels & Tires',     subs: ['Tires', 'Tires Accessories', 'Tires Chains', 'Wheels', 'Wheels Accessories'] },
  { name: 'Car Parts',          subs: [] },
  { name: 'Gaming Toys',        subs: [] },
  { name: 'Baby Car Seats',     subs: [] },
  { name: 'Car & Motobike Care',subs: [] },
];

/* ─── NAVBAR mega menu definitions ─── */
const navMega = {
  HOME: {
    type: 'grid',
    cols: [
      ['HOME DEFAULT', 'HOME LAYOUT 2', 'HOME LAYOUT 3', 'HOME LAYOUT 4', 'HOME LAYOUT 5'],
      ['HOME LAYOUT 6', 'HOME LAYOUT 7', 'HOME LAYOUT 8', 'HOME LAYOUT 9', 'HOME LAYOUT 10'],
      ['HOME LAYOUT 11', 'HOME LAYOUT 12', 'HOME LAYOUT 13', 'HOME LAYOUT 14', 'HOME PAGE – RTL'],
    ],
  },
  COLLECTIONS: {
    type: 'photos',
    cols: [
      { name: 'Lighting',          img: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=320&q=80', subs: ['Aspering','Consectetur','Headlights','Interior Light','LED Tail Lights'] },
      { name: 'Smart Devices',     img: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=320&q=80',   subs: ['Speaker for car','USB Connect','Bluetooth Devices','Dash Cam','Screen TV'] },
      { name: 'Wheels & Tires',    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=320&q=80',  subs: ['Tires','Tires Accessories','Tires Chains','Wheels','Wheels Accessories'] },
      { name: 'Replacement Parts', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=320&q=80',subs: ['Brake Parts','Exhaust & Emission','Lighting & Electrical','Outerwear','Replacement Filter'] },
    ],
  },
  'NEW ARRIVAL': {
    type: 'cols2',
    cols: [
      { title: 'OIL FLUIDS',        items: ['Deserunt mollit','Reprehenderit','Duis aute','Laudantium','Deserunt mollit'] },
      { title: 'REPLACEMENT PARTS', items: ['Outerwear','Exhaust & Emission','Shock & Suspension','Lighting & Electrical','Esdipiscing'] },
    ],
    banner: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80',
  },
  PAGES: {
    type: 'cols2plain',
    cols: [
      ['About Us', 'Services', 'FAQs', 'Contact us', 'Support 24/7 Page', 'Typography', 'Photo Gallery'],
      ['SiteMap', 'Page 404', 'Coming Soon', 'Testimonials', 'Best Seller', 'New Arrivals', 'Most Rated'],
    ],
  },
  ACCESSORIES: {
    type: 'banner',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80',
    title: 'ACCESORIES INTERIOR',
    sub: 'Wide Selections Of Auto Parts',
    cta: 'EXPLORE NOW',
  },
  SHOP: {
    type: 'cols2plain',
    cols: [
      ['All Products', 'Best Sellers', 'New Arrivals', 'On Sale', 'Featured Products'],
      ['Brands', 'Gift Certificates', 'Affiliates', 'Specials'],
    ],
  },
  BLOG: {
    type: 'cols2plain',
    cols: [
      ['Latest Posts', 'Car Maintenance Tips', 'How-To Guides', 'Product Reviews'],
      ['Industry News', 'Tech Updates', 'DIY Tutorials'],
    ],
  },
};

const searchCats = ['All Categories', 'Lighting', 'Oil Fluids', 'Smart Devices', 'Replacement Parts', 'Tool & Equipments', 'Wheels & Tires', 'Accessories'];

/* ─── Dropdown panel renderer ─── */
function MegaPanel({ item, onNavigate }) {
  const cfg = navMega[item];
  if (!cfg) return null;

  if (cfg.type === 'grid') {
    return (
      <div style={{ display: 'flex', gap: 0, padding: '18px 24px', minWidth: 600 }}>
        {cfg.cols.map((col, ci) => (
          <div key={ci} style={{ flex: 1, paddingRight: ci < cfg.cols.length - 1 ? 20 : 0, borderRight: ci < cfg.cols.length - 1 ? '1px solid #f0f0f0' : 'none', paddingLeft: ci > 0 ? 20 : 0 }}>
            {col.map((lbl, li) => (
              <div key={li} onClick={() => onNavigate('/')}
                style={{ fontSize: 12, color: '#555', padding: '6px 0', cursor: 'pointer', borderBottom: '1px solid #f8f8f8', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.color = RED; e.currentTarget.style.paddingLeft = '6px'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.paddingLeft = '0'; }}>
                {lbl}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (cfg.type === 'photos') {
    return (
      <div style={{ display: 'flex', minWidth: 700 }}>
        {cfg.cols.map((col, ci) => (
          <div key={ci} style={{ flex: 1, borderRight: ci < cfg.cols.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
            <div style={{ height: 120, overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => onNavigate(`/category/${encodeURIComponent(col.name)}`)}>
              <img src={col.img} alt={col.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
            </div>
            <div style={{ padding: '10px 14px 4px' }}>
              <div onClick={() => onNavigate(`/category/${encodeURIComponent(col.name)}`)}
                style={{ fontSize: 12, fontWeight: 800, color: '#111', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: 0.5, marginBottom: 6, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = RED}
                onMouseLeave={e => e.currentTarget.style.color = '#111'}>
                {col.name}
              </div>
              {col.subs.map((s, si) => (
                <div key={si} onClick={() => onNavigate(`/category/${encodeURIComponent(col.name)}/${encodeURIComponent(s)}`)}
                  style={{ fontSize: 12, color: '#666', padding: '3px 0', cursor: 'pointer', transition: 'all 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = RED; e.currentTarget.style.paddingLeft = '5px'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#666'; e.currentTarget.style.paddingLeft = '0'; }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (cfg.type === 'cols2') {
    return (
      <div style={{ display: 'flex', gap: 0, minWidth: 540 }}>
        <div style={{ display: 'flex', flex: 1 }}>
          {cfg.cols.map((col, ci) => (
            <div key={ci} style={{ flex: 1, padding: '18px 20px', borderRight: ci < cfg.cols.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: RED, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12, paddingBottom: 8, borderBottom: '2px solid #f0f0f0' }}>
                {col.title}
              </div>
              {col.items.map((item, ii) => (
                <div key={ii} style={{ fontSize: 12, color: '#555', padding: '5px 0', cursor: 'pointer', transition: 'all 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = RED; e.currentTarget.style.paddingLeft = '5px'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.paddingLeft = '0'; }}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        {cfg.banner && (
          <div style={{ width: 200, flexShrink: 0, overflow: 'hidden' }}>
            <img src={cfg.banner} alt="banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
      </div>
    );
  }

  if (cfg.type === 'cols2plain') {
    return (
      <div style={{ display: 'flex', padding: '18px 24px', gap: 40, minWidth: 440 }}>
        {cfg.cols.map((col, ci) => (
          <div key={ci} style={{ flex: 1 }}>
            {col.map((item, ii) => (
              <div key={ii} style={{ fontSize: 12, color: '#555', padding: '6px 0', cursor: 'pointer', borderBottom: '1px solid #f8f8f8', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.color = RED; e.currentTarget.style.paddingLeft = '5px'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.paddingLeft = '0'; }}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (cfg.type === 'banner') {
    return (
      <div style={{ width: 580 }}>
        <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
          <img src={cfg.img} alt="banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 30px' }}>
            <div style={{ fontSize: 11, color: '#f5a623', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>
              {cfg.sub}
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 14 }}>
              {cfg.title}
            </div>
            <button style={{ background: RED, color: '#fff', border: 'none', padding: '9px 22px', borderRadius: 3, fontSize: 12, fontWeight: 700, cursor: 'pointer', width: 'fit-content', letterSpacing: 1 }}>
              {cfg.cta}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function Header() {
  const { cartCount, cartTotal, cartItems, removeFromCart, wishlist } = useCart();
  const navigate = useNavigate();

  const [cartOpen,    setCartOpen]    = useState(false);
  const [allCatOpen,  setAllCatOpen]  = useState(false);
  const [activeNav,   setActiveNav]   = useState(null); // which nav dropdown is open
  const [expandedCat, setExpandedCat] = useState(null);
  const [search,      setSearch]      = useState('');

  const headerRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setCartOpen(false);
        setAllCatOpen(false);
        setActiveNav(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const goTo = (path) => {
    setAllCatOpen(false);
    setActiveNav(null);
    navigate(path);
  };

  return (
    <header ref={headerRef} style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#fff', boxShadow: '0 2px 14px rgba(0,0,0,0.1)' }}>

      {/* ── TOP BAR ── */}
      <div style={{ background: '#1a1a1a', padding: '7px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            {socialPaths.map((d, i) => (
              <a key={i} href="#" style={{ color: '#555', display: 'flex', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#555'}>
                <SvgSocial d={d} />
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 12, color: '#777' }}>
            <a href="#" style={{ color: '#777', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#777'}>
              🔑 Login / Register
            </a>
            <span style={{ color: '#333' }}>|</span>
            <span>🌐 ENGLISH</span>
            <span style={{ color: '#333' }}>|</span>
            <span>$ US DOLLAR</span>
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '14px 16px' }}>
        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); goTo('/'); }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, textDecoration: 'none' }}>
          <div style={{ width: 46, height: 46, background: RED, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 14px rgba(204,0,0,0.4)' }}>
            <span style={{ color: '#fff', fontWeight: 900, fontSize: 22 }}>M</span>
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 24, color: '#111', lineHeight: 1 }}>MONOTA</div>
            <div style={{ fontSize: 9, color: '#bbb', letterSpacing: 4 }}>AUTO PARTS STORE</div>
          </div>
        </a>

        {/* Search */}
        <div style={{ flex: 1, maxWidth: 580, margin: '0 auto' }}>
          <div style={{ display: 'flex', border: `2px solid ${RED}`, borderRadius: 4, overflow: 'hidden' }}>
            <select style={{ padding: '10px 12px', fontSize: 12, background: '#fafafa', border: 'none', borderRight: '1px solid #eee', outline: 'none', cursor: 'pointer', color: '#555', minWidth: 140 }}>
              {searchCats.map(c => <option key={c}>{c}</option>)}
            </select>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Keyword here..."
              style={{ flex: 1, padding: '10px 14px', border: 'none', outline: 'none', fontSize: 13 }} />
            <button style={{ background: RED, padding: '0 18px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Wishlist + Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <button style={{ position: 'relative', background: 'none', border: '1px solid #e5e5e5', borderRadius: 4, padding: '9px 14px', color: '#666', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = RED; e.currentTarget.style.color = RED; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e5e5'; e.currentTarget.style.color = '#666'; }}>
            <HeartSVG />
            {wishlist.length > 0 && (
              <span style={{ position: 'absolute', top: -7, right: -7, background: RED, color: '#fff', borderRadius: '50%', width: 18, height: 18, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                {wishlist.length}
              </span>
            )}
          </button>

          <div style={{ position: 'relative' }}>
            <button onClick={() => setCartOpen(o => !o)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, background: RED, color: '#fff', padding: '9px 16px', borderRadius: 4, cursor: 'pointer', border: 'none', boxShadow: '0 3px 12px rgba(204,0,0,0.3)', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#aa0000'}
              onMouseLeave={e => e.currentTarget.style.background = RED}>
              <div style={{ position: 'relative' }}>
                <CartSVG />
                <span style={{ position: 'absolute', top: -8, right: -8, background: '#fff', color: RED, borderRadius: '50%', width: 18, height: 18, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>
                  {cartCount}
                </span>
              </div>
              <div>
                <div style={{ fontSize: 10, opacity: 0.85, lineHeight: 1 }}>My Cart</div>
                <div style={{ fontSize: 14, fontWeight: 900, lineHeight: 1.3 }}>${cartTotal.toFixed(2)}</div>
              </div>
            </button>

            {cartOpen && (
              <div style={{ position: 'absolute', right: 0, top: '110%', width: 320, background: '#fff', borderRadius: 8, boxShadow: '0 10px 40px rgba(0,0,0,0.15)', border: '1px solid #eee', zIndex: 9999 }}>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>Shopping Cart ({cartCount})</span>
                  <button onClick={() => setCartOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#aaa' }}><XIcon /></button>
                </div>
                {cartItems.length === 0 ? (
                  <div style={{ padding: 28, textAlign: 'center', color: '#aaa', fontSize: 13 }}>🛒 Your cart is empty</div>
                ) : (
                  <>
                    <div style={{ maxHeight: 260, overflowY: 'auto' }}>
                      {cartItems.map(item => (
                        <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: '1px solid #f5f5f5' }}>
                          <img src={item.image} alt={item.name} style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 6, border: '1px solid #eee' }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: 12, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</div>
                            <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>{item.qty} × <span style={{ color: RED, fontWeight: 700 }}>${item.price.toFixed(2)}</span></div>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ccc' }}
                            onMouseEnter={e => e.currentTarget.style.color = RED}
                            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}>
                            <XIcon />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: '14px 16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, marginBottom: 12, fontSize: 15 }}>
                        <span>Total:</span><span style={{ color: RED }}>${cartTotal.toFixed(2)}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button style={{ flex: 1, border: `2px solid ${RED}`, color: RED, padding: '9px 0', borderRadius: 4, fontSize: 12, fontWeight: 700, cursor: 'pointer', background: '#fff', transition: 'all 0.2s' }}
                          onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = '#fff'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = RED; }}>
                          View Cart
                        </button>
                        <button style={{ flex: 1, background: RED, color: '#fff', padding: '9px 0', borderRadius: 4, fontSize: 12, fontWeight: 700, cursor: 'pointer', border: 'none' }}
                          onMouseEnter={e => e.currentTarget.style.background = '#aa0000'}
                          onMouseLeave={e => e.currentTarget.style.background = RED}>
                          Checkout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{ background: RED, position: 'relative' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'stretch' }}>

          {/* ALL CATEGORIES */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <button onClick={() => { setAllCatOpen(o => !o); setActiveNav(null); }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, background: allCatOpen ? 'rgba(0,0,0,0.28)' : 'rgba(0,0,0,0.18)', color: '#fff', padding: '0 20px', height: 46, width: 215, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 800, letterSpacing: 0.5, transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.28)'}
              onMouseLeave={e => e.currentTarget.style.background = allCatOpen ? 'rgba(0,0,0,0.28)' : 'rgba(0,0,0,0.18)'}>
              <BarsIcon /> ALL CATEGORIES
            </button>

            {allCatOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, width: 255, background: '#fff', zIndex: 9999, boxShadow: '0 8px 32px rgba(0,0,0,0.18)', borderTop: `3px solid ${RED}`, maxHeight: 480, overflowY: 'auto' }}>
                {allCatsData.map((cat, i) => (
                  <div key={i}>
                    <div
                      onClick={() => { if (cat.subs.length > 0) setExpandedCat(expandedCat === i ? null : i); else goTo(`/category/${encodeURIComponent(cat.name)}`); }}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer', background: expandedCat === i ? '#fff5f5' : '#fff', color: expandedCat === i ? RED : '#333', transition: 'all 0.15s' }}
                      onMouseEnter={e => { if (expandedCat !== i) { e.currentTarget.style.background = '#fff8f8'; e.currentTarget.style.color = RED; e.currentTarget.style.paddingLeft = '22px'; }}}
                      onMouseLeave={e => { if (expandedCat !== i) { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#333'; e.currentTarget.style.paddingLeft = '16px'; }}}>
                      <span style={{ fontSize: 13 }}>{cat.name}</span>
                      {cat.subs.length > 0 && <span style={{ display: 'flex', transform: expandedCat === i ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}><ChevR /></span>}
                    </div>
                    {cat.subs.length > 0 && expandedCat === i && (
                      <div style={{ background: '#fafafa' }}>
                        {cat.subs.map((sub, si) => (
                          <div key={si} onClick={() => goTo(`/category/${encodeURIComponent(cat.name)}/${encodeURIComponent(sub)}`)}
                            style={{ padding: '8px 16px 8px 30px', fontSize: 12, color: '#555', cursor: 'pointer', borderBottom: '1px solid #f5f5f5', transition: 'all 0.15s' }}
                            onMouseEnter={e => { e.currentTarget.style.color = RED; e.currentTarget.style.background = '#fff0f0'; e.currentTarget.style.paddingLeft = '36px'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.background = '#fafafa'; e.currentTarget.style.paddingLeft = '30px'; }}>
                            {sub}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* NAV ITEMS */}
          {Object.keys(navMega).map((item) => (
            <div key={item} style={{ position: 'relative' }}>
              <button
                onClick={() => { setActiveNav(activeNav === item ? null : item); setAllCatOpen(false); if (item === 'HOME') goTo('/'); }}
                style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0 14px', height: 46, background: activeNav === item ? 'rgba(0,0,0,0.22)' : 'transparent', border: 'none', color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', letterSpacing: 0.3, whiteSpace: 'nowrap', borderBottom: activeNav === item ? '3px solid rgba(255,255,255,0.85)' : '3px solid transparent', transition: 'all 0.2s' }}
                onMouseEnter={e => { if (activeNav !== item) e.currentTarget.style.background = 'rgba(0,0,0,0.18)'; }}
                onMouseLeave={e => { if (activeNav !== item) e.currentTarget.style.background = 'transparent'; }}>
                {item}
                {navMega[item] && <ChevD />}
              </button>

              {activeNav === item && (
                <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', zIndex: 9999, boxShadow: '0 12px 40px rgba(0,0,0,0.15)', borderTop: `3px solid ${RED}`, minWidth: 200 }}>
                  <MegaPanel item={item} onNavigate={goTo} />
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
