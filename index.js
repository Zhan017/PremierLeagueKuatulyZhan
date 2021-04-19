function revealMessage() {
  document.getElementById("hiddenMessage").style.display= "block";
  document.getElementById("hiddenMessage").style.color= "white";
  document.getElementById("hiddenMessage").style.backgroundColor= "#37003c";
}

function closeMessage() {
  document.getElementById("hiddenMessage").style.display= "none";
}

function tickets() {
  var currentVal = document.getElementById("countDownButton").innerHTML;
  var newVal = currentVal -1;
  document.getElementById("countDownButton").innerHTML = newVal;
}

document.getElementById("playSound").addEventListener("click",function () {
  var audio = new Audio("sound/PremierLeagueTheme.mp3");
  audio.play();
});

document.getElementById("stopSound").addEventListener("click",function () {
audio.pause();
});

document.getElementById("result").addEventListener("click",function () {
  var team1 = prompt("I will calculate the winning chance of team 1. Write first football team");
  var team2 = prompt("Enter the name of second team");
  const resultM = Math.floor(Math.random() * 100) + 1;
  if(resultM > 70) {
  alert("The probability that " + team1 + " will defeat " + team2 + " is a " + resultM + "%. There is a great chance to win!");
}
else{
  alert("The probability that " + team1 + " will defeat " + team2 + " is a " + resultM + "%. It will be difficult to win :(");
}
});

//Get the button:
const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})
