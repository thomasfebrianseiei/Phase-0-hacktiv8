// Problem
// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a
// hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan
// apabila ada simbol ataupun angka didalam string tersebut.

function urutkanAbjad(str) {
    // you can only write your code here!
    var huruf = 'abcdefghijklmnopqrstuvwxyz',
        sort = '';
    for (let a = 0; a < huruf.length; a++) {
        for (let b = 0; b < str.length; b++) {
            if (huruf[a] === str[b]) {
                sort += huruf[a];
            }
        }
    }
    return sort ;
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'