var student = {
  firstName: 'Heesoo',
  lastName: 'Kim',
  age: '24'
};

var fullName = student.firstName + student.lastName;
console.log('the value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';
student.height = '5ft 10in';

console.log('the value of student.livesInIrvine:', student.livesInIrvine);
console.log('the value of student.previousOccupation:', student.previousOccupation);
console.log('student information: ', student);

var vehicle = {
  make: 'Tesla',
  model: 'Model S',
  year: '2021'
};

vehicle['color'] = 'white';
vehicle['isCovertible'] = false;

console.log('the value of vehicle["color"]:', vehicle['color']);
console.log('the value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('the value of vehicle:', vehicle);

var pet = {
  name: 'Fighter',
  type: 'German Shepherd',
  weight: '65 lbs'
};

delete pet.name;
delete pet.type;

console.log('the value of pet:', pet);
