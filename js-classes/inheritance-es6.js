const nowYear = 2019;

class Car {
	constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
		this.name = name;
		this.model = model;
		this.year = year;
		this.color = color;
		this.maxSpeed = maxSpeed;
		this.fuelCapacity = fuelCapacity;
		this.fuelConsumption = fuelConsumption;
	}

	getFullName() {
		console.log(`${this.name} ${this.model}`);
	}

	getAge() {
		console.log(`${nowYear - this.year}`);
	}

	changeColor(color = this.color) {
		if (color === this.color) {
			console.log("up to you");
		} else {
			this.color = color;
			console.log("color change");
		}
	}

	calculateWay(kilometers, fuel) {
		if (fuel < 10) {
			console.log("need refueling");
		} else {
			console.log(`the time that you need to reach the destination ${kilometers/this.maxSpeed} hours`);
			let requiredAmountOfFuel = kilometers*(this.fuelConsumption/100) - fuel;
			let numberOfGasStation = 0;
			for (let i = 0; requiredAmountOfFuel > 0; i++) {
				requiredAmountOfFuel = requiredAmountOfFuel - this.fuelCapacity;
				numberOfGasStation = i++;
			}
			console.log(`number of gas stations ${numberOfGasStation}`);
		}
	}
}

class BMW extends Car {
	constructor(...arg) {
		super(...arg);
		this.sunroof = true;
	}
	seeBMW = () => console.log("BBBMMMWWW!!!");
}

class Lexus extends Car {
	constructor(...arg) {
		super(...arg);
		this.climateControl = true;
	}
	seeLexus = () => console.log("LexusLexusLexus!!!");
}

class Audi extends Car {
	constructor(...arg) {
		super(...arg);
		this.navigator = true;
	}
	seeAudi = () => console.log("AudiAudiAudi!!!");
}

let car = new Car("BMW", "E-60", 1990, "yellow", 120);
let bmw = new BMW("srx", "e-39", 1980, "blue", 155);
let audi = new Audi("RQ", "520", 2000, "green", 210);
let lexus = new Lexus("qwe", "1000", 2019, "white", 300, 120, 16);

console.log(bmw);
console.log(audi);
console.log(lexus);




