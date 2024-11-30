import { add, subtract, multiply, divide } from "./mathOperations.js";

// =====================Q1========================
function explainScopes() {
    var x = "I am function-scoped.";
    let y = "I am block-scoped.";
    const z = "I am block-scoped and immutable.";

    if (true) {
        var a = "This is var and can be accessed outside this block.";
        let b = "This is let and only accessible inside this block.";
        const c = "This is const and only accessible inside this block and immutable.";

        console.log(`Inside the block:
        var: ${a}
        let: ${b}
        const: ${c}`);
    }

    return `Outside the block:
    var: ${x}
    let: ${y}
    const: ${z}
    Accessible var from block: ${a}`;
}

console.log(explainScopes());

// =====================Q2========================
let inputNum = +prompt("Enter any number")
console.log("User Entered Number: " + inputNum);

const double = createMultiplier(2)
const triple = createMultiplier(3)

function createMultiplier(multiplier) {
    return function (inputNum) {
        const result = inputNum * multiplier;
        console.log(inputNum + " * " + multiplier + " = " + result);
    }
}

// createMultiplier();
double(inputNum)
triple(inputNum);
// =====================Q3========================
const user = {
    name: "Fatima",
    age: 22,
    // country : "Pakistan",
    // city : "Karachi"
}

const destructureFunc = ({ name, age, country = "Ireland", city = "Dublin" }) => {
    // var {country = "Ireland", city = "Dublin" } = user;
    const result = `She lives in ${country} in the ${city} city`;
    console.log(result);

    return result;
}

destructureFunc(user)

// =====================Q4========================
const calculateTotal = (price, ...discounts) => {
    discounts.forEach(discount => {
        price = price - discount;
    });

    return price;
}

console.log("The final discounted price: " + calculateTotal(5200, 300, 500));

// =====================Q5========================
const calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2
}

console.log(calculator.add(55, 20))
console.log(calculator.subtract(500, 50))

// =====================Q6========================
const books = [
    { title: "The Comfort Book", author: "Matt Haig", yearPublished: 2020 },
    { title: "The 48 Laws of Power", author: "Robert Greene", yearPublished: 1998 },
    { title: "The Kite Runner", author: "Khaled Hosseini", yearPublished: 2003 }
]

const bookLog = (books) => {
    let bookInfo = "";
    for (let book of books) {
        bookInfo = bookInfo + `Title: ${book.title}, Author: ${book.author}, Year: ${book.yearPublished}\n\n`;
    }

    console.log(bookInfo);
    return bookInfo;
}

bookLog(books)

// =====================Q7========================
function* idGenerator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const gen = idGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// =====================Q8========================
console.log("<====== Using Imported Functions: ======>");

console.log(`Addition: ${add(10, 5)}`);      
console.log(`Subtraction: ${subtract(10, 5)}`); 
console.log(`Multiplication: ${multiply(10, 5)}`); 
console.log(`Division: ${divide(10, 5)}`);

// ======================Q9=========================
const student ={
    name: "Fatima",
    age: 23,
    grade: "A",
    subjects : ["Data Structures", "Computer Architechture", "Information Security"]
}

for (let x in student){
    console.log(`Student Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}, Enrolled Subjects: ${student.subjects}`);
}

// =====================Q10=======================
var numArray = [2,4,6];
const squares = numArray.map(numArray => numArray ** 2)
console.log("Original Numbers: " + numArray);
console.log("Squared Numbers: " + squares);

// =====================Q11========================
const operate = () =>{

}

// =====================Q12========================
setTimeout(() =>{
    console.log("Hello World!");
},3000)

// =====================Q13========================
const getCurrentTime = () =>{
    const intervalId = setInterval(() => {
        console.log(new Date().toLocaleTimeString());
        
    }, 2000);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Cleared Interval")
    }, 10000);
}

getCurrentTime()

// =====================Q14=======================
async function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Requesting Data.....");
            resolve(console.log("Data Received!"));
            
        },2000)
    })
    
}

fetchData()
    .then((message) => {console.log(message);});

// ====================Q15========================
async function fetchAsyncData() {
    try {
        const data = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data Received through async await!");
            }, 2000);
        });

        console.log(data); 
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchAsyncData()

// ====================Q16========================
const power = (base, exponent) => base ** exponent;
console.log("Logging Base and Exponent's final Value: ");

console.log(power(2, 3));
console.log(power(5, 2)); 
console.log(power(10, 0));


