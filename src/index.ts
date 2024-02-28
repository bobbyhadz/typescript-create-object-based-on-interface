export {};

// EXAMPLE 1 - Create an Object based on an Interface in TypeScript

interface Employee {
  salary: number;
  name: string;
  address: {
    country: string;
    city: string;
  };
}

// ✅ Declare directly
const obj: Employee = {
  salary: 100,
  name: 'Bobby Hadz',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};
console.log(obj);

// ---------------------------------------------------

// // EXAMPLE 2 - Using type assertion

// interface Employee {
//   salary: number;
//   name: string;
//   address: {
//     country: string;
//     city: string;
//   };
// }

// // ✅ Using type assertion
// const obj = {} as Employee;

// obj.name = 'Bobby Hadz';
// obj.salary = 200;

// ---------------------------------------------------

// // EXAMPLE 3 - Using default values when declaring the object

// interface Employee {
//   salary: number;
//   name: string;
//   address: {
//     country: string;
//     city: string;
//   };
// }

// // ✅ Declare directly
// const obj1: Employee = {
//   salary: 0,
//   name: '',
//   address: {
//     country: '',
//     city: '',
//   },
// };
// console.log(obj1);

// ---------------------------------------------------

// // EXAMPLE 4 - Create an Object based on an Interface using a type assertion

// interface Employee {
//   salary: number;
//   name: string;
//   address: {
//     country: string;
//     city: string;
//   };
// }

// const obj = {} as Employee; // 👈️ type assertion

// obj.name = 'Bobby Hadz';
// obj.salary = 200;

// ---------------------------------------------------

// // EXAMPLE 5 - Marking properties as optional

// interface Employee {
//   salary?: number; // 👈️ optional
//   name?: string; // 👈️ optional
//   address: {
//     country: string;
//     city: string;
//   };
// }

// const obj1: Employee = {
//   address: {
//     country: 'Chile',
//     city: 'Santiago',
//   },
// };
// console.log(obj1);

// ---------------------------------------------------

// // EXAMPLE 6 - Create an Object based on an Interface using a custom function

// interface Employee {
//   salary: number;
//   name: string;
//   address: {
//     country: string;
//     city: string;
//   };
// }

// function createEmployee(options?: Partial<Employee>): Employee {
//   const defaults = {
//     salary: 0,
//     name: '',
//     address: {
//       country: '',
//       city: '',
//     },
//   };

//   return {
//     ...defaults,
//     ...options,
//   };
// }

// const obj: Employee = createEmployee({ name: 'Bobby Hadz' });

// // 👇️ {salary: 0, name: 'Bobby Hadz', address: {country: '', city: ''}}
// console.log(obj);
