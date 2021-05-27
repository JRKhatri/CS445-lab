/**Question 02
Create a method named removeDuplicates() method which will remove duplicates in an Array. 
Make sure this method is available for only Array objects which means can call like code below. 
In the code below, this removeDuplicates()  method runs synchronously.
 
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates(); 
console.log(`end`);

// Output:
// start
// [4, 1, 5, 7, 2, 3, 6]
// end


*/

//METHOD 1
/*
 Array.prototype.removeDuplicate = function(){
    console.log([... new Set(this)]);
}
*/

//MEHOD 2
Array.prototype.removeDuplicate = function(){
    let arr =[];
    for (let i = 0; i <this.length; i++){
        if(!arr.includes(this[i])){
            arr.push(this[i])
        }
    }
    console.log(arr)
 }
 
 
 console.log("start")
  let x  = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2]
  x.removeDuplicate();
  console.log("end")
 
 
  //----------Second Part---------------//
  /**
   * Rewrite an asynchronous version of it removeDuplicatedAsync() as following:
 console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]
   */
 //METHOD 1
 
 Array.prototype.removeDuplicatesAsync = function(){
     let abc = this;    //inside method if there is function then this of that function represent global;
     new Promise(function (resolve, reject) {
         let arr =[];
    for (let i = 0; i <abc.length; i++){
        if(!arr.includes(abc[i])){
            arr.push(abc[i])
        }
    }
    resolve(arr)
 
     }).then(console.log)
 }
 
 
 //METHOD 2
 
 Array.prototype.removeDuplicatesAsyncNew = function(){
     let arr = this;
     new Promise(function(resolve, reject){
         resolve([...new Set(arr)]);
     }).then(console.log);
 }
 
 let arr =[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2]
 console.log(`start`);
 arr.removeDuplicatesAsync();
 arr.removeDuplicatesAsyncNew();
 console.log(`end`);