// Car Object Challenge
// Create a function that creates car objects which have a make, model year, and color.
// Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.

function createCar(model, year, make) {
  let speed = 0;
  return {
    model: model,
    year: year,
    make: make,
    getSpeed: () => {
      return speed;
    },
    accelerate: () => {
      if (car.getSpeed() >= 90) {
        console.log('Maximum speed reached')
      } else {
        speed += 10;  
      }
    },
    brake: () => {
      speed -= 7;
    }
  }
}

function giddyUp(car) {
  while (car.getSpeed() < 70) {
    car.accelerate();
  }
}

function slowDown(car) {
  while (car.getSpeed() > 0) {
    car.brake();
  }
}