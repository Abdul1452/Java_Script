// for loops 

// for(let i = 0; i < 5; i++){
//     console.log("in loop:", i);
// }
// console.log("loop finished")
// const names = ["shaun", "mario", "luigi"];

// for (let i = 0; i < names.length; i++){
//     // console.log(names[i])
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// While loops
// let i = 0;
// const names = ["shaun", "mario", "luigi"];
// // while(i < 5){
// //     console.log("in loop: ", i);
// //     i++;
// // }
// while(i < names.length){
//     console.log(names[i]);
//     1++;
// }


// do while loops 
let i = 3;

do{
    console.log("val of i is: ", i);
    i++;
}
while(i < 5)

    // break and continue
const scores = [50, 25, 0, 30, 100, 20, 10] 

for(let i = 0; i < scores.length; i++){
    console.log("your score; ", scores[i]);
    
    if(scores[i] === 0){
        continue;
    }

    if(scores[i] === 100){
        console.log("congrats,you got the top score!")
        break;
    }
}