// Objects
// const firstname = "Olga";
// const age = 38;
// const profession = "teacher";
//
// // const person = {
// //     firstname: firstname,
// //     age: age,
// //     profession: profession
// // }
//
// const newKey = prompt("Che altra caratteristica vuoi aggiungere?");
// const newValue = prompt("Inserisci ora il valore");
//
// const person = {
//   firstname,
//   age,
//   profession,
//   [newKey]: newValue
// };
//
// console.log(person);

// 2. Array destructuring
// const namesArray = ['Luca', 'Michele', 'Fabio'];

// const firstName = namesArray[0];
// const secondName = namesArray[1];
//
// console.log(firstName, secondName);

// const [firstName , secondName, thirdName] = namesArray;
// console.log(secondName);
//
// // 3. Objects destructuring
// const student = {
//     name: "Pippo",
//     age: 30,
//     email: "pippo@gmail.com"
// };
//
// // const name = student.name;
// // const age = student.age;
//
// const {name, age} = student;
// console.log(name, age);

// 4. Spread operator negli array
// const namesArray = ['Luca', 'Michele', 'Fabio'];

// const copyArray = namesArray; // NON è la copia! E' solo un'atro puntatore sullo stesso array
//
// // copyArray.push("Pippo");
//
// const realCopyArray = [...namesArray];
//
// realCopyArray.push("Pippo");
//
// console.log("copia", realCopyArray);
// console.log("origianl", namesArray);

//
// const copyArray = ["Olga", ...namesArray, "Ludovica"];
//
// // console.log(copyArray);
//
// const nameArray2 = ["Serena", "Gianmarco"];
// const newName = "Pippo";
//
// const result = [...namesArray, newName , ...nameArray2];
//
// console.log(result);

// 5. Spread operator in objects
// const student = {
//   name: "Pippo",
//   age: 30,
//   email: "pippo@gmail.com",
// };
// 
// const student2 = {
//     name: "Pluto",
//     profession: "web developer"
// }
// 
// // const studentCopy = student; // NON è la copia vera
// // studentCopy.lastname = "Bianchi";
// 
// const studentCopy = {
//     ...student,
//     lastname: "Bianchi",
//     ...student2
// };
// 
// // studentCopy.lastname = "Bianchi";
// console.log(studentCopy);
// // console.log(student);

// 6. Rest operator
// 
// console.log(sumNumbers(2,3,6,12,89));
// console.log(sumNumbers(1,2,3));
// console.log(sumNumbers(3));
// console.log(sumNumbers(-1));
// 
// // function sumNumbers(a, b) {
// //     return a + b;
// // }
// 
// // Vorrei una funzione che esegue una somma di qualsiasi numero di parametri
// function sumNumbers(...numbers) {
//     console.log(numbers); // array
//     let result = 0;
//     numbers.forEach((num) => {
//         result += num;
//     })
//     return result;
// }