"use strict";
let myAge = 30;
console.log(myAge);
let num = 60;
let ny = 'sujay';
console.log(ny);
console.log("hello aishu.....1");
let names = ['sujay', 'Aishu'];
let mynum = [31, 32,];
names.push('Dhanya');
mynum.push(65);
let user = {
    firstName: 'vijay',
    age: 44,
    id: 10
};
function addTwoNumnbers(a, b) {
    return a + b;
}
const subTwoNumbers = (a, b) => {
    return a - b;
};
console.log(addTwoNumnbers(3, 8));
console.log(subTwoNumbers(12, 3));
// 
function allNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
allNumbers([9, 1, 1, 3, 0, 9, 2, 5, 9, 7]);
//
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('sujay', 'hello');
// 
let things = ['hello', 36, null];
things.push({ id: 123 });
console.log(things);
// 
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello ');
const resultTwo = addTogether(3 + 3);
console.log(resultOne);
console.log(resultTwo);
// tuples
let person = ['mario', 30, true];
let hsla;
hsla = [200, '100%', '50%', 1];
console.log(hsla);
function useCords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCords();
console.log(useCords());
// named tupels
let userData;
userData = ['teacher', 89];
console.log(userData[0]);
const authorOne = { name: 'sujay', avatar: 'img/sujay.png' };
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
};
console.log(newPost);
// Function Argument types
function createPost(post) {
    console.log(`Created ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// with Arrays
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'sujay', score: 99 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userOne);
formatUser({ name: 'Dhwani', score: 66 });
// Union Types //
let someId;
someId = 1;
someId = '2';
let email = null;
email = 'sujayraj.gouda@gmail.com'; // login
email = null; // logout
let anotherId;
anotherId = 'sjr';
anotherId = 33;
// union type pitfall
function swapIdType(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log('"result of one"', idOne);
console.log('"result of two"', idTwo);
function logDetails(value) {
    if (value.type === 'latest-user') {
        console.log(value.email, value.userName);
    }
    if (value.type === 'person') {
        console.log(value.firstName, value.age);
    }
}
