window.onload = initAll;

function initAll() {
  document.getElementById("redirect").oncliclk = initRedirect;
}

function initRedirect() {
  alert("We are not resposible for the contentofpages outside our site");
  window.location = this;
  return false;
}
