// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

// basic name closure

const nameAdder = () => {
  let names = [];
  return (nameToAdd, cb) => {
    names = names.concat(nameToAdd);
    if (cb) cb(names);
    return names;
  };
};

const gradeBookNameAdder = nameAdder();
gradeBookNameAdder("John", console.log);
gradeBookNameAdder("Jack", console.log);
gradeBookNameAdder("Jake", console.log);
gradeBookNameAdder("Joe", console.log);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = limit => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;
  function counter(logFn) {
    count++;
    if (count > limit) {
      count = 1;
      logFn(`Limit of ${limit} reached, resetting...`);
    }
    logFn(count);
    return count;
  }

  return counter;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
const myCounter = counterMaker(5);
myCounter(console.log);
myCounter(console.log);
myCounter(console.log);
myCounter(console.log);
myCounter(console.log);
myCounter(console.log);
myCounter(console.log);

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = logger => {
  let count = 0;
  return {
    increment: function() {
      logger(`previous ${count++} new: ${count}`);
    },
    decrement: function() {
      logger(`previous ${count--} new: ${count}`);
    }
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const counterControl = counterFactory(console.log);
counterControl.increment();
counterControl.increment();
counterControl.decrement();
counterControl.decrement();
counterControl.decrement();
counterControl.increment();
counterControl.decrement();
counterControl.increment();
counterControl.increment();
