/*
 [Instruction]
 Gunakan algoritma bubble sort, bisa cari di google.
 untuk visualisasi memahami bubble sort, bisa dilihat di https://youtu.be/JP5KkzdUEYI
*/

// function bubbleSort(arr) {
//   var arr2 =[]
//   var pos = 0 ;
//   var max=arr[0];
//   var min=arr[0];
//   //mencari max
//   for(var i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
//   }
//   //mencari dan memasukan nilai min
//   for(var j=0;j<arr.length;j++){
//     for(var k=0;k<arr.length;k++){
//         if(arr[k]!== null){
//             if(min>arr[k]){
//                 min=arr[k];
//                 pos =k;
//             }
//         }
//     }
//     arr2[j]=min;
//     arr[pos]=null;
//     min=max;
//   }
//   return arr2;
// }
function bubbleSort(arr) {
  //loop untuk length
  var loop = arr.length;  
  //loop untuk loop length
  for(var i = 0; i < loop; i++) {
    //cycle arr items
    for (var j = 0; j < (loop - i - 1); j++) { 
      //Compare the adjacent positions
      if(arr[j] > arr[j+1]) {
        //swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
return arr;
}

console.log(bubbleSort([4, 25, 1, 6, 2])); // [ 1, 2, 4, 6, 25 ]
console.log(bubbleSort([13, 1, 9, 38, 8, 3, 1])); // [ 1, 2, 4, 6, 25 ]
console.table(bubbleSort(
    [1648,
        5432,
        8047,
        3368,
        4652,
        5397,
        4963,
        8592,
        8175,
        7271,
        4301,
        984,
        4643,
        4960,
        6490,
        8470,
        4522,
        8264,
        9547,
        8523,
        4928,
        5216,
        5417,
        2608,
        2009,
        4296,
        3519,
        9542,
        2170,
        6262,
        3731,
        4379,
        2102,
        6482,
        5151,
        1425,
        3911,
        9618,
        8734,
        6810,
        2238,
        7837,
        9323,
        5426,
        2993,
        464,
        9005,
        5511,
        9741,
        4608,
        2795,
        9510,
        870,
        5829,
        9288,
        8967,
        1566,
        5666,
        7631,
        2825,
        7331,
        3846,
        986,
        741,
        1613,
        1561,
        3896,
        4596,
        4710,
        5027,
        1525,
        7360,
        4153,
        2165,
        3993,
        3317,
        3932,
        3879,
        4916,
        2631,
        4728,
        787,
        446,
        8110,
        1272,
        453,
        8952,
        8632,
        2006,
        280,
        4362,
        5882,
        1810,
        5902,
        5203,
        4511,
        7636,
        201,
        2193,
        9522,
        8291]));

/*
 [ 201,
280,
446,
453,
464,
741,
787,
870,
984,
986,
1272,
1425,
1525,
1561,
1566,
1613,
1648,
1810,
2006,
2009,
2102,
2165,
2170,
2193,
2238,
2608,
2631,
2795,
2825,
2993,
3317,
3368,
3519,
3731,
3846,
3879,
3896,
3911,
3932,
3993,
4153,
4296,
4301,
4362,
4379,
4511,
4522,
4596,
4608,
4643,
4652,
4710,
4728,
4916,
4928,
4960,
4963,
5027,
5151,
5203,
5216,
5397,
5417,
5426,
5432,
5511,
5666,
5829,
5882,
5902,
6262,
6482,
6490,
6810,
7271,
7331,
7360,
7631,
7636,
7837,
8047,
8110,
8175,
8264,
8291,
8470,
8523,
8592,
8632,
8734,
8952,
8967,
9005,
9288,
9323,
9510,
9522,
9542,
9547,
9618,
9741]
 */
