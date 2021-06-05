"use strict";
/*Exercise 04
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and
add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);

rectangle.width = 5;
rectangle.length = 2;

rectangle.calcSize = function() {
    return this.width * this.length;
};

console.log(rectangle.calcSize()); // 10
*/
//solution
class Rectangle {
    constructor() {
        this.calcSize = () => {
            return 0;
        };
    }
}
class BaseObject extends Rectangle {
    constructor() {
        super(...arguments);
        this.width = 0;
        this.length = 0;
    }
}
let rectangle = new BaseObject();
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.length * this.width;
};
console.log(rectangle.calcSize());
