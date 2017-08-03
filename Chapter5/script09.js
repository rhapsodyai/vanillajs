window.onload = newWinLinks;

function newWinLinks() {
  for(var i=0; i<document.links.length; i++) {
    if(document.links[i].className == "newWin") {
      document.links[i].onclick = newWindow;
    }
  }
}

function newWindow() {
  var catWindow = window.open("images/pixel1.jpg","catWin","width=350,height=260");
  catWindow.focus();
  return false;
}
