// var bobsphoto = <img src='https://static.pexels.com/photos/91227/pexels-photo-91227.jpeg'>;
// var marysphoto = <img src='https://pixabay.com/p-2591795/?no_redirect'>;
// var carsonsphoto = <img src='https://pxhere.com/en/photo/614827'>;
// var kevinsphoto = <img src='https://i.pinimg.com/736x/12/aa/a2/12aaa2fa0b7d6aa2e3f633bd3ced0102--pretty-people-with-freckles-boys-with-freckles.jpg'>;
// var sharonsphotos = <img src='http://maxpixel.freegreatpicture.com/Person-Homeless-Woman-Life-People-Poverty-Street-845710'>;

var currentState = {
  availableGreetings: [{
    {bob: document.getElementById('bob').innerHTML = <img src='https://static.pexels.com/photos/91227/pexels-photo-91227.jpeg'>},
    {mary: document.getElementById('mary').innerHTML = <img src='https://pixabay.com/p-2591795/?no_redirect'>},
    {carson: document.getElementById('carson').innerHTML = <img src='https://pxhere.com/en/photo/614827'>},
    {kevin: document.getElementById('kevin').innerHTML = <img src='https://i.pinimg.com/736x/12/aa/a2/12aaa2fa0b7d6aa2e3f633bd3ced0102--pretty-people-with-freckles-boys-with-freckles.jpg'>},
    {sharon: document.getElementById('sharon').innerHTML = <img src='http://maxpixel.freegreatpicture.com/Person-Homeless-Woman-Life-People-Poverty-Street-845710'>}
  ],
  greetingIndex: 0
}

var element = document.getElementById('greeting');
element.innerHTML = "Hello " +currentState.availableGreetings[currentState.greetingIndex];

function greetNext(){
  currentState.greetingIndex += 1;

  //we need to check to see if we are at the last greeting, and circle around to first if so
  if(currentState.greetingIndex == currentState.availableGreetings.length){
    currentState.greetingIndex = 0;
  }

  //update the dom with new greeting
  var element = document.getElementById('greeting');
  element.innerHTML = "Hello " +currentState.availableGreetings[currentState.greetingIndex];
}
