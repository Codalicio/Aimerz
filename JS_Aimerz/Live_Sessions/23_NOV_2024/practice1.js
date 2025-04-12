// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// -------------------------------------------------------------------------

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5 - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// ----------------------------------------------------------------------

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

// ------------------------------------------------------------------

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 1 || j === 5 || i === 3) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  process.stdout.write("\n");
}

// ----------------------------------------------------------------------
