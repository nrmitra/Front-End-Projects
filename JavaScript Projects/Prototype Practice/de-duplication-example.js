/*

NOT GOOD PRACTICE
BELOW CODE IS JUST FOR ILLUSTRATIO OF THE CONCEPT
*/


Object.prototype.greet = function(){
    console.log(`${this.name} says hello to everyone!`)
};

const neel = {
    name : "neel",
};

neel.greet();


/*

ARROW FUNCTION DOES NOT DO BINDING

*/

const alex = {
    name: "Alex",
    greetings: function (){
        console.log(this);
        console.log(`${this.name} says hi!`)
    },
    arrowGreetings: () => {
        console.log(this);
        console.log(`${this.name} says hello!`);
    },
};

alex.greetings();
alex.arrowGreetings();