// Problem
// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa
// array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan)
// First Name, Last Name, Gender dan Birth Year. Fungsi ini akan menampilkan object literal
// yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan
// dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir
// lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

// Contoh jika arr inputan adalah
// [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

// Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
// John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }

function changeMe(arr) {
    // you can only write your code here!
    var result = {}
    var x = 0;
    for(var j = 0; j < arr.length; j++){
        x++
        result.firstName = arr[j][0]
        result.lastName = arr[j][1]
        result.gender = arr[j][2];
        if(arr[j][3] === undefined){
            result.age = 'Invalid Birth Year'
        }else {
            result.age = 2019 - arr[j][3];
        }
    console.log(x+'. '+arr[j][0]+' '+arr[j][1]+' :')
    console.log(result)
    }
    
    if(arr.length === 0){
      console.log('""')
    }
}

  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""