// spread operator:
// used to split array elements or object properties
const oldArray = [10,20,30];
const newArray = [...oldArray, 1,2];
console.log(oldArray);
console.log(newArray);

const oldObject = {'old-value': 20, 'old-value1': 400};
const newObject = {...oldObject, 'newProp':5, 'old-value':100};
console.log(oldObject);
console.log(newObject);

// rest operator:
// used to merge a list of function arguments into an array
const filter = (...args) => {
    return args.filter(element => element === 1);
}

console.log(filter(1,2,3,4,5));