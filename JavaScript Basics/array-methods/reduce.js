// Reduce is usually want to sum up or use previous values in our array to do more oprations on it
const euros = [29.76, 41.85, 46.50];
const players = [1, 4, 8, 9, 12, 55];

const sumofPlayers = players.reduce((total, player) => total + player);

[, , , ,] // array
// ['Name']

const sum = euros.reduce((total, amount) => total + amount);
// Pass 1: total = 29.76, amount = 41.85
// Pass 2: total = 71.55, amount = 46.50
// Pass 3: total = 118.05, amount XX

console.log('€' + sum); // 118.11

// REDUCE --> single value returned, no arrays

// How to use it:

// In this example, Reduce accepts two parameters, the total and the current amount.
// The reduce method cycles through each number in the array much like it would in a for-loop.
// When the loop starts the total value is the number on the far left(29.76) and the current amount is the one next to it(41.85).
// In this particular example, we want to add the current amount to the total.
// The calculation is repeated for each amount in the array, but each time the current value changes to the next number in the array, moving right.
// When there are no more numbers left in the array the method returns the total value.

// Same thing but old way of writing
const dollars = [29.76, 41.85, 46.50];

const dollarSum = euros.reduce(function(total, amount) {
  return total + amount;
});

console.log('$' + dollarSum); // 118.11
