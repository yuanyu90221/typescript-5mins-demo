var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isEletric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is " + this.model);
    };
    return Car;
}());
var Prius = new Car('Prius', 4, true);
Prius.displayMake();
