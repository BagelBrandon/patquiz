function checkIt() {
  // Initialize scores
  var bron = 0;
  var curry = 0;
  var ant = 0;
  var kobe = 0;
  var shaq = 0;
  var gee = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'bron') {
        bron++;
      }
      else if (e.value == 'curry') {
        curry++;
      }
      else if (e.value == 'ant') {
        ant++;
      }
      else if (e.value == 'kobe') {
        kobe++;
      }
      else if (e.value == 'shaq') {
        shaq++;
      }
      else if (e.value == 'gee') {
        gee++;
      }
    }
  }


  // Determine result
  var counts = "bron: " + bron + ", " +
               "curry: " + curry  + ", " +
               "ant: " + ant  + ", " +
               "kobe: " + kobe  + ", " +
               "shaq: " + shaq  + ", " +
               "gee: " + gee;

  // What is the highest value?
  var max = Math.max(bron, curry, ant, kobe, shaq, gee);

  // Form a message
  var message;

  if (max == bron) {
    message = "You're LeBron. Have fun carrying.";
  }
  else if (max == curry) {
    message = "You're Steph Curry. So you like 3s huh?";
  }
  else if (max == ant) {
    message = "You're Kevin Durant. I guess you're pretty wish washy huh?";
  }
  else if (max == kobe) {
    message = "You are Kobe Bryant. You love yourself more than anyone.";
  }
  else if (max == shaq) {
  message = "You're Shaquille O'Neil. You love Shaqtin' a fool.";
  }
  else if (max == gee) {
    message = "You're Javele McGee. You're not a star and never will be, just like him.";
  }

  // Display result
  document.getElementById('result').innerHTML = message;
  // document.getElementById('result').innerHTML = message;
}
