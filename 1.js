// 1.JAVASCRIPT  DEFINITION
//-->JS IS THE OBJECT ORIENTED CLIENT SIDE SCRIPTING LANGUAGE.
//-->IN early days javascript was only used in browser for interactivity.
//-->Later js was used in server side also after the introduction of node.js.

// 2.VARIABLES IN JS
//--> VARIABLES  are the containers to store the  values.
//--> In js we declare variables using var,let and const.

//var
//--> it is old way of declaring variables(dont use it in modern js)
//--> it support re-declaring and re-assigning variable.

var a = 5;
console.log(a);

//Redeclaration the variable
var b = 10; //declaration
var b = 20; //re-declaration
console.log(b);

//Reassigning the variable
var c = 30;
c = 40;
console.log(c);

//Let
//--> It is recommended way of declaring variables in modern js.
//--> It doesnot support re-declaration bt supports re-assigning

//Re-declaring the variable is not possible
//let d=60;
//let d=70;
//console.log(d);

//Re-assigning the variable is not possible
let s = 1;
s = 2;
console.log(s);

//Const
//--> It is recommended way of declaring variables in modern js.
//--> Re-declaration and re-assigning the variable is not supported.

// RE-declaring the variables
//const x=40
//const x=55;
//console.log(x);

//Re-assigning the variables
//const k=60;
//k=66;
//console.log(k);

// 3.UNDEFINED  AND NULL
//--> When we declare variable and not assign any value to it is known as UNDEFINED
var myname;
let surname;
console.log(myname);
console.log(surname);


//--> Value given to the variableS bt the value is empty which is known as NULL
let abc = null;
let xyz = null;
console.log(abc);
console.log(xyz);


// 4. OPERATORS  IN JAVASCRIPT
//--> Operators are used to perform logical, mathematical and comparison operations.

//ASSIGNMENT OPERATOR
//--> It is used to assign the value to the variable.
const sarusharma = 40;
let hiiii = "this is hiii";


//COMPARISON OPERATORS
const saru = 20;
const subuu = 10;


//Greater than (>) //--> It returns boolean value
console.log(saru > subuu, "This is greater than operator");


//Less than (<) //--> It returns boolean value
console.log(saru < subuu, "This is less than operator");

//ADDITION OPERATOR(+)
console.log(saru + subuu, "This is addition operator");


//SUBRACTION OPERATOR (-)
console.log(saru - subuu, "This is subtraction operator");

//MULTIPLICATION OPERATOR(*)
const z = saru * subuu;
console.log(z, "This is multiplication operator");

//DIVISION OPERATOR(/)

y = saru / subuu;
console.log(y, "This is division operator");


// VALUE EQUAL TO OPERATOR(==)
const value1 = 10;
const value2 = "10";
console.log(value1 == value2);


//Type equal to operator(===)
console.log(value1 === value2);


//Value not equal to operator(!=)
console.log(value1 != value2);

//Type not equal to operator(!==)
console.log(value1 !== value2);


//GREATER THAN OR EQUALS TO OPERATOR (>=)

const ab = 6
const cd = 6
console.log(ab >= cd)

//LESS THAN OR EQUALS TO OPERATOR (<=)

const bb = 6
const dd = 6
console.log(bb <= dd)



//CONDITIONAL OPERATOR (?:) //-->(short form of If else)
const criteriaAge = 28;
const studentAge = 29;
console.log(studentAge>criteriaAge ? "yes you are elligible" : "You are not elligible")

//INCREMENT OPERATOR (++) (IT INCREASE THE VALUE BY 1)
let increment =10;
//increment++;
++increment;
console.log(increment);

//DECREMENT OPERATOR (--) (IT DECREASE THE VALUE BY 1)
 let decrement=10;
 //decrement--;
 --decrement;
 console.log(decrement);



