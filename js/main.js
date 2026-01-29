const { use } = require("react");

console.log("\n=== Деструктуризация массивов ===");

const colors = ["red", "green", "blue"];

const color1 = colors[0];
const color2 = colors[1];

console.log(color1, color2)

const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const [primary, , tertiary] = colors;
console.log(primary, tertiary);

const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);

console.log("\n=== Деструктуризация объектов ===");

const user = {
    name: "Alisa",
    age: 25,
    city: "Москва",
}
// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);

// const {name, age, city} = user;
// console.log(name, age, city);

// const {name : fullName, age: years} = user;
// console.log(fullName, years);

// const {name: personName, country = "Россия"} = user;
// console.log(personName, country);

console.log("\n=== Деструктуризация в парамметрах ===");

// function printUserOld(user) {
//     console.log(`Name: ${user.name}`);
//     console.log(`Age: ${user.age}`);
//     console.log(`City: ${user.city}`);
// }
// function printUser({name, age, city}) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`City: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//     name : "Молоко", 
//     price : 100, 
//     category : "Молочные товары", 
//     inStock : true,
// }

// const {name, price, category, inStock} = product;

// console.log(name);
// console.log(price);
// console.log(category);
// console.log(inStock);

// function printProduct(product) {
//     console.log(product.name);
//     console.log(product.price);
//     console.log(product.category);
//     console.log(product.inStock);
// }

console.log("Spread для массивов");

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [...arr1, ...arr2];
// console.log("Объудинённый массив:", combined);

// const copy = [...arr1];
// console.log("Copy arr:", copy);

// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);

console.log("Spread для объектов");

// const person = {
//     name: "Ivan",
//     age: 30,
// }
// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// }

// const fullInfo = {...person, ...address};
// console.log("Полная информация:", fullInfo);

// const personCopy = {...person};
// console.log("Копия объекта:", personCopy);


// const updated = {...person, age: 31, occupation: "Deeveloper"};
// console.log("Обнавлённый объект:", updated);

console.log("Rest оператор");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Sum 1, 2, 3: ", sum(1, 2, 3));
// console.log("Sum 1, 2, 3, 4, 5: ", sum(1, 2, 3, 4, 5));

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("First number:", first);
// console.log("Second number:", second);
// console.log("Остольные числа:", rest);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

function  findMax(...numbers) {
    let maxEl = -1000;
    for (let i =0; i < numbers.length; i++) {
        if ( maxEl < numbers[i]) {
            maxEl = numbers[i];
        }
    }
    return maxEl;
}

const person = {
    name: "Ivan",
    age: 30,
}
const address = {
    city: "Санкт-Петербург",
    street: "Невский проспект",
}

const fullInfo = {...person, ...address};
console.log("Полная информация:", fullInfo);