# 04-more-advanced

1.What is the difference between `git reset` and `git revert`. When would you use one over the other?
Jika menggunakan git Reset, commit terakhir akan hilang/terhapus. Sedangkan jika menggunakan git revert commit terakhirnya tetap ada, hanya mundur saja.

2.What is the difference between `git merge` and `git rebase`. When would you use one over the other?
Membaca manual Git resmi menyatakan bahwa rebase "menerapkan kembali komit di atas cabang dasar lain" , sedangkan merge "menggabungkan dua atau lebih sejarah pengembangan bersama-sama" . Dengan kata lain, perbedaan utama antara merge dan rebase adalah bahwa sementara merge mempertahankan histori saat terjadi, rebase menulis ulang .

3.What is the difference between `git stash pop` and `git stash apply`. When would you use one over the other?
`git stash pop` -> hapus dari daftar simpanan

`git stash apply` -> simpan di daftar simpanan

4.What kinds of things can you do in `interactive` mode when rebasing?
Rebasing interaktif dapat digunakan untuk mengubah komit dalam banyak cara seperti editing, deleting, and squashing.