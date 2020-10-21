/*
create a function for fining an item in a list of menus. 
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

const findItem = (name, menus) => {
  //iterate through given array
    //base case: when name matches
    //recursive case: when additional properties are arrays and exist
      //call function with menu parameter updated to the appropriate array
      //return the result of that only if isn't null
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].name === name) return menu[i];
    if (menus[i].hasOwnProperty(groups) && menus[i].groups.isArray()) {
      const result = findItem(name, menus[i].groups);
      if (result !== null) return result
    };
    if (menus[i].hasOwnProperty(items) && menus[i].items.isArray()) {
      const result = findItem(name, menus[i].items);
      if (result !== null) return result
    };
  };
  //return null if nothing is returned from the iteration or there is nothing to iterate
  return null
};