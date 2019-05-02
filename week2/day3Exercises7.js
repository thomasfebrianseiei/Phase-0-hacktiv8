// 1. Menyusun Barisan Bintang
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan
//  asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

// tanpa function
console.log('tanpa function')
var rows1= 5;
var counter;

for (counter = 1 ; counter <= rows1 ; counter++){
  console.log('*');
}

// dengan function
console.log('dengan function')
function asterik(counter,rows1){
  var bintang = ''
  for (var i = counter ; i <= rows1 ; i++){
    bintang += "*";
    if (i < rows1){
    bintang +='\n'
    }
  }
  return bintang
}
console.log(asterik(1,5))


// 2. Menyusun Barisan Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks
// (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau
// loop di dalam loop untuk menyelesaikan kasus ini.

// tanpa function
console.log('tanpa function')
var rows2 = 5;
for (var i = 1; i <= rows2 ; i++) {
  var asteriks = '*';
  for (var j = 2; j <= rows2 ; j++) {
  asteriks = asteriks + '*';
 }
  console.log(asteriks);
}

// dengan function
console.log('dengan function')
function print5 (rows2) {
    var asteriks = '';
    for (var i = 1; i <= rows2 ; i++) {
      for (var j = 1; j <= rows2 ; j++) {
      asteriks += '*';
        if (i < rows2  && j % rows2 === 0) {
        asteriks +='\n'
        }
      }
    }
    return asteriks
  }

  
console.log(print5(5))

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan 
// asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris.
// Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya.
// Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

// tanpa function
console.log('tanpa function')
var rows3 =5;
for (var i = 1; i <= rows3; i++) {
  var output = '';
  for (var j = 1; j <= i; j++) {
    output+= '* ';
  }
	console.log(output);
}

// dengan function
console.log('dengan function')
function printSegitiga(rows3) {
  var output ='';
  for (var i = 1; i <= rows3; i++) {
    for (var j = 1; j <= i; j++) {
    output += '* ';
      if (i < rows3  && j % i === 0) {
      output +='\n'
      }
	  }
  }
  return output;
}
console.log(printSegitiga(5))
