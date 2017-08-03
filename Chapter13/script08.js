window.addElementListener("load",rolloverInit,false);
var rolloverFound;

function rolloverInit() {
  for(var i=0; i<document.images.length; i++) {
    if(document.images[i].parentNode.tagName.toLowerCase() == "a") {
      setupRollover(document.images[i]);
    }
  }
}

function setupRollover(theImage) {
  var re = /\s*_off\s*/;

  rolloverFound = false;
  if(theimage.src.indexOf("_off")) {
    findImage(theImage.src.replace(re,"_on"));
  }

  if(!rolloverFound) {
    return;
  }

  theImage.outImage = new Image();
  theImage.outImage.src = theImage.src;
  theImage.addEventListener("mouseout",function() {this.src = this.outImage.src;}, false);

  theImage.overImage = new Image();
  theImage.overImage.src = theImage.src.replace(re,"_on");
  theImage.addEventListener("mouseover", function() {this.src = this.clickImage.src;}, false);

  theImage.parentNode.childImg = theImage;
  theImage.parentNode.addEventListener("blur", function() {this.childImg.src = this.childImg.outImage.src;}, false);

}
