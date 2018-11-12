"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parkingMap_1 = require("./parkingMap");
class ParkingService {
    resetMap() {
        var that = this;
        setTimeout(function () {
            that.parkingMap.spots = that.parkingMap.setRandom();
            that.resetMap();
        }, 5 * 1000);
    }
    parking() {
        return this.parkingMap;
    }
    constructor() {
        this.parkingMap = new parkingMap_1.ParkingMap();
        this.resetMap();
    }
}
exports.ParkingService = ParkingService;
