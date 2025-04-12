// Pure function :

const add = (a, b) => {
    return a + b;
}

console.log(add(9, 7));

// Impure functions :

let count = 1;

const counter = () => {
    console.log(count);
    count++;
};

counter(count);
counter(count);
counter(count);
counter(count);
counter(count);
counter(count);
counter(count);
counter(count);
counter(count);
counter(count);

// ------------------------------------------------------------------

