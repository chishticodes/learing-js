// Immediately invoked function expressions (IIFE)


// IIFE is used to save our self from the pollution(like variable declaration etc) of the global scope
(function chai(){
    // named IIFE
    console.log('DB CONNECTED');
})();



( (name) => {
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Bilal')