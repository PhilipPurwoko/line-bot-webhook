## Tentang Bot
Dapatkan informasi terkini Covid-19 di Indonesia langsung melalui LINE. Tersedia dalam waktu 24 jam penuh secara GRATIS.

## Fitur bot :
1. Menampilkan apa itu Covid-19 secara garis besar
2. Menampilkan protokol kesehatan untuk memutus penularan
3. Menampilkan data statistik Covid-19

## Cara Menggunakan :
Anda dapat menggunakan bot dengan mengirim pesan.
- `Cara Pakai` atau `Panduan` untuk menampilkan panduan
- `Menu` untuk menampilkan menu utama
- `Info` untuk menampilkan ikhtisar Covid-19
- `Protokol` untuk menampilkan informasi protokol kesehatan
- `Data` atau `Covid` untuk menampilkan data statistik Covid

## Tentang Pembuat Bot :
Philip Purwoko, mahasiswa di Universitas Sebelas Maret @philippurwoko

## Laporkan Masalah :
Silakan jelaskan permasalahan yang terjadi pada [halaman berikut](https://github.com/PhilipPurwoko/line-bot-webhook/issues/new)

## Konfigurasi
### `bottender.config.js`

File konfigurasi Bottender. Anda dapat menggunakan file ini untuk menyediakan pengaturan untuk penyimpanan sesi dan saluran.

### `.env`

Kami menggunakan dotenv untuk memuat environment variable Anda saat mengembangkan aplikasi. Untuk membuat bot berfungsi, Anda harus memasukkan environment variable yang diperlukan ke dalam file `.env`

## Scripts
### `npm run dev`

Menjalankan aplikasi dalam mode development. Menggunakan nodemon untuk yang dapat melakukan hot reload jika merubah kode. Secara default, server berjalan pada [http://localhost:5000](http://localhost:5000) dan ngrok berjalan pada [http://localhost:4040](http://localhost:4040).

### `npm start`

Menjalankan aplikasi dalam mode produksi. Secara default, server berjalan pada [http://localhost:5000](http://localhost:5000).

### `npm run lint`

Menjalankan JS linter menggunakan [Eslint](https://eslint.org/).

### `npm test`

Menjalankan test cases menggunakan [Jest](https://jestjs.io/).
