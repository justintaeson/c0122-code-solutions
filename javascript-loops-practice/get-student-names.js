/* exported getStudentNames */

function getStudentNames(students) {
  var studentNamesArray = [];
  for (let i = 0; i < students.length; i++) {
    studentNamesArray.push(students[i].name);
  }
  return studentNamesArray;
}
