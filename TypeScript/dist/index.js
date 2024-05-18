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
