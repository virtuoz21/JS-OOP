const carses = [];

class Car {
    constructor(model, mark, country, speed) {
        this.model = model;
        this.mark = mark;
        this.country = country;
        this.speed = speed;
    }
    increaseSpeed(value) {
        this.speed += value;
        return this.speed;
    }
    decreaseSpeed(value) {
        this.speed -= value;
        return this.speed;
    }
}

class Truck extends Car {
    constructor(model, mark, country, speed) {
        super(model, mark, country, speed);
    }
    takeWeight(weight) {
        const carsInfo1 = `Truck ${this.mark} ${this.model} take ${weight}kg`;
        carses.push(truck);
        carses.push(carsInfo1);
    }
}

class Bus extends Car {
    constructor(model, mark, country, speed) {
        super(model, mark, country, speed);
    }
    takePeople(people) {
        const carsInfo2 = `Bus ${this.mark} ${this.model} take ${people}people`;
        carses.push(bus);
        carses.push(carsInfo2);
    }
}

class Transporter extends Car {
    constructor(model, mark, country, speed) {
        super(model, mark, country, speed);
    }
    takeCars(cars) {
    const carsInfo3 = `Transporter ${this.mark} ${this.model} take ${cars} cars`;
    carses.push(transporter);
    carses.push(carsInfo3);
    }
}

const truck = new Truck('XF', 'Daf', 'Netherlands', 80);
truck.takeWeight(4000);
truck.increaseSpeed(10);
truck.decreaseSpeed(15);

const bus = new Bus('A22212', 'Богдан', 'Ukraine', 70);
bus.takePeople(40);
bus.increaseSpeed(15);
bus.decreaseSpeed(10);

const transporter = new Transporter('R 450', 'Scania', 'Sweden', 70);
transporter.takeCars(6);
transporter.decreaseSpeed(10);
transporter.increaseSpeed(5);

console.log(carses);