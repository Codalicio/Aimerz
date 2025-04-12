// Regex - Regular Expressions :

// const str = "I am Amit and I am 28.";

// const pattern = new RegExp("I am");

// const result = str.replace(pattern, 'You are');
// console.log(result);

// --------------------------------------------------------------

// const str = 'rajamitnine@gmail.com';

// const pattern = /@/;

// const result = str.replace(pattern, '$');
// console.log(result);

// -----------------------------------------------------------------------------------------

// Email validation using RegExp :

// const str = "mithun@aimerzai";

// const pattern = /^[a-zA-Z0-9]+@[aq-zA-Z0-9]+.+[a-zA-Z]+$/

// const result = pattern.test(str);
// console.log(result);

// -------------------------------------------------------------------------------

// const email = 'mithun@aimerz.ai';

// const pattern = /^\w+@\w+.\w+$/;

// const result = pattern.test(email);
// console.log(result);

// ---------------------------------------------------------------------------------------

// const str = "a123@";

// const pattern = /^\w+@$/;

// const result = pattern.exec(str);
// console.log(result);

// --------------------------------------------------------------------------------------

// const str = 'I am Amit Raj';

// const pattern = new RegExp(/a+/);

// const result = pattern.test(str);
// console.log(result);

// ---------------------------------------------------------------------------------------

// const str = 'I am amit raj aaa';

// const pattern = /a+/

// const result = pattern.test(str);
// console.log(result);

// --------------------------------------------------------------------------------------

// const str = "In am amit";

// const pattern = /x|t$/;

// const result = pattern.test(str);
// console.log(result);

// ---------------------------------------------------------------------------------

// const str = "rajamitnine@gmail.com";

// const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/

// const output = pattern.test(str);
// console.log(output);

// ------------------------------------------------------------------

// const str = 'my name is amittt';
// const pattern = /t+$/;
// const output = pattern.test(str);
// console.log(output);

// -------------------------------------------------------------------

const str = 'mynum is 67.';
const pattern = /.$/
const output = str.replace(pattern, '!');
console.log(output);
console.log(str);

// -------------------------------------------------------------------------------
