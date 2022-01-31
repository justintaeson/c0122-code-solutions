var student = {
  firstName: 'Justin',
  lastName: 'Son',
  age: '25'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Client Success Manager';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Tesla',
  mdoel: 'Plaid S',
  year: '2021'
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of vehicle[color]:', vehicle['color']);
console.log('value of vehicle[isConvertible]:', vehicle['isConvertible']);

var pet = {
  name: 'Boogie',
  type: 'French Bulldog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
