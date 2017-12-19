var passWordChecker = function () {
  var capitalLetter = [
      'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
      'P','Q','R','S','T','U','V','W','X','Y','Z'
    ];
  var userName = prompt('Enter a Username: ')
    while (userName.length < 5) {
      alert('Username length must be at least 5 characters.')
      var userName = prompt('Enter a Username: ')
    }
    function cap(el) {
      return capitalLetter.includes(el);
    }
    let atLeast1Capital = function() {
      return passWord.split("").some(cap);
    }
  var passWord = prompt('Enter a Password: ')
    while (passWord.length < 8 || !atLeast1Capital()){
      alert('Password length must be at least 8 characters and contain at least 1 capital letter')
      var passWord = prompt('Enter a Password: ')
    }
}
