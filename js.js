// 1
// for (let i = 1; i <= 6; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += '*';
//     }
//     console.log(line);
// }
// 2
// for (let i = 6; i >= 1; i--) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += '*';
//     }
//     console.log(line);
//  }
// 3

// const size = 5;


// for (let i = 1; i <= 2 * 5 - 1; i++) {
//     let line = '';
//     const spaces = i <= 5 ? 5 - i : i - 5;
//     for (let j = 0; j < spaces; j++) {
//         line += ' ';
//     }
//     const asterisks = i <= 5 ? i : 2 * 5 - i;
//     for (let k = 0; k < asterisks; k++) {
//         line += '*';
//     }
//     console.log(line);
// 
// 4

// for (let i = 1; i <= 2 * 5 - 1; i++) {
//     let line = '';
//     const spaces = i <= 5 ? 5 - i : i - 5;
//     for (let j = 0; j < spaces; j++) {
//         line += ' ';
//     }
//     const asterisks = i <= 5 ? 2 * i - 1 : 2 * (2 * 5 - i) - 1;
//     for (let k = 0; k < asterisks; k++) {
//         line += '*';
//     }
//     console.log(line);
// }
// Define the size of the pattern (number of lines)


// 5
// for (let i = 1; i <= 8; i++) {
//     let line = '';

//     if (i === 1) {
        
//         for (let j = 0; j < 8; j++) {
//             line += '*';
//         }
//     } else {
//         line += ' '.repeat(8 - 1);
//         line += '*';
//     }
//     console.log(line);
// }
// 6
// const size = 7;
// for (let i = 1; i <= size; i++) {
//     let line = '';
//     if (i === 1) {
        
//         line = '*'.repeat(size);
//     } else {
       
//         line = '*';
//     }
//     console.log(line);
// }







