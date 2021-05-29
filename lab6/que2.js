
/*Redo yesterday's lab - Lab 5 using Async & Await
You may still use Promise, add new methods to finish the lab.
Exercise 02 changes:
After your making the change, you method call will look like below:
*/


//METHOD 1
Array.prototype.removeDuplicatesAsync = async function(){
    let arr = await [];
    for (let i = 0; i <this.length; i++){
        if(!arr.includes(this[i])){
            arr.push(this[i])
        }
    }
    console.log(arr)
 }
// METHOD 2
/*  async function removeDuplicates(arr) {
    return [...new Set(arr)];
 }

Array.prototype.removeDuplicatesAsync = async function() {
    let arr = this;
    let result = await removeDuplicates(arr);
    console.log(result);
}


//METHOD 3
 Array.prototype.removeDuplicatesAsync = async function() {
    let arr = this;
    let result = await new Promise(function(resolve, reject) {
        resolve([...new Set(arr)]);
    });
    console.log(result);
}
*/
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicate();
console.log(`end`);