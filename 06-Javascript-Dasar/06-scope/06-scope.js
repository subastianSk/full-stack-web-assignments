/// Soal - 01
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini? Hasilnya Mariah
/// - apa yang akan tampil didalam console.log ? Tampilannya Mariah
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name? karena yang
/// yang bakal di eksekusi terlebih dahulu adalah name dari lokal dulu jika lokal ada isinya maka tidak
/// melihat lagi variable global

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan terjadi apabila kita mencoba menjalankan baris kode dibawah?
/// - apa alasan kenapa hal tersebut bisa terjadi?
///   - dari segi salaryWithVar
///   - dari segi salaryWithConst

/// WRITE YOUR ANALYSIS HERE

//alasanya adalah dimana mengecek terlebih dahulu variable lokalnya otomatis salaryWithVar yang outputnya undifine
console.log(salaryWithVar);// bisa berjalan karena merupakan variable lokal
console.log(salaryWithConst);// ini variable global

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

