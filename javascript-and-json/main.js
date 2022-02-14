var booksArray = [
  {
    isbn: '1948576940372',
    title: 'How to be Good at Coding',
    author: 'Hubert Thomas-Mike Lee'
  },
  {
    isbn: '1928475869371',
    title: 'How to be Great at Coding',
    author: 'Chris Samuel Smith'
  },
  {
    isbn: '172648593721',
    title: 'How to be GOD at Coding',
    author: 'Java Script'
  }
];

console.log('Value of booksArray:', booksArray);
console.log('Value of booksArray Type:', typeof booksArray);

var jsonArray = JSON.stringify(booksArray);
console.log('Value of jsonArray:', jsonArray);
console.log('Value of jsonArray type:', typeof jsonArray);

var jsonStudentID = '{"studentID":12456789}';
console.log('Value of jsonStudentID:', jsonStudentID);
console.log('Value of jsonStudentID type:', typeof jsonStudentID);

var jsonObject = JSON.parse(jsonStudentID);
console.log('Value of jsonObject:', jsonObject);
console.log('Value of jsonObject type:', typeof jsonObject);
