// function addNumbers(a) {
//     a += 10;
//     return function(b) {
//         b -= a;
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

// const output = addNumbers(2)(18)(5);
// console.log(output);

// --------------------------------------------------

const addNumbers = a => {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
};

const result = addNumbers(2)(4)(7);
console.log(result);

// ---------------------------------------------------------------

