(function () {
  var speakGoodBye = {}; 
  var speakHello = {}; 

  speakGoodBye.speak = function (name) {
    console.log("Goodbye " + name);
  };

  speakHello.speak = function (name) {
    console.log("Hello " + name);
  };

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      speakGoodBye.speak(names[i]);
    } else {
      speakHello.speak(names[i]);
    }
  }
}());
