const tinderuser =  new Object() //singlton object 

const bubble = {
    // non-singleton object
}
console.log(tinderuser);
console.log(bubble);


const course = {
    course: "js in hindi",
    price: "999",
    courseinstr: "pranav"
}

const {courseinstr} = course;

console.log(courseinstr); // no need to write course.course.instr

// even if we want t o addrese courseinstr by any other name for our ease to accese we can do 

const {courseinstr : core} = course;

console.log(core);

//next concept

