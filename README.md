# 🎵 Suify — Modern Music Web App (Spotify-like UI)

Suify adalah aplikasi web pemutar musik sederhana yang dirancang menyerupai Spotify, dilengkapi halaman utama, playlist, dan profil.  
Project ini terdiri dari frontend modern berbasis HTML/CSS/JS dan backend berbasis Java Hibernate + MySQL.  
Aplikasi ini juga menyediakan fitur pembuatan laporan melalui **iReport (JasperReports)**.

---

## 📌 Fitur Utama Aplikasi
### 🔹 Frontend
- Tampilan modern (dark mode) mirip Spotify  
- Halaman:
  - **HomePage**
  - **PlaylistPage**
  - **ProfilePage**
- Navigasi sederhana menggunakan JavaScript
- Kompatibel dengan semua browser modern

### 🔹 Backend
- Dibangun dengan **Java Hibernate ORM**
- Menggunakan **MySQL (XAMPP)** sebagai database
- CRUD sederhana untuk:
  - Playlist
  - Music entry
- Komunikasi ke database menggunakan entity Hibernate, bukan query manual

### 🔹 Reporting (iReport 5.6.0)
- Menggunakan **JasperReports JRXML**
- Output:
  - PDF
  - HTML
  - XLSX
- Terhubung ke database `suifydb` melalui JDBC

---

## 🛠️ Teknologi yang Digunakan
| Bagian | Teknologi |
|--------|------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Java 11+, Hibernate ORM, Maven |
| Database | MySQL (XAMPP) |
| Reporting | iReport 5.6.0 + JasperReports 6.x |
| Build Tools | Maven |
| Version Control | Git + GitHub |

---

## 📂 Struktur Folder Project

