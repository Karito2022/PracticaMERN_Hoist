// Vuelva a escribir el código de la forma en que lo vería el intérprete y prediga la salida.

//------------1------------
console.log(hello);                                   
var hello = 'world'; 

// var hello = 'world'; 
// console.log(hello); undefined

//------------2------------
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle = 'haystack';
// var needle = 'magnet';
// test(); function call
// output: "magnet"

//------------3------------
let brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool';
// brendan = "only okay"; -- Alcance local. 
// The función test() nunca se llama.
// console.log(brendan);
// output: "brendan";

//------------4------------
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = 'chicken';
// food = 'half-chicken'; -- alcance local para la función comer();
// var food = 'gone'; -- alcance local para la función comer();
// console.log(food);
// output "chicken";
// eat() -- función llamar.
// output "gone";

//------------5------------

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// TypeError: mean is not a function

//------------6------------

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// console.log(genre); -- undefined
// genre = "rock"; -- función de alcance local rewind()
// var genre = "r&b"; -- función de alcance local rewind()
// rewind() -- función llamar.
// output: "rock", "r&b";
// console.log(genre);
// output: "disco";

//------------7------------

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// output: "san jose", "seattle", "burbank", "san jose". 

console.log(makeDojo("Chicago", 45));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// TypeError: dojo is a constant variable, new assignment is not allowed. 
