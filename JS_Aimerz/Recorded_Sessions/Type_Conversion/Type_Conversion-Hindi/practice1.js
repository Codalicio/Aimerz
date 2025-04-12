// Type Coercion/Conversion :

// 1. Implicit Conversion :

// String :

// 1. String + String :
// let a = "amit ";
// let b = 'raj';
// let c = a + b;
// console.log(c, typeof c);

// 2. String + Number :
// let a = "amit";
// let b = 7;
// let c = a + b;
// console.log(c, typeof c);

// 3. String + Boolean :
// let a = "amit";
// let b = true;
// let c = a + b;
// console.log(c, typeof c);

// 4. String + Array :
// let a = "amit";
// let b = [1, 2, 3];
// let c = a + b;
// console.log(c, typeof c);

// 5. String + Object :
// let a = "amit";
// let b = {name: 'Amit',};
// let c = a + b;
// console.log(c, typeof c);

// 6. String + null :
// let a = "amit";
// let b = null;
// let c = a + b;
// console.log(c, typeof c);

// String + undefined :
// let a = "amit";
// let b = undefined;
// let c = a + b;
// console.log(c, typeof c);

// -------------------------------------

// Number :

// 1. Number + String :
// let a = 7;
// let b = 'raj';
// let c = a + b;
// console.log(c, typeof c);

// 2. Number + Number :
// let a = 7;
// let b = 9;
// let c = a + b;
// console.log(c, typeof c);

// 3. Number + Boolean :
// let a = 7;
// let b = true; // will be converted into number, true == 1 and false == 0;
// let c = a + b;
// console.log(c, typeof c);

// if(false == 0) {
//     console.log("Amit");
// }

// 4. Number + Array :
// let a = 7;
// let b = ['Mithun', 'Raj'];
// let c = a + b;
// console.log(c, typeof c);

// 5. Number + Object :
// let a = 7;
// let b = {name: 'Sonu'};
// let c = a + b;
// console.log(c, typeof c);

// 6. Number + null(null will be converted to number 0) :
// let a = 7;
// let b = null;
// let c = a + b;
// console.log(c, typeof c);

// 7. Number + undefined :
// let a = 7;
// let b = undefined;
// let c = a + b;
// console.log(c, typeof c);

// ----------------------------------------------------

// Boolean :

// 1. Boolean + String :
// let a = true;
// let b = 'raj';
// let c = a + b;
// console.log(c, typeof c);

// 2. Boolean + Number :
// let a = true;
// let b = 7;
// let c = a + b;
// console.log(c, typeof c);

// 3. Boolean + Boolean :
// let a = true;
// let b = true;
// let c = a + b;
// console.log(c, typeof c);

// 4. Boolean + Array :
// let a = true;
// let b = ['a', 1, 'b'];
// let c = a + b;
// console.log(c, typeof c);

// 5. Boolean + Object :
// let a = true;
// let b = {name: 'Prabir'};
// let c = a + b;
// console.log(c, typeof c);

// 6. Boolean + null :
// let a = true;
// let b = null;
// let c = a + b;
// console.log(c, typeof c);

// 7. Boolean + undefined :
// let a = true;
// let b = undefined;
// let c = a + b;
// console.log(c, typeof c);

// ----------------------------------------------

// Array :

// 1. Array + String :
// let a = [2, 'amit', 7];
// let b = 'raj';
// let c = a + b;
// console.log(c, typeof c);

// 2. Array + Number :
// let a = [2, 'amit', 7];
// let b = 7;
// let c = a + b;
// console.log(c, typeof c);

// 3. Array + Boolean :
// let a = [2, 'amit', 7];
// let b = true;
// let c = a + b;
// console.log(c, typeof c);

// 4. Array + Array :
// let a = [2, 'amit', 7];
// let b = ['raj'];
// let c = a + b;
// console.log(c, typeof c);

// 5. Array + Object :
// let a = [2, 'amit', 7];
// let b = {name: 'Mithun'};
// let c = a + b;
// console.log(c, typeof c);

// 6. Array + null :
// let a = [2, 'amit', 7];
// let b = null;
// let c = a + b;
// console.log(c, typeof c);

// 7. Array + undefined :
// let a = [2, 'amit', 7];
// let b = undefined;
// let c = a + b;
// console.log(c, typeof c);

// --------------------------------------------------

// Objects :

// 1. Object + String :
// let a = {name: 'Amit'};
// let b = 'raj';
// let c = a + b;
// console.log(c, typeof c);

// 2. Object + Number :
// let a = {name: 'Amit'};
// let b = 7;
// let c = a + b;
// console.log(c, typeof c);

// 3. Object + Boolean :
// let a = {name: 'Amit'};
// let b = true;
// let c = a + b;
// console.log(c, typeof c);

// 4. Object + Array :
// let a = {name: 'Amit'};
// let b = [1, 3, 5];
// let c = a + b;
// console.log(c, typeof c);

// 5. Object + Object :
// let a = {name: 'Amit'};
// let b = {age: 16};
// let c = a + b;
// console.log(c, typeof c);

// 6. Object + null :
// let a = {name: 'Amit'};
// let b = null;
// let c = a + b;
// console.log(c, typeof c);

// 7. Object + undefined :
// let a = {name: 'Amit'};
// let b = undefined;
// let c = a + b;
// console.log(c, typeof c);

// -----------------------------------------------

// null :

// 1. null + String :
// let a = null;
// let b = 'raj';
// let c = a + b;
// console.log(c, typeof c);

// 2. null + Number :
// let a = null;
// let b = 7;
// let c = a + b;
// console.log(c, typeof c);

// 3. null + Boolean :
// let a = null;
// let b = true;
// let c = a + b;
// console.log(c, typeof c);

// 4. null + Array :
// let a = null;
// let b = [1, 3, 7];
// let c = a + b;
// console.log(c, typeof c);

// 5. null + object :
// let a = null;
// let b = {};
// let c = a + b;
// console.log(c, typeof c);

// 6. null + null :
// let a = null;
// let b = null;
// let c = a + b;
// console.log(c, typeof c);

// 7. null + undefined :
// let a = null;
// let b = undefined;
// let c = a + b;
// console.log(c, typeof c);

// -----------------------------------------

// undefined :

// 1. undefined + string :
// let a = undefined;
// let b = 'raj';
// let c = a + b;
// console.log(c, typeof c);

// 2. undefined + number :
// let a = undefined;
// let b = 7;
// let c = a + b;
// console.log(c, typeof c);

// 3. undefined + Boolean :
// let a = undefined;
// let b = true;
// let c = a + b;
// console.log(c, typeof c);

// 4. undefined + array :
// let a = undefined;
// let b = [1, 4, 'Raj'];
// let c = a + b;
// console.log(c, typeof c);

// 5. undefined + object :
// let a = undefined;
// let b = {};
// let c = a + b;
// console.log(c, typeof c);

// 6. undefined + null :
// let a = undefined;
// let b = null;
// let c = a + b;
// console.log(c, typeof c);

// 7. undefined + undefined :
// let a = undefined;
// let b = undefined;
// let c = a + b;
// console.log(c, typeof c);

// ----------------------------------------------------------------------------

// Explicit Conversion :

// String :  (String(), .toString() and string interpolation : `${}`);
// const val = 7;

// const result1 = String(val);
// const result2 = val.toString(); // Strict method(avoid null and undefined)
// const result3 = `${val}`;

// console.log(result1, result2, result3);
// console.log(typeof result1, typeof result2, typeof result3);

// Numbers(Number(), parseInt(), parseFloat()) (Number give number or NaN as output) :
// const val = undefined;

// const result1 = Number(val);
// const result2 = parseInt(val);
// const result3 = parseFloat(val);

// console.log(result1, result2, result3);
// console.log(typeof result1, typeof result2, typeof result3);

// Boolean (Boolean()) :
// const val = null;

// const result1 = Boolean(val);

// console.log(result1);
// console.log(typeof result1);

// let a = "25" / "5";
// console.log(a, typeof a);

// let b = "3" ** "2";
// console.log(b, typeof b);

// let c = "25" % 5;
// console.log(c, typeof c);

// Convert dates to number :
// const date = Number(new Date());
// console.log(date, typeof date);

// const date = Number(new Date());
// console.log(date, typeof date);

// Convert number to Date :
// const timeStamp = 1743522911613;
// const date = new Date(timeStamp);
// console.log(date, typeof date);

// const timeStamp = 18713242876614;
// const date = new Date(timeStamp);
// console.log(date, typeof date);

// const timeStamp = 20773456798345;
// const date = new Date(timeStamp);
// console.log(date, typeof date);

// console.log(typeof true);

// const a = 1;
// const b = '100';
// const res = a + b;
// console.log(res, typeof res);

