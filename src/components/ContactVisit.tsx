import React, { useState } from 'react';
import { MapPin, Phone, Instagram, Mail, Clock, Send, MessageCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { BRAND, TARGET_VISITORS } from '../data/content';
import { validateVisitForm, buildWhatsAppVisitMessage, getWhatsAppVisitUrl, VisitFormData } from '../utils/booking';

export const ContactVisit: React.FC = () => {
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
    // Automatically open WhatsApp with structured message in new tab
    const waUrl = getWhatsAppVisitUrl(formData, BRAND.phoneRaw);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#285C3D] uppercase mb-2">
            Lokasi & Reservasi
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#26352B] tracking-tight mb-4">
            Ayo Berkunjung ke Elok Green Lestari!
          </h2>
          <p className="text-base sm:text-lg text-[#526357] leading-relaxed">
            Kenali lebih dekat kegiatan urban farming dan potensi pemberdayaan masyarakat bersama kami.
          </p>
        </div>

        {/* 2-Column: Left info & map, Right Visit Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1: Info, Direct Channels, Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F5F1E6]/70 rounded-3xl p-6 sm:p-8 border border-[#8DAF75]/25">
              <h3 className="font-heading font-bold text-xl text-[#285C3D] mb-6">
                Informasi Kontak Komunitas
              </h3>

              <div className="space-y-4 text-sm">
                {/* Alamat */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#285C3D] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#26352B]">Alamat Kebun</h4>
                    <p className="text-xs text-[#526357] leading-relaxed">
                      {BRAND.address}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#285C3D] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#26352B]">Hotline WhatsApp</h4>
                    <p className="text-xs text-[#526357]">{BRAND.phoneDisplay}</p>
                    <a
                      href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent('Halo Poktan Elok Green Lestari, saya ingin bertanya seputar eduwisata dan kunjungan.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#285C3D] hover:underline mt-1"
                    >
                      <span>Hubungi Kami via WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#8DAF75] flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#26352B]">Jam Kunjungan Edukasi</h4>
                    <p className="text-xs text-[#526357] leading-relaxed">
                      {BRAND.operatingHours}
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#D9A85B] flex items-center justify-center shrink-0 shadow-xs">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#26352B]">Instagram Resmi</h4>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#285C3D] font-medium hover:underline"
                    >
                      {BRAND.instagram}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WA Action */}
              <div className="mt-8 pt-6 border-t border-[#8DAF75]/20">
                <a
                  href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent('Halo Pengurus Poktan Elok Green Lestari, saya ingin berkonsultasi mengenai rencana kunjungan eduwisata.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#285C3D] hover:bg-[#1E462E] text-white py-3.5 px-4 rounded-xl text-sm font-semibold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#8DAF75]" />
                  <span>Chat Langsung Pengurus</span>
                </a>
              </div>
            </div>

            {/* Google Maps Container */}
            <div className="rounded-3xl overflow-hidden border border-[#8DAF75]/25 shadow-xs bg-slate-100">
              <div className="p-4 bg-[#285C3D] text-white flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <MapPin className="w-4 h-4 text-[#D9A85B]" />
                  <span>Peta Lokasi Surabaya</span>
                </div>
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E7F0E2] hover:text-white inline-flex items-center gap-1 font-medium underline"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Maps Preview Frame */}
              <div className="h-64 relative bg-[#E7F0E2]/40 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#285C3D] text-white flex items-center justify-center mb-3 shadow-md">
                  <MapPin className="w-6 h-6 text-[#D9A85B]" />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#285C3D] mb-1">
                  Kawasan Poktan Elok Green Lestari
                </h4>
                <p className="text-xs text-[#526357] max-w-xs mb-4">
                  Surabaya, Jawa Timur. Akses mudah dijangkau kendaraan roda dua, mobil, maupun minibus sekolah.
                </p>
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white hover:bg-slate-50 text-[#285C3D] font-semibold text-xs rounded-xl border border-[#8DAF75]/40 shadow-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Petunjuk Arah Rute Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Form Pendaftaran Kunjungan Eduwisata */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F2] rounded-3xl p-6 sm:p-10 border border-[#8DAF75]/30 shadow-sm">
              <div className="mb-6">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#285C3D] bg-[#E7F0E2] px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Formulir Kunjungan Online
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#26352B]">
                  Formulir Pendaftaran Kunjungan Eduwisata
                </h3>
                <p className="text-xs sm:text-sm text-[#526357] mt-1">
                  Lengkapi data rombongan di bawah ini. Tim pengelola akan memverifikasi dan mengonfirmasi jadwal kunjungan Anda melalui WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#E7F0E2]/80 border border-[#8DAF75] text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#285C3D] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-8 h-8 text-[#8DAF75]" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-[#285C3D]">
                    Pendaftaran Berhasil Dikirim!
                  </h4>
                  <p className="text-sm text-[#26352B] max-w-md mx-auto leading-relaxed">
                    Terima kasih, <strong>{formData.fullName}</strong>. Data rencana kunjungan Anda pada tanggal <strong>{formData.visitDate}</strong> telah kami terima dan diteruskan ke WhatsApp hotline resmi.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-[#285C3D] hover:bg-[#1E462E] text-white rounded-xl text-xs font-semibold cursor-pointer"
                    >
                      Daftarkan Kunjungan Baru
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nama Lengkap & Instansi */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#26352B] mb-1">
                        Nama Lengkap / Kontak Penanggung Jawab *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Contoh: Budi Santoso"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D] ${
                          errors.fullName ? 'border-red-500' : 'border-[#8DAF75]/40'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#26352B] mb-1">
                        Nama Instansi / Sekolah / Komunitas
                      </label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="Contoh: SDN Rungkut / Komunitas PKK"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#8DAF75]/40 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D]"
                      />
                    </div>
                  </div>

                  {/* Kategori Pengunjung & Nomor WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#26352B] mb-1">
                        Kategori Rombongan *
                      </label>
                      <select
                        name="visitorCategory"
                        value={formData.visitorCategory}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#8DAF75]/40 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D]"
                      >
                        {TARGET_VISITORS.map((v, i) => (
                          <option key={i} value={v.category}>
                            {v.category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#26352B] mb-1">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Contoh: 081234567890"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D] ${
                          errors.phone ? 'border-red-500' : 'border-[#8DAF75]/40'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Rencana Tanggal & Estimasi Peserta */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#26352B] mb-1">
                        Rencana Tanggal Kunjungan *
                      </label>
                      <input
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D] ${
                          errors.visitDate ? 'border-red-500' : 'border-[#8DAF75]/40'
                        }`}
                      />
                      {errors.visitDate && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.visitDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#26352B] mb-1">
                        Estimasi Jumlah Peserta (Orang) *
                      </label>
                      <input
                        type="number"
                        name="estimatedVisitors"
                        min="1"
                        max="200"
                        value={formData.estimatedVisitors}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D] ${
                          errors.estimatedVisitors ? 'border-red-500' : 'border-[#8DAF75]/40'
                        }`}
                      />
                      {errors.estimatedVisitors && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.estimatedVisitors}</p>
                      )}
                    </div>
                  </div>

                  {/* Paket / Fokus Kegiatan */}
                  <div>
                    <label className="block text-xs font-semibold text-[#26352B] mb-1">
                      Pilihan Paket Eduwisata *
                    </label>
                    <select
                      name="activityPackage"
                      value={formData.activityPackage}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#8DAF75]/40 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D]"
                    >
                      {packageOptions.map((pkg, i) => (
                        <option key={i} value={pkg}>
                          {pkg}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Catatan Tambahan */}
                  <div>
                    <label className="block text-xs font-semibold text-[#26352B] mb-1">
                      Catatan Tambahan (Kebutuhan Khusus / Permintaan Khusus)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tuliskan jika ada kebutuhan pendampingan khusus, konsumsi, atau sesi diskusi khusus..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#8DAF75]/40 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#285C3D]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#D9A85B] hover:bg-[#C29043] text-[#26352B] font-bold py-3.5 px-6 rounded-xl text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pendaftaran Kunjungan</span>
                    </button>
                    <p className="text-[11px] text-center text-[#526357] mt-2">
                      Setelah submit, formulir akan otomatis terhubung ke WhatsApp pengelola untuk verifikasi instan.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
