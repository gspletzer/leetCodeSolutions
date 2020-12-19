/*
create a function for finding an item in a list of menus. 
Input: string, array of objects
Output: null or menu item object 

Class Menus {
  name: string
  groups: array of objects
}

Class Menu Groups {
  name: string
  groups: array of Menu Group objects
  items: array of Menu Item objects
}

Class Menu Item {
  name: string
}
 */

const myMenus = [
  {
    name: "Breakfast",
    groups: [
      {
        name: "Hot",
        groups: [
          {
            name: "Sandwiches",
            items: [
              {
                name:"Bacon, Egg, Cheese biscuit"
              },
              {
                name:"Toasted Bagel"
              },
              {
                name:"Croissant"
              }
            ]
          },
          {
            name: "Platters",
            items: [
              {
                name: "Pancakes and Sausage"
              },
              {
                name: "Eggs and Sausage"
              },
              {
                name: "Chicken and Waffles"
              }
            ]
          }
        ]
      },
      {
        name: "Cold",
        items:[
          {
            name: "Cereal with milk"
          },
          {
            name: "Yogurt Parfait"
          }
        ]
      },
      {
        name: "Beverages",
        items:[
          {
            name: "Orange Juice"
          },
          {
            name: "Coffee"
          },
          {
            name: "Chai Latte"
          }
        ]
      }
    ]
  },
  {
    name: "Lunch",
    items: [
      {
        name: "We don't serve Lunch."
      }
    ]
  },
  {
    name: "Dinner",
    items: [
      {
        name: "We don't serve Dinner."
      }
    ]
  }
]

const findItem = (name, menus) => {
  //iterate through given array
    //base case: when name matches
    //recursive case: when additional properties are arrays and exist
      //call function with menu parameter updated to the appropriate array
      //return the result of that only if isn't null
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].name === name) return menus[i];
    if (menus[i].hasOwnProperty("groups") && Array.isArray(menus[i].groups)) {
      const result = findItem(name, menus[i].groups);
      if (result !== null) return result
    };
    if (menus[i].hasOwnProperty("items") && Array.isArray(menus[i].items)) {
      const result = findItem(name, menus[i].items);
      if (result !== null) return result
    };
  };
  //return null if nothing is returned from the iteration or there is nothing to iterate
  return null
};

console.log(findItem("Coffee", myMenus)); //expect "Coffee"
console.log(findItem("Grilled Cheese", myMenus)); //expect null