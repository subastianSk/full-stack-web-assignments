/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan
///   pajak senilai 10% dari total penghasilanmu saat ini apabila ia memiliki penghasilan
///   lebih dari Rp 5.000.000, apabila kurang maka ia dibebaskan dari pajak atau bernilai 0

/// EDIT HERE
function taxCalc(salary) {
    if(salary <= 5*1e6){
        return 0;
    }
    if(salary <= 1e7){
        return salary*0.05;
    }
    if(salary <= 2*1e7){
        return salary*0.1;
    }
    return salary*0.2;
}
console.log((taxCalc(4500000)));

/// Soal - 02
/// $$BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung $$BMI seseorang dengan detail sebagai berikut:

/// Parameter
// / - (Number) `height` ⇒ tinggi seseorang (kg)
// / - (Number) `weight` ⇒ berat badan seseorang (cm) 

// / Return Value
// / - (Number) hasil kalkulasi menggunakan formula $$BMI
// /   height / weight^2 * 10000

/// EDIT HERE
function check$BMI(weight,height) { 
    $bmi = (weight/(height*height)) * 10000;

    if ($bmi < 18.5){
        return "under weight";
    }
    if ($bmi < 24.9){
        return "normal";
    }
    if ($bmi < 29.9){
        return "over weight";
    }
    if ($bmi < 34.9){
        return "obese";
    }
    return "extremely obese";
}
console.log(check$BMI(80,170));

/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(str) {
    let space = true;
    for(let i=0; i < str.length; i++){
        if(space){
            space = false;
            str = str.slice(0,i) + str.charAt(i).toUpperCase() + str.slice(i+1);
        }
        if(str[i]==" "){
            space = true;
        }
    }
    return str;
}
console.log(convToUpperCase("hello bandung"));

/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan huruf pertama yang tidak kembar

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya
/// - kembalikan huruf yang tidak sama apabila kita menemukannya
/// - jika tidak kita bisa mengembalikan string kosong

/// EDIT HERE
function firstNonRepeatedChar(word) {
    let huruf;

    for (let index = 0; index < word.length; index++) {
        huruf = word[index];
        if(huruf == " "){
            return "kata tidak boleh dipisah";
        }
        
    }

    for (let index = 0; index < word.length; index++) {
        huruf = word[index];
        let cek = false;
        for (let j = 0; j < word.length; j++) {
            if(huruf == word[j] && j != index){
                cek = true;
                break;
            }
        }
        if(cek == false){
            return huruf;
            break;
        }
    }
    return "";
}

console.log(firstNonRepeatedChar("hello world"));
console.log(firstNonRepeatedChar("alloha"));
console.log(firstNonRepeatedChar("wooohoowh"));
