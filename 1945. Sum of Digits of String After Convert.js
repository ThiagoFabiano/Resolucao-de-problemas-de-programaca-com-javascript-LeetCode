/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let convertedStringIntoNumbers = []
    for(let char of s){
        convertedStringIntoNumbers.push(transform(char))
    }

    let numbersIntoString = '';
    convertedStringIntoNumbers.forEach(num => {
        numbersIntoString += num.toString()
    })

    let result = 0;
    for(let i = 1; i <= k; i++){
        let parcialResult = 0
        for(let char of numbersIntoString){
            parcialResult += parseInt(char)
        }

        numbersIntoString = parcialResult.toString()
        result = parcialResult;

    }

    return result;
};

function transform(l){
    let position;
    switch (l) {
         case 'a':
            position = 1;
            break;
        case 'b':
            position = 2;
            break;
        case 'c':
            position = 3;
            break;
        case 'd':
            position = 4;
            break;
        case 'e':
            position = 5;
            break;
        case 'f':
            position = 6;
            break;
        case 'g':
            position = 7;
            break;
        case 'h':
            position = 8;
            break;
        case 'i':
            position = 9;
            break;
        case 'j':
            position = 10;
            break;
        case 'k':
            position = 11;
            break;
        case 'l':
            position = 12;
            break;
        case 'm':
            position = 13;
            break;
        case 'n':
            position = 14;
            break;
        case 'o':
            position = 15;
            break;
        case 'p':
            position = 16;
            break;
        case 'q':
            position = 17;
            break;
        case 'r':
            position = 18;
            break;
        case 's':
            position = 19;
            break;
        case 't':
            position = 20;
            break;
        case 'u':
            position = 21;
            break;
        case 'v':
            position = 22;
            break;
        case 'w':
            position = 23;
            break;
        case 'x':
            position = 24;
            break;
        case 'y':
            position = 25;
            break;
        case 'z':
            position = 26;
            break;
        default:
            position = 'Invalid letter';
    }

    return position;
}