import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { Products } from './components/Products';
import { Eduwisata } from './components/Eduwisata';
import { CommunityStory } from './components/CommunityStory';
import { Gallery } from './components/Gallery';
import { ContactVisit } from './components/ContactVisit';
import { Footer } from './components/Footer';
import { VisitModal } from './components/VisitModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E6]/20 text-[#26352B] selection:bg-[#8DAF75]/30 selection:text-[#285C3D]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. About Section */}
        <About />

        {/* 4. Our Activities Section */}
        <Activities />

        {/* 5. Product Catalog Section */}
        <Products />

        {/* 6. Eduwisata Promotion Section */}
        <Eduwisata onOpenBooking={handleOpenBooking} />

        {/* 7. Community Storytelling Section */}
        <CommunityStory />

        {/* 8. Gallery & Lightbox Section */}
        <Gallery />

        {/* 9. Contact & Visit Registration Section */}
        <ContactVisit />
      </main>

      {/* 10. Footer Section */}
      <Footer />

      {/* Interactive Global Elements */}
      <VisitModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
