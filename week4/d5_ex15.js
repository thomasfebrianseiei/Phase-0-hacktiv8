// Logic Challenge: Highest Score
// Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

// Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

// {
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> }
// }

function highestScore (students) {
    // Code disini
    var listClass = [],
        results = {},
        className='';
  
    // Menentukan class
    for (var i = 0; i < students.length; i++) {
        className = students[i].class;
        if (listClass[i]!==className) {
            listClass.push(className);
        } 
    }
    // Ranking nilai
    for (var j = 0; j < listClass.length; j++) {
        var objStudents = {},
            highest = 0;
        for (var k = 0; k < students.length; k++) {
            if (listClass[j] === students[k].class && students[k].score > highest) {
                highest = students[k].score;
                objStudents.name = students[k].name;
                objStudents.score = students[k].score;
            }
            results[listClass[j]] = objStudents;
        }
    }
    if (students.length === 0) {
        console.log('');
        return {};
    }else{
        console.log('');
        return results;
    }
}
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}