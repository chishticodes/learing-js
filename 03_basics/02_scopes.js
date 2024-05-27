let a = 300

if(true){
    let a = 10
const b = 20
var c = 30

// console.log(a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Bilal"

    function two(){
        const website = "youtube"
        
        console.log(username);
    }
    // console.log(website);

    two();
}
one();



if(true){
    const username = "Bilal"
    if(username=="Bilal"){
        const website = 'youtube'
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ===========================INTRESTING========================================

console.log(addOne(5));

function addOne(num){
    return num+1
}




// this is function expressions


const addTwo = function(num){
    return num+2
}

console.log(addTwo(5)); 
