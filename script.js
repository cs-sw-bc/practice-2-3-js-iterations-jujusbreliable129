/*
  =============================================
  🧩 JavaScript Loop Practice Assignment
  =============================================
  Goal: Get comfortable writing for, while, and do...while loops in real-life scenarios.
  Each section has 3 short exercises.
  Write your code below each section comment.
  ---------------------------------------------
  */

  // 🔹 PART A – FOR LOOPS
  // 1. Counting Up:
  //    Print numbers from 1 to 20 using a for loop.
  //
  for(a=0;a<21;a++){
    console.log(a);
  }


  // 2. Multiples of 5:
  //    Print all multiples of 5 from 5 to 50.
  //    Hint: use i += 5 instead of i++.
    for(b=5;b<51;b+=5){
      console.log(b);
    }

  //
  // 3. Sum of First 10 Numbers:
  //    Use a for loop to calculate the sum of numbers from 1 to 10 and display the total.

 let totalSum = 0;
    for(let i=1;i<=10;i++){
      totalSum = totalSum + i;
      console.log(totalSum)
    }


  // 🔹 PART B – WHILE LOOPS
  // 1. Password Checker (simulated):
  //    Keep checking a variable `input` until it matches "open".
  //    You can simulate this with an array like ["wrong", "nope", "open"].

const input=["wrong", "nope", "open"]
let i=0;

while(input[i] !== "open") {
  console.log("Attempt:", input[i]);
  i++;
}

console.log("Access Allowed:", input[i]);


  //
  // 2. Add Until Finish:
  //    Keep adding numbers in an array until the word "Finish" appears.
  
  const inputs = [1, 2, 4, 443, 6546, 756, 345, 545, 345, 6467, 8776, 9879, 7678, 97868, 567867, 474567, 46754, 546756, "Finish"];
  let p = 0;

  while(inputs[p] !== "Finish"){
    console.log(`Next number ${inputs[p]}`);
    p++;
  }

  console.log(`We are done: ${inputs[p]}`)


  // 3. Countdown:
  //    Start from 10 and keep counting down until you reach 0.
  //    Print each number on a new line.

  let num= 10;

  while(num>=0){
    console.log("Ignition:", num)
    num--
  }

  console.log("Lift off!")



  // 🔹 PART C – DO...WHILE LOOPS
  // 1. Guessing Game (simulation):
  //    Generate a random number between 1–10 using:
  //       Math.floor(Math.random() * 10) + 1
  //    Keep “guessing” until you get 5. The loop should run at least once.
  //
let number;

do {
  number = Math.floor(Math.random() * 10) + 1;
  console.log("Guess:", number);
} while (number !== 5);

console.log("Got it! The number was 5.");
  



  // 2. Menu Simulation:
  //    Show a fake menu at least once (like “1. Play  2. Exit”) and exit when option = 2.
  //

let option;

do {
  console.log("Menu:");
  console.log("1. Play");
  console.log("2. Exit");

  option = Math.floor(Math.random() * 2) + 1; // genera 1 o 2
  console.log("Selected option:", option);

} while (option !== 2);

console.log("Exiting program...");

  // 3. Number Input Validation:
  //    Ask for a number greater than 10.
  //    Keep re-checking until it’s valid (simulate input with variables).

let numbers;

do {
  numbers = Math.floor(Math.random() * 15); // genera 0–14
  console.log("Generated:", numbers);
} while (numbers <= 10);

console.log("Accepted:", numbers);

  // 🔹 PART D – BONUS: LOOP CONTROL
  // 1. Break Example:
  //    Loop numbers 1–10. Stop completely when the number is 7.
  //
  // 2. Continue Example:
  //    Loop numbers 1–10. Skip printing when the number is 5.
  //
  // 3. Combined:
  //    Print numbers 1–20, skip even numbers, but stop entirely when you hit 17.



  // ✅ Submission
  // - Submit a single .html file containing your solutions.
  // - Include comments describing which loop type you used.
  // - Use console.log() or document.write() to display results.
