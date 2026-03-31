// if  else statements
const age = 25;

if(age > 20){
    console.log("You are over 20 years old");
}

const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

if(ninjas.length > 3){
    console.log("That's a lot of ninjas")
}

const password = "p@ss"


if(password.length >= 12){
    console.log("thaat password is mighty strong ");
}else if(password.length >= 8){
    console.log("that password is long enough");
}else {
    console.log("password is not long enough");
}

//  switch statements 

const grade = "D";

switch(grade){
    case "A":
        console.log("you get an A!");
        break;
    case "B":
        console.log("you got a B!");
        break;
    case "C":
        console.log("you got a C!");
        break;
    case "D":
        console.log("you got a D!");
        break;
    case "E":
        console.log("you got a E!");
        break;
    default:
        console.log("Not a valid grade!");
}
// 'switch uses strict comparison 50 === "50" not equal