/// Soal - 01
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini? Hasilnya Mariah
/// - apa yang akan tampil didalam console.log ? Tampilannya Mariah
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name? karena yang
/// yang bakal di eksekusi terlebih dahulu adalah name dari lokal dulu jika lokal ada isinya maka tidak
/// melihat lagi variable global

/// WRITE YOUR ANALYSIS HERE
/*
ada 3 scope
    Block scope
        Variables declared inside a { } blok tidak dapat diakses dari luar blok: Lingkup fungsi
    Function scope
        Variabel yang didefinisikan di dalam suatu fungsi tidak dapat diakses (terlihat) dari luar fungsi.
    Global scope
        Variabel yang dideklarasikan di luar fungsi, menjadi GLOBAL.

https://www.w3schools.com/js/js_scope.asp
*/

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
