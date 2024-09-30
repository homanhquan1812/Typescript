// Objects
let myInformation1: object = {
    name: "Ho Manh Quan",
    age: 24
};

let myInformation2: {
    name: string,
    age: number
} = {
    name: "Ho Manh Quan",
    age: 24
};

// Interface
interface myInformation {
    name: string,
    age: number
};

// Type
/*
type MyInformation = {
    name: string;
    age: number;
};
*/

let myInformation3: myInformation = {
    name: "Ho Manh Quan",
    age: 24
};

console.log(myInformation1);
console.log(myInformation2);
console.log(myInformation3);
