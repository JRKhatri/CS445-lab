### HOW JS ENGINE OPTIMIZES JAVASCRIPT CODE.
The JavaScript engine of the browser does many treatments on the JS source code to optimize it. 
Initially after receiving the JS source code by JS engine, the first treatment done by JS engine is to parse the JS source code. Parses turns the JS code into an Abstract Syntax Tree (AST). The interpreter of the JS engine works on this AST and produces unoptimized bytecode quickly and execute it. 
The optimization of the JS source code starts at this phase. During processing of AST by interpreter and converting it into unoptimized bytecode, profiling data are also downloaded at the same time. 
There is an optimizing compiler in JS engine which receives the unoptimized bytecode along with the profiling data. The job of optimizing compiler is to produce the highly optimized machine code on the basis of the profiling data it receives. While producing the highly optimized machine code, It does certain assumptions utilizing the profiling data. If the assumption turns out to be correct then it generates the optimized code, and sometimes if the assumptions is incorrect than it deoptimizes the bytecode and returns back to the interpreter.
For generating the highly optimized machine code from unoptimized bytecode there exists a pipeline between the interpreter and optimizing compiler.

Optimization of object. 
The ECMAScript specification essentially defines all objects as dictionaries, with string keys mapping to property attributes. ( https://mathiasbynens.be/notes/shapes-ics).
 In JavaScript arrays are also treated similar as objects where all keys together with indices are represented as strings explicitly. 
For efficiently working with objects, JS engines must access the property of the object as quickly as possible.
Multiple objects with the same property keys are regarded to have same shape.
e.g.    	 	 const obj1 = {x :1, y:2}
   		const obj2 = {x :5, y:6}
  
In above example obj1 and obj2 have the similar structure so have same shape. If the objects have same shape, then accessing it property can be optimized by the JS engine. While working with object JS engine search in the JSObject for the key thereby loading it property attributes and from which it returns the value associated with key. For the same shape objects, JS engine avoids the repeated storing of the property attributes in the memory instead it stores the shape of object separately which contains all the all the property attributes and name except their values property which is replaced by offset of the values inside of JSObject. These offsets indicate JS engine where to look for the values. For same shape different value objects different JSObjects are created which points exactly to the one Shape instances which stores the string keys property of objects. Hence for multiple objects with the same shape, JS engine does the optimization by storing the shape and property information once.

For the objects initially with a certain shape and later property is added in the code. In the JS engine, it forms the transition chain of shape, linking to each other as they are introduced, and each shape holds only the self- property. JS engines find the property by traversing through transition chain. 

For similar shape different property instead of chain, JS engine does the optimization by forming the transition tree. In the condition where the object have the lots of property and JS engine needs to follow the linkedlist traversing from bottom to top to access the property of key, JS engines add a ShapeTable data structure which map the property keys to the respective shape in the transition chain.

JS engines depend on Inline Caches or ICs which is the reason behind the optimization done by the shapes. ICs is mainly used by JS engine to retain the information about location of properties on objects.

As for storing arrays efficiently, JS engine uses the default array -indexed properties and does the separation while storing array elements from other named properties. However, JS engine recognizes all elements attributes, by default, similar and does not store any its property attributes.

Thus, the way of storing the objects and array and utilize the Shapes and ICs by JavaScript engines boost to optimize common operation on object and array.

_*For improving the performance of JavaScript engines JavaScript code should considered following points:*_

#   While making an object, always initialize it in the same way so that it will form same shape in JS engines. 
#   Property attributes of array elements should always keep default or do not change it unless needed so that JS engines can efficiently store and operate it during its operation.

_Sources:_
 1. https://mathiasbynens.be/notes/shapes-ics;
 2. https://www.digitalocean.com/community/tutorials/js-v8-engine
(May 20, 2021)

