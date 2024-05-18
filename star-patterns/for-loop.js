for (let i = 1; i <= 10; i++){
    console.log(i);
}

for (let i = 10; i >= 1; i--){
    console.log(i);
}

// example 1
// *
// **
// ***
// ****
// *****
// ******

for(let i = 1; i <= 6; i++){
    let x = "";
    for(let j = 1; j <= i; j++){
        x += "*"
    }
    console.log(x);
}

// example 2
// ******
// *****
// ****
// ***
// **
// *

for (let i = 1; i <=6; i++){
    let x = "";
    for (let j = 6; j >= i;j--){
        x += "*";
    }
    console.log(x)
}

// example 3 
// *********
//  ********
//   *******
//    ******
//     *****
//      ****
//       ***
//        **
//         *

for (let i = 6; i >= 1; i--){
    let x = "";
    let y = " ";


    for(let k = 6; k >= i; k--){
        y += " ";
    }
    for(let j = 1; j <= i; j++){
        x += "*";
    }
    
    console.log(y, x);
}

// example 4
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *


for (let i = 1; i <= 5; i++) {
    let x = '';
    for (let j = 1; j <= 5 - i; j++) {
        x += ' ';
    }
    for (let k = 1; k <= i; k++) {
        x += '*';
    }
    console.log(x);
}
for (let i = 4; i >= 1; i--) {
    let x = '';
    for (let j = 1; j <= 5 - i; j++) {
        x += ' ';
    }
    for (let k = 1; k <= i; k++) {
        x += '*';
    }
    console.log(x);
}



// example 5
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

for (let i = 1; i <= 5; i++) {
    let x = '';
    for (let j = 1; j <= 5 - i; j++) {
        x += ' ';
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        x += '*';
    }
    console.log(x);
}
for (let i = 4; i >= 1; i--) {
    let x = '';
    for (let j = 1; j <= 5 - i; j++) {
        x += ' ';
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        x += '*';
    }
    console.log(x);
}

