function printValue(value) {
    console.log(value);
};

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const calculate = (operation, a, b, callback) => {
    let result;
    if(operation === 'add') {
        result = add(a, b);
    } else if(operation === 'sub') {
        result = sub(a, b);
    } else if(operation === "mul") {
        result = mul(a, b);
    } else {
        result = "Invalid operation Input";
    };
    callback(result);
};

calculate('ul', 7, 7, printValue);

// ------------------------------------------------------------------------

