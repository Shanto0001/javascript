// CREATING AN ARRAY 

// (i)
let a = [ 1,2,3,4,5,]; //Array 

a.push(6,7); //use to add elemment at last

a.pop()//use to remove elemment at last

a.shift()//use to remove elemment from first 

a.unshift(6)//use to add elemment from first

console.log(a);

//To add two array we use concat 

let a2 = [9,10,11,12,13,14]
let a3 = a.concat(a2); // Concat

console.log(a3);

//(ii) Creating Array by using second method 
// let b = new Array(5);
// console.log(b);

//Join :-  {convert to string} use to join array and print without gap or we can give any elemment  

let s = a3.join("*")
console.log(s);

//.reverse:- use to reverse an array 
a.reverse
console.log(a);



