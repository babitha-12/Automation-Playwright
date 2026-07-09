"use strict";
class car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    display() {
        console.log(this.brand);
    }
}
const object1 = new car("BMW");
object1.display();
