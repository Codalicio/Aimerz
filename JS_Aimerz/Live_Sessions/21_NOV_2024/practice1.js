// if it is raining don't go to college.
// Decision maker : is it raining or not.
// Action : Going to college

const isItRaining = true;

if (isItRaining) {
  console.log("Don't go to college");
} else {
  console.log("Go to college");
}

// ---------------------------------------------------------------------

// Decision maker : if light color is ReadableByteStreamController, green or yellow or any other.
// Action : Print a message

const lightColor = "red";

switch (lightColor) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get Ready!");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Input");
    break;
}

// ---------------------------------------------------------------

// A person is eligible to have a voter id card only if he/she is 18 or above and should must be a citizen of India.
// Decision Maker: Age and Citizenship
// Action: A message stating whether a person is eligible or not to have a voter id card.

const age = 18;
const citizenship = false;

const messageToBeDisplayed =
  age >= 18 && citizenship ? "You are eligible." : "You are not eligible.";

console.log(messageToBeDisplayed);

// -----------------------------------------------------------------------
