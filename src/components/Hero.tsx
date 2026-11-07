import React from 'react';
import { ArrowRight, Calendar, Sprout, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { IMAGES, BRAND } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="beranda" className="relative min-h-[92vh] flex items-center pt-28 md:pt-32 lg:pt-36 pb-16 overflow-hidden">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Greenhouse Hidroponik Poktan Elok Green Lestari Surabaya"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E462E]/95 via-[#1E462E]/85 to-[#285C3D]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E462E] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl">
          {/* Natural tag badge */}
          <div className="inline-flex items-center gap-2 bg-[#8DAF75]/25 border border-[#8DAF75]/40 text-[#E7F0E2] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#D9A85B]" />
            <span>Eduwisata Urban Farming Ramah Lingkungan</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Belajar Bertani, Mengenal Alam, dan Tumbuh Bersama.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#E7F0E2]/90 leading-relaxed font-normal mb-8 max-w-2xl">
            Jelajahi pengalaman Eduwisata Urban Farming Elok Green Lestari. Mengenal pertanian perkotaan, peternakan, perikanan, dan pengolahan lingkungan bersama masyarakat.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="#kegiatan"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3.5 rounded-xl font-medium text-sm sm:text-base backdrop-blur-sm transition-all duration-200"
            >
              <span>Jelajahi Kegiatan</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 bg-[#D9A85B] hover:bg-[#C29043] text-[#26352B] font-semibold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Daftar Kunjungan</span>
            </button>
          </div>

          {/* Key Pillars Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#D9A85B] shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-[#E7F0E2]/70 font-medium">Berdiri Sejak</p>
                <p className="text-xs sm:text-sm font-semibold text-white">{BRAND.foundingDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#8DAF75] shrink-0">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-[#E7F0E2]/70 font-medium">Ekosistem</p>
                <p className="text-xs sm:text-sm font-semibold text-white">4 Sektor Terpadu</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#D9A85B] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-[#E7F0E2]/70 font-medium">Konsep Kebun</p>
                <p className="text-xs sm:text-sm font-semibold text-white">100% Organik Alami</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#8DAF75] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-[#E7F0E2]/70 font-medium">Prinsip Komunitas</p>
                <p className="text-xs sm:text-sm font-semibold text-white">Gotong Royong Warga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
