--------------------------------------Tugas 1--------------------------------------------

	1.Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?

	2.Mohon jelaskan arsitektur dari Node.js?

	3.Ape perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?

	4.Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

---------------------------------

  

-------------------------------------Jawaban-------------------------------------------
1.Javascript adalah bahasa pemrograman.

Node.js adalah runtime.

 
Javascript yang pada awalnya browser/client-side oriented, dengan menggunakan Node.js sebagai runtime kamu bisa menggunakan Javascript untuk melakukan berbagai proses di sisi server.

 
Node.js sendiri dibuat di atas V8 engine milik Chrome dan dengan menggunakan bahasa pemrograman C++

2. ![node js-architecture](https://user-images.githubusercontent.com/63898506/144838484-4ed4fca6-d17c-4971-a17c-50af6ae565f0.png)
3. ![node js-architecture](https://user-images.githubusercontent.com/63898506/144838484-4ed4fca6-d17c-4971-a17c-50af6ae565f0.png)
**![](https://lh6.googleusercontent.com/JSh5f84UHccS1QpDQxe-lrX8mo_g2S5adoAvE4L0Y97qqDRUw7Q9Y2o3KhWjxsKq2jvVEGd2fQ3JvQwSsMbAmAiLAprFnOlWNKPWEsAPWUTHLKlv_lQaVdbiX5sUdISIG1pBpYx3DGw)  
**


![Screenshot 2021-12-06 063330](https://user-images.githubusercontent.com/63898506/144839305-83fe8c54-a79f-4c45-8bf3-55bad21e5136.png)

Javascript menggunakan call stack untuk melakukan manajemen single thread. Ketika terdapat perintah baru maka akan ditambahkan (push) dan akan di keluarkan ketika perintahnya sudah selasai (pop)
Even Loop

  

Dengan menggunakan konsep arsitektur javascript, walaupun menggunakan single thread tetapi kita dapat melihat javascript seperti menggunakan multi thread

  

Terdapat event queue yang berguna sebagai penampung ketika terdapat perintah baru yang akan dieksekusi.

  

Event loop akan memfasilitasi kondisi ini, event loop akan memeriksa terus menerus, ketika antrian kosong di call stack maka akan menambah antrian baru dari event queue sampai semua perintah selesai di eksekusi.
Server side scripting

  

Sejatinya javascript merupakan bahasa pemrograman yang digunakan di front end side. Sehingga kita hanya bisa mengerjakan javascript dengan menggunakan browser untuk menampilkan hasil eksekusinya.

Tetapi dengan menggunakan NodeJS kita dapat menjalankan javascript di server side menggunakan terminal command line menggunakan perintah “node”.

![](https://lh3.googleusercontent.com/I1qiINUISWafvAjKIQ-Q5zC8BMMV_TbIlZ2B0QHzp2CmlvsrAxZazsTfFMXXAhA8jf-OksVoaDjRi-gG5HTtyGHvrL9Mgrtp9tU21YAeRc67FMPG6dZtAzS1k9xsM5Li2EIEvnz3-JU)
3.Built-in Module adalah dimana sudah bawaan dari node js
External Module adalah diaman module nya itu mengambil dari luar yang tidak ada di node js
Custom Module adalah dimana kita bisa mengubah module sesuai kita inginkan
