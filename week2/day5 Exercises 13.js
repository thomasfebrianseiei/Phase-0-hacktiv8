// Problem
// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    var jumX = ''
    var jumO = ''
    for (var i = 0; i < str.length ; i++){
    //jumlah 'x' dan 'o'
      if (str[i] === 'x' ){
        jumX++
      } else {
        jumO++
      }
    } 
    //membandingkan 
    if (jumX === jumO) {
      return true
    }else{
      return false
    }
}
  
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true