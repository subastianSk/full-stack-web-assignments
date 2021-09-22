/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

///Pegeluaran
const gundam = 750000;
const makan = 2000000;
const kost = 1000000;
const subscription = 250000;

//Gaji
const gajiPokok = 5000000;
const gajiBonus = gajiPokok * 0.1;
const gajiLembur = gajiPokok * 0.05;

/// Sisa Gaji
const totalGaji = gajiPokok + gajiBonus + gajiLembur;
const pengeluaran = gundam + makan + kost + subscription;
const sisaGaji= totalGaji-pengeluaran;


/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame= oneInString === oneInNumber;


/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher= studentA > studentB;


/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final= studentA === studentB;