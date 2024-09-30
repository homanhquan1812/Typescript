let a = 1, b = 4.72;
let c = a + b * 2;
// String
let school: string = 'Ho Chi Minh City University of Technology';
// Boolean
let isTrue: boolean = true;
let isTrue2: boolean = Boolean("Ho Manh Quan"); // True
let isFalse: boolean = Boolean(""); // False
// Annotation
let d: number; // => Int, Double, Float
d = 5;
// Array:
let arr: Array<string> = ['KFC', 'MacDonalds'];
let arr2: string[] = ['Popeyes', 'Mr. Thinh'];
let arr3: number[] = [1, 2, 3];
let arr4 = [69, 'Among Us'];
let arr5: (string | number)[] = [69, 'Among Us'];
// Tuples: (Data type + Size + Order)
let myInformation: [string, number, boolean?] = ["Ho Manh Quan", 24];

console.log(c);
console.log(isTrue, isTrue2, isFalse);
console.log(c + d);
console.log(school.length);
console.log(typeof(school));
console.log(arr, arr2, arr3, arr4, arr5);
console.log(myInformation);

// Any
let anyVariableType: any = "Ho Manh Quan";

console.log(anyVariableType);

anyVariableType = 24;

console.log(anyVariableType);