const accoutNumber = 12345
let accountEmail = "pranavasati02@gmail.com"
let accountCity = "pune"
let accountName = "pranav"

console.table([accountName, accoutNumber, accountCity, accountEmail])

// Datatypes in js
// number => 
// bigint
// strings => "pranav"
// boolean => true/false
// null => standaslone / object
// undefined => undefined 
// symbol

console.log(typeof null)
console.log(typeof "pranav")
console.log(typeof accoutNumber);

// type conversions
let someNumber = 123
let Converstring =  String(someNumber)
console.log(Converstring);
console.log(typeof Converstring);
let loggedIn = 1;
let BooleanLoggedIn = Boolean(loggedIn);
console.log(BooleanLoggedIn);

// testing the loggedIn Conversion from string to boolean
loggedIn = "pranav"
console.log(typeof loggedIn);

BooleanLoggedIn = Boolean(loggedIn)
console.log(BooleanLoggedIn);

// string => true
// 0 as number => false
// 1 as number => true

