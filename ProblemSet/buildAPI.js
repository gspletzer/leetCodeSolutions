/*
state: array of event objects

Event: 
  - timestamp; default to current time
  - action = what happened; string; required
  - resource = what was affected, string, not required
  - initiator = user who performed action, string, required
  - details = any additional information, not required, object of key/value pairs

Queries:
 - time range = all events between two given timestamps
 - resource filtering = all events related to a given resource
 - initiator filtering = all events related to a given initiator
 - detail filtering = all events that pertain to a given key/value pair
returns an array; account for linked filtering

Adding events to state:
Where one event object is added to state
*/
const now = Date.now();

const state = [
  {
    created_at: now,
    action: 'Updated',
    resource: 'Dashboard 2',
    initiator: 'Grace',
    details: {},
    }, 
    {
      created_at: now+1,
      action: 'Created',
      resource: 'Dashboard 2',
      initiator: 'Randy',
      details: {},
      }, 
  {
        created_at: now+2,
        action: 'Invited',
        resource: 'Dashboard 3',
        initiator: 'Grace',
        details: {},
        }, 
];

//time range filter
const timeRangeFilter = (start, stop, array) => {
  //iterate through state array
    //evaluate the created_at, if it is greater than start and less than
    //stop push to result
  return array.filter(event => event.created_at >= start && event.created_at < stop);
};
//reconsider date.now for testing as it can create inconsistency in larger data pools; 90% accuracy
//console.log(timeRangeFilter(now+1, now+2, state));

//initiator filter
const initiatorFilter = (initiator, array) => {
  //iterate through the array
    //filter for any objects that have the given initiator value
  return array.filter(event => event.initiator === initiator)
};

//console.log(initiatorFilter('Grace', state));

const filter = (array, criteria) => {
  let result = array;
  //conditional for start and stop key
  if (criteria.hasOwnProperty('start') && criteria.hasOwnProperty('stop')) {
    result = timeRangeFilter(criteria.start, criteria.stop, result)
  };
  if (criteria.hasOwnProperty('initiator')) {
    result = initiatorFilter(criteria.initiator, result)
  };
  return result;
};

console.log(filter(state, {start: null, stop: null, initiator: 'Grace'}));