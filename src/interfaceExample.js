"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(cdPlay, model, make) {
        this.cdPlay = cdPlay;
        this.model = model;
        this.make = make;
    }
    Car.prototype.display = function () {
        console.log("test");
    };
    return Car;
}());
exports.Car = Car;
;
var Car1 = {
    model: 'Prius',
    make: 'Toyota',
    display: function () { console.log("hi"); }
};
exports.CarInstance = Car1;
