import React from 'react';
import { Users, Target, HeartHandshake, Calendar, CheckCircle2 } from 'lucide-react';
import { IMAGES, BRAND } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#285C3D] uppercase mb-2">
            Tentang Kami
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#26352B] tracking-tight">
            Mengenal Elok Green Lestari
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Image Showcase with Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#8DAF75]/20 bg-[#F5F1E6]">
              <img
                src={IMAGES.farming}
                alt="Aktivitas Budidaya Kebun Poktan Elok Green Lestari"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E462E]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-sm shadow border border-[#8DAF75]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E7F0E2] text-[#285C3D] flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#526357] font-medium">Diresmikan Bersama Warga</p>
                    <p className="text-sm font-bold text-[#285C3D]">11 Mei 2023 · Surabaya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative & Vision Mission */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-[#26352B]/90 leading-relaxed font-normal">
              Poktan Elok Green Lestari merupakan komunitas masyarakat yang mengembangkan potensi pertanian perkotaan melalui kegiatan pertanian, peternakan, perikanan, dan pengolahan limbah organik. Berawal dari semangat gotong royong, komunitas ini berupaya menciptakan lingkungan yang produktif, edukatif, dan berkelanjutan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Visi Card */}
              <div className="p-5 rounded-xl bg-[#F5F1E6]/70 border border-[#8DAF75]/25">
                <div className="w-9 h-9 rounded-lg bg-[#285C3D] text-white flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-[#285C3D] text-base mb-2">Visi Komunitas</h3>
                <p className="text-xs sm:text-sm text-[#526357] leading-relaxed">
                  Menjadi percontohan urban farming terpadu dan mandiri yang menginspirasi kemandirian pangan, kelestarian lingkungan, serta kesejahteraan warga kota.
                </p>
              </div>

              {/* Misi Card */}
              <div className="p-5 rounded-xl bg-[#E7F0E2]/60 border border-[#8DAF75]/35">
                <div className="w-9 h-9 rounded-lg bg-[#8DAF75] text-[#1E462E] flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-[#285C3D] text-base mb-2">Semangat Gotong Royong</h3>
                <p className="text-xs sm:text-sm text-[#526357] leading-relaxed">
                  Menyatukan potensi warga dari berbagai latar belakang untuk merawat lahan bersama, membagi hasil panen, dan saling mengedukasi generasi muda.
                </p>
              </div>
            </div>

            {/* Core Pillars List */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-[#285C3D] mb-3">Komitmen Pemberdayaan:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Ketahanan pangan keluarga berbasis lingkungan RT/RW",
                  "Edukasi praktis ramah anak, pelajar, dan umum",
                  "Pengurangan sampah organik melalui komposting mandiri",
                  "Peluang ekonomi produktif bagi anggota kelompok tani",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#26352B]">
                    <CheckCircle2 className="w-4 h-4 text-[#285C3D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center gap-3 text-xs text-[#526357]">
              <Users className="w-4 h-4 text-[#8DAF75]" />
              <span>Tagline resmi: <strong className="text-[#285C3D]">"{BRAND.tagline}"</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
