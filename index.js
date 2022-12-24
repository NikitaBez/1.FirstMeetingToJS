"use strict";

console.log("Hello Netology");

let age = 80;

if (age < 100) {
  console.log("Еще жить и жить");
} else {
  console.log("Наслаждайся пенсией");
}

let name1 = "Вася";
console.log("Длина имени: " + name1);


let names = [];
names.push("Petya");
names.push("Anya");
names.push("Sveta");
console.log(names);

names[200] = 100;
console.log(names);

let names2 = ["Petya", "Anya", "Sveta", "Nikita", "Alex"];
console.log(names2);

let names3 = ["Petya", "Anya", "Sveta", "Nikita", "Alex", "Alexander"];

for (let name3 of names3) {
  console.log(name3);
}

let maxName = "";
for (let name4 of names3) {
  if (name4.length > maxName.length) {
    maxName = name4;
  }
}
console.log(maxName);