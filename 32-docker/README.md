1. Jelaskan apa yang dimaksud dengan container pada docker !

Wadah untuk mengemas dan menjalankan aplikasi. Wadah ini mencakup kode, runtime, system tools, dan pengaturan. Container hanya bisa mengakses resource yang telah ditentukan dalam Docker image. Container ini bertindak seperti mesin virtual, yang seperti simulasi komputer yang berjalan di dalam komputer asli pengembang. Pada mesin virtual ini nantinya semua kode sistem tersimpan untuk menjalankan simulasi seolah-olah adalah operasi sistem utama. Docker bertindak melakukan virtualisasi sistem operasi di dalam sistem operasi host. Docker membangun container berdasarkan gambar yang berisi kode program. Gambar atau images ini ditumpuk satu sama lain untuk lantas membangun pengaturan yang lengkap. Gambar bertumpuk dapat berbagi gambar inti yang sama, seperti cabang-cabang dari batang pohon yang sama. 

---------------------------------------------------------------------------------
2. Jelaskan apa perbedaan antara konsep container dengan virtual machine !
- VM memakan banyak resource dan waktu utk booting karena melakukan virtualisasi pada host hardware-nya. 
- Sedangkan container kebalikannya dari vm, container melakukan virtualisasi pada host OS-nya.

- VM hanya dapat berjalan pada hypervisor. Sedangkan Container tidak. Hal inilah yang menjadi perbedaan dasar dari arsitektur VM dan Container. Container dapat berjalan langsung diatas Sistem Operasi. Sedangkan VM tidak.

- Pada dasarnya VM menggunakan kernel tersendiri untuk menjalankan aplikasi didalamnya. Sedangkan container tidak diizinkan untuk mengakses kernel.

- VM (Virtual Machine) adalah perangkat lunak yang dapat mengisolasi sebuah mesin komputer serta dapat menjalankan semua program yang sama seperti pada komputer aslinya atau biasa disebut duplikat dari sebuah mesin komputer asli.

- Sedangkan, Container dalam bahasa komputer adalah suatu teknologi yang dapat mengisolasi sebuah proses dari proses yang lainnya yang akan mengisolasi library dan aplikasi yang digunakan saja tanpa mengisolasi seluruh komponen seperti perangkat keras, kernel, sistem operasi, dan lain - lain.


---------------------------------------------------------------------------------
3. Apa yang dimaksud dengan docker file ?
dokumen teks yang berisi semua perintah yang dapat dipanggil pengguna pada baris perintah untuk merakit gambar. Menggunakan docker build pengguna dapat membuat build otomatis yang mengeksekusi beberapa instruksi baris perintah secara berurutan.

---------------------------------------------------------------------------------
4. Apa yang dimaksud dengan docker registery ?
Sebuah Docker registery adalah penyimpanan dan distribusi sistem bernama  Docker gambar. Gambar yang sama mungkin memiliki beberapa versi berbeda, yang diidentifikasi oleh tagnya.

Docker registery diatur ke dalam  repositori Docker  , di mana repositori menyimpan semua versi gambar tertentu. Registery memungkinkan pengguna Docker untuk menarik gambar secara lokal, serta mendorong gambar baru ke registri (diberikan izin akses yang memadai bila berlaku).

---------------------------------------------------------------------------------
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
Docker-Compose adalah alat untuk mendefinisikan dan menjalankan satu atau beberapa container yang saling terkait dengan sebuah command.

Caranya:
1. Buat file NAMA_FILE.yaml di dalam project yang kamu buat
2. Tulis beberapa perintah ke dalam sana
3. Jalankan menggunakan perintah 
docker-compose NAMA_FILE.yaml up

---------------------------------------------------------------------------------