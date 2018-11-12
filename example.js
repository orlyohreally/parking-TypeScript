"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parkingService_1 = require("./parkingService");
function getParking(parkingServiceInstance, t) {
    setTimeout(function () {
        //console.log('---------------- in ', t ,' seconds -------------');
        console.log(parkingServiceInstance.parking().get());
    }, t * 1000);
}
let parkingServiceInstance = new parkingService_1.ParkingService();
getParking(parkingServiceInstance, 10);
getParking(parkingServiceInstance, 30);
getParking(parkingServiceInstance, 45);
