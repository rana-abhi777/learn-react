// objects and arrays are reference typed
// meaning: copy of object will store pointer to original object

// whereas for variables it is primitive type
// meaning they create a new copy of variable from which they are 
// copied from 

const person = {
    name: 'John'
};

const secondPerson = person;
console.log('Before update, copy object: ', secondPerson);
person.name = 'Doe';
console.log('After update, copy object: ', secondPerson);

// now to avoid reference type for objects
const thirdPerson = {
    ...person
};
person.name = 'Jake';
console.log(thirdPerson);

let num = 10;
let num1 = num;

num += 20;
console.log(num1);