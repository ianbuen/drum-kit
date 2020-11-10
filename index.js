var buttons = document.querySelectorAll("button");

// create new HTML Audio Element
var audio = new Audio();

// Add Click Listener to each button
for (var i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", function () {
    animateButton(this.innerHTML);
    audio.src = getAudioFileName(this.innerHTML);

    audio.play();
  });

}

// Add Keyboard Listener to Webpage
document.addEventListener("keydown", function (event) {

  // Check if the pressed key is a 'substring' of "wasdjkl"
  // Example: is the 'w' key listed in "wasdjkl" string? (Returns TRUE)
  if ("wasdjkl".includes(event.key)) {

    // Select the button using its class name that matches with the pressed key
    var drumButton = document.querySelector("." + event.key);

    // Send a click trigger, redirect to the previous Click Listener
    drumButton.click();
  }

});


// Function to compose audio filename based on the selected button/key
function getAudioFileName(key) {

  var fileName = "sounds/";

  switch(key) {
    case 'w': fileName += "tom-1"; break;
    case 'a': fileName += "tom-2"; break;
    case 's': fileName += "tom-3"; break;
    case 'd': fileName += "tom-4"; break;
    case 'j': fileName += "snare"; break;
    case 'k': fileName += "crash"; break;
    case 'l': fileName += "kick-bass"; break;
  }

  return fileName + ".mp3";
}

function animateButton(key) {

    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");
    activeButton

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 200);
}
