import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import ProductGrid from './components/ProductGrid/ProductGrid';
import HorizontalScroll from './components/ScrollingCards/ScrollingCards';
import Spotlight from './components/Spotlight/Spotlight';
import LuxeEdit from './components/LuxeEdit/LuxeEdit';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Faq from './components/WhyBuyUs/FAQ'
import ScrollToTopButton from './components/ScrollToTopButton'
import LegalPages from './components/LegalPages/LegalPages';
import ProductsSection from './components/ProductsSection/ProductsSection'
import ContactPage from './components/ContactPage/ContactPage'
import CartPage from './components/cartPage/cartPage';
import AboutPage from './components/AboutPage/AboutPage';

import GiftBox from './components/GiftBox/GiftBox'
import FeedbackPage from './components/FeedbackSection/FeedbackSection';

function App() {
  return (
    <Router>
      {/* <div className="premium-top-banner">SHOP THE MINDSET — NOT JUST MERCH.</div> */}
      
        <Header />
          
        <main className="main-section">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  
                  
                  <HeroBanner />
                  <div className="scrolling-offer-s ip fixed-strip "style={{
    background: 'linear-gradient(135deg, #48D1CC, #20B2AA)'
  }}
>
    <div className="scrolling-text" >
      🚨 EARLY BIRD OFFERS LIVE | LIMITED TIME DEALS | FREE SHIPPING OVER ₹1599 | PLACE YOUR ORDER NOW 🚀
    </div>
  </div>
                <div className="luxe-edit-section">
                    <LuxeEdit />
                  </div>
                  <CategoryGrid style={{ marginBottom: '80px', background: '#000', color: '#fff' }} />
                  
                  {/* <div className="new-arrivals-section">
                    <ProductGrid title="New Arrivals" />
                  </div> */}

                  <ProductsSection/>
                  
                  <HorizontalScroll />
                  {/* <Spotlight /> */}
                  <FeedbackPage/>
                  <Faq /> 
                  <Contact />

                  {/* <GiftBox/> */}

                  <Footer />
                </>
              }
            />
            <Route path="/products" element={
              <><ProductsPage /><Footer/> </>} />
            <Route path="/product/:id" element={<><ProductDetail /><Footer/></>} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/legal/:type" element={
              <><Header/><LegalPages /><Footer/></>} />
            <Route path="/about" element={<><Header/><AboutPage/><Footer/></>}/>
            <Route path="/contact" element={
              <div >
                <Header/>
                <div style={{marginTop:'100px'}}>
              <ContactPage /></div>
              <Footer/>
              </div>} />
          </Routes>
        </main>
        <ScrollToTopButton/>
    </Router>
  );
}

export default App;