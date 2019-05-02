
// Problem
// Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array
// yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap 
// nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri.
// Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24],
// karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.

function perkalianUnik(arr) { 
  var arr1 = [];
  var arr2 = arr.slice();
for(var a = 0; a < arr.length; a++){
    arr.splice(a,1);
    var x = 1;
      for(var z = 0; z < arr.length; z++){
			  x = x*arr[z];
      }
		arr1 [a] = x;
		arr.splice(a,0,arr2[a]);
   }
  return arr1 ;
}
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

// cara 2
// function perkalianUnik(arr) {
//     // you can only write your code here!
//    var newArr = [];
//    for (var i =0; i < arr.length; i++){
//     var newNumber = 1;
//         for (var j = 0; j < arr.length; j++){
//             if (i !== j){
//             newNumber *= arr[j]
//             }
//         }
//      newArr.push(newNumber);
//    }
    
//     return newArr;
// }