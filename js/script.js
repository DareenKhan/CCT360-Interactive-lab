// CCT360 Interactive Lab
// Mouse, keyboard, and time actions.

// MOUSE ACTION
function changeInterest(interest) {

  if (interest == "design") {
    document.getElementById("interestTitle").innerHTML = "Design";
    document.getElementById("interestText").innerHTML =
      "I enjoy UI/UX design, Figma, visual layouts, and creating websites that feel polished and easy to use.";
  }

  if (interest == "gaming") {
    document.getElementById("interestTitle").innerHTML = "Gaming";
    document.getElementById("interestText").innerHTML =
      "Gaming is one of my main interests. I enjoy games like Clair Obscur: Expedition 33, Dota 2, Valorant, Assassin's Creed, and more.";
  }

  if (interest == "leadership") {
    document.getElementById("interestTitle").innerHTML = "Leadership";
    document.getElementById("interestText").innerHTML =
      "I enjoy organizing teams, helping people work together, and taking responsibility for projects and events.";
  }
}


// KEYBOARD ACTION
document.addEventListener("keydown", function(event) {

  if (event.key == "1") {
    document.getElementById("modeNumber").innerHTML = "01";
    document.getElementById("modeTitle").innerHTML = "Student";
    document.getElementById("modeText").innerHTML =
      "I study Digital Enterprise Management at the University of Toronto Mississauga and will be graduating in 2028.";
  }

  if (event.key == "2") {
    document.getElementById("modeNumber").innerHTML = "02";
    document.getElementById("modeTitle").innerHTML = "Designer";
    document.getElementById("modeText").innerHTML =
      "I enjoy working with Figma, Adobe XD, web layouts, visual design, and digital interfaces.";
  }

  if (event.key == "3") {
    document.getElementById("modeNumber").innerHTML = "03";
    document.getElementById("modeTitle").innerHTML = "Leader";
    document.getElementById("modeText").innerHTML =
      "I enjoy organizing projects, working with teams, and taking on leadership responsibilities.";
  }

});


// TIME ACTION
function changeByTime() {

  let hour = new Date().getHours();

  if (hour < 12) {
    document.getElementById("greeting").innerHTML = "Good morning!";
    document.getElementById("timeMessage").innerHTML =
      "Starting the day with classes, design work, and new ideas.";
    document.body.className = "morning";
  }

  else if (hour < 18) {
    document.getElementById("greeting").innerHTML = "Good afternoon!";
    document.getElementById("timeMessage").innerHTML =
      "I'm usually somewhere between classes, projects, and whatever I'm working on next.";
    document.body.className = "afternoon";
  }

  else {
    document.getElementById("greeting").innerHTML = "Good evening!";
    document.getElementById("timeMessage").innerHTML =
      "Time to unwind with gaming, design, or a creative project.";
    document.body.className = "evening";
  }

}

changeByTime();
