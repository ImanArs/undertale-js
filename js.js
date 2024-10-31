let c = '123'
console.log(Number(c));
console.log(+c);

let b = '123213'
console.log(!!b);
console.log(Boolean(b));

let a = 12345
console.log(a.toString());
console.log(String(a));

// ----- Типы Данных -------
// Boolean
// String
// Number
// null
// undefined
// Symbol
// BigInt
// Object
// ----- ------

let str = '123' // mogu
const str2 = '12313' // net

const person = {
  age: 25,
  name: 'Arsen',
  isStudent: {a: 12, b: 12},
  isDeveloper: ['js', 'python'],
  isTeacher: 123,
  isHuman: true,
} // object 
console.log(person.isStudent.a);
console.log(person['isStudent'].a); // {a: 12, b: 12}

const arr = [1, 2, 3, 4, 5]; // массив - object
console.log(arr); // [1, 2, 3, 4, 5]
