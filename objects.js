
const mysym = Symbol("key1")

const users = {
    age: 21,
    email : "pranavasati08@gmail.com",
    address : "sanichari hils",
    "contact" : "9691384141",
    [mysym] : "mykey1",

}

users.greeting = function() {
    console.log(`the email is, ${this.email}`);
    
}

// console.log(typeof users["email"]);
// console.log(typeof users["age"]);
// console.log(typeof users[mysym]);

// console.log(users.greeting());


users.greeting()


// Object.freeze(users) to freeze object i.e users