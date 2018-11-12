import {ParkingSpot} from './parkingSpot';

export class ParkingMap {
	spots: ParkingSpot[];
	setRandom(): ParkingSpot[] {
		let spots = [];
		const states = ["BUSY", "VACANT"];
		for(let sec = "A".charCodeAt(0); sec <= "J".charCodeAt(0); sec++) {
			for(let sp = 1; sp <= 12; sp++) {
			  let spot = <ParkingSpot>{section: String.fromCharCode(sec), spot: sp, state: states[Math.floor(Math.random() * 2)]};
			  spots.push(spot);
			}
		}
		return spots;
	}
	constructor() {
		this.spots = this.setRandom();
	}
	get(): ParkingSpot[] {
		return this.spots;
	}
}