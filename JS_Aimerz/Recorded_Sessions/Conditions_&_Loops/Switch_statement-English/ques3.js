// Question 3 :

// * Traffic light :

let trafficLight = 'YEllOw';
trafficLight = trafficLight.toLowerCase();

let action;

switch(trafficLight) {
    case 'green':
        action = 'Go';
        break;
    case 'red':
        action = 'Stop!';
        break;
    case 'yellow':
        action = 'Prepare To Stop!';
        break;
    default:
        action = 'Invalid color selection.';
        break;
};

console.log(action);

// -------------------------------------------------------------------------

