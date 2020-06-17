const numbers = [1,2,3,4,5];

// map function
const doubleNumbers = numbers.map((num) => {
    return num*2
});

console.log(numbers);
console.log(doubleNumbers);

// other functions
// find()
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
const arry1 = [5,12,8,130,44];
const found = arry1.find((element) => {
    return element > 8
});

console.log(found);

// findIndex()
// findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
// Otherwise, it returns -1, indicating that no element passed the test.
const isLargeNumber = arry1.findIndex((element) => {
    return element === 150
});
console.log(isLargeNumber)

// filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => {
    return word.length > 6
});
console.log(result);

// reduce()
// method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
const array1 = [1,2,3,4,5,6,7,8,9,10];
const sum_array1 = array1.reduce((sum,element) => {
    return sum+element
});

console.log(sum_array1);

// concat()
// method is used to merge two or more arrays
const arr1 = ['a','b','c'];
const arr2 = ['d','e','f'];
const arr3 = arr1.concat(arr2);

console.log(arr3);

// slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log('Original animal array: ', animals);
console.log('slicing from index 2: ', animals.slice(2));
console.log('slicing from index 2-4: ', animals.slice(2,4));


// splice()
// method changes the contents of an array by 
// removing or replacing existing elements and/or adding new elements 
// in place
const months = ['jan', 'mar', 'apr', 'jun', 'gibberish'];
console.log('Initial months:');
console.log(months);
months.splice(1,0,'feb');
console.log('Inserting month of feb at index 1, without removing any element, new months: ');
console.log(months);
months.splice(4,0,'may');
console.log('Insterting may month without removing any element, new months:');
console.log(months);

months.splice(6,1);
console.log('Removing last element from months');
console.log(months);