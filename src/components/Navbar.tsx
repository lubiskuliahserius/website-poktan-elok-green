import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck, Leaf, Clock, MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/content';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky shadow & collapse top-bar when scrolling
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Dynamic active section detection using getBoundingClientRect
      const sections = ['beranda', 'tentang', 'kegiatan', 'produk', 'eduwisata', 'cerita', 'galeri', 'kontak'];
      let current = 'beranda';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Offset matching top navigation height
          if (rect.top <= 180 && rect.bottom >= 120) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda', id: 'beranda' },
    { name: 'Tentang Kami', href: '#tentang', id: 'tentang' },
    { name: 'Kegiatan', href: '#kegiatan', id: 'kegiatan' },
    { name: 'Produk Kebun', href: '#produk', id: 'produk' },
    { name: 'Eduwisata', href: '#eduwisata', id: 'eduwisata' },
    { name: 'Cerita', href: '#cerita', id: 'cerita' },
    { name: 'Galeri', href: '#galeri', id: 'galeri' },
    { name: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. Desktop Top Utility / Announcement Bar */}
      <div
        className={`hidden md:block transition-all duration-300 border-b border-[#8DAF75]/25 overflow-hidden ${
          isScrolled
            ? 'max-h-0 opacity-0 py-0 bg-[#163823]/95'
            : 'max-h-12 opacity-100 py-1.5 bg-[#163823]/90 backdrop-blur-md text-[#E7F0E2]/90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-[11px] xl:text-xs">
            {/* Left: Operating Hours & Location */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D9A85B] shrink-0" />
                <span>{BRAND.operatingHours}</span>
              </div>
              <span className="text-white/20 hidden lg:inline">•</span>
              <div className="hidden lg:flex items-center gap-1.5 text-[#E7F0E2]/80">
                <MapPin className="w-3.5 h-3.5 text-[#8DAF75] shrink-0" />
                <span>{BRAND.locationName}</span>
              </div>
            </div>

            {/* Right: Tagline, Social & Phone */}
            <div className="flex items-center gap-4">
              <span className="hidden xl:inline text-[#E7F0E2]/75 italic">
                "{BRAND.tagline}"
              </span>
              <span className="text-white/20 hidden xl:inline">•</span>
              <a
                href={`https://wa.me/${BRAND.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#E7F0E2] hover:text-[#D9A85B] transition-colors"
                title="Hubungi WhatsApp Kami"
              >
                <Phone className="w-3 h-3 text-[#8DAF75]" />
                <span className="font-medium">{BRAND.phoneDisplay}</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#E7F0E2] hover:text-[#D9A85B] transition-colors"
                title="Kunjungi Instagram"
              >
                <Instagram className="w-3 h-3 text-[#8DAF75]" />
                <span>{BRAND.instagram}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1E462E]/95 backdrop-blur-md shadow-lg py-2.5 sm:py-3 border-b border-[#8DAF75]/25'
            : 'bg-[#1E462E]/85 backdrop-blur-md py-3 sm:py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Brand Logo & Name */}
            <a
              href="#beranda"
              className="flex items-center gap-3 text-white group whitespace-nowrap shrink-0"
              aria-label="Elok Green Lestari - Beranda"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8DAF75] to-[#34754E] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white leading-tight flex items-center gap-1.5">
                  {BRAND.name}
                </span>
                <span className="text-[10px] sm:text-xs text-[#E7F0E2]/85 font-normal">
                  Eduwisata Urban Farming Surabaya
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Navigasi Utama"
              className="hidden lg:flex items-center gap-1 xl:gap-2"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-white bg-white/15 font-semibold shadow-xs ring-1 ring-white/20'
                        : 'text-[#E7F0E2]/85 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#D9A85B] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href={`https://wa.me/${BRAND.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#E7F0E2] hover:text-white bg-white/10 hover:bg-white/15 px-3 py-2 rounded-xl transition-all border border-white/10"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#8DAF75]" />
                <span>Tanya Kami</span>
              </a>

              <button
                onClick={onOpenBooking}
                type="button"
                className="flex items-center gap-2 bg-[#D9A85B] hover:bg-[#C29043] active:scale-[0.98] text-[#26352B] font-semibold text-xs xl:text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4 text-[#26352B]" />
                <span>Rencanakan Kunjungan</span>
              </button>
            </div>

            {/* Mobile / Tablet Controls (Visible under lg: < 1024px) */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                type="button"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#D9A85B] hover:bg-[#C29043] text-[#26352B] font-semibold text-xs px-3 py-2 rounded-lg shadow-sm"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Kunjungan</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#8DAF75] transition-colors"
                aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A3D28] border-t border-[#8DAF75]/20 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-white/15 text-white font-semibold'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#D9A85B]" />}
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#D9A85B] text-[#26352B] font-semibold text-sm px-4 py-3 rounded-xl shadow hover:bg-[#C29043] transition-colors"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Rencanakan Kunjungan Sekarang</span>
              </button>

              <a
                href={`https://wa.me/${BRAND.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-medium text-xs px-4 py-2.5 rounded-xl hover:bg-white/15 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8DAF75]" />
                <span>Chat WhatsApp ({BRAND.phoneDisplay})</span>
              </a>

              <div className="pt-2 px-1 text-[11px] text-[#E7F0E2]/70 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#D9A85B]" />
                  <span>{BRAND.operatingHours}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#8DAF75]" />
                  <span>{BRAND.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
