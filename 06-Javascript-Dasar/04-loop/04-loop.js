/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i=2; i<=100; i++) {
    let isPrime = true;

    if (i != 2 && i % 2 === 0 ) {
        let isPrime = false;
        continue;
    }

    for (let j = 2; j < i;  j++){
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
        if (isPrime) {
            console.log(i);
        }
}
 

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop

let primeCounter = 50;
let interation2 = 2;
const fiftiethPrime=0;

/// EDIT HERE
while (fiftiethPrime < primeCounter) {
    let isPrime = true;

    if (interation2 != 2 && interation2 % 2 === 0 ) {
        let isPrime = false;
        interation2++;
        continue;
    }

    for (let j = 2; j < interation2;  j++){
        if (interation2 % j === 0) {
            isPrime = false;
            break;
        }
    }
        if (isPrime) {
            fiftiethPrime++;
            interation2 = interation2;
        }
        interation2++;
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

let oddCounter = 50;
const fiftiethOdd=1;

let i = 1;
let addCounter = 0;

do {
  const isOdd = i % 2;
  if (isOdd) {
      addCounter++;
      fiftiethOdd = i; 
  }
  i++;
} while (addCounter < oddCounter);

console.log(fiftiethOdd);

// expected result: "12345"
