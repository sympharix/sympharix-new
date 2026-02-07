import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Home';
import ProductsPage from './pages/Productspage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<div className="py-20 text-center">About Page - Coming Soon</div>} />
            <Route path="/contact" element={<div className="py-20 text-center">Contact Page - Coming Soon</div>} />
            <Route path="/privacy" element={<div className="py-20 px-4 max-w-4xl mx-auto"><h1 className="text-4xl font-bold mb-8">Privacy Policy</h1><p>Privacy policy content will go here...</p></div>} />
            <Route path="/terms" element={<div className="py-20 px-4 max-w-4xl mx-auto"><h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1><p>Terms and conditions content will go here...</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;