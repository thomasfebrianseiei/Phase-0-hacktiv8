/*
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka.
Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. 
Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit. 
Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

Contoh:

3 => 3, karena sudah satu digit 24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8. 
654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit,
maka hasilnya adalah 0.
*/

function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (angka<10){
        return angka;
    }else{
        var angka1 = Math.floor(angka / 10);
        var angka2 = angka % 10;
        var hasil = kaliTerusRekursif(angka1);
        return kaliTerusRekursif(angka2 * hasil);
    }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6