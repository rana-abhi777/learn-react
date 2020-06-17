// resolves issue with this keyword
// when used inside arrow functions always points to inside object

function printMyName(name){
    console.log(name);
}

printMyName('John');

const printName = (name) => {
    console.log(name);
};

printName('Doe');

const mulitply = (number) => {
    return number * number;
};

const multiply_another = number => number * number;


console.log(mulitply(10));
console.log(multiply_another(20));