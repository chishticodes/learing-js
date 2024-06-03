// for loop

// for(let i=1; i<11; i++){
//     if(i == 5){
//         console.log("5 is the best number");
//     }
//     console.log(i);
// }


// nested for loop
for(let i = 0; i <= 10; i++){
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop value: ${j} and outer loop value is ${i} `);
    }
}