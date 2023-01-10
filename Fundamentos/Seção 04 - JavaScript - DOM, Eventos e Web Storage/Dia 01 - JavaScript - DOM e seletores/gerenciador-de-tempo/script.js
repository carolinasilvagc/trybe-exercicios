const header = document.getElementById("header-container");

const footer = document.getElementById("footer-container");

const emergencySection = document.getElementsByClassName("emergency-tasks");

const nonEmergencySection = document.getElementsByClassName("no-emergency-tasks");

const emergencyTitles = document.querySelectorAll(".emergency-tasks div h3");

const nonEmergencyTitles = document.querySelectorAll(".no-emergency-tasks div h3");

header.style.backgroundColor = "rgb(0, 176, 105)";
footer.style.backgroundColor = "rgb(0, 53, 51)";

emergencySection[0].style.backgroundColor = "rgb(255, 159, 132)";
nonEmergencySection[0].style.backgroundColor = "rgb(249, 219, 94)";

emergencyTitles[0].style.backgroundColor = "rgb(165, 0, 243)";
emergencyTitles[1].style.backgroundColor = "rgb(165, 0, 243)";
nonEmergencyTitles[0].style.backgroundColor = "rgb(35, 37, 37)";
nonEmergencyTitles[1].style.backgroundColor = "rgb(35, 37, 37)";
