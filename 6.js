// SPREAD OPERATOR (Very Important)
// It helps to make the new object or array from existing object or array

const Saru={

    username:"Hari",
    age:40,
    address:"Ktm",
    phone :6216715465465,
};


// const NewSaru={...Saru,qualification:"Bachelor Running"};
const newSaru={...Saru,age:45}
console.log(newSaru)