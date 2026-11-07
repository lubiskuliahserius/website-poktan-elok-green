import React from 'react';
import { Quote, Users, Leaf, Shield, Award } from 'lucide-react';
import { IMAGES, BRAND } from '../data/content';

export const CommunityStory: React.FC = () => {
  return (
    <section id="cerita" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#285C3D] uppercase mb-2">
            Cerita Komunitas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#26352B] tracking-tight">
            Dari Warga, Tumbuh untuk Bersama
          </h2>
        </div>

        {/* Editorial Layout: Large Photo + Narrative Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Large Documentary Photo & Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#8DAF75]/25 bg-slate-100 h-80 sm:h-96 lg:h-[480px]">
              <img
                src={IMAGES.hero}
                alt="Kebersamaan warga Poktan Elok Green Lestari saat panen bersama"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <Quote className="w-8 h-8 text-[#D9A85B] mb-2 opacity-80" />
                <p className="text-sm sm:text-base italic font-light leading-relaxed mb-2">
                  "Lahan sempit di tengah kota Surabaya bukanlah halangan untuk menghasilkan pangan sehat. Ketika warga kompak, setiap jengkal tanah berubah menjadi berkah."
                </p>
                <p className="text-xs text-[#E7F0E2]/80 font-medium">
                  — Pengurus Poktan Elok Green Lestari
                </p>
              </div>
            </div>
          </div>

          {/* Pillars & Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[#526357] leading-relaxed">
              <p>
                Elok Green Lestari tidak didirikan oleh korporasi besar, melainkan lahir dari inisiatif para warga yang mendambakan lingkungan hijau, asri, dan produktif.
              </p>
              <p>
                Melalui gotong royong, lahan yang awalnya kurang termanfaatkan disulap menjadi sentra ketahanan pangan mandiri. Mulai dari kebun hidroponik sayuran, kolam lele bioflok, peternakan ayam petelur higienis, hingga pengolahan pupuk organik dari sisa kotoran ternak.
              </p>
            </div>

            {/* 4 Story Pillars */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#F5F1E6] border border-[#8DAF75]/25 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#285C3D] text-white flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#26352B]">Kolaborasi & Gotong Royong</h4>
                  <p className="text-xs text-[#526357]">Setiap tahapan dirawat bersama oleh warga, dari penyemaian hingga panen.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F5F1E6] border border-[#8DAF75]/25 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8DAF75] text-[#1E462E] flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#26352B]">Kemandirian Pangan Perkotaan</h4>
                  <p className="text-xs text-[#526357]">Menyediakan sumber protein dan vitamin berkualitas tinggi untuk kebutuhan warga sekitar.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F5F1E6] border border-[#8DAF75]/25 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#D9A85B] text-[#26352B] flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#26352B]">Ekosistem Sirkular Ramah Lingkungan</h4>
                  <p className="text-xs text-[#526357]">Nol limbah: kotoran ayam menjadi kompos sayuran, air kolam menyuburkan tanaman.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F5F1E6] border border-[#8DAF75]/25 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#285C3D] text-white flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#26352B]">Pemberdayaan Ekonomi Warga</h4>
                  <p className="text-xs text-[#526357]">Hasil panen dijual untuk kas kelompok dan peningkatan kesejahteraan bersama.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-[#285C3D]">
                Motto: "{BRAND.tagline}"
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
