import React, { useState } from 'react';
import { X, Calendar, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { TARGET_VISITORS, BRAND } from '../data/content';
import { validateVisitForm, getWhatsAppVisitUrl, VisitFormData } from '../utils/booking';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<VisitFormData>({
    fullName: '',
    institution: '',
    visitorCategory: 'Sekolah (PAUD / SD / SMP / SMA)',
    phone: '',
    visitDate: '',
    estimatedVisitors: 20,
    activityPackage: 'Paket Komplit Eduwisata (4 Sektor Terpadu)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const packageOptions = [
    'Paket Komplit Eduwisata (4 Sektor Terpadu)',
    'Paket Pertanian & Hidroponik Mandiri',
    'Paket Peternakan Ayam & Budidaya Lele',
    'Workshop Pengolahan Pupuk Kompos & Organik',
    'Kunjungan Studi Banding / Penelitian Kampus',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateVisitForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitted(true);
    const waUrl = getWhatsAppVisitUrl(formData, BRAND.phoneRaw);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#8DAF75]/30 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#285C3D] p-5 sm:p-6 text-white flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#8DAF75] flex items-center justify-center text-[#285C3D]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg">
                Pendaftaran Kunjungan Eduwisata
              </h3>
              <p className="text-[11px] text-[#E7F0E2]/80">
                Poktan Elok Green Lestari · Surabaya
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup form reservasi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E7F0E2] text-[#285C3D] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-[#285C3D]" />
              </div>
              <h4 className="font-heading font-bold text-xl text-[#285C3D]">
                Data Kunjungan Telah Diteruskan!
              </h4>
              <p className="text-xs sm:text-sm text-[#526357] max-w-sm mx-auto leading-relaxed">
                Rencana kunjungan untuk <strong>{formData.fullName}</strong> pada <strong>{formData.visitDate}</strong> telah dikirim ke nomor WhatsApp pengelola. Kami akan segera menghubungi Anda untuk teknis kunjungan.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#285C3D] hover:bg-[#1E462E] text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Selesai
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-xl bg-[#F5F1E6]/60 border border-[#8DAF75]/20 flex items-center gap-2.5 text-xs text-[#285C3D]">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#8DAF75]" />
                <span>Tanpa biaya pendaftaran di muka. Jadwal dan durasi akan dikoordinasikan langsung bersama tim kebun.</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#26352B] mb-1">
                  Nama Penanggung Jawab *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nama lengkap pemohon"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D] ${
                    errors.fullName ? 'border-red-500' : 'border-slate-200'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#26352B] mb-1">
                    Instansi / Rombongan
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Sekolah / Kampus / Umum"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#26352B] mb-1">
                    WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08xxxxxxxxxx"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D] ${
                      errors.phone ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#26352B] mb-1">
                    Rencana Tanggal *
                  </label>
                  <input
                    type="date"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D] ${
                      errors.visitDate ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.visitDate && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.visitDate}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#26352B] mb-1">
                    Jumlah Peserta (Orang) *
                  </label>
                  <input
                    type="number"
                    name="estimatedVisitors"
                    min="1"
                    max="200"
                    value={formData.estimatedVisitors}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D] ${
                      errors.estimatedVisitors ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.estimatedVisitors && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.estimatedVisitors}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#26352B] mb-1">
                  Pilihan Paket / Sektor Eduwisata *
                </label>
                <select
                  name="activityPackage"
                  value={formData.activityPackage}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D]"
                >
                  {packageOptions.map((pkg, i) => (
                    <option key={i} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#26352B] mb-1">
                  Catatan / Kebutuhan Tambahan
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Catatan jam tiba, bus kecil, atau perlengkapan..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D9A85B] hover:bg-[#C29043] text-[#26352B] text-xs font-bold shadow transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Formulir ke WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
