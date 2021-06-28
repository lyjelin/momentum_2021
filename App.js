function sayHello( nameOfPerson, age ) {
    console.log("Hello my name is "+nameOfPerson+" and I am "+age+".");
}

sayHello("Elin", 22);
sayHello("Dal", 23);
sayHello("Lynn", 21);

function plus(a, b){
    console.log(a+b);
}

plus(15, 13);

function divide(a, b){
    console.log(a/b);
}

divide(12, 2);

const player = {
    name: "Elin",
    sayHello: function(personName){
        console.log("Hello! "+personName + ". Nice to meet you!");
    },
};

player.sayHello("Lynn");