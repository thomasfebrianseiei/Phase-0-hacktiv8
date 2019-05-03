// Problem
// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
//  Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], 
//  maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
    // you can only write your code here!
//Mencari Posisi O
    var posisiO = arr.indexOf('o');
//Posisi X
    var posisiX = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 'x'){
        posisiX.push(i);
        }
    }
//Jarak O ke X
    var jarak = [];
    for(var j = 0; j < posisiX.length; j++) {
    var bedaJarak = Math.abs(posisiX[j] - posisiO);
    jarak.push(bedaJarak);
    }
  
    if(jarak.length === 0){
    return 0;
    }else {
        var jarak2 = jarak[0];
        for (var k = 0; k < jarak.length; k++) {
            if(jarak[k] < jarak2){
            jarak2 = jarak[k];
            }
        }
    }
  return jarak2
}

// TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2