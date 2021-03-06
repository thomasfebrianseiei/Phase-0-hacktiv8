// Problem
// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf 
// setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di 
// passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
    //code di sini
    var library ='aiueoAIUEO';
    var turn = 'bjvfpBVFP'
    var huruf = '';
    var find = false;
      
    for (var i = 0; i < str.length; i++) {
        for (var x = 0; x < library.length; x++) {
            if (str[i] === library[x]) {
                huruf += turn[x];
                find = true;
            }
        }
        if(find !== true) {
            huruf += str[i];
        }
        find = false;
    }
    return huruf;
}

  
function reverseWord (str) {
    //code di sini
    var newKata = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newKata += str[i];
    }
    return newKata;
}

  
function setLowerUpperCase (str) {
    //code di sini
    var library ='abcdefghijklmnopqrstuvwxyz';
    var capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var alpabet = '';
    var find = false;
      
    for (var i = 0; i < str.length; i++) {
        for (var x = 0; x < library.length; x++) {
            if (str[i] === library[x]) {
                alpabet += capital[x];
                find = true;
            }else if (str[i]===capital[x]){
                alpabet += library[x];
                find = true;
            }
        }
        if (find !== true) {
            alpabet += str[i];
        }
        find = false;
    }
    return alpabet;
}
  
function removeSpaces (str) {
    //code di sini
    var newStr= '';
    for (var i = 0; i < str.length; i++) {
        if (str[i]!==' '){
            newStr += str[i];
        }
    }
    return newStr
}
  
function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }else {
        var ubahHurufVokal = changeVocals(name);
        var balikKata = reverseWord(ubahHurufVokal);
        var balikLowerUpper = setLowerUpperCase(balikKata);
        var hapusSpasi = removeSpaces(balikLowerUpper);
        return hapusSpasi;
    }
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'