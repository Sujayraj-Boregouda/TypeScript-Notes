let myAge = 30;
console.log(myAge);

let num = 60;


let ny : string = 'sujay';
console.log(ny)


console.log("hello aishu.....1")

let names: string[] = ['sujay', 'Aishu'];
let mynum: number[] = [31, 32,];

names.push('Dhanya');
mynum.push(65);

let user : {firstName: string, age: number, id: number} = {
    firstName: 'vijay',
    age: 44,
    id: 10
}

function addTwoNumnbers(a: number, b: number): number {
    return a + b;
}

const subTwoNumbers = (a:number, b:number):number => {
    return a - b;
}

console.log(addTwoNumnbers(3, 8));
console.log(subTwoNumbers(12, 3));

// 
function allNumbers(items: number[]): void {
    const total = items.reduce((a,c) => a + c , 0)
    console.log(total);
}

allNumbers([9,1,1,3,0,9,2,5,9,7])

//
function formatGreeting(name: string, greeting:string){
    return `${greeting}, ${name}`
} 

const result = formatGreeting('sujay', 'hello');

// 
let things: any[] = ['hello', 36, null]
things.push({id: 123})

console.log(things)

// 
function addTogether(value: any): any {
    return value + value;
}

const resultOne = addTogether('hello ');
const resultTwo = addTogether(3 + 3);

console.log(resultOne);
console.log(resultTwo);


// tuples
let person: [string, number, boolean] = ['mario', 30, true];

let hsla: [number, string, string, number];
hsla = [200, '100%', '50%', 1]

console.log(hsla);

function useCords(): [number, number] {
    const lat = 100;
    const long = 50;

    return [lat, long]
}

const [lat, long] = useCords();

console.log(useCords());

// named tupels

let userData: [name: string, age: number];
userData = ['teacher', 89];

console.log(userData[0])


// Interfaces

interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {name: 'sujay', avatar: 'img/sujay.png'}

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at : Date,
    author: Author
}

const newPost: Post = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at : new Date(),
    author: authorOne   
}

console.log(newPost);

// Function Argument types

function createPost(post: Post): void {
    console.log(`Created ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// with Arrays

let posts: Post[] = []

posts.push(newPost)


// Type Aliases //

// ex 1 - tuple

type Rgb = [number, number, number];

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r,g,b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();

console.log(colorOne, colorTwo);

// ex 2 - object literal

type User = {
    name: string
    score: number
}

const userOne: User = {name: 'sujay', score: 99}

function formatUser(user: User): void {
    console.log(`${user.name} has a score of ${user.score}`)
}

formatUser(userOne)
formatUser({name: 'Dhwani', score: 66})


// Union Types //

let someId: number | string 

someId = 1
someId = '2'


let email: string | null = null

email = 'sujayraj.gouda@gmail.com' // login
email = null // logout


type Id = number | string 
let anotherId : Id
anotherId = 'sjr'
anotherId = 33


// union type pitfall

function swapIdType(id: Id) {
    if (typeof id === 'string') {
        return parseInt(id)
    } else {
        return id.toString()
    }
}

const idOne = swapIdType(1)
const idTwo = swapIdType('2')

console.log('"result of one"', idOne)
console.log('"result of two"', idTwo)


// tagged interfaces

interface LatestUser {
    type: 'latest-user',
    userName: string,
    email: string,
    id: Id
}

interface Person {
    type: 'person',
    firstName: string,
    age: number,
    id: Id
}

function logDetails(value: LatestUser | Person): void {
    if (value.type === 'latest-user') {
        console.log(value.email, value.userName)
    }
    if (value.type === 'person') {
        console.log(value.firstName, value.age)
    } 
}