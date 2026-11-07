import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#285C3D] border border-[#8DAF75]/40 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
      aria-label="Kembali ke atas halaman"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
