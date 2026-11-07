import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { PRODUCTS, ProductItem, BRAND } from '../data/content';
import { getWhatsAppProductUrl } from '../utils/booking';

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Sayuran', 'Buah-buahan', 'Telur ayam', 'Ikan lele', 'Kompos & Pupuk'];

  const filteredProducts = activeCategory === 'Semua'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const getAvailabilityBadge = (status: ProductItem['availability']) => {
    switch (status) {
      case 'Tersedia':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            Tersedia
          </span>
        );
      case 'Pre-Order':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
            <Clock className="w-3 h-3 text-amber-600" />
            Pre-Order
          </span>
        );
      case 'Musiman':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
            <Sparkles className="w-3 h-3 text-blue-600" />
            Musiman
          </span>
        );
    }
  };

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#285C3D] uppercase mb-2">
            Hasil Panen & Olahan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#26352B] tracking-tight mb-3">
            Produk Unggulan Kami
          </h2>
          <p className="text-sm sm:text-base text-[#526357]">
            Hasil kegiatan produktif Elok Green Lestari yang sehat, segar, dan ramah lingkungan.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#285C3D] text-white shadow-sm'
                  : 'bg-[#F5F1E6] text-[#26352B] hover:bg-[#E7F0E2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#8DAF75]/25 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Product Photo */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  {getAvailabilityBadge(product.availability)}
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded">
                  {product.unit}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#8DAF75] uppercase tracking-wider mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#26352B] mb-2 leading-snug group-hover:text-[#285C3D] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#526357] leading-relaxed mb-4">
                    {product.shortDesc}
                  </p>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-3 border-t border-slate-100">
                  <a
                    href={getWhatsAppProductUrl(product.name, product.category, BRAND.phoneRaw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#285C3D] hover:bg-[#1E462E] text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#8DAF75]" />
                    <span>Pesan via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Direct Community Sourcing */}
        <div className="mt-12 p-4 rounded-xl bg-[#E7F0E2]/50 border border-[#8DAF75]/30 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#285C3D] leading-relaxed">
            🌿 <strong>Produk Segar dari Kebun Warga:</strong> Pemesanan langsung dikirim atau diambil di kebun Poktan Elok Green Lestari Surabaya. Panen dilakukan saat pemesanan untuk menjaga kesegaran maksimal.
          </p>
        </div>
      </div>
    </section>
  );
};
