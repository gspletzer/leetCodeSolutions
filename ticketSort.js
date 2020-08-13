/*
Input: one object that contains key/value pairs that represent plane tickets, where the key is he starting point and value is the destination.
-One key will never be a value and will be the ultimate starting point
-One value will never be a key and is the final destination
-Assume each city will only appear as a key and a value once 
Output: Any structure that displays the one way route that accurately connects all the flights from starting point to the final destination.
*/

const tickets = {
  "New York": "Charlotte",
  "Los Angeles": "Tokyo",
  Charlotte: "St. Louis",
  Tokyo: "Singapore",
  "St. Louis": "Detroit",
  Detroit: "Salt Lake City",
  Seattle: "Los Angeles",
  "Salt Lake City": "Seattle",
  Singapore: "Christchurch",
};

const sortTicket = (obj) => {
  //declare an empty array to hold the new list of tickets
  let travelOrder = [];

  //declare empty variable to hold name of starting destination
  let city;

  //isolate values of input object into an array
  const keys = Object.keys(obj);

  //isolate keys of input object into an array
  const values = Object.values(obj);

  /*initially did with forEach but change to for loop for advantage of break, and possibly avoiding iterating through the entire keys array*/
  //iterate through keys array to to see if it appears in the values array; if key is not in values it is the starting point, make it value of starting city variable
  // keys.forEach (el => {
  //   if (!(values.includes(el))) {
  //     city = el;
  //   }
  // });

  //iterate through keys array to to see if it appears in the values array; if key is not in values it is the starting point, make it value of starting city variable
  for (let i = 0; i < keys.length; i++) {
    if (!values.includes(keys[i])) {
      city = keys[i];
      break;
    }
  }

  //using a while loop, iterate until the length of the new array is equal to the length of the keys array
  while (travelOrder.length < keys.length) {
    //push subarray to array [city variable, obj[city variable]
    travelOrder.push([city, obj[city]]);
    //reassign city variable to equal obj[city variable]
    city = obj[city];
  }

  //return the new array of objects in the correct travel order
  return travelOrder;
};

console.log(sortTicket(tickets));
