import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { HomePage } from './pages/HomePage.js';
import { ServicesPage } from './pages/ServicesPage.js';
import { CaseStudiesPage } from './pages/CaseStudiesPage.js';
import { CompanyPage } from './pages/CompanyPage.js';
import { ContactPage } from './pages/ContactPage.js';
import { ToastProvider } from './components/engagement/ToastProvider.js';
import { ScrollProgress } from './components/engagement/ScrollProgress.js';
import { BackToTop } from './components/engagement/BackToTop.js';
import { ExplorerWidget } from './components/engagement/ExplorerWidget.js';

// Auto-scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ScrollToTop />
        <ScrollProgress />
        <div className="site-wrapper">
          <Navbar />
          <main className="content-area">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch-all redirects back to home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <BackToTop />
        <ExplorerWidget />
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
