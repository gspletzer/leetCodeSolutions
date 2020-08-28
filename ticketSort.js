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
    travelOrder.push([city, obj[city]]);//[new york, charlotte]
    //reassign city variable to equal obj[city variable]
    city = obj[city];//charlotte
  }
  //return the new array of objects in the correct travel order
  return travelOrder;
};

//Try with Linked List
function LinkedList(...args) {
  this.head = null;
  this.tail = null;
  this.length = 0;
  for (let i = 0; i < args.length; i++){
    this.push(args[i])
  }
}

function Node(val) {
  this.value = val;
  this.next = null;
}
LinkedList.prototype.push = function (value) {
  //use node function to turn value into a node
  let currentNode = new Node(value);
  //if head = null, created node becomes head and tail
  if (this.head === null) {
    this.head = currentNode;
  }
  //else this.tail.next = currentNode; this.tail = currentNode
  else { 
  this.tail.next = currentNode 
  }
  this.tail = currentNode;
  this.length++;
};

const sortTicket2 = (obj) =>{
    //declare empty variable to hold name of starting destination
  let city;
  //isolate values of input object into an array
  const keys = Object.keys(obj);
  //isolate keys of input object into an array
  const values = Object.values(obj);
  //iterate through keys array to to see if it appears in the values array; if key is not in values it is the starting point, make it value of starting city variable
  for (let i = 0; i < keys.length; i++) {
    if (!values.includes(keys[i])) {
      city = keys[i];
      break;
    }
  }
  //initialize linked list with starting city
  const ticketList = new LinkedList(city)
  //using a while loop, iterate until the length of the new array is equal to the length of the keys array
  while (ticketList.length <= keys.length) {
    city = obj[city];
    //push subarray to array [city variable, obj[city variable]
    ticketList.push(city);
  }
  return ticketList
}


console.log(sortTicket(tickets));
console.log(sortTicket2(tickets));
