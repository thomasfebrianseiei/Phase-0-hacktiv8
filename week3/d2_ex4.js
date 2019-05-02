// Directions
//contoh output
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
// Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

// Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
// Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.

// Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
// Format tanggal pada data adalah dd-mm-YYYY
// Misal angka bulan 01, tuliskan "Januari"
// Gunakan switch case untuk menuliskan bulan di atas.
// Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

// Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

// Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

// Test-case
// Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

// var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
// dataHandling2(input);

// /**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah
//  */

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  var paramName = input.slice(1, 2).toString();
  
    input = input.map(item => {
    if (item === paramName) {
        item = paramName.concat('Elsharawy');
    }
    if (item === input.slice(2, 3).toString()) {
        item = 'Provinsi '.concat(input.slice(2, 3).toString());
    }
    return item;
    });
  input.splice(4, 0, 'Pria', 'SMA Internasional Metro');
  input.pop();
  console.log(input)
  
  switch (Number(input.slice(3, 4).toString().split('/')[1])) {
    case 1: console.log('Januari'); break;
    case 2: console.log('Februari'); break;
    case 3: console.log('Maret'); break;
    case 4: console.log('April'); break;
    case 5: console.log('Mei'); break;
    case 6: console.log('Juni'); break;
    case 7: console.log('Juli'); break;
    case 8: console.log('Agustus'); break;
    case 9: console.log('September'); break;
    case 10: console.log('Oktober'); break;
    case 11: console.log('November'); break;
    case 12: console.log('Desember'); break;
    default : console.log('Bulan invalid');
  }
  console.log(input.slice(3, 4).join().split('/').sort(function(a,b) {return b-a;}))
  console.log(input.slice(3, 4).join().split('/').join('-'));
  console.log(paramName);
}
dataHandling2(input)