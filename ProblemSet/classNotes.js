class NotesStore {
  //add your code here
  //create state with acceptable states
  constructor() {
      this.completed = [];
      this.active = [];
      this.others = [];
  }
  //add method for adding a note
  addNote (state, name) {
      if (!name) throw Error('Name cannot be empty');
      else if (state !== 'completed' && state !== 'active' && state !== 'others') throw Error(`Invalid state ${state}`);
      else this[`${state}`].push(name)
  }
  //add method for getting notes for a given state
  getNotes (state) {
      if (state !== 'completed' && state !== 'active' && state !== 'others') throw Error(`Invalid state ${state}`);
      else return this[`${state}`]
  }
}

6;
addNote active DrinkTea;
addNote active DrinkCoffee;
addNote completed Study;
getNotes active
getNotes completed
getNotes foo