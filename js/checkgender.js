function checkIt() {
  // Initialize scores
  var male = 0;
  var female = 0;
  var transm = 0;
  var transf = 0;
  var drag = 0;
  var heli = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'male') {
        male++;
      }
      else if (e.value == 'female') {
        female++;
      }
      else if (e.value == 'transm') {
        transm++;
      }
      else if (e.value == 'transf') {
        transf++;
      }
      else if (e.value == 'drag') {
        drag++;
      }
      else if (e.value == 'heli') {
        heli++;
      }
    }
  }


  // Determine result
  var counts = "male: " + male + ", " +
               "female: " + female  + ", " +
               "transm: " + transm  + ", " +
               "transf: " + transf  + ", " +
               "drag: " + drag  + ", " +
               "heli: " + heli;

  // What is the highest value?
  var max = Math.max(male, female, transm, transf, drag, heli);

  // Form a message
  var message;

  if (max == male) {
    message = "You're a male, have fun with your extra rights.";
  }
  else if (max == female) {
    message = "So, you're a female. Hit me up with them digits.";
  }
  else if (max == transm) {
    message = "You are a transgender male. Welcome to the winning team.";
  }
  else if (max == transf) {
    message = "You're a transgender female. So like, did it hurt?";
  }
  else if (max == drag) {
    message = "You are a drag queen! You're pretty darn fabulous, SLAY!";
  }
  else if (max == heli) {
    message = "You're gender is attack helicopter. You are a true lord of memes.";
  }

  // Display result
  document.getElementById('result').innerHTML = message;
  // document.getElementById('result').innerHTML = message;
}
