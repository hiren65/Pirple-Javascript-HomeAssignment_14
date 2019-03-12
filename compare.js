/*
*   Homework Assignment #14: Callbacks and Promises
*/

/*
    Objectives
    Create two different scripts. One will contain the callback-centered code,
    and the other the promises-centered code. The two scripts should contain the same functionality,
    and solve the same problems.
*/
// 1. Calculate the square of num and log it to the console
// 2. Wait "num" milliseconds
// 3. Determine the prime-number that is closest to num
//    without being greater than or equal to num, and then log it to the console
// 4. Determine the prime-number that is closest to num without being greater than or equal to num,
//    and then log it to the console
// 5. Count the total elapsed time from when the original function was called until the last step was completed,
//    and log that to the console as well.

//callback
let date0,date00;
function calSquare(num,callback,callback1) {
    date0 = new Date();
    setTimeout(function () {
        console.log(`Sqare of ${num} is ` + num*num);
        date00 = new Date();
        let diff = date00 - date0;
        console.log("time elapsed "+diff);
    },800);

    callback(num);
    callback1(num);

}

function squareRoot(num) {
    console.log(`Square root of ${num} is `  + Math.sqrt(num));
}
function findNearestPrime(x){
    let yy = x;
    for (let i=x-1;i>0;i--){
       if (isPrime(i) === true){
           console.log("prime Number near " +  i);return i;
       }

    }
}

function isPrime(num){
    if (num < 2) return false;
     /**
     * An integer is prime if it is not divisible by any prime less than or equal to its square root
     **/
     let q = Math.floor(Math.sqrt(num));
    for (let i=2;i<q;i++){
        if ( num%i===0 ){
            //console.log("find " + num + "and " + i );
            return false;
        }

    }
    return true;
}
//let xyz = isPrime(97);
//console.log(xyz);

console.log("/////////////// Callbacks ///////////////////////");
calSquare(121,squareRoot,findNearestPrime);

//Promises



let date1,date2;
new Promise(function (resolve,reject) {

    date1 = new Date();
   setTimeout(function (num=100) {
       resolve (num);
       console.log(`////////Promises///////  \n In Promise Square of ${num} is `+ num*num);
   },800);
})
.then(function (num) {
    let tt = findNearestPrime(num);
    console.log(`In Promise Nearest Prime number of ${num} is ` + tt);
    return (num);
})
.then(function (num) {
    console.log(`In Promise Square root of ${num} is ` + Math.sqrt(num));
    date2 = new Date();
    let diff = date2 - date1;
    console.log("time elapsed in promise "+ diff);
       return  Math.sqrt(num);
})
.catch(function (err) {
    console.log("error is " + err);
});