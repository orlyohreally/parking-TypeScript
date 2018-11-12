import {ParkingMap} from './parkingMap';

export class ParkingService {
	parkingMap: ParkingMap;
	resetMap(): void {
		var that = this;
		setTimeout(function () {
			that.parkingMap.spots =  that.parkingMap.setRandom();
			that.resetMap();
		}, 5 * 1000);
	}
	parking(): ParkingMap {
		return this.parkingMap;
	}
	constructor() {
		this.parkingMap = new ParkingMap();
		this.resetMap();
	}
}
