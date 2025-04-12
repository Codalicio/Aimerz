// Question 5 :

// * Vowel or Consonant :

const vowelOrConsonant = (letter) => {
    let result;
    if(typeof(letter) === 'string') {
        letter = letter.toLowerCase();
        switch(letter) {
            case 'a':
            case 'e':
            case 'i':
            case '0':
            case 'u':
                result = 'Vowel';
                break;
            default:
                result = "Consonant";
                break;
        };
    } else {
        result = "Invalid Input!";
    };
    console.log(result);
}

vowelOrConsonant('Z');

// -------------------------------------------------------------------

