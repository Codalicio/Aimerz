// Question - 1 : Two Sum :

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let presentElement = nums[i];
    let presentElementIndex = i;
    let differenceElement = target - presentElement;
    let differenceElementIndex = nums.indexOf(differenceElement);
    if (
      differenceElementIndex !== -1 &&
      presentElementIndex !== differenceElementIndex
    ) {
      return [presentElementIndex, differenceElementIndex];
    }
  }
};

const output1 = twoSum([2, 7, 11, 15], 9);
const output2 = twoSum([3, 2, 4], 6);
const output3 = twoSum([3, 3], 6);

console.log(output1, output2, output3);

// --------------------------------------------------------------------
