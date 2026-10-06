import { useParams, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const RED = '#cc0000';

const HomeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const ChevR = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
);

const sortOptions = ['Default', 'Price: Low to High', 'Price: High to Low', 'Name: A-Z', 'Rating'];

export default function ProductsPage() {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();

  // Decode URL params
  const catDecoded = category ? decodeURIComponent(category) : null;
  const subDecoded = subcategory ? decodeURIComponent(subcategory) : null;

  const [activeSubcat, setActiveSubcat] = useState(subDecoded || 'All');
  const [sort, setSort] = useState('Default');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [search, setSearch] = useState('');

  // Get current category data
  const catData = categories.find(c => c.name === catDecoded);
  const subcats = catData ? ['All', ...catData.subcategories] : ['All'];

  // Filter products
  const filtered = useMemo(() => {
    let list = catDecoded
      ? products.filter(p => p.category === catDecoded)
      : [...products];

    if (activeSubcat && activeSubcat !== 'All') {
      list = list.filter(p => p.subcategory === activeSubcat);
    }
    if (search.trim()) {
      list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (priceMin !== '') list = list.filter(p => p.price >= Number(priceMin));
    if (priceMax !== '') list = list.filter(p => p.price <= Number(priceMax));

    switch (sort) {
      case 'Price: Low to High': return [...list].sort((a, b) => a.price - b.price);
      case 'Price: High to Low': return [...list].sort((a, b) => b.price - a.price);
      case 'Name: A-Z':          return [...list].sort((a, b) => a.name.localeCompare(b.name));
      case 'Rating':             return [...list].sort((a, b) => b.rating - a.rating);
      default:                   return list;
    }
  }, [catDecoded, activeSubcat, sort, priceMin, priceMax, search]);

  return (
    <div style={{ background: '#f7f7f7', minHeight: '100vh' }}>

      {/* ── Page Banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        padding: '28px 0', marginBottom: 0
      }}>
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <a href="#" onClick={e => { e.preventDefault(); navigate('/'); }}
              style={{ color: '#aaa', display: 'flex', alignItems: 'center', gap: 4, fontSize: 12 }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
            >
              <HomeIcon /> Home
            </a>
            {catDecoded && <>
              <ChevR />
              <span style={{ color: '#aaa', fontSize: 12 }}>{catDecoded}</span>
            </>}
            {subDecoded && activeSubcat !== 'All' && <>
              <ChevR />
              <span style={{ color: '#fff', fontSize: 12 }}>{activeSubcat}</span>
            </>}
          </div>

          <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 900 }}>
            {activeSubcat !== 'All' ? activeSubcat : catDecoded || 'All Products'}
          </h1>
          <p style={{ color: '#aaa', fontSize: 13, marginTop: 4 }}>
            {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '24px 16px', display: 'flex', gap: 22, alignItems: 'flex-start' }}>

        {/* ── Sidebar ── */}
        <aside style={{ width: 230, flexShrink: 0 }}>

          {/* Categories */}
          {catData && (
            <div style={{ background: '#fff', borderRadius: 8, marginBottom: 16, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ background: RED, color: '#fff', padding: '12px 16px', fontWeight: 800, fontSize: 13, letterSpacing: 0.5 }}>
                SUBCATEGORIES
              </div>
              {subcats.map((sub, i) => (
                <button key={i} onClick={() => setActiveSubcat(sub)} style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '10px 16px', fontSize: 13, cursor: 'pointer',
                  background: activeSubcat === sub ? '#fff5f5' : '#fff',
                  color: activeSubcat === sub ? RED : '#444',
                  fontWeight: activeSubcat === sub ? 700 : 400,
                  borderBottom: '1px solid #f5f5f5', border: 'none',
                  borderLeft: activeSubcat === sub ? `3px solid ${RED}` : '3px solid transparent',
                  transition: 'all 0.2s'
                }}>
                  {sub}
                  <span style={{ float: 'right', fontSize: 11, color: '#bbb' }}>
                    ({sub === 'All'
                      ? products.filter(p => p.category === catDecoded).length
                      : products.filter(p => p.subcategory === sub).length})
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* All Categories */}
          <div style={{ background: '#fff', borderRadius: 8, marginBottom: 16, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ background: '#333', color: '#fff', padding: '12px 16px', fontWeight: 800, fontSize: 13, letterSpacing: 0.5 }}>
              ALL CATEGORIES
            </div>
            {categories.map((cat, i) => (
              <button key={i} onClick={() => {
                setActiveSubcat('All');
                navigate(`/category/${encodeURIComponent(cat.name)}`);
              }} style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '10px 16px', fontSize: 13, cursor: 'pointer',
                background: catDecoded === cat.name ? '#fff5f5' : '#fff',
                color: catDecoded === cat.name ? RED : '#444',
                fontWeight: catDecoded === cat.name ? 700 : 400,
                borderBottom: '1px solid #f5f5f5', border: 'none',
                borderLeft: catDecoded === cat.name ? `3px solid ${RED}` : '3px solid transparent',
                transition: 'all 0.2s'
              }}>
                {cat.name}
                <span style={{ float: 'right', fontSize: 11, color: '#bbb' }}>
                  ({products.filter(p => p.category === cat.name).length})
                </span>
              </button>
            ))}
          </div>

          {/* Price Filter */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ fontWeight: 800, fontSize: 13, color: '#111', marginBottom: 14, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              FILTER BY PRICE
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              <input type="number" placeholder="Min $" value={priceMin} onChange={e => setPriceMin(e.target.value)}
                style={{ flex: 1, padding: '8px 10px', border: '1px solid #e0e0e0', borderRadius: 4, fontSize: 12, outline: 'none', width: '50%' }} />
              <input type="number" placeholder="Max $" value={priceMax} onChange={e => setPriceMax(e.target.value)}
                style={{ flex: 1, padding: '8px 10px', border: '1px solid #e0e0e0', borderRadius: 4, fontSize: 12, outline: 'none', width: '50%' }} />
            </div>
            <button onClick={() => { setPriceMin(''); setPriceMax(''); }}
              style={{ width: '100%', padding: '8px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 4, fontSize: 12, cursor: 'pointer', color: '#555' }}>
              Clear Filter
            </button>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <div style={{ flex: 1 }}>

          {/* Toolbar */}
          <div style={{
            background: '#fff', borderRadius: 8, padding: '12px 16px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 18, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', flexWrap: 'wrap', gap: 10
          }}>
            {/* Search */}
            <div style={{ display: 'flex', border: '1px solid #e0e0e0', borderRadius: 4, overflow: 'hidden', flex: 1, maxWidth: 280 }}>
              <input placeholder="Search in this category..." value={search} onChange={e => setSearch(e.target.value)}
                style={{ flex: 1, padding: '7px 12px', border: 'none', fontSize: 12, outline: 'none' }} />
              {search && <button onClick={() => setSearch('')} style={{ padding: '0 10px', border: 'none', background: '#f5f5f5', cursor: 'pointer', color: '#999' }}>×</button>}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 12, color: '#888' }}>{filtered.length} items</span>
              <select value={sort} onChange={e => setSort(e.target.value)}
                style={{ padding: '7px 12px', border: '1px solid #e0e0e0', borderRadius: 4, fontSize: 12, outline: 'none', cursor: 'pointer', color: '#444' }}>
                {sortOptions.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: 8 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#555', marginBottom: 8 }}>No products found</div>
              <div style={{ fontSize: 13, color: '#aaa' }}>Try adjusting your filters or search term</div>
              <button onClick={() => { setSearch(''); setPriceMin(''); setPriceMax(''); setActiveSubcat('All'); }}
                style={{ marginTop: 16, padding: '10px 24px', background: RED, color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 13, fontWeight: 700 }}>
                Clear All Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
