function add(x,y) {
    return x + y;
}
 console.log(add(2,3)); //returns 5
 function greet(name) {
    console.log('Hello, ${name}!');
 };
 greet('John Doe');

 function sayMyName(){
    console.log('Michael');
    console.log('John');
    console.log('Krissy');
 };
 sayMyName();

 function sum(a,b){
    return a + b;
 };
 console.log(sum(1,2));
 num1 = sum(1,2);
 console.log(num1);

 const square = (x) => {
    return x * x;
 };
 console.log(square(5));

 const math = (a,b) => {
    return a * b;
 }
 console.log(math(8,4));

 const person = {
    name: 'Charles',
    shirt: 'white'
 }

 console.log(person['name']);
 person.phone = '444-555-7777'
 console.log(person.phone);
 console.log(person);

 const introducer = (name,shirt) => {
    const person = {
        name: name,
        shirt: shirt
    }
    const intro = 'Hi, my name is ${person.name} and the color of my shirt is ${person.shirt}'

    return intro
    
 }

 console.log(introducer('Terry','black'));
 console.log(introducer('Michael','white'));