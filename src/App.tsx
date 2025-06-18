import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperimentsPage from './pages/ExperimentsPage';
import NewsletterPage from './pages/NewsletterPage';
import NewsletterPostPage from './pages/NewsletterPostPage'
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <div className="relative z-50 mb-20">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experiments" element={<ExperimentsPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/newsletters/:slug" element={<NewsletterPostPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;