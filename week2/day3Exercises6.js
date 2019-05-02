// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung 
// mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

console.log('LOOPING PERTAMA')
var ulang = 2 ;
while(ulang <= 20){
  console.log(ulang + ' I love coding');
ulang+=2
}
console.log('LOOPING KEDUA')
while(ulang >= 2){
  console.log(ulang + ' I will become fullstack develope');
ulang-=2
}


// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju
// dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

// Hints
// Operator ++ disebut dengan operator Increment Operator -- disebut dengan operator Decrement

console.log('LOOPING PERTAMA')
var ulang2;
for (ulang2 = 1 ; ulang2 <= 20; ulang2++){
  console.log(ulang2 + ' I love coding');

}
console.log('LOOPING KEDUA')
for (ulang2 = 20 ; ulang2 >=1; ulang2--){
  console.log(ulang2 + ' I will become fullstack develope');
}


// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3" dan seterusnya.

//genap ganjil
for (var i = 1; i <= 100 ; i ++) {
    if(i % 2 === 0){
      console.log ( 'GENAP')
    } else{
      console.log ('GANJIL')
      }
  }

// penambahan 2 kelipatan 3  
for (var i = 1; i <=100; i+= 2){
    if (i % 3 === 0){
     console.log (i + ' KELIPATAN ' + '3') 
    } else {
      console.log('""')
    }
}

// penambahan 5 kelipatan 6
for (var i = 1; i <=100; i+= 5){
    if (i % 6 === 0){
     console.log (i + ' KELIPATAN ' + '6') 
    } else {
      console.log('""')
    }
}

//penambahan 9 kelipatan 10
for (var i = 1; i <=100; i+= 9){
    if (i % 10 === 0){
     console.log (i + ' KELIPATAN ' + '10') 
    } else {
      console.log('""')
    }
}
