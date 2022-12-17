//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function type, parameters

// Primitives

let age: number;
age = 12;

let text: string;
text = "textExample";

let isSomething: boolean;
isSomething = true;

// More complex types:

let hobbies: string[];

hobbies = ["soccer", "swimming", "fighting"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Airon",
  age: 29,
};

// Combining object with array

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React Course";

// It will throw an error because variable course was inference as string:
// course = 123;

// This will not throw an error was I definied a union type (string and number) for this variable:
let anotherCourse: string | number;

anotherCourse = 123;

// Type aliases:

type Citizen = {
  name: string;
  age: number;
};

let oldCitizen: Citizen;

let oldCitizenGroup: Citizen[];

// Functions & Types
// Typescript will automatically show the function type based on their parameters
function SumNumbers(a: number, b: number) {
  return a + b;
}

// Functions that don't have a return will be set as void
function printOut(value: any) {
  console.log(value);
}

// Generics
// Set a function with <T> as type will tell TypeScript that this function have a concrete type and if I have any input typescript will understand which type is it,
// helping the developer to use only methods related to that type.
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, 0); // [0, 1, 2, 3]

const stringArray = insertAtBeginning(["a", "b", "c"], "d");
