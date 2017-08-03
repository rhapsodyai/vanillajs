window.onload = newWinLinks;

function newWinLinks() {
  for(var i=0; i<document.links.length; i++) {
    if(documents.links[i].className == "newWin") {
      document.links[i].onclick = newWindow;
    }
  }
}

function newWindow() {
  var catWindow = window.open(this.href,"catWin","window=350,height=260");
  catWindow.focus();
  return false;
}
