// Problem
// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string.
// Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi 
// lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var library ='abcdefghijklmnopqrstuvwxyz';
    var capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var alpabet = '';
    var find = false;
      
    for (var i = 0; i < kalimat.length; i++) {
        for (var x = 0; x < library.length; x++) {
            if (kalimat[i] === library[x]) {
                alpabet += capital[x];
                find = true;
            }else if (kalimat[i]===capital[x]){
                alpabet += library[x];
                find = true;
            }
        }
        if (find !== true) {
            alpabet += kalimat[i];
        }
        find = false;
    }
    return alpabet;
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"