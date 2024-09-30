/*
Loop through an object and print the key-value pairs with their types


let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};


output:

key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean

*/
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
let keys= Object.keys(myObject);
console.log(keys);
for(let key of keys){
    console.log('key:',key,'|','typeof:',typeof(myObject[key]));
}