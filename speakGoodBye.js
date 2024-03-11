(function (window) {
  var speakGoodBye = {}; 
  var speakWord = "GoodBye"; 
  speakGoodBye.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  window.speakGoodBye = speakGoodBye; 
})(window);
