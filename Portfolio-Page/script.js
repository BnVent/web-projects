var toggleOn = true;
var toggleButton = document.getElementById("toggle-button");
var prevScrollpos = window.pageYOffset;
var x = document.getElementById("toggle");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var cvBtn = document.getElementById("cv-button");
var cvModal = document.getElementById("cv-modal");


if(window.innerWidth<=835)
{
  toggleOn = false;
}

else{
  toggleOn = true;
}

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(toggleOn)
  {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
  prevScrollpos = currentScrollPos;
} 

toggleButton.onclick = function(){

  if(x.style.display == "block")
  {
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}


cvBtn.onclick = function (){
  cvModal.style.display = "block";
}

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  cvModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == cvModal)
  {
    cvModal.style.display = "none";
  }
}