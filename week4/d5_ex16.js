// Logic Challenge: Graduates
// Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

// Student dapat dinyatakan lulus apabila score lebih besar dari 75.
// Masukkan name dan score dari student ke class yang dia ikuti.
// Student yang tidak lulus tidak perlu ditampilkan.
// Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

// {
//   <class>: [
//     { name: <name>, score: <score> },
//     ...
//   ],
//   <class>: [
//     { name: <name>, score: <score> },
//     ...
//   ],
//   <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
// }

function graduates (students) {
     // Code disini

    // VARIABLE INITIALIZATION
    var listClass = [],
        school = {};
    
    // CREATING LIST OF CLASSES FROM INPUT
    for (var i=0; i<students.length; i++) { 
        var studentClass = students[i].class;
        if (listClass[i]!==studentClass) {
            listClass.push(studentClass);
        } 
    }

    // CREATE OBJECT CLASSES
    for (var j=0; j<listClass.length; j++) {
        var schoolKey = listClass[j];
        school[schoolKey] = [];
    }
    
    //SEPARATING STUDENT INTO EACH OBJECT OF CLASSES
    for (var key in school) {
        for (var k=0; k<students.length; k++) {
            var objStudents = {}
            objStudents.name = students[k].name;
            objStudents.score = students[k].score;
            if (students[k].score > 75) {
                if (students[k].class === key) {
                    school[key].push(objStudents);
                }
            }
        }
    }
    return school;
}
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}