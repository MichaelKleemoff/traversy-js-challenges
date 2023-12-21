function analyzeCarMileage(cars) {
	// Plan:
	// 1. Create a new `cars` object
	// Use an `object literal` and save it to a `variable`
	const allCarsCalculations = {
		totalMileage: 0,
		highestMileageCar: 0,
		lowestMileageCar: 0,
		averageMileage: 0,
	};

	// 2. Iterate over the array of objects
	// Use the `.reduce()`
	// 3. Find the `total mileage` and save it to a new key in the new object
	allCarsCalculations.totalMileage = Number(
		cars.reduce((total, { mileage }) => total + mileage, 0).toFixed(2)
	);

	// 5. Find the `highest mileage` and save it to a new key in the new object
	let highest = cars[0].mileage;

	for (let i = 1; i < cars.length; i++) {
		if (cars[i].mileage > highest) {
			highest = cars[i].mileage;
		}
	}

	allCarsCalculations.highestMileageCar = cars.find(
		(car) => car.mileage === highest
	);

	// 6. Find the `lowest mileage` and save it to a new key in the new object
	let lowest = cars[0].mileage;

	for (let i = 1; i < cars.length; i++) {
		if (cars[i].mileage < lowest) {
			lowest = cars[i].mileage;
		}
	}

	allCarsCalculations.lowestMileageCar = cars.find(
		(car) => car.mileage === lowest
	);

	// 4. Get the `average` using `.reduce()` (getting total and dividing by `cars.length`) and save it to a new key in the new object
	allCarsCalculations.averageMileage = Number(
		(
			cars.reduce((total, { mileage }) => total + mileage, 0) / cars.length
		).toFixed(2)
	);

	// 7. Return the new object
	return allCarsCalculations;
}

module.exports = analyzeCarMileage;
