// Question 6 :

// * Grade Calculator :

let score = 50;
let grade;

switch(true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    case score >= 70:
        grade = 'C';
        break;
    case score >= 60:
        grade = 'D';
        break;
    case score >= 50:
        grade = 'E';
        break;
    default:
        grade = 'Fail'
        break;
};

console.log(grade);

// ----------------------------------------------------------------------------------

