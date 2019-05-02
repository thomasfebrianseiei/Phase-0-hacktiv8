// Directions
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
//Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945.
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
// Gunakan switch case untuk kasus ini!
// Contoh:
// var hari = 21; var bulan = 1; var tahun = 1945;
// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
// Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi
// var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

var tanggal = 1;
var bulan = 4;
var tahun = 1900;


switch(bulan) {
  case 1:
    console.log(tanggal + ' ' + 'Januari' + ' ' + tahun);
  break;
  case 2:
    console.log(tanggal + ' ' + 'Februari' + ' ' + tahun);
  break;
  case 3:
    console.log(tanggal + ' ' + 'Maret' + ' ' + tahun);
  break;
  case 4:
    console.log(tanggal + ' ' + 'April' + ' ' + tahun);
  break;
  case 5:
    console.log(tanggal + ' ' + 'Mei' + ' ' + tahun);
  break;
  case 6:
    console.log(tanggal + ' ' + 'Juni' + ' ' + tahun);
  break;
  case 7:
    console.log(tanggal + ' ' + 'Juli' + ' ' + tahun);
  break;
  case 8:
    console.log(tanggal + ' ' + 'Agustus' + ' ' + tahun);
  break;
  case 9:
    console.log(tanggal + ' ' + 'Sebtember' + ' ' + tahun);
  break;
  case 10:
    console.log(tanggal + ' ' + 'Oktober' + ' ' + tahun);
  break;
  case 11:
    console.log(tanggal + ' ' + 'November' + ' ' + tahun);
  break;
  case 12:
    console.log(tanggal + ' ' + 'Desember' + ' ' + tahun);
  break;
  default:
    console.log("tidak ada");
  break;
} 