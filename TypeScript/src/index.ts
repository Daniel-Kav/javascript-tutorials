

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

