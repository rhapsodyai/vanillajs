window.onload = initAll;
var xhr = false;

function initAll() {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) { }
        }
    }

    if (xhr) {
        xhr.onreadystatechange = showPictures;
        xhr.open("GET", "C:\wamp\www\flickrfeed.xml", true);
        xhr.send(null);
    }
    else {
        alert("Sorry, but I couldn't create an XMLHttpRequest");
    }
}

function showPictures() {
    var tempDiv = document.createElement("div");
    var tempText = document.createElement("div");

    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var allImages = xhr.responseXML.getElementsByTagName("content");

            for (var i=0; i<allImages.length; i++) {
                tempText.innerHTML = allImages[i].textContent;
                tempDiv = tempText.getElementsByTagName("p");

                var theText = tempDiv[1].innerHTML;
                theText = theText.replace(/240/g,"75");
                theText = theText.replace(/180/g,"75");
                theText = theText.replace(/_m/g,"_s");
                document.getElementById("pictureBar").innerHTML += theText;
            }
        }
        else {
            alert("There was a problem with the request " + xhr.status);
        }
    }
}
