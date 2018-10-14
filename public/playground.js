class Car {
   constructor(){
       this.wheels = 4
       this.type = 'Hatchback'
   }
}

class Ford extends Car {
    constructor(){
        super()
        this.window = 4
    }
}

const ford = new Ford()
console.log(ford.type)
console.log(ford.window)