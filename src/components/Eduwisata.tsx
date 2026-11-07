import React from 'react';
import { Compass, Shovel, Sparkles, Droplets, Leaf, GraduationCap, Users, Heart, Building, CheckCircle2, Calendar } from 'lucide-react';
import { EDUWISATA_ACTIVITIES, TARGET_VISITORS, IMAGES } from '../data/content';

interface EduwisataProps {
  onOpenBooking: () => void;
}

export const Eduwisata: React.FC<EduwisataProps> = ({ onOpenBooking }) => {
  const getActivityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#285C3D]" />;
      case 'Shovel':
        return <Shovel className="w-5 h-5 text-[#285C3D]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D9A85B]" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-[#285C3D]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#8DAF75]" />;
      default:
        return <Compass className="w-5 h-5 text-[#285C3D]" />;
    }
  };

  const getVisitorIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-[#285C3D]" />;
      case 1:
        return <Building className="w-5 h-5 text-[#8DAF75]" />;
      case 2:
        return <Users className="w-5 h-5 text-[#D9A85B]" />;
      case 3:
        return <Heart className="w-5 h-5 text-[#285C3D]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#8DAF75]" />;
    }
  };

  return (
    <section id="eduwisata" className="py-20 bg-[#F5F1E6]/50 border-y border-[#8DAF75]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F0E2] text-[#285C3D] text-xs font-semibold uppercase tracking-wider mb-3">
            Program Eduwisata Terbuka
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#26352B] tracking-tight mb-4">
            Belajar Langsung dari Alam
          </h2>
          <p className="text-base sm:text-lg text-[#526357] leading-relaxed">
            Rasakan pengalaman belajar urban farming melalui kegiatan pertanian, peternakan, perikanan, dan pengolahan pupuk organik bersama Elok Green Lestari.
          </p>
        </div>

        {/* 5 Eduwisata Activities Grid */}
        <div className="mb-16">
          <h3 className="text-lg sm:text-xl font-heading font-bold text-[#285C3D] mb-6 flex items-center gap-2">
            <span>Aktivitas Pembelajaran Interaktif</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EDUWISATA_ACTIVITIES.map((act, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#8DAF75]/25 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E7F0E2] flex items-center justify-center mb-4">
                    {getActivityIcon(act.icon)}
                  </div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-[#26352B] mb-2">
                    {act.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#526357] leading-relaxed">
                    {act.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-[#285C3D]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8DAF75]" />
                  <span>Praktik Lapangan Langsung</span>
                </div>
              </div>
            ))}

            {/* Showcase Visual Card */}
            <div className="rounded-2xl overflow-hidden relative min-h-[220px] shadow-xs group">
              <img
                src={IMAGES.hero}
                alt="Suasana Edukasi Urban Farming"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E462E]/90 via-[#1E462E]/50 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs text-[#D9A85B] font-semibold">Pengalaman Edukatif</span>
                <p className="text-base font-bold font-heading">Lingkungan Ramah Anak & Seluruh Keluarga</p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Visitors Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#8DAF75]/25 shadow-sm mb-12">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#285C3D] mb-2">
              Terbuka untuk Berbagai Kalangan
            </h3>
            <p className="text-xs sm:text-sm text-[#526357]">
              Materi dan pendampingan disesuaikan dengan tingkat usia serta tujuan kunjungan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TARGET_VISITORS.map((target, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F5F1E6]/50 border border-[#8DAF75]/20 flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-white shadow-xs flex items-center justify-center shrink-0">
                  {getVisitorIcon(idx)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#26352B] mb-1">
                    {target.category}
                  </h4>
                  <p className="text-xs text-[#526357] leading-relaxed">
                    {target.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Primary CTA Box */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#26352B]">
                Siap Berkunjung ke Poktan Elok Green Lestari?
              </h4>
              <p className="text-xs sm:text-sm text-[#526357]">
                Daftarkan rombongan Anda terlebih dahulu untuk penyesuaian jadwal dan pendamping pengelola.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 bg-[#D9A85B] hover:bg-[#C29043] text-[#26352B] font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Daftar Kunjungan Sekarang</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
