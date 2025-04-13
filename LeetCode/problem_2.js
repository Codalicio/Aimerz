// Question - 9 : Palindrome Number :

const isPalindrome = function (x) {
  let a = x.toString();
  let b = a.split("").reverse().join("");
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

const output1 = isPalindrome(121);
const output2 = isPalindrome(-121);
const output3 = isPalindrome(10);
console.log(output1, output2, output3);
