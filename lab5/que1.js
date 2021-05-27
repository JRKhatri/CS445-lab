/**
 * Question 01
Change isPrime() that takes in a single number parameter and returns a new promise.Using setTimeout and 
after 500 milliseconds, the promise will either resolove or reject.if the input is prime number, 
the promise resolves with {prime: true}.if the input is not a prime number, it rejects with {prime: false}.
Write code and call your promisified function and test it for both scenarios (resolve and reject)
You may use the following function to determine if the number is prime or not
 
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;

    After making change to isPrime function, if you make a call as below:
    console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');

In the console, you should expect:
start
end
{ prime: true } //this is printed after 500 millionseconds

}

*/
const isPrime = (num) => {
    return new Promise(function (resolve, reject){
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) {
            setTimeout(() => reject ({prime: false}), 500)
        } else {
            setTimeout(() => resolve ({prime: true}), 500)
        }

    })
    
}

//other method
const isPrimeNew =(num) => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) {
                reject({prime:false})
            } else {
                resolve ({prime: num >1})
            }

        }, 500)
    })
}

console.log('start');
isPrimeNew(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');