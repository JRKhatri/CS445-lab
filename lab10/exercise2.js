/**
 * Exercise 02
Implement the Decorator pattern to add a logger to any object (add behavior). 
A logger method will log a message to the console.

 */

class Person{
    constructor(firstname, lastname){
        this.firstname= firstname;
        this.lastname= lastname;
    }
    logger(){
        console.log(`Name: ${this.firstname} ${this.lastname}`)
    }
}

class Student{
    constructor(person, studenId, faculty ){
        this.person = person;
        this.studentId = studenId;
        this.faculty = faculty;
    }
    logger(){
        this.person.logger();
        console.log(`Id: ${this.studentId}; Faculty: ${this.faculty}`)
    }
}
const person = new Person("Jyoti", "Khatri")
person.logger();
const student = new Student(person, "12345", "MSD");
student.logger()