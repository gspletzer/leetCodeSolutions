/*
You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:
RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

Example 1:
Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output
[null, 1, 2, 3, 3]

Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
 

Constraints:
1 <= t <= 10^4
Each test case will call ping with strictly increasing values of t.
At most 10^4 calls will be made to ping.
*/

var RecentCounter = function () {
  this.request = [];
  this.count = null;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.count = 0;
  this.request.push(t);
  const rangeMin = Math.min(t - 3000, t);
  const rangeMax = Math.max(t - 3000, t);
  this.request.forEach((el) => {
    if (el >= rangeMin && el <= rangeMax) this.count += 1;
  });
  return this.count;
};

RecentCounter.prototype.ping2 = function (t) {
  this.count = 0;
  this.request.push(t);
  let index = 0;
  const rangeMin = t - 3000;
  //utilize for loop with break to decrease runtime
  for (let i = 0; i < this.request.length; i++) {
    if (this.request[i] >= rangeMin) {
      index = i;
      break;
    }
  }
  this.count = this.request.length - index;
  return this.count;
};

/* LEET CODE SOLUTION */
/*avoids setting a counter variable/resetting 
since queue will always include the pings that applied to output
and carry those into next round of ping*/

class RecentCounter2 {
  //define recent counter constructor with queue
  constructor() {
    this.queue = [];
  }
  //define ping method; accepts number (t)
  ping(t) {
    //push t to the queue
    this.queue.push(t);
    //while the queue at zero position is less than range minimum
    //shift the first element from the queue
    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }
    //return the length of queue once while loop finishes running
    return this.queue.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
var obj = new RecentCounter();
console.log(obj);
var param_1 = obj.ping2(1);
console.log(param_1);
console.log(obj);
obj.ping2(100);
console.log(obj);
obj.ping2(3002);
console.log(obj);
