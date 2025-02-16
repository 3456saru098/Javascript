//ARRAY
// cOLLECTION OF SIMILAR ITEMS UNDER the same name
//Example:
const students = [
  "ram",
  "shyam",
  "mohan",
  "hari",
  "Saru Sharma",
  "bibek",
  "bibek",
]; //Array of string
const teachers = [
  { name: "ram", subject: "maths" },
  { name: "ram", subject: "science" },
  { name: "shyam", subject: "science" },
]; //Array of objects

console.log(students);
console.log(teachers);

//Method of arry
// 1. At
console.log(students[1]);
console.log(teachers[0]);
console.log(teachers[0].subject);

// 2.Length
console.log(students.length);
console.log(teachers.length);

// 3.Push
students.push("Saru");
console.log(students);

teachers.push({ name: "Hari", subject: "English" });
console.log(teachers);

// 4. Slice
//console.log(students.slice(1, 3));
//console.log(students.slice(2, 4));

// 5. Splice
//console.log(students.splice(2, 4));

// 6. Filter(Very important)

// const response = students.filter((student) => {

//     return student === "grishma"
// })
// console.log(response)
//OR

//const response = students.filter((student)=> student==="hari");
//console.log(response,"response")

//const res=students.filter((student)=> {

//  return student.length >6;
//});
//console.log(res)

//REVISE ARRAY FILTER
const response = students.filter((student) => {
  return student === "bibek";
});
console.log(response);

const responsee = teachers.filter((teacher) => {
  return teacher.name === "ram";
});
console.log(responsee);

const res = teachers.filter((teacher) => {
  return teacher.subject === "maths";
});
console.log(res);

// filter ko run garda slice ra splice comment garne natra  expected  output aaudaina 
