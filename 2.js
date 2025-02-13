// DATA TYPES IN JAVASCRIPT
//--> Classification of data into different into different types
//--> In javascript data types are of two types
// 1. PRIIMITIVE data types
// 2. NON-PRIIMITIVE data types

// 1.PRIMITIVE DATA TYPES
//-->  Those having single value
// EXAMPLE: const a=10; const b="hello"; const status=true;
//--> there are 6 primitive data types in js
// 1. Number
// 2. string
// 3. Boolean
// 4.Null
//.Undefined
// 6.BgInt(It handles above 15 digit)

// 2.NON-PRIMITIVE DATA TYPES
//-->Those having more than one value
// EXAMPLE: const students=["a","b","c"];
//--> There are three non-primitive data types in js
//Object(Object,Array,Function)
// 1.Object
// 2.Array
// 3.Function

// 1. NUMBER
const a = 10;
const b = 10.587544;
console.log(a);
console.log(b);
console.log(typeof a);

//Method in Number (toString(),toFixed())
//console.log(a.toString)
const c = a.toString();
console.log(typeof c);
console.log(c);

const d = b.toFixed();
console.log(d);

// 2. STRING
const username = "Saruu";
const surname = "Saru-Sharma";
console.log(username);

//Method in string (toUpperCase(),toLowerCase(),length,charAt(),slice(),split())
const e = username.toUpperCase();
console.log(e);

const f = username.toLowerCase();
console.log(f);

console.log(username.length);
console.log(username.charAt(2));
console.log(username.charAt(3));
console.log(username.slice(0, 2));

console.log(surname.split("-"));
console.log(surname.split("-")[1]);
console.log(surname.split("-")[0]);

//Boolean --> Its always return true or false
const isAdmin = true;
console.log(isAdmin);

const g = 10;
const h = 30;
console.log(h > g);

//--> Value given to the variableS bt the value is empty which is known as NULL
let abc = null;
let xyz = null;
console.log(abc);
console.log(xyz);

//--> When we declare variable and not assign any value to it is known as UNDEFINED
var myname;
let surrname;
console.log(myname);
console.log(surrname);

//BG-INT
const i = 12846572659373456789087653456789056782345678965412345678n;
console.log(i);
console.log(typeof i);

//OBJECT
//-->Collection of key value pairs under the same name
const person = {
  name: "Saru Sharma",
  college: "mbm",
  address: "Kathmandu",
};
console.log(person);

// Method of object (object.keys(),object.values(),object>entries())
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(Object.keys(person)[0]);
console.log(Object.values(person)[1]);
console.log(Object.entries(person)[1][1]);


//ARRAY
//Collection of similar data type under the same name
//Example: const students=["ram","raj","hari"];

//Array can further classified into two types
// 1. Array of string
// 2. Array of object


// 1.ARRAY OF STRING
// Array made from collection of string under the same name
 const students=["ram","raj","hari"];
 console.log(students)

 const numbers=[1,2,3,4,5,6]
 console.log(numbers)


 //ARRAY OF OBJECT
// Array made from collection of object under the same name

const people=[

    {
        name:"saru",
        age:14,
    },
    {
        name:"saruuuu",
        age:13,
    },

    {
        name:"loki",
        age:12,
    },


    {
        name:"grishma",
        age:11,
    }
];

console.log(people) 
console.log(people.length)
console.log(people[0])
console.log(people[0].age)
console.log(people[0].name.toUpperCase());
console.log(people[0].name.slice(0,4).toLowerCase());


//Methods of array (push())
const newPeople=[
    {
        name:"usuwi",
        age:80,
    }
]
console.log(people.push(newPeople))
console.log(people.push({name:"raj",age:40}))
console.log(people)


        


 

 


