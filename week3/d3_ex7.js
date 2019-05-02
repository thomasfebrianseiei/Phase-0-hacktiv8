// Problem
// Diberikan sebuah function hitungJumlahKata(kalimat) yang menerima parameter berupa string yang merupakan
// sebuah kalimat. Function akan mengembalikan jumlah kata dari kalimat tersebut.
// Contoh, "I have a dream" akan menghasilkan nilai 4, karena memiliki 4 kata.

function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var jum = 1;  //jumlah spasi
  for(var i=0; i<kalimat.length; i++){
    if(kalimat[i] === ' '){
      jum++;
    }
  }
  
  return jum;
}
  


// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5