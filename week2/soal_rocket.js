// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).
Contoh 1
--------
input: 3
x
oo
xxx
oo
x

Contoh 2
--------
input: 6
tampilan:
x
oo
xxx
oooo
xxxxx
oooooo
xxxxx
oooo
xxx
oo
x

*/

function drawLadder(row) {
  // hanya code disini
  var output ='';
  var output2 ='';
  for (var i = 1; i <= row; i++) {
    for (var j = 1; j <= i; j++) {
      if (i % 2 !== 0)
      output += 'x';
      else if (i % 2 === 0)
      output += 'o';
      if (i <row  && j % i === 0) {
      output +='\n'
      }
    }
  }
  for (var k = (row-1); k >= 0; k--) {
    for (var l = 1; l <= k; l++) {
      if (k % 2 !== 0)
      output2 += 'x';
      else if (k % 2 === 0)
      output2 += 'o';
      if (k > 1 && l % k === 0) {
      output2 +='\n'
      }
    }
  }

  return output +'\n'+ output2;
}


console.log (drawLadder(6));
console.log ('\n')
console.log (drawLadder(3));