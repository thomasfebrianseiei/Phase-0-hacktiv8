// Problem
// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string.
// Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang 
// dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada).
// Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

function groupAnimals(animals) {
    // you can only write your code here!
    var grupAkhir = [];

    for (var i=0; i<animals.length;i++) {
   
    
        var animalA = [];
        var animalC = [];
        var animalK = [];
        var animalU = [];
    
        for ( var j = 0; j < animals.length; j++) {
            if( animals[j][0] === 'u') {
            animalU.push(animals[j]);
            }else if(animals[j][0] === 'a') {
            animalA.push(animals[j]);
            }else if( animals[j][0] === 'c' ) {
             animalC.push(animals[j]);
            }else if( animals[j][0] === 'k') {
             animalK.push(animals[j]);
            } 
        }
    }
    grupAkhir.push(animalA);
    grupAkhir.push(animalC);
    grupAkhir.push(animalK);
    if (animalU.length !== 0){
    grupAkhir.push(animalU);
    }
return grupAkhir;
}

  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]