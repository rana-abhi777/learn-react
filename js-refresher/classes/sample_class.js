class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender(){
        console.log(this.gender);
    }
}
class Person extends Human {
    // name = 'John';
    constructor(name='John'){
        super();
        this.name = name;
    }
    call()  {
        console.log('Printing the name: ', this.name);
    }
}

const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);
console.log(myPerson.printGender());