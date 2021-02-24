/*
Transcribes a character list representing DNA nucleotides to RNA

C -> G
G -> C
A -> U
T -> A

ex: input = 'ACTG', output = 'UGAC'
 */


/* function to iterate through string and return converted result or invalid sequence error */
const toRNA = (string) => {
  // initialize an object with corresponding values
  const convert = {
    "A" : "U",
    "T" : "A", 
    "C" : "G", 
    "G" : "C"
  }
  //initialize an empty string for result
  let result = '';
  //iterate through string
    //add converted letter to result if key exists
    //else return "Invalid DNA sequence."
  for(let i=0; i < string.length; i++) {
    if (convert[string[i]]) result += convert[string[i]]
    else return "Invalid DNA sequence."
  }
  //return converted result string
  return result
};

console.log(toRNA('A')) // expect 'U'
console.log(toRNA('ACTG')) // expect 'UGAC'
console.log(toRNA('R')) //expect 'Invalid DNA sequence.'