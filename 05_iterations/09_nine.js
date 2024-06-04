// reduce

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`accumulator = ${acc} and current Value= ${currVal}`)
//     return acc * currVal

// }, 4)

const myTotal = myNums.reduce((acc, currVal)=>{
    console.log(`accumulator = ${acc} and current Value= ${currVal}`)
    return acc + currVal
},4)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: 'js course',
        price: '2999'
    },
    {
        itemName: 'python',
        price: '2999'
    },
    {
        itemName: 'data science',
        price: '2999'
    }
]

const totalPrice = shoppingCart.reduce((acc, item)=> acc + Number(item.price), 0)

console.log(totalPrice);