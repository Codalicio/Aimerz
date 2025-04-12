// Set : 
// 1.) Duplicate values are not allowed.
// 2.) It sores only unique values.
// 3. Order is preserved.

// const phoneNumbers = new Set();

// phoneNumbers.add(123);
// phoneNumbers.add(456);
// phoneNumbers.add(456);
// phoneNumbers.add(678);

// console.log(phoneNumbers);

// const iterator = phoneNumbers.values();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// console.log(phoneNumbers.has(123));
// console.log(phoneNumbers.values());

// phoneNumbers.delete(456);
// console.log(phoneNumbers);
// phoneNumbers.clear();
// console.log(phoneNumbers);

// console.log(phoneNumbers.size);

// phoneNumbers.add(7257);
// phoneNumbers.add(123);
// phoneNumbers.add(457);
// phoneNumbers.add(9087);
// phoneNumbers.add(675);


// phoneNumbers.forEach((data) => {
//     console.log(data);
// });

// --------------------------------------------------------------------

// const names = new Set();

// names.add('amit');
// names.add('sumit');
// names.add('rajat');
// names.add('aman');
// names.add('saurabh');

// console.log(names);
// console.log(names.size);

// names.delete('aman');

// console.log(names);
// console.log(names.size);

// console.log(names.has('aman'));

// const iterator = names.values();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// names.forEach((data) => {
//     console.log(`Hello, ${data}`);
// });

// names.clear();
// console.log(names);

// -----------------------------------------------------------------------------------

const person = new Set();

person.add('Amit');
person.add(456);
person.add('Amit');

console.log(person);
console.log(person.size);
console.log(person.has(456));

const iterator = person.values();
console.log(iterator);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


person.forEach((data) => {
    console.log(data);
})