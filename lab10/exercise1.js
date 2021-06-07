/**
 * Exercise 01
Implement the Factory pattern and create two types of light bulbs, regular bulbs and energy saver bulbs.
•	Regular bulbs have a range of lumens between 50 and 100 and last for 1 year.
•	Energy saver bulbs have a range of lumens between 5 and 40 and last for 10 years.

 */
class RegularBulb{
    constructor(){
        this.lumens = "50 and 100";
        this.life = "1 year";
        
    }
}
class EnergySaver{
    constructor(){
        this.lumens ="5 and 40";
        this.life = "10 years"
    }
}

class Bulb{
    
    bulbType(type){
        let bulb;
        if(type === "Regular"){
            bulb = new RegularBulb();
        }else if(type === "Energy saver"){
            bulb = new EnergySaver()
        }
        bulb.type = type;
        
        bulb.display = function(){
            console.log(`${this.type} bulbs have a range of lumens between ${this.lumens} and last for ${this.life}`)
        }

        return bulb;
    }
}

const bulb = new Bulb();
const bulb1 =bulb.bulbType("Regular");
const bulb2 = bulb.bulbType("Energy saver");
bulb1.display();
bulb2.display();
