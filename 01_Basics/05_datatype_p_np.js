//primitive

//7 types :String,Number,Boolean,Null,Undefined,Symbol,BigInt.
//-------------------------------------------------------------------------


const score = 100
const scoreValue = 100.3

// const isLoggedIn =fasle
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345665655555555n 



//------------------------------------------------------------------------------------------------
//Reference Type(Non-Primitive)

//Array,Objects,Functions            [Object,Browser Web Events -Masrer]
//{object}

const  heros =["Pritvi","Sayongita","Siya","Ram"];
let myObj ={
    name:"sasmita",
    age:"22",
}


//function
const myFunction= function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);
console.log(typeof heros)
console.log(typeof anotherId)

//