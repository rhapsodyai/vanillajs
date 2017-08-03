window.addEventListener("load",initAll,false);

var currImg = 0;
var captionText = [
  "Driving across Mt. Shasta.",
  "A panel discussion that I attended.",
  "Gearing up for a panel presentation.",
  "Trying out being blonde.",
  "Moscone Center in San Francisco.",
  "Enjoying fully immersive 360 degree VR at GDC.",
  "At the Yokai Watch: Wibble Wobble Booth.",
  "At the Clash of Clans Booth.",
  "Great to be back!"
];

function initAll() {
  document.getElementById("imgText").innerHTML = captionText[currImg];
  document.getElementById("prevLink").addEventListener("click",function() {newSlide(-1);}, false);
  document.getElementById("nextLink").addEventListener("click",function() {newSlide(1);}, false);
}

function newSlide(direction) {
  var imgCt = captionText.length;

  currImg = currImg + direction;
  if(currImg < 0) {
    currImg = imgCt-1;
  }
  if(currImg == imgCt) {
    currImg = 0;
  }
  document.getElementById("slideshow").src = "images/slideImg" + currImg + ".jpg";
  document.getElementById("imgText").innerHTML = captionText[currImg];
}
