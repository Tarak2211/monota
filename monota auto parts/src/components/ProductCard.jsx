import { useCart } from '../context/CartContext';

const RED = '#cc0000';

const StarIcon = ({ filled }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill={filled ? '#f5a623' : '#ddd'} stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const CartIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);
const HeartIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? RED : 'none'} stroke={RED} strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const isWished = wishlist.some(i => i.id === product.id);

  const badgeColor = product.badge === 'NEW' ? '#28a745'
    : product.badge === 'HOT' ? '#ff6600'
    : RED;

  return (
    <div className="product-card" style={{
      background: '#fff', border: '1px solid #ebebeb', borderRadius: 8,
      overflow: 'hidden', transition: 'all 0.3s', position: 'relative',
      display: 'flex', flexDirection: 'column'
    }}>
      {/* Badge */}
      {product.badge && (
        <div style={{
          position: 'absolute', top: 10, left: 10, zIndex: 3,
          background: badgeColor, color: '#fff',
          fontSize: 10, fontWeight: 800, padding: '3px 8px',
          borderRadius: 3, letterSpacing: 0.5
        }}>{product.badge}</div>
      )}

      {/* Image */}
      <div className="card-img" style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#f9f9f9' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
          loading="lazy"
        />
        {/* Hover actions */}
        <div className="card-actions" style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          display: 'flex', justifyContent: 'center', gap: 6,
          padding: '12px 10px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
        }}>
          <button
            onClick={() => addToCart(product)}
            style={{
              background: RED, color: '#fff', border: 'none',
              padding: '6px 12px', borderRadius: 4, fontSize: 11, fontWeight: 800,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5,
              letterSpacing: 0.5
            }}
          >
            <CartIcon /> ADD TO CART
          </button>
          <button
            onClick={() => toggleWishlist(product)}
            style={{
              background: isWished ? '#ffe0e0' : '#fff', border: 'none',
              width: 30, height: 30, borderRadius: 4, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <HeartIcon filled={isWished} />
          </button>
          <button style={{
            background: '#fff', border: 'none',
            width: 30, height: 30, borderRadius: 4, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <EyeIcon />
          </button>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '12px 14px 14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontSize: 11, color: RED, fontWeight: 600, marginBottom: 5, textTransform: 'uppercase', letterSpacing: 0.5 }}>
          {product.category}
        </p>
        <h3 style={{
          fontSize: 13, fontWeight: 600, color: '#222', marginBottom: 8,
          lineHeight: 1.4, flex: 1,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
        }}>
          {product.name}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 8 }}>
          {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= product.rating} />)}
          <span style={{ fontSize: 11, color: '#aaa', marginLeft: 2 }}>({product.reviews})</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: 16, fontWeight: 800, color: RED }}>${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span style={{ fontSize: 12, color: '#bbb', textDecoration: 'line-through', marginLeft: 6 }}>
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            style={{
              fontSize: 11, color: '#666', border: '1px solid #ddd',
              padding: '4px 10px', borderRadius: 4, cursor: 'pointer', background: '#fff',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = RED; e.currentTarget.style.color = RED; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#ddd'; e.currentTarget.style.color = '#666'; }}
          >
            + Cart
          </button>
        </div>
      </div>
    </div>
  );
}
