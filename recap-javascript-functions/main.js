function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('The result of converting minutes to seconds: ', convertMinutesToSecondsResult);

function getArea(width, height) {
  const area = width * height;
  return area;
}

const getAreaResult = getArea(17, 42);
console.log('The area of the triangle:', getAreaResult);

function getFirstName(person) {
  const justFirstName = person.firstName;
  return justFirstName;
}

const getFirstNameResult = getFirstName({ firstName: 'Elon', lastName: 'Musk' });
console.log('First name is:', getFirstNameResult);

function getLastElement(array) {
  const last = array[array.length - 1];
  return last;
}

const getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accesories']);
console.log('The last element is:', getLastElementResult);
