// let isKiranReady = true;

// if(isKiranReady) {
//     console.log("Yaay! I will marry her");
// } else {
//     console.log("No, I will not marry her");
// };

// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j <= i; j++) {
//         process.stdout.write("*")
//     };
//     process.stdout.write("\n");
// };

// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 5-i-1; j++) {
//         process.stdout.write(" ");
//     };
//     for(let k = 0; k < i+1; k++) {
//         process.stdout.write("*");
//     };
//     process.stdout.write("\n");
// };

// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 5-i-1; j++) {
//         process.stdout.write(" ");
//     };
//     for(let k = 0; k < 2*i+1; k++) {
//         process.stdout.write("*");
//     };
//     process.stdout.write("\n");
// };

// for(let i = 0; i < 5; i++) {
//     for(let a = 0; a < i+1; a++) {
//         process.stdout.write("*");
//     };
//     for(let b = 0; b < 2*(5-i-1); b++) {
//         process.stdout.write(" ");
//     };
//     for(let c= 0; c < i+1; c++) {
//         process.stdout.write("*");
//     };
//     process.stdout.write("\n");
// };

// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 23; j++) {
//         if((j === 2) || (j === 6) || (i === 0 && j > 1 && j < 7) || (i === 2 && j > 1 && j < 7) || (j === 9) || (j === 13) || (i === 1 && j === 10) || (i === 1 && j === 12) || (i === 2 && j === 11) || (i === 0 && j === 16) || (i === 1 && j === 17) || (i === 0 && j === 20) || (i === 1 && j === 19) || (j === 18 && (i === 2 || i === 3 || i === 4))) {
//             process.stdout.write("*")
//         } else {
//             process.stdout.write(" ");
//         }
//     }
//     process.stdout.write("\n");
// }

for( let  i = 0; i < 5; i++) {
    for(let j = 0; j < 34; j++) {
        if((j === 3) || (j === 7) || (i === 0 && (j === 3 || j === 4 || j === 5 || j === 6 || j === 7)) || (i === 2 && (j === 3 || j === 4 || j === 5 || j === 6 || j === 7)) || (j === 11) || (j === 15) || (i === 0 && (j === 12 || j === 14)) || (i === 1 && j === 13) || (i === 0 && (j === 19 || j === 20 || j === 21 || j === 22 || j === 23)) || (j === 21) || (i === 4 && (j === 19 || j === 20 || j === 21 || j === 22 || j === 23)) || (j === 29) || (i === 0 && (j === 27 || j === 28 || j === 29 || j === 30 || j === 31))) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        };
    };
    process.stdout.write("\n");
};