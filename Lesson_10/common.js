//zadanie 2
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = {};

function deepClone(firstObject) {
    var obj = {}; 

    for (var temp in firstObject) {
        if( typeof firstObject[temp] === 'object' ) {
            if( Array.isArray(firstObject[temp]) ) {
                obj[temp]= [];
                for (var i = 0; i < firstObject[temp].length; i++) {
                    obj[temp][i] = firstObject[temp][i];
                }    
            } else {
                if (firstObject[temp] == undefined) {
                    obj[temp] = firstObject[temp];
                } else {
                    obj[temp] = deepClone(firstObject[temp]);
                }
            }   
        } else if (typeof firstObject[temp] === 'function') {
                obj[temp] = firstObject[temp];
        } else {
            obj[temp] = firstObject[temp];
        }
    }

    return obj;
}

clonedObj = deepClone(initialObj);
clonedObj.string = 'Petya';
clonedObj;
initialObj;


//zadanie 1
function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}
Animal.prototype.formatFoodAmount = function(){
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this.formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }
    this._foodAmount = amount;
};


Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);    
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Animal;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
barsik.feed().stroke();

console.log(barsik.dailyNorm(600));
barsik.stroke().feed();

console.log(barsik.dailyNorm(250));
barsik.stroke().feed();