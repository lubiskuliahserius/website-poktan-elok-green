import React from 'react';
import { Leaf, MapPin, Phone, Instagram, ArrowUp, Heart } from 'lucide-react';
import { BRAND } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E462E] text-white border-t border-[#8DAF75]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#8DAF75] flex items-center justify-center text-[#285C3D]">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                {BRAND.name}
              </span>
            </div>

            <p className="text-sm text-[#E7F0E2]/85 italic font-light">
              "{BRAND.tagline}"
            </p>

            <p className="text-xs text-[#E7F0E2]/70 leading-relaxed max-w-sm">
              Kelompok Tani pengembangan eduwisata pertanian perkotaan, peternakan ayam petelur, budidaya ikan lele, dan pengolahan kompos organik di Surabaya, Jawa Timur.
            </p>

            <div className="pt-2 text-xs text-[#E7F0E2]/60">
              Diresmikan sejak {BRAND.foundingDate}
            </div>
          </div>

          {/* Navigasi Anchor Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#D9A85B] uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#beranda" className="text-[#E7F0E2]/80 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="text-[#E7F0E2]/80 hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#kegiatan" className="text-[#E7F0E2]/80 hover:text-white transition-colors">
                  Aktivitas & Potensi
                </a>
              </li>
              <li>
                <a href="#produk" className="text-[#E7F0E2]/80 hover:text-white transition-colors">
                  Produk Kebun
                </a>
              </li>
              <li>
                <a href="#eduwisata" className="text-[#E7F0E2]/80 hover:text-white transition-colors">
                  Eduwisata
                </a>
              </li>
              <li>
                <a href="#galeri" className="text-[#E7F0E2]/80 hover:text-white transition-colors">
                  Galeri Foto
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-[#E7F0E2]/80 hover:text-white transition-colors">
                  Kontak & Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak & Alamat */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#D9A85B] uppercase tracking-wider">
              Pusat Edukasi & Sekretariat
            </h4>
            <div className="space-y-2.5 text-xs text-[#E7F0E2]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8DAF75] shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8DAF75] shrink-0" />
                <span>Hotline WA: {BRAND.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#D9A85B] shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {BRAND.instagram}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent('Halo Poktan Elok Green Lestari, saya ingin mengetahui informasi seputar kegiatan dan produk.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#E7F0E2] text-xs font-medium border border-white/15 transition-colors"
              >
                <span>Chat WhatsApp Pengelola</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E7F0E2]/60">
          <p>© {new Date().getFullYear()} {BRAND.legalName}. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              Dikelola dengan <Heart className="w-3 h-3 text-[#D9A85B] fill-current" /> oleh Warga Surabaya
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#8DAF75] hover:text-white transition-colors cursor-pointer"
            >
              <span>Kembali ke atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
