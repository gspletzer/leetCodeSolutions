/*
Write a function that accepts an object and returns the value associated with the key 'Waldo'.
If the key 'Waldo' is not found, the function should return 'Where's Waldo?'.
*/

const DC = {
  'Bruce':'Wayne',
  'Harley':'Quinn'
};

const supernatural = {
  'Sam':'Winchester',
  'Dean':'Winchester',
  'Waldo':'unknown'
};

function findWaldo (obj) {
  if (obj.hasOwnProperty('Waldo')) return obj.Waldo;
  return "Where's Waldo?"
};

console.log(findWaldo(DC));
console.log(findWaldo(supernatural))