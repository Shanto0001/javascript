// (i) Making an array

let Array = [1,2,3,4,5,6,7]

Array.push(8,9,10); //It will add element at the end of array

Array.pop(); //It will remove element at the end of array


console.log("Array a is printed",Array);

let Array2 = [11,12,13,14,15,16,18]

Array2.unshift(19) // It will add element at the starting of array 
Array2.shift(1) // It will remove the first index of element

console.log(Array2);

let Array3 = [21,22,23,24,25,26]
let Array4 = [27,28,29,30]

 let Merged = Array3.concat(Array4); // concat is used to add diff array in one.
 console.log("Your Merged Array:- ",Merged);

let Array5 = [31,32,33,34,35,36,37]
console.log("Your reverse is ready:-  ",Array5.reverse()); //.reverse is used to reverse an array


let Array6 = [41,42,43,44,45,46]
console.log("yor slice array is ready:-",Array6.slice(0,3));//.slice is used to make slice of an array

let Array7 = [51,52,53,54,55,56]
console.log(Array7.indexOf(55));// .indexof it define the place of element in array


let Array8 = [61,62,63,64,65]
Array8.splice(0,0,1); //.splice is used to add or replace content any index u want  {Note:- it cant be write in log }
console.log("Your Splice is ready:- ",Array8);