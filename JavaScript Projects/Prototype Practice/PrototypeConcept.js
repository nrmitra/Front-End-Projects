function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(this.name)
    }
}

const player1 = new Player('Steve','X');
const player2 = new Player('Mark','O');

player1.sayName();
player2.sayName();

console.log(Object.getPrototypeOf(player1) === Player.prototype);

/*

DEMONSTRATING USAGE OF CONSTRUCTOR-PROTOTYPE PATTERN

*/

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};

let p1a = new Person('John','Doe');
let p2a = new Person('Mark','Dawson');

console.log(p1a.getFullName());
console.log(p2a.getFullName());


/*

DEMONSTRATING USAGE OF PROTOTYPAL INHERITANCE

*/

let human = {
    name: 'John Doe',
    greet: function () {
        return 'Hi I am ' + this.name;
    }
};

let teacher = {
    teach: function (subject) {
        return 'I can teach '+subject;
    }
};

teacher.__proto__ = human;

let steve = new teacher();
steve.teach('Maths');
