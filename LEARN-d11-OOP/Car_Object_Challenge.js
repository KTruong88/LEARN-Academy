function newCar(newMake, newYear, newModel, newColor) {
var speed = 50;
  return {
    make: newMake,
    year: newYear,
    model: newModel,
    color: newColor,
    getCar: function() {
      return this.make + ' ' + this.year + ' ' + this.model + ' ' + this.color;
    },
    getSpeed: function() {
      return Math.floor(speed);
    },
    accelerate: function() {
      if (speed >= 85) {
        alert(make.value + ' ' + 'Max speed limit reached!')
      } else {
          speed += 5;
          console.log("speed up by 5mph")
      }

    },
    brake: function() {
      speed = speed - (speed *= (Math.random() * 0.5))
    }
  };

}

function newCarInfo() {
  var year = document.getElementById('year').value
  var make = document.getElementById('make').value
  var model = document.getElementById('model').value
  var color = document.getElementById('color').value
    return document.getElementById('myparagraph').innerHTML = `${year} ${make} ${color} ${model}`
}

let tom = new newCar();
function getSpeed() {
  document.getElementById('myparagraph2').innerHTML = tom.getSpeed();
}

function accelerate(){
  tom.accelerate();
  document.getElementById('myparagraph2').innerHTML = tom.getSpeed();
}
function brake(){
  tom.brake();
  document.getElementById('myparagraph2').innerHTML = tom.getSpeed();
}
