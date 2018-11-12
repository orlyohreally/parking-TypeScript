import {ParkingService} from './parkingService';

function getParking(parkingServiceInstance, t): void {
	setTimeout(function () {
		//console.log('---------------- in ', t ,' seconds -------------');
		console.log(parkingServiceInstance.parking().get());
	}, t * 1000);

}

let parkingServiceInstance = new ParkingService();

getParking(parkingServiceInstance, 10);
getParking(parkingServiceInstance, 30);
getParking(parkingServiceInstance, 45);





