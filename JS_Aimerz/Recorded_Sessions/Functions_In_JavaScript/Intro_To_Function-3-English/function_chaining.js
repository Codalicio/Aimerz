// Function chaining :

// const calculate = {
//     value: 0,
//     add: function(x) {
//         this.value += x;
//         return this;
//     },
//     subtract: function(x) {
//         this.value -= x;
//         return this;
//     },
//     multiply: function(x) {
//         this.value *= x;
//         return this;
//     },
//     showResult: function() {
//         return this.value;
//     },
// };

// const result = calculate.add(10).subtract(6).multiply(3).showResult();
// console.log(result);

// --------------------------------------------------------------------------------

// const sentence = {
//     word: "",
//     first: function(w) {
//         this.word += w;
//         return this;
//     },
//     second: function(w) {
//         this.word += w;
//         return this;
//     },
//     third: function(w) {
//         this.word += w;
//         return this;
//     },
//     showSentence: function() {
//         return this.word;
//     },
// }

// const result = sentence.first("Hi, ").second("Mr.").third("Amit Raj.").showSentence();
// console.log(result);

// --------------------------------------------------------------------------------------------

// const calculate1 = {
//     value: 0,
//     add: function(x) {
//         this.value += x;
//         return this;
//     },
//     subtract: function(x) {
//         this.value -= x;
//         return this;
//     },
//     multiply: function(x) {
//         this.value *= x;
//         return this;
//     },
//     exponent: function(x) {
//         this.value **= x;
//         return this;
//     },
//     modulus: function(x) {
//         this.value %= x;
//         return this;
//     },
//     showResult: function() {
//         return this.value;
//     },
// };

// const output = calculate1.add(20).subtract(4).multiply(4).modulus(6).exponent(4).showResult();
// console.log(output);

// ----------------------------------------------------------------------------------------------

const completeSentence = {
    value: "",
    first: function(x) {
        this.value += x;
        return this;
    },
    second: function(x) {
        this.value += x;
        return this;
    },
    third: function(x) {
        this.value += x;
        return this;
    },
    showCompleteSentence: function() {
        return this.value;
    },
};

const output = completeSentence.first("My name is Amit Raj. ").second("I am a fullstack MERN developer. ").third("I just love coding.").showCompleteSentence();

console.log(output);

// --------------------------------------------------------------------------------------------

