import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Halo Pengurus Poktan Elok Green Lestari, saya tertarik ingin bertanya seputar eduwisata dan produk kebun.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white rounded-2xl p-3 shadow-xl border border-[#8DAF75]/30 max-w-xs text-xs animate-in slide-in-from-bottom-2 duration-300 relative">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Tutup bantuan chat"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-bold text-[#285C3D] pr-4">Ada pertanyaan?</p>
          <p className="text-[#526357] mt-0.5">Chat langsung pengurus kebun Elok Green Lestari via WhatsApp.</p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${BRAND.phoneRaw}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Poktan Elok Green Lestari"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
