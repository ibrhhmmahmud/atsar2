# Upgrade ke Atsar V2.2

1. **Backup data** lewat Profil → Data & Backup → Buat Backup JSON sebelum mengganti berkas.
2. Unggah semua isi folder `atsar-v2.2` ke root repository GitHub Pages yang sama dengan sebelumnya; **jangan mengganti domain atau path deployment** supaya data lokal yang tersimpan di browser tetap terlihat.
3. Refresh aplikasi setelah deployment; bila versi lama masih muncul, tutup dan buka ulang PWA saat tersambung internet, lalu refresh.
4. Buka menu **Murojaah**, lalu catat hafalan melalui formulir. Edit, Hapus, dan Ulang ada pada riwayat dan daftar jatuh tempo.

**Penyimpanan:** data tetap di IndexedDB lokal browser (database `AtsarDB`) dan tidak otomatis ikut pindah jika ganti HP/browser/domain atau menghapus data situs. Gunakan fitur ekspor dan impor backup JSON.

**Kompatibilitas:** Versi IndexedDB tidak dinaikkan. Seluruh data, backup, dan entri murojaah V2.1 tetap bisa dibaca. Field `updatedAt` baru bersifat opsional.

**Batasan:** Aplikasi belum melakukan sinkronisasi cloud dan belum memiliki notifikasi terjadwal untuk pengulangan. Jadwal tampil ketika menu dibuka.
