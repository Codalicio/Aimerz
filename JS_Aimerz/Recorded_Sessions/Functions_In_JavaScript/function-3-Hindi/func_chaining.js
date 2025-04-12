
// const calculate = {
//     value: 0,
//     add: function(x) {
//         this.value += x;
//         return this;
//     },
//     sub: function(x) {
//         this.value -= x;
//         return this;
//     },
//     mul: function(x) {
//         this.value *= x;
//         return this;
//     },
//     result: function() {
//         return this.value;
//     },
// };

// const output = calculate.add(10).sub(6).mul(3).result();
// console.log(output);

// -------------------------------------------------------------------

const calculate = {
    value: 0,
    add: function(x) {
        this.value += x;
        return this;
    },
    sub: function(x) {
        this.value -= x;
        return this;
    },
    mul: function(x) {
        this.value *= x;
        return this;
    },
    result: function(){
        return this.value;
    },
};

const output = calculate.add(10).sub(6).mul(3).result();
console.log(output);

// -------------------------------------------------------------

