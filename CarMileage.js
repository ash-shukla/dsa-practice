// Car Mileage
const cars = [
  { make: "Toyota", model: "Camry", year: 2020, mileage: 30800 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 32000 },
  { make: "Chevrolet", model: "Impala", year: 2018, mileage: 17500 },
  { make: "Audi", model: "R8", year: 2020, mileage: 13000 },
  { make: "Tesla", model: "Model 3", year: 2021, mileage: 50000 },
];
function carMileage(carData) {
  const mileages = carData.map((car) => car.mileage);
  const avgMileage =
    carData.reduce((a, b) => a + b.mileage, 0) / carData.length;
  return `Maximum mileage is ${Math.max(...mileages)}
     and Minimum mileage is ${Math.min(...mileages)}
     and the average mileage is ${avgMileage.toFixed(2)}`;
}
console.log(carMileage(cars));
/*Maximum mileage is 50000
and Minimum mileage is 13000
and the average mileage is 28660.00 */
/==================================================================================/;
