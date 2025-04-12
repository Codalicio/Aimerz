// Question 4 :

// * Calculator 

const num1 = 3;
const num2 = 4;
const operator = "**";

let result;

switch(operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    case "**":
        result = num1 ** num2;
        break;
    case "%":
        result = num1 % num2;
        break;
    default:
        result = "Invalid operator input.";
        break;
};

console.log(result);

// --------------------------------------------------------------------------------

