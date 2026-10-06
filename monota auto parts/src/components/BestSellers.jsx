import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const RED = '#cc0000';
const tabs = ['BEST SELLER', 'NEW ARRIVALS', 'ON SALE'];

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const filtered = activeTab === 2
    ? products.filter(p => p.discount)
    : activeTab === 1
    ? [...products].reverse()
    : products;

  const show = filtered.slice(0, 8);

  return (
    <section style={{ padding: '50px 0', background: '#fff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, color: RED, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>
              TOP SALE IN THE WEEK
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: '#111', position: 'relative', paddingBottom: 10 }}>
              Featured Products
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: 50, height: 3, background: RED, borderRadius: 2 }} />
            </h2>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', border: '1px solid #e0e0e0', borderRadius: 4, overflow: 'hidden' }}>
            {tabs.map((tab, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{
                padding: '8px 18px', fontSize: 12, fontWeight: 700,
                cursor: 'pointer', border: 'none', letterSpacing: 0.5,
                background: activeTab === i ? RED : '#fff',
                color: activeTab === i ? '#fff' : '#555',
                borderRight: i < tabs.length - 1 ? '1px solid #e0e0e0' : 'none',
                transition: 'all 0.2s'
              }}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
          gap: 18
        }}>
          {show.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* View All */}
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <button style={{
            border: `2px solid ${RED}`, color: RED, background: '#fff',
            padding: '10px 36px', fontSize: 13, fontWeight: 700,
            borderRadius: 4, cursor: 'pointer', letterSpacing: 1,
            transition: 'all 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = RED; }}
            onClick={() => navigate('/products')}>
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}
