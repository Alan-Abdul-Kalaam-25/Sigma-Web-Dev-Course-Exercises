import promptSync from "prompt-sync";

let prompt = promptSync();

// function factorial(num) {
//   if (num == 0 || num == 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers!";
  if (n === 0 || n === 1) return 1;
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, val) => acc * val,
    1
  );
}

let num = parseInt(prompt("Enter no. to find its factorial: "));

// let fact = 1;
// if (num == 1 || num == 0) {
//   console.log(1);
// } else {
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   console.log(`The factorial of ${num} is ${fact}`);
// }

console.log(`The factorial of ${num} is: ${factorial(num)}`);
