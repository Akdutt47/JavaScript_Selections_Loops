console.log("Hello World!\n==========\n");


// Exercise 1: Ignore Even
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);  // Print odd numbers
    }
  }
  


// Exercise 2: FIZZBUZZ
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
      console.log('FIZZ');
    } else if (i % 5 === 0) {
      console.log('BUZZ');
    }
  }
  

  // Exercise 1: Ignore Even with while loop
let i = 1;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);  // Print odd numbers
  }
  i++;
}

// Exercise 1: Ignore Even with do/while loop
let j = 1;
do {
  if (j % 2 !== 0) {
    console.log(j);  // Print odd numbers
  }
  j++;
} while (j <= 100);

// Exercise 2: FIZZBUZZ with while loop
let k = 1;
while (k <= 100) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (k % 3 === 0) {
    console.log('FIZZ');
  } else if (k % 5 === 0) {
    console.log('BUZZ');
  }
  k++;
}

// Exercise 2: FIZZBUZZ with do/while loop
let l = 1;
do {
  if (l % 3 === 0 && l % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (l % 3 === 0) {
    console.log('FIZZ');
  } else if (l % 5 === 0) {
    console.log('BUZZ');
  }
  l++;
} while (l <= 100);

// Exercise 4: Find Value
let value = Math.round((Math.random() * 500)); // Random value between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // Random number between 100 and 500

console.log("Value to find:", value);
console.log("Searching up to:", n);

let found = false;
for (let i = 0; i <= n; i++) {
  if (i === value) {
    console.log("Found value!");
    found = true;
    break;  // Break out of the loop when the value is found
  }
}

if (!found) {
  console.log("Did not find value");
}
