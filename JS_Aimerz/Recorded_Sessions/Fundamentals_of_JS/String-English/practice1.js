// String :

// const fName = 'Amit';
// console.log(fName, typeof fName);

// const lName = new String('Raj');
// console.log(lName, typeof lName);

// console.log(lName[1]);

// const name1 = new String('Akash');
// console.log(name1, typeof name1);

// const name2 = new String('Raj');
// console.log(name2, typeof name2);

// const name3 = new String('mahesh');
// console.log(name3, typeof name3);

// const name4 = new String('Rohit is my name.');
// console.log(name4, typeof name4);

// ------------------------------------------------------------------

// Properties of string :

// 1. Indexing is allowed.
// 2. Strings are immutable.

// String Methods :

// 1.) .length :

// let fullName = '  Amit Raj';
// console.log(fullName.length);

// fullName = fullName.trim();
// console.log(fullName.length);

// const place = 'Hyderabad';
// console.log(place.length);

// const address = "Hajipur (Bihar)";
// console.log(address.length);

// const email = 'rajamitnine@gmail.com';
// console.log(email.length);

// -----------------------------------------------------------------------------------

// 2.) slice() : slice(start index, end index) :

// const names = 'Abhishek';

// const slicedName = names.slice(1, names.length);
// console.log(slicedName);
// console.log(names);

// const negativeIndexSlicedName = names.slice(-6, -1);
// console.log(negativeIndexSlicedName);
// console.log(names);

// const address = "Hajipur";
// const output1 = address.slice(0, 4);
// console.log(output1);

// const place = "Hajipur";
// const output2 = place.slice(-5, -1);
// console.log(output2);

// -------------------------------------------------------------------------------------

// substring() : substring(+start index, +end index) :

// const fullName =  'amit Raj';

// let result = fullName.substring(5, 8);
// console.log(result);
// console.log(fullName);

// const output = fullName.replace('a', 's');
// console.log(output);
// console.log(fullName);

// const output1 = fullName.replaceAll('a', 's');
// console.log(output1);
// console.log(fullName);

// const place = 'Hajipur';
// const output1 = place.substring(0, 4);
// console.log(output1);

// const fullName = 'Amit Raj';
// const lastName = fullName.substring(5, 8);
// console.log(lastName);

// const details = "My name is Amit Raj. I am 28.";
// const output2 = details.substring(0, 20);
// console.log(output2);

// -------------------------------------------------------------------------

// replace() and replaceAll() :

// const name = 'I am Amit Raj';
// const output = name.replaceAll('a', 'b');
// console.log(output);
// console.log(name);

// const address = 'I live at Hajipur Bihar.';
// const output1 = address.replace('a', 'c');
// const output2 = address.replaceAll('a', 'ziva');
// console.log(output1);
// console.log(output2);
// console.log(address);

// const message = 'Welcome to our place.';
// const output1 = message.replace('o', 'a');
// const output2 = message.replaceAll('o', 'a');
// console.log(output1);
// console.log(output2);
// console.log(message);

// Global RegExp argument :
// const details = "I love dogs, dogs are my favorite";
// const output1 = details.replaceAll(/dogs/g, 'cats');
// console.log(output1);
// console.log(details);

// const pet = 'I have a dog and my dog is named lulu.';
// const output1 = pet.replace(/a/g, 'b');
// const output2 = pet.replaceAll(/a/g, 'b');
// console.log(output1, output2);
// console.log(output1 === output2);

// ---------------------------------------------------------------------------------------

// concat() :

// const name = 'Amit';
// const output = name.concat(' Raj');
// console.log(output);

// const fName = 'Sonu';
// const lName = "Raj";
// const fullName = fName.concat(lName);
// console.log(fullName);

// ----------------------------------------------------------------------------

// split() : returns an array (String to Array) :

// const name = 'amit';
// const output1 = name.split('');
// console.log(output1);
// const output2 = name.split('i');
// console.log(output2);
// const output3 = name.split('it');
// console.log(output3);
// console.log(name);

// -------------------------------------------------------------------------

// indexOf() :

// const myName = 'Mithun';
// const output = myName.indexOf('u');
// console.log(output);

// ------------------------------------------------------------------------------------

// Escape Character :

// const name = "Hello\nAmit";
// console.log(name);

// ----------------------------------------------------------------------------------------

