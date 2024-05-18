"use strict";
// basic types
let num = 6;
let myname = 'daniel';
let o = 'hello';
//Tuple types
let student = [1, 2, 'dan'];
//union
let uni = 'helloworld';
//enums
var directions;
(function (directions) {
    directions[directions["up"] = 0] = "up";
    directions[directions["dow"] = 1] = "dow";
    directions[directions["left"] = 2] = "left";
    directions[directions["right"] = 3] = "right";
})(directions || (directions = {}));
let obj = {
    name: 'Daniel',
    age: 25,
    position: 9,
};
//Type assertions
let numer = 2;
// let numer2 = <string>numer;
let numer2 = numer;
//Functions
function multiply(x, y) {
    return x * y;
}
// console.log(multiply(2,9));
//void type
function log(message) {
    console.log(message);
}
log(20);
let obj1 = {
    name: 'Daniel',
    age: 24,
    position: 9,
};
