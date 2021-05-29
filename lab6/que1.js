/*Redo yesterday's lab - Lab 5 using Async & Await
You may still use Promise, add new methods to finish the lab.
Exercise 01 changes:
After your making the change, you method call will look like below:

console.log('start');
isPrimeAsync(5);
console.log('end');

The output in console:
start
end
{prime:true}

*/

const isPrime = function(num){
        return new Promise(function(resolve,reject){
            setTimeout(() => {
                for(let i = 2, r = Math.sqrt(num); i <= r; i++){
                    if(num % i === 0){
                        reject({prime:false});
                    }
    
                }
                resolve({prime : num >1})
            },500)
        })
    }
    
    async function isPrimeAsync(num){
        let answer = await isPrime(num)
        console.log(answer)
    }
    
    console.log('start');
    isPrimeAsync(5);
    console.log('end');