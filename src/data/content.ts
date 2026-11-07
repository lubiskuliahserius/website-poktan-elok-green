/**
 * Content data for Poktan Elok Green Lestari Landing Page
 */

// Image assets generated and validated
export const IMAGES = {
  hero: "/src/assets/images/hero_urban_farming_1793977063097.jpg",
  farming: "/src/assets/images/activity_farming_1793977063510.jpg",
  poultry: "/src/assets/images/activity_poultry_1793977064164.jpg",
  catfish: "/src/assets/images/activity_catfish_1793977064244.jpg",
  compost: "/src/assets/images/activity_compost_1793977064540.jpg",
};

export const BRAND = {
  name: "ELOK GREEN LESTARI",
  legalName: "Kelompok Tani (Poktan) Elok Green Lestari",
  tagline: "Dari Warga untuk Warga, Hijau yang Lestari.",
  foundingDate: "11 Mei 2023",
  locationName: "Surabaya, Jawa Timur",
  address: "Jl. Elok Green Mandiri No. 11, Rungkut, Kota Surabaya, Jawa Timur 60293",
  googleMapsUrl: "https://maps.google.com/?q=Surabaya+Urban+Farming",
  phoneDisplay: "0812-3456-7890",
  phoneRaw: "6281234567890",
  email: "poktan.elokgreenlestari@gmail.com",
  instagram: "@elokgreenlestari",
  instagramUrl: "https://instagram.com",
  operatingHours: "Selasa – Minggu: 08.00 – 16.00 WIB (Senin Tutup Pemeliharaan)",
};

export interface ActivityItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  icon: string;
}

export const ACTIVITIES: ActivityItem[] = [
  {
    id: "pertanian",
    number: "01",
    title: "Pertanian & Greenhouse",
    shortDesc: "Kegiatan budidaya sayuran dan tanaman produktif dengan memanfaatkan lahan perkotaan.",
    fullDesc: "Memanfaatkan teknik hidroponik DFT/NFT dan bedengan organik perkotaan untuk memproduksi aneka sayuran hijau segar tanpa pestisida kimia sintetis.",
    image: IMAGES.farming,
    highlights: ["Sistem Hidroponik Ramah Lahan", "Sayuran Segar Bebas Pestisida Sintetis", "Teknik Pembibitan & Persemaian Mandiri"],
    icon: "Sprout",
  },
  {
    id: "peternakan",
    number: "02",
    title: "Peternakan Ayam Petelur",
    shortDesc: "Mengenal proses pemeliharaan ayam petelur dan pemanfaatan hasil produksinya.",
    fullDesc: "Sistem kandang bersih tanpa bau menyengat dengan pakan fermentasi terukur, menghasilkan telur segar bernutrisi tinggi setiap hari untuk warga sekitar.",
    image: IMAGES.poultry,
    highlights: ["Kandang Terawat Higienis & Minim Bau", "Pakan Campuran Organik Alami", "Panen Telur Segar Harian"],
    icon: "Egg",
  },
  {
    id: "perikanan",
    number: "03",
    title: "Budidaya Ikan Lele",
    shortDesc: "Mengenal budidaya ikan lele, pengelolaan kolam, dan potensi perikanan masyarakat.",
    fullDesc: "Penerapan kolam bundar terpal dengan sistem bioflok ramah lingkungan, efisien air, serta menghasilkan ikan lele berkualitas tinggi dengan daging bersih.",
    image: IMAGES.catfish,
    highlights: ["Sistem Kolam Terpal Bioflok", "Sirkulasi Air Hemat & Berkelanjutan", "Ikan Konsumsi Berkualitas Bersih"],
    icon: "Fish",
  },
  {
    id: "kompos",
    number: "04",
    title: "Pengolahan Kompos",
    shortDesc: "Mengenal proses pengolahan kotoran ayam menjadi pupuk fermentasi atau kompos yang bermanfaat bagi tanaman.",
    fullDesc: "Konsep circular economy nyata: kotoran ayam dan sisa panen sayuran diolah melalui proses dekomposisi mikroorganisme menjadi pupuk organik padat dan cair.",
    image: IMAGES.compost,
    highlights: ["Daur Ulang Limbah Zero-Waste", "Proses Fermentasi Dekomposisi Alami", "Menyuburkan Tanah Tanpa Kimia Sintetis"],
    icon: "Recycle",
  },
];

export interface ProductItem {
  id: string;
  name: string;
  category: "Sayuran" | "Buah-buahan" | "Telur ayam" | "Ikan lele" | "Kompos & Pupuk";
  shortDesc: string;
  availability: "Tersedia" | "Pre-Order" | "Musiman";
  unit: string;
  image: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "p1",
    name: "Selada Keriting & Pakcoy Hidroponik",
    category: "Sayuran",
    shortDesc: "Dipetik langsung saat Anda memesan, renyah, manis alami, dan bersih bebas residu pestisida.",
    availability: "Tersedia",
    unit: "Per Ikat / 250 gram",
    image: IMAGES.farming,
  },
  {
    id: "p2",
    name: "Cabai Rawit & Kangkung Segar",
    category: "Sayuran",
    shortDesc: "Tanaman cabai dan sayuran daun hasil kebun perkotaan dengan pupuk kompos mandiri.",
    availability: "Tersedia",
    unit: "Per 500 gram",
    image: IMAGES.farming,
  },
  {
    id: "p3",
    name: "Melon Golden & Pepaya Urban",
    category: "Buah-buahan",
    shortDesc: "Buah manis segar hasil budidaya pot dan media greenhouse terpadu.",
    availability: "Musiman",
    unit: "Per Buah (Ditimbang)",
    image: IMAGES.farming,
  },
  {
    id: "p4",
    name: "Telur Ayam Segar Kampung & Omega",
    category: "Telur ayam",
    shortDesc: "Telur segar hasil pemeliharaan ayam sehat dengan pakan alami, cangkang kokoh dan kuning telur cerah.",
    availability: "Tersedia",
    unit: "Pack 10 Butir / Tray 30 Butir",
    image: IMAGES.poultry,
  },
  {
    id: "p5",
    name: "Ikan Lele Segar Siap Olah",
    category: "Ikan lele",
    shortDesc: "Ikan lele sehat dari kolam air mengalir bioflok, tidak berbau lumpur dan berprotein tinggi.",
    availability: "Tersedia",
    unit: "Per Kilogram (Isi 6-8 ekor)",
    image: IMAGES.catfish,
  },
  {
    id: "p6",
    name: "Pupuk Kompos Fermentasi Organik",
    category: "Kompos & Pupuk",
    shortDesc: "Pupuk matang kaya hara makro dan mikro, siap pakai untuk menyuburkan aneka tanaman hias maupun sayuran.",
    availability: "Tersedia",
    unit: "Karung 5 kg & 10 kg",
    image: IMAGES.compost,
  },
  {
    id: "p7",
    name: "Pupuk Organik Cair (POC Bio-Enzim)",
    category: "Kompos & Pupuk",
    shortDesc: "Konsentrat pupuk cair hasil fermentasi alami untuk percepatan pertumbuhan daun dan akar.",
    availability: "Tersedia",
    unit: "Botol 1 Liter",
    image: IMAGES.compost,
  },
];

export const EDUWISATA_ACTIVITIES = [
  {
    title: "Pengenalan Urban Farming",
    desc: "Mempelajari konsep pertanian perkotaan cerdas, pemanfaatan lahan terbatas, dan prinsip sirkular ramah lingkungan.",
    icon: "Compass",
  },
  {
    title: "Praktik Menanam & Panen",
    desc: "Turun langsung menyemai benih, merawat instalasi hidroponik, hingga memetik sayuran segar siap konsumsi.",
    icon: "Shovel",
  },
  {
    title: "Pengenalan Peternakan Ayam",
    desc: "Melihat dari dekat rutinitas pemeliharaan ayam petelur yang higienis dan pengalaman mengambil telur langsung dari kandang.",
    icon: "Sparkles",
  },
  {
    title: "Edukasi Budidaya Ikan Lele",
    desc: "Memahami parameter kualitas air, pemberian pakan tepat, dan tata kelola kolam bioflok yang hemat tempat.",
    icon: "Droplets",
  },
  {
    title: "Workshop Pengolahan Kompos",
    desc: "Praktik mencampur limbah organik, penambahan starter mikroba, hingga mengemas pupuk organik berkualitas tinggi.",
    icon: "Leaf",
  },
];

export const TARGET_VISITORS = [
  {
    category: "Sekolah (PAUD, SD, SMP, SMA)",
    desc: "Outing class edukatif mengenal siklus alam, ketahanan pangan, dan sains aplikatif di luar kelas.",
  },
  {
    category: "Mahasiswa & Akademisi",
    desc: "Studi lapangan, riset pertanian kota, pengabdian masyarakat, dan transfer inovasi teknologi pertanian.",
  },
  {
    category: "Komunitas & PKK",
    desc: "Pelatihan aplikatif urban farming yang dapat direplikasi langsung di pekarangan rumah masing-masing.",
  },
  {
    category: "Keluarga & Anak-Anak",
    desc: "Rekreasi alam akhir pekan yang seru, edukatif, mengenalkan anak pada asal-usul makanan sehat.",
  },
  {
    category: "Masyarakat Umum & Instansi",
    desc: "Kunjungan benchmark keberhasilan pemberdayaan ekonomi masyarakat berbasis ketahanan pangan mandiri.",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Pertanian" | "Peternakan" | "Perikanan" | "Pengolahan Kompos" | "Kegiatan Masyarakat";
  image: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Greenhouse Hidroponik Surabaya",
    category: "Pertanian",
    image: IMAGES.hero,
    caption: "Warga Poktan merawat rak hidroponik yang dipenuhi selada hijau segar di bawah naungan greenhouse bambu.",
  },
  {
    id: "g2",
    title: "Panen Sayuran Daun & Cabai",
    category: "Pertanian",
    image: IMAGES.farming,
    caption: "Hasil sayuran organik bebas pestisida kimia dengan daun rimbun dan buah cabai siap petik.",
  },
  {
    id: "g3",
    title: "Panen Telur Ayam Bersama",
    category: "Peternakan",
    image: IMAGES.poultry,
    caption: "Senyum pengelola saat mengumpulkan telur segar dari kandang petelur yang bersih dan sehat.",
  },
  {
    id: "g4",
    title: "Kolam Bundar Bioflok Lele",
    category: "Perikanan",
    image: IMAGES.catfish,
    caption: "Sistem bioflok mandiri dengan sirkulasi air efisien di tengah area hijau komunitas.",
  },
  {
    id: "g5",
    title: "Pemberian Nutrisi dari Kompos",
    category: "Pengolahan Kompos",
    image: IMAGES.compost,
    caption: "Pengolahan limbah kotoran dan dedaunan menjadi pupuk kompos hitam gembur kaya nutrisi.",
  },
  {
    id: "g6",
    title: "Pemberdayaan & Gotong Royong Warga",
    category: "Kegiatan Masyarakat",
    image: IMAGES.hero,
    caption: "Semangat kebersamaan warga Elok Green Lestari dalam menjaga ketahanan pangan lingkungan.",
  },
];
