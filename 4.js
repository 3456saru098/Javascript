//FUNCTION
// A set of instructions that perform specific task.

//Function Declaration OLD Syntax
function addTwoNumber() {
  const a = 10;
  const b = 20;
  const c = a + b;
  console.log(c);
}
addTwoNumber();

function Saru(a, b) {
  const c = a - b;
  console.log(c);
//   return c; its needed to return anything for function
}
Saru(100, 50);
Saru(1000, 100);



//NEW SYNTAX FOR FUNCTION
//ARROW FUNCTION(static)
const sarusharma=()=>{
 const b=1
 const c=2
 const d=b+c
 console.log(d)

};
sarusharma()

//Dynamic or global declaration
const grishma=(a,b)=>{

    const c=a*b;
    console.log(c);
};
grishma(20,20)