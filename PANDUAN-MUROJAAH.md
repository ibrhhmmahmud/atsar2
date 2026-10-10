# Panduan Pencatatan Murojaah — Atsar V2.2

## Cara pakai

1. Buka **Murojaah** dari navigasi bawah, atau tekan **+ Catat murojaah hari ini** di Beranda.
2. Pilih **Per Surah** atau **Per Juz**, kemudian pilih nama surah / nomor juz.
3. Tentukan tanggal. Anda boleh mencatat sesi hari ini maupun tanggal sebelumnya.
4. Jika ingin merekam bagian tertentu, isi **pasangan angka** ayat awal–akhir (khusus surah) dan/atau halaman awal–akhir. Keduanya opsional, tetapi setiap pasangan harus lengkap dan urut.
5. Pilih kualitas hafalan: **Lemah**, **Cukup**, **Baik**, atau **Lancar**. Jadwal review tampil otomatis.
6. Isi catatan jika perlu, lalu tekan **Simpan catatan murojaah**.
7. Pada daftar **Perlu diulang**, tekan **Ulang** untuk membuat sesi baru dengan surah/juz dan rentang yang sama.
8. Di **Riwayat Murojaah**, gunakan kotak pencarian, filter surah/juz, tombol **Edit** atau **Hapus**.

## Aturan jadwal ulang

- Lemah: 1 hari kemudian.
- Cukup: 3 hari kemudian.
- Baik: 7 hari kemudian.
- Lancar: 14 hari kemudian.

Interval di atas adalah **pengaturan praktis aplikasi**, bukan standar ilmiah atau keagamaan yang wajib. Jadwal ulang ditentukan dari tanggal sesi yang Anda catat. Jika sesi yang sama dicatat lagi, daftar jatuh tempo mengacu pada sesi paling akhir menurut tanggal.

## Keamanan data

Data tersimpan **lokal** di IndexedDB browser/HP yang membuka aplikasi. Tidak ada akun online, sinkronisasi cloud, atau backup otomatis. Agar catatan tidak hilang ketika pindah perangkat, sebelum upgrade atau mengganti HP lakukan **Profil → Data & Backup → Buat Backup JSON**.

Jika upgrade dari V2.1 pada **alamat web (origin/path) yang sama**, data lokal tetap tersedia. Backup JSON versi 2 juga tetap kompatibel. Jangan hapus data situs/browser tanpa mengekspor backup.

## Deploy GitHub Pages

Ekstrak ZIP. Upload **semua isinya** ke root repo GitHub (bukan direktori ZIP-nya). Aktifkan Pages dari branch `main` dan folder `/(root)`. Tunggu sampai GitHub selesai deploy, lalu buka alamat website yang sama seperti versi sebelumnya dan refresh untuk memuat aset V2.2.

## Batasan pengujian

Kode JavaScript telah dicek sintaksnya dan diuji menggunakan simulasi runtime untuk pencatatan, pengeditan, penghapusan, jadwal ulang, filter, dan validasi. Uji manual tampilan, IndexedDB dan pemasangan PWA di Chrome/Android perlu dilakukan setelah deployment.
