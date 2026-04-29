let arr = [1, 2];

//push
arr.push(3);
console.log(arr);


//pop
arr.pop()
console.log(arr);; 


let arr1 = [1,2,3];
//shift
arr1.shift(); 
console.log(arr1);



//unshift
arr1.unshift(0); 
console.log(arr1);


let arr2 = [1,2,3,4];
//splice
arr2.splice(1,2);
console.log(arr2);

//slice

let arr3 = [1,2,3,4];
let newArr = arr3.slice(1,3);

console.log(newArr); 

//concate

let a = [1,2,6];
let b = [3,4,5];

let c = a.concat(b);

//toString
console.log(c.toString());

//join
console.log(c.join('-'));

//map
let arr4 = [1,2,3];

let result = arr4.map(x => x * 2);
console.log(result);

//filter

let arr5 = [1,2,3,4];

let result2 = arr5.filter(x=> x > 2);
console.log(result2);

//forEach
arr.forEach(x => console.log(x));

//find

 let arr6 = [1,2,3,4,5 ,6];

arr6.find(x => x >= 1);
console.log(arr6.find(x => x > 3));

//includes
console.log(arr6.includes(4));


//last index

console.log(arr6.lastIndexOf(4));

