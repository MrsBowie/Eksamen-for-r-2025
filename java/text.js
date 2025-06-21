
function popup() {
  alert("Denne funktion er desværre gået ned, vi arbejder på at fikse den så hurtigt som muligt!");
}

function displayeng() {
    document.getElementById("maintekst").style.display = "none";
    document.getElementById("engelsktekst").style.display = "block";
    document.getElementById("sprog").style.backgroundColor = "#984670";
    document.getElementById("sprog2").style.backgroundColor = "#f764b0";
    
    document.getElementByClass("goback").innerHTML = "Go back";
}

function displayda() {
    document.getElementById("maintekst").style.display = "block";
    document.getElementById("engelsktekst").style.display = "none";
    document.getElementById("sprog2").style.backgroundColor = "#984670";
    document.getElementById("sprog").style.backgroundColor = "#f764b0";

    document.getElementByClass("goback").innerHTML = "Tilbage";
}

