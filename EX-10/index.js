let rnd1 = Math.floor(Math.random() * 3) + 1;
let rnd2 = Math.floor(Math.random() * 3) + 1;
let rnd3 = Math.floor(Math.random() * 3) + 1;

let first;
let second;
let third;
let businessNme;

if (rnd1 == 1) {
  first = "Crazy";
} else if (rnd1 == 2) {
  first = "Amazing";
} else {
  first = "Fire";
}

if (rnd2 == 1) {
  second = "Engine";
} else if (rnd2 == 2) {
  second = "Foods";
} else {
  second = "Garments";
}

if (rnd3 == 1) {
  third = "Limited";
} else if (rnd3 == 2) {
  third = "Bros";
} else {
  third = "Hub";
}

businessNme = `${first} ${second} ${third}`;

console.log(businessNme);
