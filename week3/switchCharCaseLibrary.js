/**
 [Instruction]
 Ubah huruf kecil menjadi besar, dan besar menjadi kecil.
 dilarang menggunakan .toUpperCase() dan .toLowerCase()
 gunakan teknik alphabet library!
 */

function switchCharCase(words) {
    var library ='abcdefghijklmnopqrstuvwxyz';
    var capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var alpabet = '';
    var find = false;
      
      for (var i = 0; i < words.length; i++) {
        for (var x = 0; x < library.length; x++) {
          if (words[i] === library[x]) {
            alpabet += capital[x];
            find = true;
          }else if (words[i]===capital[x]){
            alpabet += library[x];
            find = true;
          }
        }
        if (find !== true) {
            alpabet += words[i];
          }
        find = false;
      }
      return alpabet;
}
   


console.log(switchCharCase('aXBcEf')); //AxbCeF
console.log(switchCharCase('sAyA buKAN AnAK AlAy')); //SaYa BUkan aNak aLaY