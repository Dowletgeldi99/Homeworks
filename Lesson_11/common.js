// zadanie 1
function filterNumbersArr(numbers) {
    var newArr = numbers.find(function(element) {
        return element > 0;
    });

    return newArr;
}

filterNumbersArr([-1, 0, 3, 2, 34, -2]);

// zadanie 2
function findFirstPositiveNumber(numbers) {
    var newNumber, indexNumb;
    numbers.forEach(function(element) {
       if (element > 0 || !element) {
           newNumber = element;
       }
       
    })

    return newNumber;
}

findFirstPositiveNumber([-1, 0, 3, 2, 34, -2]);

// zadanie 3
function isPalindrome(str) {
    strReverse = str.split('').reverse().join('').toLowerCase();

    if(strReverse === str.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

isPalindrome('шалаш');

// zadanie 4
function areAnagrams(str1, str2) {
    sortedStr1 = str1.toLowerCase().split('').sort().join('');
    sortedStr2 = str2.toLowerCase().split('').sort().join('');

    if(sortedStr1 === sortedStr2) {
        return true;
    } else {
        return false;
    }
}

areAnagrams('кот', 'отк');
areAnagrams('кот', 'отко'); 
areAnagrams('tAc', 'cat'); 

// zadanie 5
function divideArr(arr , splitter) {
    var array = [];

    for (var i = 0; i < Math.ceil(arr.length/splitter); i++) {
        array[i] = arr.slice( (i * splitter), (i * splitter) + splitter );
    }

    return array;
}

divideArr([1,2,3,4,5,6,7,8], 2);