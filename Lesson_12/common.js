function doObj(inputArr) {

    var newArr = inputArr.map(function(item) {
        return {name : item};
    });

    return newArr;
}

doObj(['Aman', 'Serdar', 'Gulistan']);


// 2 zadaniye 

function doTime(array) {
    str = 'Текущее время';
    var newStr = array.reduce(function(str , element, i , array) {
        return str +=  ' : ' + array[i];
    },str);

    return newStr;
}

doTime(['00', '13', '24']);

// 3 zadaniye 

function returnVowels(str) {
    var vowelsArr = 'ауоыиэяёеaeiouy'.split('');
    var count = 0;

    var strVowelsArr = str.toLowerCase().split('');
    for (var i = 0; i < strVowelsArr.length; i++){
        if (vowelsArr.indexOf(strVowelsArr[i]) !== -1){
            count++;
        }
    }
    return count;
}
returnVowels('Salam   Men Aman gara');

// zadanie 4
function countSentencesLetters(input){
    var inputSplitedArray = input.split(/[.?!]/g);
    for (var i =0; i < inputSplitedArray.length; i++){
        if (inputSplitedArray[i] !== ""){
            console.log( inputSplitedArray[i].trim() + ': Letters quantity is: ' + inputSplitedArray[i].replace(/[\s,]/g, '').length );
        }
    }
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');