import React, { useState } from 'react';
import { Sprout, Egg, Fish, Recycle, ChevronRight, Check } from 'lucide-react';
import { ACTIVITIES, ActivityItem } from '../data/content';

export const Activities: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-[#285C3D]" />;
      case 'Egg':
        return <Egg className="w-5 h-5 text-[#D9A85B]" />;
      case 'Fish':
        return <Fish className="w-5 h-5 text-[#285C3D]" />;
      case 'Recycle':
        return <Recycle className="w-5 h-5 text-[#8DAF75]" />;
      default:
        return <Sprout className="w-5 h-5 text-[#285C3D]" />;
    }
  };

  return (
    <section id="kegiatan" className="py-20 bg-[#F5F1E6]/40 border-y border-[#8DAF75]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#285C3D] uppercase mb-2">
            Aktivitas Unggulan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#26352B] tracking-tight mb-3">
            Jelajahi Potensi Kami
          </h2>
          <p className="text-sm sm:text-base text-[#526357]">
            Beragam kegiatan produktif yang dapat menjadi pengalaman belajar langsung.
          </p>
        </div>

        {/* 4 Cards Grid: 4 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#8DAF75]/25 flex flex-col group"
            >
              {/* Card Photo */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs font-bold text-[#285C3D] shadow-sm">
                  {act.number}
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  {getIcon(act.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-[#285C3D] text-lg mb-2.5 group-hover:text-[#1E462E] transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526357] leading-relaxed mb-4">
                    {act.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedActivity(act)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#285C3D] hover:text-[#1E462E] transition-colors group/btn cursor-pointer"
                  >
                    <span>Pelajari Kegiatan</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Details Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#8DAF75]/30 animate-in zoom-in-95 duration-200">
            <div className="relative h-48 sm:h-56 bg-slate-100">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Tutup detail kegiatan"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-4 bg-[#285C3D] text-white px-3 py-1 rounded-md text-xs font-semibold">
                Sektor {selectedActivity.number}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-heading font-bold text-xl text-[#285C3D] mb-2">
                {selectedActivity.title}
              </h3>
              <p className="text-sm text-[#526357] leading-relaxed mb-4">
                {selectedActivity.fullDesc}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#26352B] mb-2">
                Poin Edukasi Utama:
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedActivity.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#26352B]">
                    <Check className="w-4 h-4 text-[#8DAF75] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl"
                >
                  Tutup
                </button>
                <a
                  href="#eduwisata"
                  onClick={() => setSelectedActivity(null)}
                  className="px-4 py-2 text-xs font-semibold bg-[#285C3D] hover:bg-[#1E462E] text-white rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Ikuti Sesi Ini</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
