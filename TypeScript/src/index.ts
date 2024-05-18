

// basic types

let num : number = 6;
let myname: string = 'daniel';


let o : any = 'hello';


//Tuple types
let student: [number, number,string] = [1,2,'dan']


//union
let uni: string | number = 'helloworld';

//enums
enum directions {
    up ,dow, left,right
}

// console.log(directions.up)

// objects

type MyObject = {
    name: string,
    age: number,
    position: number,
}

let obj: MyObject = {
  name: 'Daniel',
  age: 25,
  position: 9,
};

//Type assertions
let numer: any = 2
// let numer2 = <string>numer;
let numer2 = numer as number;

//Functions
function multiply(x: number, y: number): number {
    return x * y;
}

// console.log(multiply(2,9));

//void type
function log(message: string | number ): void{
    // console.log(message);
}

log(20)

//interfaces
interface MyInterface  {
    name: string,
    age: number,
    position: number,
}

let obj1: MyInterface = {
  name: 'Daniel',
  age: 24,
  position: 9,
};


//classes

interface MyClassInterface {
    id: number,
    name: string,
    register(): string
}
class MyClass implements MyClassInterface {
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    register(){
        return `${this.name} registered`
    }

}

let dan = new MyClass(2,'daniel')
console.log(dan.register())