/*
============================
FIND AND COUNT VOCAL LETTER
============================

[INSTRUCTION]
Terdapat function findAndCountVocal yang menerima 1 parameter berupa string. Function akan mengembalikan
nilai berupa jumlah masing - masing huruf vocal pada sebuah kalimat.

[EXAMPLES]
input : 'Makan ayam, bebek, ikan, udang'
output: 'Terdapat 6 huruf a, 1 huruf i, 1 huruf u, 2 huruf e, dan 0 huruf o'

input: 'dfghdfgdfg'
output: 'Terdapat 0 huruf a, 0 huruf i, 0 huruf u, 0 huruf e, dan 0 huruf o'

input: 'ooo seram'
output: 'Terdapat 1 huruf a, 0 huruf i, 0 huruf u, 1 huruf e, dan 3 huruf o'

[RULES]
- Hanya boleh menggunakan looping for/while dan conditional untuk pengerjaan soal

*/

function findAndCountVocal(str) {
  // your code here
  var jumA = 0
  var jumI = 0
  var jumU = 0
  var jumE = 0
  var jumO = 0
  for ( var i = 0 ; i <= str.length ; i++){
    if (str[i] === 'a' ){
      jumA++
    }else if (str[i] === 'i'){
      jumI++
    }else if (str[i] === 'u'){
      jumU++
    }else if (str[i] === 'e'){
      jumE++
    }else if (str[i] === '0'){
      jumO++
    }
  }
  return ('Terdapat ' +jumA +' huruf a, ' +jumI +' huruf i, '+ jumU +' huruf u, ' +jumE +' huruf e, ' + ' dan ' +jumO +' huruf o')
}
  
 
 
console.log(findAndCountVocal('Makan ayam, bebek, ikan, udang'));
// 'Terdapat 6 huruf a, 1 huruf i, 1 huruf u, 2 huruf e, dan 0 huruf o'
console.log(findAndCountVocal('dfghdfgdfg'));
// 'Terdapat 0 huruf a, 0 huruf i, 0 huruf u, 0 huruf e, dan 0 huruf o'
console.log(findAndCountVocal('ooo seram'));
// 'Terdapat 1 huruf a, 0 huruf i, 0 huruf u, 1 huruf e, dan 3 huruf o'