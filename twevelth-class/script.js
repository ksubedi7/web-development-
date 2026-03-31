let animals = ["cow", "goat"];

let last = animals.pop();  
animals.push("horse", "camel");
animals.push(last);
console.log(animals);



let arr1 = ["horse", "cow"];
let arr2 = ["zebra", "tiger"];


let combined = arr1.concat(arr2);


console.log("Array 1:", arr1);       
console.log("Array 2:", arr2);          
console.log("Combined Array:", combined);