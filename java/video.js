

function vid1() {
  document.getElementById("endovid2").style.display = "none";
  document.getElementById("goback").style.display = "none";
  document.getElementById("buttonx").style.display = "block";
  document.getElementById("endovid").style.width = "60%";
  document.getElementById("endovid").style.height = "auto";

  vid1.play();
}

function vid2() {
  document.getElementById("endovid").style.display = "none";
  document.getElementById("goback").style.display = "none";
  document.getElementById("buttonx").style.display = "block";
  document.getElementById("endovid2").style.width = "60%";
  document.getElementById("endovid2").style.height = "auto";

  vid2.play();
}

function videoscreen() {
  document.getElementById("endovid").style.display = "block";
  document.getElementById("endovid2").style.display = "block";
  document.getElementById("goback").style.display = "block";
  document.getElementById("buttonx").style.display = "none";
  document.getElementById("endovid").style.width = "40%";
  document.getElementById("endovid").style.height = "auto";
  document.getElementById("endovid2").style.width = "40%";
  document.getElementById("endovid2").style.height = "auto";
}