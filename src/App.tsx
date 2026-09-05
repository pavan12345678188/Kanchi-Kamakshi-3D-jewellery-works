import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DesignsPage } from './pages/DesignsPage';
import { CollectionPage } from './pages/CollectionPage';
import { EnquiryFormPage } from './pages/EnquiryFormPage';
import { WhatsAppButton } from './components/common/WhatsAppButton';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-[#0b0a08] text-[#f6f1e7] flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/designs" element={<DesignsPage />} />
            <Route path="/collection" element={<CollectionPage />} />

            {/* Contact / Enquiry */}
            <Route path="/enquiry" element={<EnquiryFormPage />} />
            <Route path="/contact" element={<EnquiryFormPage />} />

            {/* Backward compatibility:
                If someone visits the old /work URL,
                send them to the Collection page. */}
            <Route
              path="/work"
              element={<Navigate to="/collection" replace />}
            />

            {/* Unknown routes */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}