/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i=2; i<=100; i++) {
    let isPrime = true;

    if (i != 2 && i % 2 === 0 ) {
        let isPrime = false;
    }

    for (let j = 2; j <= Math.sqrt(i);  j++){
        if (i % j === 0) {
            isPrime = false;
        }
    }
    if(isPrime){
        process.stdout.write(i + ",");
    }
}
 

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop
let primeCounter = 0;
let fiftiethPrime = 1;

/// EDIT HERE
function isPrime(n){

    for(let k = 2; k <= Math.sqrt(n); k++){
        if(n%k == 0){
            return false;
        }
    }

    return true;
}

while (primeCounter < 50) {
    fiftiethPrime++;

    if(isPrime(fiftiethPrime))
        primeCounter++;
}
console.log(fiftiethPrime);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

let oddCounter = 0;
let fiftiethOdd = 0;

/// EDIT HERE
do {
    fiftiethOdd++;
    if(fiftiethOdd % 2)
        oddCounter++;

} while (oddCounter < 50);

console.log(fiftiethOdd);

// expected result: "12345"
