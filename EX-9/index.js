import promptSync from "prompt-sync";

let prompt = promptSync();

function faultyCalculator(n1, n2, operation) {
  switch (operation) {
    case "+":
      return n1 - n2;
    case "-":
      return n1 / n2;
    case "*":
      return n1 + n2;
    case "/":
      return n1 ** n2;
    default:
      console.log("Invalid operation!");
      return null;
  }
}

function normalCalculator(n1, n2, operation) {
  switch (operation) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    default:
      console.log("Invalid operation!");
      return null;
  }
}

function main() {
  let choice;

  do {
    console.log(
      `\nFAULTY CALCULATOR\n1> ADD (+)\n2> SUBTRACT (-)\n3> DIVIDE (/)\n4> MULTIPLY (*)\n5> EXIT`
    );

    let rnd = Math.floor(Math.random() * 10) + 1;
    console.log(`Random number generated: ${rnd}`);

    let n1 = parseFloat(prompt("Enter NUM1: "));
    let n2 = parseFloat(prompt("Enter NUM2: "));
    choice = parseInt(prompt("Enter your choice (1-5): "));

    if (choice === 5) {
      console.log("Exiting...");
      break;
    }

    let operation;
    switch (choice) {
      case 1:
        operation = "+";
        break;
      case 2:
        operation = "-";
        break;
      case 3:
        operation = "/";
        break;
      case 4:
        operation = "*";
        break;
      default:
        console.log("Invalid choice! Please try again.");
        continue;
    }

    let result;
    if (rnd === 1) {
      console.log("Faulty calculation activated!");
      result = faultyCalculator(n1, n2, operation);
    } else {
      result = normalCalculator(n1, n2, operation);
    }

    if (result !== null) {
      console.log(`Result: ${result}`);
    }
  } while (choice !== 5);
}

main();

/*import promptSync from "prompt-sync";

let prompt = promptSync();
let ch;

do {
  let rnd = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  let n1 = parseInt(prompt("NUM1: "));
  let n2 = parseInt(prompt("NUM2: "));

  console.log(
    `FAULTY CALCULATOR\n1> ADD\n2> SUBTRACT\n3> DIVIDE\n4> MULTIPLY\n5> EXIT`
  );

  let ch = prompt("Enter your choice NO: ");
  if (rnd == 1) {
    function sum(n1, n2) {
      return n1 + n2;
    }
    function sub(n1, n2) {
      return n1 - n2;
    }
    function div(n1, n2) {
      return n1 / n2;
    }
    function mul(n1, n2) {
      return n1 * n2;
    }
    if (ch == 1) {
      let res = sum(n1, n2);
      console.log(res);
    }
  } else {
  }
} while (ch > 0 && ch <= 4);
*/
