// strings
console.log("hello, world");

let email = "ola@learningjavascript.fi"
console.log(email)


// string concatenation
let firstName = "Ola"
let lastName = "Ayina"

let fullName = firstName + "" + lastName

console.log(fullName);

// getting characters 
console.log(fullName[0])

// string length 
console.log(fullName.length)

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

console.log(result, fullName);

let index = email.indexOf("@");
console.log(index);

// common strng methods 
let icloud = "ola@javascript.co.fi";

// let outcome = icloud.lastIndexOf("i");

// let outcome = icloud.slice(2,5);

// let outcome = icloud.substr(4,10)

let outcome = icloud.replace("j", "T")




console.log(outcome)


