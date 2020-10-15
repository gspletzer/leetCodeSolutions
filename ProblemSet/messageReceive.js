/*
You're working on a chat app for WhatIsThisApp. Someone from your team
has committed this code, but there's a problem with it. Reciever doesn't
seem to be receiving any messages.
The manager on your team has asked if you can look into this problem 
to resolve the issue. Can you get the code into a working state?
*/
/*ORIGINAL CODE:
const solution = (messages) => {
  class Emitter {
    constructor(messages = []) {
      this.messages = messages;
      this.event = () => {};
    }
    setEvent(fn) {
      this.event = fn;
    }
    trigger() {
      this.messages.forEach(message => this.event(message));
    }
  }
  class Receiver {
    constructor() {
      this.messages = [];
    }
    ping(message) {
      this.messages.push(message);
    }
  }
  const myEmitter = new Emitter(messages);
  const myReceiver = new Receiver();
  myEmitter.setEvent(myReceiver.ping);
  myEmitter.trigger();
  return myReceiver.messages;
};
console.log(solution(['hello', 'bob'])) // should return ['hello', 'bob']; but is returning: [] */

/*CORRECTED CODE*/
const solution = (messages) => {
  class Emitter {
    //declaring messages as an empty array doesn't impact the solution outcome
    constructor() {
      this.messages = messages;
      this.event = () => {};
    }
    setEvent(fn) {
      this.event = fn;
    }
    trigger() {
      this.messages.forEach((message) => this.event(message));
    }
  }
  class Receiver {
    constructor() {
      this.messages = [];
      //bound ping to receiver so it would push to recevier messages, not emitter messages
      this.ping = this.ping.bind(this);
    }
    ping(message) {
      this.messages.push(message);
    }
  }
  const myEmitter = new Emitter(messages);
  const myReceiver = new Receiver();
  myEmitter.setEvent(myReceiver.ping);
  myEmitter.trigger();
  return myReceiver.messages;
};
console.log(solution(["hello", "bob"])); // should return ['hello', 'bob']; but is returning: []
