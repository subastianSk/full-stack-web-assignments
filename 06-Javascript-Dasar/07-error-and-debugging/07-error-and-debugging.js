/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - The TypeError objek merupakan kesalahan saat operasi tidak dapat dilakukan, 
/// biasanya (tapi tidak eksklusif) ketika nilai yang bukan dari jenis yang diharapkan.
/// - ReferenceErrorobjek merupakan kesalahan saat variabel tidak ada yang dirujuk
/// - RangeErrorobjek menunjukkan kesalahan ketika nilai yang tidak di set atau berkisar dari nilai yang diperbolehkan.
/// - Sebuah pengecualian yang disebabkan oleh penggunaan yang salah dari pra-didefinisikan sintaks . 
///   Kesalahan sintaks terdeteksi saat mengkompilasi atau mengurai kode sumber. Misalnya, 
///   jika Anda meninggalkan kurung kurawal ( }) saat mendefinisikan fungsi JavaScript , 
///   Anda memicu kesalahan sintaks. Alat pengembangan browser menampilkan kesalahan sintaks JavaScript dan CSS di konsol.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - yang sallryWithVar undefined dan sedangkan salaryWithConst error
/// - ReferenceError
/// - mengapa hal itu terjadi dikarenakan ketika di munculkan ke dalam otput yang terbaca duluan adalah
///   yang di atas, dikarenakan dikavascript yang diutamakan adalah varibel lokal dulu yang global maka
///   dibiarkan makanya yang dua error karena blm vatiable salaryWithConst tidak diinisialisasi

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
