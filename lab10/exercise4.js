/**Exercise 04
Create a memoized version of the following fibonacci() recursive method to improve its performance.
function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
You may use console.time(label) and console.timeEnd(label) to measure the difference in performance.
 * 
 */




class Fibonacci{
    fibonacci(num){
        if(num <=1){
            return 1;
        }
        return this.fibonacci(num-1)+this.fibonacci(num-2)
        
    }
}
// let book = new Fibonacci()
// console.log(book.fibonacci(5))

class FiboProxy{
    constructor(){
        this.fibFunction = new Fibonacci();
        this.fibonacciMem = {}
    }
    fibonacci(num){
        if(!this.fibonacciMem[num]){
            this.fibonacciMem[num]=this.fibFunction.fibonacci(num)
        } 
        console.log(this.fibonacciMem[num])
        return this.fibonacciMem[num]
    }
}

let fibNum = new FiboProxy();
fibNum.fibonacci(0)
console.log(fibNum.fibonacciMem)
fibNum.fibonacci(1)
fibNum.fibonacci(2)
console.log(fibNum.fibonacciMem)
fibNum.fibonacci(3)
fibNum.fibonacci(4)
fibNum.fibonacci(5)
console.log(fibNum.fibonacciMem)
fibNum.fibonacci(6)
fibNum.fibonacci(7)
console.log(fibNum.fibonacciMem)