"use strict";
exports.__esModule = true;
var data;
data = 20;
var abc;
abc = 10;
//abc = " helo0";
var foodItem;
foodItem = ["pizza", " sandwich"];
console.log(foodItem);
foodItem.push("Parota");
foodItem.push("Noodles");
foodItem.pop();
function sub(a, b) {
    return a - b;
}
function add(a, b) {
    return a + b;
}
function subtraction(a, b, c) {
    return a - b;
}
function subDefaultValue(a, b, c) {
    return a - b - c;
}
var k = subtraction(3, 4, 6);
console.log(k);
var t = sub(98, 3);
console.log(t);
var y = subDefaultValue(43, 5, "hello");
function addNum(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
var k1 = addNum(23, 43, 5);
console.log(k1);
var myArray;
myArray = [3, true];
console.log(myArray);
myArray = [3, "sdasd"];
console.log(myArray);
myArray = [1];
console.log(myArray);
