#03-branch-and-merge

1.What does `git clean` do?
<br>
git clean adalah perintah bawaan untuk membersihkan file yang tidak terlacak. Hati-hati dengan yang ini, ini menghapus file secara permanen!

2.What do the `-d` and `-f` flags for git clean do?
<br>
`-d`
Biasanya, ketika tidak ada <path> yang ditentukan, git clean tidak akan muncul kembali ke direktori yang tidak terlacak untuk menghindari penghapusan terlalu banyak. Tentukan -d untuk membuatnya berulang ke direktori seperti itu juga. Jika ada jalur yang ditentukan, -d tidak relevan; semua file yang tidak terlacak yang cocok dengan jalur yang ditentukan (dengan pengecualian untuk direktori git bersarang yang disebutkan di bawah --force) akan dihapus.
<br>
`-f`
`--force`
Jika variabel konfigurasi Git clean.requireForce tidak disetel ke false, git clean akan menolak untuk menghapus file atau direktori kecuali diberikan -f atau -i. Git akan menolak untuk mengubah repositori git bersarang yang tidak terlacak (direktori dengan subdirektori .git) kecuali jika -f kedua diberikan.
<br>
3.What `git` command creates a branch?
  <br>
`git branch (brance baru)`
<br>
4.What is the difference between a fast-forward and recursive merge?
<br>
`fash-forward`
Seringkali kepala cabang saat ini adalah leluhur dari komit bernama. Ini adalah kasus yang paling umum terutama ketika dipanggil dari git pull: Anda melacak repositori upstream, Anda tidak melakukan perubahan lokal, dan sekarang Anda ingin memperbarui ke revisi upstream yang lebih baru. Dalam hal ini, komit baru tidak diperlukan untuk menyimpan riwayat gabungan; sebagai gantinya, HEAD (bersama dengan indeks) diperbarui untuk menunjuk pada komit bernama, tanpa membuat komit gabungan tambahan.
rekursif
<br>
Ini hanya dapat menyelesaikan dua kepala menggunakan algoritma penggabungan 3 arah. Ketika ada lebih dari satu nenek moyang yang sama yang dapat digunakan untuk penggabungan 3 arah, itu akan membuat pohon gabungan dari nenek moyang yang sama dan menggunakannya sebagai pohon referensi untuk penggabungan 3 arah. Ini telah dilaporkan menghasilkan lebih sedikit konflik penggabungan tanpa menyebabkan kesalahan penggabungan dengan pengujian yang dilakukan pada komit penggabungan aktual yang diambil dari riwayat pengembangan kernel Linux 2.6. Selain itu, ini dapat mendeteksi dan menangani penggabungan yang melibatkan penggantian nama, tetapi saat ini tidak dapat menggunakan salinan yang terdeteksi. Ini adalah strategi penggabungan default saat menarik atau menggabungkan satu cabang.
<br>
5.What `git` command changes to another branch?
<br>
`git checkout <branch name>`
<br>
6.How do you remove modified or deleted files from the working directory?
  <br>
`git add -u`
<br>
7.What `git` command deletes a branch?
  <br>
`git branch -b <branchname>`
<br>
8.What does the `git diff` command do?
  <br>
Perintah git diff akan membandingkan perubahan yang baru saja dilakukan dengan revisi/commit terakhir.
Melihat Perbandingan pada File
`git diff index.html`
Melihat Perbandingan antar Revisi/Commit
`git diff <nomer commit> <nomer commit>`
Perbandingan Antar Cabang (Branch)
`git diff <nama cabang> <nama cabang>`
<br>
9.How do you remove files from the staging area?
  <br>
`git-rm` - Remove files from the working tree and from the index
<br>
10.How do merge conflicts happen?
Anggaplah kita sudah selesai membuat fitur login di cabang halaman_login. Sekarang kita ingin Menggabungkannya denga cabang master (utama).
<br>
Pertama, kita harus pindah dulu ke cabang master.
git checkout master
Setelah itu, barulah kita bisa menggabungkan dengan perintah git merge.
git merge halaman_login
Sekarang lihat, file login.html sudah ada di cabang master.
