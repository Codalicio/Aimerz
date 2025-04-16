// Polyfills : Code snippets that allow newer features in older environments.

// Array : includes

Array.prototype.myIncludes = function (element) {
  for (let arrayItem of this) {
    if (arrayItem === element) {
      return true;
    }
  }
  return false;
};

const nums = [1, 5, 8, 12];

console.log(nums.includes(12));
console.log(nums.myIncludes(12));
console.log(nums.includes(121));
console.log(nums.myIncludes(121));

// Array : length

Array.prototype.myLength = function () {
  let length = 0;
  for (let arrayItem of this) {
    if (arrayItem) {
      length += 1;
    }
  }
  return length;
};

const nums1 = [];
const nums2 = ["anil", 1, 45, []];
console.log(nums1.myLength());
console.log(nums2.myLength());

// ----------------------------------------------------------------------
