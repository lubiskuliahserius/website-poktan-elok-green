import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/content';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['Semua', 'Pertanian', 'Peternakan', 'Perikanan', 'Pengolahan Kompos', 'Kegiatan Masyarakat'];

  const filteredItems = activeCategory === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev as number) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <section id="galeri" className="py-20 bg-[#F5F1E6]/40 border-t border-[#8DAF75]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#285C3D] uppercase mb-2">
            Dokumentasi Kegiatan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#26352B] tracking-tight mb-3">
            Galeri Aktivitas Kami
          </h2>
          <p className="text-sm sm:text-base text-[#526357]">
            Potret nyata semangat gotong royong, kebun hijau, dan pembelajaran di Elok Green Lestari.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#285C3D] text-white shadow-sm'
                  : 'bg-white text-[#26352B] hover:bg-[#E7F0E2] border border-[#8DAF75]/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 border border-[#8DAF75]/25"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-semibold text-[#D9A85B] uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 mb-3 font-normal">
                  {item.caption}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8DAF75]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Foto Penuh</span>
                </div>
              </div>

              {/* Corner Tag */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#285C3D] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs group-hover:opacity-0 transition-opacity">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Tutup foto"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/25 transition-colors z-50 cursor-pointer"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Navigation Next */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/25 transition-colors z-50 cursor-pointer"
            aria-label="Foto selanjutnya"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Content Container */}
          <div
            className="relative max-w-4xl w-full bg-transparent overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-full flex items-center justify-center">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption & Metadata Bar */}
            <div className="w-full mt-4 text-center text-white px-4">
              <div className="inline-block px-3 py-1 rounded-md bg-[#285C3D] text-[11px] font-semibold text-[#E7F0E2] uppercase tracking-wider mb-2">
                {filteredItems[lightboxIndex].category} · Foto {lightboxIndex + 1} dari {filteredItems.length}
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
