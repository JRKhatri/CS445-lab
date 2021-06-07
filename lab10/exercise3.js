/**
 * Exercise 03
Implement the Strategy pattern to choose between different logging algorithms, choosing between:
console.info()
console.warn()
console.error()
console.table() accepts an array of objects
 */

class Info {
    logging(msg){
        console.info(msg)
    }
}
class Warn {
    logging(msg){
        console.warn(msg)
    }
}
class Error {
    logging(msg){
        console.error(msg)
    }
}
class Table {
    logging(msg){
        console.table(msg)
    }
}

class Strategy{

    setStrategy(loggingType){
        this.strategy = loggingType;
    }
    logging(msg){
        this.strategy.logging(msg);
    }

};
const stg_Info = new Info();
const strategy = new Strategy()
strategy.setStrategy(stg_Info);
strategy.logging("Information about Strategy");
strategy.setStrategy(new Warn())
strategy.logging("Warning");
strategy.setStrategy(new Error())
strategy.logging("Error")
strategy.setStrategy(new Table())
strategy.logging(["one",2,"three",{four : 4}, true])



