import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import BestSellers from './components/BestSellers';
import DealOfTheDay from './components/DealOfTheDay';
import PromoBanner from './components/PromoBanner';
import ShopByCategories from './components/ShopByCategories';
import ShopByBrands from './components/ShopByBrands';
import LatestBlogs from './components/LatestBlogs';
import FeaturesBar from './components/FeaturesBar';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';

function HomePage() {
  return (
    <main>
      <HeroSlider />
      <BestSellers />
      <DealOfTheDay />
      <PromoBanner />
      <ShopByCategories />
      <ShopByBrands />
      <LatestBlogs />
      <FeaturesBar />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div style={{ minHeight: '100vh', background: '#fff' }}>
          <TopBar />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/category/:category" element={<ProductsPage />} />
            <Route path="/category/:category/:subcategory" element={<ProductsPage />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
