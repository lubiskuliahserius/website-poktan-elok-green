/**
 * Booking and WhatsApp messaging utility logic for Poktan Elok Green Lestari
 */

export interface VisitFormData {
  fullName: string;
  institution: string;
  visitorCategory: string;
  phone: string;
  visitDate: string;
  estimatedVisitors: number | string;
  activityPackage: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const OFFICIAL_PHONE = "6281234567890"; // Poktan Elok Green Lestari WhatsApp Hotline

/**
 * Builds a polite, structured WhatsApp message for ordering or inquiring about products
 */
export function buildWhatsAppProductMessage(productName: string, category: string): string {
  const cleanName = productName.trim();
  const cleanCategory = category.trim();
  return `Halo Poktan Elok Green Lestari, saya ingin memesan produk: *${cleanName}* (Kategori: ${cleanCategory}).\n\nBisa diinformasikan ketersediaan stok, harga per kemasan, dan cara pengambilannya? Terima kasih.`;
}

/**
 * Generates direct WhatsApp click-to-chat URL
 */
export function getWhatsAppProductUrl(productName: string, category: string, phone = OFFICIAL_PHONE): string {
  const text = buildWhatsAppProductMessage(productName, category);
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds a structured visit inquiry message for WhatsApp
 */
export function buildWhatsAppVisitMessage(data: VisitFormData): string {
  const lines = [
    `*FORMULIR PENDAFTARAN EDUWISATA URBAN FARMING*`,
    `*POKTAN ELOK GREEN LESTARI SURABAYA*`,
    `--------------------------------------`,
    `*Nama Pemohon:* ${data.fullName.trim()}`,
    `*Instansi / Komunitas:* ${data.institution.trim() || 'Perorangan/Keluarga'}`,
    `*Kategori:* ${data.visitorCategory}`,
    `*Kontak (WA):* ${data.phone.trim()}`,
    `*Rencana Tanggal:* ${data.visitDate}`,
    `*Estimasi Peserta:* ${data.estimatedVisitors} Orang`,
    `*Paket / Fokus Edukasi:* ${data.activityPackage}`,
  ];

  if (data.notes && data.notes.trim()) {
    lines.push(`*Catatan Tambahan:* ${data.notes.trim()}`);
  }

  lines.push(`--------------------------------------`);
  lines.push(`Mohon konfirmasi jadwal dan koordinasi teknis kunjungan kami. Terima kasih!`);

  return lines.join('\n');
}

/**
 * Generates direct WhatsApp URL for visit registration
 */
export function getWhatsAppVisitUrl(data: VisitFormData, phone = OFFICIAL_PHONE): string {
  const text = buildWhatsAppVisitMessage(data);
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Validates the visit registration form
 */
export function validateVisitForm(data: Partial<VisitFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = "Nama lengkap minimal 3 karakter";
  }

  if (!data.phone || !/^[0-9+-\s]{8,20}$/.test(data.phone.trim())) {
    errors.phone = "Nomor WhatsApp harus valid (minimal 8 digit)";
  }

  if (!data.visitDate) {
    errors.visitDate = "Pilih tanggal rencana kunjungan";
  }

  const visitorsNum = Number(data.estimatedVisitors);
  if (!visitorsNum || isNaN(visitorsNum) || visitorsNum < 1) {
    errors.estimatedVisitors = "Jumlah peserta minimal 1 orang";
  }

  if (!data.activityPackage) {
    errors.activityPackage = "Pilih paket atau topik eduwisata";
  }

  if (!data.visitorCategory) {
    errors.visitorCategory = "Pilih kategori rombongan";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
