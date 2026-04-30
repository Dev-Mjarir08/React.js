//shallow copy

let obj= {
    fname:"Jarir",
    lname:"Multani",
    age:"24",
    address:{
        city:"Navsari",
        State:"Gujrat",
    }
}
let obj1 ={...obj}
obj1.fname="Aadil"
console.log(obj1);


//deep copy

let obj2= {
    fname:"Jarir",
    lname:"Multani",
    age:"24",
    address:{
        city:"Navsari",
        State:"Gujrat",
    }
}
 let obj4=JSON.stringify(obj2)
 console.log(obj2);
 
let obj3 =JSON.parse(obj4)
obj3.address.city="Vyara"
console.log(obj3);

